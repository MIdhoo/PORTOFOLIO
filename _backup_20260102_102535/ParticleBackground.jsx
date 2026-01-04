import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: { value: 60, density: { enable: true, area: 900 } },
          color: { value: ["#A855F7", "#C084FC", "#38BDF8"] },
          opacity: { value: 0.35 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.55, direction: "none", outModes: { default: "out" } },
          links: { enable: true, distance: 140, opacity: 0.16, width: 1, color: "#C084FC" },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" }, resize: true },
          modes: { repulse: { distance: 110, duration: 0.25 } },
        },
      }}
    />
  );
}
