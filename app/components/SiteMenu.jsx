// app/components/SiteMenu.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function useBodyScrollLock(locked) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = locked ? "hidden" : prev || "";
    return () => { document.body.style.overflow = prev; };
  }, [locked]);
}

function MobileDrawer({ open, onClose, children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useBodyScrollLock(open);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      {open && (
        <button
          aria-label="Cerrar menú"
          className="fixed inset-0 z-[110] bg-black/40 md:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Drawer móvil: entra desde la derecha */}
      <div
        className={[
          "fixed top-0 right-0 z-[120] md:hidden",
          "bg-[#0b1220] text-white",
          "h-[100dvh] w-[80%] max-w-sm", // ancho del panel
          "overflow-y-auto overscroll-contain",
          "px-4 pt-4 pb-[calc(20px+env(safe-area-inset-bottom))]",
          "transform transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        ].join(" ")}
      >
        {/* Barra superior sticky */}
        <div className="sticky top-0 z-10 bg-[#0b1220]/90 backdrop-blur supports-[backdrop-filter]:bg-[#0b1220]/70 border-b border-white/10 flex items-center justify-between p-3">
          <span className="text-base font-semibold">Menú</span>
          <button
            onClick={onClose}
            className="p-2 rounded hover:bg-white/5"
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>

        {children}

        <div className="h-28" />
      </div>
    </>,
    document.body
  );
}


export default function SiteMenu({ vtradeUrl }) {
  const desktopRef = useRef(null);
  const [openMobile, setOpenMobile] = useState(false);

  // Cierra el drawer al pasar a desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 980) setOpenMobile(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ---------- BOTÓN / MENÚ EN MÓVIL (DRAWER) ----------
  const mobileButton = (
    <button
      aria-label="Abrir menú"
      className="md:hidden inline-flex items-center gap-2 rounded-xl border border-neutral-700/70 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-900"
      onClick={() => setOpenMobile(true)}
    >
      Menú
      <svg className="h-4 w-4 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );

  const mobileDrawerContent = (
    <nav className="py-3 divide-y divide-white/10 text-white">
      <a href="/guia-abrir-cuenta" className="block px-2 py-4 text-lg" onClick={() => setOpenMobile(false)}>
        Guía: Abrir cuenta
      </a>

      <a
        href={vtradeUrl ?? "/guia-vincular-copy"}
        className="block px-2 py-4 text-lg text-teal-300"
        target={vtradeUrl ? "_blank" : undefined}
        rel={vtradeUrl ? "noopener noreferrer" : undefined}
        onClick={() => setOpenMobile(false)}
      >
        Guía: Vincular Copy {vtradeUrl ? "(enlace especial)" : ""}
      </a>

      <a href="/convertirse-en-colaborador" className="block px-2 py-4 text-lg" onClick={() => setOpenMobile(false)}>
        Convertirse en colaborador
      </a>
      <a href="/historia-del-algoritmo" className="block px-2 py-4 text-lg" onClick={() => setOpenMobile(false)}>
        Historia del Algoritmo
      </a>
      <a href="/sobre-mi" className="block px-2 py-4 text-lg" onClick={() => setOpenMobile(false)}>
        Sobre mí
      </a>
      <a
        href="https://t.me/AUDCAD_PRO_MARIO"
        target="_blank"
        rel="noopener noreferrer"
        className="block px-2 py-4 text-lg"
        onClick={() => setOpenMobile(false)}
      >
        Canal oficial en Telegram
      </a>
    </nav>
  );

  // ---------- MENÚ EN ESCRITORIO (DROPDOWN COMPACTO) ----------
  return (
    <div className="relative">
      {/* Móvil: botón + drawer */}
      {mobileButton}
      <MobileDrawer open={openMobile} onClose={() => setOpenMobile(false)}>
        {mobileDrawerContent}
      </MobileDrawer>

      {/* Desktop: dropdown clásico */}
      <details ref={desktopRef} className="group relative hidden md:inline-block" data-menu>
        <summary
          className="list-none cursor-pointer select-none inline-flex items-center gap-2
                     rounded-xl border border-neutral-700/70 bg-neutral-900/60
                     px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-900 outline-none"
          aria-label="Abrir menú"
          onClick={(e) => {
            // evita que el click haga scroll a la posición del summary
            e.preventDefault();
            const el = desktopRef.current;
            if (!el) return;
            el.open = !el.open;
          }}
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
          className="absolute right-0 mt-2 w-72 z-[60]
                     rounded-xl border border-neutral-800 bg-neutral-900/95
                     backdrop-blur p-2 shadow-xl ring-1 ring-neutral-800/60"
        >
          <nav className="grid gap-1 text-sm text-neutral-200">
            <a href="/guia-abrir-cuenta" className="block rounded-lg px-3 py-2 hover:bg-neutral-800/70">
              Guía: Abrir cuenta
            </a>

            <a
              href={vtradeUrl ?? "/guia-vincular-copy"}
              className="block rounded-lg px-3 py-2 hover:bg-neutral-800/70 text-teal-300"
              target={vtradeUrl ? "_blank" : undefined}
              rel={vtradeUrl ? "noopener noreferrer" : undefined}
            >
              Guía: Vincular Copy {vtradeUrl ? "(enlace especial)" : ""}
            </a>

            <a href="/convertirse-en-colaborador" className="block rounded-lg px-3 py-2 hover:bg-neutral-800/70">
              Convertirse en colaborador
            </a>
            <a href="/historia-del-algoritmo" className="block rounded-lg px-3 py-2 hover:bg-neutral-800/70">
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
    </div>
  );
}
