import "./styles/theme.css";
import "./styles/app.css";

import ErrorBoundary from "./components/ErrorBoundary";

import ParticleBackground from "./components/ParticleBackground";
import SnowOverlay from "./components/SnowOverlay";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Background effects: kalau crash, UI utama tetap hidup */}
      <ErrorBoundary fallback={null}>
        <ParticleBackground />
      </ErrorBoundary>

      <ErrorBoundary fallback={null}>
        <SnowOverlay />
      </ErrorBoundary>

      {/* Pastikan konten di atas background */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
