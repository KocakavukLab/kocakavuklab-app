import React from "react";
import { Link } from "react-router-dom";

const DesignCredits = () => {
  return (
    <div className="  grid grid-cols-1 p-6 px-6 md:px-4 lg:text-md">
      <div className="md:text-center sm:text-justify">
        <h1 className="credits-font text-gray-500 text-center lg:text-5xl text-3xl mb-5">
          Site Credits
        </h1>
        <div className="credits-font  text-black items-center">
          <div className="flex flex-col text-left items-center">
            <ul className="text-lg text-sm">
              <li>
                Website designed by{" "}
                <Link
                  to="https://biocoderr.github.io"
                  className="hover:underline visited:text-orange-400"
                >
                  Pranav
                </Link>
              </li>
              <li className="credit-font">
                WebPage is completely built using the Frameworks and libraries:{" "}
                <br />
                <Link
                  to="https://react.dev/"
                  className="credit-font hover:underline hover:text-blue-700 visited:text-orange-400"
                >
                  React.js
                </Link>
                <br />
                <Link
                  to="https://tailwindcss.com/"
                  className="credit-font hover:underline hover:text-blue-700 visited:text-orange-400"
                >
                  TailwindCSS
                </Link>
                <br />
                <Link
                  to="https://nathansearles.github.io/slidesjs/"
                  className="credit-font hover:underline hover:text-blue-700 visited:text-orange-400"
                >
                  Slidejs
                </Link>
              </li>
              <li className="credit-font">
                Icons from{" "}
                <Link
                  to="https://www.adobe.com/sensei/generative-ai/firefly.html"
                  className="credit-font hover:underline visited:text-orange-400"
                >
                  react-icons
                </Link>
              </li>
              <li className="credit-font">
                Home Page Cover is designed by{" "}
                <Link
                  to="https://www.adobe.com/sensei/generative-ai/firefly.html"
                  className="credit-font hover:underline visited:text-orange-400"
                >
                  Adobe firefly
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignCredits;
