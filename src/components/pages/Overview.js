import React, { useEffect } from "react";
import "../../App.css";
import PageHeader from "../common/PageHeader";

function Overview() {
  
  useEffect(() => {
    // Load Bluesky embed script dynamically
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.jsdelivr.net/npm/bsky-embed/dist/bsky-embed.es.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay for contrast */}
        <div className="relative z-10 text-center px-6">
          <h1 className="monst-font text-4xl md:text-7xl font-extrabold tracking-tight">
            Kocakavuk Lab
          </h1>
          <h2 className="monst-font text-lg md:text-2xl mt-4">
            Computational Oncology
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* About Us Section */}
        <div className="bg-white shadow-xl rounded-lg p-8">
          <PageHeader title="About Us" />
          <p className="text-lg text-contain text-gray-700 leading-relaxed">
            We are a dedicated team of Clinician-Scientists and Researchers
            at the West German Cancer Center and National Center for Tumor Diseases (NCT) West,
            University Hospital Essen. Our research focuses on integrating <strong>computational biology</strong>,
            <strong>genomics</strong>, and <strong>clinical oncology</strong> to push the boundaries of <strong>precision medicine</strong>.
            By leveraging <strong>high-throughput sequencing</strong>, AI-driven analytics, and experimental studies,
            we aim to uncover cancer’s evolutionary mechanisms and improve therapeutic strategies.
          </p>
        </div>
      {/* Bluesky Embedded Timeline with Shorter Context */}
      <div className="bg-white shadow-xl rounded-lg p-8 flex flex-col items-center">
          <PageHeader title="Latest Updates" subtitle="News feed!" />
          <div className="bsky-embed-wrapper">
            <bsky-embed
              username="ekocakavuk.bsky.social"
              mode="light"
              limit="3"
            >
            </bsky-embed>
          </div>

          {/* Load More Button */}
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
            onClick={() => window.open("https://bsky.app/profile/ekocakavuk.bsky.social", "_blank")}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Overview;