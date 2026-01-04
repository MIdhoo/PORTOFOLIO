import "./styles/theme.css";
import "./styles/app.css";

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
      <ParticleBackground />
      <SnowOverlay />
<Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
      <Education />
      <Education />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}







