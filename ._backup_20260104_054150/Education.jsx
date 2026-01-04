import { content } from "../data/content";

const cardStyle = {
  width: "min(980px, 100%)",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: 18,
  padding: 18,
  backdropFilter: "blur(10px)"
};

const chipRowStyle = { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 };

const chipStyle = {
  padding: "6px 10px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(0,0,0,0.18)",
  fontSize: 13,
  opacity: 0.95
};

function getOrder(item) {
  const lvl = String(item?.level || "").toLowerCase();
  if (lvl.includes("sma")) return 1;
  if (lvl.includes("kuliah") || lvl.includes("universitas") || lvl.includes("umm")) return 2;
  return 99;
}

export default function Education() {
  const edu = content?.education || {};
  const title = edu.title || "Riwayat Pendidikan";
  const items = Array.isArray(edu.items) ? edu.items.slice() : [];

  items.sort((a, b) => getOrder(a) - getOrder(b));

  return (
    <section id="education" className="section-wrap">
      <h2 style={{ fontSize: 40, margin: 0, marginBottom: 18, fontWeight: 800 }}>
        {title}
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
        {items.map((it, idx) => (
          <article key={idx} style={cardStyle}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>{it.institution}</h3>
              <div style={{ ...chipStyle, fontWeight: 700 }}>{it.level}</div>
            </div>

            <div style={{ marginTop: 10, opacity: 0.95, lineHeight: 1.6 }}>
              <div><b>Jurusan:</b> {it.major}</div>
              <div><b>Lokasi:</b> {it.location}</div>
              <div><b>Periode:</b> {it.period}</div>
            </div>

            {it.description ? (
              <p style={{ marginTop: 12, marginBottom: 0, opacity: 0.92, lineHeight: 1.7 }}>
                {it.description}
              </p>
            ) : null}

            {Array.isArray(it.focus) && it.focus.length ? (
              <div style={chipRowStyle}>
                {it.focus.map((f, i) => (
                  <span key={i} style={chipStyle}>{f}</span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
