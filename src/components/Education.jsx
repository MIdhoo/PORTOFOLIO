import { content } from "../data/content";

export default function Education() {
  const raw = content.education || { title: "Education", items: [] };
  const { title, items } = raw;

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="h2" style={{ marginBottom: "40px", textAlign: "center" }}>{title}</h2>
        
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            width: "100%"
        }}>
          {items.map((item, i) => (
            <article key={i} style={{
                width: "100%",
                maxWidth: "900px",
                padding: "24px",
                background: "rgba(20,16,42,0.6)",
                border: "1px solid rgba(192,132,252,0.2)",
                borderRadius: "16px"
            }}>
              <h3 className="h2" style={{ fontSize: "20px", margin: "0 0 8px", color: "white" }}>{item.school}</h3>
              <div style={{ display: "flex", gap: "10px", color: "#38BDF8", fontSize: "14px", fontWeight: "bold", marginBottom: "12px" }}>
                <span>{item.degree}</span>
                <span>•</span>
                <span>{item.year}</span>
              </div>
              <p className="p" style={{ fontSize: "15px", color: "#ccc" }}>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
