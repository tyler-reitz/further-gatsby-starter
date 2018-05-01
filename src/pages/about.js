import React, { Component } from "react";
import PageContainer from '../components/PageContainer'
import Button from "../components/Button";
import Rule from "../components/Rule"

export default () => (
  <PageContainer>
    <h1 className="mb-2">About Us</h1>
    <p className="mb-4">
      Only 10 years apart from oldest to youngest, Ean Belafsky, Chris Ludlam
      and Allan Lauenstein embody the term “Trifecta.” Each with their own
      unique skill set, the trio have formed a premiere Los Angeles painting
      company, with a focus, drive and collective desire to deliver for their
      clients.
    </p>
    <Rule />
    <h2>Ean Belafsky</h2>
    <img
      className="w-1/3"
      src="http://via.placeholder.com/300x350"
      alt="placeholders"
    />
    <p className="mb-4">
      Ean started his contracting career in May 2006 with a nationally
      recognized painting company. He started by painting homes, both interior
      and exterior, and quickly grew his client base, all while delivering a
      superior experience for his clients and customers. Before long, Ean
      expanded into the custom residential painting market and never looked
      back.
    </p>
    <p className="mb-4">
      Once Ean mastered the residential high-end painting market, he felt it
      was time to add commercial work to his repertoire. Just like how his
      residential painting career began, his commercial career started off
      modest before growing into large scale projects ranging from
      multi-family housing to conventional commercial painting projects.
    </p>
    <p className="mb-4">
      Now, in 2018, Ean and his team have entered into a whole new level,
      finding their niche painting massive commercial structures and high-end
      estates—with separate, dedicated painting teams for different types of
      work.
    </p>
    <Rule />
    <h2>Chris Ludlam</h2>
    <img
      className="w-1/3"
      src="http://via.placeholder.com/300x350"
      alt="placeholders"
    />
    <p className="mb-4">
      When Chris first joined the Trifecta ranks as the Production Manager,
      our productivity immediately went from satisfactory to extraordinary.
      Within a very short period of time, on-the-job performance firmed up,
      Trifecta started to establish real culture, and morale grew to an
      all-time high.
    </p>
    <p className="mb-4">
      Chris brings with him a skill set few have in the construction industry,
      which includes a graduate degree and extensive field experience. Born to
      a family that boasts an old-school plumbing contractor and a roofer, he
      has spent his entire life in the field of construction.
    </p>
    <p className="mb-4">
      With many years of experience as a project manager for commercial and
      residential GCs, both locally and abroad, Chris’s vast knowledge in
      general contracting is a huge addition to the Trifecta team and has
      helped tremendously in building a first-class painting operation.
    </p>
    <Rule />
    <h2>Allan Lauenstein</h2>
    <img
      className="w-1/3"
      src="http://via.placeholder.com/300x350"
      alt="placeholders"
    />
    <p className="mb-4">
      Allan is Trifecta’s own commercial painting project extraordinaire. A
      bona fide paint chemist with a unique ability to truly see the forest
      through the trees, nothing phases him. From initial consultation and
      establishing proper specs, to accurate bidding and follow-through, Allan
      has set himself apart from the field.
    </p>
    <p className="mb-4">
      Allan originally cut his teeth in the world of painting by working up
      the ranks of Sherwin Williams, but after a successful 10-year career on
      the manufacturing side, he felt the need to work on the service side.
      His expertise in paint and natural charm has made for a winning
      combination at Trifecta Painting.
    </p>

    <div className="pt-4 pb-8 text-center">
      <h2 className="leading-loose text-2xl mb-2">Call To Action</h2>
      {/* <button className="bg-grey hover:bg-grey-darker w-5/6 sm:w-2/5 px-8 py-4 rounded font-bold text-white">Submit</button> */}
      <Button primary type="submit">
        Submit
      </Button>
    </div>
  </PageContainer>
);
