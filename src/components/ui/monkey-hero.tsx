"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

// Starfield canvas background
function StarField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const stars: { x: number; y: number; r: number; alpha: number; speed: number }[] = [];
        for (let i = 0; i < 180; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.2 + 0.2,
                alpha: Math.random() * 0.7 + 0.1,
                speed: Math.random() * 0.3 + 0.05,
            });
        }

        let animId: number;
        function draw() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach((s) => {
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 220, 255, ${s.alpha})`;
                ctx.fill();
                s.alpha += (Math.random() - 0.5) * 0.02;
                s.alpha = Math.max(0.05, Math.min(0.9, s.alpha));
            });
            animId = requestAnimationFrame(draw);
        }
        draw();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}

export function MonkeyHero() {
    return (
        <div id="hero" className="relative h-[100dvh] w-full bg-[#030305] overflow-hidden flex items-center justify-center">

            {/* Starfield */}
            <StarField />

            {/* Ambient glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Top-center purple haze */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-700/15 rounded-full blur-[120px]" />
                {/* Bottom-left cyan */}
                <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
                {/* Bottom-right pink */}
                <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-pink-500/8 rounded-full blur-[100px]" />
            </div>

            {/* Palm Trees - Left */}
            <motion.img
                src="/assets/monkey_hero/palm_tree.png"
                alt="Palm Tree"
                className="absolute -left-10 md:left-0 bottom-0 w-48 md:w-80 opacity-70 z-10"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 0.7 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            />
            <motion.img
                src="/assets/monkey_hero/palm_tree.png"
                alt="Palm Tree"
                className="absolute -left-20 md:-left-10 -bottom-20 w-32 md:w-64 opacity-40 z-0 blur-[3px]"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 0.4 }}
                transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
            />

            {/* Palm Trees - Right */}
            <motion.img
                src="/assets/monkey_hero/palm_tree.png"
                alt="Palm Tree"
                className="absolute -right-10 md:right-0 bottom-0 w-48 md:w-80 opacity-70 z-10 scale-x-[-1]"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 0.7 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            />
            <motion.img
                src="/assets/monkey_hero/palm_tree.png"
                alt="Palm Tree"
                className="absolute -right-20 md:-right-10 -bottom-20 w-32 md:w-64 opacity-40 z-0 blur-[3px] scale-x-[-1]"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 0.4 }}
                transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
            />

            {/* Vines */}
            <motion.div
                className="absolute top-0 left-0 z-30 w-32 md:w-48 lg:w-64 origin-top-left"
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image src="/assets/vine-1.png" alt="Vine Left" width={300} height={600} className="object-contain opacity-90" />
            </motion.div>
            <motion.div
                className="absolute top-0 right-0 z-30 w-32 md:w-48 lg:w-64 origin-top-right"
                animate={{ rotate: [0, -2, 0, 2, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <Image src="/assets/vine-2.png" alt="Vine Right" width={300} height={600} className="object-contain opacity-90" />
            </motion.div>

            {/* Floating Bananas */}
            {[...Array(5)].map((_, i) => (
                <motion.img
                    key={i}
                    src="/assets/monkey_hero/banana.png"
                    alt="Floating Banana"
                    className="absolute w-10 md:w-14 opacity-25 z-0"
                    initial={{ x: Math.random() * 1000 - 500, y: 800, rotate: 0 }}
                    animate={{ y: -500, rotate: 360, x: Math.random() * 1000 - 500 }}
                    transition={{ duration: 18 + Math.random() * 10, repeat: Infinity, ease: "linear", delay: i * 2.5 }}
                />
            ))}

            {/* Central Content */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto w-full">

                {/* Floating Monkey */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, y: [0, -18, 0] }}
                    transition={{
                        scale: { duration: 0.9, ease: "easeOut" },
                        opacity: { duration: 0.9 },
                        y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="mb-6 relative w-28 h-28 sm:w-36 sm:h-36 md:w-60 md:h-60"
                >
                    {/* Multi-layer glow */}
                    <div className="absolute inset-0 bg-purple-600/20 blur-[60px] rounded-full animate-pulse" />
                    <div className="absolute inset-4 bg-cyan-400/10 blur-[40px] rounded-full" />
                    <img
                        src="/assets/images/monkey-hero-new.png"
                        alt="Monkey Lab Mascot"
                        className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_40px_rgba(168,85,247,0.6)]"
                    />
                </motion.div>

                {/* Brand Text */}
                <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                    className="mb-6"
                >
                    <h1 className="font-sans font-bold tracking-tight leading-none drop-shadow-2xl">
                        <span className="block text-3xl sm:text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-400 mb-3">
                            MONKEY LAB
                        </span>
                        <span className="block text-base sm:text-xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-light tracking-wide">
                            Costruiamo il tuo futuro digitale
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-xl font-light leading-relaxed mb-8"
                >
                    Siti web professionali, e-commerce e automazioni AI.<br className="hidden md:block" />
                    <span className="text-white/60">Il tuo sito online — gratis, paghi solo se ti piace.</span>
                </motion.p>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 6, 0] }}
                transition={{ opacity: { delay: 1.5, duration: 0.8 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
            >
                <span className="text-xs font-light tracking-widest uppercase">Scopri</span>
                <ChevronDown className="w-4 h-4" />
            </motion.div>
        </div>
    );
}
