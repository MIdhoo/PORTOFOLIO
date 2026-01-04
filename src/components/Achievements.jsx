import { content } from "../data/content";

export default function Achievements() {
  const { title, items } = content.achievements;

  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="h2" style={{ marginBottom: "30px", textAlign: "center" }}>{title}</h2>

        <div className="grid-center">
          {items.map((item, i) => (
            <article key={i} className="card achievement-card" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <h3 className="h2" style={{ fontSize: "18px", margin: 0 }}>{item.title}</h3>
                  <span className="badge" style={{ background: "rgba(56, 189, 248, 0.15)", color: "#38BDF8", borderColor: "transparent" }}>
                    {item.metric}
                  </span>
               </div>
               <p className="p" style={{ fontSize: "14px" }}>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
