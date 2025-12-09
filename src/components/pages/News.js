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
import GoToTopButton from "../common/GoToTopButton";
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
  // ESMO Merit Award
  {
    title: "ESMO Merit Award",
    date: "November 2025",
    description:
      "<p>Our PhD student Pranav Swaroop Gundla has been awarded the prestigious ESMO Merit Award at the ESMO AI & Digital Oncology Congress 2025. "
      "The study highlights how foundation models and attention-based multiple instance learning (MIL) can help decode the molecular landscape of gliomas directly from H&E-stained whole slide images (WSIs) — moving one step closer toward precision pathology.</p>"
      "Checkout the poster <a href='https://doi.org/10.1016/j.esmorw.2025.100474' target='_blank'>here</a>"
      "<p><a href='https://www.linkedin.com/feed/hashtag/esmoai25/' target='_blank'>#ESMOAI25</a> "
      "<a href='https://www.linkedin.com/feed/hashtag/esmomeritaward/' target='_blank'>#ESMOMeritAward</a></p>" ,
    image: "/news/Merit_Awardees.jpg",
    category: "grant",
    link: "news/esmo-merit-award"
  },
  // Marco's UMEA Grant
  {
    title: "Junior Clinician Scientist Fellowship by UMEA",
    date: "November 2025",
    description:
      "Marco Tembrink, MD, has successfully secured a Junior Clinician Scientist fellowship granted by the Clinician Scientist Academy of the University Hospital Essen (UMEA) to join the lab and study focusing on genomic characterization of CNS lymphomas." ,
    image: "/news/umea.png",
    category: "grant",
    link: "/news/marco-grant"
  },
  // Marco, Jiawei and Quan
  {
        title: "New members joining the lab",
        date: "October 2025",
        description:
  "Marco Tembrink joins as a UMEA Clinician Scientist, focusing on genomic characterization of CNS lymphomas.\n\n" +
  "Jiawei Zhou joins as a Visiting Researcher from Jiangsu Cancer Hospital, working on real-world cancer datasets.\n\n" +
  "Dr. Quan Shi joins as a Postdoctoral Researcher, funded by the DFG, focusing on the development and application of single-cell and spatial transcriptomics technologies in cancer research.",
        image: "/news/members2.png",
        category: "new_member",
        link:"/news/new-member2"

    },
    // Cihat, Yinchun, Mahsa, Fatma
    {
        title: "New members joining the lab",
        date: "June 2025",
        description:
  "Cihat Karadag MD joins as a Clinician Scientist focused on glioma research and the use of clinicogenomic data in neuro-oncology.\n\n" +
  "Yinchun Su joins as a PhD student, focusing on tumor heterogeneity through multi-omic data integration.\n\n" +
  "Mahsasadat Nezamabadi, a Master’s student in Applied Computer Science at the University of Duisburg-Essen, joins as a Student Research Assistant.\n\n" +
  "Fatma Atak, an undergraduate student in Electrical and Electronics Engineering at Marmara University in Istanbul, Turkey, joins the lab as part of the Erasmus exchange program.",
        image: "/news/members.png",
        category: "new_member",
        link:"/news/new-member"

    },
    // Fabian Ullrich
  {
    title: "Junior Clinician Scientist Fellowship by UMEA",
    date: "April 2024",
    description:
      "Fabian Ullrich, MD, has successfully secured a Junior Clinician Scientist fellowship granted by the Clinician Scientist Academy of the University Hospital Essen (UMEA) to join the lab and study aggressive and central nervous system lymphomas." ,
    image: "/news/umea.png",
    category: "grant",
    link: "/news/umea-fellowship-grant"
  },
  // Emmy Noether Grant
  {
    title: "Emmy Noether Grant by the DFG",
    date: "May 2025",
    description:
      "This is a true milestone for our laboratory as we have secured funding in the prestigious Emmy Noether Program of the German Research Foundation (DFG). The grant with a funding volume over 2M EUR will support our research for the next six years. Stay tuned for postdoc and PhD positions!" ,
    image: "/news/logo_emmy_noether.jpg",
    category: "grant",
    link: "/news/emmy-noether-grant"
  },
  // EKFS Fellowship
  {
    title: "Memorial Fellowship by the EKFS",
    date: "February 2024",
    description:
      "We are excited to share the news that Emre Kocakavuk, MD, PhD has received the Memorial Fellowship by the Else Kröner-Fresenius-Stiftung (EKFS). This fellowship will support AI-guided analyses in precision oncology for the next two years.",
    image: "/news/elsekroner.png",
    category: "grant",
    link: "/news/memorial-fellowship"
  },
  // Lab opening its doors.
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
// Function to parse date strings into actual Date objects for sorting
const parseDate = (dateString) => {
  const months = {
      January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
      July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
  };
  
  const [month, year] = dateString.split(" ");
  return new Date(parseInt(year), months[month], 1); // Correct month index
};

// Sort news items in descending order (latest first)
const sortedNews = [...news].sort((a, b) => parseDate(b.date) - parseDate(a.date));
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
        title="Latest News"
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
              className="w-45 h-20 object-fit rounded-lg shadow-md my-4"
            />

            {/* Description */}
            <p className="text-gray-700">
              {item.description.split("\n\n").map((para, idx) => (
  <p key={idx} className="text-gray-700 mb-4">
    {para}
  </p>
))}
            </p>
          </VerticalTimelineElement>
        )}
      </VerticalTimeline>
      <GoToTopButton />
    </div>
  );
}

export default News;
