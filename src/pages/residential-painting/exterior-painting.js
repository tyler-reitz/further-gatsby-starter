import React from "react";
import bgImg from '../../assets/images/feat-exterior.jpg';
import { FullWidth, TwoUp } from "../../components/ImagesContainers";
import PageContainer from "../../components/PageContainer";
import Rule from "../../components/Rule";
import { H1, H3, P3 } from "../../components/Typography";
import Helmet from "react-helmet"

import img1 from "../../assets/images/Trifecta Selects/Residential/Ext4.jpg"
import img2 from "../../assets/images/Trifecta Selects/Residential/Ext5.jpg"
import img3 from "../../assets/images/Trifecta Selects/Residential/Ext6.jpg"
import img4 from "../../assets/images/Trifecta Selects/Residential/Ext7.jpg"
import img5 from "../../assets/images/Trifecta Selects/Residential/Int0.jpg"
import img6 from "../../assets/images/Trifecta Selects/Residential/Int1.jpg"

export default () => (
  <PageContainer bgImg={bgImg}>
    <Helmet>
      <title>Trifecta | Residential Painting | Exterior Painting</title>
    </Helmet>
  
    <H1>Exterior Painting</H1>
    <Rule />
    <H3>Protect your house for years to come.</H3>
    <P3>
      You’ll see the Trifecta difference from the moment we arrive to paint the
      exterior of your house: our clean and professional crews are efficient and
      effective at getting the job done to the highest standards, because we’re
      dedicated to doing quality work. Let us give your house a paint job that
      will stand up to the LA sun for years to come.
    </P3>
    <FullWidth img={img1} />
    <Rule />
    <H3>We want to know what you like.</H3>
    <P3>
      Communication is our hallmark. Because we care about making sure your home
      looks the way you want it to look, we’ll ask you questions to determine
      what kind of look you are going for, what colors you prefer, and what
      options you are willing to explore. We’ll discuss strategies for painting
      your home in the most efficient way possible, on a schedule that works
      best for you.
    </P3>
    <FullWidth img={img2} />
    <Rule />
    <H3>Every type of home.</H3>
    <P3>
      We’ve probably painted every type of home you can find in Los Angeles,
      including colonials, bungalows, craftsmans, and ranch homes. Whether you
      have an adobe, an italianate, a queen anne, or a mission revival, we’ve
      got you covered.
    </P3>
    <FullWidth img={img3} />
    <Rule />
    <H3>Add value to your home.</H3>
    <P3>
      A new exterior paint job is one of the best ways to immediately increase
      the value of your house. Whether you’re looking to sell, or making an
      investment in the future of your home, Trifecta is here for you. The cost
      to paint the exterior of a house in LA is nothing compared to the
      satisfaction you’ll get when you see just how good it looks, and we work
      hard to keep our rates competitive and affordable.
    </P3>
    <FullWidth img={img4} />
    <Rule />
    <H3>Add value to your home.</H3>
    <P3>
      A new exterior paint job is one of the best ways to immediately increase
      the value of your house. Whether you’re looking to sell, or making an
      investment in the future of your home, Trifecta is here for you. The cost
      to paint the exterior of a house in LA is nothing compared to the
      satisfaction you’ll get when you see just how good it looks, and we work
      hard to keep our rates competitive and affordable.
    </P3>
    <FullWidth img={img5} />
    <Rule />
    <H3>Our process is standard and thorough.</H3>
    <P3>
      There’s nothing magical about doing a good job of painting a house.
      There’s a right way and a wrong way to do the work, and here at Trifecta,
      we insist on doing it right. We don’t take shortcuts with our process, or
      the quality of our products. We take care with the details, and that means
      doing a thorough job of sanding and prepping, and removing dirt and debris
      before we even begin to paint. We mask, cover, tape, and protect your roof
      and any other surfaces that aren’t being painted, and we use drop cloths
      for lawns and driveways. We work around trees, bushes, gardens, and
      planter beds to ensure that the paint only goes where it’s supposed to,
      nowhere else.
    </P3>
    <FullWidth img={img6} />
  </PageContainer>
);
