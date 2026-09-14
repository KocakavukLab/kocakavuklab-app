import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import PageHeader from "../common/PageHeader";
import GoToTopButton from "../common/GoToTopButton";
import {
  getSortedNews,
  NEWS_CATEGORIES
} from "../../data/newsData";
// Icons
import { FaMoneyBillWave, FaUserPlus, FaNewspaper, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";
import '../../App.css';

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

// Function to get category color
const getCategoryColor = (category) => {
  const cat = Object.values(NEWS_CATEGORIES).find((c) => c.id === category);
  return cat ? cat.color : "#6B7280";
};

// Function to trigger confetti animation
const launchConfetti = () => {
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });
};

function News() {
  const navigate = useNavigate();
  // Sort news in descending order (newest first: 2025 -> 2023)
  const allNews = getSortedNews();

  const handleNewsClick = item => {
    if (item.category === "grant") {
      launchConfetti();
    }
    navigate(`/news/${item.id}`);
  };

  return (
    <div className="min-h-screen p-10 bg-gray-50 flex flex-col items-center">
      {/* Page Header */}
      <PageHeader
        title="Latest News"
        subtitle="Stay updated with our latest achievements!"
      />

      {/* Custom Timeline */}
      <div className="max-w-6xl w-full mt-12 relative">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full hidden md:block" />

        {/* News Items */}
        <div className="space-y-12">
          {allNews.map((item, index) => {
            const categoryColor = getCategoryColor(item.category);
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInEffect}
                className="relative"
              >
                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-0 items-start">
                  {isLeft ? (
                    <>
                      {/* News Card - Left */}
                      <div className="flex justify-end pr-12">
                        <div
                          onClick={() => handleNewsClick(item)}
                          className="bg-white rounded-lg shadow-md p-6 max-w-md w-full cursor-pointer hover:shadow-xl transition-shadow"
                        >
                          <h3 className="text-xl font-bold text-gray-900 mb-4">
                            {item.title}
                          </h3>

                          {/* Member Images */}
                          {item.memberImages && item.memberImages.length > 0 && (
                            <div className="flex gap-3 mb-4">
                              {item.memberImages.map((memberImg, idx) => (
                                <div
                                  key={idx}
                                  className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200"
                                >
                                  <img
                                    src={memberImg}
                                    alt={`Member ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Description */}
                          <div className="text-sm text-gray-700">
                            {item.shortDescription.split("\n\n").map((para, idx) => (
                              <p key={idx} className="mb-2">
                                {para}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Centered Icon Circle */}
                      <div className="flex justify-center relative z-10">
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-100px" }}
                          variants={iconAppearEffect}
                        >
                          <div
                            className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white"
                            style={{ backgroundColor: categoryColor }}
                          >
                            {getCategoryIcon(item.category)}
                          </div>
                        </motion.div>
                      </div>

                      {/* Date - Right */}
                      <div className="flex items-start pl-12 pt-3">
                        <span className="text-gray-500 font-medium text-base">
                          {item.dateDisplay}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Date - Left */}
                      <div className="flex items-start justify-end pr-12 pt-3">
                        <span className="text-gray-500 font-medium text-base">
                          {item.dateDisplay}
                        </span>
                      </div>

                      {/* Centered Icon Circle */}
                      <div className="flex justify-center relative z-10">
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-100px" }}
                          variants={iconAppearEffect}
                        >
                          <div
                            className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white"
                            style={{ backgroundColor: categoryColor }}
                          >
                            {getCategoryIcon(item.category)}
                          </div>
                        </motion.div>
                      </div>

                      {/* News Card - Right */}
                      <div className="flex justify-start pl-12">
                        <div
                          onClick={() => handleNewsClick(item)}
                          className="bg-white rounded-lg shadow-md p-6 max-w-md w-full cursor-pointer hover:shadow-xl transition-shadow"
                        >
                          <h3 className="text-xl font-bold text-gray-900 mb-4">
                            {item.title}
                          </h3>

                          {/* Member Images */}
                          {item.memberImages && item.memberImages.length > 0 && (
                            <div className="flex gap-3 mb-4">
                              {item.memberImages.map((memberImg, idx) => (
                                <div
                                  key={idx}
                                  className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200"
                                >
                                  <img
                                    src={memberImg}
                                    alt={`Member ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Description */}
                          <div className="text-sm text-gray-700">
                            {item.shortDescription.split("\n\n").map((para, idx) => (
                              <p key={idx} className="mb-2">
                                {para}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Icon Circle with animation */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={iconAppearEffect}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg flex-shrink-0"
                        style={{ backgroundColor: categoryColor }}
                      >
                        {getCategoryIcon(item.category)}
                      </div>
                    </motion.div>
                    {/* Date */}
                    <span className="text-gray-600 font-medium pt-2">
                      {item.dateDisplay}
                    </span>
                  </div>

                  {/* News Card */}
                  <div
                    onClick={() => handleNewsClick(item)}
                    className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>

                    {/* Member Images */}
                    {item.memberImages && item.memberImages.length > 0 && (
                      <div className="flex gap-3 mb-4">
                        {item.memberImages.map((memberImg, idx) => (
                          <div
                            key={idx}
                            className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200"
                          >
                            <img
                              src={memberImg}
                              alt={`Member ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Description */}
                    <div className="text-sm text-gray-700">
                      {item.shortDescription.split("\n\n").map((para, idx) => (
                        <p key={idx} className="mb-2">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <GoToTopButton />
    </div>
  );
}

export default News;