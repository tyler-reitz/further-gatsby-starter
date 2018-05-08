import React from "react";
import PageContainer from "../../components/PageContainer";
import Rule from "../../components/Rule";
import { H1, H2, H3, H4, P1, P2, P3 } from "../../components/Typography";

import bgImg from "../../assets/images/feat-retail.jpg";

export default () => (
  <PageContainer bgImg={bgImg}>
    <H1>Retail</H1>
    <Rule />
    <H3 className="mb-2">Attract more customers.</H3>
    <P2>
      No one wants to shop in a run-down, ugly building. They draw the
      conclusion that the products must not be worth buying because the building
      obviously isn’t worth maintaining. If they’re desperate, they may enter in
      spite of cracked, dirty walls and peeling paint—but if you’ve noticed a
      steady decline in customers, it could be that they don’t even want to step
      inside the store because of how it looks. On the other hand, a
      well-maintained building tends to attract shoppers. Painting your store is
      the kind of investment that can immediately boost your bottom line.
    </P2>
    <Rule />
    <H3 className="mb-2">Stand out from the competition.</H3>
    <P2>
      When you want your store to look different from all the rest, Trifecta can
      make it look spectacular. Though you may be tempted to choose colors that
      blend in, sometimes it’s better to make a statement with a distinctive
      palette. We know how to showcase your brand and make your business stand
      out.
    </P2>
    <Rule />
    <H3 className="mb-2">Skilled, professional project management.</H3>
    <P2>
      We’re not a small-time paint contractor. We’ve gained experience through
      years of work here in Los Angeles, painting shopping centers,
      supermarkets, home improvement stores, and malls.
    </P2>
    <Rule />
    <H3 className="mb-2">We do all types of retail painting.</H3>
    <P2>
      Trifecta specializes in wide variety of retail store painting services in
      Los Angeles, including:
    </P2>
    <Rule />
    <ul className="flex flex-wrap list-reset sm:mx-8">
      {[
        "Shopping Centers",
        "Restaurants",
        "Home Improvement",
        "Supermarkets",
        "Drug Stores",
        "Shops",
        "Big-Box Stores",
        "Department Stores",
        "Discount Stores",
        "Warehouse Clubs",
        "Corner Stores",
        "Neighborhood Centers",
        "Malls",
        "Factory Outlets",
        "Power Centers",
        "Speciality Chains",
        "Strip Malls",
        "Shopping Malls",
        "Grocery Stores",
        "Urban Retail",
        "Mixed-Use Developments"
      ].map(service => (
        <li className="text-primary leading-normal my-4 w-1/2 lg:w-1/3">
          <P2>{service}</P2>
        </li>
      ))}
    </ul>
    <Rule />
    <H3 className="mb-2">We paint tilt-ups, inside and out, year round.</H3>
    <P2>
      Painting tilt-ups in Los Angeles often requires an understanding of paint
      chemistry to ensure proper bonding of primers and paints to a tilt-up’s
      concrete walls. Here at Trifecta Painting, one of our owners is an
      experienced paint chemist who keeps our crews educated on everything from
      pH levels to proper pressure washing to cleanse away concrete release
      agents in preparation for painting. It’s all done in order to ensure a
      high-quality finish that will last, year after year, season after season.
    </P2>
  </PageContainer>
);
