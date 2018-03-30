import React from "react";

import Hero from '../components/Hero'
import Card from '../components/Card'

import badge from '../images/badge.svg'
import Button from '../components/Button'

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
    <div className="flex flex-wrap justify-center max-w-2xl mx-auto py-6  md:my-6">
      { [1,2,3,4,5,6,7,8].map((_, idx) => <Card key={idx} />) }
    </div>
    <div className="pt-4 pb-8 text-center">
      <h2 className="leading-loose text-3xl mb-2">Call To Action</h2>
      <button className="bg-grey hover:bg-grey-darker w-5/6 sm:w-2/5 px-8 py-4 rounded font-bold text-white">Submit</button>
    </div>
    <div className="flex flex-wrap justify-center max-w-2xl mx-auto py-6 md:my-6">
      <h2 className="leading-tight w-5/6 text-3xl mb-2">A Little About Our Services</h2>
      <p className="max-w-xl w-5/6 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias perferendis mollitia et magnam velit cumque rerum libero molestias ratione reiciendis laboriosam, iusto, placeat odit pariatur? Aperiam vel totam nemo provident. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias perferendis mollitia et magnam velit cumque rerum libero molestias ratione reiciendis laboriosam, iusto, placeat odit pariatur? Aperiam vel totam nemo provident.</p>
    </div>
    <div>
      <ul className="list-reset list-reset text-center leading-loose text-xl font-medium text-grey-darker">
        <li>Service Type #1</li>
        <li>Service Type #2</li>
        <li>Service Type #3</li>
        <li>Service Type #4</li>
        <li>Service Type #5</li>
        <li>Service Type #6</li>
        <li>Service Type #7</li>
        <li>Service Type #8</li>
        <li>Service Type #9</li>
      </ul>
      <div>
        map
      </div>
      <ul className="list-reset list-reset text-center leading-loose text-xl font-medium text-grey-darker">
        <li>Service Type #1</li>
        <li>Service Type #2</li>
        <li>Service Type #3</li>
        <li>Service Type #4</li>
        <li>Service Type #5</li>
        <li>Service Type #6</li>
        <li>Service Type #7</li>
        <li>Service Type #8</li>
        <li>Service Type #9</li>
      </ul>
    </div>
  </div>
);

export default IndexPage;