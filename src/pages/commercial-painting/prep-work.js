import React from "react";
import { FullWidth } from "../../components/ImagesContainers";
import PageContainer from "../../components/PageContainer";
import Rule from "../../components/Rule";
import { H1, H3, P3 } from "../../components/Typography";
import Helmet from "react-helmet"

import bkgImg from "../../assets/images/hero-01.jpg"
import img1 from "../../assets/images/Trifecta Selects/Commercial/DSCN2234.jpg"
import img2 from "../../assets/images/Trifecta Selects/Commercial/DSCN3124.jpg"
import img3 from "../../assets/images/Trifecta Selects/Commercial/DSCN3180.jpg"
import img4 from "../../assets/images/Trifecta Selects/Commercial/DSCN3209.jpg"
import img5 from "../../assets/images/Trifecta Selects/Commercial/IMG_0485.jpg"
import img6 from "../../assets/images/Trifecta Selects/Commercial/IMG_3233.jpg"

export default () => (
  <PageContainer bgImg={bkgImg}>
    <Helmet>
      <title>Trifecta | Commercial Painting | Prep Work</title>
    </Helmet>

    <H1>Prep Work</H1>
    <Rule />
    <H3>Drywall Repair.</H3>
    <P3>
      When your interior walls are in need of repair, our crews can help. We
      have experience with drywall, mudding, and taping, and we can rapidly fix
      your walls and make them look like new again.
    </P3>
    <FullWidth img={img1} />
    <Rule />
    <H3>Stucco Repair.</H3>
    <P3>
      Los Angeles is known for its stucco houses and structures, and in the
      course of painting houses and commercial buildings, we became experts on
      repairing stucco. We’re not content to just slap a coat of paint over a
      stucco job that is obviously failing — we’ll do the repairs ourselves as
      part of our full-spectrum exterior painting services.
    </P3>
    <FullWidth img={img2} />
    <Rule />
    <H3>Wallpaper Removal.</H3>
    <P3>
      There’s many a time that our clients have asked us to remove old
      wallpaper, and we’re happy to help. Sometimes the wallpaper is damaged and
      peeling, and it needs to be replaced. Or maybe you’re looking to change up
      the look and feel of your walls. Whatever it is, we offer wallpaper
      removal services in addition to our regular interior painting services.
    </P3>
    <FullWidth img={img3} />
    <Rule />
    <H3>Lead Paint Removal.</H3>
    <P3>
      One of the most hazardous obstacles that can be encountered in repainting
      your home is discovering the presence of lead paint. It’s not advisable to
      attempt to remove lead paint yourself due to the inherent health hazards,
      and that’s why Trifecta offers lead paint removal services to assist you.
    </P3>
    <FullWidth img={img4} />
    <Rule />
    <H3>Power Washing.</H3>
    <P3>
      It seems all too obvious to say that paint won’t stick to dirty surfaces,
      but we’ve observed other painters who think they can ignore this. We make
      sure to do it right, and in many cases, preparing for a properly done
      paint job will require power washing to ensure that all dirt and debris
      have been cleared away.
    </P3>
    <FullWidth img={img5} />
    <Rule />
    <H3>Light Carpentry.</H3>
    <P3>
      When you have finish carpentry that needs to be done as part of your
      painting project, Trifecta can incorporate this into our bid. We have
      members of our crew who are experienced carpenters and we can assist you
      with light repairs or modifications.
    </P3>
    <FullWidth img={img6} />
  </PageContainer>
);
