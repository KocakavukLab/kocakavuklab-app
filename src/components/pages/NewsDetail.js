import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";


const newsDetails = {
// news detail 1
    "esmo-merit-award": {
    title: "ESMO Merit Award",
    date: "11/2025",
    content: 
        "<p><a href='https://www.linkedin.com/feed/hashtag/esmomeritaward/' target='_blank'>#ESMOMeritAward</a> "
        "<a href='https://www.linkedin.com/feed/hashtag/esmoai25/' target='_blank'>#ESMOAI25</a></p>"
        "<p>Our PhD student Pranav Swaroop Gundla, has been awarded the prestigious ESMO Merit Award at the 2025 ESMO AI in Oncology Congress. "
        "This recognition highlights their contribution to foundation-model-powered molecular subtype prediction in diffuse gliomas.</p>"
        "<p>Learn more and join the conversation: "
        "<a href='https://www.linkedin.com/feed/hashtag/esmoai25/' target='_blank'>#ESMOAI25</a> "
        "<a href='https://www.linkedin.com/feed/hashtag/esmomeritaward/' target='_blank'>#ESMOMeritAward</a>.</p>",
    image: "/news/Merit_Awardees.jpg"
}
,
// news detail 2
    "new-member2": {
        title: "New members joining the lab",
        date: "10/2025",
        content:
  "**Marco Tembrink** joins as a UMEA Clinician Scientist, focusing on genomic characterization of CNS lymphomas.\n\n" +
  "**Jiawei Zhou** joins as a Visiting Researcher from Jiangsu Cancer Hospital, working on real-world cancer datasets.\n\n" +
  "**Dr. Quan Shi** joins as a Postdoctoral Researcher, funded by the DFG, focusing on the development and application of single-cell and spatial transcriptomics technologies in cancer research.\n\n",
        image: "/news/members2.jpg"
    },
// news detail 3
        "new-member": {
        title: "New members joining the lab",
        date: "06/2025",
        content:
  "**Cihat Karadag MD** joins as a Clinician Scientist focused on glioma research and the use of clinicogenomic data in neuro-oncology.\n\n" +
  "**Yinchun Su** joins as a PhD student, focusing on tumor heterogeneity through multi-omic data integration.\n\n" +
  "**Mahsasadat Nezamabadi**, a Master’s student in Applied Computer Science at the University of Duisburg-Essen, joins as a Student Research Assistant.\n\n" +
  "**Fatma Atak**, an undergraduate student in Electrical and Electronics Engineering at Marmara University in Istanbul, Turkey, joins the lab as part of the Erasmus exchange program.",
        image: "/news/members.jpg"
    },
// news detail 4
    "emmy-noether-grant": {
        title: "Emmy Noether Grant by the DFG",
        date: "05/2025",
        content:
            "This is a true milestone for our laboratory as we have secured funding in the prestigious Emmy Noether Program of the German Research Foundation (DFG). The grant with a funding volume over 2M EUR will support our research for the next six years. Stay tuned for postdoc and PhD positions!",
        image: "/news/logo_emmy_noether.jpg"
    },
// news detail 5
    "umea-fellowship-grant": {
        title: "Junior Clinician Scientist Fellowship by UMEA",
        date: "04/2024",
        content:
            "Fabian Ullrich, MD, has successfully secured a Junior Clinician Scientist fellowship granted by the Clinician Scientist Academy of the University Hospital Essen (UMEA) to join the lab and study aggressive and central nervous system lymphomas.",
        image: "/news/umea.png"
    },
// news detail 6
    "memorial-fellowship": {
        title: "Memorial Fellowship by the EKFS",
        date: "02/2024",
        content:
            "We are excited to share the news that Emre Kocakavuk, MD, PhD has received the Memorial Fellowship by the Else Kröner-Fresenius-Stiftung (EKFS). This fellowship will support AI-guided analyses in precision oncology for the next two years.",
        image: "/news/elsekroner.png"
    },
// news detail 7
    "lab-opening": {
        title: "Kocakavuk Lab opening its doors",
        date: "07/2023",
        content:
            "We are happy to share the news that the Kocakavuk Lab with a focus on Computational Oncology has opened. We welcome Pranav Swaroop Gundla, MSc as the first PhD student of the lab.",
        image: "/news/opening-doors.png"
        },
};

function NewsDetail() {
    const { newsId } = useParams();
    const newsItem = newsDetails[newsId];

    if (!newsItem) {
        return <p className="text-center text-red-500">News article not found!</p>;
    }

    return (
        <div className="max-w-3xl mx-auto py-16 px-8">
            <img
                src={newsItem.image}
                alt={newsItem.title}
                className="w-full rounded-lg shadow-lg mb-6"
                loading="lazy"
            />
            <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
            <p className="text-sm text-gray-500 mb-4">
            {newsItem.date}
            </p>
            
            <ReactMarkdown
  components={{
    p: ({ node, ...props }) => (
      <p className="text-lg text-gray-700 mb-4" {...props} />
    ),
    strong: ({ node, ...props }) => (
      <strong className="font-semibold text-gray-900" {...props} />
    )
  }}
>
  {newsItem.content}
</ReactMarkdown>
        </div>
    );
}

export default NewsDetail;