import { SiGooglescholar, SiResearchgate } from "react-icons/si";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { GrLinkedin } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import PageHeader from "../common/PageHeader";
import GoToTopButton from "../common/GoToTopButton";

// Import member images
import quanImg from "../../assets/members/quan.png";
import fabianImg from "../../assets/members/Fabian.png";
import pranavImg from "../../assets/members/Pranav.png";
import yinchunImg from "../../assets/members/YinchunSu.png";
import cihatImg from "../../assets/members/cihat.png";
import marcoImg from "../../assets/members/marco.png";
import jiaweiImg from "../../assets/members/jiawei.png";
import mahsaImg from "../../assets/members/mahsa.png";
import emreImg from "../../assets/members/Emre.png";
import fatmaImg from "../../assets/members/fatma.png";

const members = [
  {
    name: "Quan Shi, MBBS, PhD",
    image: quanImg,
    role: "Postdoctoral Researcher",
    description: "Dr. Quan Shi is a DFG-funded postdoctoral researcher. He focuses on the development and application of single-cell and spatial transcriptomics technologies in cancer research.",
    email: "mailto:Quan.Shi@uk-essen.de",
    linkedin: "https://www.linkedin.com/in/quan-shi-11b5b49a",
    github: "https://github.com/shiquan",
    website: "https://shiquan.github.io/"
  },
  {
    name: "Fabian Ullrich, MD",
    image: fabianImg,
    role: "UMEA Clinician Scientist",
    description:
      "Dr. Fabian Ullrich joined the lab as an UMEA-funded Clinician Scientist. He currently performs a postdoctoral fellowship in the Zuber Lab at IMP in Vienna, Austria.",
    email: "mailto:fabian.ullrich@uk-essen.de",
    twitter: "https://twitter.com/fa_ulle",
    scholar: "",
    researchgate: "https://www.researchgate.net/profile/Fabian-Ullrich",
    linkedin: "https://www.linkedin.com/in/fabian-u"
  },
  {
    name: "Pranav Swaroop Gundla, MSc",
    image: pranavImg,
    role: "PhD Student",
    description:
      "Pranav Swaroop Gundla is a CANTAR-funded PhD Student and focuses on applying deep learning methods in computational pathology.",
    email: "mailto:pranavswaroop.gundla@uk-essen.de",
    bsky: "https://bsky.app/profile/pranavgundla.bsky.social",
    scholar:
      "https://scholar.google.co.in/citations?user=UzlYsbgAAAAJ&hl=en&oi=ao",
    researchgate: "",
    linkedin: "https://www.linkedin.com/in/pranavswaroopgundla"
  },
  {
    name: "Yinchun Su, MSc",
    image: yinchunImg,
    role: "PhD Student",
    description:
      "Yinchun Su is a DFG-funded PhD student and focuses on performing integrative computational analyses to study aggressive intracranial tumors.",
    email: "mailto: yinchun.su@uk-essen.de",
    researchgate: "https://www.researchgate.net/profile/Yinchun-Su",
    bsky: "https://bsky.app/profile/randef1ned.bsky.social",
    linkedin: "https://www.linkedin.com/in/yinchun-su"
  },
  {
    name: "Cihat Karadag, MD",
    image: cihatImg,
    role: "Clinician Scientist",
    description:
      "Cihat Karadag is a Clinician Scientist with an interest in aggressive brain tumors and leverages real-world clinicogenomic glioma datasets.",
    email: "mailto:",
    bsky: "",
    scholar: "",
    researchgate: "https://www.researchgate.net/profile/Cihat-Karadag",
    linkedin: ""
  },
  {
    name: "Marco Tembrink, MD",
    image: marcoImg,
    role: "UMEA Clinician Scientist",
    description:
      "Marco Tembrink is an UMEA-funded Clinician Scientist. He joined the lab to pursue analyses of complex genomic events in cancer, with a focus on CNS lymphomas.",
    email: "mailto: marco.tembrink@uk-essen.de",
    bsky: "",
    scholar: "",
    researchgate: "",
    linkedin: ""
  }
  
];
const memberTwo = [
  {
    name: "Jiawei Zhou, MD",
    image: jiaweiImg,
    role: "Visiting Researcher",
    description:
      "Jiawei Zhou is a Visiting Researcher collaborating with the lab on systematic analyses of real-world clinico-genomic datasets.",
    email: "",
    bsky: "",
    scholar: "",
    researchgate: "",
    linkedin: ""
  },
  {
    name: "Mahsasadat Nezamabadi, BSc",
    image: mahsaImg,
    role: "Student Research Assistant",
    description:
      "Mahsasadat Nezamabadi is pursuing a Master’s degree in Applied Computer Science at the University of Duisburg-Essen. She supports the team as a Student Research Assistant.",
    email: "mailto:mahsasadat.nezamabadi@stud.uni-due.de",
    linkedin: "https://de.linkedin.com/in/mahsa-sadat-nezamabadi-52238720b"
  }
  
];

const blockTwo = [
  {
    name: "Emre Kocakavuk, MD, PhD",
    image: emreImg,
    role: "Principal Investigator",
    description:
      "Dr. Emre Kocakavuk is a Clinician Scientist and an Emmy Noether Group Leader in the Department of Hematology and Stem Cell Transplantation at the West German Cancer Center & Institute for AI in Medicine (IKIM)",
    email: "mailto:emre.kocakavuk@uk-essen.de",
    bsky: "https://bsky.app/profile/ekocakavuk.bsky.social",
    scholar:
      "https://scholar.google.co.in/citations?user=gGSCLooAAAAJ&hl=en&oi=ao",
    researchgate: "",
    linkedin: "https://de.linkedin.com/in/emre-kocakavuk-824284353"
  }
];
const alumni = [
  {
    name: "Fatma Atak",
    image: fatmaImg,
    role: "Erasmus Exchange Student",
    description:
      "Fatma Atak is an undergraduate student in Electrical and Electronics Engineering at the Marmara university, Istanbul, Turkey . She is joining the lab as a part of Erasmus Exchange Program.",
    email: "mailto:atakf223@gmail.com",
    linkedin: "https://www.linkedin.com/in/fatma-0148881b8"
  }
  
];
function Members() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center text-center">
      {/* Page Title */}
      <PageHeader title="Our Team" />

      {/* First Block of Members Section */}

      <div className="flex flex-col items-center justify-center w-full mt-16 mb-14 ">
        {blockTwo.map((blockTwo, index) =>
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow-xl rounded-lg p-6 w-full max-w-sm h-full"
          >
            {/* Profile Image */}
            <img
              className="w-40 h-40 rounded-full object-cover bg-white p-1 border border-gray-200 shadow-sm transition-transform duration-200 hover:scale-110"
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
              {blockTwo.email &&
                <a
                  href={blockTwo.email}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:text-blue-500"
                >
                  <PiMicrosoftOutlookLogoFill size={20} />
                </a>}

              {blockTwo.bsky &&
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
                      filter:
                        "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                      transition: "filter 0.3s ease-in-out"
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.filter =
                        "invert(48%) sepia(74%) saturate(440%) hue-rotate(163deg) brightness(90%) contrast(90%)";
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.filter =
                        "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)";
                    }}
                  />
                </a>}

              {blockTwo.scholar &&
                <a
                  href={blockTwo.scholar}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:text-blue-500"
                >
                  <SiGooglescholar size={20} />
                </a>}

              {blockTwo.researchgate &&
                <a
                  href={blockTwo.researchgate}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:text-green-500"
                >
                  <SiResearchgate size={20} />
                </a>}
              {blockTwo.linkedin &&
                <a
                  href={blockTwo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:text-blue-700"
                >
                  <GrLinkedin size={20} />
                </a>}
            </div>
          </div>
        )}
      </div>

      {/* Centered Grid for Members- 3 in a row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
        {members.map((member, index) =>
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow-xl rounded-lg p-6 w-full max-w-sm h-full"
          >
            {/* Profile Image */}
            <img
              className="w-40 h-40 rounded-full object-cover bg-white p-1 border border-gray-200 shadow-sm transition-transform duration-200 hover:scale-110"
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
              {member.email &&
                <a
                  href={member.email}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:text-red-500"
                >
                  <PiMicrosoftOutlookLogoFill size={20} />
                </a>}

              {member.bsky &&
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
                      filter:
                        "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                      transition: "filter 0.3s ease-in-out"
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.filter =
                        "invert(48%) sepia(74%) saturate(440%) hue-rotate(163deg) brightness(90%) contrast(90%)";
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.filter =
                        "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)";
                    }}
                  />
                </a>}

              {member.scholar &&
                <a
                  href={member.scholar}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:text-blue-500"
                >
                  <SiGooglescholar size={20} />
                </a>}

              {member.researchgate &&
                <a
                  href={member.researchgate}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:text-green-500"
                >
                  <SiResearchgate size={20} />
                </a>}
              {member.linkedin &&
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:text-blue-700"
                >
                  <GrLinkedin size={20} />
                </a>}
                {member.github && (
  <a
    href={member.github}
    target="_blank"
    rel="noreferrer"
    aria-label={`${member.name} GitHub`}
    className="text-gray-700 transition hover:text-gray-900"
    title="GitHub"
  >
    <FaGithub size={20} />
  </a>
)}

{member.website && (
  <a
    href={member.website}
    target="_blank"
    rel="noreferrer"
    aria-label={`${member.name} Website`}
    className="text-gray-700 transition hover:text-blue-600"
    title="Website"
  >
    <FiGlobe size={20} />
  </a>
)}

            </div>
          </div>
        )}
      </div>

      {/* Centered Grid for Members- 2 in a row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 auto-rows-fr mt-24">
        {memberTwo.map((memberTwo, index) =>
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow-xl rounded-lg p-6 w-full max-w-sm h-full"
          >
            {/* Profile Image */}
            <img
              className="w-40 h-40 rounded-full object-cover bg-white p-1 border border-gray-200 shadow-sm transition-transform duration-200 hover:scale-110"
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
              {memberTwo.email &&
                <a
                  href={memberTwo.email}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:text-blue-500"
                >
                  <PiMicrosoftOutlookLogoFill size={20} />
                </a>}

              {memberTwo.bsky &&
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
                      filter:
                        "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                      transition: "filter 0.3s ease-in-out"
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.filter =
                        "invert(48%) sepia(74%) saturate(440%) hue-rotate(163deg) brightness(90%) contrast(90%)";
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.filter =
                        "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)";
                    }}
                  />
                </a>}

              {memberTwo.scholar &&
                <a
                  href={memberTwo.scholar}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:text-blue-500"
                >
                  <SiGooglescholar size={20} />
                </a>}

              {memberTwo.researchgate &&
                <a
                  href={memberTwo.researchgate}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:text-green-500"
                >
                  <SiResearchgate size={20} />
                </a>}
              {memberTwo.linkedin &&
                <a
                  href={memberTwo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:text-blue-700"
                >
                  <GrLinkedin size={20} />
                </a>}
            </div>
          </div>
        )}
      </div>

      {/* Centered Grid for alumni */}
      <div className="flex flex-col items-center justify-center w-full mt-16 mb-14 ">
        <div className="mb-4">
          <span className=" font-bold text-2xl text-black-900">Alumni</span>
        </div>
        {alumni.map((alumni, index) =>
          <div
            key={index}
            className="flex items-start space-x-6 bg-white shadow-lg rounded-md p-4 w-full max-w-5xl mb-6"
          >
            {/* Profile Image */}
            <img
              className="w-28 h-28 rounded-full object-cover mt-1"
              src={alumni.image}
              alt={alumni.name}
            />

            {/* Name, Role & Description */}
            <div className="flex flex-col justify-between">
              {/* Name & Role */}
              <div className="mb-2">
                <h3 className="text-base font-semibold leading-tight">
                  {alumni.name}
                </h3>
                <p className="text-cyan-500 text-xs">
                  {alumni.role}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm max-w-3xl">
                {alumni.description}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-4">
                {alumni.email &&
                  <a
                    href={alumni.email}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 transition hover:text-blue-500"
                  >
                    <PiMicrosoftOutlookLogoFill
                      size={18}
                      className="hover:fill-blue-500"
                    />
                  </a>}

                {alumni.twitter &&
                  <a
                    href={alumni.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:opacity-100 hover:text-black"
                  >
                    <RiTwitterXLine size={18} />
                  </a>}

                {alumni.scholar &&
                  <a
                    href={alumni.scholar}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 transition hover:text-blue-500"
                  >
                    <SiGooglescholar size={18} />
                  </a>}

                {alumni.researchgate &&
                  <a
                    href={alumni.researchgate}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 transition hover:text-green-500"
                  >
                    <SiResearchgate size={18} />
                  </a>}
                {alumni.linkedin &&
                  <a
                    href={alumni.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 transition hover:text-blue-700"
                  >
                    <GrLinkedin size={20} />
                  </a>}
              </div>
            </div>
          </div>
        )}
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
