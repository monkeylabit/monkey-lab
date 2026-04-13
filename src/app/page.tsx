"use client";

import React from "react";
import ASDBackground from "@/components/ui/asd";
import { InnovationShowcase } from "@/components/ui/innovation-showcase";
import { HeroSequence } from "@/components/ui/hero-sequence";
import { InteractiveServices } from "@/components/ui/interactive-services";
import { Zap, Mail, Globe } from "lucide-react";
import { PortfolioSection } from "@/components/ui/portfolio-section";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

// Stats strip data
const stats = [
  { value: "50+", label: "Progetti realizzati" },
  { value: "100%", label: "Soddisfazione clienti" },
  { value: "24h", label: "Consegna prototipo" },
  { value: "0€", label: "Anticipo richiesto" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* GLOBAL BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <ASDBackground className="w-full h-full" />
      </div>

      {/* Hero */}
      <HeroSequence />

      {/* Content wrapper */}
      <div className="relative w-full z-10 bg-transparent">
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-0 pointer-events-none" />

        <div className="relative z-10">

          {/* ─── STATS STRIP ─── */}
          <section className="py-10 relative overflow-hidden">
            {/* Subtle divider line with glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/10 transition-colors"
                  >
                    <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                      {stat.value}
                    </span>
                    <span className="text-xs text-gray-500 mt-1.5 font-medium tracking-wide uppercase">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </section>

          {/* ─── CHI SIAMO ─── */}
          <section id="chi-siamo" className="py-24 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Label chip */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-medium tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
                    La nostra filosofia
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                    Chi Siamo
                  </h2>

                  <div className="text-base md:text-lg text-gray-400 leading-relaxed space-y-4">
                    <p>
                      Ad oggi il 90% del mercato è dominato da un buon posizionamento online. Noi di Monkey Lab ti aiutiamo a trasformare la tua attività in realtà digitale.
                    </p>
                    <p>
                      Se crediamo nel potenziale della tua attività, realizziamo il tuo sito web{" "}
                      <span className="text-white font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">GRATIS</span>
                      {" "}— lo paghi solo se ti piace davvero.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Design unico e personalizzato",
                      "Miglior posizionamento sul web",
                      "Tecnologie moderne e scalabili",
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i, duration: 0.4 }}
                        className="flex items-center gap-3"
                      >
                        <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-cyan-400/10 border border-cyan-400/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                        </span>
                        <span className="text-gray-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="relative w-full"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <InnovationShowcase />
                </motion.div>
              </div>
            </div>
          </section>

          {/* ─── SERVIZI ─── */}
          <section id="servizi" className="py-24 relative">
            {/* Top divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
                  I Nostri Servizi
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                  Dalla progettazione alla realizzazione, offriamo un ecosistema completo di servizi digitali.
                </p>
              </motion.div>

              <InteractiveServices />
            </div>
          </section>

          {/* ─── PORTFOLIO ─── */}
          <PortfolioSection />

          {/* ─── CONTATTI ─── */}
          <section id="contatti" className="py-24 relative">
            {/* Top divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                {/* Card glow border */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-sm" />
                <div className="relative bg-[#07070a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                  {/* Label chip */}
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-medium tracking-wider uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_6px_#f472b6]" />
                      Parlaci del tuo progetto
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                      Lavoriamo Insieme
                    </span>
                  </h2>

                  <p className="text-white italic text-center mb-10">
                    Scrivici anche per un caffè virtuale ☕️
                  </p>

                  {/* Contact options */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    <a
                      href="https://wa.me/393505334036"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-4 bg-white/[0.03] rounded-xl border border-white/[0.08] hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all group cursor-pointer"
                    >
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#25D366] mb-3 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <span className="text-gray-300 text-sm font-medium">+39 3505334036</span>
                      <span className="text-gray-500 text-xs mt-0.5">WhatsApp</span>
                    </a>

                    <a
                      href="mailto:monkeylab.it@gmail.com"
                      className="flex flex-col items-center justify-center p-4 bg-white/[0.03] rounded-xl border border-white/[0.08] hover:border-purple-400/40 hover:bg-purple-400/5 transition-all group cursor-pointer"
                    >
                      <Mail className="w-6 h-6 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 text-sm font-medium">monkeylab.it@gmail.com</span>
                      <span className="text-gray-500 text-xs mt-0.5">Email</span>
                    </a>

                    <div className="flex flex-col items-center justify-center p-4 bg-white/[0.03] rounded-xl border border-white/[0.08] hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all group cursor-pointer">
                      <Globe className="w-6 h-6 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 text-sm font-medium">www.monkeylab.it</span>
                      <span className="text-gray-500 text-xs mt-0.5">Sito Web</span>
                    </div>
                  </div>

                  <ContactForm />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <div className="relative z-50">
            <div className="h-12 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formsubmit.co/ajax/monkeylab.it@gmail.com", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed:", data);
        setError("Qualcosa è andato storto. Riprova più tardi o scrivici direttamente via email.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Si è verificato un errore di connessione. Controlla la tua connessione e riprova.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-10 animate-in fade-in duration-500">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse" />
          <div className="relative w-20 h-20 bg-white/5 border border-cyan-400/30 rounded-full flex items-center justify-center">
            <Zap className="w-9 h-9 text-cyan-400" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Messaggio ricevuto!</h3>
        <p className="text-gray-400">Ti risponderemo entro 24 ore.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-sm text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4"
        >
          Invia un altro messaggio
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot */}
      <input type="text" name="_honey" style={{ display: "none" }} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_subject" value="Nuovo messaggio da Monkey Lab Website" />

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-xs font-medium text-gray-400 uppercase tracking-wider">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="nome"
            required
            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm"
            placeholder="Il tuo nome"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-medium text-gray-400 uppercase tracking-wider">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm"
            placeholder="tua@email.com"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs font-medium text-gray-400 uppercase tracking-wider">
          Messaggio
        </label>
        <textarea
          id="message"
          name="messaggio"
          rows={4}
          required
          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-500/30 transition-all resize-none text-sm"
          placeholder="Raccontaci il tuo progetto..."
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="relative w-full py-4 rounded-xl font-bold text-white overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 transition-opacity duration-300" />
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute inset-0 shadow-[0_0_25px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-shadow duration-300 rounded-xl" />
        <span className="relative z-10">
          {isLoading ? "Invio in corso..." : "Invia Richiesta →"}
        </span>
      </button>
    </form>
  );
}
