import React from "react";
import PageContainer from "../../components/PageContainer";
import Rule from "../../components/Rule";
import { H1, H2, H3, H4, P1, P2, P3 } from "../../components/Typography"

import bgImg from '../../assets/images/feat-hospitals.jpg'

export default () => (
  <PageContainer bgImg={bgImg}>
    <H3>We keep it clean.</H3>
    <P2>
      Maintaining a sterile environment is of the utmost importance for ensuring
      the health and safety of patients. Trifecta understands the unique set of
      challenges that come with painting hospitals in Los Angeles, not to
      mention clinics and assisted living facilities. That’s why we go the extra
      mile to put up vapor barriers and protect existing surfaces when we paint
      healthcare facilities, making sure to keep these spaces clean and
      pristine.
    </P2>
    <Rule />
    <H3>Want paint that can kill bacteria?</H3>
    <P2>
      In the past, paint products for healthcare facilities were selected only
      on the basis of esthetic considerations like color and sheen. And while
      choosing the right hues and color schemes continues to be a factor in the
      process of ensuring patient comfort, new advances in paint chemistry have
      resulted in high-performance paints specifically designed to kill bacteria
      that come into contact with hospital surfaces. We can help you fight
      against the incursion of hospital-acquired infections with a painting
      solution tailored to your needs.
    </P2>
    <Rule />
    <H3>Careful, quiet, considerate.</H3>
    <P2>
      Whether you’re the administrator for a major healthcare provider or a
      specialty clinic, Trifecta delivers the same dedication to care and
      attention to detail on every job we do. We are considerate of patients
      because we understand just how stressful it can be. That’s why we also
      coordinate in advance to adhere to a strict schedule for painting waiting
      rooms, wards, ORs, emergency rooms, and dispensaries, so our crews don’t
      get in the way of doctors and nurses when they’re attending to patients.
    </P2>
  </PageContainer>
);
