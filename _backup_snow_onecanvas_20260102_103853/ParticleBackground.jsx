import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      {/* Aurora layer (behind UI) */}
      <Particles
        id="tsparticles-aurora"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -2 },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          detectRetina: true,
          particles: {
            number: { value: 45, density: { enable: true, area: 1000 } },
            color: { value: ["#A855F7", "#C084FC", "#38BDF8"] },
            opacity: { value: 0.20 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.42, direction: "none", outModes: { default: "out" } },
            links: { enable: true, distance: 160, opacity: 0.10, width: 1, color: "#C084FC" },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 90, duration: 0.25 } },
          },
        }}
      />

      {/* Snow layer (overlay above UI) */}
      <Particles
        id="tsparticles-snow"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: 10 },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          detectRetina: true,
          interactivity: { events: { resize: true } },
          particles: {
            number: { value: 220, density: { enable: true, area: 1200 } },
            color: { value: ["#F5F0FF", "#C084FC"] },
            opacity: { value: { min: 0.75, max: 1 } },
            size: { value: { min: 1, max: 4 } },
            shape: { type: "circle" },
            move: {
              enable: true,
              direction: "bottom",
              speed: { min: 0.6, max: 1.8 },
              straight: false,
              outModes: { default: "out", bottom: "out" },
            },
            links: { enable: false },
          },
        }}
      />
    </>
  );
}

