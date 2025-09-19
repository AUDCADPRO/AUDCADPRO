// app/(legal)/privacidad/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Información sobre cómo tratamos tus datos personales en audcadpro.es conforme al RGPD y LOPDGDD.",
  alternates: { canonical: "/privacidad" },
  openGraph: {
    title: "Política de privacidad | AUDCAD PRO",
    description:
      "Detalles sobre el tratamiento de datos personales conforme al RGPD y LOPDGDD.",
    url: "https://www.audcadpro.es/privacidad",
  },
};

// ---- EDITA SOLO ESTAS CONSTANTES ----
const ORG_NAME = "AUDCAD PRO";
const CONTACT_EMAIL = "info@audcadpro.es"; // ← corregido
const ADDRESS = "SPAIN"; // opcional: "C/ Ejemplo 123, Ciudad, País"
const LAST_UPDATED = "10/08/2025";
// --------------------------------------

export default function PrivacidadPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-neutral-200">
      <h1 className="text-3xl font-semibold">Política de privacidad</h1>
      <p className="mt-2 text-neutral-400 text-sm">
        Última actualización: {LAST_UPDATED}
      </p>

      <section className="mt-8 space-y-6 leading-relaxed">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">1. Responsable del tratamiento</h2>
          <p className="mt-2">
            <strong>{ORG_NAME}</strong> — Email:{" "}
            <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            {ADDRESS ? (
              <>
                <br />
                Dirección: {ADDRESS}
              </>
            ) : (
              <>
                <br />
                Dirección: <em>(opcional)</em>
              </>
            )}
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">2. Datos que tratamos</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Contacto:</strong> nombre, email, mensaje (a través del formulario).
            </li>
            <li>
              <strong>Uso de la web:</strong> métricas de navegación de forma agregada/anónima.
              Actualmente no instalamos cookies de analítica en tu navegador.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">3. Finalidades y bases jurídicas</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Responder tus consultas (formulario de contacto). <em>Base:</em> tu consentimiento (art. 6.1.a RGPD).
            </li>
            <li>
              Seguridad/antispam y mejora del sitio (métricas agregadas). <em>Base:</em> interés legítimo (art. 6.1.f RGPD).
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">4. Destinatarios</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Formspree (gestión del formulario de contacto).{" "}
              <a
                className="underline"
                href="https://formspree.io/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de privacidad
              </a>
              .
            </li>
            <li>
              Proveedor de hosting (p. ej. Vercel) para servir este sitio web.{" "}
              <a
                className="underline"
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de privacidad
              </a>
              .
            </li>
            <li>No vendemos tus datos ni realizamos decisiones automatizadas con efectos jurídicos.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">5. Transferencias internacionales</h2>
          <p className="mt-2">
            Algunos proveedores pueden estar ubicados fuera del EEE. En ese caso, exigimos garantías adecuadas
            (p. ej. Cláusulas Contractuales Tipo de la Comisión Europea).
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">6. Plazos de conservación</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Mensajes de contacto: hasta 24 meses o hasta que solicites su supresión.</li>
            <li>Registros técnicos/seguridad: plazos razonables para mantenimiento y seguridad.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">7. Derechos</h2>
          <p className="mt-2">
            Puedes ejercer acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a{" "}
            <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            . Si no obtienes respuesta, puedes reclamar ante la AEPD{" "}
            <a
              className="underline"
              href="https://www.aepd.es/"
              target="_blank"
              rel="noopener noreferrer"
            >
              (aepd.es)
            </a>
            .
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">8. Menores</h2>
          <p className="mt-2">No dirigimos nuestros servicios a menores de 18 años.</p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="font-medium text-neutral-100">9. Cambios</h2>
          <p className="mt-2">
            Podemos actualizar esta política para reflejar cambios normativos o de servicio.
          </p>
        </div>
      </section>
    </main>
  );
}
