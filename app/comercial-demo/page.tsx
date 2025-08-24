// pages/comercial-demo.tsx  (para Next.js Pages Router)
// Si usas App Router, renómbralo a: app/comercial-demo/page.tsx
import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * AUDCAD PRO – Landing clonable para comerciales (DEMO)
 *
 * ✔ Single-file React component (Tailwind CSS)
 * ✔ Personalización por parámetros de URL o constantes
 * ✔ Botón CTA con enlace VTrade único por comercial
 * ✔ Sección de credenciales / pruebas (iframe Myfxbook opcional)
 * ✔ FAQ + aviso legal
 *
 * 👉 Personaliza por QUERY PARAMS (ideal demo):
 *   ?name=Juan%20Pérez&vtrade=https://...&whatsapp=https://wa.me/...&myfxbook=https://...
 *
 * 👉 O por CONSTANTES de fallback (usa esto en producción si no quieres query params):
 */

const FALLBACK_CONFIG = {
  brand: "AUDCAD PRO",
  agentName: "JMario",
  vtradeLink: "https://social.vtacademy.net/portal/login", // Enlace de oferta personalizada VTrade
  whatsappLink: "https://wa.me/34602099692?text=Hola%20quiero%20info%20del%20copy%20AUDCAD%20PRO",
  myfxbookWidgetSrc: "", // Pega aquí tu iframe src si lo tienes (opcional)
  headline: "Copytrading serio y transparente",
  subheadline:
    "Estrategia auditada, comisiones claras (20% sobre beneficios) y soporte en español.",
  sellingPoints: [
    "Resultados auditados en Myfxbook",
    "Alta y suscripción en minutos",
    "Sin letra pequeña: performance fee del 20%",
  ],
  minDepositText: "Depósito recomendado: 100 USD (o cuenta USC si prefieres centavos)",
};

function useQueryConfig() {
  return useMemo(() => {
    if (typeof window === "undefined") return FALLBACK_CONFIG;
    const p = new URLSearchParams(window.location.search);
    return {
      brand: p.get("brand") || FALLBACK_CONFIG.brand,
      agentName: p.get("name") || FALLBACK_CONFIG.agentName,
      vtradeLink: p.get("vtrade") || FALLBACK_CONFIG.vtradeLink,
      whatsappLink: p.get("whatsapp") || FALLBACK_CONFIG.whatsappLink,
      myfxbookWidgetSrc:
        p.get("myfxbook") || FALLBACK_CONFIG.myfxbookWidgetSrc,
      headline: p.get("headline") || FALLBACK_CONFIG.headline,
      subheadline: p.get("subheadline") || FALLBACK_CONFIG.subheadline,
      sellingPoints: (p.get("points")?.split("|") || FALLBACK_CONFIG.sellingPoints),
      minDepositText: p.get("min") || FALLBACK_CONFIG.minDepositText,
    };
  }, []);
}

export default function AgentLanding() {
  const cfg = useQueryConfig();
  const [copied, setCopied] = useState(false);

  const referral = cfg.vtradeLink;

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1400);
    return () => clearTimeout(t);
  }, [copied]);

  const copyReferral = async () => {
    try {
      await navigator.clipboard.writeText(referral);
      setCopied(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-800">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-zinc-900 text-white grid place-items-center font-semibold">A</div>
            <div className="leading-tight">
              <div className="font-semibold text-zinc-900">{cfg.brand}</div>
              <div className="text-xs text-zinc-500">Presentado por {cfg.agentName}</div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={cfg.whatsappLink}
              className="text-sm px-3 py-1.5 rounded-full border border-zinc-300 hover:bg-zinc-100"
            >
              Contactar
            </a>
            <a
              href={cfg.vtradeLink}
              className="text-sm px-3 py-1.5 rounded-full bg-zinc-900 text-white hover:bg-black"
            >
              Unirse al Copy
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(20,184,166,0.20),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-zinc-900">
              {cfg.headline}
            </h1>
            <p className="mt-4 text-zinc-600 text-lg">{cfg.subheadline}</p>
            <ul className="mt-6 space-y-2 text-zinc-700">
              {cfg.sellingPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={cfg.vtradeLink}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-emerald-600 text-white font-medium hover:bg-emerald-700"
              >
                Unirse al Copy (enlace personalizado)
              </a>
              <a
                href={cfg.whatsappLink}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-zinc-300 hover:bg-zinc-100"
              >
                Hablar con {cfg.agentName}
              </a>
              <button
                onClick={copyReferral}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-zinc-300 hover:bg-zinc-100"
                title="Copiar enlace de suscripción"
              >
                {copied ? "¡Copiado!" : "Copiar enlace"}
              </button>
            </div>
            <p className="mt-3 text-sm text-zinc-500">{cfg.minDepositText}</p>
          </motion.div>

          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}}>
            <div className="relative rounded-2xl border border-zinc-200 bg-white shadow-sm p-4">
              <div className="text-sm font-medium text-zinc-700">Pruebas y transparencia</div>
              <p className="text-sm text-zinc-500">Integración Myfxbook y detalles de la operativa.</p>
              <div className="mt-4 aspect-video rounded-xl border border-zinc-200 overflow-hidden grid place-items-center bg-zinc-50">
                {cfg.myfxbookWidgetSrc ? (
                  <iframe
                    src={cfg.myfxbookWidgetSrc}
                    className="w-full h-full"
                    loading="lazy"
                    title="Myfxbook"
                  />
                ) : (
                  <div className="text-center p-6 text-zinc-500">
                    <div className="font-medium mb-1">Widget de Myfxbook pendiente</div>
                    <div className="text-sm">Pega tu <code>src</code> del iframe en el parámetro <code>myfxbook</code> o en FALLBACK_CONFIG.</div>
                  </div>
                )}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl border border-zinc-200 p-3">
                  <div className="text-xs text-zinc-500">Comisión</div>
                  <div className="font-semibold">20% PF</div>
                </div>
                <div className="rounded-xl border border-zinc-200 p-3">
                  <div className="text-xs text-zinc-500">Copia</div>
                  <div className="font-semibold">Autoscale / Multiply</div>
                </div>
                <div className="rounded-xl border border-zinc-200 p-3">
                  <div className="text-xs text-zinc-500">Broker</div>
                  <div className="font-semibold">VT Markets</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cómo unirse */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid md:grid-cols-3 gap-4">
          {[1,2,3].map((n) => (
            <div key={n} className="rounded-2xl border border-zinc-200 bg-white p-5">
              <div className="h-9 w-9 rounded-xl bg-zinc-900 text-white grid place-items-center font-semibold mb-3">{n}</div>
              {n === 1 && (
                <>
                  <div className="font-semibold mb-1">Crea tu cuenta en el broker</div>
                  <p className="text-sm text-zinc-600">Regístrate y completa KYC (DNI + prueba de domicilio). Tarda pocos minutos.</p>
                </>
              )}
              {n === 2 && (
                <>
                  <div className="font-semibold mb-1">Suscríbete a la oferta</div>
                  <p className="text-sm text-zinc-600">Usa el enlace personalizado del comercial para unirte al copy (VTrade).</p>
                </>
              )}
              {n === 3 && (
                <>
                  <div className="font-semibold mb-1">Empieza a copiar</div>
                  <p className="text-sm text-zinc-600">Elige el modo de copia (Autoscale/Multiply). La comisión es solo sobre beneficios.</p>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <h2 className="text-2xl font-semibold text-zinc-900">Preguntas frecuentes</h2>
        <div className="mt-4 space-y-3">
          <details className="group rounded-2xl border border-zinc-200 bg-white p-5">
            <summary className="cursor-pointer font-medium text-zinc-800">¿Qué comisión pago?</summary>
            <div className="mt-2 text-sm text-zinc-600">El 20% sobre beneficios (performance fee). No hay costes fijos; si no hay beneficio, no hay comisión.</div>
          </details>
          <details className="group rounded-2xl border border-zinc-200 bg-white p-5">
            <summary className="cursor-pointer font-medium text-zinc-800">¿Puedo retirar cuando quiera?</summary>
            <div className="mt-2 text-sm text-zinc-600">Sí. Los depósitos y retiradas se realizan desde tu área de cliente del bróker, según sus condiciones operativas.</div>
          </details>
          <details className="group rounded-2xl border border-zinc-200 bg-white p-5">
            <summary className="cursor-pointer font-medium text-zinc-800">¿Qué modo de copia recomiendan?</summary>
            <div className="mt-2 text-sm text-zinc-600">Autoscale (proporcional) para balance similar; Multiply (clásico) para controlar el riesgo mediante ratio. Depende de tu capital y preferencias.</div>
          </details>
        </div>
      </section>

      {/* Footer / Aviso legal */}
      <footer className="mt-6 border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-zinc-500">
          <div className="mb-2">© {new Date().getFullYear()} {cfg.brand}. Presentado por {cfg.agentName}.</div>
          <p className="leading-relaxed">
            Aviso de riesgo: El trading con productos apalancados conlleva un alto nivel de riesgo y puede no ser adecuado para todos los inversores. Podrías perder más que tu inversión inicial. Nada en esta página constituye asesoramiento financiero. Rendimientos pasados no garantizan resultados futuros. Antes de operar, asegúrate de comprender completamente los riesgos involucrados.
          </p>
        </div>
      </footer>
    </div>
  );
}
