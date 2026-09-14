import { SiGooglescholar, SiResearchgate } from "react-icons/si";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { GrLinkedin } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import GoToTopButton from "../common/GoToTopButton";
import { members, memberTwo, blockTwo, alumni } from "../../data/membersData";
import coverImg from "../../assets/covers/maincover.jpg";
import "../../App.css";

// ---- Theme (light) ----
const T = { page: "#F6F2EC", surface: "#FFFFFF", ink: "#14181F", muted: "#5B6472", line: "#E4DCD1", tile: "#EDE7DE" };
const DISPLAY = '"Space Grotesk", system-ui, sans-serif';
const BODY = '"DM Sans", system-ui, -apple-system, sans-serif';
const ORANGE = "#FF914D";

const initials = (n) => n.split(" ").map((p) => p[0]).slice(0, 2).join("");

const Socials = ({ p, size = 18, align = "center" }) => (
  <div className={`mt-3 flex flex-wrap gap-3 ${align === "start" ? "justify-start" : "justify-center"}`}>
    {p.email && <a href={p.email} target="_blank" rel="noreferrer" aria-label={`${p.name} email`} className="rounded-sm text-[#737373] transition-colors hover:text-[#FF914D] focus:text-[#FF914D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF914D]"><PiMicrosoftOutlookLogoFill size={size} /></a>}
    {p.linkedin && <a href={p.linkedin} target="_blank" rel="noreferrer" aria-label={`${p.name} LinkedIn`} className="rounded-sm text-[#737373] transition-colors hover:text-[#FF914D] focus:text-[#FF914D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF914D]"><GrLinkedin size={size} /></a>}
    {p.scholar && <a href={p.scholar} target="_blank" rel="noreferrer" aria-label={`${p.name} Google Scholar`} className="rounded-sm text-[#737373] transition-colors hover:text-[#FF914D] focus:text-[#FF914D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF914D]"><SiGooglescholar size={size} /></a>}
    {p.researchgate && <a href={p.researchgate} target="_blank" rel="noreferrer" aria-label={`${p.name} ResearchGate`} className="rounded-sm text-[#737373] transition-colors hover:text-[#FF914D] focus:text-[#FF914D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF914D]"><SiResearchgate size={size} /></a>}
    {p.github && <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} GitHub`} className="rounded-sm text-[#737373] transition-colors hover:text-[#FF914D] focus:text-[#FF914D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF914D]"><FaGithub size={size} /></a>}
    {p.website && <a href={p.website} target="_blank" rel="noreferrer" aria-label={`${p.name} website`} className="rounded-sm text-[#737373] transition-colors hover:text-[#FF914D] focus:text-[#FF914D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF914D]"><FiGlobe size={size} /></a>}
    {p.twitter && <a href={p.twitter} target="_blank" rel="noreferrer" aria-label={`${p.name} X`} className="rounded-sm text-[#737373] transition-colors hover:text-[#FF914D] focus:text-[#FF914D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF914D]"><RiTwitterXLine size={size} /></a>}
  </div>
);

const Card = ({ person }) => (
  <div className="flex h-full flex-col items-center gap-5 rounded-2xl border p-6 text-center shadow-sm" style={{ background: T.surface, borderColor: T.line }}>
    {person.image ? (
      <img src={person.image} alt={person.name} loading="lazy" className="h-36 w-36 flex-none rounded-full object-fit shadow-sm" style={{ background: T.tile }} />
    ) : (
      <div className="flex h-40 w-40 flex-none items-center justify-center rounded-full text-3xl font-semibold shadow-sm" style={{ background: T.tile, color: "#9a8f80" }}>
        {initials(person.name)}
      </div>
    )}
    <div className="min-w-0 flex-1">
      <h3 className="text-lg font-bold" style={{ color: T.ink }}>{person.name}</h3>
      <p className="text-[13px] font-bold" style={{ color: ORANGE }}>{person.role}</p>
      {person.description && <p className="mx-auto mt-2 max-w-3xl text-[13px] leading-relaxed" style={{ color: T.muted }}>{person.description}</p>}
      <Socials p={person} size={20} />
    </div>
  </div>
);

const AlumniCard = ({ person }) => (
  <article className="flex flex-col items-center gap-5 rounded-2xl border bg-white p-6 text-center shadow-sm sm:flex-row sm:text-left" style={{ borderColor: T.line }}>
    {person.image ? (
      <img
        src={person.image}
        alt={person.name}
        loading="lazy"
        className="h-32 w-32 flex-none rounded-full border object-fit shadow-sm"
        style={{ borderColor: T.line, background: T.tile }}
      />
    ) : (
      <div className="flex h-40 w-40 flex-none items-center justify-center rounded-full border text-3xl font-semibold shadow-sm" style={{ borderColor: T.line, background: T.tile, color: "#9a8f80" }}>
        {initials(person.name)}
      </div>
    )}
    <div className="min-w-0 flex-1">
      <h3 className="text-lg font-bold" style={{ color: T.ink }}>{person.name}</h3>
      <p className="text-[13px] font-bold" style={{ color: ORANGE }}>{person.role}</p>
      {person.description && <p className="mt-2 max-w-3xl text-[13px] leading-relaxed" style={{ color: T.muted }}>{person.description}</p>}
      <div className="flex justify-center sm:justify-start">
        <Socials p={person} size={18} align="start" />
      </div>
    </div>
  </article>
);

const Sec = ({ n, label }) => (
  <div className="mt-10 flex items-center gap-2.5">
    <span className="text-lg font-extrabold" style={{ fontFamily: DISPLAY, color: ORANGE }}>{n}</span>
    <span className="text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: T.ink }}>{label}</span>
  </div>
);

function Members() {
  const pi = blockTwo[0];
  const rest = [...members, ...memberTwo];

  return (
    <div className="min-h-screen" style={{ background: T.page, fontFamily: BODY }}>
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${coverImg})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ORANGE, fontFamily: "ui-monospace, monospace" }}>People behind the research</p>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: DISPLAY, letterSpacing: "-0.02em", textShadow: "0 2px 20px rgba(0,0,0,.5)" }}>Our Team</h1>
          <p className="mt-2 max-w-2xl text-white/85">Clinician scientists and researchers working at the intersection of computational biology and oncology to decode cancer evolution and improve outcomes.</p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-8">
        <Sec n="01" label="Principal Investigator" />
        <div className="mt-4 flex flex-col items-center gap-5 rounded-2xl border p-6 text-center shadow-sm" style={{ background: T.surface, borderColor: T.line }}>
          {pi.image
            ? <img src={pi.image} alt={pi.name} className="h-36 w-36 flex-none rounded-full object-fit shadow-sm" style={{ background: T.tile }} />
            : <div className="flex h-32 w-32 flex-none items-center justify-center rounded-full text-2xl font-semibold shadow-sm" style={{ background: T.tile }}>{initials(pi.name)}</div>}
          <div>
            <h3 className="text-lg font-bold" style={{ color: T.ink }}>{pi.name}</h3>
            <p className="text-[13px] font-bold" style={{ color: ORANGE }}>{pi.role}</p>
            <p className="mx-auto mt-2 max-w-2xl text-[13px]" style={{ color: T.muted }}>{pi.description}</p>
            <Socials p={pi} size={20} />
          </div>
        </div>

        <Sec n="02" label="Research Team" />
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((m) => <Card key={m.id} person={m} />)}
        </div>

        {alumni.length > 0 && (
          <>
            <Sec n="03" label="Alumni" />
            <div className="mt-4 space-y-4">
              {alumni.map((m) => <AlumniCard key={m.id} person={m} />)}
            </div>
          </>
        )}
      </div>

      <GoToTopButton />
    </div>
  );
}

export default Members;
