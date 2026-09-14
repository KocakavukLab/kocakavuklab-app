import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa";
import { getNewsById, NEWS_CATEGORIES, getSortedNews } from "../../data/newsData";
import coverImg from "../../assets/covers/maincover.jpg";
import "../../App.css";

const T = { page: "#F6F2EC", surface: "#FFFFFF", ink: "#14181F", muted: "#5B6472", line: "#E4DCD1" };
const DISPLAY = '"Space Grotesk", system-ui, sans-serif';
const BODY = '"DM Sans", system-ui, -apple-system, sans-serif';
const ORANGE = "#FF914D";

const getCategoryLabel = (category) => {
  const cat = Object.values(NEWS_CATEGORIES).find((c) => c.id === category);
  return cat ? cat.label : "News";
};

function NewsDetail() {
  const { newsId } = useParams();
  const navigate = useNavigate();
  const newsItem = getNewsById(newsId);

  if (!newsItem) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6" style={{ background: T.page, fontFamily: BODY }}>
        <div className="text-center">
          <h1 className="text-6xl font-extrabold" style={{ fontFamily: DISPLAY, color: T.ink }}>
            4<span style={{ color: ORANGE }}>0</span>4
          </h1>
          <p className="mt-3 text-lg" style={{ color: T.muted }}>News article not found.</p>
          <button onClick={() => navigate("/news")} className="mt-6 rounded-xl px-6 py-3 text-sm font-bold" style={{ background: ORANGE, color: "#14181F" }}>
            Back to News
          </button>
        </div>
      </div>
    );
  }

  const sortedNews = getSortedNews();
  const currentIndex = sortedNews.findIndex((item) => item.id === newsId);
  const previousNews = currentIndex < sortedNews.length - 1 ? sortedNews[currentIndex + 1] : null;
  const nextNews = currentIndex > 0 ? sortedNews[currentIndex - 1] : null;

  return (
    <div className="min-h-screen" style={{ background: T.page, fontFamily: BODY }}>
      {/* Hero */}
      <div className="relative h-96 w-full overflow-hidden" style={{ background: T.ink }}>
        <img src={newsItem.image || coverImg} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true" />
        <div className="absolute left-4 right-4 top-24 z-20 flex items-start justify-between gap-3 sm:left-6 sm:right-6 sm:top-28">
          <button onClick={() => navigate("/news")} className="flex shrink-0 items-center gap-2 rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-[#14181F] shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF914D]">
            <FaArrowLeft /> Back to News
          </button>
          <span className="ml-auto rounded-full px-3 py-2 text-right text-xs font-bold sm:px-4 sm:text-sm" style={{ background: ORANGE, color: "#14181F" }}>
            {getCategoryLabel(newsItem.category)}
          </span>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative z-10 mx-auto -mt-20 max-w-4xl px-4">
        <article className="mb-8 overflow-hidden rounded-2xl border bg-white shadow-xl" style={{ borderColor: T.line }}>
          <div className="border-b-4 p-8 md:p-12" style={{ borderColor: ORANGE }}>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl" style={{ fontFamily: DISPLAY, color: T.ink, letterSpacing: "-0.02em" }}>
              {newsItem.title}
            </h1>
            <div className="mt-4 flex items-center gap-2 text-[13px]" style={{ color: T.muted }}>
              <FaCalendarAlt style={{ color: ORANGE }} /> <span className="font-medium">{newsItem.dateDisplay}</span>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <ReactMarkdown
              components={{
                p: ({ node, ...props }) => <p className="mb-5 text-[16px] leading-relaxed" style={{ color: "#37414d" }} {...props} />,
                strong: ({ node, ...props }) => <strong className="font-semibold" style={{ color: T.ink }} {...props} />,
                a: ({ node, ...props }) => (
                  // eslint-disable-next-line jsx-a11y/anchor-has-content
                  <a className="font-medium underline" style={{ color: ORANGE }} target="_blank" rel="noopener noreferrer" {...props} />
                ),
                ul: ({ node, ...props }) => <ul className="mb-5 list-inside list-disc space-y-2" {...props} />,
                li: ({ node, ...props }) => <li style={{ color: "#37414d" }} {...props} />
              }}
            >
              {newsItem.fullContent}
            </ReactMarkdown>

            {newsItem.photoPair && (
              <div className="my-6 grid grid-cols-2 items-start gap-3 sm:gap-4">
                {newsItem.photoPair.map((photo, index) => (
                  <a key={photo} href={photo} target="_blank" rel="noopener noreferrer" aria-label={`Open MAP 2026 photo ${index + 1} at full size`}>
                    <img src={photo} alt={index === 0 ? "Quan Shi with poster 101P at MAP 2026" : "Kocakavuk Lab at the poster presentation in London"} loading="lazy" className="h-auto w-full rounded-lg" />
                  </a>
                ))}
              </div>
            )}

            {newsItem.memberImages && newsItem.memberImages.length > 0 && (
              <div className="mt-8 border-t pt-8" style={{ borderColor: T.line }}>
                <h3 className="mb-6 text-center text-lg font-bold" style={{ color: T.ink }}>Welcome to the Team</h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {newsItem.memberImages.map((memberImg, idx) => (
                    <img key={idx} src={memberImg} alt={`Team member ${idx + 1}`} className="h-24 w-24 rounded-full object-cover shadow-lg transition hover:scale-105" />
                  ))}
                </div>
              </div>
            )}

            {newsItem.tags && newsItem.tags.length > 0 && (
              <div className="mt-8 border-t pt-8" style={{ borderColor: T.line }}>
                <h3 className="mb-3 text-[13px] font-bold uppercase tracking-[0.14em]" style={{ color: T.muted }}>Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {newsItem.tags.map((tag, idx) => (
                    <span key={idx} className="rounded-full px-3 py-1 text-[13px]" style={{ background: "#EDE7DE", color: T.muted }}>{tag}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {(previousNews || nextNews) && (
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {previousNews && (
              <button onClick={() => navigate(`/news/${previousNews.id}`)} className="flex items-start gap-4 rounded-2xl border bg-white p-5 text-left transition hover:border-[#FF914D]" style={{ borderColor: T.line }}>
                <FaArrowLeft className="mt-1 flex-none" style={{ color: T.muted }} />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: ORANGE }}>Previous</p>
                  <p className="mt-1 font-bold" style={{ color: T.ink }}>{previousNews.title}</p>
                </div>
              </button>
            )}
            {nextNews && (
              <button onClick={() => navigate(`/news/${nextNews.id}`)} className="flex items-start justify-between gap-4 rounded-2xl border bg-white p-5 text-left transition hover:border-[#FF914D] md:text-right" style={{ borderColor: T.line }}>
                <div className="md:order-2">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: ORANGE }}>Next</p>
                  <p className="mt-1 font-bold" style={{ color: T.ink }}>{nextNews.title}</p>
                </div>
                <FaArrowLeft className="mt-1 flex-none rotate-180 md:order-1" style={{ color: T.muted }} />
              </button>
            )}
          </div>
        )}

        <div className="pb-12 text-center">
          <button onClick={() => navigate("/news")} className="rounded-xl px-8 py-3 text-sm font-bold" style={{ background: ORANGE, color: "#14181F" }}>
            View All News
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default NewsDetail;
