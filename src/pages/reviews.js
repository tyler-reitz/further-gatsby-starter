import React from "react";
import PageContainer from "../components/PageContainer";
import Carousel2 from "../components/Carousel"
import Star from "../components/Star"
import Rule from "../components/Rule";
import { H1, H2, H3, H4, P1, P2, P3 } from "../components/Typography"

export default () => (
  <PageContainer>
    <H1>Reviews</H1>
    <Rule />
    <H3>See what our clients think about us.</H3>
    <P2>
      At the end of the day, we’re just a bunch of honest, hard-working
      painters. If we can’t look back on our work with pride, everything else is
      meaningless. We genuinely care about doing our best work on every single
      job. But don’t take our word for it. Here’s what our clients think about
      us:
    </P2>
    <Rule />
    <div className="relative h-screen-w-1.25 sm:h-screen-w-1/2 w-full bg-gradient-grey-white">
        <Carousel2
          settings={{
            className: "center-slides",
            dotsClass: "slick-dots slick-dots-blue"
          }}
        >
          <div>
            <div className="block text-center mx-auto sm:flex sm:flex-wrap content-center justify-center p-4 max-w-xl">
              <h3 className="font-gotham-bold text-5xl leading-none my-4 text-primary">
                Trifecta Rave Reviews
              </h3>
              <p className="my-4 font-light text-lg w-full leading-normal">
                “My company is a property management company and has been
                working with Ean for the past 2 years or so now. He has
                professionally handled painting and some maintenance issues for
                several of our properties over the past two years. It&#8217;s
                always extremely easy to get a hold of Ean, and he responds and
                provides what we need by the deadline of when we ask him for the
                information. Our clients also have shared nothing but the most
                amazing feedback both on the quality of service, his fairness,
                great pricing, and overall integrity.”
              </p>
              {Array(5).fill(null).map(_ => <Star />)}
              <span className="block w-full font-medium my-3">NF | Los Angeles</span>
            </div>
          </div>
          <div>
            <div className="block text-center mx-auto sm:flex sm:flex-wrap content-center justify-center p-4 max-w-xl">
              <h3 className="font-gotham-bold text-5xl leading-none my-4 text-primary">
                Trifecta Rave Reviews
              </h3>
              <p className="my-4 font-light text-lg w-full leading-normal">
                “My company is a property management company and has been
                working with Ean for the past 2 years or so now.”
              </p>
              <p className="my-4 font-light text-lg w-full leading-normal">
                “He has professionally handled painting and some maintenance
                issues for several of our properties over the past two years.
                It&#8217;s always extremely easy to get a hold of Ean, and he
                responds and provides what we need by the deadline of when we
                ask him for the information.”
              </p>
              <p className="my-4 font-light text-lg w-full leading-normal">
                “Our clients also have shared nothing but the most amazing
                feedback both on the quality of service, his fairness, great
                pricing, and overall integrity.”
              </p>
              {Array(5).fill(null).map(_ => <Star />)}
              <span className="block w-full font-medium my-3">NF | Los Angeles</span>
            </div>
          </div>
          <div>
            <div className="block text-center mx-auto sm:flex sm:flex-wrap content-center justify-center p-4 max-w-xl">
              <h3 className="font-gotham-bold text-5xl leading-none my-4 text-primary">
                Trifecta Rave Reviews
              </h3>
              <p className="my-4 font-light text-lg w-full leading-normal">
                “My company is a property management company and has been
                working with Ean for the past 2 years or so now. He has
                professionally handled painting and some maintenance issues for
                several of our properties over the past two years. It&#8217;s
                always extremely easy to get a hold of Ean, and he responds and
                provides what we need by the deadline of when we ask him for the
                information.”
              </p>
              {Array(5).fill(null).map(_ => <Star />)}
              <span className="block w-full font-medium my-3">NF | Los Angeles</span>
            </div>
          </div>
        </Carousel2>
      </div>
  </PageContainer>
);
