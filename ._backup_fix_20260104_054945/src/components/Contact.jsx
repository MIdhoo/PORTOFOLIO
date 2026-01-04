import { useMemo, useState } from "react";
import { content } from "../data/content";

const FORMSPREE_ENDPOINT = ""; 
// Isi via terminal nanti: https://formspree.io/f/xxxxxxx

export default function Contact() {
  const [status, setStatus] = useState("");

  const endpoint = useMemo(() => FORMSPREE_ENDPOINT.trim(), []);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("");

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    if (!name || !email || !message) {
      setStatus("Lengkapi semua field ya.");
      return;
    }

    // Jika endpoint kosong, fallback ke mailto
    if (!endpoint) {
      const subject = encodeURIComponent("Portfolio Contact");
      const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:${content.socials.find(s=>s.label==="Email")?.href?.replace("mailto:","") || ""}?subject=${subject}&body=${body}`;
      setStatus("Membuka email client (mailto). Untuk form beneran, isi Formspree endpoint.");
      return;
    }

    try {
      const res = await fetch(endpoint, { method: "POST", body: form, headers: { Accept: "application/json" } });
      if (res.ok) {
        e.currentTarget.reset();
        setStatus("✅ Pesan terkirim. Makasih!");
      } else {
        setStatus("❌ Gagal mengirim. Coba lagi atau pakai link kontak di bawah.");
      }
    } catch {
      setStatus("❌ Gagal mengirim. Cek koneksi atau endpoint Formspree.");
    }
  }

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

          <form className="form" onSubmit={onSubmit}>
            <div className="field">
              <label className="small">Nama</label>
              <input className="input" name="name" placeholder="Nama kamu" />
            </div>

            <div className="field">
              <label className="small">Email</label>
              <input className="input" name="email" type="email" placeholder="email@domain.com" />
            </div>

            <div className="field" style={{ gridColumn: "1 / -1" }}>
              <label className="small">Pesan</label>
              <textarea className="textarea" name="message" placeholder="Tulis pesanmu..." />
            </div>

            <div className="formActions">
              <button className="btn btnPrimary" type="submit">Kirim Pesan</button>
              <a className="btn btnGhost" href="#projects">Lihat Projects</a>
            </div>

            {status ? <div className="notice">{status}</div> : null}
            <div className="notice">
              Kalau mau form beneran (tanpa mailto), pakai Formspree lalu isi endpoint via terminal.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
