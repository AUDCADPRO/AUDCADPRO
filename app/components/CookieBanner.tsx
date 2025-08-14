"use client";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    showCookieBanner?: () => void;
    consentStatus?: () => string | null;
  }
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ads_consent");
    if (!consent) setOpen(true);

    const openHandler = () => setOpen(true);
    window.addEventListener("open-cookie-banner", openHandler);

    // utilidades para depurar desde consola
    window.showCookieBanner = () => setOpen(true);
    window.consentStatus = () => localStorage.getItem("ads_consent");

    return () => {
      window.removeEventListener("open-cookie-banner", openHandler);
      delete window.showCookieBanner;
      delete window.consentStatus;
    };
  }, []);

  const accept = () => {
    localStorage.setItem("ads_consent", "granted");
    window.dispatchEvent(new Event("consent:granted"));
    setOpen(false);
  };

  const reject = () => {
    localStorage.setItem("ads_consent", "denied");
    window.dispatchEvent(new Event("consent:revoked"));
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-neutral-950/95 border-t border-neutral-800 p-4 text-sm text-neutral-200">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p>
          Usamos cookies de analítica/marketing (Meta) para medir y mejorar.
          Consulta la <a className="underline" href="/privacidad">Privacidad</a>.
        </p>
        <div className="flex gap-2 shrink-0">
          <button onClick={reject} className="rounded-lg border border-neutral-700 px-3 py-2">Rechazar</button>
          <button onClick={accept} className="rounded-lg bg-teal-600 hover:bg-teal-500 px-3 py-2">Aceptar</button>
        </div>
      </div>
    </div>
  );
}
