import styles from './style.module.css'
import React from "react";

import Button from "../Button";
import { H1, H2, H3, H4, P1, P2, P3 } from "../../components/Typography";

import bkgDefault from "../../assets/images/01.jpg"
import bkgOffice from "../../assets/images/bkg-office-buildings.jpg"
import bkgApartments from "../../assets/images/bkg-apartments.jpg"
import bkgHighendEstates from "../../assets/images/bkg-highend-estates.jpg"
import bkgRetail from "../../assets/images/bkg-retail.jpg"
import bkgGarages from "../../assets/images/bkg-parking-garages.jpg"
import bkgHOA from "../../assets/images/bkg-HOA.jpg"

const bkgImages = {
  'office-buildings': bkgOffice,
  'apartments': bkgApartments,
  'retail': bkgRetail,
  'parking-garages': bkgGarages,
  'hoa': bkgHOA,
}

export default ({ bgImg, children, ...props }) => {
  return (
    <div
      style={{ backgroundImage: `url(/images/bkg-${bgImg}.jpg)` }}
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
