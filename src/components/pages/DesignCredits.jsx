import { Link } from "react-router-dom";
import GoToTopButton from "../common/GoToTopButton";
import coverImg from "../../assets/covers/maincover.jpg";

// ---- Theme (light) ----
const T = { page: "#F6F2EC", surface: "#FFFFFF", ink: "#14181F", muted: "#5B6472", line: "#E4DCD1" };
const DISPLAY = '"Space Grotesk", system-ui, sans-serif';
const BODY = '"DM Sans", system-ui, -apple-system, sans-serif';
const MONO = "ui-monospace, 'SF Mono', Menlo, monospace";
const ORANGE = "#FF914D";

const groups = [
  {
    title: "Core & UI",
    items: [
      { label: "React", to: "https://react.dev/", detail: "Interface framework" },
      { label: "React Router", to: "https://reactrouter.com/", detail: "Page routing" },
      { label: "Tailwind CSS", to: "https://tailwindcss.com/", detail: "Responsive styling" },
      { label: "Framer Motion", to: "https://www.framer.com/motion/", detail: "Interface animation" },
    ],
  },
  {
    title: "Content & Interaction",
    items: [
      { label: "React Icons", to: "https://react-icons.github.io/react-icons/", detail: "Interface and social icons" },
      { label: "React Markdown", to: "https://github.com/remarkjs/react-markdown", detail: "News article rendering" },
      { label: "EmailJS", to: "https://www.emailjs.com/", detail: "Contact form delivery" },
      { label: "canvas-confetti", to: "https://www.npmjs.com/package/canvas-confetti", detail: "News interactions" },
      { label: "Particles.js", to: "https://github.com/VincentGarreau/particles.js/", detail: "Footer particle network" },
      { label: "X Embedded Timeline", to: "https://help.x.com/en/using-x/embed-x-feed", detail: "Official expandable Overview profile feed" },
    ],
  },
  {
    title: "Visual Assets",
    items: [
      { label: "Adobe Firefly", to: "https://www.adobe.com/products/firefly.html", detail: "DNA cover artwork" },
      { label: "Google Fonts", to: "https://fonts.google.com/", detail: "Space Grotesk and DM Sans" },
      { label: "Journal artwork", detail: "Publication covers and journal marks belong to their publishers" },
      { label: "Organization marks", detail: "Collaborator and funder logos belong to their organizations" },
      { label: "Kocakavuk Lab", detail: "Member portraits, news images, and moments photography" },
    ],
  },
  {
    title: "Delivery",
    items: [
      { label: "Cloudflare", to: "https://www.cloudflare.com/", detail: "Site hosting and delivery" },
      { label: "jsDelivr", to: "https://www.jsdelivr.com/", detail: "Particles.js CDN" },
    ],
  },
  {
    title: "Architecture & Maintenance",
    wide: true,
    items: [
      { label: "Pranav Swaroop Gundla", to: "https://github.com/psgundla", detail: "Lab website architect and maintainer" },
      { label: "Mahsasadat Nezamabadi", to: "https://github.com/MahsasadatNezamabadi", detail: "Lab website maintainer" },
      { label: "Codex by OpenAI", to: "https://openai.com/codex/", detail: "Development assistance" },
    ],
  },
];

const DesignCredits = () => {
  return (
    <div className="min-h-screen" style={{ background: T.page, fontFamily: BODY }}>
      {/* Header band */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${coverImg})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ORANGE, fontFamily: MONO }}>Colophon</p>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: DISPLAY, letterSpacing: "-0.02em", textShadow: "0 2px 20px rgba(0,0,0,.5)" }}>Site Credits</h1>
          <p className="mt-2 text-white/85">
            Designed with <span aria-hidden="true">&#x2764;</span> by{" "}
            <Link to="https://biocoderr.github.io" className="font-semibold" style={{ color: ORANGE }}>Pranav</Link>
            {" & "}
            <Link to="https://github.com/MahsasadatNezamabadi" className="font-semibold" style={{ color: ORANGE }}>Mahsa</Link>
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {groups.map(({ title, items, wide }, i) => (
            <div
              key={title}
              className={`rounded-2xl border bg-white p-6 shadow-sm${wide ? " md:col-span-2" : ""}`}
              style={{ borderColor: T.line }}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-lg font-extrabold" style={{ fontFamily: DISPLAY, color: ORANGE }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-[13px] font-bold uppercase tracking-[0.14em]" style={{ color: T.ink }}>
                  {title}
                </h2>
              </div>
              <ul
                className={`mt-4 text-sm ${wide ? "divide-y md:grid md:grid-cols-3 md:divide-x md:divide-y-0" : "divide-y"}`}
                style={{ color: T.muted, borderColor: T.line }}
              >
                {items.map(({ label, to, detail }) => (
                  <li
                    key={label}
                    className={wide ? "py-4 first:pt-0 last:pb-0 md:px-5 md:py-0 md:first:pl-0 md:last:pr-0" : "py-3 first:pt-0 last:pb-0"}
                  >
                    <div>
                      {to ? (
                        <a href={to} target="_blank" rel="noreferrer" className="font-semibold hover:text-[#FF914D]" style={{ color: T.ink }}>
                          {label} <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <span className="font-semibold" style={{ color: T.ink }}>{label}</span>
                      )}
                      <span className="mt-0.5 block text-[12.5px] leading-relaxed">{detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <GoToTopButton />
    </div>
  );
};

export default DesignCredits;
