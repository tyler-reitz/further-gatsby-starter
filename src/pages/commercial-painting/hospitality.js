import React from "react";
import bgImg from '../../assets/images/feat-hotels.jpg';
import { TwoUp } from "../../components/ImagesContainers";
import PageContainer from "../../components/PageContainer";
import Rule from "../../components/Rule";
import { H1, H3, P3 } from "../../components/Typography";


export default () => (
  <PageContainer bgImg={bgImg}>
    <H1>Hospitality</H1>
    <Rule />
    <H3>We respect your guests.</H3>
    <P3>
      We work with hotels on a pre-arranged schedule that is considerate of your
      guests and patrons. Our crews have been trained to be low-key and
      unobtrusive about their work, because painting hotels in Los Angeles
      demands a level of skill and expertise that you won’t find in a small-time
      contractor, or a painting company that only has experience with painting
      houses. Trifecta understands the importance of speed and cleanliness, and
      we always maintain cleanliness throughout the work site.
    </P3>
    <TwoUp />
    <Rule />
    <H3>No distractions.</H3>
    <P3>
      No distractions. Hotel managers have a lot to worry about when it comes to
      managing employees and administering all of the many services your hotel
      offers. We take care of the painting so you don’t have to, with a
      worry-free approach that eliminates the stress and mess of trying to
      repaint the hotel with a maintenance crew that has a lot of other duties.
      We’re also familiar with a variety of low-VOC and low-odor paints, and
      we’ll work with you to find a product that fits your needs.
    </P3>
    <TwoUp />
    <Rule />
    <H3>We’re versatile and experienced.</H3>
    <P3>
      We know how hotels can include bars and restaurants, retail shops, laundry
      facilities, and fitness centers, all in addition to the lobby and guest
      rooms. This can require a variety of styles and painting techniques, and
      Trifecta is up to the task. We have the experience and flexibility to
      paint anything your hotel has to offer, inside and out.
    </P3>
    <TwoUp />
    <Rule />
    <H3>We paint event venues, too.</H3>
    <P3>
      In fact, we can handle all kinds of hospitality painting services in Los
      Angeles:
    </P3>
    <ul className="flex flex-wrap list-reset sm:px-8">
      {[
        "Resorts",
        "Casinos",
        "Luxury Suites",
        "Motels",
        "Bed and Breakfasts",
        "Extended Stay",
        "Event Venues",
        " Halls",
      ].map(service => (
        <li className="text-primary leading-normal my-4 w-1/2 lg:w-1/3">
          <P3>{service}</P3>
        </li>
      ))}
    </ul>
  </PageContainer>
);
