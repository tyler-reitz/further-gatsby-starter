import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import './style.scss'
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
  <Slick {...(props.settings || defaultSettings)}>
    <div>
      <div className="block text-center mx-auto sm:flex sm:flex-wrap content-center justify-center h-screen-w-1/2 p-4">
        <h3 className="text-5xl leading-none my-4 text-primary">Trifecta Rave Reviews</h3>
        <p className="my-4 font-light text-lg lg:w-4/5">“My company is a property management company and has been working with Ean for the past 2 years or so now. He has professionally handled painting and some maintenance issues for several of our properties over the past two years. It’s always extremely easy to get a hold of Ean, and he responds and provides what we need by the deadline of when we ask him for the information. Our clients also have shared nothing but the most amazing feedback both on the quality of service, his fairness, great pricing, and overall integrity.”</p>
      </div>
    </div>
    <div>
      <div className="block text-center mx-auto sm:flex sm:flex-wrap content-center justify-center h-screen-w-1/2 p-4">
        <h3 className="text-5xl leading-none my-4 text-primary">Trifecta Rave Reviews</h3>
        <p className="my-4 font-light text-lg lg:w-4/5">“My company is a property management company and has been working with Ean for the past 2 years or so now. He has professionally handled painting and some maintenance issues for several of our properties over the past two years. It’s always extremely easy to get a hold of Ean, and he responds and provides what we need by the deadline of when we ask him for the information. Our clients also have shared nothing but the most amazing feedback both on the quality of service, his fairness, great pricing, and overall integrity.”</p>
      </div>
    </div>
    <div>
      <div className="block text-center mx-auto sm:flex sm:flex-wrap content-center justify-center h-screen-w-1/2 p-4">
        <h3 className="text-5xl leading-none my-4 text-primary">Trifecta Rave Reviews</h3>
        <p className="my-4 font-light text-lg lg:w-4/5">“My company is a property management company and has been working with Ean for the past 2 years or so now. He has professionally handled painting and some maintenance issues for several of our properties over the past two years. It’s always extremely easy to get a hold of Ean, and he responds and provides what we need by the deadline of when we ask him for the information. Our clients also have shared nothing but the most amazing feedback both on the quality of service, his fairness, great pricing, and overall integrity.”</p>
      </div>
    </div>
  </Slick>
)