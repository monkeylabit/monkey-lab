import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Cookie Policy - Monkey Lab",
  description: "Informativa sui cookie del sito Monkey Lab, ai sensi del Garante Privacy 2021.",
};

export default function CookiePolicy() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden pt-24 pb-16">
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-digex-cyan/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-digex-pink/10 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-gray-300">
        <Link href="/" className="inline-flex items-center gap-2 text-digex-pink hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Torna alla Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-8">Cookie Policy</h1>
        
        <div className="prose prose-invert max-w-none prose-headings:font-space-grotesk prose-headings:text-white prose-a:text-digex-cyan">
          <p className="lead text-xl text-gray-400 mb-8">
             Questo documento informa gli Utenti sulle tecnologie che aiutano Monkey Lab a raggiungere gli scopi descritti nel rispetto delle "Linee guida cookie e altri strumenti di tracciamento" (Garante Privacy 2021).
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#2dd4bf]">1. Cosa sono i Cookie?</h2>
            <p>
              I cookie sono brevi frammenti di testo (lettere e/o numeri) che permettono al server web di memorizzare sul client (il browser) informazioni da riutilizzare nel corso della medesima visita al sito (cookie di sessione) o in seguito, anche a distanza di giorni (cookie persistenti). I cookie vengono memorizzati, in base alle preferenze dell'utente, dal singolo browser sullo specifico dispositivo (computer, tablet, smartphone).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#2dd4bf]">2. Tipologie di Cookie Utilizzati</h2>
            
            <h3 className="text-xl font-medium mt-6 mb-2 text-white">Cookie Tecnici (Strettamente Necessari)</h3>
            <p>
              Questi cookie sono indispensabili per il corretto funzionamento del sito. Consentono la navigazione, la visualizzazione coerente dei contenuti e la memorizzazione del consenso sui cookie stessi. Vengono sempre inviati dal nostro dominio e <strong>non richiedono il consenso</strong> per essere installati.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-2 text-white">Cookie Analitici (Performance)</h3>
            <p>
              Utilizziamo questi cookie per raccogliere informazioni, in forma aggregata e anonima, sul numero degli utenti e su come questi visitano il sito stesso (ad esempio le pagine più visitate, Google Analytics anonimizzato). Essi aiutano ad ottimizzare la piattaforma per fornire una migliore esperienza. L'installazione di questi cookie è <strong>subordinata al Tuo consenso esplicito</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#2dd4bf]">3. Gestione del Consenso</h2>
            <p>
              Al momento del primo accesso ad una qualsiasi pagina del sito, è presente un banner che contiene una breve informativa. Tramite il banner, sei libero di decidere quali categorie di cookie accettare. La scelta può essere modificata in qualsiasi momento cancellando la cache del browser (che rimuoverà il cookie tecnico che salva le tue preferenze) oppure, a breve, mediante un apposito pulsante a piè di pagina.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#2dd4bf]">4. Come disabilitare i Cookie dal Browser</h2>
            <p>
              Oltre a quanto specificato in questo documento, puoi gestire le preferenze relative ai Cookie direttamente all'interno del tuo browser ed impedire – ad esempio – che terze parti possano installarne. Tramite le preferenze del browser puoi inoltre eliminare i Cookie installati in passato.
              Ecco i link alle guide dei principali browser:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 mt-4">
              <li><a href="https://support.google.com/chrome/answer/95647?hl=it" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>
          </section>

           <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#2dd4bf]">5. Titolare del Trattamento</h2>
            <p>
              Monkey Lab Agency<br/>
              Email: monkeylab.it@gmail.com<br/>
              Telefono: +39 3505334036
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
