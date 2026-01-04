import { content } from "../data/content";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const empty = !content.projects || content.projects.length === 0;

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="h2">Projects</h2>

        {empty ? (
          <div className="glass" style={{ padding: 18 }}>
            <div className="small">Belum ada project ditampilkan.</div>
            <div className="p" style={{ marginTop: 8 }}>
              Nanti kalau sudah punya, isi di <b>src/data/content.js</b> bagian <b>projects</b>.
              Kamu juga bisa taruh screenshot di <b>public/projects</b> dan isi field <b>image</b>.
            </div>

            <div className="grid" style={{ marginTop: 14 }}>
              {[1, 2].map((i) => (
                <div key={i} className="card" style={{ gridColumn: "span 6", opacity: 0.8 }}>
                  <div className="thumb" />
                  <div style={{ fontWeight: 800, fontSize: 18 }}>Project Title</div>
                  <p className="p" style={{ marginTop: 10 }}>
                    Deskripsi singkat project kamu (tujuan, fitur utama, hasil).
                  </p>
                  <div style={{ marginTop: 12 }} className="badges">
                    {["Tech 1", "Tech 2", "Tech 3"].map((t) => (
                      <span key={t} className="badge">{t}</span>
                    ))}
                  </div>
                  <div className="btnRow">
                    <span className="btn btnGhost" style={{ opacity: 0.7 }}>
                      <ExternalLink size={18} /> Demo
                    </span>
                    <span className="btn" style={{ opacity: 0.7 }}>
                      <Github size={18} /> GitHub
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid">
            {(content.projects ?? []).map((p) => (
              <div key={p.title} className="card" style={{ gridColumn: "span 6" }}>
                <div className="thumb">
                  {p.image ? <img src={p.image} alt={p.title} loading="lazy" /> : null}
                </div>

                <div style={{ fontWeight: 800, fontSize: 18 }}>{p.title}</div>
                <p className="p" style={{ marginTop: 10 }}>{p.desc}</p>

                <div style={{ marginTop: 12 }} className="badges">
                  {p.stack.map((t) => <span key={t} className="badge">{t}</span>)}
                </div>

                <div className="btnRow">
                  <a className="btn btnGhost" href={p.links.demo} target="_blank" rel="noreferrer">
                    <ExternalLink size={18} /> Demo
                  </a>
                  <a className="btn" href={p.links.github} target="_blank" rel="noreferrer">
                    <Github size={18} /> GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

