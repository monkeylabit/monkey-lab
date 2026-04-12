"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Farmacia Demo",
        category: "E-Commerce / Salute",
        image: "/assets/images/portfolio/portfolio_pharmacy.png",
        description: "E-commerce completo per farmacia con catalogo prodotti, gestione ricette e prenotazioni online.",
        tags: ["React", "Medical"],
        link: "https://farmacia-demo.pages.dev/",
        accentColor: "from-emerald-400/20 to-teal-600/20",
        tagColor: "text-emerald-400",
    },
    {
        title: "Dental Studio",
        category: "Studio Medico",
        image: "/assets/images/portfolio/portfolio_dental.png",
        description: "Sito vetrina moderno per studio dentistico con presentazione servizi e prenotazione appuntamenti.",
        tags: ["Next.js", "Tailwind", "Healthcare"],
        link: "https://dentalstudio.pages.dev/",
        accentColor: "from-cyan-400/20 to-blue-600/20",
        tagColor: "text-cyan-400",
    },
    {
        title: "Studio Legale Demo",
        category: "Legale / Corporate",
        image: "/assets/images/portfolio/portfolio_law.png",
        description: "Sito professionale per studio legale con aree di competenza, profili avvocati e contatti.",
        tags: ["Corporate", "UI/UX", "Professional"],
        link: "https://studio-legale-demo1.netlify.app",
        accentColor: "from-purple-400/20 to-pink-600/20",
        tagColor: "text-purple-400",
    }
];

export function PortfolioSection() {
    return (
        <section id="portfolio" className="py-24 relative overflow-hidden">
            {/* Top divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Background */}
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Label chip */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-medium tracking-wider uppercase mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_6px_#f472b6]" />
                        I nostri lavori
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
                        Portfolio
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                        Alcune demo dei nostri progetti — o scrivici in privato per vedere il portfolio completo.
                    </p>
                </motion.div>

                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 scrollbar-hide overscroll-x-contain">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex-shrink-0 w-[82vw] md:w-auto snap-center"
                        >
                            <Link
                                href={project.link}
                                target="_blank"
                                className="group relative overflow-hidden rounded-2xl bg-[#0a0a0f] border border-white/[0.07] hover:border-white/20 transition-all duration-400 block shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10`} />

                                {/* Image */}
                                <div className="aspect-video relative overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-75 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />

                                    {/* Hover arrow overlay */}
                                    <div className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 z-20">
                                        <ArrowUpRight className="w-4 h-4 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 relative z-20">
                                    <div className="mb-4">
                                        <span className={`text-xs font-semibold uppercase tracking-wider mb-2 block ${project.tagColor}`}>
                                            {project.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-500 text-sm mb-5 line-clamp-2 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-3 py-1 bg-white/[0.04] rounded-full text-gray-400 border border-white/[0.06] group-hover:border-white/10 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
