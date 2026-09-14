import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logos/lablogo_complete.svg";
import "./Navbar.css";

export const nav = [
  ["/overview", "Overview"],
  ["/members", "Members"],
  ["/publications", "Publications"],
  ["/network", "Network"],
  ["/news", "News"],
  ["/moments", "Moments"],
  ["/contact", "Contact"],
  ["/joinus", "Join Us"],
];

export function Brand() {
  return (
    <Link className="hf-brand" to="/overview">
      <svg viewBox="180 115 140 190" aria-hidden="true" focusable="false">
        <image href={logo} width="500" height="500" />
      </svg>
      <span>Kocakavuk Lab{" "}<small>Computational Oncology</small></span>
    </Link>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const toggle = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);

  return (
    <header aria-label="Site header" className="hf-header" ref={ref}>
      <div className="hf-header-inner">
        <Brand />
        <button
          className="hf-toggle"
          ref={toggle}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="hf-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}<span>Menu</span>
        </button>
        <nav id="hf-navigation" className={open ? "is-open" : ""} aria-label="Primary navigation">
          {nav.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `hf-link ${to === "/joinus" ? "hf-join" : ""} ${isActive ? "is-active" : ""}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
