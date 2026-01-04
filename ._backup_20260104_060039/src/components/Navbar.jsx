import { content } from "../data/content";

export default function Navbar() {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 10, padding: "14px 0" }}>
      <div
        className="container glass"
        style={{
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>
          {content.profile.name}
        </div>

        <nav style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          {["about", "skills", "projects", "achievements", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="small"
              style={{ padding: "8px 10px", borderRadius: 12 }}
            >
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
