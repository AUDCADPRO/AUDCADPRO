"use client";

export default function SiteMenu() {
  return (
    <details className="group relative" data-menu>
      {/* Trigger */}
      <summary
        className="list-none cursor-pointer select-none inline-flex items-center gap-2
                   rounded-xl border border-neutral-700/70 bg-neutral-900/60
                   px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-900 outline-none"
        aria-label="Abrir menú"
      >
        Menú
        <svg
          className="h-4 w-4 opacity-80 transition-transform group-open:rotate-180"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>

      {/* Panel: fixed en móvil, absolute en ≥sm */}
      <div
        className="
          fixed left-3 right-3 top-[76px]    /* móvil: ancho seguro + top bajo la barra */
          sm:absolute sm:left-auto sm:right-0 sm:top-auto sm:mt-2 sm:w-64
          rounded-xl border border-neutral-800 bg-neutral-900/95 backdrop-blur
          p-2 shadow-xl z-[100] sm:z-[9999]
          max-h-[70vh] overflow-auto
        "
      >
        <nav className="grid gap-1 text-sm text-neutral-200">
          {/* Secciones internas de la landing */}
          <a href="#features" className="block rounded-lg px-3 py-2 hover:bg-neutral-800/70">Estrategia</a>
          <a href="#performance" className="block rounded-lg px-3 py-2 hover:bg-neutral-800/70">Resultados</a>
          <a href="#how" className="block rounded-lg px-3 py-2 hover:bg-neutral-800/70">Cómo empezar</a>
          <a href="#faq" className="block rounded-lg px-3 py-2 hover:bg-neutral-800/70">FAQ</a>

          <hr className="my-1 border-neutral-800" />

          {/* Páginas nuevas */}
          <a href="/guia-abrir-cuenta" className="block rounded-lg px-3 py-2 hover:bg-neutral-800/70">Guía: Abrir cuenta</a>
          <a href="/guia-vincular-copy" className="block rounded-lg px-3 py-2 hover:bg-neutral-800/70">Guía: Vincular Copy</a>
          <a href="/convertirse-en-colaborador" className="block rounded-lg px-3 py-2 hover:bg-neutral-800/70">Convertirse en colaborador</a>

          <hr className="my-1 border-neutral-800" />

          <a
            href="https://t.me/AUDCAD_PRO_MARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg px-3 py-2 hover:bg-neutral-800/70"
          >
            Canal oficial en Telegram
          </a>
        </nav>
      </div>
    </details>
  );
}
