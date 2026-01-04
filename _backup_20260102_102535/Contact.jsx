import { content } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="h2">{content.contact.title}</h2>

        <div className="glass" style={{ padding: 20 }}>
          <p className="p">{content.contact.desc}</p>

          <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
            {content.socials.map((s) => (
              <a key={s.label} className="btn" href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>

          <div className="small" style={{ marginTop: 10 }}>
            Opsional nanti: form kirim pesan pakai EmailJS atau Formspree.
          </div>
        </div>
      </div>
    </section>
  );
}
