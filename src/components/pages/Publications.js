import React, { useState, useEffect } from "react";
import Cite from "citation-js";
import { Link } from "react-router-dom";
import nature2019 from "../../assets/publications-shots/nature-2019.png";
import cancerCell2020 from "../../assets/publications-shots/cancer-cell-2020.png";
import cell2022 from "../../assets/publications-shots/cell-2022.png";
import natGen2021 from "../../assets/publications-shots/nat-gen-2021.png";
import neuroOnco2023 from "../../assets/publications-shots/neuro-onco-2023.png";
import axios from "axios";
const boldAuthorName = (html, authors) => {
  const boldedName = `<strong>${authors}</strong>`;
  return html.replace(new RegExp(authors, "g"), boldedName);
};

const Publications = () => {
  const [fetchedPublications, setFetchedPublications] = useState([]);
  const getDOIForPublication = (title) => {
    const matchingPub = fetchedPublications.find((pub) => pub.title === title);
    console.log("Searching for:", title, "Found:", matchingPub);
    return matchingPub ? `https://doi.org/${matchingPub.DOI}` : null;
  };
  const staticPublications = [
    {
      id: 1,
      image: cancerCell2020,
      title:
        "Comparative molecular life history of spontaneous canine and human gliomas",
      journal: "Cancer Cell",
      year: 2020,
    },
    {
      id: 2,
      image: cell2022,
      title:
        "Glioma progression is shaped by genetic evolution and microenvironment interactions",
      journal: "Cell",
      year: 2022,
    },
    {
      id: 3,
      image: natGen2021,
      title:
        "Radiotherapy is associated with a deletion signature that contributes to poor outcomes in patients with cancer",
      journal: "Cell",
      year: 2022,
    },
    {
      id: 4,
      image: neuroOnco2023,
      title:
        "Hemizygous CDKN2A deletion confers worse survival outcomes in IDHmut-noncodel gliomas",
      journal: "Neuro-Oncology",
      year: 2023,
    },
    {
      id: 5,
      image: nature2019,
      title: "Longitudinal molecular trajectories of diffuse glioma in adults",
      journal: "Nature",
      authors: "Floris P. Barthel, Kevin C. Johnson, Frederick S. Varn, Anzhela D. Moskalik, Georgette Tanner, Emre Kocakavuk, Kevin J. Anderson et.al",
      year: 2019,
    },
  ];

  useEffect(() => {
    const dois = [
      "10.1016/j.ccell.2020.01.004",
      "10.1016/j.cell.2022.04.038",
      "10.1038/s41588-021-00874-3",
      "10.1093/neuonc/noad095",
      "10.1038/s41586-019-1775-1",
    ];
    Promise.all(
      dois.map((doi) => {
        return axios.get(`https://doi.org/${doi}`, {
          headers: { Accept: "application/vnd.citationstyles.csl+json" },
        });
      })
    ).then((responses) => {
      console.log("Raw responses:", JSON.stringify(responses, null, 2));
      const fetchedPublications = responses
        .map((res) => res.data)
        .sort((a, b) => {
          const dateA = new Date(a.issued["date-parts"][0]);
          const dateB = new Date(b.issued["date-parts"][0]);
          return dateB - dateA;
        })
        .map((pub) => {
          if (typeof Cite.format === "function") {
            pub.formattedAuthor = Cite.format(pub.authors, {
              format: "bibtex",
              template: "apa",
              lang: "en-US",
            });
            pub.formattedAuthor = boldAuthorName(
              pub.formattedAuthor,
              "Emre"
            );
          }
          return pub;
        });
      console.log(
        "Fetched Publications:",
        JSON.stringify(fetchedPublications, null, 2)
      );
      setFetchedPublications(fetchedPublications);
    });
  }, []);
 const sortedPublications = [...staticPublications].sort(
   (a, b) => b.year - a.year
 );
  return (
    <div className="flex flex-col justify-center mx-14 z-10 px-4 py-8">
      <h1 className="monst-font text-6xl sm:text-7xl md:text-8xl font-medium text-center break-words pb-2">
        Publications
        <span class="monst-font bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2 sm:break-all">
          Selected
        </span>
      </h1>
      <ul>
        {sortedPublications.map((pub, index) => (
          <li key={index} className="flex mb-8">
            <img
              src={pub.image}
              alt={pub.title}
              className="w-[320px] h-320 mr-4"
            />
            <div>
              <h2 className="monst-font flex flex-col text-xl font-bold mb-2">
                {pub.title}
              </h2>
              <p className="monst-font text-md font-medium text-gray-900">
                {pub.journal}
              </p>

              <p className="monst-font text-sm text-gray-900">{pub.year}</p>
              <p className="monst-font text-md font-medium text-gray-900">
                {pub.authors}
              </p>
              {getDOIForPublication(pub.title) && (
                <Link
                  to={getDOIForPublication(pub.title)}
                  className="monst-font text-md font-medium text-blue-600 hover:underline visited:text-orange-400 mb-2"
                >
                  {getDOIForPublication(pub.title)}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;
