import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import cancerCell2020 from "../../assets/publications-shots/cancer-cell-2020.png";
import cell2022 from "../../assets/publications-shots/cell-2022.png";
import natGen2021 from "../../assets/publications-shots/nat-gen-2021.png";
import neuroOnco2023 from "../../assets/publications-shots/neuro-onco-2023.png";
import nat2019 from "../../assets/publications-shots/nat2019.png";
const boldAuthorName = (authors, targetNames) => {
  let boldedAuthors = authors;
  targetNames.forEach((name) => {
    const boldedName = `<strong>${name}</strong>`;
    boldedAuthors = boldedAuthors.replace(new RegExp(name, "g"), boldedName);
  });
  return boldedAuthors;
};
const staticPublications = [
  {
    id: 1,
    image: cancerCell2020,
    title:"Comparative molecular life history of spontaneous canine and human gliomas",
    journal: "Cancer Cell",
    year: 2020,
    url: "https://doi.org/10.1016/j.ccell.2020.01.004",
    authors:"SB Amin, KJ Anderson, CE Boudreau, E Martinez-Ledesma, E Kocakavuk et.al",
  },
  {
    id: 2,
    image: cell2022,
    title:"Glioma progression is shaped by genetic evolution and microenvironment interactions",
    journal: "Cell",
    year: 2022,
    url: "https://doi.org/10.1016/j.cell.2022.04.038",
    authors: "FS Varn, KC Johnson, J Martinek, JT Huse, MLP Nasrallah, P Wesseling, Emre Kocakavuk et.al",
  },
  {
    id: 3,
    image: natGen2021,
    title:"Radiotherapy is associated with a deletion signature that contributes to poor outcomes in patients with cancer",
    journal: "Nature Genetics",
    year: 2021,
    url: "https://doi.org/10.1038/s41588-021-00874-3",
    authors: "Kocakavuk, E., Anderson, K.J., Varn, F.S. et al.",
  },
  {
    id: 4,
    image: neuroOnco2023,
    title:"Hemizygous CDKN2A deletion confers worse survival outcomes in IDHmut-noncodel gliomas",
    journal: "Neuro-Oncology",
    year: 2023,
    url: "https://doi.org/10.1093/neuonc/noad095",
    authors: "Emre Kocakavuk, Kevin C Johnson, Thais S Sabedot, Hans Christian Reinhardt, Houtan Noushmehr, Roel G W Verhaak",
  },
  {
    id:5,
    image:nat2019,
    title: "Longitudinal molecular trajectories of diffuse glioma in adults",
    journal: "Nature",
    year:2019,
    url:"https://doi.org/10.1038/s41586-019-1775-1",
    authors:"Floris P. Barthel, Kevin C. Johnson, Frederick S. Varn, Anzhela D. Moskalik, Georgette Tanner, Emre Kocakavuk et al.",
  },
];
const Publications = () => {
  const [sortedPublications, setSortedPublications] = useState([]);

  useEffect(() => {
    const sorted = [...staticPublications].sort((a, b) => b.year - a.year);
    const boldedAuthorsSorted = sorted.map((pub) => ({
      ...pub,
      authors: boldAuthorName(pub.authors, ["Emre", "Kocakavuk", "Emre Kocakavuk", "Kocakavuk, E."]),
    }));
    setSortedPublications(boldedAuthorsSorted);
  }, []);

  return (
    <div className="flex flex-col justify-center z-10 px-4 py-8">
      <div className="lg:flex grid grid-cols-1">
        <h1 className="monst-font md:text-5xl text-3xl font-medium break-words pb-2">
        Publications
          <span className="text-xs text-blue-600">
          Selected
        </span>
      </h1>
      </div>
      <ul>
        {sortedPublications.map((pub) => (
          <li key={pub.id} className="flex px-2 md:px-0 shadow-inner border rounded-md mb-8">
            <div className="hidden sm:block lg:flex grid-cols-1 px-2 lg:px-0">
              <img src={pub.image} alt={pub.title} className="object-fill md:object-scale-down w-[320px] h-320 mr-4" />
            </div>
            
            <div className="p-2">
              <h2 className="monst-font flex flex-col text-xl font-bold mb-2">
                {pub.title}
              </h2>
                <p className="monst-font text-md font-medium text-gray-900">
                  {pub.journal}
                </p>
                <Link
                  to={pub.url}
                  target="_blank"
                  className="monst-font text-md font-medium text-blue-600 hover:underline visited:text-orange-400 mb-2"
                >
                  {pub.url}
                </Link>
              <p className="monst-font text-md text-gray-900"
                dangerouslySetInnerHTML={{ __html: pub.authors }}
              ></p>
                <p className="monst-font text-md font-medium text-gray-900">
                  {pub.year}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Publications;
