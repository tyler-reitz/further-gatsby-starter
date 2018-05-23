import React from "react";
import { FullWidth } from "../components/ImagesContainers";
import PageContainer from "../components/PageContainer";
import Rule from "../components/Rule";
import Star from "../components/Star";
import { BQ, H1, H3, P1 } from "../components/Typography";

export default () => (
  <PageContainer>
    <H1>Reviews</H1>
    {/* <Rule /> */}
    <P1>
      At the end of the day, we’re just a bunch of honest, hard-working
      painters. If we can’t look back on our work with pride, everything else is
      meaningless. We genuinely care about doing our best work on every single
      job. But don’t take our word for it. Here’s what our clients think about
      us:
    </P1>
    <Rule />
    <H3>See what our clients think about us.</H3>
    <div className="text-center py-8 my-8">
      <BQ>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate at a possimus! Consectetur velit non nulla quis fugiat!"</BQ>
      {Array(5).fill(null).map(_ => <Star />)}
    </div>
    <FullWidth className="px-8" />
    <div className="text-center py-8 my-8">
      <BQ>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate at a possimus! Consectetur velit non nulla quis fugiat!"</BQ>
      {Array(5).fill(null).map(_ => <Star />)}
    </div>
    <FullWidth className="px-8" />
    <div className="text-center py-8 my-8">
      <BQ>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate at a possimus! Consectetur velit non nulla quis fugiat!"</BQ>
      {Array(5).fill(null).map(_ => <Star />)}
    </div>
  </PageContainer>
);
