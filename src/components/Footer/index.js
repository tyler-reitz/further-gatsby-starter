import React from "react";
import Link from "gatsby-link";

import Button from "../Button";
import logo from "../../assets/images/logo-reversed.svg";

const Footer = () => (
  <footer className="bg-black">
    <div className="flex flex-wrap items-stretch justify-center md:justify-between max-w-3xl mx-auto p-4 md:p-8">
      <div className="flex flex-wrap items-center w-1/2 md:w-1/3 text-center md:text-left">
        <Link to="/">
          <img className="w-full mb-8 h-16" src={logo} alt="company logo" />
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

      <div className="hidden md:flex flex-wrap justify-end w-1/3 text-right">
        <div>
          <a
            className="block font-gotham-bold no-underline text-white font-semibold text-2xl mb-2"
            href="tel:+13239827609"
          >
            (888) 888-8888
          </a>
          <Button primary>set an appointment</Button>
        </div>

        <p className="text-grey font-light text-xs leading-loose mt-auto">
          Los Angeles Paint Company Marketing by INFLUX
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
