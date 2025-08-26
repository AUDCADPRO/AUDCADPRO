// app/layout.tsx
import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import CookieBanner from "./components/CookieBanner";
import Script from "next/script";
// import Navbar from "./components/Navbar"; // ⬅️ Eliminado
import TelegramFloat from "./components/TelegramFloat";

/* ===== JSON-LD (FAQ) ===== */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Qué es AUDCAD PRO?", "acceptedAnswer": { "@type": "Answer", "text": "Es una estrategia de copytrading centrada en el par AUDCAD. Ejecuta una lógica algorítmica conservadora con reglas definidas de riesgo y transparencia de resultados a través de Myfxbook." } },
    { "@type": "Question", "name": "¿Dónde se verifican los resultados?", "acceptedAnswer": { "@type": "Answer", "text": "Publicamos la cuenta en Myfxbook (plataforma de auditoría de resultados). Desde tu panel puedes ver crecimiento, drawdown y métricas clave." } },
    { "@type": "Question", "name": "¿Necesito abrir cuenta en un broker específico?", "acceptedAnswer": { "@type": "Answer", "text": "Usamos VT Markets por estabilidad y costes. Si prefieres otro broker compatible con MT4/MT5 y copy, consúltanos para confirmar requisitos técnicos." } },
    { "@type": "Question", "name": "¿Quién mantiene la custodia de mi dinero?", "acceptedAnswer": { "@type": "Answer", "text": "Tú. El capital siempre está en tu cuenta de broker a tu nombre. AUDCAD PRO no custodia fondos ni tiene acceso a retiradas." } },
    { "@type": "Question", "name": "¿Puedo parar el copy cuando quiera?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes pausar o desconectar el copy en cualquier momento desde tu plataforma o pidiéndonos asistencia. También puedes reducir el tamaño de copia." } },
    { "@type": "Question", "name": "¿Cuál es el depósito mínimo recomendado?", "acceptedAnswer": { "@type": "Answer", "text": "Recomendamos al menos 500–1.000 € para que la ejecución del copy sea razonable. Con capitales menores la proporcionalidad de lotes puede ser limitada." } },
    { "@type": "Question", "name": "¿Qué riesgos existen?", "acceptedAnswer": { "@type": "Answer", "text": "Operar con derivados conlleva alto riesgo. Puede sufrir pérdidas superiores al depósito por apalancamiento. No inviertas dinero que no puedas permitirte perder. Rendimientos pasados no garantizan rendimientos futuros." } },
    { "@type": "Question", "name": "¿Qué drawdown máximo ha tenido la estrategia?", "acceptedAnswer": { "@type": "Answer", "text": "Consulta el drawdown histórico en la página de Myfxbook; ahí verás el valor máximo registrado y su evolución." } },
    { "@type": "Question", "name": "¿Hay comisiones o costes adicionales?", "acceptedAnswer": { "@type": "Answer", "text": "El broker cobra su spread/commission habitual. La estrategia puede tener una tarifa de performance o suscripción (si aplica). Te informaremos por escrito antes de conectar el copy." } },
    { "@type": "Question", "name": "¿En qué plataforma funciona?", "acceptedAnswer": { "@type": "Answer", "text": "Principalmente en MetaTrader (MT4/MT5) a través de sistemas de copia. Te guiaremos en el alta y conexión." } },
    { "@type": "Question", "name": "¿Cómo empiezo?", "acceptedAnswer": { "@type": "Answer", "text": "Abre cuenta en el broker con nuestro enlace, verifica tu identidad, deposita, y conecta el copy. En la web verás el botón “Conectar en VT Markets” con las instrucciones." } },
    { "@type": "Question", "name": "¿Ofrecéis asesoramiento financiero?", "acceptedAnswer": { "@type": "Answer", "text": "No. Brindamos información general y la ejecución de una estrategia de copy. No es una recomendación personalizada. Si tienes dudas, consulta con un asesor independiente." } }
  ]
};

/* ===== JSON-LD (Organization & WebSite) ===== */
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AUDCAD PRO",
  "url": "https://www.audcadpro.es",
  "logo": "https://www.audcadpro.es/icon.png",
  "email": "mailto:jandroninvestor@gmail.com",
  "sameAs": ["https://t.me/AUDCAD_PRO_MARIO"],
  "foundingDate": "2022",
  "address": { "@type": "PostalAddress", "addressCountry": "ES" },
  "contactPoint": [{
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "mailto:jandroinvestor@gmail.com",
    "availableLanguage": ["es"]
  }]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AUDCAD PRO",
  "url": "https://www.audcadpro.es"
};

/* ===== METADATA ===== */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.audcadpro.es"),
  title: { default: "AUDCAD PRO — Copytrading serio en AUDCAD", template: "%s | AUDCAD PRO" },
  description:
    "Copytrading transparente en el par AUDCAD con enfoque conservador, reglas claras y métrricas verificables en Myfxbook. Broker: VT Markets.",
  keywords: ["AUDCAD", "copytrading", "forex", "algoritmo", "VT Markets", "Myfxbook", "trading"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.audcadpro.es/",
    siteName: "AUDCAD PRO",
    title: "AUDCAD PRO — Copytrading serio en AUDCAD",
    description:
      "Copytrading en AUDCAD con enfoque conservador y resultados auditados. Transparencia y control del riesgo.",
    images: [{ url: "/og-audcadpro.png", width: 1200, height: 630, alt: "AUDCAD PRO — Resultados auditados" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "AUDCAD PRO — Copytrading serio en AUDCAD",
    description:
      "Resultados auditados en Myfxbook. Enfoque conservador, reglas claras y reportes mensuales.",
    images: ["/og-audcadpro.png"]
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.png", apple: "/apple-icon.png" }
};

/* >>> Mover themeColor a viewport (elimina el warning de Next) <<< */
export const viewport: Viewport = {
  themeColor: "#0f172a"
};

/* ===== Loader del Pixel (se ejecuta tras consentimiento) ===== */
const pixelLoader = `
(function(){
  if (typeof window === 'undefined') return;
  if (window.__fb_pixel_loaded) return;   // evita duplicados
  window.__fb_pixel_loaded = true;

  var id='${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ?? ""}';
  if (!id) return;

  (function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){
    n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; 
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
    s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);
  })(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', id);
  fbq('track','PageView');
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* JSON-LD Organization */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        {/* JSON-LD WebSite */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {/* JSON-LD FAQ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body>
        {/* ⛔ Navbar eliminado. El header ahora vive en app/page.tsx con <SiteMenu /> */}

        {/* Contenido de cada página */}
        {children}

        {/* Botón flotante de Telegram */}
        <TelegramFloat />

        {/* Banner de cookies */}
        <CookieBanner />

        {/* Cargar Pixel al aceptar cookies */}
        <Script id="fb-consent-loader" strategy="afterInteractive">
          {`
            if (localStorage.getItem('ads_consent') === 'granted') {
              ${pixelLoader}
            }
            window.addEventListener('consent:granted', () => { ${pixelLoader} });
            window.addEventListener('consent:revoked', () => {
              if (window.fbq) { window.fbq('consent','revoke'); }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
