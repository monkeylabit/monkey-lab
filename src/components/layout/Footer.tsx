import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-black border-t border-white/10 pt-16 pb-8 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-digex-cyan/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-digex-pink/5 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2dd4bf] to-[#c084fc] font-space-grotesk">
                                MONKEY LAB
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Trasformiamo la tua visione in realtà digitale.
                            Siti web, e-commerce e automazioni AI per far crescere il tuo business.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors group">
                                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-[#c084fc] transition-colors" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors group">
                                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-[#2dd4bf] transition-colors" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors group">
                                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-[#c084fc] transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Esplora</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#chi-siamo" className="text-gray-400 hover:text-[#2dd4bf] transition-colors text-sm">
                                    Chi Siamo
                                </Link>
                            </li>
                            <li>
                                <Link href="#servizi" className="text-gray-400 hover:text-[#2dd4bf] transition-colors text-sm">
                                    I Nostri Servizi
                                </Link>
                            </li>
                            <li>
                                <Link href="#portfolio" className="text-gray-400 hover:text-[#2dd4bf] transition-colors text-sm">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="#contatti" className="text-gray-400 hover:text-[#2dd4bf] transition-colors text-sm">
                                    Contatti
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Servizi</h3>
                        <ul className="space-y-4">
                            <li>
                                <span className="text-gray-400 text-sm hover:text-[#c084fc] transition-colors cursor-default">
                                    Sviluppo Web
                                </span>
                            </li>
                            <li>
                                <span className="text-gray-400 text-sm hover:text-[#c084fc] transition-colors cursor-default">
                                    E-Commerce
                                </span>
                            </li>
                            <li>
                                <span className="text-gray-400 text-sm hover:text-[#c084fc] transition-colors cursor-default">
                                    Automazione AI
                                </span>
                            </li>
                            <li>
                                <span className="text-gray-400 text-sm hover:text-[#c084fc] transition-colors cursor-default">
                                    SEO & Performance
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contatti</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-[#2dd4bf] mt-0.5" />
                                <span className="text-gray-400 text-sm">monkeylab.it@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex gap-2">
                                    {/* WhatsApp Icon SVG */}
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366] mt-0.5" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                </div>
                                <span className="text-gray-400 text-sm">+39 3505334036</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Globe className="w-5 h-5 text-[#2dd4bf] mt-0.5" />
                                <span className="text-gray-400 text-sm">www.monkeylab.it</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © {currentYear} Monkey Lab Agency. Tutti i diritti riservati.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</Link>
                        <Link href="/cookie-policy" className="text-gray-500 hover:text-white text-xs transition-colors">Cookie Policy</Link>
                        <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Termini e Condizioni</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
