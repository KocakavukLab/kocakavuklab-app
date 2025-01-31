import React from "react";
import { SiGmail, SiGooglescholar, SiResearchgate } from "react-icons/si";
import PageHeader from "../common/PageHeader";
// Define member data
const members = [
  {
    name: "Emre Kocakavuk, MD, PhD",
    title: "Group Leader",
    image: "/Emre.png",
    role: "Group Leader",
    description:
      "Dr. Emre Kocakavuk leads the Computational Oncology group at Kocakavuk Lab. His research focuses on understanding the molecular mechanisms driving gliomas.",
    email: "mailto:emre.kocakavuk@uk-essen.de",
    twitter: "https://twitter.com/ekocakavuk",
    scholar:
      "https://scholar.google.co.in/citations?user=gGSCLooAAAAJ&hl=en&oi=ao",
    researchgate: ""
  },
  {
    name: "Fabian Ullrich, MD",
    title: "Clinician Scientist",
    image: "/Fabian.png",
    role: "Genomics of CNS Lymphoma",
    description:
      "Dr. Fabian Ullrich is a clinician scientist with a special focus on the genomics of CNS lymphoma. His work bridges the gap between clinical practice and research.",
    email: "mailto:fabian.ullrich@uk-essen.de",
    twitter: "https://twitter.com/fa_ulle",
    scholar: "",
    researchgate: "https://www.researchgate.net/profile/Fabian-Ullrich"
  },
  {
    name: "Pranav Swaroop Gundla, MSc",
    title: "PhD Student",
    image: "/Pranav.png",
    role: "Computational Pathology",
    description:
      "Pranav Swaroop Gundla is a PhD student specializing in computational pathology, focusing on developing new algorithms for cancer diagnosis.",
    email: "mailto:pranavswaroop.gundla@uk-essen.de",
    twitter: "https://twitter.com/im_pranavgundla",
    scholar:
      "https://scholar.google.co.in/citations?user=UzlYsbgAAAAJ&hl=en&oi=ao",
    researchgate: ""
  }
];

function Members() {
  return (
    <div className="p-8 flex flex-col items-center text-center">
      {/* Page Title */}
      <PageHeader title="Our Team" subtitle="Meet our dedicated researchers" />

      {/* Centered Grid for Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
        {members.map((member, index) =>
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 w-full max-w-sm"
          >
            {/* Profile Image */}
            <img
              className="w-40 h-40 rounded-full object-cover transition-transform duration-200 hover:scale-110"
              src={member.image}
              alt={member.name}
            />
            {/* Name & Role */}
            <h3 className="monst-font text-lg font-semibold mt-4">
              {member.name}
            </h3>
            <p className="text-cyan-500 text-sm">
              {member.role}
            </p>
            <p className="text-gray-600 text-sm mt-2">
              {member.description}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              {member.email &&
                <a href={member.email} target="_blank" rel="noreferrer">
                  <SiGmail
                    className="text-gray-700 hover:text-red-500 transition"
                    size={20}
                  />
                </a>}
              {member.twitter &&
                <a href={member.twitter} target="_blank" rel="noreferrer">
                  <img
                    src="bluesky.svg"
                    alt="Bluesky"
                    className="w-5 h-5 opacity-80 hover:opacity-100 transition"
                    style={{
                      filter:
                        "invert(34%) sepia(99%) saturate(1000%) hue-rotate(175deg) brightness(93%) contrast(100%)"
                    }} // Sky Blue Color
                  />
                </a>}
              {member.scholar &&
                <a href={member.scholar} target="_blank" rel="noreferrer">
                  <SiGooglescholar
                    className="text-gray-700 hover:text-blue-500 transition"
                    size={20}
                  />
                </a>}
              {member.researchgate &&
                <a href={member.researchgate} target="_blank" rel="noreferrer">
                  <SiResearchgate
                    className="text-gray-700 hover:text-green-500 transition"
                    size={20}
                  />
                </a>}
            </div>
          </div>
        )}
      </div>

      {/* Uncle Sam Section (Centered) */}
      <div className="flex flex-col items-center justify-center w-full mt-16">
        <img
          className="w-48 sm:w-56 lg:w-64 h-auto mx-auto mb-4 transition-transform duration-300 hover:scale-110"
          src="uncle-sam.svg"
          alt="We Are Hiring"
        />
        <PageHeader
          title="🚀 Hiring Soon!"
          subtitle="Exciting opportunities are on the way. Stay tuned!"
        />
      </div>
    </div>
  );
}

export default Members;
