import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
function About() {
  const [h1FontSize, setH1FontSize] = useState("5rem");
  const [h2FontSize, setH2FontSize] = useState("1.5rem"); // Initial font size for h2

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the h1 font size based on scroll position
      let newSizeH1 = Math.max(3, 5 - window.scrollY / 100) + "rem";
      setH1FontSize(newSizeH1);

      // Adjust the h2 font size based on scroll position
      let newSizeH2 = Math.min(5, 3 + window.scrollY / 100) + "rem";
      setH2FontSize(newSizeH2);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Helmet>

      <header
        className="relative h-screen bg-cover bg-center"
        id="bg-aboutcover"
      >
        <div className="absolute"></div>
        <div className="h-full flex flex-col justify-center items-center text-center">
          <h1
            style={{ fontSize: h1FontSize, transition: "font-size 0.3s" }}
            className="monst-font text-white  text-2xl sm:text-sm leading-relaxed sm:leading-normal md:leading-relaxed md:text-xl mb-4 pb-4 sm:font-normal lg:text-5xl"
          >
            Kocakavuk Lab
          </h1>

          <h2
            style={{ fontSize: h2FontSize, transition: "font-size 0.3s" }}
            className="monst-font text-white text-xl sm:text-sm leading-relaxed sm:leading-normal md:leading-relaxed md:text-xl mb-2 pb-5 sm:font-normal lg:text-2xl"
          >
            Computational Oncology
          </h2>
        </div>
      </header>
      {/* Other content */}
      <div className="py-8 px-4 md:px-4 lg:px-6 text-center">
        <h1 class="monst-font text-5xl font-medium-500 text-center">
          About Us
        </h1>
        <p class="monst-font font-medium-200 p-6">
          We are a dedicated team of Clinician-Scientists and Researchers based
          at the West German Cancer Center and the National Center for Tumor
          Diseases (NCT) West, University Hospital Essen. Our work lies at the
          intersection of clinical oncology, computational biology and genomics.
          Using high-throughput sequencing and computational analysis, combined
          with preclinical functional studies, we aim to advance the field of
          precision oncology. Understanding the evolutionary patterns (both
          natural and in response to treatment) of cancer is a major part of our
          research.
        </p>
      </div>
    </div>
  );
};

export default About;
