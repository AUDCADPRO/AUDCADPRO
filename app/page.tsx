"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CookiePrefsLink from "./components/CookiePrefsLink";

// --- Enlaces externos ---
const TELEGRAM_URL = "https://t.me/AUDCAD_PRO_MARIO"; // <-- tu enlace real

// Icono Telegram (SVG)
function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M9.04 15.52 8.8 19.2c.45 0 .65-.2.88-.43l2.12-2.04 4.4 3.22c.8.44 1.38.2 1.6-.74l2.9-13.6c.25-1.18-.45-1.64-1.22-1.36L2.8 8.6c-1.16.45-1.14 1.1-.2 1.4l4.1 1.28 9.5-6c.45-.28.86-.12.52.16l-7.68 6.92z"
      />
    </svg>
  );
}

export default function LandingAUDCADPRO() {
  const [openRisk, setOpenRisk] = useState(false);

  // ---- FB Pixel: evento de clic a Telegram ----
  function trackTelegram() {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("trackCustom", "Telegram_Click");
    }
  }
  // ---------------------------------------------

  const features = [
    { title: "Algoritmo conservador", desc: "Gestión del riesgo prioritaria, lógica cuantitativa y control de exposición en AUDCAD." },
    { title: "100% automático", desc: "Ejecución continua, vigilada y monitorizada constantemente. Responsabilidad y seriedad." },
    { title: "Transparencia", desc: "Histórico verificable y reporte mensual con métricas clave." },
  ];

  const steps = [
    { n: 1, title: "Abre cuenta en VT Markets", desc: "Crea tu cuenta real y completa la verificación de identidad." },
    { n: 2, title: "Conecta el copy", desc: "Sigue nuestro enlace y vincula tu cuenta al algoritmo AUDCAD PRO." },
    { n: 3, title: "Elige tu riesgo", desc: "Configura el tamaño de copia y límites de pérdida según tu perfil." },
  ];

  // KPIs (edítalos cuando quieras)
  const kpis = {
    monthly: "5.19%",   // Myfxbook: Monthly
    drawdown: "5.49%",  // Myfxbook: Drawdown
    winrate: "49%",     // Myfxbook
  };

  // Días activo (inicio real: 2022-09-20)
  const startDate = new Date("2022-09-20T00:00:00Z");
  const daysActive = Math.floor((Date.now() - startDate.getTime()) / 86_400_000);

  const faqData = [
    { q: "¿Qué es AUDCAD PRO?", a: "Es una estrategia de copytrading centrada en el par AUDCAD. Ejecuta una lógica algorítmica conservadora con reglas definidas de riesgo y transparencia de resultados a través de Myfxbook." },
    { q: "¿Dónde se verifican los resultados?", a: "Publicamos la cuenta en Myfxbook (plataforma de auditoría de resultados). Desde tu panel puedes ver crecimiento, drawdown y métricas clave." },
    { q: "¿Necesito abrir cuenta en un broker específico?", a: "Usamos VT Markets por estabilidad y costes. Si prefieres otro broker compatible con MT4/MT5 y copy, consúltanos para confirmar requisitos técnicos." },
    { q: "¿Quién mantiene la custodia de mi dinero?", a: "Tú. El capital siempre está en tu cuenta de broker a tu nombre. AUDCAD PRO no custodia fondos ni tiene acceso a retiradas." },
    { q: "¿Puedo parar el copy cuando quiera?", a: "Sí. Puedes pausar o desconectar el copy en cualquier momento desde tu plataforma o pidiéndonos asistencia. También puedes reducir el tamaño de copia." },
    { q: "¿Cuál es el depósito mínimo recomendado?", a: "Recomendamos al menos 500–1.000 € para que la ejecución del copy sea razonable. Con capitales menores la proporcionalidad de lotes puede ser limitada." },
    { q: "¿Qué riesgos existen?", a: "Operar con derivados conlleva alto riesgo. Puede sufrir pérdidas superiores al depósito por apalancamiento. No inviertas dinero que no puedas permitirte perder. Rendimientos pasados no garantizan rendimientos futuros." },
    { q: "¿Qué drawdown máximo ha tenido la estrategia?", a: "Consulta el drawdown histórico en la página de Myfxbook; ahí verás el valor máximo registrado y su evolución." },
    { q: "¿Hay comisiones o costes adicionales?", a: "El broker cobra su spread/commission habitual. La estrategia puede tener una tarifa de performance o suscripción (si aplica). Te informaremos por escrito antes de conectar el copy." },
    { q: "¿En qué plataforma funciona?", a: "Principalmente en MetaTrader (MT4/MT5) a través de sistemas de copia. Te guiaremos en el alta y conexión." },
    { q: "¿Cómo empiezo?", a: "Abre cuenta en el broker con nuestro enlace, verifica tu identidad, deposita, y conecta el copy. En la web verás el botón “Conectar en VT Markets” con las instrucciones." },
    { q: "¿Ofrecéis asesoramiento financiero?", a: "No. Brindamos información general y la ejecución de una estrategia de copy. No es una recomendación personalizada. Si tienes dudas, consulta con un asesor independiente." }
  ];

  // Estado del envío del formulario
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (res.ok) {
        setStatus('ok');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-700">
        <div className="mx-auto max-w-7xl px-4 py-5
                        flex flex-wrap items-center justify-between gap-3">
          {/* Marca */}
          <a href="/" className="flex items-center gap-3 min-w-0">
            <img
              alt="AUDCAD PRO"
              width={56}
              height={56}
              className="h-14 w-14 rounded-xl object-cover shadow-sm"
              src="/icon.png"
            />
            <span className="ml-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-100 tracking-wide">
              AUDCAD <span className="text-teal-300">PRO</span>
            </span>
          </a>

          {/* Navegación (solo en desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#features" className="hover:text-white">Estrategia</a>
            <a href="#performance" className="hover:text-white">Resultados</a>
            <a href="#how" className="hover:text-white">Cómo empezar</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>

          {/* CTA */}
          <a
            href="https://vtm.pro/nq2Aza"
            className="order-3 w-full sm:w-auto text-center
                       inline-flex items-center rounded-xl border border-teal-500/40
                       px-4 py-2 text-sm font-medium text-teal-100 hover:bg-teal-600/10"
          >
            Conectar en VT Markets
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(20,184,166,0.20),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-semibold leading-tight"
            >
              Copytrading serio y transparente <span className="text-teal-300">en AUDCAD</span>
            </motion.h1>
            <p className="mt-4 text-neutral-300 max-w-xl">
              Ejecutado por <strong>AUDCAD PRO</strong> en el broker VT Markets. Enfoque conservador, reglas claras y reportes mensuales.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://vtm.pro/nq2Aza"
                className="rounded-2xl bg-teal-600/80 hover:bg-teal-600 px-5 py-3 text-sm font-medium"
              >
                Empezar ahora
              </a>
              <button
                onClick={() => setOpenRisk(true)}
                className="rounded-2xl border border-neutral-700 px-5 py-3 text-sm font-medium hover:bg-neutral-900"
              >
                Leer aviso de riesgos
              </button>
            </div>
            <div className="mt-8 flex items-center gap-8 text-xs text-neutral-400">
              <div>
                <div className="font-semibold text-neutral-200">Broker</div>
                VT Markets (entorno regulado)
              </div>
              <div>
                <div className="font-semibold text-neutral-200">Par</div>
                AUDCAD (Forex)
              </div>
              <div>
                <div className="font-semibold text-neutral-200">Estrategia</div>
                Algorítmica conservadora
              </div>
            </div>
          </div>

          {/* WIDGET MYFXBOOK */}
          <div className="relative">
            <div className="aspect-video rounded-3xl bg-neutral-900/70 border border-neutral-800 p-2">
              <div className="h-full w-full rounded-xl overflow-hidden bg-white">
                <a
                  href="https://www.myfxbook.com/members/JmarioFX/aud-cad-pro/11648035"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", width: "100%", height: "100%" }}
                >
                  <img
                    src="https://widget.myfxbook.com/widget/widget.png?accountOid=11648035&type=6"
                    alt="Estadísticas AUDCAD PRO en Myfxbook"
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </a>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 hidden md:block rounded-2xl bg-neutral-900/70 border border-neutral-800 px-4 py-3 text-xs text-neutral-300">
              MyFxbook — Datos Auditados (REAL)
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Estrategia y principios</h2>
        <p className="mt-2 text-neutral-300 max-w-3xl">
          Diseñada para priorizar la estabilidad: control de exposición, gestión del riesgo y ejecución disciplinada en un único par.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
              <div className="text-teal-300 font-medium">{f.title}</div>
              <div className="mt-2 text-neutral-300 text-sm">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PERFORMANCE */}
      <section id="performance" className="mx-auto max-w-7xl px-4 pb-8">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h3 className="text-xl md:text-2xl font-semibold">Resultados y métricas</h3>
            <a
              href="https://www.myfxbook.com/members/JmarioFX/aud-cad-pro/11648035"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm text-teal-300 hover:underline"
            >
              Ver informes
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M13 7H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6" />
                <path d="M15 3h6v6" />
                <path d="M21 3l-9 9" />
              </svg>
            </a>
          </div>

          <div className="mt-4 grid md:grid-cols-4 gap-4 text-sm">
            <Metric label="Rentabilidad (mensual)" value={kpis.monthly} hint="Myfxbook · último mes" />
            <Metric label="Máx. drawdown" value={kpis.drawdown} hint="Myfxbook" />
            <Metric label="Win rate" value={kpis.winrate} hint="Myfxbook · Estadísticas" />
            <Metric label="Días activo el copy" value={String(daysActive)} hint="cálculo automático" />
          </div>

          <div className="mt-6 rounded-xl border border-neutral-800 overflow-hidden bg-white">
            <a
              href="https://www.myfxbook.com/members/JmarioFX/aud-cad-pro/11648035"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="https://widget.myfxbook.com/widget/widget.png?accountOid=11648035&type=3"
                alt="Estadísticas AUDCAD PRO en Myfxbook"
                width={1200}
                height={800}
                loading="lazy"
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-7xl px-4 py-16">
        <h3 className="text-2xl md:text-3xl font-semibold">Cómo empezar en 3 pasos</h3>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
              <div className="text-teal-300 font-semibold">Paso {s.n}</div>
              <div className="mt-1 font-medium">{s.title}</div>
              <div className="mt-2 text-sm text-neutral-300">{s.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex gap-3">
          <a href="https://vtm.pro/nq2Aza" className="rounded-2xl bg-teal-600/80 hover:bg-teal-600 px-5 py-3 text-sm font-medium">Conectar ahora</a>
          <a href="#contact" className="rounded-2xl border border-neutral-700 px-5 py-3 text-sm font-medium hover:bg-neutral-900">Hablar antes</a>
        </div>

        <div className="mt-3">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackTelegram}
            className="inline-flex items-center gap-2 text-sm text-teal-300 hover:underline"
          >
            <TelegramIcon className="h-4 w-4" />
            Únete al grupo en Telegram
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-16">
        <h3 className="text-2xl md:text-3xl font-semibold">Preguntas frecuentes</h3>
        <div className="mt-6 divide-y divide-neutral-800">
          {faqData.map((item, idx) => (
            <details key={idx} className="group py-4">
              <summary className="cursor-pointer list-none select-none flex items-start justify-between text-left text-base md:text-lg font-medium text-neutral-100">
                <span>{item.q}</span>
                <span className="ml-4 text-neutral-500 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-neutral-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-4 pb-20">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h3 className="text-2xl md:text-3xl font-semibold">¿Hablamos?</h3>
          <p className="mt-2 text-neutral-300 text-sm">Escríbenos para dudas, verificación de métricas o acompañamiento en el alta.</p>

          <form
            action="https://formspree.io/f/myzplpzg"
            method="POST"
            onSubmit={handleSubmit}
            className="mt-6 grid md:grid-cols-3 gap-3"
          >
            {/* Nombre */}
            <div className="md:col-span-1">
              <label className="sr-only" htmlFor="name">Nombre</label>
              <input
                id="name"
                name="name"
                required
                className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm w-full"
                placeholder="Nombre"
              />
            </div>

            {/* Email */}
            <div className="md:col-span-1">
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm w-full"
                placeholder="Email"
              />
            </div>

            {/* Mensaje */}
            <div className="md:col-span-3">
              <label className="sr-only" htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm w-full"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            {/* Honeypot anti-spam (oculto) */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            {/* Asunto opcional */}
            <input type="hidden" name="_subject" value="Nuevo mensaje desde audcadpro.es" />

            {/* Consentimiento GDPR */}
            <div className="md:col-span-3">
              <label className="flex items-start gap-2 text-xs text-neutral-300">
                <input type="checkbox" name="consent" required className="mt-1" />
                <span>
                  He leído y acepto la <a className="underline" href="/privacidad">Política de Privacidad</a>.
                </span>
              </label>
            </div>

            {/* Botón de envío */}
            <div className="md:col-span-3">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="rounded-xl bg-teal-600/80 hover:bg-teal-600 disabled:opacity-60 px-4 py-3 text-sm font-medium"
              >
                {status === 'sending' ? 'Enviando…' : 'Enviar'}
              </button>
            </div>

            {/* Mensajes de estado */}
            <div className="md:col-span-3" role="status" aria-live="polite">
              {status === 'ok' && <p className="text-green-400 text-sm mt-2">¡Gracias! Te responderemos en breve.</p>}
              {status === 'error' && <p className="text-red-400 text-sm mt-2">Ups, hubo un problema. Inténtalo de nuevo.</p>}
            </div>
          </form>

          <p className="mt-3 text-xs text-neutral-500">
            Al enviar aceptas nuestra <a className="underline" href="/privacidad">Política de Privacidad</a>.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div className="md:col-span-2">
            <div className="font-semibold">AUDCAD PRO</div>
            <p className="mt-2 text-neutral-400 max-w-md">
              Copytrading en AUDCAD con enfoque conservador y comunicación clara. Este sitio no constituye asesoramiento financiero.
            </p>
          </div>

          {/* Legal */}
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-2 space-y-1 text-neutral-400">
              <li><a href="/privacidad" className="hover:underline">Política de privacidad</a></li>
              <li><a href="/aviso-legal" className="hover:underline">Aviso legal</a></li>
              <li><a href="/cookies" className="hover:underline">Política de cookies</a></li>
              <li><CookiePrefsLink className="hover:underline" /></li>
              <li><button onClick={() => setOpenRisk(true)} className="hover:underline">Riesgos</button></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">Síguenos</div>
            <ul className="mt-2 space-y-1 text-neutral-400">
              <li>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackTelegram}
                  className="hover:underline"
                >
                  Telegram
                </a>
              </li>
              <li><a href="#" className="hover:underline">YouTube</a></li>
              <li><a href="#" className="hover:underline">X (Twitter)</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-neutral-500 pb-8">
          © {new Date().getFullYear()} audcadpro.es — Todos los derechos reservados.
        </div>
      </footer>

      {/* MODAL RISK */}
      {openRisk && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" onClick={() => setOpenRisk(false)}>
          <div className="max-w-2xl w-full rounded-2xl border border-neutral-700 bg-neutral-900 p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">Aviso de riesgos</h4>
              <button onClick={() => setOpenRisk(false)} className="text-neutral-400">✕</button>
            </div>
            <div className="mt-3 text-sm text-neutral-300 space-y-3">
              <p>El trading de CFDs y productos derivados es complejo y conlleva un alto riesgo de perder dinero rápidamente debido al apalancamiento. Considera si comprendes cómo funcionan y si puedes permitirte asumir el alto riesgo de perder tu dinero.</p>
              <p>El rendimiento pasado no garantiza resultados futuros. AUDCAD PRO no ofrece asesoramiento financiero ni recomendaciones personalizadas.</p>
              <p>Siempre ajusta tu tamaño de copia y límites de pérdida a tu situación personal.</p>
            </div>
            <div className="mt-5 text-right">
              <button onClick={() => setOpenRisk(false)} className="rounded-xl bg-teal-600/80 hover:bg-teal-600 px-4 py-2 text-sm font-medium">Entendido</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Metric({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
      <div className="text-xs text-neutral-400">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
      {hint && <div className="text-[11px] text-neutral-500">{hint}</div>}
    </div>
  );
}

function ReportCard({ title, href, note }: { title: string; href: string; note?: string }) {
  return (
    <a href={href} className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 hover:bg-neutral-900">
      <div className="font-medium">{title}</div>
      {note && <div className="mt-1 text-xs text-neutral-400">{note}</div>}
      <div className="mt-4 text-xs text-neutral-500">PDF</div>
    </a>
  );
}
