import React from "react";

import Button from '../Button'

export default ({ bgImg, ...props }) => (
  <div 
    style={{ backgroundImage: `url(${bgImg})`}} 
    className="flex flex-wrap justify-center items-center max-w-3xl mx-auto py-6 md:my-6 mb-4 lg:h-screen-2/5 bg-no-repeat bg-cover"
  >
    <div className="py-8 text-white">
      <div style={{ maxWidth: "75vw" }} className="bg-primary px-4 py-8">
        <h1 className="gotham-bold mb-1 text-5xl leading-none">Los Angeles building partners</h1>
        <small className="text-2xl mb-4">Expert Los Angeles commercial painter</small>
        <p className="text-xl font-light leading-normal my-8">We&apos;ve painted hotels and apartments, office buildings and hospitals, shopping centers and parking garages. We&apos;ve worked with HOAs and property management companies. Let Trifecta work for you.</p>
        <Button className="mr-4 mb-4">Find out more</Button>
        <Button className="mr-4 mb-4">Set an appointment</Button>
      </div>
    </div>
    
  </div>
);
