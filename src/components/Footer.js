import React from "react";
import { Link } from "react-router-dom";
import HomeLogo from "../assets/logos/Logo_Kocakavuklab_Redesign.svg";
import { TwitterTweetEmbed } from "react-twitter-embed";
const Footer = () => {
  return (
    // Main Div
    <div className="relative grid sm:grid-cols-1 lg:grid-cols-3 justify-between lg:gap-4 md:gap-0 footer-bg-img bg-[#000000] backdrop-blur-[20px] text-slate-300 lg:p-4 sm:p-1">
      
      {/* First Column - Left */}
      <div className="lg:text-left md:text-center sm:text-left m-2">
        <h2 className="monst-font font-bold lg:uppercase text-xl">Contact </h2>
        <h3 className="monst-font font-semibold text-lg">
          West German Cancer Center
        </h3>
        <p className="monst-font font-light py-2">
          <span className="monst-font text-md text-slate-300">Address:</span>{" "}
          <br />
          University Hospital Essen (AöR)
          <br />
          Hufelandstraße 55
          <br />
          D-45147 Essen{" "}
        </p>
        <p className="monst-font">Email:</p>
        <Link
          to="mailto:kocakavuklab@gmail.com"
          className="monst-font font-light hover:text-cyan-400 hover:underline"
        >
          {" "}
          kocakavuklab@gmail.com
        </Link>
        <br />
        <p className="monst-font">Phone:</p>{" "}
        <Link
          to="tel:+49-(0)201-723-0"
          className="monst-font inline font-light hover:text-cyan-400 hover:underline slashed-zero"
        >
          +49-(0)201-723-0
        </Link>
      </div>
      {/* Left Column */}

      <div className="text-center justify-center">
        <img
          src={HomeLogo}
          alt="Logo"
          className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] mx-auto sm:mx-center lg:mx-auto"
        />
        <h3 className="monst-font font-bold text-lg sm:text-center">
          Quick Links
        </h3>
        <div className="space-x-4 m-2 flex sm:flex-col items-center justify-center">
          <Link
            to="/imprint"
            target="_top"
            className="monst-font block hover:text-cyan-400 hover:underline"
          >
            Imprint
          </Link>
          <Link
            to="/privacypolicy"
            target="_top"
            className="monst-font block hover:text-cyan-400 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            to="/designcredits"
            target="_top"
            className="monst-font hover:underline hover:text-cyan-400"
          >
            Design Credits
          </Link>
        </div>
        <div className="text-center justify-center items-center">
          <p className="text-md text-center">
            <span className="monst-font tracking-wider">
              &copy; 2023 KOCAKAVUK COMPUTATIONAL ONCOLOGY LAB
            </span>
            <br />{" "}
          </p>
          <p className="tracking-wider monst-font">ALL RIGHTS RESERVED</p>
        </div>
      </div>
      {/* Center column */}
      <div className="hidden sm:block text-center items-center">
        <h1 className="monst-font lg:uppercase text-slate-300 text-xl font-bold uppercase">
          Latest tweet
        </h1>
        <TwitterTweetEmbed
          onLoad={function noRefCheck() {}}
          tweetId="1670389001599983617"
          options={{
            align: "center",
            cards: "hidden",
            maxWidth: 600,
            width: 400,
          }}
        />
      </div>
      {/* Right column */}
    </div>
    // Main div
  );
};

      export default Footer;
