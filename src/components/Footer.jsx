import { Link } from "react-router-dom";
import { FaArrowUp, FaEnvelope } from "react-icons/fa";
import { Brand, nav } from "./Navbar";

import LocationMap from "./common/LocationMap";
import FooterParticles from "./FooterParticles";

const legal = [
  ["/privacypolicy", "Privacy"],
  ["/imprint", "Imprint"],
  ["/designcredits", "Design Credits"],
];

export default function Footer() {
  return (
    <footer className="hf-footer" id="footer">
      <FooterParticles />
      <div className="hf-footer-inner">
        <div className="hf-footer-intro">
          <Brand />
        </div>
        <div className="hf-footer-grid">
          <section className="hf-address">
            <LocationMap />
            <h2>Find us</h2>
            <address>Hufelandstrasse 55<br />45147 Essen, Germany</address>
            <a className="hf-email" href="mailto:contact@kocakavuklab.com">
              <FaEnvelope aria-hidden="true" />Email the lab
            </a>
            <a className="hf-map-link" href="https://www.google.com/maps/search/?api=1&query=Universit%C3%A4tsklinikum%20Essen%20H%C3%A4matologie%20Hufelandstra%C3%9Fe%2055%20Essen" target="_blank" rel="noopener noreferrer">Open Hematology location in Google Maps ↗</a>
          </section>
          <nav aria-label="Footer research">
            <h2>Research &amp; people</h2>
            {nav.filter(([to]) => ["/overview", "/members", "/publications", "/network"].includes(to))
              .map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
          </nav>
          <nav aria-label="Footer lab life">
            <h2>Inside the lab</h2>
            {nav.filter(([to]) => ["/news", "/moments", "/joinus"].includes(to))
              .map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
          </nav>
          <nav aria-label="Footer information">
            <h2>Information</h2>
            {legal.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
            <button className="hf-top" onClick={() => window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
            })}>
              Back to top <FaArrowUp aria-hidden="true" />
            </button>
          </nav>
        </div>
        <div className="hf-footer-bottom">
          <span>© {new Date().getFullYear()} Kocakavuk Lab. All rights reserved.</span>
          <span>Computational Oncology · Essen</span>
        </div>
      </div>
    </footer>
  );
}
