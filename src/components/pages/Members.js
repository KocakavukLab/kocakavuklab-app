import React from "react";
import { SiGmail, SiGooglescholar, SiResearchgate } from "react-icons/si";
import PageHeader from "../common/PageHeader";
import GoToTopButton from "../common/GoToTopButton"; 
const members = [
    

    {
        name: "Pranav Swaroop Gundla, MSc",
        image: "/Pranav.png",
        role: "PhD Student",
        description:
            "Pranav Swaroop Gundla is a CANTAR-funded PhD Student and focusses on applying deep learning methods in computational pathology.",
        email: "mailto:pranavswaroop.gundla@uk-essen.de",
        bsky: "https://bsky.app/profile/pranavgundla.bsky.social",
        scholar:
            "https://scholar.google.co.in/citations?user=UzlYsbgAAAAJ&hl=en&oi=ao",
        researchgate: "",
    },
    {
        name: "Yinchun Su, M.Sc.",
        image: "/YinchunSu.png",
        role: "PhD Student",
        description:
            "Yinchun SU is a DFG-funded PhD student and focusses on performing integrative computational analyses to study aggressive intracranial tumors.",
        email: "mailto: yinchun.su@uk-essen.de",
        researchgate: "https://www.researchgate.net/profile/Yinchun-Su",
        bsky: "https://bsky.app/profile/randef1ned.bsky.social" 
    },
    {
        name: "Cihat Karadag MD",
        image: "/cihat.png",
        role: "Clinician Scientist",
        description:
            "Cihat Karadag is a Clinician Scientist with an interest in aggressive brain tumors and leverages real-world clinicogenomic glioma datasets.",
        email: "mailto:",
        bsky: "",
        scholar:
            "",
        researchgate: "https://www.researchgate.net/profile/Cihat-Karadag",
    }
]
const memberTwo = [
    {
     name: "Mahsasadat Nezamabadi, BSC",
     image: "/mahsa.png",
     role: "Student Research Assistant",
     description:
         "Mahsasadat Nezamabadi is pursuing a Master’s degree in Applied Computer Science at the University of Duisburg-Essen. She supports the team as a Student Research Assistant.",
     email: "mailto:mahsasadat.nezamabadi@stud.uni-due.de",
    },
    {
     name: "Fatma Atak.",
     image: "/fatma.png",
     role: "Erasmus Exchange Student",
     description:
         "Fatma Atak is an undergraduate student in Electrical and Electronics Engineering at the Marmara university, Istanbul, Turkey . She is joining the lab as a part of Erasmus Exchange Program.",
     email: "mailto:atakf223@gmail.com",
    }
   
]

const blockTwo =[ 
    {
        name: "Emre Kocakavuk, MD, PhD",
        image: "/Emre.png",
        role: "Principal Investigator",
        description:
            "Dr. Emre Kocakavuk is a Clinician Scientist and an Emmy Noether Group Leader in the Department of Hematology and Stem Cell Transplantation at the West German Cancer Center & Institute for AI in Medicine (IKIM)",
        email: "mailto:emre.kocakavuk@uk-essen.de",
        bsky: "https://bsky.app/profile/ekocakavuk.bsky.social",
        scholar:
            "https://scholar.google.co.in/citations?user=gGSCLooAAAAJ&hl=en&oi=ao",
        researchgate: "",
    },
     
]
const alumni =[ 
    {
        name: "Fabian Ullrich, MD",
        image: "/Fabian.png",
        role: "UMEA Clinician Scientist",
        description:
            "Dr. Fabian Ullrich is an UMEA-funded Clinician Scientist and dedicates his efforts on clinicogenomic characterization of aggressive and central nervous system lymphomas.",
        email: "mailto:fabian.ullrich@uk-essen.de",
        bsky: "https://twitter.com/fa_ulle",
        scholar: "",
        researchgate: "https://www.researchgate.net/profile/Fabian-Ullrich",
    }
     
]
function Members() {
    return (
        <div className="p-8 flex flex-col items-center text-center">
            {/* Page Title */}
            <PageHeader title="Our Team" />

            {/* First Block of Members Section */}

             <div className="flex flex-col items-center justify-center w-full mt-16 mb-14 ">
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
                        <p className="text-gray-600 text-sm mt-4 ">
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

                            {blockTwo.bsky && (
                                <a
                                    href={blockTwo.bsky}
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
            
            {/* Centered Grid for Members- 3 in a row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
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

                            {member.bsky && (
                                <a
                                    href={member.bsky}
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

             {/* Centered Grid for Members- 2 in a row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 auto-rows-fr mt-24">
                {memberTwo.map((memberTwo, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center bg-white shadow-xl rounded-lg p-6 w-full max-w-sm h-full"
                    >
                        {/* Profile Image */}
                        <img
                            className="w-40 h-40 rounded-full object-cover transition-transform duration-200 hover:scale-110"
                            src={memberTwo.image}
                            alt={memberTwo.name}
                        />

                        {/* Name & Role */}
                        <div className="flex flex-col items-center mt-4">
                            <h3 className="text-lg font-semibold">
                                {memberTwo.name}
                            </h3>
                            <p className="text-cyan-500 text-sm mt-1">
                                {memberTwo.role}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mt-4">
                            {memberTwo.description}
                        </p>

                        {/* Social Icons - Always at the bottom */}
                        <div className="flex justify-center gap-4 mt-auto pt-6">
                            {memberTwo.email && (
                                <a
                                    href={memberTwo.email}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-700 transition hover:text-red-500"
                                >
                                    <SiGmail size={20} />
                                </a>
                            )}

                            {memberTwo.bsky && (
                                <a
                                    href={memberTwo.bsky}
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

                            {memberTwo.scholar && (
                                <a
                                    href={memberTwo.scholar}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-700 transition hover:text-blue-500"
                                >
                                    <SiGooglescholar size={20} />
                                </a>
                            )}

                            {memberTwo.researchgate && (
                                <a
                                    href={memberTwo.researchgate}
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


            {/* Centered Grid for alumni */}
            <div className="flex flex-col items-center justify-center w-full mt-16 mb-14 ">
                <PageHeader title="Alumni" />
                {alumni.map((alumni, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center bg-white shadow-xl rounded-lg p-6 w-full max-w-sm h-full"
                    >
                        {/* Profile Image */}
                        <img
                            className="w-40 h-40 rounded-full object-cover transition-transform duration-200 hover:scale-110"
                            src={alumni.image}
                            alt={alumni.name}
                        />

                        {/* Name & Role */}
                        <div className="flex flex-col items-center mt-4">
                            
                            <h3 className="text-lg font-semibold">
                                
                                {alumni.name}
                            </h3>
                            <p className="text-cyan-500 text-sm mt-1">
                                {alumni.role}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mt-4 ">
                            {alumni.description}
                        </p>

                        {/* Social Icons - Always at the bottom */}
                        <div className="flex justify-center gap-4 mt-auto pt-6">
                            {alumni.email && (
                                <a
                                    href={alumni.email}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-700 transition hover:text-red-500"
                                >
                                    <SiGmail size={20} />
                                </a>
                            )}

                            {alumni.bsky && (
                                <a
                                    href={alumni.bsky}
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

                            {alumni.scholar && (
                                <a
                                    href={alumni.scholar}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-700 transition hover:text-blue-500"
                                >
                                    <SiGooglescholar size={20} />
                                </a>
                            )}

                            {alumni.researchgate && (
                                <a
                                    href={alumni.researchgate}
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