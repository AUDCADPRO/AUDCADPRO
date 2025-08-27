"use client";
import { useEffect, useRef } from "react";

export default function CollaboratorMenu({
  vtradeUrl,
}: { vtradeUrl: string }) {
  const ref = useRef<HTMLDetailsElement>(null);

  // Cerrar al hacer clic/tap fuera
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      const el = ref.current;
      if (!el) return;
      if (!el.open) return;
      const target = e.target as Node;
      if (!el.contains(target)) el.open = false;
    }
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
  }, []);

  // Cerrar con Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && ref.current?.open) {
        ref.current.open = false;
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <details ref={ref} className="group relative" data-menu>
      <summary
        className="list-none cursor-pointer select-none inline-flex items-center gap-2
                   rounded-xl border border-neutral-700/70 bg-neutral-900/60
                   px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-900 outline-none"
        aria-label="Abrir menú"
      >
        Menú
        <svg
          className="h-4 w-4 opacity-80 transition-transform group-open:rotate-180"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>

      <div
        className="absolute right-0 mt-2 w-72 z-[9999]
                   rounded-xl border border-neutral-800 bg-neutral-900/95
                   backdrop-blur p-2 shadow-xl ring-1 ring-neutral-800/60"
      >
        <nav className="grid gap-1 text-sm text-neutral-200">
          <a href="/guia-abrir-cuenta" className="block rounded-lg px-3 py-2 hover:bg-neutral-800/70">
            Guía: Abrir cuenta
          </a>

          {/* 🔗 Aquí va el enlace especial del colaborador */}
          <a
            href={vtradeUrl}
            className="block rounded-lg px-3 py-2 hover:bg-neutral-800/70 text-teal-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guía: Vincular Copy (enlace especial)
          </a>

          <a href="/convertirse-en-colaborador" className="block rounded-lg px-3 py-2 hover:bg-neutral-800/70">
            Convertirse en colaborador
          </a>
          <a href="/sobre-la-estrategia" className="block rounded-lg px-3 py-2 hover:bg-neutral-800/70">
            Historia del Algoritmo
          </a>
          <a href="/sobre-mi" className="block rounded-lg px-3 py-2 hover:bg-neutral-800/70">
            Sobre mí
          </a>
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
