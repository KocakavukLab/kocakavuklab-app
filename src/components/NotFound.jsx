import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  FaArrowRight,
  FaBookOpen,
  FaHome,
  FaMoon,
  FaNewspaper,
  FaSun,
  FaUsers,
} from "react-icons/fa";
import "./NotFound.css";

const recoveryLinks = [
  {
    to: "/publications",
    label: "View publications",
    description: "Browse our latest work in cancer genomics and computational oncology.",
    icon: FaBookOpen,
  },
  {
    to: "/members",
    label: "Meet the team",
    description: "Find researchers, clinicians, and collaborators across our lab.",
    icon: FaUsers,
  },
  {
    to: "/news",
    label: "Latest news",
    description: "Catch up on publications, awards, grants, and lab updates.",
    icon: FaNewspaper,
  },
];

function NotFound() {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("kocakavuk-404-theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  useEffect(() => {
    window.localStorage.setItem("kocakavuk-404-theme", theme);
  }, [theme]);

  return (
    <section className={`not-found not-found--${theme}`} aria-labelledby="not-found-title">
      <Helmet>
        <title>Page not found | Kocakavuk Lab</title>
        <meta
          name="description"
          content="This page could not be found. Continue to Kocakavuk Lab research, publications, team, or news."
        />
        <meta property="og:title" content="Page not found | Kocakavuk Lab" />
        <meta
          property="og:description"
          content="Lost your place? Return to Kocakavuk Lab research, publications, team, or news."
        />
        <meta property="og:image" content="https://kocakavuklab.com/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://kocakavuklab.com/og.png" />
      </Helmet>

      <div className="not-found__glow not-found__glow--one" aria-hidden="true" />
      <div className="not-found__glow not-found__glow--two" aria-hidden="true" />

      <div className="not-found__shell">
        <div className="not-found__utility">
          <p className="not-found__eyebrow">Lost signal · Error 404</p>
          <button
            type="button"
            className="not-found__theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
        </div>

        <div className="not-found__hero">
          <div className="not-found__copy">
            <p className="not-found__code" aria-hidden="true">
              4<span>0</span>4
            </p>
            <h1 id="not-found-title">Page not found</h1>
            <p className="not-found__lede">
              Sorry, we couldn&apos;t find the page you were looking for. The address may have
              changed, but our research is still here.
            </p>

            <Link className="not-found__home" to="/overview">
              <FaHome aria-hidden="true" />
              Go back home
              <FaArrowRight className="not-found__home-arrow" aria-hidden="true" />
            </Link>

            <p className="not-found__path">
              Missing path <span>{pathname}</span>
            </p>
          </div>

          <div className="not-found__visual">
            <picture>
              <source srcSet="/404-dna-recovery.svg" type="image/svg+xml" />
              <img
                className="not-found__illustration"
                src="/404-dna-recovery.png"
                alt="A broken DNA double helix reconnecting through a genomic search path"
              />
            </picture>
            <p aria-hidden="true">Sequence interrupted</p>
          </div>
        </div>

        <div className="not-found__recovery" aria-labelledby="recovery-title">
          <div className="not-found__recovery-heading">
            <p>Continue exploring</p>
            <h2 id="recovery-title">Choose your next path</h2>
          </div>

          <div className="not-found__links">
            {recoveryLinks.map(({ to, label, description, icon: Icon }, index) => (
              <Link className="not-found__link" to={to} key={to}>
                <span className="not-found__link-number">0{index + 1}</span>
                <span className="not-found__link-icon">
                  <Icon aria-hidden="true" />
                </span>
                <span className="not-found__link-copy">
                  <strong>{label}</strong>
                  <small>{description}</small>
                </span>
                <FaArrowRight className="not-found__link-arrow" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
