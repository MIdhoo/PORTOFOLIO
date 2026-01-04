import { content } from "../data/content";

export default function Education() {
  const list = Array.isArray(content.education) ? content.education : (content.education?.items ?? []);

  // pastikan urut: SMA dulu, lalu Kuliah
  const order = { sma: 1, smk: 1, umm: 2, kuliah: 2, campus: 2 };
  const sorted = [...list].sort((a, b) => (order[a?.id] ?? 99) - (order[b?.id] ?? 99));

  return (
    <section id="education" className="edu-section">
      <h2 className="edu-title">Riwayat Pendidikan</h2>

      <div className="edu-wrap">
        {sorted.map((edu) => (
          <article key={edu.id || edu.institution} className="edu-card">
            <h3 className="edu-school">{edu.institution}</h3>

            <div className="edu-meta">
              <div><span>Jurusan:</span> {edu.major}</div>
              <div><span>Lokasi:</span> {edu.location}</div>
              <div><span>Periode:</span> {edu.periode}</div>
            </div>

            {edu.desc ? <p className="edu-desc">{edu.desc}</p> : null}

            {Array.isArray(edu.highlights) && edu.highlights.length > 0 ? (
              <ul className="edu-highlights">
                {edu.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
