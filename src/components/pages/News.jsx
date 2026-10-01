import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import GoToTopButton from "../common/GoToTopButton";
import {
  getSortedNews
} from "../../data/newsData";
// Icons
import { FaMoneyBillWave, FaUserPlus, FaNewspaper, FaAward } from "react-icons/fa";
import "./News.css";
import coverImg from "../../assets/covers/maincover.optimized.webp";
import '../../App.css';

// ---- Theme (light) ----
const T = { page: "#F6F2EC", surface: "#FFFFFF", ink: "#14181F", muted: "#5B6472", line: "#E4DCD1" };
const DISPLAY = '"Space Grotesk", system-ui, sans-serif';
const BODY = '"DM Sans", system-ui, -apple-system, sans-serif';
const MONO = "ui-monospace, 'SF Mono', Menlo, monospace";
const ORANGE = "#FF914D";

// Function to return the correct icon based on the category
const getCategoryIcon = category => {
  switch (category) {
    case "grant":
      return <FaMoneyBillWave />;
    case "new_member":
      return <FaUserPlus />;
    case "award":
      return <FaAward />;
    default:
      return <FaNewspaper />;
  }
};

// Function to trigger confetti animation
const launchConfetti = () => {
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });
};

// Reusable news card (shared by left / right / mobile layouts)
const NewsCard = ({ item, onClick }) => (
  <Link
    to={`/news/${item.id}`}
    onClick={onClick}
    className="news-timeline-card text-left w-full max-w-md cursor-pointer rounded-2xl border bg-white p-2.5 md:p-6 shadow-sm transition-shadow hover:shadow-lg"
    style={{ borderColor: T.line }}
  >
    <h3 className="mb-3 text-sm md:mb-4 md:text-xl font-bold" style={{ fontFamily: DISPLAY, color: T.ink, letterSpacing: "-0.01em" }}>
      {item.title}
    </h3>

    {item.photoPair && <div className="mb-4 grid grid-cols-2 gap-2">{item.photoPair.map((photo, i) => <img key={photo} src={photo} alt={i === 0 ? "Quan Shi presenting poster 101P at MAP 2026" : "Kocakavuk Lab at MAP 2026 in London"} className="h-auto w-full rounded-md" />)}</div>}
    {item.image && !item.photoPair && (
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="mb-4 h-44 w-full rounded-md object-cover"
        style={{ objectPosition: "center" }}
      />
    )}

    {/* Member Images */}
    {item.memberImages && item.memberImages.length > 0 && (
      <div className="mb-4 flex gap-3">
        {item.memberImages.map((memberImg, idx) => (
          <div
            key={idx}
            className="h-16 w-16 overflow-hidden rounded-full border-2"
            style={{ borderColor: T.line }}
          >
            <img
              src={memberImg}
              alt={`Member ${idx + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    )}

    {/* Description */}
    <div className="text-xs md:text-sm leading-relaxed" style={{ color: T.muted }}>
      {item.shortDescription.split("\n\n").map((para, idx) => (
        <p key={idx} className="mb-2">
          {para}
        </p>
      ))}
    </div>
  </Link>
);

const NewsDate = ({ children }) => (
  <span className="news-timeline-month text-[10px] font-extrabold uppercase tracking-[0.06em] sm:text-sm md:tracking-[0.12em] md:text-xl" style={{ fontFamily: DISPLAY, color: T.ink }}>
    {children}
  </span>
);

const monthLabel = (date) => date.toLocaleDateString("en-US", { month: "long" });

const IconNode = ({ item }) => (
  <div aria-hidden="true" className="news-timeline-icon flex h-14 w-14 items-center justify-center rounded-full border-4 border-white text-lg text-[#14181F] shadow-sm" style={{ backgroundColor: ORANGE }}>
    {getCategoryIcon(item.category)}
  </div>
);

function News() {
  // Sort news in descending order (newest first: 2025 -> 2023)
  const allNews = getSortedNews();
  const newsByYear = allNews.reduce((groups, item) => {
    const year = item.date.getFullYear();
    const currentGroup = groups[groups.length - 1];

    if (!currentGroup || currentGroup.year !== year) {
      groups.push({ year, items: [item] });
    } else {
      currentGroup.items.push(item);
    }

    return groups;
  }, []);

  const handleNewsClick = item => {
    if (item.category === "grant" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      launchConfetti();
    }
  };

  return (
    <div className="min-h-screen" style={{ background: T.page, fontFamily: BODY }}>
      {/* Header band */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${coverImg})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ORANGE, fontFamily: MONO }}>Updates</p>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: DISPLAY, letterSpacing: "-0.02em", textShadow: "0 2px 20px rgba(0,0,0,.5)" }}>Latest News</h1>
          <p className="mt-2 text-white/85">Stay updated with our latest achievements.</p>
        </div>
      </header>

      {/* Custom Timeline */}
      <div className="news-timeline mx-auto mt-12 w-full max-w-6xl px-6 pb-16">
        <div className="relative">
          {/* Shared centered timeline across screen sizes. */}
          <div aria-hidden="true" className="news-timeline-rail absolute left-1/2 h-full w-1 -translate-x-1/2" style={{ background: T.line }} />

          {/* News items stay chronologically grouped; visible labels show month only. */}
          <div className="space-y-20">
            {newsByYear.map((yearGroup) => (
              <section key={yearGroup.year} aria-labelledby={`news-year-${yearGroup.year}`}>
                <div className="news-timeline-year relative mb-12 flex justify-center">
                  <h2
                    id={`news-year-${yearGroup.year}`}
                    className="relative z-20 rounded-full border-2 bg-white px-6 py-2 text-center text-xl font-bold shadow-sm"
                    style={{ borderColor: T.line, color: T.ink, fontFamily: DISPLAY }}
                  >
                    {yearGroup.year}
                  </h2>
                </div>
                <div className="space-y-12">
                  {yearGroup.items.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                      <div key={item.id} className="relative">
                  {/* Alternating timeline layout */}
                  <div className="news-timeline-row grid items-start grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-0">
                    {isLeft ? (
                      <>
                        <div className="news-timeline-card-slot flex justify-end pr-2 md:pr-12">
                          <NewsCard item={item} onClick={() => handleNewsClick(item)} />
                        </div>
                        <div className="news-timeline-icon-slot relative z-10 flex justify-center">
                          <IconNode item={item} />
                        </div>
                        <div className="news-timeline-date-slot flex items-start pl-2 pt-2 md:pl-12 md:pt-3">
                          <NewsDate>{monthLabel(item.date)}</NewsDate>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="news-timeline-date-slot flex items-start justify-end pr-2 pt-2 md:pr-12 md:pt-3">
                          <NewsDate>{monthLabel(item.date)}</NewsDate>
                        </div>
                        <div className="news-timeline-icon-slot relative z-10 flex justify-center">
                          <IconNode item={item} />
                        </div>
                        <div className="news-timeline-card-slot flex justify-start pl-2 md:pl-12">
                          <NewsCard item={item} onClick={() => handleNewsClick(item)} />
                        </div>
                      </>
                    )}
                  </div>

                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <GoToTopButton />
    </div>
  );
}

export default News;
