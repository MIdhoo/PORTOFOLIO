import { content } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="h2">Projects</h2>

        <div className="grid">
          {content.projects.map((p) => (
            <div key={p.title} className="card" style={{ gridColumn: "span 6" }}>
              <div style={{ fontWeight: 800, fontSize: 18 }}>{p.title}</div>
              <p className="p" style={{ marginTop: 10 }}>
                {p.desc}
              </p>

              <div style={{ marginTop: 12 }} className="badges">
                {p.stack.map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>

              <div className="btnRow">
                <a className="btn btnGhost" href={p.links.demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
                <a className="btn" href={p.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
