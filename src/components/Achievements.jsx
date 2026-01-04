import { content } from "../data/content";

export default function Achievements() {
  const raw = content.achievements || { title: "Achievements", items: [] };
  const { title, items } = raw;

  return (
    <section id="achievements" className="section">
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
               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                  <h3 className="h2" style={{ fontSize: "18px", margin: 0, color: "white" }}>{item.title}</h3>
                  <span style={{ padding: "4px 12px", borderRadius: "20px", background: "rgba(56, 189, 248, 0.15)", color: "#38BDF8", fontSize: "12px" }}>
                    {item.metric}
                  </span>
               </div>
               <p className="p" style={{ fontSize: "14px", color: "#ccc" }}>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
