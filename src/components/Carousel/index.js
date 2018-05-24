import React, { Component } from 'react';
import Slick from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../../node_modules/slick-carousel/slick/slick.css';
import './style.scss';

const defaultSettings = {
  adaptiveHeight: true,
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true
}

class Carousel extends Component {
  render() {
    const { settings, children, getRef = () => ({}), ...props } = this.props

    const blendedSettings = {
      ...defaultSettings,
      ...settings
    }

    return (
      <Slick
        {...blendedSettings}
        ref={slider => getRef(slider)}
      >
        { children }
      </Slick>
    )
  }
}

export default Carousel