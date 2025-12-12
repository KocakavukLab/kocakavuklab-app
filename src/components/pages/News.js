
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PageHeader from "../common/PageHeader";
import GoToTopButton from "../common/GoToTopButton";
import {
  getSortedNews
} from "../../data/newsData";
// Icons
import { FaMoneyBillWave, FaUserPlus, FaNewspaper, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";
import '../../App.css';

const fadeInEffect = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2 } }
};

const glowEffect = {
  initial: { boxShadow: "0px 0px 0px rgba(0, 255, 0, 0)" },
  animate: {
    boxShadow: [
      "0px 0px 20px rgba(0, 255, 0, 0.5)",
      "0px 0px 30px rgba(0, 255, 0, 0.7)",
      "0px 0px 20px rgba(0, 255, 0, 0.5)",
      "0px 0px 0px rgba(0, 255, 0, 0)"
    ],
    transition: { duration: 2, repeat: 1 }
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
        subtitle="Stay updated with our latest achievements and milestones!"
      />

      {/* Timeline */}
      <VerticalTimeline>
        {allNews.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.dateDisplay}
            contentStyle={{
              background: "#fff",
              color: "#333",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            iconStyle={{
              background: "#fff",
              color: "#333",
              border: "2px solid #ccc"
            }}
            icon={getCategoryIcon(item.category)}
            onTimelineElementClick={() => handleNewsClick(item)}
            className="cursor-pointer"
          >
            {/* Apply animation only for new members */}
            {item.category === "new_member"
              ? <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInEffect}
                >
                  <motion.h3
                    className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                    variants={glowEffect}
                  >
                    {item.title}
                  </motion.h3>
                </motion.div>
              : <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  {/* News Title with Hover Effect */}
                  {item.title}
                </h3>}

            {/* Description */}
            <p className="text-gray-700">
              {item.shortDescription.split("\n\n").map((para, idx) => (
                <p key={idx} className="text-gray-700 mb-4">
                  {para}
                </p>
              ))}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <GoToTopButton />
    </div>
  );
}

export default News;
