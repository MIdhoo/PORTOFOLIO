import { content } from "../data/content";

export default function Education() {
  const education = Array.isArray(content.education) ? content.education : [];
  if (!education.length) return null;

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="section-title">Riwayat Pendidikan</h2>

        <div className="education-stack">
          {education.map((edu) => (
            <article key={edu.institution} className="education-card">
              <h3 className="education-title">{edu.institution}</h3>

              <div className="education-meta">
                <p><span>Jurusan:</span> {edu.major}</p>
                <p><span>Lokasi:</span> {edu.location}</p>
                <p><span>Periode:</span> {edu.period}</p>
              </div>

              <p className="education-desc">{edu.description}</p>

              {Array.isArray(edu.highlights) && edu.highlights.length > 0 && (
                <ul className="education-highlights">
                  {edu.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}