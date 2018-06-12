import React from "react";
import bkgMap from "../../assets/images/bkg-map.jpg";
import PageContainer from "../../components/PageContainer";
import Rule from "../../components/Rule";
import { H1, H3, P1, Small } from "../../components/Typography";
import Helmet from "react-helmet"


export default () => (
  <PageContainer>
    <H1>Service Areas</H1>
    <Rule />
    <P1>Make Trifecta your Los Angeles Painting Company. Contact us for inquiries outside our listed service area.</P1>
    <Rule />
    <H3>RESIDENTIAL</H3>
        <table className="w-full mb-8">
      {[
        [
          "San Fernando Valley",
          "Calabasas, West Hills, Woodland Hills, Tarzana, Encino, Sherman Oaks, Studio City, Toluca Lake"
        ],
        ["Los Angeles", "Santa Monica, Brentwood, Bel Air, Beverly Hills, Hollywood, West Hollywood"]
      ].map((row, idx) => (
        <tr className={`text-base font-light leading-normal my-4 ${idx % 2 ? '' : 'bg-grey-light' }`}>
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