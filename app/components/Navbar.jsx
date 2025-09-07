// app/components/Navbar.jsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function useBodyScrollLock(locked) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = locked ? "hidden" : prev || "";
    return () => { document.body.style.overflow = prev; };
  }, [locked]);
}

function MobileDrawerPortal({ open, onClose, children }) {
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
          className="fixed inset-0 z-[70] bg-black/40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer móvil anclado al viewport */}
      <div
        className={[
          "fixed inset-x-0 top-0 z-[80] md:hidden",
          "bg-[#0b1220] text-white",
          "h-[100dvh] max-h-[100dvh] overflow-y-auto overscroll-contain",
          "px-4 pt-4 pb-[calc(20px+env(safe-area-inset-bottom))]",
          "transform transition-transform duration-200 ease-out",
          open ? "translate-y-0" : "-translate-y-full",
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

        {/* Espacio por botones flotantes (Telegram, etc.) */}
        <div className="h-28" />
      </div>
    </>,
    document.body
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Cerrar al pasar a desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 980) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="w-full border-b border-white/10 bg-[#0b1220]">
      <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-white font-semibold tracking-wide">
          AUDCAD <span className="text-teal-400">PRO</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link className="text-white/90 hover:text-white" href="/guias/abrir-verificar">Guía: Abrir cuenta</Link>
          <Link className="text-white/90 hover:text-white" href="/guias/vincular-copy">Guía: Vincular Copy</Link>
          <Link className="text-white/90 hover:text-white" href="/sobre-la-estrategia">Estrategia</Link>
          <Link className="text-white/90 hover:text-white" href="/sobre-mi">Sobre mí</Link>
          <Link
            href="https://t.me/AUDCAD_PRO_MARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl px-3 py-2 border border-teal-500/40 text-teal-300 hover:bg-teal-500/10"
          >
            Únete al Telegram
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Abrir menú"
          className="md:hidden inline-flex flex-col gap-1.5 p-2 rounded-lg border border-white/10 text-white"
          onClick={() => setOpen(v => !v)}
        >
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
        </button>
      </nav>

      {/* Drawer móvil vía Portal */}
      <MobileDrawerPortal open={open} onClose={() => setOpen(false)}>
        <nav className="py-3 divide-y divide-white/10">
          <Link className="block px-2 py-4 text-lg" href="/guias/abrir-verificar" onClick={() => setOpen(false)}>Guía: Abrir cuenta</Link>
          <Link className="block px-2 py-4 text-lg" href="/guias/vincular-copy" onClick={() => setOpen(false)}>Guía: Vincular Copy</Link>
          <Link className="block px-2 py-4 text-lg" href="/sobre-la-estrategia" onClick={() => setOpen(false)}>Estrategia</Link>
          <Link className="block px-2 py-4 text-lg" href="/sobre-mi" onClick={() => setOpen(false)}>Sobre mí</Link>
          <a
            href="https://t.me/AUDCAD_PRO_MARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-2 py-4 text-lg"
            onClick={() => setOpen(false)}
          >
            Únete al Telegram
          </a>
        </nav>
      </MobileDrawerPortal>
    </header>
  );
}
