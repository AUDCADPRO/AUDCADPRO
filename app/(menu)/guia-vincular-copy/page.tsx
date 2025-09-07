// app/guias/vincular-copy/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1>Vincular tu cuenta al Copy AUDCAD PRO</h1>
          <p>VTrade · Oferta al 20% semanal · Seguro y paso a paso</p>
        </div>
      </section>

      {/* CONTENIDO */}
      <div className="content-wrap">
        {/* Índice lateral */}
        <aside className="sidebar fade-in">
          <h3>Índice</h3>
          <a href="#enlace">Enlace directo</a>
          <a href="#credenciales">Credenciales</a>
          <a href="#estrategia">Subscription Strategy</a>
          <a href="#riesgo">Risk Management</a>
          <a href="#activar">Activar copy</a>
          <a href="#descargas">Descargar guía</a>
        </aside>

        {/* Card principal */}
        <main className="card fade-in">
          <p id="enlace" style={{ margin: 0, color: "#9ca3af", fontSize: 18 }}>
            Enlace directo a la oferta (20% semanal):{" "}
            <a
              href="https://social.vtacademy.net/portal/registration/subscription/84538/WEB"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#38bdf8", textDecoration: "underline" }}
            >
              https://social.vtacademy.net/portal/registration/subscription/84538/WEB
            </a>
          </p>

          <div className="step" id="credenciales" style={{ marginTop: 20 }}>
            <div className="icon">🔐</div>
            <p>
              Introduce <b style={{ color: "#fff" }}>Servidor</b>, <b style={{ color: "#fff" }}>Nº de cuenta</b> y{" "}
              <b style={{ color: "#fff" }}>Contraseña maestra</b> (llegan en el email al abrir la Standard).
            </p>
          </div>

          <div className="step" id="estrategia" style={{ marginTop: 16 }}>
            <div className="icon amber">📊</div>
            <div>
              <b style={{ color: "#fff" }}>Subscription Strategy:</b>
              <ul style={{ marginTop: 10, marginLeft: 18, color: "#e5e7eb", lineHeight: 1.7 }}>
                <li><b>Autoscale + Equity + Ratio 1.0</b> (recomendado, riesgo proporcional). Si quieres más, sube poco a poco a 1.1–1.3.</li>
                <li><b>Multiply</b> (multiplica el lotaje de la Master; más agresivo).</li>
                <li><b>Fixed</b> (lote fijo; no recomendado para principiantes).</li>
              </ul>
              <i style={{ color: "#9ca3af" }}>La Master suele tener 1.500–2.000 USD (referencia útil).</i>
            </div>
          </div>

          <div className="step" id="riesgo" style={{ marginTop: 16 }}>
            <div className="icon green">🛡️</div>
            <p>
              <b style={{ color: "#fff" }}>Risk Management</b> (opcional): establece un umbral en <u>% de tu capital</u> (p. ej. 20–30%)
              y elige “Suspend” + “Close all”.
            </p>
          </div>

          <div className="step" id="activar" style={{ marginTop: 16 }}>
            <div className="icon">🚀</div>
            <p>
              Activa desde <b style={{ color: "#fff" }}>Actions → Activate</b> y listo.
            </p>
          </div>

          <div id="descargas" className="ctas">
            <Link href="/docs/Guia_Vincular_Copy_AUDCAD_PRO_Visual_Extendida.pdf" target="_blank" className="btn btn-dark">
              Descargar PDF (Guía + FAQ)
            </Link>
            <a
              href="https://social.vtacademy.net/portal/registration/subscription/84538/WEB"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green"
            >
              Unirse al Copy (20%)
            </a>
          </div>

          <hr style={{ margin: "32px 0", borderColor: "rgba(255,255,255,.12)" }} />

          <p className="muted">
            <b>Descargo de responsabilidad:</b> La operativa con derivados conlleva riesgo elevado. Rentabilidades pasadas no
            garantizan resultados futuros. Opera solo con capital que puedas permitirte arriesgar.
          </p>
        </main>
      </div>
    </>
  );
}
