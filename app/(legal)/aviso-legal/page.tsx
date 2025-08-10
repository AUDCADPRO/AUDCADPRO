// app/(legal)/aviso-legal/page.tsx
import type { Metadata } from "next";
// Si tienes el componente para reabrir preferencias de cookies:
import CookiePrefsLink from "../../components/CookiePrefsLink";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Información del titular, condiciones de uso, propiedad intelectual y limitación de responsabilidad de audcadpro.es.",
  alternates: { canonical: "/aviso-legal" }, // ← añade esta línea
};


// ---- EDITA SOLO ESTAS CONSTANTES ----
const ORG_NAME = "AUDCAD PRO";
const CONTACT_EMAIL = "jandroinvestor@gmail.com";
const ADDRESS = "SPAIN"; // opcional
const DOMAIN = "https://www.audcadpro.es";
const JURISDICTION = "España";
// --------------------------------------

export default function AvisoLegalPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-neutral-200">
      <h1 className="text-3xl font-semibold">Aviso legal</h1>
<p className="mt-2 text-sm text-neutral-400">
  Última actualización: 10/08/2025
</p>

      <section className="mt-8 space-y-6 leading-relaxed">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">1. Identificación</h2>
          <p className="mt-2">
            Titular del sitio: <strong>{ORG_NAME}</strong>
            <br />
            Sitio web: <a className="underline" href={DOMAIN}>{DOMAIN}</a>
            <br />
            Email:{" "}
            <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            <br />
            {ADDRESS ? <>Dirección: {ADDRESS}</> : <>Dirección: <em>(opcional)</em></>}
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">2. Finalidad del sitio</h2>
          <p className="mt-2">
            Este sitio proporciona información sobre una estrategia de copytrading en AUDCAD y permite
            el contacto con el titular. La información no constituye asesoramiento financiero ni una
            oferta o recomendación personalizada de inversión.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">3. Condiciones de uso</h2>
          <p className="mt-2">
            Te comprometes a utilizar el sitio de forma diligente y lícita, evitando actividades que
            puedan impedir su funcionamiento o dañar los derechos de terceros. El acceso al sitio no
            implica relación comercial alguna.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">4. Propiedad intelectual</h2>
          <p className="mt-2">
            Los contenidos del sitio (textos, logotipos, diseño, etc.) pertenecen a {ORG_NAME} o a
            sus legítimos titulares. No se permite su reproducción, distribución o transformación sin
            autorización expresa.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">5. Limitación de responsabilidad</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              El titular no garantiza la exactitud o actualidad permanente de la información y no se
              responsabiliza de decisiones basadas en ella.
            </li>
            <li>
              El trading con productos derivados conlleva <strong>alto riesgo</strong>. Los rendimientos
              pasados no garantizan resultados futuros.
            </li>
            <li>
              Las métricas mostradas (p. ej., Myfxbook) proceden de plataformas de terceros y pueden
              estar sujetas a disponibilidad o cambios.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">6. Enlaces externos</h2>
          <p className="mt-2">
            Este sitio puede enlazar a webs de terceros. {ORG_NAME} no es responsable de sus contenidos
            o políticas. Revisa sus términos y privacidad antes de usarlas.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">7. Protección de datos</h2>
          <p className="mt-2">
            Consulta la <a className="underline" href="/privacidad">Política de privacidad</a> para
            conocer cómo tratamos tus datos personales.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">8. Cookies</h2>
          <p className="mt-2">
            Consulta la <a className="underline" href="/cookies">Política de cookies</a>.{" "}
            <CookiePrefsLink className="underline" />
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">9. Legislación aplicable</h2>
          <p className="mt-2">
            Este aviso se rige por la legislación de {JURISDICTION}. Para cualquier controversia, las
            partes se someten, salvo norma imperativa, a los juzgados y tribunales de {JURISDICTION}.
          </p>
        </div>
      </section>
    </main>
  );
}
