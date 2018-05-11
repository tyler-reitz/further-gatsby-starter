import React from "react";
import PageContainer from "../components/PageContainer";
import Rule from "../components/Rule";
import { H1, H2, H3, H4, P1, P2, P3, Small } from "../components/Typography"

import bkgMap from "../assets/images/bkg-map.jpg";

export default () => (
  <PageContainer>
    <H1>Service Areas</H1>
    <Rule />
    <P2>Make Trifecta your Los Angeles Painting Company. Contact us for inquiries outside our listed service area.</P2>
    <Rule />
    <H3>RESIDENTIAL</H3>
        <table className="w-full mb-8">
      {[
        [
          "Mixed-use",
          "Urban apartments built on top of street-level shops and stores"
        ],
        ["Walk-up", "Typically 4 to 6 stories tall, without an elevator"],
        [
          "Garden-style",
          "1 to 3 stories tall, these complexes tend to emphasize greenery, gardens, walkways, and courtyards"
        ],
      ].map((row, idx) => (
        <tr className={`text-lg font-light leading-normal my-4 ${idx % 2 ? '' : 'bg-grey-light' }`}>
          <td className="font-semibold p-4">{row[0]}</td>
          <td className="p-4">{row[1]}</td>
        </tr>
      ))}
    </table>
    <Rule />
    <H3>COMMERCIAL</H3>
    <img src={bkgMap} alt="map" />
    <div className="flex justify-between">
      <Small>Santa Clarita south to Long Beach</Small>
      <Small>Oxnard east to Pasadena</Small>
    </div>
    <Rule />
  </PageContainer>
)