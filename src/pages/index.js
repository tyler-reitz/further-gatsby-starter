import React from "react";

import Hero from '../components/Hero'
import Card from '../components/Card'

import badge from '../images/badge.svg'
import Button from '../components/Button'

const IndexPage = () => (
  <div>
    <Hero />
    <div className="flex flex-wrap justify-center max-w-2xl mx-auto py-6 md:my-6">
      { [1,2,3,4,5,6,7,8].map((_, idx) => <Card key={idx} />) }
    </div>
    <div className="pt-4 pb-8 text-center">
      <h2 className="leading-loose text-3xl mb-2">Call To Action</h2>
      <button className="bg-grey hover:bg-grey-darker w-5/6 sm:w-2/5 px-8 py-4 rounded font-bold text-white">Submit</button>
    </div>
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
    <div className="flex flex-wrap justify-center max-w-2xl mx-auto py-6 md:my-6 mb-4">
      <h2 className="leading-tight w-5/6 text-2xl mb-2 text-center">A Little About Our Services</h2>
      <p className="max-w-xl w-5/6 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias perferendis mollitia et magnam velit cumque rerum libero molestias ratione reiciendis laboriosam, iusto, placeat odit pariatur? Aperiam vel totam nemo provident. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias perferendis mollitia et magnam velit cumque rerum libero molestias ratione reiciendis laboriosam, iusto, placeat odit pariatur? Aperiam vel totam nemo provident.</p>
    </div>
    <div className="max-w-2xl mx-auto mb-8">
      <ul className="flex flex-wrap justify-center list-reset list-reset text-center leading-loose text-lg text-grey-darker md:my-8">
        <li className="w-1/2 mb-1 md:w-1/3">Service Type #1</li>
        <li className="w-1/2 mb-1 md:w-1/3">Service Type #2</li>
        <li className="w-1/2 mb-1 md:w-1/3">Service Type #3</li>
        <li className="w-1/2 mb-1 md:w-1/3">Service Type #4</li>
        <li className="w-1/2 mb-1 md:w-1/3">Service Type #5</li>
        <li className="w-1/2 mb-1 md:w-1/3">Service Type #6</li>
        <li className="w-1/2 mb-1 md:w-1/3">Service Type #7</li>
        <li className="w-1/2 mb-1 md:w-1/3">Service Type #8</li>
        <li className="w-1/2 mb-1 md:w-1/3">Service Type #9</li>
      </ul>
      <div className="flex justify-center items-center max-w-xl w-5/6 mx-auto md:h-screen-1/3 m-4 bg-grey h-screen-1/2 md:h-screen- text-grey-lighter text-3xl lg:my-8">
        map
      </div>
      <ul className="flex flex-wrap justify-center list-reset list-reset text-center leading-loose text-lg text-grey-darker md:my-8">
        <li className="w-1/2 mb-1 md:w-1/3">Service Type #11</li>
        <li className="w-1/2 mb-1 md:w-1/3">Service Type #12</li>
        <li className="w-1/2 mb-1 md:w-1/3">Service Type #13</li>
        <li className="w-1/2 mb-1 md:w-1/3">Service Type #14</li>
        <li className="w-1/2 mb-1 md:w-1/3">Service Type #15</li>
        <li className="w-1/2 mb-1 md:w-1/3">Service Type #16</li>
        <li className="w-1/2 mb-1 md:w-1/3">Service Type #17</li>
        <li className="w-1/2 mb-1 md:w-1/3">Service Type #18</li>
        <li className="w-1/2 mb-1 md:w-1/3">Service Type #19</li>
      </ul>
    </div>
    <div className="max-w-2xl mx-4 mb-8 md:mx-auto">
      <h2 className="text-center text-3xl my-2 sm:my-4">Detailed Explanation</h2>
      <div className="flex flex-wrap lg:px-8 md:mx-8">
        {[0,1,2,3].map(_ => (
          <div className="py-4 sm:px-4 sm:w-1/2">
            <h3 className="text-xl mb-2">Further Details</h3>
            <p className="leading-normal mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolore repudiandae voluptatibus assumenda. Quos totam sed ad animi optio soluta doloremque incidunt eius temporibus consectetur quidem, dolor, at veniam numquam.</p>
            <img className="w-full" src="http://via.placeholder.com/320x195" alt="placholder" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default IndexPage;