import { Link } from "react-router-dom";
import { principalInvestigator } from "../../data/membersData";
import GoToTopButton from "../common/GoToTopButton";
import coverImg from "../../assets/covers/maincover.optimized.webp";
import wtzLogo from "../../assets/logos/Logo_UME_WTZ_essen_EN.png";
import ukeLogo from "../../assets/logos/Logo_UME_UKE_EN.optimized.webp";
import hematologyLogo from "../../assets/logos/Logo_UME_UKE_Klinik_fuer_Haematologie_und_Stammzelltransplantation_EN.optimized.webp";
import ikimLogo from "../../assets/logos/ikim.optimized.webp";
import { getSortedNews } from "../../data/newsData";
import "../../App.css";

const DISPLAY = '"Space Grotesk", system-ui, sans-serif';
const BODY = '"DM Sans", system-ui, -apple-system, sans-serif';
const MONO = "ui-monospace, 'SF Mono', Menlo, monospace";

const readTime = (item) => {
  const words = (item.fullContent || item.shortDescription || "").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.ceil(words / 180));
};

function NewsCard({ item }) {
  return (
    <Link
      to={`/news/${item.id}`}
      className="group flex min-h-[270px] flex-col overflow-hidden rounded-2xl border border-[#E4DCD1] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#FF914D] hover:shadow-md"
    >
      <div className="relative h-32 overflow-hidden bg-[#EDE7DE]">
        <img src={item.image || coverImg} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white" aria-hidden="true" />
      </div>
      <div className="relative -mt-6 flex flex-1 flex-col p-4 pt-0">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#E0742E]" style={{ fontFamily: MONO }}>News</span>
        <h3 className="mt-2 text-lg font-bold leading-tight text-[#14181F]" style={{ fontFamily: DISPLAY }}>{item.title}</h3>
        <div className="mt-auto flex items-end justify-between gap-4 pt-4 text-sm text-[#5B6472]">
          <span>{item.dateDisplay} <span className="mx-1.5">•</span> {readTime(item)} min read</span>
          <span className="text-2xl leading-none text-[#FF914D] transition group-hover:translate-x-1" aria-hidden="true">↗</span>
        </div>
      </div>
    </Link>
  );
}

function SocialProfile() {
  return (
    <nav aria-label="More updates from Emre Kocakavuk" className="flex flex-wrap items-center justify-center gap-3 py-3">
      <p className="w-full text-center text-sm text-[#5B6472] sm:mr-2 sm:w-auto">For more updates</p>
      <a href={principalInvestigator.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#E4DCD1] bg-white px-6 py-3 text-sm font-bold text-[#14181F] transition hover:border-[#FF914D] hover:bg-[#FFF5ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF914D]">
        View on X<span className="sr-only"> (opens in a new tab)</span>
      </a>
      <a href={principalInvestigator.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#E4DCD1] bg-white px-6 py-3 text-sm font-bold text-[#14181F] transition hover:border-[#FF914D] hover:bg-[#FFF5ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF914D]">
        View on LinkedIn<span className="sr-only"> (opens in a new tab)</span>
      </a>
    </nav>
  );
}

function Overview() {
  const latestNews = getSortedNews().slice(0, 2);

  return (
    <div className="min-h-screen bg-[#F6F2EC]" style={{ fontFamily: BODY }}>
      {/* Hero */}
      <header className="relative flex h-dvh min-h-[620px] w-full flex-col overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${coverImg})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
          <h1 className="max-w-4xl text-balance text-white" style={{ fontFamily: DISPLAY, fontWeight: 700, lineHeight: 0.95, fontSize: "clamp(48px,6vw,82px)", textShadow: "0 2px 16px rgba(0,0,0,.35)" }}>
            Kocakavuk Lab
          </h1>
          <h2 className="mt-4 text-balance text-[clamp(18px,2.4vw,28px)] font-semibold text-white/90" style={{ fontFamily: DISPLAY, textShadow: "0 2px 12px rgba(0,0,0,.35)" }}>
            Computational Oncology
          </h2>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1480px] px-3 pb-3 md:px-5 md:pb-5">
        {/* About + research focus */}
        <section className="mt-3 overflow-hidden rounded-[26px] border border-[#E4DCD1] bg-[#FBFAF7] shadow-sm md:mt-5 md:rounded-[32px]">
          <div className="grid gap-6 p-6 sm:p-7 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E0742E]" style={{ fontFamily: MONO }}>About us</p>
              <h2 className="mt-2 text-[#14181F]" style={{ fontFamily: DISPLAY, fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.08, fontSize: "clamp(28px,2.4vw,38px)" }}>
                Research at the intersection of oncology, computation &amp; genomics.
              </h2>
            </div>
            <div>
              <p className="text-sm leading-relaxed text-[#5B6472] lg:text-base">
                A dedicated team of Clinician-Scientists and Researchers at the West German Cancer Center
                and NCT West, University Hospital Essen — turning sequencing data into an understanding of
                how tumors change over time.
              </p>
              <Link to="/members" className="mt-4 inline-flex text-sm font-bold text-[#E0742E] hover:underline">
                Learn more about our lab ↗
              </Link>
            </div>
          </div>
        </section>

        {/* Latest news + social */}
        <section className="mt-3 rounded-[26px] border border-[#E4DCD1] bg-[#FBFAF7] p-5 shadow-sm sm:p-6 md:mt-5 md:rounded-[32px] lg:p-7">
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#E0742E]" style={{ fontFamily: MONO }}>Latest updates</h2>
          <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
            {latestNews.map((item) => <NewsCard key={item.id} item={item} />)}
          </div>
          <div className="mt-5">
            <SocialProfile />
          </div>
        </section>

        {/* Institutional affiliations */}
        <section aria-label="Institutional affiliations" className="mt-3 rounded-[26px] border border-[#E4DCD1] bg-[#FBFAF7] px-6 py-7 shadow-sm md:mt-5 md:rounded-[32px]">
          <div className="grid w-full grid-cols-2 items-center gap-x-6 gap-y-6 lg:grid-cols-4 lg:gap-x-10">
            <a href="https://www.uk-essen.de/" target="_blank" rel="noreferrer" className="flex min-w-0 items-center justify-center rounded-lg px-2 py-3 transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF914D]">
              <img src={ukeLogo} alt="University Hospital Essen (UME)" className="h-16 w-full max-w-[280px] object-contain sm:h-20" />
            </a>
            <a href="https://wtz-essen.de/" target="_blank" rel="noreferrer" className="flex min-w-0 items-center justify-center rounded-lg px-2 py-3 transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF914D]">
              <img src={wtzLogo} alt="West German Cancer Center (WTZ)" className="h-16 w-full max-w-[280px] object-contain sm:h-20" />
            </a>
            <a href="https://www.uk-essen.de/haematologie-stammzelltransplantation/" target="_blank" rel="noreferrer" className="flex min-w-0 items-center justify-center rounded-lg px-2 py-3 transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF914D]">
              <img src={hematologyLogo} alt="Clinic for Haematology and Stem Cell Transplantation" className="h-16 w-full max-w-[280px] object-contain sm:h-20" />
            </a>
            <a href="https://www.ikim.uk-essen.de/" target="_blank" rel="noreferrer" className="flex min-w-0 items-center justify-center rounded-lg px-2 py-3 transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF914D]">
              <img src={ikimLogo} alt="Institute for AI in Medicine (IKIM)" className="h-16 w-full max-w-[280px] object-contain sm:h-20" />
            </a>
          </div>
        </section>
      </div>

      <GoToTopButton />
    </div>
  );
}

export default Overview;
