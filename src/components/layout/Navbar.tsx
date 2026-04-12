"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Chi Siamo", href: "#chi-siamo" },
        { name: "Servizi", href: "#servizi" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contatti", href: "#contatti" },
    ];

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            scrolled
                ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                : "bg-transparent border-b border-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link href="/#hero" className="flex items-center gap-2 group">
                            <img
                                src="/assets/monkey-logo-v3.png"
                                alt="Monkey Lab Logo"
                                className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-space-grotesk tracking-wide">
                                MONKEY LAB
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg text-sm font-medium group"
                            >
                                <span className="relative z-10">{link.name}</span>
                                <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-colors duration-200" />
                            </Link>
                        ))}
                        <Link
                            href="#contatti"
                            className="ml-4 relative px-6 py-2.5 rounded-full text-sm font-bold text-white overflow-hidden group"
                        >
                            {/* Gradient background */}
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 transition-opacity duration-300" />
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            {/* Glow */}
                            <span className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-shadow duration-300" />
                            <span className="relative z-10">Inizia Ora</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={cn(
                "md:hidden transition-all duration-300 overflow-hidden",
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            )}>
                <div className="px-4 pt-2 pb-4 space-y-1 bg-black/90 backdrop-blur-xl border-b border-white/10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 hover:text-white hover:bg-white/5 block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-2">
                        <Link
                            href="#contatti"
                            onClick={() => setIsOpen(false)}
                            className="relative flex items-center justify-center w-full px-5 py-3 rounded-xl text-base font-bold text-white overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600" />
                            <span className="relative z-10">Inizia Ora</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
