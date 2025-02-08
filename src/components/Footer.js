import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Footer() {
  return (
    <footer className="footer-bg-img bg-black backdrop-blur-lg text-slate-300 py-8 min-h-64">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Left Section: Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/imprint" className="hover:underline hover:text-cyan-300">
                Imprint
              </Link>
            </li>
            <li>
              <Link to="/privacypolicy" className="hover:underline hover:text-cyan-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/designcredits" className="hover:underline hover:text-cyan-300">
                Design Credits
              </Link>
            </li>
          </ul>
        </div>

        {/* Center Section: Logo */}
        <div className="flex justify-center items-center">
          <img
            src="/lablogowhite_full.svg"
            alt="Kocakavuk Lab"
            className="h-64 w-64 sm:h-48 sm:w-48 md:h-56 md:w-56"
          />
        </div>

        {/* Right Section: Contact Information */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p>West German Cancer Center</p>
          <p>University Hospital Essen (AöR)</p>
          <p>Hufelandstrasse 55</p>
          <p>D-45147 Essen</p>
          <p>
            Email:{" "}
            <a href="mailto:kocakavuklab@gmail.com" className="hover:underline hover:text-cyan-300">
              kocakavuklab@gmail.de
            </a>
          </p>
          <p>Phone: +49-(0)201-723-0</p>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Kocakavuk Lab Computational Oncology. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;