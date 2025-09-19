// app/sobre-mi/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function SobreMiPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1>Sobre mí — Mario</h1>
          <p>Copytrading entendible, prudente y medible</p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="content-wrap">
        <main className="card fade-in">
          {/* Perfil */}
          <div style={{ display: "flex", gap: 24, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
            <div style={{ borderRadius: "50%", overflow: "hidden", width: 120, height: 120, border: "1px solid rgba(255,255,255,.08)" }}>
              <Image src="/mario.jpg" alt="Foto de Mario" width={120} height={120} />
            </div>
            <div>
              <h2 style={{ color: "#fff", margin: "0 0 6px 0" }}>Mario</h2>
              <p style={{ color: "#cbd5e1", margin: 0 }}>Responsable de AUDCAD PRO</p>
            </div>
          </div>

          {/* Bio */}
          <div style={{ color: "#e5e7eb", fontSize: 18, lineHeight: 1.8 }}>
            <p>
              Descubrí el trading y el mercado de <b>Forex en 2018</b>. Me fascina su potencial, pero también soy plenamente
              consciente del <b>riesgo</b>: se puede perder parte del capital o incluso <b>todo</b>. Por eso mi enfoque es
              <b> conservador</b> y orientado al control.
            </p>
            <p>
              En <b>2020</b> me pasé a los <b>sistemas automatizados</b>: reglas claras, menos sesgo emocional y métricas medibles.
              Desde <b>2022</b> mantengo <b>resultados auditados</b>. En <b>enero de 2024</b> llevé la estrategia a
              <b> VT Markets</b> para usar el copy <b>VTrade</b>.
            </p>
            <p>
              No soy asesor financiero ni doy consejos. Lo que hago es ofrecer la posibilidad de <b>copiar mi estrategia</b> a quien lo desee,
              <u> bajo su propia responsabilidad</u> y con <b>conocimiento real</b> del mercado de Forex y del trading.
            </p>
          </div>

          {/* CTA */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 20 }}>
            <Link href="https://t.me/AUDCAD_PRO_MARIO" target="_blank" className="btn btn-blue">
              Hablar por Telegram
            </Link>
            <Link href="mailto:info@audcadpro.es" className="btn btn-dark">
              Escribir por Email
            </Link>
          </div>

          {/* Disclaimer */}
          <hr style={{ margin: "28px 0", borderColor: "rgba(255,255,255,.12)" }} />
          <p className="muted">
            <b>Descargo de responsabilidad:</b> no hago promesas de rentabilidad. El trading con derivados conlleva riesgo
            elevado y podrías perder todo el capital. Opera solo con dinero que puedas permitirte arriesgar.
          </p>
        </main>
      </div>
    </>
  );
}
