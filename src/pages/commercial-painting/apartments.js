import React from "react";
import PageContainer from "../../components/PageContainer";
import Rule from "../../components/Rule";

export default () => (
  <PageContainer>
    <h1 className="mb-2">Los Angeles Apartment Painting</h1>
    <p className="mb-4">
    Painting apartment buildings in Los Angeles requires a painting company that can tackle large jobs with confidence and professionalism. Trifecta Painting specializes in painting apartment complexes in Los Angeles, including both interior painting and exterior painting of all types of multi-family housing.
    </p>
    <Rule />
    <h1 className="mb-2">We paint walls and ceilings.</h1>
    <p className="mb-4">
    Sure, it may seem obvious that Trifecta will paint the interior walls and ceilings of the apartments. What isn’t obvious is that we take care to do it right. With a steady hand and an eye for detail, we make the ordinary look extraordinary.
    </p>
    <Rule />
    <h1 className="mb-2">We paint windows and doors.</h1>
    <p className="mb-4">
    Properly painting apartment doors and windows serves a dual purpose—it not only looks fantastic, it helps protect these important openings from weather and insects.
    </p>
    <Rule />
    <h1 className="mb-2">We paint cabinets and trim.</h1>
    <p className="mb-4">
    Trifecta has mastered the art of refinishing and painting baseboards, cabinets, crown molding, chair rail, wall paneling, handrails—you name it, we’ll paint it.
    </p>
    <Rule />
    <h1 className="mb-2">We do accent walls.</h1>
    <p className="mb-4">
    When an apartment needs a splash of color, we can liven it up with an accent wall in the color of your choice.
    </p>
    <Rule />
    <h1>Here are some of the different types of apartments our expert teams can tackle:</h1>

    <table className="w-full">
      <tr><td>Mixed-use:</td><td>Urban apartments built on top of street-level shops and stores</td></tr>
      <tr><td>Walk-up:</td><td>Typically 4 to 6 stories tall, without an elevator</td></tr>
      <tr><td>Garden-style:</td><td>1 to 3 stories tall, these complexes tend to emphasize greenery, gardens, walkways, and courtyards</td></tr>
      <tr><td>High-rise:</td><td>Complexes with 9 or more floors, including at least one elevator</td></tr>
      <tr><td>Mid-rise:</td><td>A multi-story building with an elevator, generally 8 or less floors</td></tr>
      <tr><td>Special-purpose housing:</td><td>Units meant for student housing, seniors, or subsidized housing</td></tr>
    </table>
  </PageContainer>
);
