import { content } from "../data/content";
import { motion } from "framer-motion";

export default function Hero() {
  const { profile, socials } = content;

  return (
    <section className="section">
      <div className="container glass" style={{ padding: 26 }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="small">{profile.location}</div>

          <h1 className="h1" style={{ marginTop: 10 }}>
            {profile.name}
          </h1>

          <div className="p" style={{ fontSize: 18, marginTop: 10 }}>
            {profile.role}
          </div>

          <p className="p" style={{ marginTop: 14, maxWidth: 780 }}>
            {profile.tagline}
          </p>

          <div className="btnRow">
            <a className="btn btnPrimary" href={profile.cvUrl}>
              Download CV
            </a>
            <a className="btn btnGhost" href="#contact">
              Contact
            </a>
          </div>

          <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                className="badge"
                href={s.href}
                target="_blank"
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
