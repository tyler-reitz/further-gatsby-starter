import React from "react";
import PageContainer from '../../components/PageContainer';
import Rule from "../../components/Rule";
import { H1, H3, P1, P3 } from "../../components/Typography";
import Helmet from "react-helmet"

export default () => (
  <PageContainer>
    <H1>About Us</H1>
    <P1>
      Only 10 years apart from oldest to youngest, Ean Belafsky, Chris Ludlam
      and Allan Lauenstein embody the term “Trifecta.” Each with their own
      unique skill set, the trio have formed a premiere Los Angeles painting
      company, with a focus, drive and collective desire to deliver for their
      clients.
    </P1>
    <Rule />
    <H3>Ean Belafsky</H3>
    <div className="flex flex-wrap flex-row-reverse">
      <img
        className="sm:w-1/3 pl-4 mb-4 self-start"
        src="http://via.placeholder.com/300x350"
        alt="placeholders"
      />
      <div className="sm:w-2/3">
        <P3 className="mt-0">
          Ean started his contracting career in May 2006 with a nationally
          recognized painting company. He started by painting homes, both interior
          and exterior, and quickly grew his client base, all while delivering a
          superior experience for his clients and customers. Before long, Ean
          expanded into the custom residential painting market and never looked
          back.
        </P3>
        <P3>
          Once Ean mastered the residential high-end painting market, he felt it
          was time to add commercial work to his repertoire. Just like how his
          residential painting career began, his commercial career started off
          modest before growing into large scale projects ranging from
          multi-family housing to conventional commercial painting projects.
        </P3>
        <P3>
          Now, in 2018, Ean and his team have entered into a whole new level,
          finding their niche painting massive commercial structures and high-end
          estates—with separate, dedicated painting teams for different types of
          work.
        </P3>
      </div>
    </div>
    <Rule className="mb-8" />
    <H3>Chris Ludlam</H3>
    <div className="flex flex-wrap flex-row-reverse">
      <img
        className="sm:w-1/3 pl-4 mb-4 self-start"
        src="http://via.placeholder.com/300x350"
        alt="placeholders"
      />
      <div className="sm:w-2/3">
        <P3 className="mt-0">
          When Chris first joined the Trifecta ranks as the Production Manager,
          our productivity immediately went from satisfactory to extraordinary.
          Within a very short period of time, on-the-job performance firmed up,
          Trifecta started to establish real culture, and morale grew to an
          all-time high.
        </P3>
        <P3>
          Chris brings with him a skill set few have in the construction industry,
          which includes a graduate degree and extensive field experience. Born to
          a family that boasts an old-school plumbing contractor and a roofer, he
          has spent his entire life in the field of construction.
        </P3>
        <P3>
          With many years of experience as a project manager for commercial and
          residential GCs, both locally and abroad, Chris’s vast knowledge in
          general contracting is a huge addition to the Trifecta team and has
          helped tremendously in building a first-class painting operation.
        </P3>
      </div>
    </div>
    <Rule className="mb-8" />
    <H3>Allan Lauenstein</H3>
    <div className="flex flex-wrap flex-row-reverse">
      <img
        className="sm:w-1/3 pl-4 mb-4 self-start"
        src="http://via.placeholder.com/300x350"
        alt="placeholders"
      />
      <div className="sm:w-2/3">
        <P3 className="mt-0">
          Allan is Trifecta’s own commercial painting project extraordinaire. A
          bona fide paint chemist with a unique ability to truly see the forest
          through the trees, nothing phases him. From initial consultation and
          establishing proper specs, to accurate bidding and follow-through, Allan
          has set himself apart from the field.
        </P3>
        <P3>
          Allan originally cut his teeth in the world of painting by working up
          the ranks of Sherwin Williams, but after a successful 10-year career on
          the manufacturing side, he felt the need to work on the service side.
          His expertise in paint and natural charm has made for a winning
          combination at Trifecta Painting.
        </P3>
      </div>
    </div>

  </PageContainer>
);
