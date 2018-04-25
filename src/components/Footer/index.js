import React from "react";
import Link from "gatsby-link";

import Button from "../Button";
import logo from "../../assets/images/logo-reversed.svg";

const Footer = () => (
  <footer className="bg-black">
    <div className="flex flex-wrap items-stretch justify-between max-w-4xl mx-auto p-4 md:p-8">
      <div className="flex flex-wrap items-center w-1/3">
        <Link to="/">
          <img className="w-full mb-8" src={logo} alt="company logo" />
        </Link>

        <div>
          <p className="text-grey font-light text-xs leading-loose">
            © 2018 Trifecta Painting. All Rights Reserved.
          </p>
          <p className="text-grey font-light text-xs leading-loose">
            License Info: XXXXXX; LEAD Certification # NAT-XXXXX-1
          </p>
        </div>
      </div>

      <button className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white">
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      <div className="hidden w-1/5 md:flex flex-col space-between text-center">
        <div>
          <a
            className="block font-gotham-bold no-underline text-white font-semibold text-2xl mb-2"
            href="tel:+13239827609"
          >
            (888) 888-8888
          </a>
          <Button primary>set an appointment</Button>
        </div>

        <p className="text-grey font-light text-xs leading-loose">
          Los Angeles Paint Company Marketing by INFLUX
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
