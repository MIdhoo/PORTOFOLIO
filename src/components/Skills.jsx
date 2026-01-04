import { content } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="h2">Skills</h2>

        <div className="grid">
          {(content.skills ?? []).map((s) => (
            <div key={s.group} className="card" style={{ gridColumn: "span 4" }}>
              <div style={{ fontWeight: 700 }}>{s.group}</div>
              <div style={{ marginTop: 12 }} className="badges">
                {s.items.map((it) => (
                  <span key={it} className="badge">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="small" style={{ marginTop: 10 }}>
          Tip: fokus tampilkan skill yang benar-benar kamu pakai.
        </div>
      </div>
    </section>
  );
}

