"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

const vertexShader = `
    attribute float aIsInput;
    varying vec2 vUv;
    varying vec3 vWorldPos;
    varying vec3 vNormal;
    varying float vIsInput;
    varying float vDist;

    void main() {
        vUv = uv;
        vIsInput = aIsInput;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPos = worldPos.xyz;
        vDist = length(worldPos.xyz);
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
`;

const fragmentShader = `
    uniform float uTime;
    uniform float uPulseProgress;
    uniform float uActivation;
    uniform vec3 uCameraPos;

    varying vec2 vUv;
    varying vec3 vWorldPos;
    varying vec3 vNormal;
    varying float vIsInput;
    varying float vDist;

    float hash(vec3 p) {
        p = fract(p * 0.3183099 + .1);
        p *= 17.0;
        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
    }
    float noise(vec3 x) {
        vec3 i = floor(x);
        vec3 f = fract(x);
        f = f*f*(3.0-2.0*f);
        return mix(
            mix(mix(hash(i+vec3(0,0,0)),hash(i+vec3(1,0,0)),f.x),
                mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
            mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),
                mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);
    }
    vec3 palette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
        return a + b * cos(6.28318*(c*t+d));
    }

    void main() {
        vec3 viewDir = normalize(uCameraPos - vWorldPos);
        float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 3.0);
        float n1 = noise(vWorldPos * 0.5 + uTime * 0.2);
        float n2 = noise(vWorldPos * 2.0 - uTime * 0.5);

        vec3 baseColor = vec3(0.01, 0.018, 0.03) + (vec3(0.08, 0.22, 0.28) * fresnel * n1);
        baseColor *= (0.5 + 0.5 * n2);

        vec3 pulseColor = vec3(0.0);
        if (vIsInput > 0.5 && uPulseProgress > -5.0) {
            float pDist  = abs(vDist - uPulseProgress);
            float core   = exp(-pDist * pDist * 3.0);
            float trail  = smoothstep(6.0, 0.0, vDist - uPulseProgress) * smoothstep(-2.0, 0.0, uPulseProgress - vDist);
            float pi     = max(core * 3.0, trail * 1.5);
            pulseColor   = vec3(3.5, 1.0, 0.1) * pi * (0.8 + 0.2*n2);
        }

        vec3 actColor = vec3(0.0);
        if (uActivation > 0.0) {
            float distFromWave = vDist - uActivation;
            float waveFront    = exp(-pow(distFromWave, 2.0) * 0.2) * step(0.0, -distFromWave);
            float residual     = smoothstep(uActivation, uActivation - 25.0, vDist);
            float actIntensity = waveFront * 4.0 + residual * 1.5;
            actIntensity      *= (0.6 + 0.4 * noise(vWorldPos * 1.5 - uTime * 2.0));

            vec3 dir    = normalize(vWorldPos);
            float angle = atan(dir.z, dir.x);
            vec3 rainbow = palette(
                angle * 0.15 + vDist * 0.05 - uTime * 0.5,
                vec3(0.5,0.5,0.5), vec3(0.5,0.5,0.5),
                vec3(1.0,1.0,1.0), vec3(0.00,0.33,0.67)
            );
            actColor = rainbow * actIntensity * 1.5;
            if (vDist < 4.0) {
                float somaFlash = exp(-pow(uActivation * 0.2, 2.0)) * 2.5;
                actColor += vec3(1.0, 0.9, 0.8) * somaFlash;
            }
        }

        gl_FragColor = vec4(baseColor + pulseColor + actColor, 1.0);
    }
`;

export default function NeuralSynapse() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const w = container.clientWidth;
        const h = container.clientHeight;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x00000a);
        scene.fog = new THREE.FogExp2(0x00000f, 0.022);

        const camera = new THREE.PerspectiveCamera(52, w / h, 0.1, 1000);
        camera.position.set(0, 8, 45);

        const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.04;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.7;
        controls.enablePan = false;
        controls.maxDistance = 80;

        const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 1.5, 0.4, 0.85);
        bloomPass.threshold = 1.0;
        bloomPass.strength  = 1.5;
        bloomPass.radius    = 0.8;

        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        composer.addPass(bloomPass);

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime:          { value: 0 },
                uPulseProgress: { value: -10.0 },
                uActivation:    { value: 0 },
                uCameraPos:     { value: new THREE.Vector3() },
            },
            transparent: false,
            depthWrite: true,
            side: THREE.FrontSide,
        });

        const structureGroup = new THREE.Group();
        scene.add(structureGroup);

        function createWanderingPath(
            start: THREE.Vector3, dir: THREE.Vector3, length: number,
            segments: number, jitter: number, endPoint?: THREE.Vector3
        ) {
            const pts = [start.clone()];
            let curr = start.clone();
            let cDir = dir.clone().normalize();
            for (let i = 0; i < segments; i++) {
                cDir.x += (Math.random() - 0.5) * jitter;
                cDir.y += (Math.random() - 0.5) * jitter;
                cDir.z += (Math.random() - 0.5) * jitter;
                cDir.normalize();
                curr = curr.clone().add(cDir.clone().multiplyScalar(length / segments));
                pts.push(curr);
            }
            if (endPoint) {
                pts[pts.length - 1] = endPoint.clone().add(new THREE.Vector3(-1.5, 0, 0));
                pts.push(endPoint.clone());
            }
            return new THREE.CatmullRomCurve3(pts);
        }

        function taperGeometry(geo: THREE.TubeGeometry, baseRadius: number, isInput: boolean) {
            const pos  = geo.attributes.position as THREE.BufferAttribute;
            const norm = geo.attributes.normal   as THREE.BufferAttribute;
            const uv   = geo.attributes.uv       as THREE.BufferAttribute;
            for (let i = 0; i < pos.count; i++) {
                const t = isInput ? 1.0 : 1.0 - uv.getX(i);
                const shrink = baseRadius * (1.0 - Math.pow(t, 0.6));
                pos.setXYZ(i,
                    pos.getX(i) - norm.getX(i) * shrink,
                    pos.getY(i) - norm.getY(i) * shrink,
                    pos.getZ(i) - norm.getZ(i) * shrink,
                );
            }
            geo.computeVertexNormals();
        }

        function addBranch(curve: THREE.CatmullRomCurve3, radius: number, isInput: boolean) {
            const geo = new THREE.TubeGeometry(curve, Math.floor(curve.getLength() * 3), radius, 12, false);
            taperGeometry(geo, radius, isInput);
            geo.setAttribute("aIsInput", new THREE.BufferAttribute(new Float32Array(geo.attributes.position.count).fill(isInput ? 1.0 : 0.0), 1));
            structureGroup.add(new THREE.Mesh(geo, material));
            return curve;
        }

        // Soma
        const somaRadius = 3.3;
        const somaGeo = new THREE.IcosahedronGeometry(somaRadius, 16);
        const somaPos = somaGeo.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < somaPos.count; i++) {
            const v = new THREE.Vector3().fromBufferAttribute(somaPos, i);
            const n = Math.sin(v.x*2)*Math.cos(v.y*2)*Math.sin(v.z*2)*0.5 + Math.sin(v.x*5+v.y*3)*0.2;
            v.add(v.clone().normalize().multiplyScalar(n));
            somaPos.setXYZ(i, v.x, v.y, v.z);
        }
        somaGeo.computeVertexNormals();
        somaGeo.setAttribute("aIsInput", new THREE.BufferAttribute(new Float32Array(somaPos.count).fill(0.0), 1));
        structureGroup.add(new THREE.Mesh(somaGeo, material));

        // Input axon
        addBranch(
            createWanderingPath(new THREE.Vector3(-45, 0, 0), new THREE.Vector3(1, 0, 0), 46, 30, 0.05, new THREE.Vector3(-somaRadius * 0.1, 0, 0)),
            0.6, true
        );

        // Dendrites
        for (let i = 0; i < 18; i++) {
            let phi = Math.random() * Math.PI * 2;
            const theta = Math.acos(Math.random() * 2 - 1);
            if (Math.cos(phi) * Math.sin(theta) < -0.3)
                phi = phi > Math.PI ? phi - Math.PI : phi + Math.PI;
            const startDir = new THREE.Vector3(Math.cos(phi)*Math.sin(theta), Math.sin(phi)*Math.sin(theta), Math.cos(theta));
            const start = startDir.clone().multiplyScalar(somaRadius * 0.8);
            const length = 20 + Math.random() * 30;
            const mainRadius = 0.4 + Math.random() * 0.3;
            const mainCurve = addBranch(createWanderingPath(start, startDir, length, 25, 0.4), mainRadius, false);
            for (let j = 0; j < Math.floor(Math.random() * 4) + 2; j++) {
                const t = 0.2 + Math.random() * 0.6;
                const bStart = mainCurve.getPoint(t);
                const tangent = mainCurve.getTangent(t);
                const rv = new THREE.Vector3(Math.random()-.5, Math.random()-.5, Math.random()-.5).normalize();
                const bDir = tangent.clone().cross(rv).normalize().add(tangent.multiplyScalar(0.5)).normalize();
                addBranch(createWanderingPath(bStart, bDir, (1-t)*length*(0.4+Math.random()*0.4), 15, 0.6), mainRadius*(1-t)*0.8, false);
            }
        }

        // Dust
        function makeParticles(count: number, spread: number, colorHex: number, size: number, opacity: number) {
            const geo = new THREE.BufferGeometry();
            const pos = new Float32Array(count * 3);
            for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * spread;
            geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
            return new THREE.Points(geo, new THREE.PointsMaterial({ color: colorHex, size, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true }));
        }
        const dustA = makeParticles(1200, 120, 0x224466, 0.08, 0.25);
        const dustB = makeParticles(400,   90, 0x003355, 0.16, 0.18);
        const dustC = makeParticles(120,   60, 0x00aacc, 0.30, 0.12);
        scene.add(dustA, dustB, dustC);

        // Animation state
        let state = 0, pulseProg = -10.0, actProg = 0.0;
        const INPUT_LENGTH = 45.0;

        const handleClick = () => {
            if (state !== 0) return;
            state = 1; pulseProg = INPUT_LENGTH; actProg = 0.0;
            material.uniforms.uActivation.value = 0.0;
        };
        container.addEventListener("click", handleClick);

        const clock = new THREE.Clock();
        let animId: number;

        function animate() {
            animId = requestAnimationFrame(animate);
            const delta = clock.getDelta();

            controls.update();
            dustA.rotation.y += delta * 0.008; dustA.rotation.x += delta * 0.003;
            dustB.rotation.y -= delta * 0.005; dustB.rotation.z += delta * 0.002;
            dustC.rotation.y += delta * 0.015;

            material.uniforms.uTime.value += delta;
            material.uniforms.uCameraPos.value.copy(camera.position);

            if (state === 1) {
                pulseProg -= delta * 35.0;
                material.uniforms.uPulseProgress.value = pulseProg;
                if (pulseProg <= 2.0) {
                    state = 2; pulseProg = -10.0;
                    material.uniforms.uPulseProgress.value = -10.0;
                    actProg = 0.0;
                }
            } else if (state === 2) {
                actProg += delta * 20.0;
                material.uniforms.uActivation.value = actProg;
                if (actProg > 75.0) {
                    state = 0; material.uniforms.uActivation.value = 0.0;
                }
            }

            composer.render();
        }
        animate();

        const handleResize = () => {
            const nw = container.clientWidth;
            const nh = container.clientHeight;
            camera.aspect = nw / nh;
            camera.updateProjectionMatrix();
            renderer.setSize(nw, nh);
            composer.setSize(nw, nh);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", handleResize);
            container.removeEventListener("click", handleClick);
            renderer.dispose();
            if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-full"
            style={{ cursor: "crosshair" }}
            title="Click to fire action potential"
        />
    );
}
