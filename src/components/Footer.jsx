import { content } from "../data/content";

export default function Footer() {
  return (
    <footer style={{ padding: "34px 0", color: "rgba(245,240,255,0.55)" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <div>© {new Date().getFullYear()} {content.profile.name}</div>
        <div>Built with React + Vite</div>
      </div>
    </footer>
  );
}
