import React from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti"; // Import confetti
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PageHeader from "../common/PageHeader";
// Icons
import { FaMoneyBillWave, FaUserPlus, FaNewspaper } from "react-icons/fa";
import { motion } from "framer-motion";

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
// News Data
const news = [
  {
    title: "Emmy Noether Grant by the DFG",
    date: "August 2024",
    description:
      "Emre Kocakavuk has been awarded an Emmy Noether Group Grant by the DFG with a funding volume of over 2M EUR. Postdoc and PhD positions will be available soon!",
    image: "/news/logo_emmy_noether.jpg",
    category: "grant",
    link: "/news/emmy-noether-grant"
  },
  {
    title: "Memorial Fellowship by the EKFS",
    date: "February 2024",
    description:
      "Emre Kocakavuk has been awarded a prestigious Memorial Fellowship by the Else Kröner-Fresenius-Stiftung (EKFS) for the next two years.",
    image: "/news/elsekroner.png",
    category: "grant",
    link: "/news/memorial-fellowship"
  },
  {
    title: "Kocakavuk Lab opening its doors",
    date: "July 2023",
    description:
      "We are happy to share the news that the Kocakavuk Lab with a focus on Computational Oncology has opened. We welcome Pranav Swaroop Gundla, MSc as the first PhD student of the lab.",
    image: "/news/opening-doors.png",
    category: "new_member",
    link: "/news/lab-opening"
  }
];

// Sort news items in descending order (latest first)
const sortedNews = [...news].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

// Function to return the correct icon based on the category
const getCategoryIcon = category => {
  switch (category) {
    case "grant":
      return <FaMoneyBillWave />;
    case "new_member":
      return <FaUserPlus />;
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

  const handleNewsClick = item => {
    if (item.category === "grant") {
      launchConfetti(); // Trigger confetti for grant news
    }
    navigate(item.link);
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100 flex flex-col items-center">
      {/* Reusable Page Header */}
      <PageHeader
        title="🔥 Latest News"
        subtitle="Stay updated with our latest achievements!"
      />

      <VerticalTimeline>
        {sortedNews.map((item, index) =>
          <VerticalTimelineElement
            key={index}
            date={item.date}
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

            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-20 object-contain rounded-lg shadow-md my-4"
            />

            {/* Description */}
            <p className="text-gray-700">
              {item.description}
            </p>
          </VerticalTimelineElement>
        )}
      </VerticalTimeline>
    </div>
  );
}

export default News;
