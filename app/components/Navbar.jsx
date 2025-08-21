// components/Navbar.jsx
"use client";
import Link from "next/link";

const navStyle = {
  position: "sticky",
  top: 0,
  zIndex: 50,
  width: "100%",
  background: "#0b1220",
  color: "white",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
};

const btn = {
  padding: "10px 14px",
  borderRadius: "10px",
  fontWeight: 700,
  textDecoration: "none",
};

export default function Navbar() {
  return (
    <header style={navStyle}>
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 16px",
        }}
      >
        <Link href="/" style={{ fontWeight: 800, letterSpacing: "0.5px" }}>
          AUDCAD PRO
        </Link>

        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Link href="/guias/abrir-verificar" style={{ opacity: 0.9 }}>
            Guía: Abrir cuenta
          </Link>
          <Link href="/guias/vincular-copy" style={{ opacity: 0.9 }}>
            Guía: Vincular Copy
          </Link>
<Link href="/sobre-la-estrategia" style={{ opacity: 0.9 }}>
  Estrategia
</Link>
<Link href="/sobre-mi" style={{ opacity: 0.9 }}>
  Sobre mí
</Link>

          {/* CTA de Telegram MUY visible */}
          <Link
            href="https://t.me/AUDCAD_PRO_MARIO"  // <-- sustituye por tu enlace real
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...btn,
              background:
                "linear-gradient(135deg, rgba(34,197,94,1) 0%, rgba(16,185,129,1) 100%)",
              boxShadow: "0 10px 18px rgba(16,185,129,0.35)",
              color: "white",
            }}
          >
            Únete al Telegram
          </Link>
        </div>
      </nav>
    </header>
  );
}
