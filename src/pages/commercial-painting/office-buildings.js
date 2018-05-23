import React from "react";
import bgImg from '../../assets/images/feat-office.jpg';
import { TwoUp } from "../../components/ImagesContainers";
import PageContainer from "../../components/PageContainer";
import Rule from "../../components/Rule";
import { H1, H3, P3 } from "../../components/Typography";


export default () => (
  <PageContainer bgImg={bgImg}>
    <H1>Office Buildings</H1>
    <Rule />
    <H3 className="mb-2">We paint new structures.</H3>
    <P3>
      Painting new office buildings in Los Angeles is what we do best. Trifecta
      uses our experience on hundreds of job sites to execute plans and
      specifications accurately and rapidly. We specialize in painting Class A
      high-rises and Class B mid-size office buildings, and we will also take on
      Class C commercial office spaces when they are in good repair.
    </P3>
    <TwoUp />
    <Rule />
    <H3 className="mb-2">We upgrade existing office buildings.</H3>
    <P3>
      Like it or not, you’re judged based on your appearance, and the same holds
      for office buildings. It’s amazing what a new coat of paint can do for
      things like property value, ease of maintenance, and even employee morale.
      Trifecta Painting knows how to properly prep and paint LA office buildings
      for lasting results.
    </P3>
    <TwoUp />
    <Rule />
    <H3 className="mb-2">Inside and outside, we have it covered.</H3>
    <P3>
      Whether it’s a case of a peeling exterior paint job, or beat-up interior
      office walls, we can help. We have the equipment to paint high-rise office
      building exterior walls, and we can work with your Human Resources
      department to determine the best schedule for painting interiors with
      minimal interruption of your business.
    </P3>
    <Rule />
    <TwoUp />
    <H3 className="mb-2">Industrial grade coatings.</H3>
    <P3>
      Scorching LA summers are hell on exterior paint jobs. But certain colors
      are less likely to fade than others, and Trifecta combines that
      understanding with knowledge of what brands of paint stand up best to
      direct sunlight. Because we want your job to last, we’ll recommend a
      product that can survive the glare of LA’s year-round summer sunshine. And
      on the inside, we have the perfect products for easy maintenance in
      high-traffic areas like hallways, mail rooms, and dining areas.
    </P3>
    <TwoUp />
    <Rule />
    <H3 className="mb-2">We keep it clean.</H3>
    <P3>
      From the moment we arrive, all the way through to the final coat, we
      maintain a clean, zero-debris work site every step of the way. And for
      repainting jobs in completed spaces, Trifecta’s teams are experts at
      protection, preparation and masking.
    </P3>
    <TwoUp />
    <Rule />
    <H3 className="mb-2">Every style and color.</H3>
    <P3>
      Painting office buildings in Los Angeles takes on all colors, shapes, and
      sizes. Whether the desired look is dignified and professional, bold and
      vibrant, or modern meets classic, we can satisfy the demands of any style
      and color scheme. We work well with exterior designers, and we look
      forward to working with you.
    </P3>
    <TwoUp /> 
  </PageContainer>
);
