// app/components/TelegramFloat.tsx
"use client";
import Link from "next/link";

export default function TelegramFloat({
  href = "https://t.me/tuCanalAUDCADPRO", // <-- pon tu enlace real
  label = "Únete al Telegram",
}: { href?: string; label?: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        position: "fixed",
        right: "18px",
        bottom: "18px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "14px 18px",
        borderRadius: "9999px",
        background: "linear-gradient(135deg,#38bdf8,#0ea5e9)",
        color: "#fff",
        fontWeight: 700,
        boxShadow: "0 10px 24px rgba(14,165,233,0.35)",
        textDecoration: "none",
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden>
        <path d="M9.04 15.4 8.9 19.5c.4 0 .57-.17.78-.37l1.87-1.78 3.88 2.84c.71.39 1.22.18 1.41-.66l2.56-12.02c.26-1.22-.44-1.7-1.23-1.4L3.9 9.33c-1.18.46-1.16 1.12-.2 1.42l3.98 1.24 9.23-5.83c.43-.26.82-.12.5.17l-7.47 6.96z"/>
      </svg>
      {label}
    </Link>
  );
}
