import React from "react";
import { SiGmail, SiGooglescholar, SiResearchgate } from "react-icons/si";
import PageHeader from "../common/PageHeader";
import GoToTopButton from "../common/GoToTopButton"; 
const members = [
    {
        name: "Emre Kocakavuk, MD, PhD",
        image: "/Emre.png",
        role: "Principal Investigator",
        description:
            "Dr. Emre Kocakavuk is a Clinician Scientist and an Emmy Noether Group Leader in the Department of Hematology and Stem Cell Transplantation at the West German Cancer Center & Institute for AI in Medicine (IKIM)",
        email: "mailto:emre.kocakavuk@uk-essen.de",
        twitter: "https://bsky.app/profile/ekocakavuk.bsky.social",
        scholar:
            "https://scholar.google.co.in/citations?user=gGSCLooAAAAJ&hl=en&oi=ao",
        researchgate: "",
    },
   
    {
        name: "Fabian Ullrich, MD",
        image: "/Fabian.png",
        role: "UMEA Clinician Scientist",
        description:
            "Dr. Fabian Ullrich is an UMEA-funded Clinician Scientist and dedicates his efforts on clinicogenomic characterization of aggressive and central nervous system lymphomas.",
        email: "mailto:fabian.ullrich@uk-essen.de",
        twitter: "https://twitter.com/fa_ulle",
        scholar: "",
        researchgate: "https://www.researchgate.net/profile/Fabian-Ullrich",
    },
    {
        name: "Pranav Swaroop Gundla, MSc",
        image: "/Pranav.png",
        role: "PhD Student",
        description:
            "Pranav Swaroop Gundla is a CANTAR-funded PhD Student and focusses on applying deep learning methods in computational pathology.",
        email: "mailto:pranavswaroop.gundla@uk-essen.de",
        twitter: "https://bsky.app/profile/pranavgundla.bsky.social",
        scholar:
            "https://scholar.google.co.in/citations?user=UzlYsbgAAAAJ&hl=en&oi=ao",
        researchgate: "",
    },
   
];

const blockTwo =[ 
    {
     name: "Mahsasadat Nezamabadi, B.Sc.",
     image: "/mahsa.png",
     role: "Student Research Assistant",
     description:
         "Mahsasadat Nezamabadi is pursuing a Master’s degree in Applied Computer Science with a focus on Systems Engineering at the University of Duisburg-Essen. She supports the team as a Student Research Assistant.",
     email: "mailto:mahsasadat.nezamabadi@stud.uni-due.de",
    }
]

function Members() {
    return (
        <div className="p-8 flex flex-col items-center text-center">
            {/* Page Title */}
            <PageHeader title="Our Team" />

            {/* Centered Grid for Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
                {members.map((member, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center bg-white shadow-xl rounded-lg p-6 w-full max-w-sm h-full"
                    >
                        {/* Profile Image */}
                        <img
                            className="w-40 h-40 rounded-full object-cover transition-transform duration-200 hover:scale-110"
                            src={member.image}
                            alt={member.name}
                        />

                        {/* Name & Role */}
                        <div className="flex flex-col items-center mt-4">
                            <h3 className="text-lg font-semibold">
                                {member.name}
                            </h3>
                            <p className="text-cyan-500 text-sm mt-1">
                                {member.role}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mt-4">
                            {member.description}
                        </p>

                        {/* Social Icons - Always at the bottom */}
                        <div className="flex justify-center gap-4 mt-auto pt-6">
                            {member.email && (
                                <a
                                    href={member.email}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-700 transition hover:text-red-500"
                                >
                                    <SiGmail size={20} />
                                </a>
                            )}

                            {member.twitter && (
                                <a
                                    href={member.twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="transition hover:opacity-100"
                                >
                                    <img
                                        src="bluesky.svg"
                                        alt="Bluesky"
                                        className="w-5 h-5 opacity-80 transition"
                                        style={{
                                            filter: "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                                            transition: "filter 0.3s ease-in-out",
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.filter =
                                                "invert(48%) sepia(74%) saturate(440%) hue-rotate(163deg) brightness(90%) contrast(90%)";
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.filter =
                                                "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)";
                                        }}
                                    />
                                </a>
                            )}

                            {member.scholar && (
                                <a
                                    href={member.scholar}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-700 transition hover:text-blue-500"
                                >
                                    <SiGooglescholar size={20} />
                                </a>
                            )}

                            {member.researchgate && (
                                <a
                                    href={member.researchgate}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-700 transition hover:text-green-500"
                                >
                                    <SiResearchgate size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Second Block of Members Section */}

             <div className="flex flex-col items-center justify-center w-full mt-16">
                {blockTwo.map((blockTwo, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center bg-white shadow-xl rounded-lg p-6 w-full max-w-sm h-full"
                    >
                        {/* Profile Image */}
                        <img
                            className="w-40 h-40 rounded-full object-cover transition-transform duration-200 hover:scale-110"
                            src={blockTwo.image}
                            alt={blockTwo.name}
                        />

                        {/* Name & Role */}
                        <div className="flex flex-col items-center mt-4">
                            <h3 className="text-lg font-semibold">
                                {blockTwo.name}
                            </h3>
                            <p className="text-cyan-500 text-sm mt-1">
                                {blockTwo.role}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mt-4">
                            {blockTwo.description}
                        </p>

                        {/* Social Icons - Always at the bottom */}
                        <div className="flex justify-center gap-4 mt-auto pt-6">
                            {blockTwo.email && (
                                <a
                                    href={blockTwo.email}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-700 transition hover:text-red-500"
                                >
                                    <SiGmail size={20} />
                                </a>
                            )}

                            {blockTwo.twitter && (
                                <a
                                    href={blockTwo.twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="transition hover:opacity-100"
                                >
                                    <img
                                        src="bluesky.svg"
                                        alt="Bluesky"
                                        className="w-5 h-5 opacity-80 transition"
                                        style={{
                                            filter: "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                                            transition: "filter 0.3s ease-in-out",
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.filter =
                                                "invert(48%) sepia(74%) saturate(440%) hue-rotate(163deg) brightness(90%) contrast(90%)";
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.filter =
                                                "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)";
                                        }}
                                    />
                                </a>
                            )}

                            {blockTwo.scholar && (
                                <a
                                    href={blockTwo.scholar}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-700 transition hover:text-blue-500"
                                >
                                    <SiGooglescholar size={20} />
                                </a>
                            )}

                            {blockTwo.researchgate && (
                                <a
                                    href={blockTwo.researchgate}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-700 transition hover:text-green-500"
                                >
                                    <SiResearchgate size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div> 

            {/* Join Us Button with better UI/UX */}
            {/* <button
            onClick={() => window.location.href = "/joinus"}
            className="mt-4 px-6 py-2 text-md font-medium text-white bg-gradient-to-r bg-gradient-to-r from-[#FB7686] to-[#145587] hover:from-[#145587] hover:to-[#FB7686] rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95"
            >
            Join Us →
            </button> */}
            {/* Add the Go to Top Button */}
            <GoToTopButton />
        </div>
    );
}

export default Members;