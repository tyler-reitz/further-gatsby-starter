import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import './style.css'
import React, { Component } from 'react'
import Slick from 'react-slick'

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export default (props) => (
  <Slick 
    settings={props.settings || defaultSettings}
  >
    <div>
      <div className="flex justify-center items-center bg-teal h-screen-1/2">
        <h3 className="text-5xl">Slide 1</h3>
      </div>
    </div>
    <div>
      <div className="flex justify-center items-center bg-teal h-screen-1/2">
        <h3 className="text-5xl">Slide 2</h3>
      </div>
    </div>
    <div>
      <div className="flex justify-center items-center bg-teal h-screen-1/2">
        <h3 className="text-5xl">Slide 3</h3>
      </div>
    </div>
    <div>
      <div className="flex justify-center items-center bg-teal h-screen-1/2">
        <h3 className="text-5xl">Slide 4</h3>
      </div>
    </div>
    <div>
      <div className="flex justify-center items-center bg-teal h-screen-1/2">
        <h3 className="text-5xl">Slide 5</h3>
      </div>
    </div>
    <div>
      <div className="flex justify-center items-center bg-teal h-screen-1/2">
        <h3 className="text-5xl">Slide 6 </h3>
      </div>
    </div>
  </Slick>
)