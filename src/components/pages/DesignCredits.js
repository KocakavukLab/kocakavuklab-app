import React from "react";
import { Link } from "react-router-dom";
import { FaReact, FaFontAwesome, FaThumbsUp, FaHandPointDown } from "react-icons/fa";


const DesignCredits = () => {
  return (
    <div className="grid grid-cols-1 text-lg p-10 monst-font">
      <h1 className="monst-font text-cyan-400 text-center text-6xl mb-5">
        Web Design Credits
      </h1>
      <p className="monst-font  text-black text-justify items-center">
        <div className="flex items-center monst-font">
          <FaThumbsUp className="mr-4" />{" "}
          <Link
            to={{ pathname: "https://biocoderr.github.io/" }}
            target="_blank"
            className="m-1 monst-font"
          >
            Pranav{" "}
          </Link>{" "}
          who has designed the website
        </div>
        <div className="flex items-center monst-font">
          <FaHandPointDown className="mr-4" />
          WebPage is completely built using the Frameworks and libraries:
          <br />
        </div>
        <div className="flex items-center">
          <FaReact className="mr-4" /> React.js
        </div>
        <div className="flex items-center monst-font">
          <FaFontAwesome className="mr-4" /> TailwindCSS
        </div>
        <div className="flex items-center monst-font">
          <FaFontAwesome className="mr-4" />
          Slidejs
        </div>
        <div className="flex items-center monst-font">
          <FaFontAwesome className="mr-4" /> FontAwesome-Icons
        </div>
        <div className="flex items-center monst-font">
          <FaFontAwesome className="mr-4" /> Material-ui-icons
        </div>
        <div className="flex items-center monst-font">
          <FaFontAwesome className="mr-4" /> AdobeFirefly's Text to image is
          used for HomePage Cover.
        </div>
        <div className="flex items-center monst-font">
          <FaFontAwesome className="mr-4" />
          <Link
            to="https://react-icons.github.io/react-icons"
            className="monst-font"
          >
            Font Awesome Icons, BoxIcons & Material UI Icons.
          </Link>
        </div>
        <div className="flex items-center monst-font">
          <FaFontAwesome className="mr-4" />
          Home Page Cover is designed by{" "}
          <Link
            to="https://www.adobe.com/sensei/generative-ai/firefly.html"
            className="monst-font ml-4"
          >
            Adobe firefly
          </Link>
          .
        </div>
      </p>
    </div>
  );
};

export default DesignCredits;