import Link from "gatsby-link";
import React, { Component } from "react";
import logo from "../../assets/images/logo.svg";
import Button from "../Button";
import MegaMenu from "../MegaMenu";
import "./style.css";
const debounce = require("lodash/debounce");



class Header extends Component {
  state = {
    windowWidth: "",
    isOpen: false
  };

  componentDidMount() {
    this.setState({ windowWidth: window.innerWidth });

    window.addEventListener(
      "resize",
      debounce(e => {
        const { innerWidth } = window;
        this.setState({ windowWidth: innerWidth });

        if (innerWidth >= 768) {
          this.setState({ windowWidth: innerWidth });

          const main = document.getElementById("main");
          const mobileMenu = document.getElementById("drawer");

          main.style.transform = "";

          if (innerWidth < 768) {
            setTimeout(() => (mobileMenu.style.display = "none"), 300);
          }
        }
      }),
      300
    );
  }

  handleClick = e => {
    e.preventDefault();

    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));

    const main = document.getElementById("main");
    const mobileMenu = document.getElementById("drawer");
    const body = document.querySelector("body")

    if (!main.style.transform) {
      main.style.transform = "translateX(-75vw)";
      mobileMenu.style.display = "block";
      body.style.overflowY = "hidden"
      return;
    }

    main.style.transform = "";
    body.style.overflowY = "";
    setTimeout(() => (mobileMenu.style.display = "none"), 300);
  };

  render() {
    const { isOpen } = this.state
    
    return (
      <header className="relative z-10 bg-gradient-grey-white">
        <div className="flex flex-wrap items-center justify-between max-w-3xl mx-auto p-4 md:p-6">
          {/* Paragraph */}
          <p className="hidden xl:block text-lg text-primary w-64 px-4">
            Serving the Greater Los&nbsp;Angeles area for all your painting
            needs.
          </p>

          {/* Logo */}
          <Link
            to="/"
            style={{ minWidth: 180 }}
            className="flex items-center sm:w-80"
          >
            <img className="w-full" src={logo} alt="company logo" />
          </Link>

          {/* Burger */}
          <button
            className="block lg:hidden self-stretch w-12 p-2 text-primary"
            onClick={this.handleClick}
            >
            <svg
              className="fill-current w-full h-full"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          {/* CTA */}
          <div className="hidden lg:flex flex-col text-center">
            <a
              className="font-gotham-bold no-underline text-primary font-semibold text-2xl mb-2"
              href="tel:+13239827609"
            >
              (888) 888-8888
            </a>
            <Button primary>set an appointment</Button>
          </div>
        </div>

        <div
          id="drawer"
          className={isOpen && 'overflow-y-scroll'}
        >
          <MegaMenu
            mode={
              this.state.windowWidth && this.state.windowWidth < 992
                ? "inline"
                : "horizontal"
            }
          />
        </div>
      </header>
    );
  }
}

export default Header;
