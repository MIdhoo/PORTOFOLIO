import { content } from "../data/content";

export default function Education() {
  const list = Array.isArray(content?.education)
    ? content.education
    : Array.isArray(content?.education?.items)
      ? content.education.items
      : [];

  if (!list.length) return null;

  return (
    <section id="education" className="section education">
      <h2 className="section-title">Riwayat Pendidikan</h2>

      <div className="edu-wrap">
        {list.map((edu) => (
          <article key={edu.id || edu.institution} className="edu-card">
            <h3 className="edu-title">{edu.institution}</h3>

            <div className="edu-meta">
              <div><span>Jurusan:</span> {edu.major}</div>
              <div><span>Lokasi:</span> {edu.location}</div>
              <div><span>Periode:</span> {edu.periode}</div>
            </div>

            {edu.desc ? <p className="edu-desc">{edu.desc}</p> : null}

            {Array.isArray(edu.highlights) && edu.highlights.length ? (
              <ul className="edu-highlights">
                {edu.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
