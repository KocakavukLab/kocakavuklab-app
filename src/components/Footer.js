import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import labLogoFull from "../assets/logos/lablogowhite_full.svg";

function Footer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 150 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.4 },
            size: { value: 1.2 },
            line_linked: {
              enable: true,
              distance: 120,
              color: "#ffffff",
              opacity: 0.8,
              width: 0.8,
            },
            move: { enable: true, speed: 1 },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 80 },
              push: { particles_nb: 1 },
            },
          },
          retina_detect: true,
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <footer className="relative overflow-hidden bg-black text-slate-300 py-10">
      {/* Particles background */}
      <div
        id="particles-js"
        className="absolute top-0 left-0 w-full h-full z-0"
      ></div>

      {/* Compact content box with minimal blur */}
      <div className="relative z-10 w-fit mx-auto bg-black/30 backdrop-blur-[1px] rounded-md px-4 py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left text-sm">

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base font-semibold mb-1">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/imprint" className="hover:underline hover:text-cyan-300">
                  Imprint
                </Link>
              </li>
              <li>
                <Link to="/privacypolicy" className="hover:underline hover:text-cyan-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/designcredits" className="hover:underline hover:text-cyan-300">
                  Design Credits
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="flex justify-center items-center">
            <img
              src={labLogoFull}
              alt="Kocakavuk Lab"
              className="h-28 w-28 md:h-44 md:w-44"
            />
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-base font-semibold mb-1">Contact</h3>
            <p>West German Cancer Center</p>
            <p>University Hospital Essen (AöR)</p>
            <p>Hufelandstrasse 55</p>
            <p>D-45147 Essen</p>
            <p>
              Email:{" "}
              <a href="mailto:kocakavuklab@gmail.com" className="hover:underline hover:text-cyan-300">
                contact@kocakavuklab.com 
              </a>
            </p>
           {/* take phone number out whenever needed
           <p>Phone: +49-(0)201-723-0</p>*/}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 text-center mt-4 text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Kocakavuk Lab Computational Oncology. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
