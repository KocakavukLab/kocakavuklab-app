import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoToTopButton from "../common/GoToTopButton";

import publications from "../../data/generated/publications";

// Sort publications by Year & Month
publications.sort((a, b) => {
    const [monthA, yearA] = a.date.split("/").map(Number);
    const [monthB, yearB] = b.date.split("/").map(Number);
    return yearB - yearA || monthB - monthA;
});

const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1, centerMode: false } }
    ]
};

const highlightRegex = /(Kocakavuk|Karadag C\.|Gundla P\. S\.)/;

const PublicationsPage = () => {
    const contributions = publications.filter(
        (pub) => pub.status && /in-review|submitted/i.test(pub.status.trim())
    );
    const ownWork = publications.filter(
        (pub) => !pub.status || /published/i.test(pub.status.trim())
    );

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
            {/* Header */}
            <div className="text-center mb-6">
                <h1 className="font-bold text-5xl text-gray-800">Publications</h1>
                <p className="text-lg text-gray-600 mt-2">Explore our research</p>
            </div>

            {/* Contributions Section */}
            {contributions.length > 0 && (
                <>
                    <div className="text-center my-10">
                        <h2 className="text-3xl font-bold text-gray-800">Contributions</h2>
                        <p className="text-lg text-gray-600 mt-2">
                            Lab Collaboration
                        </p>
                    </div>
                    {contributions.map((pub, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center gap-6 py-4 border-b">
                            <img src={pub.image} alt={pub.title} className="w-32 h-auto max-h-40 object-cover rounded-md" />

                            <div className="flex flex-col flex-1">
                                <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="text-xl font-regular text-gray-600 hover:underline">
                                    {pub.title}
                                </a>

                                <p className="text-sm text-gray-500 mt-1 hidden sm:block">
                                    {pub.authors.split(", ").map((author, i) => (
                                        <span key={i} className={highlightRegex.test(author) ? "font-bold text-black" : ""}>
                                            {author}
                                            {i < pub.authors.split(", ").length - 1 ? ", " : ""}
                                        </span>
                                    ))}
                                </p>

                                <p className="text-xl uppercase font-extrabold text-gray-600 italic mt-1">
                                    {pub.journal} {pub.date.split("/")[1]}
                                    <span className="ml-2 text-sm font-semibold text-red-500">
                                        ({pub.status})
                                    </span>
                                </p>

                                <div className="mt-3 hidden sm:block">
                                    <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-sm font-semibold text-gray-700 border hover:border-green-500 transition-all">
                                        PUBLISHER'S LINK
                                    </a>
                                </div>
                            </div>

                            <img src={pub.journalLogo} alt={pub.journal} className="w-16 h-16 object-contain rounded-full" />
                        </div>
                    ))}
                </>
            )}

            {/* Our Work Section */}
            <div className="text-center my-10">
                <h2 className="text-3xl font-bold text-gray-800">Our Work</h2>
                <p className="text-lg text-gray-600 mt-2">Published research</p>
            </div>

            <div className="w-full max-w-4xl mx-auto mb-8 hidden sm:block">
                <Slider {...carouselSettings}>
                    {ownWork.map((pub, index) => (
                        <div key={index} className="px-4 flex justify-center">
                            <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={pub.image}
                                    alt={pub.title}
                                    className="w-full h-full object-contain shadow-lg hover:opacity-80 transition duration-200"
                                />
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>

            {ownWork.map((pub, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-6 py-4 border-b">
                    <img src={pub.image} alt={pub.title} className="w-32 h-auto max-h-40 object-cover rounded-md" />

                    <div className="flex flex-col flex-1">
                        <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="text-xl font-regular text-gray-600 hover:underline">
                            {pub.title}
                        </a>

                        <p className="text-sm text-gray-500 mt-1 hidden sm:block">
                            {pub.authors.split(", ").map((author, i) => (
                                <span key={i} className={highlightRegex.test(author) ? "font-bold text-black" : ""}>
                                    {author}
                                    {i < pub.authors.split(", ").length - 1 ? ", " : ""}
                                </span>
                            ))}
                        </p>

                        <p className="text-xl uppercase font-extrabold text-gray-600 italic mt-1">
                            {pub.journal} {pub.date.split("/")[1]}
                        </p>

                        <div className="mt-3 hidden sm:block">
                            <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-sm font-semibold text-gray-700 border hover:border-green-500 transition-all">
                                PUBLISHER'S LINK
                            </a>
                        </div>
                    </div>

                    <img src={pub.journalLogo} alt={pub.journal} className="w-16 h-16 object-contain rounded-full" />
                </div>
            ))}

            <div className="w-full flex justify-center mt-8">
                <a
                    href="https://scholar.google.com/citations?user=gGSCLooAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition shadow-md"
                >
                    View on Google Scholar
                </a>
            </div>

            <GoToTopButton />
        </div>
        </div>
    );
};

export default PublicationsPage;