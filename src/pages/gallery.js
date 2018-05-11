import React from "react";
import PageContainer from "../components/PageContainer";
import Rule from "../components/Rule";
import { H1, H3, P2 } from "../components/Typography";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: 'http://placehold.it/877x375',
    thumbnail: 'http://placehold.it/92x92',
  },
  {
    original: 'http://placehold.it/877x375',
    thumbnail: 'http://placehold.it/92x92',
  },
  {
    original: 'http://placehold.it/877x375',
    thumbnail: 'http://placehold.it/92x92',
  },
  {
    original: 'http://placehold.it/877x375',
    thumbnail: 'http://placehold.it/92x92',
  },
  {
    original: 'http://placehold.it/877x375',
    thumbnail: 'http://placehold.it/92x92',
  },
  {
    original: 'http://placehold.it/877x375',
    thumbnail: 'http://placehold.it/92x92',
  },
  {
    original: 'http://placehold.it/877x375',
    thumbnail: 'http://placehold.it/92x92',
  },
  {
    original: 'http://placehold.it/877x375',
    thumbnail: 'http://placehold.it/92x92',
  },
  {
    original: 'http://placehold.it/877x375',
    thumbnail: 'http://placehold.it/92x92',
  },
  {
    original: 'http://placehold.it/877x375',
    thumbnail: 'http://placehold.it/92x92',
  },
  {
    original: 'http://placehold.it/877x375',
    thumbnail: 'http://placehold.it/92x92',
  },
  {
    original: 'http://placehold.it/877x375',
    thumbnail: 'http://placehold.it/92x92',
  },
]

export default () => (
  <PageContainer>
    <H1>See Our Work</H1>
    <P2>Los Angeles Commercial Painting Contractors</P2>
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
    <H3>Estates</H3>
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