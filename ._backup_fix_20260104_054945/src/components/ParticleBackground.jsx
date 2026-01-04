import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      {/* Aurora (behind UI) */}
      <Particles
        id="aurora"
        init={particlesInit}
        style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          detectRetina: true,
          particles: {
            number: { value: 40, density: { enable: true, area: 1100 } },
            color: { value: ["#A855F7", "#C084FC", "#38BDF8"] },
            opacity: { value: 0.18 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.35, direction: "none", outModes: { default: "out" } },
            links: { enable: true, distance: 170, opacity: 0.08, width: 1, color: "#C084FC" },
          },
          interactivity: { events: { resize: true } },
        }}
      />

      {/* Snow (FORCED overlay above UI) */}
      <Particles
        id="snow"
        init={particlesInit}
        style={{ position: "fixed", inset: 0, zIndex: 99999, pointerEvents: "none" }}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          detectRetina: true,
          particles: {
            number: { value: 180, density: { enable: true, area: 800 } },
            color: { value: ["#F5F0FF", "#C084FC"] },
            opacity: { value: { min: 0.35, max: 0.9 } },
            size: { value: { min: 1, max: 5 } },
            shape: { type: "circle" },
            move: {
              enable: true,
              direction: "bottom",
              speed: { min: 0.9, max: 2.6 },
              straight: false,
              outModes: { default: "out", bottom: "out" },
            },
            links: { enable: false },
          },
          interactivity: { events: { resize: true } },
        }}
      />
    </>
  );
}
