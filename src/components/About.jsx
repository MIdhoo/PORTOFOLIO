import { content } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="h2">{content.about.title}</h2>
        <div className="glass" style={{ padding: 20 }}>
          <p className="p">{content.about.desc}</p>
        </div>
      </div>
    </section>
  );
}
