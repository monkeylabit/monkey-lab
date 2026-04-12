import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - Monkey Lab",
  description: "Informativa sulla privacy del sito Monkey Lab, ai sensi del GDPR.",
};

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden pt-24 pb-16">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-digex-cyan/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-digex-pink/10 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-gray-300">
        <Link href="/" className="inline-flex items-center gap-2 text-digex-cyan hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Torna alla Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none prose-headings:font-space-grotesk prose-headings:text-white prose-a:text-digex-cyan">
          <p className="lead text-xl text-gray-400 mb-8">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#c084fc]">1. Titolare del Trattamento</h2>
            <p>
              Ai sensi dell'art. 4 e 24 del Reg. UE 2016/679 (GDPR), il Titolare del trattamento dei dati è:
              <br />
              <strong>Monkey Lab Agency</strong>
              <br />
              Email: monkeylab.it@gmail.com
              <br />
              Telefono: +39 3505334036
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#c084fc]">2. Dati Raccolti e Finalità del Trattamento</h2>
            <p>Raccogliamo e trattiamo i Suoi dati personali (es. nome, email) per le seguenti finalità:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Rispondere alle richieste ricevute tramite i moduli di contatto (es. preventivi e informazioni commerciali).</li>
              <li>Migliorare l'esperienza di navigazione sul Sito (vedi Cookie Policy).</li>
              <li>Adempiere ad obblighi di legge, contabili e fiscali.</li>
            </ul>
            <p className="mt-4">
              La base giuridica del trattamento è rappresentata dal legittimo interesse, dall'esecuzione di misure precontrattuali e dal Suo consenso (ove richiesto, es. per i cookie).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#c084fc]">3. Modalità del Trattamento e Conservazione</h2>
            <p>
              I trattamenti sono svolti mediante strumenti informatici e/o telematici, con modalità strettamente correlate alle finalità indicate e in modo da garantire la sicurezza e la riservatezza dei dati stessi. I dati saranno conservati per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti e in ogni caso nel rispetto dei termini di legge.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#c084fc]">4. Condivisione dei Dati</h2>
            <p>
              I Suoi dati personali non saranno diffusi, ma potranno essere comunicati a soggetti esterni che operano in qualità di Responsabili del Trattamento (es. fornitori di servizi hosting o piattaforme di invio email) strettamente per lo svolgimento delle attività legate ai nostri Servizi.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#c084fc]">5. I Diritti dell'Interessato</h2>
            <p>
              In base al GDPR (Artt. 15-22), in ogni momento Lei ha il diritto di:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Chiedere l'accesso ai propri dati personali.</li>
              <li>Chiederne la rettifica, la cancellazione o la limitazione del trattamento.</li>
              <li>Opporsi al processing o esercitare il diritto alla portabilità.</li>
              <li>Revocare il consenso in qualsiasi momento (senza pregiudicare la liceità del trattamento basata sul consenso prestato prima della revoca).</li>
            </ul>
            <p className="mt-4">
              Per esercitare tali diritti, La preghiamo di contattare il Titolare all'indirizzo email: <strong>monkeylab.it@gmail.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
