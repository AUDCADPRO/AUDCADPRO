// app/(legal)/cookies/page.tsx
import type { Metadata } from "next";
import CookiePrefsLink from "../components/CookiePrefsLink";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Información sobre el uso de cookies en audcadpro.es y cómo cambiar tus preferencias.",
};

// ---- EDITA SOLO ESTAS CONSTANTES ----
const ORG_NAME = "AUDCAD PRO";
const DOMAIN = "https://www.audcadpro.es";
// --------------------------------------

export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-neutral-200">
      <h1 className="text-3xl font-semibold">Política de cookies</h1>

      <section className="mt-8 space-y-6 leading-relaxed">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">1. ¿Qué son las cookies?</h2>
          <p className="mt-2">
            Son pequeños archivos que un sitio web puede almacenar en tu navegador para recordar
            información. Pueden ser esenciales (necesarias para que la web funcione) o no esenciales
            (analítica, publicidad, etc.).
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">2. Uso en {DOMAIN}</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Actualmente este sitio <strong>solo utiliza cookies esenciales</strong> para la
              operativa básica (si procede). No instalamos cookies de analítica/marketing propias.
            </li>
            <li>
              El widget mostrado de Myfxbook se incrusta como imagen (no ejecuta scripts), por lo que
              no debería instalar cookies en tu navegador desde {DOMAIN}.
            </li>
            <li>
              Proveedores externos (p. ej., servicios de alojamiento o el propio Formspree si visitas
              páginas suyas) podrían usar sus propias cookies bajo sus políticas.
            </li>
          </ul>
        </div>

        {/* Si en el futuro añades analítica (ej. Plausible), actualiza esta tabla */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">3. Tipos de cookies</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Esenciales:</strong> necesarias para la navegación, seguridad y carga de recursos.
            </li>
            <li>
              <strong>Preferencias/consentimiento:</strong> guardan tu elección respecto a cookies
              (si el banner está activo).
            </li>
            {/* <li>
              <strong>Analítica (no activas):</strong> medición anónima del uso. (Añade aquí si las activas).
            </li> */}
          </ul>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">4. Gestionar tus preferencias</h2>
          <p className="mt-2">
            Puedes ajustar tu consentimiento en cualquier momento:{" "}
            <CookiePrefsLink className="underline" />.
          </p>
          <p className="mt-2">
            Además, puedes eliminar o bloquear cookies desde la configuración de tu navegador.
            Consulta la ayuda de tu navegador para más detalles.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">5. Actualizaciones</h2>
          <p className="mt-2">
            {ORG_NAME} puede modificar esta política para reflejar cambios normativos o técnicos.
            Revisa periódicamente esta página.
          </p>
        </div>
      </section>
    </main>
  );
}
