import GoToTopButton from "../common/GoToTopButton";
import { networkGroups } from "../../data/networkData";
import coverImg from "../../assets/covers/maincover.jpg";
import "../../App.css";

// ---- Theme (light) ----
const T = { page: "#F6F2EC", surface: "#FFFFFF", ink: "#14181F", muted: "#5B6472", line: "#E4DCD1" };
const DISPLAY = '"Space Grotesk", system-ui, sans-serif';
const BODY = '"DM Sans", system-ui, -apple-system, sans-serif';
const ORANGE = "#FF914D";

const LogoGrid = ({ items }) => (
  <div className="mt-4 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
    {items.map((it) => (
      <a
        key={it.id}
        href={it.url && it.url !== "#" ? it.url : undefined}
        target={it.url && it.url !== "#" ? "_blank" : undefined}
        rel="noreferrer"
        aria-label={it.title}
        className="flex min-h-[200px] flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl border bg-white p-4 text-center transition hover:-translate-y-1 hover:border-[#FF914D]"
        style={{ borderColor: T.line }}
      >
        <span className="flex h-24 w-full items-center justify-center">
          <img src={it.logo} alt={it.title} loading="lazy" className="max-h-full max-w-[85%] object-contain" />
        </span>
        <span className="w-full text-base font-semibold leading-tight" style={{ color: T.ink }}>{it.title}</span>
      </a>
    ))}
  </div>
);

function Network() {
  const collab = networkGroups.find((g) => g.id === "network");

  return (
    <div className="min-h-screen" style={{ background: T.page, fontFamily: BODY }}>
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${coverImg})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ORANGE, fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace" }}>Collaborations &amp; funding</p>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: DISPLAY, letterSpacing: "-0.02em", textShadow: "0 2px 20px rgba(0,0,0,.5)" }}>Our Network</h1>
          <p className="mt-2 max-w-2xl text-white/85">Collaborations that connect clinical care, computation and cancer research.</p>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-6 py-14">
        {collab && <LogoGrid items={collab.items} />}
      </div>

      <GoToTopButton />
    </div>
  );
}

export default Network;
