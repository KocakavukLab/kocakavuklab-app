import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

let engineReady;
const options = {
  fullScreen: { enable: false },
  fpsLimit: 30,
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  particles: {
    number: { value: 55 },
    color: { value: "#ff914d" },
    links: { enable: true, color: "#ff914d", distance: 150, opacity: 0.22 },
    opacity: { value: 0.45 },
    size: { value: { min: 1, max: 2.5 } },
    move: { enable: true, speed: 0.35, outModes: { default: "bounce" } },
  },
};

export default function FooterParticles() {
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (reduced) return;
    let active = true;
    engineReady ??= initParticlesEngine(loadSlim);
    engineReady.then(() => { if (active) setReady(true); })
      .catch(() => { engineReady = undefined; });
    return () => { active = false; };
  }, [reduced]);
  return <div className="hf-footer-particles" aria-hidden="true">
    {ready && !reduced && <Particles id="footer-particles" options={options} />}
  </div>;
}
