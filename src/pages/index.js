import React from "react";

import Hero from '../components/Hero'
import Card from '../components/Card'

const IndexPage = () => (
  <div>
    <Hero />
    <div className="flex flex-wrap justify-center max-w-2xl mx-auto py-8  md:my-8">
      { [1,2,3].map((_, idx) => <Card key={idx} />) }
    </div>
  </div>
);

export default IndexPage;