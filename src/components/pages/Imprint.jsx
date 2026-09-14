import { Link } from "react-router-dom";
import GoToTopButton from "../common/GoToTopButton";
import coverImg from "../../assets/covers/maincover.jpg";

// ---- Theme (light) ----
const T = { page: "#F6F2EC", surface: "#FFFFFF", ink: "#14181F", muted: "#5B6472", line: "#E4DCD1" };
const DISPLAY = '"Space Grotesk", system-ui, sans-serif';
const BODY = '"DM Sans", system-ui, -apple-system, sans-serif';
const MONO = "ui-monospace, 'SF Mono', Menlo, monospace";
const ORANGE = "#FF914D";

const sections = [
  {
    title: "Information pursuant to Sect. 5 German Telemedia Act (TMG)",
    body: (
      <>
        Computational Oncology Lab
        <br />
        University Hospital Essen (AöR)
        <br />
        Hufelandstraße 55, 45147 Essen
      </>
    ),
  },
  {
    title: "Represented by",
    body: "Dr. med. Dr. rer. nat. Emre Kocakavuk",
  },
  {
    title: "Contact",
    body: (
      <>
        Phone:{" "}
        <Link to="tel:+49-(0)201-723-0" className="font-semibold" style={{ color: ORANGE }}>
          +49-(0)201-723-0
        </Link>
        <br />
        E-mail:{" "}
        <Link to="mailto:kocakavuklab@gmail.com" className="font-semibold" style={{ color: ORANGE }}>
          kocakavuklab@lab.de
        </Link>
      </>
    ),
  },
  {
    title: "Person responsible for editorial content",
    body: "Dr. med. Dr. rer. nat. Emre Kocakavuk",
  },
  {
    title: "EU Dispute Resolution",
    body: (
      <>
        The European Commission provides a platform for online dispute resolution (ODR):{" "}
        <Link to="https://ec.europa.eu/consumers/odr/" className="font-semibold" style={{ color: ORANGE }}>
          https://ec.europa.eu/consumers/odr/
        </Link>
        . Our e-mail address can be found above in the site notice.
      </>
    ),
  },
  {
    title: "Dispute Resolution Proceedings",
    body: "We are not willing or obliged to participate in dispute resolution proceedings in front of a consumer arbitration board.",
  },
];

const Imprint = () => {
  return (
    <div className="min-h-screen" style={{ background: T.page, fontFamily: BODY }}>
      {/* Header band */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${coverImg})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ORANGE, fontFamily: MONO }}>Legal</p>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: DISPLAY, letterSpacing: "-0.02em", textShadow: "0 2px 20px rgba(0,0,0,.5)" }}>Imprint</h1>
          <p className="mt-2 text-white/85">Site notice pursuant to German law.</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl border bg-white p-8 shadow-sm md:p-12" style={{ borderColor: T.line }}>
          {sections.map(({ title, body }, i) => (
            <div key={title} className={i < sections.length - 1 ? "mb-8" : ""}>
              <div className="flex items-center gap-2.5">
                <span className="text-lg font-extrabold" style={{ fontFamily: DISPLAY, color: ORANGE }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-[13px] font-bold uppercase tracking-[0.14em]" style={{ color: T.ink }}>
                  {title}
                </h2>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed" style={{ color: T.muted }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <GoToTopButton />
    </div>
  );
};

export default Imprint;
