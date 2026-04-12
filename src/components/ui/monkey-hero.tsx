"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
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

                {/* CTA Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
                >
                    {/* Primary CTA — gradient */}
                    <a
                        href="#contatti"
                        className="group relative w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-base text-white overflow-hidden shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.55)] transition-shadow duration-300 text-center"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 transition-opacity duration-300" />
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10 flex items-center gap-2">
                            Inizia Ora
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>

                    {/* Secondary CTA — WhatsApp */}
                    <a
                        href="https://wa.me/393505334036"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white font-medium text-base transition-all backdrop-blur-sm flex items-center justify-center gap-2.5"
                    >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Scrivici su WhatsApp
                    </a>
                </motion.div>
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
