import React from "react";

import Hero from '../components/Hero'
import Card from '../components/Card'

import badge from '../images/badge.svg'
console.log(badge)

const IndexPage = () => (
  <div>
    <Hero />
    <div className="bg-grey">
      <div className="max-w-2xl mx-auto p-4 px-8 flex justify-around md:px-8">
        <img src={badge} alt="badge" className="h-16 sm:h-24"/>
        <img src={badge} alt="badge" className="h-16 sm:h-24"/>
        <img src={badge} alt="badge" className="h-16 sm:h-24"/>
        <img src={badge} alt="badge" className="h-16 sm:h-24"/>
        <img src={badge} alt="badge" className="h-16 sm:h-24"/>
        <img src={badge} alt="badge" className="h-16 sm:h-24"/>
        <img src={badge} alt="badge" className="h-16 sm:h-24"/>
      </div>
    </div>
    <div className="flex flex-wrap justify-center max-w-2xl mx-auto py-8  md:my-8">
      { [1,2,3].map((_, idx) => <Card key={idx} />) }
    </div>
  </div>
);

export default IndexPage;