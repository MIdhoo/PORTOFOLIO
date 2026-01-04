import { content } from "../data/content";

export default function Projects() {
  // Fallback aman jika content.projects error
  const raw = content.projects || { title: "Projects", items: [] };
  const title = raw.title;
  const items = raw.items;

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="h2" style={{ marginBottom: "40px", textAlign: "center" }}>{title}</h2>

        {/* CONTAINER FLEXBOX CENTER */}
        <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            justifyContent: "center", 
            gap: "24px", 
            width: "100%" 
        }}>
          {items.map((p, i) => (
            <article key={i} className="card-base" style={{
                width: "100%",
                maxWidth: "380px",
                flex: "1 1 300px",
                display: "flex",
                flexDirection: "column",
                background: "rgba(20,16,42,0.6)",
                border: "1px solid rgba(192,132,252,0.2)",
                borderRadius: "16px",
                padding: "20px"
            }}>
              <div className="thumb" style={{ marginBottom: "16px", borderRadius: "12px", overflow: "hidden" }}>
                {p.img ? (
                  <img src={p.img} alt={p.title} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                ) : (
                  <div style={{ width: "100%", height: "180px", background: "#1a1a2e", display: "flex", alignItems: "center", justifyContent: "center", color: "#888" }}>No Image</div>
                )}
              </div>
              <h3 className="h2" style={{ fontSize: "20px", marginBottom: "10px", color: "white" }}>{p.title}</h3>
              <p className="p" style={{ fontSize: "14px", marginBottom: "16px", color: "#ccc" }}>{p.desc}</p>
              <div className="btnRow" style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
                {p.href && <a className="btn btnPrimary" href={p.href} target="_blank" style={{ padding: "8px 16px", background: "#A855F7", color: "white", borderRadius: "8px", textDecoration: "none" }}>Live Demo</a>}
                {p.source && <a className="btn btnGhost" href={p.source} target="_blank" style={{ padding: "8px 16px", background: "transparent", border: "1px solid #A855F7", color: "white", borderRadius: "8px", textDecoration: "none" }}>Code</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
