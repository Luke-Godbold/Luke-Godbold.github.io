import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = ({ darkMode = true }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particleColor = darkMode ? "#ffffff" : "#000000";

  if (init) {
    return (
      <Particles
        key={darkMode ? "dark" : "light"}
        id="tsparticles"
        style={{ width: "100%", height: "100%" }}
        options={{
          fullScreen: { enable: false },
          background: {
            color: { value: darkMode ? "#1c1c1c" : "#a8a29e" },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              push: { quantity: 3 },
              grab: { distance: 150, links: { opacity: 0.5 } },
            },
          },
          particles: {
            color: { value: particleColor },
            links: {
              color: particleColor,
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 60,
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
    );
  }

  return <></>;
};

export default ParticlesBackground;
