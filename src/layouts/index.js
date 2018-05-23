import React from "react";
import Helmet from "react-helmet";
import "../assets/fonts/Gotham.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import "./index.css";
import "./style.scss";

const path = require('path')

export default ({ children, location, ...props }) => {
  const [, root, pathname ] = location.pathname.split('/')
  const isSubMenu = location.pathname.split('/').length > 2
  const sectionHasBgImgs = root === 'commercial-painting' || root === 'residential-painting'

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
            <Hero 
              bgImg={pathname}
              isSubMenu={isSubMenu}
              sectionHasBgImgs={sectionHasBgImgs}
            />
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
