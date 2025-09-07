// app/sobre-la-estrategia/page.tsx
export default function SobreLaEstrategiaPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1>Historia de la estrategia — AUDCAD PRO</h1>
          <p>De una curiosidad en 2018 a un método automatizado y auditado</p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="content-wrap">
        <main className="card fade-in">
          <h2 style={{ color: "#fff", marginTop: 0 }}>Filosofía de trabajo</h2>
          <ul style={{ color: "#e5e7eb", lineHeight: 1.8, fontSize: 18, marginTop: 12 }}>
            <li><b style={{ color: "#fff" }}>Riesgo primero:</b> dimensionado prudente y límites claros.</li>
            <li><b style={{ color: "#fff" }}>Reglas objetivas:</b> entradas y salidas definidas; nada de improvisar.</li>
            <li><b style={{ color: "#fff" }}>Transparencia:</b> resultados auditados y guías públicas paso a paso.</li>
            <li><b style={{ color: "#fff" }}>Responsabilidad:</b> cada inversor debe entender que el riesgo existe.</li>
          </ul>

          <h2 style={{ color: "#fff", marginTop: 28 }}>Hitos</h2>
          <div style={{ marginTop: 12, color: "#e5e7eb", fontSize: 18, lineHeight: 1.8 }}>
            <div style={{ display: "grid", rowGap: 8 }}>
              <div>• <b>2018</b> — Primer contacto con trading y Forex.</div>
              <div>• <b>2020</b> — Adopción de <b>sistemas automatizados</b>.</div>
              <div>• <b>2022</b> — Consolidación con <b>resultados auditados</b>.</div>
              <div>• <b>Enero 2024</b> — Integración en <b>VT Markets + VTrade</b> para copytrading.</div>
            </div>
          </div>

          <h2 style={{ color: "#fff", marginTop: 28 }}>Expectativas realistas</h2>
          <p style={{ color: "#e5e7eb", fontSize: 18, lineHeight: 1.7, marginTop: 8 }}>
            Busco un ritmo de crecimiento moderado con <b>drawdown contenido</b>, menor exposición a eventos extremos y un proceso claro
            para que cualquiera pueda abrir su cuenta, verificar, depositar y conectarse al copy con seguridad.
          </p>

          <div style={{ marginTop: 24, padding: 16, borderRadius: 12, background: "#0b1220", border: "1px solid rgba(255,255,255,.06)" }}>
            <p style={{ margin: 0, color: "#cbd5e1", fontSize: 16 }}>
              <b>Aviso honesto:</b> no hago promesas de rentabilidad. El trading conlleva riesgo y podrías perder la totalidad del capital.
              Mi objetivo es <i>reducir la incertidumbre</i>, no vender imposibles.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
