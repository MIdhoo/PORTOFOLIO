import { content } from "../data/content";

export default function Projects() {
  const raw = content.projects;
  const title = (raw && !Array.isArray(raw) && raw.title) ? raw.title : "Projects";
  const items = Array.isArray(raw) ? raw : (raw?.items ?? []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="h2" style={{ marginBottom: "30px" }}>{title}</h2>

        {items.length === 0 ? (
          <div className="glass" style={{ padding: "20px", textAlign: "center" }}>
            <p className="p">Belum ada project yang ditampilkan.</p>
          </div>
        ) : (
          <div className="grid">
            {items.map((p, i) => (
              <article
                key={p.id || i}
                className="card"
                style={{ gridColumn: "span 4" }}
              >
                <div className="thumb">
                  {p.img ? (
                    <img src={p.img} alt={p.title} loading="lazy" />
                  ) : (
                    <div style={{
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(135deg, #2a2a3e, #1f1f2e)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(255,255,255,0.2)"
                    }}>
                      No Image
                    </div>
                  )}
                </div>

                <h3 className="h2" style={{ fontSize: "20px", marginBottom: "10px" }}>
                  {p.title || "Untitled Project"}
                </h3>

                <p className="p" style={{ fontSize: "14px", marginBottom: "16px" }}>
                  {p.desc}
                </p>

                <div className="btnRow" style={{ marginTop: "auto" }}>
                  {p.href && (
                    <a className="btn btnPrimary" href={p.href} target="_blank" rel="noreferrer" style={{ fontSize: "13px", padding: "8px 14px" }}>
                      Live Demo
                    </a>
                  )}
                  {p.source && (
                    <a className="btn btnGhost" href={p.source} target="_blank" rel="noreferrer" style={{ fontSize: "13px", padding: "8px 14px" }}>
                      Code
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
