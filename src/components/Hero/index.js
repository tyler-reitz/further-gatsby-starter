import React, { Component } from "react";
import bkgHOA from "../../assets/images/bkg-HOA.jpg";
import bkgApartments from "../../assets/images/bkg-apartments.jpg";
import bkgOffice from "../../assets/images/bkg-office-buildings.jpg";
import bkgGarages from "../../assets/images/bkg-parking-garages.jpg";
import bkgRetail from "../../assets/images/bkg-retail.jpg";
import bkgDefault from "../../assets/images/hero-01.jpg"
import styles from './style.module.css';

const bkgImages = {
  'office-buildings': bkgOffice,
  'apartments': bkgApartments,
  'retail': bkgRetail,
  'parking-garages': bkgGarages,
  'hoa': bkgHOA,
}

class Hero extends Component {
  render () {
    const {
    	bgImg,
    	style,
    	children,
    	isSubMenu,
    	sectionHasBgImgs,
    } = this.props


    return (
      <div
        style={{ ...style, backgroundImage: isSubMenu && bgImg && sectionHasBgImgs ? `url(/images/bkg-${bgImg}.jpg)` : `url(${bkgDefault})` }}
        className={`flex flex-wrap mx-auto py-6 h-screen-w-1/4 bg-no-repeat bg-cover bg-center ${styles.backgroundImages}`}
      >
        {children && (
          <div className="max-w-3xl py-8 text-white">
            <div style={{ maxWidth: "75vw" }} className="bg-primary px-4 py-8">
              {children}
            </div>
          </div>
        )}
      </div>
    );
  }
}



export default Hero