import React, { useState, useEffect } from "react";  // Removed setApplyTransition
import Helmet from "react-helmet";
import '../../App.css';

function About() {
  const [h1FontSize, setH1FontSize] = useState("4rem");
  const [h2FontSize, setH2FontSize] = useState("1.75rem");
  const [applyTransition, setApplyTransition] = useState(true);

  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isMobile = window.innerWidth <= 768;

    setApplyTransition(!isSafari && !isMobile);

    if (!isSafari && !isMobile) {
      const handleScroll = () => {
        let newSizeH1 = Math.max(2, 4 - window.scrollY / 100) + "rem";
        setH1FontSize(newSizeH1);
        let newSizeH2 = Math.min(4, 2 + window.scrollY / 100) + "rem";
        setH2FontSize(newSizeH2);
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Helmet>

      <header className="relative h-screen bg-center" id="bg-aboutcover">
        <div className="absolute"></div>
        <div className="h-full flex flex-col justify-center items-center text-center backdrop-blur-sm backdrop-opacity-20 bg-orange/20">
          <h1
            style={{
              fontSize: h1FontSize, transition: "font-size 0.3s",
              '@media(max-width: 768px)': {
                fontSize: '1.5rem',
              }
            }}
            className={`monst-font text-white sm:text-xs leading-relaxed sm:leading-normal md:leading-relaxed md:text-xl mb-4 pb-4 lg:text-5xl ${applyTransition ? 'header-transition' : 'header-no-transition'}`}
          >
            Kocakavuk Lab
          </h1>

          <h2
            style={{
              fontSize: h2FontSize, transition: "font-size 0.3s",
              '@media(max-width: 768px)': {
                fontSize: '2rem',
              }
            }}
            className={`monst-font text-white sm:text-sm leading-relaxed sm:leading-normal md:leading-relaxed md:text-xl mb-2 pb-5 sm:font-normal lg:text-2xl ${applyTransition ? 'header-transition' : 'header-no-transition'}`}
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
}

export default About;
