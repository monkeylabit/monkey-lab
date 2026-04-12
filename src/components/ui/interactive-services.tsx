"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const services = [
    {
        id: "web",
        icon: <Image src="/pc.png" alt="Siti Web Professionali" width={80} height={80} className="w-16 h-16 lg:w-20 lg:h-20 object-contain drop-shadow-md" />,
        title: "Siti Web Professionali",
        shortDesc: "Creiamo il tuo sito web gratis in 24h.",
        fullDesc: (
            <span>
                Se riteniamo che la tua azienda abbia un reale potenziale di crescita grazie ai nostri servizi, realizziamo <strong className="text-white">gratuitamente</strong> il tuo sito web. Se non ti piace, nessun problema
            </span>
        ),
        readMoreContent: (
            <div className="space-y-4 text-left">
                <p>I nostri siti web partono da 199€ e vengono realizzati senza alcun anticipo.</p>
                <p>Costruiamo il progetto completo, curando design, struttura e ottimizzazione per dispositivi mobili, così puoi vedere il risultato finale prima di prendere qualsiasi decisione.</p>
                <p>Solo quando sei soddisfatto scegli di acquistarlo. In questo modo eliminiamo il rischio iniziale e ti permettiamo di investire solo su qualcosa che ti convince davvero.</p>
            </div>
        ),
        features: [
            "Sviluppo Custom con Next.js & React",
            "Ottimizzazione SEO Avanzata",
            "Design Responsivo & Mobile-First",
            "Prestazioni Top (Core Web Vitals)",
            "CMS Intuitivo"
        ],
        video: "/assets/Generami_un_video_1080p_202602101219.mp4",
        color: "text-digex-cyan",
        border: "border-cyan-500/20",
        glow: "from-cyan-500/10 to-blue-600/10",
    },
    {
        id: "ecommerce",
        icon: <Image src="/carrello2.png" alt="E-Commerce Carrello" width={80} height={80} className="w-16 h-16 lg:w-20 lg:h-20 object-contain drop-shadow-md" />,
        title: "E-Commerce",
        shortDesc: "Vendiamo online quello che non vendi in vetrina.",
        fullDesc: "Vendiamo i tuoi prodotti online al posto tuo. Se non hai tempo o voglia di gestire un e-commerce, o se vuoi dare nuova vita agli articoli rimasti in vetrina, ci pensiamo noi. Gestiamo il tuo negozio online dall'inizio alla fine, in cambio di una percentuale sulle vendite.",
        readMoreContent: (
            <div className="space-y-4 text-left">
                <p>Per gli e-commerce lavoriamo con una percentuale sulle vendite.</p>
                <p>Non chiediamo costi fissi iniziali: il nostro guadagno è legato ai risultati che ottieni.</p>
                <p>Realizziamo un negozio online professionale, con sistema di pagamento integrato, struttura ottimizzata per la vendita e un'esperienza utente studiata per aumentare le conversioni. Cresciamo insieme, perché il nostro interesse è far funzionare il tuo business.</p>
            </div>
        ),
        features: [
            "Piattaforme Custom o Shopify",
            "Integrazione Pagamenti Sicuri",
            "Gestione Magazzino & Ordini",
            "Marketing Automation integrata",
            "UX ottimizzata per la vendita"
        ],
        video: "/assets/Generami_un_video_1080p_202602101215.mp4",
        color: "text-digex-pink",
        border: "border-purple-500/20",
        glow: "from-purple-500/10 to-pink-600/10",
    },
    {
        id: "automation",
        icon: <Image src="/cyber.png" alt="AI e Automazione" width={80} height={80} className="w-16 h-16 lg:w-20 lg:h-20 object-contain drop-shadow-md" />,
        title: "AI & Automazione",
        shortDesc: "Ottimizza processi e flussi di lavoro con l'IA.",
        fullDesc: "Creiamo assistenti virtuali che rispondono alle richieste, prendono e organizzano appuntamenti, inviano conferme e promemoria automatici, lavorando per te 24/7",
        readMoreContent: (
            <div className="space-y-4 text-left">
                <p>Ogni richiesta non gestita è un&apos;opportunità che sfuma.</p>
                <p>Creiamo assistenti virtuali, chatbot e automazioni su misura per uffici e attività locali che gestiscono un alto volume di contatti ogni giorno.</p>
                <p>Le nostre soluzioni rispondono automaticamente 24/7, gestiscono le richieste dei clienti, organizzano appuntamenti e ottimizzano i flussi di lavoro, riducendo il tempo perso e migliorando l&apos;efficienza.</p>
                <p>In questo modo puoi concentrarti davvero su ciò che conta: far crescere il tuo business, mentre tutto il resto lavora in automatico.</p>
            </div>
        ),
        features: [
            "Chatbot AI intelligenti 24/7",
            "Workflow automatizzati (Zapier, n8n)",
            "Integrazione CRM & Lead Gen",
            "Email Marketing Automatizzato",
            "Analisi dati e Reporting"
        ],
        video: "/assets/Generami_un_video_1080p_202602101821.mp4",
        color: "text-emerald-400",
        border: "border-emerald-500/20",
        glow: "from-emerald-500/10 to-teal-600/10",
    }
];

export function InteractiveServices() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-10 space-y-16">

            {services.map((service, index) => {
                const isEven = index % 2 === 0;
                return (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className={cn(
                            "flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-6 lg:p-10 rounded-3xl border bg-gradient-to-br",
                            service.border,
                            service.glow,
                            "bg-white/[0.02]"
                        )}
                    >
                        {/* Video — alterna sinistra/destra su desktop */}
                        <div className={cn(
                            "w-full lg:w-1/2 flex-shrink-0",
                            !isEven && "lg:order-last"
                        )}>
                            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src={service.video} type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        {/* Contenuto */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className={cn(service.color)}>
                                    {service.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-white tracking-tight italic">{service.title}</h3>
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                {service.fullDesc}
                            </p>

                            <div className="space-y-3">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-400">
                                        <div className={cn("p-1 rounded-full bg-white/5", service.color)}>
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-sm md:text-base">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => setSelectedService(service)}
                                className="relative w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden group/btn active:scale-95 transition-transform"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 transition-opacity duration-300" />
                                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                                <span className="absolute inset-0 shadow-[0_0_20px_rgba(34,211,238,0.25)] group-hover/btn:shadow-[0_0_30px_rgba(34,211,238,0.45)] transition-shadow rounded-xl" />
                                <span className="relative z-10 flex items-center gap-2">
                                    Scopri di più
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </div>
                    </motion.div>
                );
            })}

            {/* Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-10 max-w-2xl w-full relative shadow-2xl overflow-y-auto max-h-[80vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="mb-6 flex items-center gap-4">
                                <div className={cn(selectedService.color)}>
                                    {selectedService.icon}
                                </div>
                                <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                            </div>

                            <div className="text-gray-300 leading-relaxed text-lg">
                                {selectedService.readMoreContent}
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="relative px-6 py-2.5 rounded-lg font-semibold text-white overflow-hidden group/close"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 transition-opacity duration-300" />
                                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 group-hover/close:opacity-100 transition-opacity duration-300" />
                                    <span className="relative z-10">Chiudi</span>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
