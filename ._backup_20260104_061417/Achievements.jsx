import { content } from "../data/content";

export default function Achievements() {
  const empty = !content.achievements || content.achievements.length === 0;

  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="h2">Prestasi</h2>

        <div className="glass" style={{ padding: 18 }}>
          {empty ? (
            <>
              <div className="small">Belum ada prestasi ditampilkan.</div>
              <div className="p" style={{ marginTop: 8 }}>
                Isi di <b>src/data/content.js</b> bagian <b>achievements</b> (judul, tahun, catatan).
              </div>

              <div className="timeline" style={{ marginTop: 14, opacity: 0.85 }}>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="tItem">
                    <div className="tDot" />
                    <div className="tCard">
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                        <div style={{ fontWeight: 800 }}>Judul Prestasi</div>
                        <div className="small">20XX</div>
                      </div>
                      <p className="p" style={{ marginTop: 10 }}>
                        Catatan singkat (event, peringkat, peran kamu, atau hasil yang dicapai).
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="timeline">
              {(content.achievements ?? []).map((a) => (
                <div key={a.title + a.year} className="tItem">
                  <div className="tDot" />
                  <div className="tCard">
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                      <div style={{ fontWeight: 800 }}>{a.title}</div>
                      <div className="small">{a.year}</div>
                    </div>
                    <p className="p" style={{ marginTop: 10 }}>{a.note}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="small" style={{ marginTop: 10 }}>
            Template tetap ada, tinggal isi kapan saja.
          </div>
        </div>
      </div>
    </section>
  );
}

