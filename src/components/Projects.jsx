import { content } from "../data/content";

export default function Projects() {
  const { title, items } = content.projects;

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="h2" style={{ marginBottom: "40px", textAlign: "center" }}>{title}</h2>

        {/* INLINE STYLE: Memaksa Flexbox Rata Tengah (Abaikan file CSS) */}
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "center", /* Kunci Rata Tengah */
          gap: "24px",
          width: "100%"
        }}>
          {items.map((p, i) => (
            <article key={i} className="card" style={{ 
              width: "100%", 
              maxWidth: "380px", /* Batas lebar kartu */
              flex: "1 1 300px", 
              display: "flex", 
              flexDirection: "column" 
            }}>
              <div className="thumb">
                {p.img ? (
                  <img src={p.img} alt={p.title} loading="lazy" />
                ) : (
                  <div style={{
                    width: "100%", height: "100%", 
                    background: "linear-gradient(135deg, #2a2a3e, #1f1f2e)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.2)"
                  }}>
                    No Image
                  </div>
                )}
              </div>
              <h3 className="h2" style={{ fontSize: "20px", marginBottom: "10px" }}>{p.title}</h3>
              <p className="p" style={{ fontSize: "14px", marginBottom: "16px" }}>{p.desc}</p>
              <div className="btnRow" style={{ marginTop: "auto" }}>
                {p.href && <a className="btn btnPrimary" href={p.href} target="_blank">Live Demo</a>}
                {p.source && <a className="btn btnGhost" href={p.source} target="_blank">Code</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
