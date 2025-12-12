import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import {
    FaArrowLeft,
    FaCalendarAlt,
    FaTag,
    FaMoneyBillWave,
    FaUserPlus,
    FaNewspaper,
    FaAward,
} from "react-icons/fa";
import {
    getNewsById,
    NEWS_CATEGORIES,
    getSortedNews,
} from "../../data/newsData";
import "../../App.css";

// Function to get category icon
const getCategoryIcon = (category) => {
    switch (category) {
        case "grant":
            return <FaMoneyBillWave className="inline" />;
        case "new_member":
            return <FaUserPlus className="inline" />;
        case "award":
            return <FaAward className="inline" />;
        default:
            return <FaNewspaper className="inline" />;
    }
};

// Function to get category color
const getCategoryColor = (category) => {
    const cat = Object.values(NEWS_CATEGORIES).find((c) => c.id === category);
    return cat ? cat.color : "#6B7280";
};

// Function to get category label
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
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
                    <p className="text-xl text-gray-700 mb-6">News article not found!</p>
                    <button
                        onClick={() => navigate("/news")}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Back to News
                    </button>
                </div>
            </div>
        );
    }

    // Get previous and next news items
    const sortedNews = getSortedNews();
    const currentIndex = sortedNews.findIndex((item) => item.id === newsId);
    const previousNews =
        currentIndex < sortedNews.length - 1 ? sortedNews[currentIndex + 1] : null;
    const nextNews = currentIndex > 0 ? sortedNews[currentIndex - 1] : null;

    const categoryColor = getCategoryColor(newsItem.category);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Image */}
            <div className="relative w-full h-96 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700">
                {newsItem.image && (
                    <img
                        src={newsItem.image}
                        alt={newsItem.title}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
                        loading="lazy"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Back Button */}
                <button
                    onClick={() => navigate("/news")}
                    className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white text-gray-800 rounded-lg shadow-lg transition-all"
                >
                    <FaArrowLeft />
                    <span>Back to News</span>
                </button>

                {/* Category Badge */}
                <div className="absolute top-6 right-6">
                    <span
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg"
                        style={{ backgroundColor: categoryColor }}
                    >
                        {getCategoryIcon(newsItem.category)}
                        {getCategoryLabel(newsItem.category)}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto -mt-20 relative z-10"
            >
                {/* Main Content Card */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
                    {/* Header */}
                    <div
                        className="p-8 md:p-12 border-b-4"
                        style={{ borderColor: categoryColor }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            {newsItem.title}
                        </h1>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-4 text-gray-600">
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt className="text-gray-400" />
                                <span className="font-medium">{newsItem.dateDisplay}</span>
                            </div>

                            {newsItem.tags && newsItem.tags.length > 0 && (
                                <div className="flex items-center gap-2">
                                    <FaTag className="text-gray-400" />
                                    <span className="text-sm">{newsItem.tags.length} tags</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-8 md:p-12">
                        <ReactMarkdown
                            components={{
                                p: ({ node, ...props }) => (
                                    <p
                                        className="text-lg text-gray-700 mb-6 leading-relaxed"
                                        {...props}
                                    />
                                ),
                                strong: ({ node, ...props }) => (
                                    <strong className="font-semibold text-gray-900" {...props} />
                                ),
                                h1: ({ node, ...props }) => (
                                    // eslint-disable-next-line jsx-a11y/heading-has-content
                                    <h1
                                        className="text-3xl font-bold text-gray-900 mt-8 mb-4"
                                        {...props}
                                    />
                                ),
                                h2: ({ node, ...props }) => (
                                    // eslint-disable-next-line jsx-a11y/heading-has-content
                                    <h2
                                        className="text-2xl font-bold text-gray-900 mt-6 mb-3"
                                        {...props}
                                    />
                                ),
                                h3: ({ node, ...props }) => (
                                    // eslint-disable-next-line jsx-a11y/heading-has-content
                                    <h3
                                        className="text-xl font-semibold text-gray-900 mt-4 mb-2"
                                        {...props}
                                    />
                                ),
                                ul: ({ node, ...props }) => (
                                    <ul
                                        className="list-disc list-inside mb-6 space-y-2"
                                        {...props}
                                    />
                                ),
                                ol: ({ node, ...props }) => (
                                    <ol
                                        className="list-decimal list-inside mb-6 space-y-2"
                                        {...props}
                                    />
                                ),
                                li: ({ node, ...props }) => (
                                    <li className="text-gray-700 ml-4" {...props} />
                                ),
                                a: ({ node, ...props }) => (
                                    // eslint-disable-next-line jsx-a11y/anchor-has-content
                                    <a
                                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        {...props}
                                    />
                                ),
                                blockquote: ({ node, ...props }) => (
                                    <blockquote
                                        className="border-l-4 border-blue-600 pl-4 italic text-gray-600 my-6"
                                        {...props}
                                    />
                                ),
                                code: ({ node, inline, ...props }) =>
                                    inline ? (
                                        <code
                                            className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono"
                                            {...props}
                                        />
                                    ) : (
                                        <code
                                            className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm"
                                            {...props}
                                        />
                                    ),
                            }}
                        >
                            {newsItem.fullContent}
                        </ReactMarkdown>

                        {/* Member Images Section (for new member announcements) */}
                        {newsItem.memberImages && newsItem.memberImages.length > 0 && (
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                                    Welcome to the Team
                                </h3>
                                <div className="flex flex-wrap gap-6 justify-center">
                                    {newsItem.memberImages.map((memberImg, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col items-center"
                                        >
                                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl transform hover:scale-110 transition-transform duration-300">
                                                <img
                                                    src={memberImg}
                                                    alt={`Team member ${idx + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tags Section */}
                        {newsItem.tags && newsItem.tags.length > 0 && (
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {newsItem.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation to Previous/Next News */}
                {(previousNews || nextNews) && (
                    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            More News
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Previous News */}
                            {previousNews && (
                                <button
                                    onClick={() => navigate(`/news/${previousNews.id}`)}
                                    className="flex items-start gap-4 p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left group"
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <FaArrowLeft className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 mb-1">Previous</p>
                                        <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {previousNews.title}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {previousNews.dateDisplay}
                                        </p>
                                    </div>
                                </button>
                            )}

                            {/* Next News */}
                            {nextNews && (
                                <button
                                    onClick={() => navigate(`/news/${nextNews.id}`)}
                                    className="flex items-start gap-4 p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left group"
                                >
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 mb-1">Next</p>
                                        <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {nextNews.title}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {nextNews.dateDisplay}
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 mt-1">
                                        <FaArrowLeft className="text-gray-400 group-hover:text-blue-600 transition-colors rotate-180" />
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {/* Back to All News Button */}
                <div className="text-center pb-12">
                    <button
                        onClick={() => navigate("/news")}
                        className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all"
                    >
                        View All News
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default NewsDetail;
