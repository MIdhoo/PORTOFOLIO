import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import SnowOverlay from "./components/SnowOverlay";
import "./styles/app.css";

function App() {
  return (
    <>
      <ParticleBackground />
      <SnowOverlay />
      
      {/* BANNER DEBUGGING - Hapus baris ini nanti kalau sudah fix */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', background: 'red', color: 'white', zIndex: 999999, textAlign: 'center', fontSize: '12px', padding: '2px' }}>
        UPDATE BERHASIL - V2.0 (Force Center)
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      
      {/* Bagian yang kita perbaiki */}
      <Projects />
      <Education />
      <Achievements />
      
      <Contact />
      <Footer />
    </>
  );
}

export default App;
