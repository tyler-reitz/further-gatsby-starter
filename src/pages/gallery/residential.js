import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import PageContainer from "../../components/PageContainer";
import Rule from "../../components/Rule";
import { H1, H3, P1, P2 } from "../../components/Typography";

import img1 from "../../assets/images/Trifecta\ Selects/Residential/Ext0.jpg"
import img2 from "../../assets/images/Trifecta\ Selects/Residential/Ext1.jpg"
import img3 from "../../assets/images/Trifecta\ Selects/Residential/Ext2.jpg"
import img4 from "../../assets/images/Trifecta\ Selects/Residential/Ext3.jpg"
import img5 from "../../assets/images/Trifecta\ Selects/Residential/Ext4.jpg"
import img6 from "../../assets/images/Trifecta\ Selects/Residential/Ext5.jpg"
import img7 from "../../assets/images/Trifecta\ Selects/Residential/Ext6.jpg"
import img8 from "../../assets/images/Trifecta\ Selects/Residential/Ext7.jpg"
import img9 from "../../assets/images/Trifecta\ Selects/Residential/Int0.jpg"
import img10 from "../../assets/images/Trifecta\ Selects/Residential/Int1.jpg"
import img11 from "../../assets/images/Trifecta\ Selects/Residential/Int2.jpg"
import img12 from "../../assets/images/Trifecta\ Selects/Residential/Int3.jpg"
import img13 from "../../assets/images/Trifecta\ Selects/Residential/Int4.jpg"
import img14 from "../../assets/images/Trifecta\ Selects/Residential/Work0.jpg"
import img15 from "../../assets/images/Trifecta\ Selects/Residential/Work1.jpg"
import img16 from "../../assets/images/Trifecta\ Selects/Residential/Work2.jpg"

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
    original: img4,
    thumbnail: img4,
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
  },
  {
    original: img11,
    thumbnail: img11,
  },
  {
    original: img12,
    thumbnail: img12,
  },
  {
    original: img13,
    thumbnail: img13,
  },
  {
    original: img14,
    thumbnail: img14,
  },
  {
    original: img15,
    thumbnail: img15,
  },
  {
    original: img16,
    thumbnail: img16,
  },
]

export default () => (
  <PageContainer style={{ width: '72%' }}>
    <H1>See Our Work</H1>
    <P1>Los Angeles Commercial Painting Contractors</P1>
    <Rule />
    <P2>We want our work to speak for itself. Take a look at our recently completed projects and find out how we can work for you.</P2>
    <Rule />
    <H3>Residential</H3>
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