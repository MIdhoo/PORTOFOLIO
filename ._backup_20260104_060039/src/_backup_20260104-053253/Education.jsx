import React from "react";
import { content } from "../data/content";

export default function Education() {
  const title = content?.education?.title ?? "Riwayat Pendidikan";
  const items = content?.education?.items ?? [];

  return (
    <section id="education" style={{ padding: "56px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 22 }}>
          {title}
        </h2>

        <div style={{ display: "grid", gap: 18, justifyItems: "center" }}>
          {items.map((edu, idx) => (
            <article
              key={`${edu.institution}-${idx}`}
              style={{
                width: "100%",
                maxWidth: 980,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 18,
                padding: 22,
                boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3 style={{ fontSize: "1.35rem", fontWeight: 750, marginBottom: 10 }}>
                {edu.institution}
              </h3>

              <div style={{ lineHeight: 1.8, opacity: 0.95 }}>
                {edu.jurusan && (
                  <div>
                    <strong>Jurusan:</strong> {edu.jurusan}
                  </div>
                )}
                {edu.lokasi && (
                  <div>
                    <strong>Lokasi:</strong> {edu.lokasi}
                  </div>
                )}
                {edu.periode && (
                  <div>
                    <strong>Periode:</strong> {edu.periode}
                  </div>
                )}
              </div>

              {edu.deskripsi && (
                <p style={{ marginTop: 10, opacity: 0.92 }}>
                  {edu.deskripsi}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
