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
        fullScreen: { enable: true, zIndex: 9999 }, // overlay ABOVE everything
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        detectRetina: true,

        // Aurora dots (background vibe)
        particles: {
          number: { value: 35, density: { enable: true, area: 1100 } },
          color: { value: ["#A855F7", "#C084FC", "#38BDF8"] },
          opacity: { value: 0.18 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.35, direction: "none", outModes: { default: "out" } },
          links: { enable: true, distance: 170, opacity: 0.08, width: 1, color: "#C084FC" },
        },

        // Snow via emitters (this is the important part)
        emitters: [
          // Small flakes (main snowfall)
          {
            position: { x: 50, y: -2 },
            size: { width: 100, height: 0 },
            rate: { delay: 0.06, quantity: 2 },
            particles: {
              color: { value: ["#F5F0FF", "#C084FC"] },
              opacity: { value: { min: 0.35, max: 0.85 } },
              size: { value: { min: 1, max: 3 } },
              links: { enable: false },
              move: {
                enable: true,
                direction: "bottom",
                speed: { min: 0.8, max: 2.0 },
                straight: false,
                outModes: { default: "out", bottom: "out" },
              },
            },
          },

          // Big flakes (rare, cinematic)
          {
            position: { x: 50, y: -2 },
            size: { width: 100, height: 0 },
            rate: { delay: 0.22, quantity: 1 },
            particles: {
              color: { value: "#F5F0FF" },
              opacity: { value: { min: 0.18, max: 0.45 } },
              size: { value: { min: 4, max: 7 } },
              links: { enable: false },
              move: {
                enable: true,
                direction: "bottom",
                speed: { min: 0.35, max: 0.9 },
                straight: false,
                outModes: { default: "out", bottom: "out" },
              },
            },
          },
        ],

        interactivity: {
          events: { resize: true },
        },
      }}
    />
  );
}
