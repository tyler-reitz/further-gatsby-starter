import React, { Component } from 'react'
import PageContainer from '../components/PageContainer'
import Hero from '../components/Hero'
import Button from '../components/Button'
import Rule from '../components/Rule'
import { H1, H2, H3, H4, P1, P2, P3 } from "../components/Typography"

import bkgImg from '../assets/images/01.jpg'

export default () => (
  <PageContainer>
    <Hero bgImg={bkgImg}>
      <H1>Big Header</H1>
      <H3>Smaller for the subtext</H3>
      <P2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat unde sint suscipit ab nisi expedita molestias omnis, sed ipsam a at deleniti, doloribus fugiat beatae inventore odio hic, dolorem vero.</P2>
      <Button className="mr-4 mb-4">Submit</Button>
    </Hero>
    
    <H1>Communication is our greatest strength. Talk to us.</H1>
    <H2>Our team is led by a of Los Angeles Painting</H2>

    <Rule />

    <H3>Commercial</H3>
    <H4>Contact us today to discuss your project and how we can help:</H4>

    <span className="block w-full font-medium">NF | Los Angeles</span>

    <Rule />
    <P1>We pride ourselves on our relationships with our clients, our crews, and our suppliers. Its all part </P1>
    <P2>My company is a property management company and has been working with Ean for the past 2 years or so now.</P2>
    {/* <P3>We ve painted hotels and apartments, office buildings and hospitals, shopping centers and parking garages.</P3> */}
  </PageContainer>
)

