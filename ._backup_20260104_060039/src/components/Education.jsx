import { content } from "../data/content";

export default function Education() {
  const items = Array.isArray(content.education) ? content.education : [];

  if (!items.length) return null;

  return (
    <section id="education" className="section">
      <h2 className="section-title">Riwayat Pendidikan</h2>

      <div className="education-grid">
        {items.map((e) => (
          <article key={e.institution} className="education-card">
            <h3 className="education-title">{e.institution}</h3>

            <div className="education-meta">
              <p><strong>Jurusan:</strong> {e.major}</p>
              <p><strong>Lokasi:</strong> {e.location}</p>
              <p><strong>Periode:</strong> {e.period}</p>
            </div>

            <p className="education-desc">{e.description}</p>

            {Array.isArray(e.highlights) && e.highlights.length > 0 && (
              <ul className="education-points">
                {e.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
