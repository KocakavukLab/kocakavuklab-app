/**
 * News Data Configuration
 *
 * This file contains all news items for the Kocakavuk Lab website.
 * Each news item follows a consistent structure for easy maintenance.
 *
 * STRUCTURE:
 * - id: Unique identifier (used in URL routing)
 * - title: News headline
 * - date: Date object for proper sorting
 * - dateDisplay: Human-readable date (e.g., "November 2025")
 * - category: One of: "grant", "award", "new_member", "publication", "general"
 * - shortDescription: Brief summary for the timeline view
 * - fullContent: Detailed content (supports markdown)
 * - image: Imported image from assets folder
 * - tags: Array of relevant tags (optional)
 */

// Import news images from assets
import meritAwardeesImg from '../assets/news/Merit_Awardees.jpg';
import umeaImg from '../assets/news/umea.png';
import newMembersImg from '../assets/news/new_members.png';
import EKFSlogoImg from '../assets/news/elsekroner.png';
import openDoorsImg from '../assets/news/opening-doors.png';
import EmmyNoetherImg from '../assets/news/logo_emmy_noether.jpg';
// import publications from '../assets/news/publications.png';
// import awardsRecognition from '../assets/news/awards_recognition.png';
// import generalNewsImg from '../assets/news/general_news.png';
// import grantsFundingImg from '../assets/news/grants_funding.png';

// Import member images for new member announcements
import pranavImg from '../assets/members/Pranav.png';
import marcoImg from '../assets/members/marco.png';
import jiaweiImg from '../assets/members/jiawei.png';
import quanImg from '../assets/members/quan.png';
import cihatImg from '../assets/members/cihat.png';
import yinchunImg from '../assets/members/YinchunSu.png';
import mahsaImg from '../assets/members/mahsa.png';
import fatmaImg from '../assets/members/fatma.png';

export const NEWS_CATEGORIES = {
  GRANT: {
    id: 'grant',
    label: 'Grants & Funding',
    color: '#10B981',
    icon: 'FaMoneyBillWave'
  },
  AWARD: {
    id: 'award',
    label: 'Awards & Recognition',
    color: '#F59E0B',
    icon: 'FaAward'
  },
  NEW_MEMBER: {
    id: 'new_member',
    label: 'New Members',
    color: '#3B82F6',
    icon: 'FaUserPlus'
  },
  PUBLICATION: {
    id: 'publication',
    label: 'Publications',
    color: '#8B5CF6',
    icon: 'FaNewspaper'
  },
  GENERAL: {
    id: 'general',
    label: 'General News',
    color: '#6B7280',
    icon: 'FaNewspaper'
  }
};

export const newsItems = [
  // ==================== 2025 ====================

  // ESMO Merit Award - November 2025
  {
    id: "esmo-merit-award",
    title: "ESMO Merit Award",
    date: new Date(2025, 10, 15), // November 15, 2025
    dateDisplay: "November 2025",
    category: NEWS_CATEGORIES.AWARD.id,
    shortDescription: "Our PhD student Pranav Swaroop Gundla has been awarded the prestigious ESMO Merit Award at the ESMO AI & Digital Oncology Congress 2025.",
    fullContent:
      "Our PhD student Pranav Swaroop Gundla has been awarded the prestigious ESMO Merit Award at the ESMO AI & Digital Oncology Congress 2025 in Berlin.\n\n" +
      "The study highlights how foundation models and attention-based multiple instance learning (MIL) can help decode the molecular landscape of gliomas directly from H&E-stained whole slide images (WSIs) — moving one step closer toward precision pathology.\n\n" +
      "Checkout the poster [here](https://doi.org/10.1016/j.esmorw.2025.100474)\n\n" +
      "[#ESMOAI25](https://www.linkedin.com/feed/hashtag/esmoai25/) [#ESMOMeritAward](https://www.linkedin.com/feed/hashtag/esmomeritaward/)",
    image: meritAwardeesImg,
    tags: ["ESMO", "Award", "AI", "Glioma", "Computational Pathology"]
  },

  // Marco's UMEA Grant - November 2025
  {
    id: "marco-grant",
    title: "Junior Clinician Scientist Fellowship by UMEA",
    date: new Date(2025, 10, 1), // November 1, 2025
    dateDisplay: "November 2025",
    category: NEWS_CATEGORIES.GRANT.id,
    shortDescription: "Marco Tembrink, MD, has successfully secured a Junior Clinician Scientist fellowship granted by the Clinician Scientist Academy of the University Hospital Essen (UMEA).",
    fullContent:
      "Marco Tembrink, MD, has successfully secured a Junior Clinician Scientist fellowship granted by the Clinician Scientist Academy of the University Hospital Essen (UMEA) to join the lab and study focusing on genomic characterization of CNS lymphomas.\n\n" +
      "This fellowship will enable cutting-edge research in the molecular characterization of central nervous system lymphomas, bridging clinical expertise with computational approaches.",
    image: umeaImg,
    tags: ["UMEA", "Fellowship", "CNS Lymphomas", "Genomics"]
  },

  // Marco, Jiawei and Quan - October 2025
  {
    id: "new-member2",
    title: "New members joining the lab",
    date: new Date(2025, 9, 1), // October 1, 2025
    dateDisplay: "October 2025",
    category: NEWS_CATEGORIES.NEW_MEMBER.id,
    shortDescription: "We are delighted to welcome three new members to the Kocakavuk Lab: Marco Tembrink, Jiawei Zhou, and Dr. Quan Shi.",
    fullContent:
      "**Marco Tembrink** joins as a UMEA Clinician Scientist, focusing on genomic characterization of CNS lymphomas.\n\n" +
      "**Jiawei Zhou** joins as a Visiting Researcher from Jiangsu Cancer Hospital, working on real-world cancer datasets.\n\n" +
      "**Dr. Quan Shi** joins as a Postdoctoral Researcher, funded by the DFG, focusing on the development and application of single-cell and spatial transcriptomics technologies in cancer research.\n\n" +
      "We are excited to have these talented researchers join our team!",
    image: newMembersImg,
    memberImages: [marcoImg, jiaweiImg, quanImg],
    tags: ["New Members", "CNS Lymphomas", "Single-Cell", "Spatial Transcriptomics"]
  },

  // Cihat, Yinchun, Mahsa, Fatma - June 2025
  {
    id: "new-member",
    title: "New members joining the lab",
    date: new Date(2025, 5, 1), // June 1, 2025
    dateDisplay: "June 2025",
    category: NEWS_CATEGORIES.NEW_MEMBER.id,
    shortDescription: "We are thrilled to welcome four new members to the Kocakavuk Lab: Cihat Karadag, Yinchun Su, Mahsasadat Nezamabadi, and Fatma Atak.",
    fullContent:
      "**Cihat Karadag MD** joins as a Clinician Scientist focused on glioma research and the use of clinicogenomic data in neuro-oncology.\n\n" +
      "**Yinchun Su** joins as a PhD student, focusing on tumor heterogeneity through multi-omic data integration.\n\n" +
      "**Mahsasadat Nezamabadi**, a Master's student in Applied Computer Science at the University of Duisburg-Essen, joins as a Student Research Assistant.\n\n" +
      "**Fatma Atak**, an undergraduate student in Electrical and Electronics Engineering at Marmara University in Istanbul, Turkey, joins the lab as part of the Erasmus exchange program.\n\n" +
      "Welcome to the team!",
    image: newMembersImg,
    memberImages: [cihatImg, yinchunImg, mahsaImg, fatmaImg],
    tags: ["New Members", "Glioma", "Multi-omics", "Erasmus"]
  },

  // Emmy Noether Grant - May 2025
  {
    id: "emmy-noether-grant",
    title: "Emmy Noether Grant by the DFG",
    date: new Date(2025, 4, 1), // May 1, 2025
    dateDisplay: "May 2025",
    category: NEWS_CATEGORIES.GRANT.id,
    shortDescription: "This is a true milestone for our laboratory as we have secured funding in the prestigious Emmy Noether Program of the German Research Foundation (DFG).",
    fullContent:
      "This is a true milestone for our laboratory as we have secured funding in the prestigious Emmy Noether Program of the German Research Foundation (DFG). The grant with a funding volume over 2M EUR will support our research for the next six years.\n\n" +
      "The Emmy Noether Programme is one of the most prestigious funding opportunities in Germany, supporting exceptional early-career researchers in establishing their own independent research groups.\n\n" +
      "**Stay tuned for postdoc and PhD positions!**",
    image: EmmyNoetherImg,
    tags: ["DFG", "Emmy Noether", "Funding", "2M EUR", "6 years"]
  },

  // ==================== 2024 ====================

  // Fabian Ullrich - April 2024
  {
    id: "umea-fellowship-grant",
    title: "Junior Clinician Scientist Fellowship by UMEA",
    date: new Date(2024, 3, 1), // April 1, 2024
    dateDisplay: "April 2024",
    category: NEWS_CATEGORIES.GRANT.id,
    shortDescription: "Fabian Ullrich, MD, has successfully secured a Junior Clinician Scientist fellowship granted by the Clinician Scientist Academy of the University Hospital Essen (UMEA).",
    fullContent:
      "Fabian Ullrich, MD, has successfully secured a Junior Clinician Scientist fellowship granted by the Clinician Scientist Academy of the University Hospital Essen (UMEA) to join the lab and study aggressive and central nervous system lymphomas.\n\n" +
      "This fellowship will support Dr. Ullrich's research into the molecular mechanisms and therapeutic vulnerabilities of aggressive lymphomas, with a particular focus on CNS involvement.",
    image: umeaImg,
    tags: ["UMEA", "Fellowship", "CNS Lymphomas", "Aggressive Lymphomas"]
  },

  // EKFS Fellowship - February 2024
  {
    id: "memorial-fellowship",
    title: "Memorial Fellowship by the EKFS",
    date: new Date(2024, 1, 1), // February 1, 2024
    dateDisplay: "February 2024",
    category: NEWS_CATEGORIES.GRANT.id,
    shortDescription: "We are excited to share the news that Emre Kocakavuk, MD, PhD has received the Memorial Fellowship by the Else Kröner-Fresenius-Stiftung (EKFS).",
    fullContent:
      "We are excited to share the news that Emre Kocakavuk, MD, PhD has received the Memorial Fellowship by the Else Kröner-Fresenius-Stiftung (EKFS). This fellowship will support AI-guided analyses in precision oncology for the next two years.\n\n" +
      "The Else Kröner-Fresenius-Stiftung is one of Germany's largest foundations in the healthcare sector, and this fellowship recognizes outstanding physician-scientists pursuing innovative research.",
    image: EKFSlogoImg,
    tags: ["EKFS", "Fellowship", "AI", "Precision Oncology"]
  },

  // ==================== 2023 ====================

  // Lab Opening - July 2023
  {
    id: "lab-opening",
    title: "Kocakavuk Lab opening its doors",
    date: new Date(2023, 6, 1), // July 1, 2023
    dateDisplay: "July 2023",
    category: NEWS_CATEGORIES.NEW_MEMBER.id,
    shortDescription: "We are happy to share the news that the Kocakavuk Lab with a focus on Computational Oncology has opened.",
    fullContent:
      "We are happy to share the news that the Kocakavuk Lab with a focus on Computational Oncology has opened. We welcome Pranav Swaroop Gundla, MSc as the first PhD student of the lab.\n\n" +
      "Our lab is dedicated to advancing computational approaches in cancer research, with a particular focus on integrating multi-omic data, artificial intelligence, and clinical insights to improve patient outcomes.\n\n" +
      "This marks the beginning of an exciting journey!",
    image: openDoorsImg,
    memberImages: [pranavImg],
    tags: ["Lab Opening", "Computational Oncology", "First PhD Student"]
  }
];

/**
 * Utility Functions
 */

// Get all unique years from news items (sorted descending)
export const getYears = () => {
  const years = [...new Set(newsItems.map(item => item.date.getFullYear()))];
  return years.sort((a, b) => b - a);
};

// Get news items by year
export const getNewsByYear = (year) => {
  return newsItems.filter(item => item.date.getFullYear() === year);
};

// Get news items by category
export const getNewsByCategory = (categoryId) => {
  return newsItems.filter(item => item.category === categoryId);
};

// Get news item by ID
export const getNewsById = (id) => {
  return newsItems.find(item => item.id === id);
};

// Sort news items by date (descending)
export const getSortedNews = () => {
  return [...newsItems].sort((a, b) => b.date - a.date);
};

// Group news by year
export const getNewsGroupedByYear = () => {
  const grouped = {};
  const sortedNews = getSortedNews();

  sortedNews.forEach(item => {
    const year = item.date.getFullYear();
    if (!grouped[year]) {
      grouped[year] = [];
    }
    grouped[year].push(item);
  });

  return grouped;
};
