import { content } from "../data/content";

export default function Education() {
  const { title, items } = content.education || { title: "Education", items: [] };

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="h2" style={{ marginBottom: "40px", textAlign: "center" }}>{title}</h2>
        
        {/* INLINE STYLE: Column Container CENTER */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", /* PEMUSATAN VERTIKAL */
          gap: "24px",
          width: "100%"
        }}>
          {items.map((item, i) => (
            <article key={i} className="card-base" style={{
              width: "100%",
              maxWidth: "900px" /* Lebar Kartu Education lebih lebar */
            }}>
              <h3 className="h2" style={{ fontSize: "20px", margin: "0 0 8px" }}>{item.school}</h3>
              <div style={{ display: "flex", gap: "10px", color: "var(--primary)", fontSize: "14px", fontWeight: "bold", marginBottom: "12px" }}>
                <span>{item.degree}</span>
                <span>•</span>
                <span>{item.year}</span>
              </div>
              <p className="p" style={{ fontSize: "15px" }}>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
