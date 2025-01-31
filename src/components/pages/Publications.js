import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const publications = [
    {
        title: "The Epigenetic Evolution of Glioma Is Determined by the IDH1 Mutation Status and Treatment Regimen",
        journal: "Neuro-Oncology",
        doi: "https://doi.org/10.1158/0008-5472.can-23-2093",
        authors: "Malta, T. M., Sabedot, T. S., Morosini, N. S., Kocakavuk, E., et al.",
        date: new Date(2025, 3), 
        image: "can-res-25.png",
        category: "Key Publications"
    },
    {
        title: "Hemizygous CDKN2A deletion confers worse survival outcomes in IDHmut-noncoled gliomas",
        journal: "Neuro-Oncology",
        doi: "https://doi.org/10.1093/neuonc/noad095",
        authors: "Kocakavuk, E., Johnson, K. C., Sabedot, T. S., et al.",
        date: new Date(2023, 5), 
        image: "neu-onco-23.png",
        category: "Key Publications"
    },
    {
        title: "Glioma progression is shaped by genetic evolution and microenvironment interactions",
        journal: "Cell",
        doi: "https://www.sciencedirect.com/science/article/pii/S0092867422005360?via%3Dihub",
        authors: "Kocakavuk, E., Anderson, K., Nasrallah, M. L. P., et al.",
        date: new Date(2022, 5), 
        image: "cell-22.png",
        category: "Key Publications"
    },
    {
        title: "Radiotherapy is associated with a deletion signature that contributes to poor outcomes in patients with cancer",
        journal: "Nature Genetics",
        doi: "https://doi.org/10.1038/s41588-021-00874-3",
        authors: "Kocakavuk, E., Anderson, K., et al.",
        date: new Date(2021, 5), 
        image: "nat-gen-21.png"
    },
    {
        title:"Longitudinal molecular trajectories of diffuse glioma in adults",
        journal: "Nature",
        doi:"https://doi.org/10.1038/s41586-019-1775-1",
        authors: "Barthel, F. P., Johnson, K. C., Varn, F. S., Kocakavuk, E., et al.",
        date: new Date(2019, 11),
        image: "nature-19.png"
    },
    {
        title:"Comparative molecular life history of spontaneous canine and human gliomas",
        journal: "Cancer Cell",
        doi:"https://doi.org/10.1016/j.ccell.2020.01.004",
        authors: "Amin, S. B., Anderson, K. J., Boudreau, C. E., Kocakavuk, E., et al.",
        date: new Date(2020, 2),
        image: "can-cell-20.png"
    }
];

// Sort publications from latest to oldest
publications.sort((a, b) => b.date - a.date);

// Tabs
const categories = ["Key Publications", "Google Scholar"];

const PublicationsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("Key Publications");

    const filteredPublications = publications.filter(
        (pub) => selectedCategory === "Key Publications"
    );

    // Slick carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // One image per slide
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="p-8 flex flex-col items-center w-full max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-6">
                <h1 className="font-bold text-4xl text-gray-800">Publications</h1>
                <p className="text-lg text-gray-600 mt-2">Explore our research work</p>
            </div>

            {/* Centered Container for Carousel */}
            <div className="w-full max-w-3xl mx-auto flex justify-center mb-8">
                <Slider {...settings} className="w-full">
                    {filteredPublications.map((pub, index) => (
                        <div key={index} className="px-4 flex justify-center">
                            <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                                <div className="w-full h-full shadow-xl overflow-hidden bg-white">
                                <img
                                    src={pub.image}
                                    alt={pub.title}
                                    className="w-full h-full object-contain shadow-xl hover:opacity-80 transition duration-200"
                                />
                                </div>
                            
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Category Tabs */}
            <div className="flex justify-center space-x-4 mb-6 w-full max-w-md">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 text-lg font-semibold w-full rounded ${
                            selectedCategory === category
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-gray-800"
                        }`}
                        onClick={() =>
                            category === "Google Scholar"
                                ? window.open("https://scholar.google.co.in/citations?user=gGSCLooAAAAJ&hl=en&oi=ao", "_blank")
                                : setSelectedCategory(category)
                        }
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Publications List */}
            <div className="grid gap-4 max-w-3xl w-full">
                {filteredPublications.map((pub, index) => (
                    <div key={index} className="border p-4 rounded-lg shadow-md bg-white">
                        <a
                            href={pub.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-blue-600"
                        >
                            {pub.title}
                        </a>
                        <p className="text-sm text-gray-500">
                            {pub.authors} ({pub.date.toLocaleString('en-US', { month: 'long', year: 'numeric' })})
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PublicationsPage;