import Link from "next/link";
import type { Metadata } from "next";

// ===== SEO / Open Graph =====
export const metadata: Metadata = {
  title: "Convertirse en colaborador | AUDCAD PRO",
  description:
    "Únete como colaborador oficial de AUDCAD PRO. Te creamos una web clonada con tus enlaces personales (copy, broker y contacto) y recibes tu parte de la performance fee.",
  openGraph: {
    title: "Convertirse en colaborador | AUDCAD PRO",
    description:
      "Web clonada con tus enlaces, soporte y trazabilidad. Recibe tu parte de la performance fee.",
    url: "https://audcadpro.es/convertirse-en-colaborador",
    siteName: "AUDCAD PRO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const WA =
  "https://wa.me/34602099692?text=Hola%2C%20quiero%20informaci%C3%B3n%20para%20convertirme%20en%20colaborador%20de%20AUDCAD%20PRO";

export default function ColaboradorPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-8">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Convertirse en colaborador
        </h1>

        <p className="mt-3 text-neutral-300 max-w-3xl">
          Únete como colaborador oficial de AUDCAD PRO y consigue tu propia{" "}
          <span className="text-teal-300">web personalizada</span>, idéntica a la
          oficial pero con tus enlaces personales al copy y a tu contacto directo.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          <Card
            title="¿Qué incluye?"
            items={[
              "Landing clonada con tu nombre y WhatsApp.",
              "Enlace personalizado para unirse al copy (VTrade).",
              "Acceso rápido para crear cuenta en el broker.",
              "Texto y estética coherente con la web oficial.",
            ]}
          />
          <Card
            title="Cómo funciona"
            items={[
              "Compartes tu landing con tus contactos.",
              "Quien se suscribe desde tu página queda asociado a tu enlace.",
              "Recibes tu parte de la performance fee (dentro del 20%).",
              "Transparencia y trazabilidad de altas.",
            ]}
          />
          <Card
            title="Requisitos"
            items={[
              "Comunicación responsable y sin promesas de rentabilidad.",
              "Respeto a la normativa del broker y del país.",
              "Uso ético de materiales y marca.",
            ]}
          />
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h2 className="text-xl font-semibold">Coste del servicio</h2>
          <p className="mt-2 text-neutral-300">
            Mantenemos un <b>coste mínimo</b> para garantizar que lo solicitan personas realmente interesadas.
            Este coste cubre la configuración técnica, clonación y soporte.
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <a
            href={WA}
            className="inline-flex items-center justify-center rounded-2xl bg-teal-600/80 hover:bg-teal-600 px-5 py-3 font-medium"
          >
            Solicitar por WhatsApp
          </a>
          <Link
            href="https://t.me/AUDCAD_PRO_MARIO"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-700 px-5 py-3 hover:bg-neutral-900"
          >
            Ver Canal Oficial
          </Link>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold">Preguntas frecuentes</h3>
          <div className="mt-4 space-y-3">
            <FAQ
              q="¿Qué porcentaje gano?"
              a="Recibes tu parte pactada dentro del 20% de performance fee que se cobra sobre beneficios, sólo cuando los hay."
            />
            <FAQ
              q="¿Puedo personalizar textos/colores?"
              a="Mantenemos identidad visual común para coherencia de marca; se personalizan nombre, enlaces y contacto."
            />
            <FAQ q="¿Hay permanencia?" a="No. Si decides parar, se desactiva tu enlace y tu landing." />
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
      <div className="font-medium text-teal-300">{title}</div>
      <ul className="mt-3 space-y-2 text-neutral-300 text-sm">
        {items.map((t) => (
          <li key={t} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
      <summary className="cursor-pointer list-none font-medium text-neutral-100">
        {q}
      </summary>
      <p className="mt-2 text-sm text-neutral-300">{a}</p>
    </details>
  );
}
