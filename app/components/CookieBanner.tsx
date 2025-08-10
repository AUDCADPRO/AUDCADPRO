"use client";

import { useEffect, useState } from "react";

type Consent = {
  necessary: true;
  analytics: boolean;
  ts: number;
};

const LS_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) {
        setVisible(true);
        return;
      }
      const parsed: Consent = JSON.parse(raw);
      // si existe consentimiento no mostramos banner
      if (!parsed) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const save = (consent: Consent) => {
    localStorage.setItem(LS_KEY, JSON.stringify(consent));
    setVisible(false);
  };

  const acceptAll = () =>
    save({ necessary: true, analytics: true, ts: Date.now() });

  const rejectNonEssential = () =>
    save({ necessary: true, analytics: false, ts: Date.now() });

  const savePrefs = () =>
    save({ necessary: true, analytics, ts: Date.now() });

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pb-6">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/95 backdrop-blur p-4 md:p-5 text-neutral-200 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="md:max-w-[65%]">
              <div className="font-semibold text-neutral-100">
                Usamos cookies
              </div>
              <p className="text-sm text-neutral-300 mt-1">
                Utilizamos cookies necesarias para que el sitio funcione y, si
                nos das permiso, analítica para mejorar la experiencia. Puedes
                cambiar tu elección cuando quieras en “Preferencias de cookies”.
                Más info en nuestra{" "}
                <a href="/cookies" className="underline hover:text-white">
                  política de cookies
                </a>.
              </p>
            </div>

            {!showPrefs ? (
              <div className="flex flex-wrap gap-2 md:gap-3">
                <button
                  onClick={() => setShowPrefs(true)}
                  className="rounded-xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800"
                >
                  Configurar
                </button>
                <button
                  onClick={rejectNonEssential}
                  className="rounded-xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800"
                >
                  Rechazar no esenciales
                </button>
                <button
                  onClick={acceptAll}
                  className="rounded-xl bg-teal-600/90 hover:bg-teal-600 px-4 py-2 text-sm font-medium text-white"
                >
                  Aceptar todo
                </button>
              </div>
            ) : (
              <div className="w-full md:w-auto">
                <div className="rounded-xl border border-neutral-800 p-3 mb-3">
                  <label className="flex items-start gap-3 text-sm">
                    <input
                      type="checkbox"
                      checked
                      disabled
                      className="mt-1"
                    />
                    <span>
                      <span className="font-medium">Necesarias</span> (siempre
                      activas). Requeridas para el funcionamiento básico.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 text-sm mt-3">
                    <input
                      type="checkbox"
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                      className="mt-1"
                    />
                    <span>
                      <span className="font-medium">Analítica</span> (opcional).
                      Nos ayuda a mejorar el sitio.
                    </span>
                  </label>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setShowPrefs(false)}
                    className="rounded-xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800"
                  >
                    Volver
                  </button>
                  <button
                    onClick={rejectNonEssential}
                    className="rounded-xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800"
                  >
                    Rechazar no esenciales
                  </button>
                  <button
                    onClick={savePrefs}
                    className="rounded-xl bg-teal-600/90 hover:bg-teal-600 px-4 py-2 text-sm font-medium text-white"
                  >
                    Guardar preferencias
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
