import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import PageContainer from "../../components/PageContainer";
import Rule from "../../components/Rule";
import { H1, H3, P1, P2 } from "../../components/Typography";

import img1 from "../../assets/images/Trifecta\ Selects/Commercial/DSCN2234.jpg"
import img2 from "../../assets/images/Trifecta\ Selects/Commercial/DSCN3124.jpg"
import img3 from "../../assets/images/Trifecta\ Selects/Commercial/DSCN3180.jpg"
import img4 from "../../assets/images/Trifecta\ Selects/Commercial/DSCN3124.jpg"
import img5 from "../../assets/images/Trifecta\ Selects/Commercial/DSCN3209.jpg"
import img6 from "../../assets/images/Trifecta\ Selects/Commercial/IMG_3233.jpg"
import img7 from "../../assets/images/Trifecta\ Selects/Commercial/IMG_3248.jpg"
import img8 from "../../assets/images/Trifecta\ Selects/Commercial/IMG_3253.jpg"
import img9 from "../../assets/images/Trifecta\ Selects/Commercial/IMG_3261.jpg"
import img10 from "../../assets/images/Trifecta\ Selects/Commercial/IMG_3282.jpg"

const images = [
  {
    original: img1,
    thumbnail: img1,
  },
  {
    original: img2,
    thumbnail: img2,
  },
  {
    original: img3,
    thumbnail: img3,
  },
  {
    original: img5,
    thumbnail: img5,
  },
  {
    original: img6,
    thumbnail: img6,
  },
  {
    original: img7,
    thumbnail: img7,
  },
  {
    original: img8,
    thumbnail: img8,
  },
  {
    original: img9,
    thumbnail: img9,
  },
  {
    original: img10,
    thumbnail: img10,
  }
]

export default () => (
  <PageContainer style={{ width: '72%' }}>
    <H1>See Our Work</H1>
    <P1>Los Angeles Commercial Painting Contractors</P1>
    <Rule />
    <P2>We want our work to speak for itself. Take a look at our recently completed projects and find out how we can work for you.</P2>
    <Rule />
    <H3>Commercial</H3>
    <ImageGallery 
      items={images}
      infinite={true}
      showNav={true}
      showFullscreenButton={false}
      showPlayButton={false}
      slideDuration={400}
      swipingTransitionDuration={400}
    />
  </PageContainer>
)