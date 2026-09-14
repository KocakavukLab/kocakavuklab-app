import GoToTopButton from "../common/GoToTopButton";
import publications from "../../data/pubsData";
import coverImg from "../../assets/covers/maincover.jpg";
import "../../App.css";

// ---- Theme (light) ----
const T = {
  page: "#F6F2EC",
  surface: "#FFFFFF",
  ink: "#14181F",
  muted: "#5B6472",
  line: "#E4DCD1",
  tile: "#EDE7DE"
};
const DISPLAY = '"Space Grotesk", system-ui, sans-serif';
const BODY = '"DM Sans", system-ui, -apple-system, sans-serif';
const ORANGE = "#FF914D";

const highlightRegex = /(Kocakavuk|Karadag C\.|Gundla P\. S\.)/;
const yearOf = (p) => p.date.split("/")[1];

const Authors = ({ authors }) => {
  const parts = authors.split(", ");
  return (
    <p className="mt-1.5 text-[12.5px] leading-relaxed" style={{ color: T.muted }}>
      {parts.map((a, i) => (
        <span key={i} style={highlightRegex.test(a) ? { color: ORANGE, fontWeight: 700 } : undefined}>
          {a}
          {i < parts.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  );
};

const Row = ({ pub, first = false }) => (
  <div className={`flex flex-col gap-4 py-6 sm:flex-row sm:items-center${first ? "" : " border-t"}`} style={{ borderColor: T.line }}>
    <div className="text-2xl font-extrabold leading-snug tabular-nums sm:w-20 sm:flex-none sm:text-center" style={{ fontFamily: DISPLAY, color: T.ink }}>
      {yearOf(pub)}
    </div>
    <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="flex-none self-center">
      <span className="flex h-40 w-32 items-center justify-center rounded-lg" style={{ background: T.tile }}>
        {pub.image
          ? <img src={pub.image} alt="" loading="lazy" className="max-h-full max-w-full rounded object-contain" />
          : <span className="px-3 text-center text-sm font-semibold leading-relaxed" style={{ color: T.muted }}>{pub.journal}</span>}
      </span>
    </a>
    <div className="flex-1">
      <a
        href={pub.doi}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[15px] font-bold leading-snug transition-colors hover:text-[#E0742E]"
        style={{ color: T.ink }}
      >
        {pub.title}
      </a>
      <Authors authors={pub.authors} />
    </div>
    <div className="flex w-[100px] flex-none items-center justify-center gap-3 text-center">
      {pub.journalLogo
        ? <img src={pub.journalLogo} alt={pub.journal} loading="lazy" className="h-8 w-auto max-w-[84px] object-contain" />
        : <span className="text-sm font-semibold" style={{ color: T.ink }}>{pub.journal}</span>}
    </div>
  </div>
);

function Publications() {

  return (
    <div className="min-h-screen" style={{ background: T.page, fontFamily: BODY }}>
      {/* Dark header band */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${coverImg})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ORANGE, fontFamily: "ui-monospace, monospace" }}>Research from the lab</p>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: DISPLAY, letterSpacing: "-0.02em", textShadow: "0 2px 20px rgba(0,0,0,.5)" }}>Publications</h1>
          <p className="mt-2 text-white/85">Peer-reviewed research and preprints from the Kocakavuk Lab</p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mt-2">
          {publications.filter(pub => !pub.hidden).map((pub, index) => (
            <Row key={pub.doi} pub={pub} first={index === 0} />
          ))}
        </div>

        <a
          href="https://scholar.google.com/citations?user=gGSCLooAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-base font-bold transition hover:brightness-95"
          style={{ background: ORANGE, color: "#14181F" }}
        >
          View all on Google Scholar ↗
        </a>
      </div>

      <GoToTopButton />
    </div>
  );
}

export default Publications;
