import { content } from "../data/content";

export default function Achievements() {
  const raw = content.achievements;
  const title = (raw && !Array.isArray(raw) && raw.title) ? raw.title : "Achievements";
  const items = Array.isArray(raw) ? raw : (raw?.items ?? []);

  return (
    <section id="achievements" className="edu-section">
      <h2 className="edu-title">{title}</h2>

      {items.length === 0 ? (
        <p className="edu-muted">Belum ada achievement. Bisa kamu isi nanti di src/data/content.js</p>
      ) : (
        <div className="edu-wrap">
          {items.map((a, i) => (
            <article key={a.id || i} className="edu-card">
              <h3 className="edu-school">{a.title || "Achievement"}</h3>
              {a.desc ? <p className="edu-desc">{a.desc}</p> : null}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
