"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Layout, Smartphone, Sparkles, Terminal, Rocket, Settings } from "lucide-react";

export function InnovationShowcase() {
    return (
        <div className="relative w-full max-w-2xl mx-auto group">
            {/* Glow Effects behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000" />

            {/* Browser Window mockup */}
            <div className="relative bg-[#080808]/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">

                {/* Header Bar */}
                <div className="flex items-center gap-4 px-4 py-3 border-b border-white/5 bg-white/5">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>

                    <div className="flex-1 max-w-[200px] mx-auto bg-[#050505] rounded-md px-3 py-1 flex items-center justify-center border border-white/5">
                        <Globe className="w-3 h-3 text-gray-500 mr-2" />
                        <span className="text-[10px] text-gray-400 font-mono">www.monkeylab.it</span>
                    </div>
                </div>

                {/* Browser Body */}
                <div className="p-6 relative">
                    {/* Interactive Animated Sidebar */}
                    <div className="absolute left-4 top-20 flex flex-col gap-3 z-20">
                        {[
                            { name: "layout.tsx", color: "bg-blue-500" },
                            { name: "page.tsx", color: "bg-cyan-500" },
                            { name: "globals.css", color: "bg-purple-500" },
                            { name: "components.json", color: "bg-yellow-500" },
                            { name: "middleware.ts", color: "bg-emerald-500" }
                        ].map((file, i) => (
                            <motion.div
                                key={i}
                                initial={{ width: 24, backgroundColor: "rgba(255,255,255,0.03)" }}
                                whileHover={{
                                    width: 120,
                                    backgroundColor: "rgba(255,255,255,0.08)",
                                    borderColor: "rgba(255,255,255,0.1)"
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="h-8 rounded-md cursor-pointer flex items-center overflow-hidden border border-transparent transition-colors group"
                            >
                                <div className="min-w-[24px] h-full flex items-center justify-center">
                                    <div className={`w-1.5 h-1.5 rounded-full ${file.color} shadow-[0_0_8px_currentColor] opacity-70`} />
                                </div>
                                <span className="text-[10px] font-mono text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                    {file.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Main Content Area */}
                    <div className="ml-12 space-y-4">

                        {/* Header Banner */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className="w-full p-4 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center gap-3 relative overflow-hidden group/banner"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent animate-shimmer" style={{ transform: 'skewX(-20deg)' }} />
                            <Code className="w-5 h-5 text-indigo-400 group-hover/banner:scale-110 transition-transform" />
                            <span className="text-sm font-semibold text-indigo-200">Modern Web Development</span>
                        </motion.div>

                        {/* Grid */}
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { icon: <Sparkles className="w-5 h-5" />, label: "UI/UX", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
                                { icon: <Terminal className="w-5 h-5" />, label: "Code", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                                { icon: <Globe className="w-5 h-5" />, label: "Deploy", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                                { icon: <Settings className="w-5 h-5" />, label: "Optimize", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ delay: i * 0.1, duration: 0.3 }}
                                    className={`p-6 rounded-xl border ${item.border} ${item.bg} flex flex-col items-center justify-center gap-3 transition-all cursor-pointer hover:shadow-[0_0_30px_-5px_currentColor] hover:border-opacity-100 group/card relative overflow-hidden`}
                                    style={{ color: item.bg.replace('bg-', '').replace('/10', '') }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                    <div className={`${item.color} group-hover/card:scale-110 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>
                                    <span className="text-xs font-medium text-gray-400 group-hover/card:text-white transition-colors">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Progress Bar Footer */}
                        <div className="mt-6 pt-4 border-t border-white/5">
                            <div className="flex justify-between text-[10px] text-gray-500 font-mono mb-2">
                                <span>Building...</span>
                                <span>98%</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: "98%" }}
                                    transition={{ duration: 2, ease: "circOut" }}
                                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                                />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
