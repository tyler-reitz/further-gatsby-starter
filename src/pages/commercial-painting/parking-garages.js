import React from "react";
import PageContainer from "../../components/PageContainer";
import { TwoUp } from "../../components/ImagesContainers";
import Rule from "../../components/Rule";
import { H1, H2, H3, H4, P1, P2, P3 } from "../../components/Typography"

import bgImg from '../../assets/images/feat-parking.jpg'

export default () => (
  <PageContainer bgImg={bgImg}>
    <H1>Parking Garages</H1>
    <Rule />
    <H3 className="mb-2">More than a maintenance coat.</H3>
    <P2>
      When it comes to painting parking garages in Los Angeles, we don’t do a
      “toss-it-off” job. Other contractors have been known to make the mistake
      of going ahead and painting the ceilings, walls, and columns of parking
      garages without doing a proper job of prepping them first. Trifecta takes
      care to clean all surfaces thoroughly to ensure proper adhesion of the
      paint, for a high-quality, long-lasting paint jo
    </P2>
    <TwoUp />
    <Rule />
    <H3 className="mb-2">Clean, fast, and professional.</H3>
    <P2>
      Parking structures aren’t always known for being clean, but that doesn’t
      mean we’re going to come in and make a mess. As a matter of fact, we pride
      ourselves on doing a professional job, without spills or debris. And with
      a brand new paint job, it makes upkeep easier, helping you save on
      maintenance costs.
    </P2>
    <TwoUp />
    <Rule />
    <H3 className="mb-2">Industrial-grade protective coatings.</H3>
    <P2>
      Trifecta provides painting solutions that can stand up to the wear and
      tear that are so often found in parking garages and parking structures in
      Los Angeles. We understand how frustrating it can be when careless drivers
      cause bumps, dents, scratches, and scars when they enter and exit your
      garage. And while no paint is invincible, some products are vastly
      superior to others. We have experience with industrial-grade coatings that
      do the best possible job of keeping your parking garage looking
      professional.
    </P2>
    <TwoUp />
    <Rule />
    <H3 className="mb-2">Increase safety with increased visibility.</H3>
    <P2>
      A new paint job can do a lot to improve the safety of a parking garage.
      While bare concrete tends to absorb light, painting ceilings and walls
      with light-colored paints helps to reflect light, and this can result in a
      remarkable increase in visibility, thereby reducing collisions and
      accidents.
    </P2>
    <TwoUp />
  </PageContainer>
);
