import React from "react";
import { Link } from "react-router-dom";
import HomeLogo from "../assets/logos/Logo_Kocakavuklab_Redesign.svg";
import { TwitterTweetEmbed } from "react-twitter-embed";
const Footer = () => {
  return (
    <section className="relative footer-bg-img backdrop-blur-md text-justify text-slate-300">
      <div className="lg:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 sm:px-0 relative z-10">
        {/* First Column: Contact Information */}
        <div className="mt-4 px-1 text-justify lg:text-left sm:mt-1 lg:mt-8 lg:py-4">
          <h2 className="monst-font font-bold lg:uppercase text-xl">
            Contact{" "}
          </h2>
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
        {/* Second Column: Logo */}
        <div className="md:order-3 lg:order-2 lg:col-span-1 lg:bg-none md:bg-black md:col-span-2 text-center sm:text-left lg:text-center lg:py-4 md:py-0">
          <img
            src={HomeLogo}
            alt="Logo"
            className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] mx-auto sm:mx-center lg:mx-auto"
          />
          <h3 className="monst-font font-bold text-lg sm:text-center">
            Quick Links
          </h3>
          <div className="flex md:flex-row sm:flex-col space-x-4 mt-2 items-center justify-center">
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
        </div>
        {/* Third Column: Latest Tweet */}

        <div className="hidden md:block md:order-2 lg:order-last justify-center">
          <h3 className="monst-font font-bold text-lg text-left uppercase">
            Latest Tweet
          </h3>
          {/* Replace this with the actual latest tweet using Twitter API */}
          <div className="selfCenter spaceBetween">
            <TwitterTweetEmbed
              onLoad={function noRefCheck() {}}
              tweetId="1670389001599983617"
              options={{
                cards: "hidden",
                maxWidth: 500,
                width: 200,
              }}
            />
          </div>
        </div>
        {/* Footer Bottom: Copyright and Design Credits */}
      </div>
      <div className="border-t pt-4 relative z-10 text-center bg-black">
        <p className="text-md">
          <span className="monst-font tracking-wider">
            &copy; 2023 KOCAKAVUK COMPUTATIONAL ONCOLOGY LAB
          </span>
          <br />{" "}
        </p>
        <p className="tracking-wider monst-font">ALL RIGHTS RESERVED</p>
      </div>
    </section>
  );
};

export default Footer;
