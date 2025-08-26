// app/guias/abrir-verificar/page.tsx
import Link from "next/link";
import type { CSSProperties } from "react";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1>Guía: Abrir, verificar y depositar</h1>
          <p>Cuenta Standard en VT Markets · Paso a paso, claro y sin líos</p>
        </div>
      </section>

      {/* CONTENIDO */}
      <div className="content-wrap">
        {/* Índice lateral (oculto en móvil) */}
        <aside className="sidebar fade-in">
          <h3>Índice</h3>
          <a href="#registro">Registro</a>
          <a href="#kyc">Verificación (KYC)</a>
          <a href="#tipo">Tipo de cuenta</a>
          <a href="#deposito">Depósito</a>
          <a href="#descargas">Descargas</a>
        </aside>

        {/* Card principal */}
        <main className="card fade-in">
          <div style={{ marginBottom: 16, color: "#9ca3af", fontSize: 18 }}>
            Enlace oficial para registro 👉{" "}
            <a href="https://vtm.pro/nq2Aza" target="_blank" rel="noopener noreferrer" style={{ color: "#38bdf8", textDecoration: "underline" }}>
              https://vtm.pro/nq2Aza
            </a>
          </div>

          <div className="step" id="registro">
            <div className="icon">🔑</div>
            <p>
              <b style={{ color: "#fff" }}>Registro:</b> país, email y contraseña; marca que no eres residente en EE. UU.;
              <u> deja el código de referido vacío</u>.
            </p>
          </div>

          <div className="step" id="kyc" style={{ marginTop: 16 }}>
            <div className="icon amber">🪪</div>
            <p>
              <b style={{ color: "#fff" }}>Verificación (KYC):</b> DNI/pasaporte + recibo &lt; 6 meses.<br/>
              <b>Tip:</b> la dirección debe coincidir <i>exactamente</i> con la factura (validación automática).
            </p>
          </div>

          <div className="step" id="tipo" style={{ marginTop: 16 }}>
            <div className="icon">⚙️</div>
            <p>
              <b style={{ color: "#fff" }}>Tipo de cuenta:</b> selecciona <b>Standard STP</b> y la divisa base de tu banco.
            </p>
          </div>

          <div className="step" id="deposito" style={{ marginTop: 16 }}>
            <div className="icon green">💳</div>
            <p>
              <b style={{ color: "#fff" }}>Depósito:</b> mínimo <b>100 USD</b>. Tarjeta/e-wallet (rápido) o transferencia (1–5 días).
            </p>
          </div>

          <div id="descargas" className="ctas">
            <Link href="/docs/Guia_VTMarkets_Standard_Visual.pdf" target="_blank" className="btn btn-dark">
              Descargar PDF (Visual)
            </Link>
            <a href="https://vtm.pro/nq2Aza" target="_blank" rel="noopener noreferrer" className="btn btn-blue">
              Abrir cuenta en VT Markets
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
