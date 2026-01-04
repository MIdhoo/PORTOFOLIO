import { content } from "../data/content";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="h2">Prestasi</h2>

        <div className="grid">
          {content.achievements.map((a) => (
            <div key={a.title + a.year} className="card" style={{ gridColumn: "span 6" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <div style={{ fontWeight: 800 }}>{a.title}</div>
                <div className="small">{a.year}</div>
              </div>
              <p className="p" style={{ marginTop: 10 }}>{a.note}</p>
            </div>
          ))}
        </div>

        <div className="small" style={{ marginTop: 10 }}>
          Edit manual di <b>src/data/content.js</b> bagian <b>achievements</b>.
        </div>
      </div>
    </section>
  );
}
