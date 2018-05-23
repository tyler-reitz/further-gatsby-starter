import React from "react";
import bgImg from "../../assets/images/feat-retail.jpg";
import { FullWidth, TwoUp } from "../../components/ImagesContainers";
import PageContainer from "../../components/PageContainer";
import Rule from "../../components/Rule";
import { H1, H3, P3 } from "../../components/Typography";

import img1 from "../../assets/images/Trifecta Selects/Commercial/DSCN3124.jpg"
import img2 from "../../assets/images/Trifecta Selects/Commercial/DSCN3180.jpg"
import img3 from "../../assets/images/Trifecta Selects/Commercial/DSCN3209.jpg"
import img4 from "../../assets/images/Trifecta Selects/Commercial/IMG_0485.jpg"

export default () => (
  <PageContainer bgImg={bgImg}>
    <H1>Retail</H1>
    <Rule />
    <H3 className="mb-2">Attract more customers.</H3>
    <P3>
      No one wants to shop in a run-down, ugly building. They draw the
      conclusion that the products must not be worth buying because the building
      obviously isn’t worth maintaining. If they’re desperate, they may enter in
      spite of cracked, dirty walls and peeling paint—but if you’ve noticed a
      steady decline in customers, it could be that they don’t even want to step
      inside the store because of how it looks. On the other hand, a
      well-maintained building tends to attract shoppers. Painting your store is
      the kind of investment that can immediately boost your bottom line.
    </P3>
    <FullWidth img={img1} />
    <Rule />
    <H3 className="mb-2">Stand out from the competition.</H3>
    <P3>
      When you want your store to look different from all the rest, Trifecta can
      make it look spectacular. Though you may be tempted to choose colors that
      blend in, sometimes it’s better to make a statement with a distinctive
      palette. We know how to showcase your brand and make your business stand
      out.
    </P3>
    <FullWidth img={img2} />
    <Rule />
    <H3 className="mb-2">Skilled, professional project management.</H3>
    <P3>
      We’re not a small-time paint contractor. We’ve gained experience through
      years of work here in Los Angeles, painting shopping centers,
      supermarkets, home improvement stores, and malls.
    </P3>
    <FullWidth img={img3} />
    <Rule />
    <H3 className="mb-2">We do all types of retail painting.</H3>
    <P3>
      Trifecta specializes in wide variety of retail store painting services in
      Los Angeles, including:
    </P3>
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
          <P3>{service}</P3>
        </li>
      ))}
    </ul>
    <Rule />
    <H3 className="mb-2">We paint tilt-ups, inside and out, year round.</H3>
    <P3>
      Painting tilt-ups in Los Angeles often requires an understanding of paint
      chemistry to ensure proper bonding of primers and paints to a tilt-up’s
      concrete walls. Here at Trifecta Painting, one of our owners is an
      experienced paint chemist who keeps our crews educated on everything from
      pH levels to proper pressure washing to cleanse away concrete release
      agents in preparation for painting. It’s all done in order to ensure a
      high-quality finish that will last, year after year, season after season.
    </P3>
    <FullWidth img={img4} />
  </PageContainer>
);
