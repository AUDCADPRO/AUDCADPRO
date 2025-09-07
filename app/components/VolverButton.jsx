// components/VolverButton.jsx
"use client";
import Link from "next/link";

export default function VolverButton() {
  return (
    <>
      {/* Desktop: botón fijo arriba */}
      <div className="hidden md:block mb-4">
        <Link 
          href="/"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition"
        >
          ← Volver
        </Link>
      </div>

      {/* Mobile: casita flotante a la derecha, elevada para no chocar con Telegram */}
      <div
        className="
          fixed md:hidden z-40
          right-4
          bottom-24
          [@supports(padding:max(0px))]:bottom-[calc(6rem+env(safe-area-inset-bottom))]
        "
        // bottom-24 ≈ 96px. Ajusta si tu botón de Telegram es más alto/bajo
      >
        <Link 
          href="/"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white shadow-lg hover:bg-teal-700 transition"
          aria-label="Ir a inicio"
        >
          🏠
        </Link>
      </div>
    </>
  );
}
