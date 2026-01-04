import { content } from "../data/content";

export default function Projects() {
  const raw = content.projects;
  const title = (raw && !Array.isArray(raw) && raw.title) ? raw.title : "Projects";
  const items = Array.isArray(raw) ? raw : (raw?.items ?? []);

  return (
    <section id="projects" className="edu-section">
      <h2 className="edu-title">{title}</h2>

      {items.length === 0 ? (
        <p className="edu-muted">Belum ada project yang ditampilkan. Nanti bisa kamu isi di src/data/content.js</p>
      ) : (
        <div className="edu-wrap">
          {items.map((p, i) => (
            <article key={p.id || i} className="edu-card">
              <h3 className="edu-school">{p.title || "Project"}</h3>
              {p.desc ? <p className="edu-desc">{p.desc}</p> : null}
              {p.href ? (
                <a className="edu-link" href={p.href} target="_blank" rel="noreferrer">Lihat</a>
              ) : null}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
