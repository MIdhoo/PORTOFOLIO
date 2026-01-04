import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      {/* Aurora layer (subtle links + gentle drift) */}
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
            opacity: { value: 0.22 },
            size: { value: { min: 1, max: 3 } },
            move: {
              enable: true,
              speed: 0.45,
              direction: "none",
              outModes: { default: "out" },
            },
            links: {
              enable: true,
              distance: 160,
              opacity: 0.10,
              width: 1,
              color: "#C084FC",
            },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 90, duration: 0.25 } },
          },
        }}
      />

      {/* Snow layer (falling particles) */}
      <Particles
        id="tsparticles-snow"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          detectRetina: true,
          interactivity: {
            events: { resize: true }, // no hover effects for snow
          },
          particles: {
            number: { value: 85, density: { enable: true, area: 1200 } },
            color: { value: ["#F5F0FF", "#C084FC"] },
            opacity: {
              value: { min: 0.25, max: 0.65 },
              animation: { enable: true, speed: 0.8, minimumValue: 0.2, sync: false },
            },
            size: { value: { min: 1, max: 4 } },
            shape: { type: "circle" },
            move: {
              enable: true,
              direction: "bottom",
              speed: { min: 0.35, max: 1.15 },
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
