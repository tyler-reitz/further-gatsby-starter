import React from "react";
import PageContainer from "../../components/PageContainer";
import { TwoUp } from "../../components/ImagesContainers";
import Rule from "../../components/Rule";
import { H1, H2, H3, H4, P1, P2, P3 } from "../../components/Typography";

import bgImg from '../../assets/images/feat-apartments.jpg'

export default () => (
  <PageContainer bgImg={bgImg}>
    <H1>Apartments</H1>
    <Rule />
    <H3 className="mb-2">Los Angeles Apartment Painting</H3>
    <P2>
      Painting apartment buildings in Los Angeles requires a painting company
      that can tackle large jobs with confidence and professionalism. Trifecta
      Painting specializes in painting apartment complexes in Los Angeles,
      including both interior painting and exterior painting of all types of
      multi-family housing.
    </P2>
    <TwoUp />
    <Rule />
    <H3 className="mb-2">We paint walls and ceilings.</H3>
    <P2>
      Sure, it may seem obvious that Trifecta will paint the interior walls and
      ceilings of the apartments. What isn’t obvious is that we take care to do
      it right. With a steady hand and an eye for detail, we make the ordinary
      look extraordinary.
    </P2>
    <TwoUp />
    <Rule />
    <H3 className="mb-2">We paint windows and doors.</H3>
    <P2>
      Properly painting apartment doors and windows serves a dual purpose—it not
      only looks fantastic, it helps protect these important openings from
      weather and insects.
    </P2>
    <TwoUp />
    <Rule />
    <H3 className="mb-2">We paint cabinets and trim.</H3>
    <P2>
      Trifecta has mastered the art of refinishing and painting baseboards,
      cabinets, crown molding, chair rail, wall paneling, handrails—you name it,
      we’ll paint it.
    </P2>
    <TwoUp />
    <Rule />
    <H3 className="mb-2">We do accent walls.</H3>
    <P2>
      When an apartment needs a splash of color, we can liven it up with an
      accent wall in the color of your choice.
    </P2>
    <TwoUp />
    <Rule />
    <H3>
      Here are some of the different types of apartments our expert teams can
      tackle:
    </H3>

    <table className="w-full mb-8">
      {[
        [
          "Mixed-use",
          "Urban apartments built on top of street-level shops and stores"
        ],
        ["Walk-up", "Typically 4 to 6 stories tall, without an elevator"],
        [
          "Garden-style",
          "1 to 3 stories tall, these complexes tend to emphasize greenery, gardens, walkways, and courtyards"
        ],
        [
          "High-rise",
          "Complexes with 9 or more floors, including at least one elevator"
        ],
        [
          "Garden-style",
          "1 to 3 stories tall, these complexes tend to emphasize greenery, gardens, walkways, and courtyards"
        ],
        [
          "Mid-rise",
          "A multi-story building with an elevator, generally 8 or less floors"
        ],
        [
          "Special-purpose housing",
          "Units meant for student housing, seniors, or subsidized housing"
        ],
      ].map((row, idx) => (
        <tr className={`text-lg font-light leading-normal my-4 ${idx % 2 ? '' : 'bg-grey-light' }`}>
          <td className="font-semibold p-4">{row[0]}</td>
          <td className="p-4">{row[1]}</td>
        </tr>
      ))}
    </table>
  </PageContainer>
);
