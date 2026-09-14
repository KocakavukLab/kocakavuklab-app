import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowUp, FaEnvelope } from "react-icons/fa";
import { Brand, nav } from "./Navbar";

const legal = [
  ["/privacypolicy", "Privacy"],
  ["/imprint", "Imprint"],
  ["/designcredits", "Design Credits"],
];

export default function Footer() {
  return (
    <footer className="hf-footer" id="footer">
      <div className="hf-footer-inner">
        <div className="hf-footer-intro">
          <Brand />
          <Link className="hf-contact-button" to="/contact">
            Contact the lab <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className="hf-footer-grid">
          <section className="hf-address">
            <h2>Find us</h2>
            <address>Hufelandstrasse 55<br />45147 Essen, Germany</address>
            <a className="hf-email" href="mailto:kocakavuklab@gmail.com">
              <FaEnvelope aria-hidden="true" />Email the lab
            </a>
          </section>
          <nav aria-label="Footer research">
            <h2>Research &amp; people</h2>
            {nav.filter(([to]) => ["/overview", "/members", "/publications", "/network"].includes(to))
              .map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
          </nav>
          <nav aria-label="Footer lab life">
            <h2>Inside the lab</h2>
            {nav.filter(([to]) => ["/news", "/moments", "/joinus", "/contact"].includes(to))
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
