import "../assets/fonts/Gotham.css";
import "./index.css";
import "./style.scss";

import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import { withRouter } from "react-router-dom";
const path = require('path')

import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";



export default ({ children, location, ...props }) => {
  const [, root, pathname ] = location.pathname.split('/')

  return (
    <div
      id="main"
      className="relative flex flex-col nimbus-sans min-h-screen text-grey-darkest"
    >
      <Helmet />
      <Header />
      <main>
        {location.pathname !== "/" ? (
          <div>
            <Hero bgImg={pathname ? pathname : root} />
            <div className="flex sm:flex-row-reverse items-start max-w-3xl mx-auto p-4 md:p-8">
              {children()}
              <Sidebar />
            </div>
          </div>
        ) : (
          children()
        )}
      </main>
      <Footer />
    </div>
  );
};
