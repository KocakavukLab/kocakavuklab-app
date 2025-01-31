import React from "react";
import { useParams } from "react-router-dom";

const newsDetails = {
    "emmy-noether-grant": {
        title: "Emmy Noether Grant by the DFG",
        date: "2024-08-01",
        content:
            "Emre Kocakavuk has been awarded an Emmy Noether Group Grant by the DFG with a funding volume of over 2M EUR. This will support research for six years. Postdoc and PhD positions will be announced soon!",
        image: "/news/logo_emmy_noether.jpg"
    },
    "memorial-fellowship": {
        title: "Memorial Fellowship by the EKFS",
        date: "2024-02-01",
        content:
            "Emre Kocakavuk has received the prestigious Memorial Fellowship by the Else Kröner-Fresenius-Stiftung (EKFS) for the next two years, supporting innovative research in computational oncology.",
        image: "/news/elsekroner.png"
    },
    "lab-opening": {
        title: "Kocakavuk Lab opening its doors",
        date: "2023-07-01",
        content:
            "We are happy to share the news that the Kocakavuk Lab with a focus on Computational Oncology has officially opened. We welcome Pranav Swaroop Gundla, MSc, as the first PhD student of the lab.",
        image: "/news/opening-doors.png"
    }
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
            />
            <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
            <p className="text-sm text-gray-500 mb-4">{new Date(newsItem.date).toLocaleDateString()}</p>
            
            <p className="text-lg text-gray-700">{newsItem.content}</p>
        </div>
    );
}

export default NewsDetail;