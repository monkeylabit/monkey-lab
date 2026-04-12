"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_WORDS = ["DIGEX"];

const BRAND_COLORS = [
    { r: 6, g: 182, b: 212 },   // Cyan-500
    { r: 99, g: 102, b: 241 },  // Indigo-500
    { r: 147, g: 51, b: 234 },  // Purple-600
    { r: 236, g: 72, b: 153 },  // Pink-500
];

export function ParticleTextEffect() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let timeoutId: NodeJS.Timeout;

        // Canvas setup
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        // Particle class
        class Particle {
            x: number;
            y: number;
            size: number;
            baseX: number;
            baseY: number;
            density: number;
            color: { r: number; g: number; b: number };

            constructor(x: number, y: number) {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = 2; // Fixed small size for cleaner look
                this.baseX = x;
                this.baseY = y;
                this.density = (Math.random() * 30) + 1;
                // Assign random brand color
                this.color = BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)];
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update(mouse: { x: number | null; y: number | null }) {
                let dx = (mouse.x || 0) - this.x;
                let dy = (mouse.y || 0) - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = 100;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;

                if (distance < maxDistance && mouse.x !== null) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx / 10;
                    }
                    if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy / 10;
                    }
                }
            }
        }

        // Initialize particles from text
        const initParticles = (word: string) => {
            particles = [];
            const fontSize = Math.min(window.innerWidth / 5, 200); // Increased max font size for single word
            ctx!.font = `900 ${fontSize}px sans-serif`; // Changed to standard sans-serif for broader compatibility
            ctx!.fillStyle = "white";
            ctx!.textAlign = "center";
            ctx!.textBaseline = "middle";

            // Draw text to get pixel data
            ctx!.fillText(word, canvas!.width / 2, canvas!.height / 2);

            const textCoordinates = ctx!.getImageData(0, 0, canvas!.width, canvas!.height);

            // Clear canvas after reading data
            ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

            // Create particles where pixels are non-transparent
            // Step increased for performance, decreased for detail. 5 is a good balance.
            for (let y = 0, y2 = textCoordinates.height; y < y2; y += 4) {
                for (let x = 0, x2 = textCoordinates.width; x < x2; x += 4) {
                    if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                        particles.push(new Particle(x, y));
                    }
                }
            }
        };

        // Initialize with first word
        initParticles(DEFAULT_WORDS[currentWordIndex]);

        // Animation loop
        const mouse = { x: null as number | null, y: null as number | null };

        // Track mouse for interaction
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };
        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].draw();
                particles[i].update(mouse);
            }
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();


        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []); // Run once on mount

    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-transparent overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-auto" />
        </div>
    );
}
