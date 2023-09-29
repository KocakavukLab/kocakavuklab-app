import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import "../../App.css";
import {FaArrowRight, FaArrowLeft} from "react-icons/fa";
import {
  CanTarLogo,
  BFondLogo,
  DFGLogo,
  WTZLogo,
  EKFSLogo,
  ESMOLogo,
  WSGLogo,
  UMEALogo,
  UMEHLogo,
  YaleLogo,
  ForbeckLogo,
  GLASSLogo,
  NCTLogo
} from "../LogoName";
global.window.matchMedia = require("media-match").default;
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-next hidden md:inline lg:inline"
      style={{ color: '#082F49', fontSize: '20px', right: '-10px' }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev hidden md:inline lg:inline"
      style={{ color: '#082F49', fontSize: '20px', left: '-10px' }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};
const Network = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [nav3, setNav3] = useState(null);
  const [nav4, setNav4] = useState(null);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: nav2,
    autoplay: true,
    autoplaySpeed: 1500,
    lazyLoad: `ondemand`,
    pauseOnFocus: true,
    
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: nav1,
    dots: false,
    centerMode: true,
    swipeToSlide: false,
    focusOnSelect: false,
    centerPadding: "10px",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  const settingsMainFunders = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: nav3,
    autoplay: true,
    autoplaySpeed: 1500,
    lazyLoad: `ondemand`,
    pauseOnFocus: true,
   
  };
  const settingsThumbsFunders = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: nav4,
    dots: false,
    centerMode: true,
    swipeToSlide: false,
    focusOnSelect: false,
    centerPadding: "10px",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
const networking = [
  {
    nid: 1,
    ntitle: "UMEH",
    nlogo: UMEHLogo,
    url: "https://www.uni-essen-haematologie.de/",
  },
  {
    nid: 2,
    ntitle: "ESMO",
    nlogo: ESMOLogo,
    url: "https://www.esmo.org/",
  },
  {
    nid: 3,
    ntitle: "NCT",
    nlogo: NCTLogo,
    url: "https://nct.dkfz.de/en/nct.html",
  },
  {
    nid: 4,
    ntitle: "Yale",
    nlogo: YaleLogo,
    url: "https://www.yale.edu/",
  },
  {
    nid: 5,
    ntitle: "WTZ",
    nlogo: WTZLogo,
    url: "https://wtz-essen.de/",
  },
  {
    nid: 6,
    ntitle: "GLASS",
    nlogo: GLASSLogo,
    url: "https://www.glass-consortium.org/",
  },
];
  const funders = [
    {
      id: 1,
      logo: BFondLogo,
      title: "Boehringer Ingelheim Fonds",
      url: "https://www.bifonds.de/index.html",
    },
    {
      id: 2,
      title: "CANTAR",
      logo: CanTarLogo,
      url: "land.nrw/pressemitteilung/81-millionen-euro-landesfoerderung-fuer-fuenf-exzellente-forschungsnetzwerke",
    },
    {
      id: 3,
      title: "DFG",
      logo: DFGLogo,
      url: "https://www.dfg.de/",
    },
    {
      id: 4,
      title: "EKFS",
      logo: EKFSLogo,
      url: "https://www.ekfs.de/",
    },
    
    
    {
      id: 5,
      title: "Walter Siegenthaler Gesellschaft",
      logo: WSGLogo,
      url: "https://siegenthaler-gesellschaft.de/",
    },
    {
      id: 8,
      title: "UMEA",
      logo: UMEALogo,
      url: "https://www.uni-due.de/med/umea/",
    },
    {
      id: 6,
      title: "Forbeck",
      logo: ForbeckLogo,
      url: "https://www.wgfrf.org/",
    },
  ];

  return (
    <div className="slide-app">
      <div className="slider-wrapper space-x-6">
        {/* Network */}
        <div className="relative networks-div p-6">
          <h1 className="monst-font text-5xl font-medium text-center break-words">
            Our Network
          </h1>
          <Slider {...settingsMain} ref={(slider) => setNav1(slider)}>
            {networking.map((network) => (
              <div className="slick-slide" key={network.nid}>
                <Link to={network.url} target="_blank">
                  <img
                    className="slick-slide-image mx-auto w-1/2 h-1/2 m-10"
                    src={network.nlogo}
                    alt={network.ntitle}
                  />
                </Link>
              </div>
            ))}
          </Slider>
          <div className="thumbnail-slider-wrap mt-4 h-20">
            <Slider {...settingsThumbs} ref={(slider) => setNav2(slider)}>
              {networking.map((network) => (
                <div className="slick-slide" key={network.nid}>
                  <img
                    className="slick-slide-image mx-auto w-3/4"
                    src={network.nlogo}
                    alt={network.ntitle}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* Networks div close */}
        <div className="relative funders-div p-10 m-20">
          {/* Funders */}
          <h1 className="monst-font text-5xl font-medium text-center break-words">
            {" "}
            Funding
          </h1>
          <Slider {...settingsMainFunders} ref={(slider) => setNav3(slider)}>
            {funders.map((funder) => (
              <div className="slick-slide" key={funder.id}>
                <Link to={funders.url} target="_blank">
                  <img
                    className="slick-slide-image mx-auto w-1/2 h-1/2 m-10"
                    src={funder.logo}
                    alt={funder.title}
                  />
                </Link>
              </div>
            ))}
          </Slider>
          <div className="thumbnail-slider-wrap mt-4 h-20">
            <Slider
              {...settingsThumbsFunders}
              ref={(slider) => setNav4(slider)}
            >
              {funders.map((funder) => (
                <div className="slick-slide" key={funder.id}>
                  <img
                    className="slick-slide-image mx-auto w-3/4"
                    src={funder.logo}
                    alt={funder.title}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* Funders div close*/}
      </div>
    </div>
  );
};
export default Network;

