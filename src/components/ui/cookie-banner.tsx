"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Controllo se l'utente ha già effettuato una scelta sui cookie
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookieConsent", "necessary");
    setIsVisible(false);
  };

  const managePreferences = () => {
    // Per ora lo rendiamo necessario. Un'implementazione reale aprirebbe un modale.
    localStorage.setItem("cookieConsent", "preferences-saved");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-t border-white/10 p-4 sm:p-6 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
        <div className="flex-1 text-gray-300">
          <p className="mb-2">
            <strong>Utilizziamo i cookie</strong> per migliorare la tua esperienza e per le prestazioni del sito. 
            Facendo clic su "Accetta tutti", acconsenti all'uso di tutti i cookie. 
            Selezionando "Solo necessari" acconsenti ai soli cookie tecnici indispensabili. 
            Per maggiori informazioni, consulta la nostra{" "}
            <Link href="/cookie-policy" className="text-digex-cyan hover:underline underline-offset-4">
              Cookie Policy
            </Link>{" "}
            e la nostra{" "}
            <Link href="/privacy-policy" className="text-digex-cyan hover:underline underline-offset-4">
              Privacy Policy
            </Link>.
          </p>
        </div>
        <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-3 mt-4 lg:mt-0 shrink-0">
          <button
            onClick={managePreferences}
            className="w-full sm:w-auto px-4 py-3 sm:py-2 border border-white/20 hover:border-white/40 text-gray-300 hover:text-white rounded-lg transition-colors font-medium cursor-pointer text-center"
          >
            Gestisci preferenze
          </button>
          <button
            onClick={acceptNecessary}
            className="w-full sm:w-auto px-4 py-3 sm:py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-medium cursor-pointer text-center"
          >
            Solo necessari
          </button>
          <button
            onClick={acceptAll}
            className="w-full sm:w-auto px-4 py-3 sm:py-2 bg-digex-cyan hover:bg-[#00b8e6] text-black rounded-lg transition-colors font-semibold cursor-pointer text-center"
          >
            Accetta tutti
          </button>
        </div>
      </div>
    </div>
  );
}
