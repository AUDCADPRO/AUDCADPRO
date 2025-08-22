// app/components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Cierra el menú al cambiar de tamaño a desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 980) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="nav">
      <nav className="nav-inner">
        <Link href="/" className="nav-brand">AUDCAD PRO</Link>

        {/* Desktop links */}
        <div className="nav-links">
          <Link href="/guias/abrir-verificar">Guía: Abrir cuenta</Link>
          <Link href="/guias/vincular-copy">Guía: Vincular Copy</Link>
          <Link href="/sobre-la-estrategia">Estrategia</Link>
          <Link href="/sobre-mi">Sobre mí</Link>
          <Link
            href="https://t.me/AUDCAD_PRO_MARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            Únete al Telegram
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Abrir menú"
          className="nav-toggle"
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer ${open ? "open" : ""}`}>
        <Link href="/guias/abrir-verificar" onClick={() => setOpen(false)}>Guía: Abrir cuenta</Link>
        <Link href="/guias/vincular-copy" onClick={() => setOpen(false)}>Guía: Vincular Copy</Link>
        <Link href="/sobre-la-estrategia" onClick={() => setOpen(false)}>Estrategia</Link>
        <Link href="/sobre-mi" onClick={() => setOpen(false)}>Sobre mí</Link>
        <a
          href="https://t.me/AUDCAD_PRO_MARIO"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
          onClick={() => setOpen(false)}
        >
          Únete al Telegram
        </a>
      </div>

      {/* Backdrop */}
      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}
    </header>
  );
}
