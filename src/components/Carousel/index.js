import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import './style.scss'
import React, { Component } from 'react'
import Slick from 'react-slick'

const defaultSettings = {
  adaptiveHeight: true,
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export default ({ settings, children, ...props }) => {

  const blendedSettings = {
    ...defaultSettings,
    ...settings
  }

  return (
    <Slick {...blendedSettings}>
      { children }
    </Slick>
  )
}