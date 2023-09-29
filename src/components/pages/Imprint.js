import React from "react";
import { Link } from "react-router-dom";
const Imprint = () => {
  return (
    <div className="flex flex-col items-center p-5 lg:p-20">
      <h1 className="monst-font lg:text-5xl text-3xl text-cyan-400 font-bold mb-4">
        Imprint
      </h1>
      <div className="w-full lg:w-2/3 lg:text-justify sm:text-left">
        <h2 className="monst-font text-lg lg:text-2xl font-semibold mt-4">
          Information pursuant to Sect. 5 German Telemedia Act (TMG)
        </h2>
        <p className="monst-font text-sm lg:text-base">
          Computational Oncology Lab / University Hospital Essen (AöR)
        </p>
        <p className="monst-font text-sm lg:text-base">
          Hufelandstraße 55, 45147 Essen
        </p>

        <h2 className="monst-font text-lg lg:text-2xl font-semibold mt-4">
          Represented by:
        </h2>
        <p className="monst-font text-sm lg:text-base">
          Dr. med. Dr. rer. nat. Emre Kocakavuk
        </p>

        <h2 className="monst-font text-lg lg:text-2xl font-semibold mt-4">
          Contact
        </h2>
        <p className="monst-font text-sm lg:text-base">
          Phone:{" "}
          <Link
            to="tel:+49-(0)201-723-0"
            className="hover:underline visited:text-orange-500"
          >
            +49-(0)201-723-0
          </Link>
        </p>
        <p className="monst-font text-sm lg:text-base">
          E-mail:{" "}
          <Link
            to="kocakavuklab@gmail.com"
            className="monst-font hover:underline hover:text-blue-500 visited:text-orange-400"
          >
            kocakavuklab@lab.de
          </Link>
        </p>
      </div>
      <div className="monst-font w-full lg:w-2/3 text-justify">
        <h2 className="monst-font text-lg lg:text-2xl font-semibold mt-4">
          Person responsible for editorial
        </h2>
        Dr. med. Dr. rer. nat. Emre Kocakavuk
      </div>
      <div className="w-full lg:w-2/3 text-justify">
        <h2 className="monst-font text-lg lg:text-2xl font-semibold mt-4">
          EU dispute resolution
        </h2>
        <p className="monst-font text-sm lg:text-base">
          The European Commission provides a platform for online dispute
          resolution (ODR):{" "}
          <Link
            to="https://ec.europa.eu/consumers/odr/"
            className="monst-font hover:underline hover:text-blue-500 visited:text-orange-400"
          >
            https://ec.europa.eu/consumers/odr/
          </Link>
          . Our e-mail address can be found above in the site notice.
        </p>
        <h2 className="monst-font text-lg lg:text-2xl font-semibold mt-4">
          Dispute resolution proceedings in front of a consumer arbitration
          board
        </h2>
        <p className="monst-font text-sm lg:text-base">
          We are not willing or obliged to participate in dispute resolution
          proceedings in front of a consumer arbitration board.
        </p>
      </div>
    </div>
  );
};

export default Imprint;
