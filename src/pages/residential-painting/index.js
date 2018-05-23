import React from "react";
import bgImg from '../../assets/images/feat-house.jpg';
import { TwoUp } from "../../components/ImagesContainers";
import PageContainer from "../../components/PageContainer";
import Rule from "../../components/Rule";
import { H1, H3, P3 } from "../../components/Typography";


export default () => (
  <PageContainer bgImg={bgImg} >
    <H1>Residential Painting</H1>
    <Rule />
    <H3>Efficient, expert home painters.</H3>
    <P3>Your Los Angeles Painting Company</P3>
    <TwoUp />
    <Rule />
    <H3>We paint interiors.</H3>
    <P3>
      When you want to freshen up your kitchen, redo your bathroom, or brighten
      up your bedroom, Trifecta can provide you with a wide range of ideas and
      options for repainting your home. Can’t decide on the color? We can help
      you choose the right look with interior paint colors and living room paint
      ideas.
    </P3>
    <TwoUp />
    <Rule />
    <H3>We paint exteriors.</H3>
    <P3>
      Painting the exterior of your house doesn’t just make it look great, it
      adds value to your home. We are experts at prepping and painting all kinds
      of exterior siding, including stucco, vinyl siding, wood siding, cedar
      shake siding, fiber cement siding, and aluminum siding.{" "}
    </P3>
    <TwoUp />
    <Rule />
    <H3>Ready for redecorating—or even a remodel.</H3>
    <P3>
      At Trifecta, we know how to help you refresh your home with a beautiful
      new paint job. Whether you want to go vibrant and fun, or subtle and
      refined, we can work with you to find the perfect look for every room in
      your house.
    </P3>
    <TwoUp />
    <Rule />
    <H3>Repaint when you want to sell.</H3>
    <P3>
      Staging a house can be stressful. That’s why we offer in-home repainting
      services, because a new paint job should be the least of your concerns
      when you’re getting ready to sell. Getting your house repainted before you
      put it on the market can add value to a home, and our highly professional
      teams are experts at doing clean, efficient in-home jobs. When you don’t
      want to worry, call Trifecta.
    </P3>
    <TwoUp />
    <Rule />
    <H3>Take care of your home.</H3>
    <P3>
      You’re making an investment in the future because your home is important
      to you. Trifecta understands this, and that’s why we work to make the cost
      to paint the interior of your house reasonable and affordable.
    </P3>
    <TwoUp />
  </PageContainer>
);
