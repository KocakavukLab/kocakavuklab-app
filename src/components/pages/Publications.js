import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const publications = [
    {
        title: "The Epigenetic Evolution of Glioma Is Determined by the IDH1 Mutation Status and Treatment Regimen",
        journal: "Cancer Research",
        doi: "https://doi.org/10.1158/0008-5472.CAN-23-2093",
        authors: "Malta T. M., Sabedot T. S., Morosini N. S., Datta I., Garofano L., Vallentgoed W. R., Varn F. S., Aldape K., D’Angelo F., Bakas S., Barnholtz-Sloan J. S., Gan H. K., Hasanain M., Hau A. C., Johnson K. C., Cazacu S., deCarvalho A. C., Khasraw M., Kocakavuk E., Kouwenhoven M. C. M., Migliozzi S., Niclou S. P., Niers J. M., Ormond D. R., Paek S. H., Reifenberger G., Sillevis Smitt P. A., Smits M., Stead L. F., van den Bent M. J., Van Meir E. G., Walenkamp A., Weiss T., Weller M., Westerman B. A., Ylstra B., Wesseling P., Lasorella A., French P. J., Poisson L. M., GLASS Consortium, Verhaak R. G. W., Iavarone A., Noushmehr H.",
        date: "03/2024",
        image: "can-res-25.png",
        journalLogo: "/journals/can-res.png"
    },
    {
        title: "Hemizygous CDKN2A Deletion Confers Worse Survival Outcomes in IDHmut-Noncodel Gliomas",
        journal: "Neuro-Oncology",
        doi: "https://doi.org/10.1093/neuonc/noad095",
        authors: "Kocakavuk E., Johnson K. C., Sabedot T. S., Reinhardt H. C., Noushmehr H., Verhaak R. G. W.",
        date: "09/2023",
        image: "neu-onco-23.png",
        journalLogo: "/journals/neur-onco.png"
    },
    {
        title: "Glioma Progression Is Shaped by Genetic Evolution and Microenvironment Interactions",
        journal: "Cell",
        doi: "https://doi.org/10.1016/j.cell.2022.04.038",
        authors: "Varn F. S., Johnson K. C., Martinek J., Huse J. T., Nasrallah M. P., Wesseling P., Cooper L. A. D., Malta T. M., Wade T. E., Sabedot T. S., Brat D., Gould P. V., Wöehrer A., Aldape K., Ismail A., Sivajothi S. K., Barthel F. P., Kim H., Kocakavuk E., Ahmed N., White K., Datta I., Moon H. E., Pollock S., Goldfarb C., Lee G. H., Garofano L., Anderson K. J., Nehar-Belaid D., Barnholtz-Sloan J. S., Bakas S., Byrne A. T., D’Angelo F., Gan H. K., Khasraw M., Migliozzi S., Ormond D. R., Paek S. H., Van Meir E. G., Walenkamp A. M. E., Watts C., Weiss T., Weller M., Palucka K., Stead L. F., Poisson L. M., Noushmehr H., Iavarone A., Verhaak R. G. W., GLASS Consortium.",
        date: "06/2022",
        image: "cell-22.png",
        journalLogo: "/journals/cell.png"
    },
    {
        title: "Radiotherapy Is Associated with a Deletion Signature That Contributes to Poor Outcomes in Patients with Cancer",
        journal: "Nature Genetics",
        doi: "https://doi.org/10.1038/s41588-021-00874-3",
        authors: "Kocakavuk E., Anderson K. J., Varn F. S., Johnson K. C., Amin S. B., Sulman E. P., Lolkema M. P., Barthel F. P., Verhaak R. G. W.",
        date: "07/2021",
        image: "nat-gen-21.png",
        journalLogo: "/journals/natgen.jpg"
    },
    {
        title: "Longitudinal Molecular Trajectories of Diffuse Glioma in Adults",
        journal: "Nature",
        doi: "https://doi.org/10.1038/s41586-019-1775-1",
        authors: "Barthel F. P., Johnson K. C., Varn F. S., Moskalik A. D., Tanner G., Kocakavuk E., Anderson K. J., Abiola O., Aldape K., Alfaro K. D., Alpar D., Amin S. B., Ashley D. M., Bandopadhayay P., Barnholtz-Sloan J. S., Beroukhim R., Bock C., Brastianos P. K., Brat D. J., Brodbelt A. R., Bruns A. F., Bulsara K. R., Chakrabarty A., Chakravarti A., Chuang J. H., Claus E. B., Cochran E. J., Connelly J., Costello J. F., Finocchiaro G., Fletcher M. N., French P. J., Gan H. K., Gilbert M. R., Gould P. V., Grimmer M. R., Iavarone A., Ismail A., Jenkinson M. D., Khasraw M., Kim H., Kouwenhoven M. C. M., LaViolette P. S., Li M., Lichter P., Ligon K. L., Lowman A. K., Malta T. M., Mazor T., McDonald K. L., Molinaro A. M., Nam D. H., Nayyar N., Ng H. K., Ngan C. Y., Niclou S. P., Niers J. M., Noushmehr H., Noorbakhsh J., Ormond D. R., Park C. K., Poisson L. M., Rabadan R., Radlwimmer B., Rao G., Reifenberger G., Sa J. K., Schuster M., Shaw B. L., Short S. C., Smitt P. A. S., Sloan A. E., Smits M., Suzuki H., Tabatabai G., Van Meir E. G., Watts C., Weller M., Wesseling P., Westerman B. A., Widhalm G., Woehrer A., Yung W. K. A., Zadeh G., Huse J. T., De Groot J. F., Stead L. F., Verhaak R. G. W., GLASS Consortium.",
        date: "12/2019",
        image: "nature-19.png",
        journalLogo: "/journals/nature.webp"
    },
    {
        title: "Comparative Molecular Life History of Spontaneous Canine and Human Gliomas",
        journal: "Cancer Cell",
        doi: "https://doi.org/10.1016/j.ccell.2020.01.004",
        authors: "Amin S. B., Anderson K. J., Boudreau C. E., Martinez-Ledesma E., Kocakavuk E., Johnson K. C., Barthel F. P., Varn F. S., Kassab C., Ling X., Kim H., Barter M., Lau C. C., Ngan C. Y., Chapman M., Koehler J. W., Long J. P., Miller A. D., Miller C. R., Porter B. F., Rissi D. R., Mazcko C., LeBlanc A. K., Dickinson P. J., Packer R. A., Taylor A. R., Rossmeisl J. H. Jr, Woolard K. D., Heimberger A. B., Levine J. M., Verhaak R. G. W.",
        date: "02/2020",
        image: "can-cell-20.png",
        journalLogo: "/journals/cancerCell.jpg"
    }
];

// Sort publications from latest to oldest
publications.sort((a, b) => {
    const yearA = parseInt(a.date.split("/")[1]); // Extracts the year
    const yearB = parseInt(b.date.split("/")[1]); // Extracts the year
    return yearB - yearA; // Sort in descending order (latest first)
});

const PublicationsPage = () => {
    // Slick carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
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

            {/* Publications Carousel */}
            <div className="w-full max-w-3xl mx-auto flex justify-center mb-8">
                <Slider {...settings} className="w-full">
                    {publications.map((pub, index) => (
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

            {/* Publications List */}
            <div className="w-full max-w-4xl">
                {publications.map((pub, index) => (
                    <div key={index} className="flex flex-row items-center gap-6 py-4 border-b">
                        {/* Left: Thumbnail */}
                        <img src={pub.image} alt={pub.title} className="w-32 h-34 object-cover rounded-md" />

                        {/* Right: Details */}
                        <div className="flex flex-col flex-1">
                            {/* Title */}
                            <a
                                href={pub.doi}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-regular text-gray-600 hover:underline"
                            >
                                {pub.title}
                            </a>

                            {/* Authors List (with bolding for Kocakavuk, E.) */}
                            <p className="text-sm text-gray-500 mt-1">
                                {pub.authors.split(", ").map((author, i) => {
                                const regex = /Kocakavuk,?\s?(E\.?|Emre)/i; // Case insensitive match
                                return (
                                    <span key={i} className={regex.test(author) ? "font-bold text-black" : ""}>
                                        {author}{i < pub.authors.split(", ").length - 1 ? ", " : ""}
                                    </span>
                                    );
                                })}
                            </p>

                            {/* Journal & Year */}
                            <p className="text-xl uppercase font-extrabold text-gray-600 italic mt-1">
                                {pub.journal} {pub.date.split("/")[1]}
                            </p>

                            {/* Open Publication Button */}
                            <div className="mt-3">
                                <a
                                    href={pub.doi}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-2 text-sm font-semibold text-gray-700 border hover:inset-shadow-sm hover:border-green-500 hover:inset-shadow-green-500  transition-all"
                                >
                                    PUBLISHER'S LINK
                                </a>
                            </div>
                        </div>

                        {/* Journal Logo */}
                        <img src={pub.journalLogo} alt={pub.journal} className="w-16 h-16 object-contain rounded-full" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PublicationsPage;