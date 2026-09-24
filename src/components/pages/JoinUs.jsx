import { Link } from "react-router-dom";
import GoToTopButton from "../common/GoToTopButton";
import { jobPositions } from "../../data/jobsData";
import { principalInvestigator } from "../../data/membersData";
import coverImg from "../../assets/covers/maincover.optimized.webp";
import "../../App.css";

// ---- Theme (light) ----
const T = { page: "#F6F2EC", surface: "#FFFFFF", ink: "#14181F", muted: "#5B6472", line: "#E4DCD1", tile: "#EDE7DE" };
const DISPLAY = '"Space Grotesk", system-ui, sans-serif';
const BODY = '"DM Sans", system-ui, -apple-system, sans-serif';
const MONO = "ui-monospace, 'SF Mono', Menlo, monospace";
const ORANGE = "#FF914D";

const initials = (n) => n.split(" ").map((p) => p[0]).slice(0, 2).join("");

function JoinUs() {
  const pi = principalInvestigator;
  const open = jobPositions.filter((j) => !/closed/i.test(j.status || ""));

  return (
    <div className="min-h-screen" style={{ background: T.page, fontFamily: BODY }}>
      {/* Header band */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${coverImg})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ORANGE, fontFamily: MONO }}>Careers</p>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: DISPLAY, letterSpacing: "-0.02em", textShadow: "0 2px 20px rgba(0,0,0,.5)" }}>Join Our Research Team</h1>
          <p className="mt-2 max-w-2xl text-white/85">We are constantly looking for highly motivated MD, PhD and postdoctoral candidates.</p>
          <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition hover:brightness-95" style={{ background: ORANGE, color: "#14181F" }}>
            Send a general application ↗
          </Link>
        </div>
      </header>

      <div className="join-content mx-auto max-w-[1440px] px-6 py-12 md:px-10 md:py-16">
        {/* 01 Positions */}
        <h2 className="text-3xl font-semibold" style={{ color: T.ink }}>Open positions</h2>
        {open.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {open.map((j) => (
              <div key={j.id} className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: T.line }}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-bold" style={{ color: T.ink }}>{j.title}</h3>
                  <span className="rounded-md border px-2.5 py-1 text-[10px] font-bold uppercase" style={{ borderColor: ORANGE, color: ORANGE }}>{j.status}</span>
                </div>
                <p className="mt-2 text-[13px]" style={{ color: T.muted }}>{j.description}</p>
                {j.applyLink && (
                  <a href={j.applyLink} target="_blank" rel="noreferrer" className="mt-3 inline-block text-[13px] font-bold" style={{ color: ORANGE }}>View details ›</a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border bg-white p-8 shadow-sm md:p-10" style={{ borderColor: T.line }}>
            <p className="text-lg leading-relaxed" style={{ color: T.muted }}>
              No open positions right now. General applications are welcome.
            </p>
          </div>
        )}

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.65fr_1fr]">
          <section className="rounded-2xl border bg-white p-8 md:p-10" style={{ borderColor: T.line }} aria-labelledby="join-apply-heading">
            <h2 id="join-apply-heading" className="text-3xl font-semibold" style={{ color: T.ink }}>Your application</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: T.muted }}>We welcome highly motivated MD, PhD and postdoctoral candidates. Please include:</p>
            <ul className="mt-6 divide-y text-lg" style={{ borderColor: T.line, color: T.ink }}>
              <li className="py-5">Curriculum Vitae (CV)</li>
              <li className="py-5">Motivation letter</li>
              <li className="py-5">Brief statement of research interests</li>
            </ul>
            <Link to="/contact" className="mt-7 inline-flex min-h-12 items-center rounded-full px-7 py-3 text-base font-semibold hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" style={{ background: ORANGE, color: T.ink }}>Send a general application ↗</Link>
          </section>
          <section className="flex flex-col rounded-2xl border p-8 md:p-10" style={{ borderColor: T.line, background: T.tile }} aria-labelledby="join-contact-heading">
            <h2 id="join-contact-heading" className="text-2xl font-semibold" style={{ color: T.ink }}>Talk to our PI</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: T.muted }}>Questions about joining the lab? Contact our principal investigator.</p>
            {pi.image
              ? <img src={pi.image} alt={pi.name} className="mt-8 h-28 w-28 rounded-full object-cover" />
              : <div className="mt-8 grid h-28 w-28 place-items-center rounded-full bg-white text-2xl font-semibold">{initials(pi.name)}</div>}
            <h3 className="mt-6 text-xl font-semibold" style={{ color: T.ink }}>{pi.name}</h3>
            <p className="mt-2 text-sm" style={{ color: T.muted }}>Principal Investigator</p>
            <a href={pi.email} className="mt-6 inline-flex min-h-12 items-center self-start text-base font-semibold underline underline-offset-4" style={{ color: T.ink }}>Email our PI ↗</a>
          </section>
        </div>
      </div>

      <GoToTopButton />
    </div>
  );
}

export default JoinUs;
