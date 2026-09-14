import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import GoToTopButton from "../common/GoToTopButton";
import {
  getSortedNews
} from "../../data/newsData";
// Icons
import { FaMoneyBillWave, FaUserPlus, FaNewspaper, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";
import coverImg from "../../assets/covers/maincover.jpg";
import '../../App.css';

// ---- Theme (light) ----
const T = { page: "#F6F2EC", surface: "#FFFFFF", ink: "#14181F", muted: "#5B6472", line: "#E4DCD1" };
const DISPLAY = '"Space Grotesk", system-ui, sans-serif';
const BODY = '"DM Sans", system-ui, -apple-system, sans-serif';
const MONO = "ui-monospace, 'SF Mono', Menlo, monospace";
const ORANGE = "#FF914D";

const fadeInEffect = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const iconAppearEffect = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 0.5
    }
  }
};

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
  <div
    onClick={onClick}
    className="w-full max-w-md cursor-pointer rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
    style={{ borderColor: T.line }}
  >
    <h3 className="mb-4 text-xl font-bold" style={{ fontFamily: DISPLAY, color: T.ink, letterSpacing: "-0.01em" }}>
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
    <div className="text-sm leading-relaxed" style={{ color: T.muted }}>
      {item.shortDescription.split("\n\n").map((para, idx) => (
        <p key={idx} className="mb-2">
          {para}
        </p>
      ))}
    </div>
  </div>
);

const NewsDate = ({ children }) => (
  <span className="text-lg font-extrabold uppercase tracking-[0.12em] md:text-xl" style={{ fontFamily: DISPLAY, color: T.ink }}>
    {children}
  </span>
);

const monthLabel = (date) => date.toLocaleDateString("en-US", { month: "long" });

const IconNode = ({ item }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={iconAppearEffect}
  >
    <div
      className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white text-lg text-white shadow-lg"
      style={{ backgroundColor: ORANGE }}
    >
      {getCategoryIcon(item.category)}
    </div>
  </motion.div>
);

function News() {
  const navigate = useNavigate();
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
    if (item.category === "grant") {
      launchConfetti();
    }
    navigate(`/news/${item.id}`);
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
      <div className="mx-auto mt-12 w-full max-w-6xl px-6 pb-16">
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform md:block" style={{ background: T.line }} />

          {/* News items stay chronologically grouped; visible labels show month only. */}
          <div className="space-y-20">
            {newsByYear.map((yearGroup) => (
              <section key={yearGroup.year} aria-labelledby={`news-year-${yearGroup.year}`}>
                <div className="relative mb-12 flex justify-center">
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
                      <motion.div
                        key={item.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInEffect}
                        className="relative"
                      >
                  {/* Desktop Layout */}
                  <div className="hidden items-start md:grid md:grid-cols-[1fr_auto_1fr] md:gap-0">
                    {isLeft ? (
                      <>
                        <div className="flex justify-end pr-12">
                          <NewsCard item={item} onClick={() => handleNewsClick(item)} />
                        </div>
                        <div className="relative z-10 flex justify-center">
                          <IconNode item={item} />
                        </div>
                        <div className="flex items-start pl-12 pt-3">
                          <NewsDate>{monthLabel(item.date)}</NewsDate>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-start justify-end pr-12 pt-3">
                          <NewsDate>{monthLabel(item.date)}</NewsDate>
                        </div>
                        <div className="relative z-10 flex justify-center">
                          <IconNode item={item} />
                        </div>
                        <div className="flex justify-start pl-12">
                          <NewsCard item={item} onClick={() => handleNewsClick(item)} />
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden">
                    <div className="mb-4 flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={iconAppearEffect}
                        >
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF914D] text-lg text-white shadow-lg"
                          >
                            {getCategoryIcon(item.category)}
                          </div>
                        </motion.div>
                      </div>
                      <span className="pt-2">
                        <NewsDate>{monthLabel(item.date)}</NewsDate>
                      </span>
                    </div>
                    <NewsCard item={item} onClick={() => handleNewsClick(item)} />
                  </div>
                      </motion.div>
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
