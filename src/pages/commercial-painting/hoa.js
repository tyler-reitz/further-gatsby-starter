import React from "react";
import bgImg from '../../assets/images/feat-hoa.jpg';
import { TwoUp } from "../../components/ImagesContainers";
import PageContainer from "../../components/PageContainer";
import Rule from "../../components/Rule";
import { H1, H3, P3 } from "../../components/Typography";


export default () => (
  <PageContainer bgImg={bgImg}>
    <H1>HOA</H1>
    <Rule />
    <P3>
      Maybe you’re the leader of your local Home Owners Association, and you’re
      looking for a commercial painting company that has experience working with
      HOAs to get excellent results. Or maybe you’re a home owner in need of a
      commercial painting contractor who knows how to get the job done to the
      satisfaction of your HOA’s requirements.
    </P3>
    <TwoUp />
    <Rule />
    <H3>We have the experience. </H3>
    <P3>
      Trifecta has extensive know-how and experience when it comes to painting
      Home Owners Association houses in Los Angeles, and we’ve also done
      painting in planned communities and gated communities. We know how to meet
      the stipulations in HOA covenants, conditions and restrictions (CC&Rs) to
      the satisfaction of all concerned.
    </P3>
    <TwoUp />
    <Rule />
    <H3>Coordinated color matching.</H3>
    <P3>
      {" "}
      We understand the importance of getting the right color. In fact, it’s one
      of the most common issues we deal with when it comes to painting houses
      for Home Owners Associations in Los Angeles. No one wants that one house
      on the corner sticking out and looking like an eyesore, and getting the
      right color plays a vital role in getting an integrated look for the
      community. and we have experience in working with homeowners and HOAs to
      work within a color palette to the satisfaction of all concerned.
    </P3>
    <TwoUp />
    <Rule />
    <H3>Detailed paint specifications.</H3>
    <P3>
      {" "}
      Trifecta knows that the first step of any great-looking paint job is to
      make sure the paint specifications are perfect. By deciding in advance on
      the paint product line, specific primers, and the optimum gloss level for
      the topcoat, production on the job site can roll along without delays,
      changes, or interruptions. Professional painters know it’s never a matter
      of grabbing whatever materials they can find off the shelf, and that’s why
      we always put a lot of planning and careful thought into the exact
      specifications that will ensure your paint job will stand the test of
      time.
    </P3>
    <TwoUp />
  </PageContainer>
);
