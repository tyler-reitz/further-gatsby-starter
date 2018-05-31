import React, { Component } from "react";
import sliderImg1 from "../assets/images/01.jpg";
import sliderImg2 from "../assets/images/02.jpg";
import bkgLA from "../assets/images/bkg-losangeles.jpg";
import bkgMap from "../assets/images/bkg-map.jpg";
import Button from "../components/Button";
import Card from "../components/Card";
import Carousel2 from "../components/Carousel";
import Form from "../components/Form";
import Star from "../components/Star";
import { H3 } from "../components/Typography";
import "./style.scss";

class IndexPage extends Component {

  state = {
    nav1: null,
    nav2: null
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    })
  }

  render () {
    return (
      <div>
        {/* Hero 1 */}
        <div className="relative">
          <Carousel2
            settings={{
              // autoplay: true,
              dotsClass: "slick-dots slick-dots-blue slick-dots-light",
              asNavFor: this.state.nav2
            }}
            getRef={ref => this.slider1 = ref}
          >
            <div>
              <div
                style={{ backgroundImage: `url(${sliderImg1})` }}
                className="w-screen h-screen md:h-screen-2/3 bg-no-repeat bg-cover bg-center"
              />
            </div>
            <div>
              <div
                style={{ backgroundImage: `url(${sliderImg2})` }}
                className="w-screen h-screen md:h-screen-2/3 bg-no-repeat bg-cover bg-center"
              />
            </div>

          </Carousel2>

          <div
            style={{ top: "50%", transform: "translateY(-50%)" }}
            className="absolute pin-l pin-r bg-no-repeat bg-cover bg-center py-8"
          >
            <div className="flex flex-wrap justify-center items-center py-6">
              <div className="realtive z-10 sm:py-8 text-white max-w-3xl">
                <div className="px-4 sm:py-8 sm:max-w-screen-3/4">
                  <Carousel2 settings={{
                      dots: false,
                    }}
                    getRef={ref => this.slider2 = ref}
                  >
                    <div className="pl-1">
                      <h1 className="font-gotham-bold mb-2 text-5xl leading-none">
                        Yes, we do commercial painting.
                      </h1>
                      <small className="font-gotham-medium text-3xl mb-4">
                        Expert Los Angeles Commercial Painters
                      </small>
                      <p className="text-base font-light leading-normal my-6 sm:w-3/4">
                        We&rsquo;ve painted hotels and apartments, office buildings and
                        hospitals, shopping centers and parking garages. We&rsquo;ve
                        worked with HOAs and property management companies. Let Trifecta
                        work for you.
                      </p>
                      <Button to="/commercial-painting" className="mr-6 mb-4">Find out more</Button>
                      <Button to="/contact" className="mr-4 mb-4">Set an appointment</Button>
                    </div>
                    <div className="pl-1">
                      <h1 className="font-gotham-bold mb-2 text-5xl leading-none">
                        Yes, we do residential painting.
                      </h1>
                      <small className="font-gotham-medium text-3xl mb-4">
                        Expert Los Angeles Residential   Painters
                      </small>
                      <p className="text-base font-light leading-normal my-6 sm:w-3/4">
                        We&rsquo;ve painted hotels and apartments, office buildings and
                        hospitals, shopping centers and parking garages. We&rsquo;ve
                        worked with HOAs and property management companies. Let Trifecta
                        work for you.
                      </p>
                      <Button to="/residential-painting" className="mr-6 mb-4">Find out more</Button>
                      <Button to="/contact" className="mr-4 mb-4">Set an appointment</Button>
                    </div>
                  </Carousel2>
                </div>
              </div>
            </div>

            <div
              style={{ top: "1vw" }}
              className="absolute bg-primary h-9/10 sm:h-4/5 my-8 opacity-75 skew left width"
            />
          </div>
        </div>

        {/* Aside */}
        <div className="flex flex-wrap justify-center max-w-3xl mx-auto py-6 md:my-6 mb-4">
          <h2 className="font-gotham-bold leading-tight w-5/6 text-5xl mb-4 text-center gotham-bold text-primary text-4xl leading-none">
            Communication is our greatest strength. Talk&nbsp;to&nbsp;us.
          </h2>
          <p className="text-xl w-5/6 leading-normal text-center font-light">
            We pride ourselves on our relationships with our clients, our crews, and
            our suppliers. It&#8217;s all part of a thorough bidding process and
            detailed specification writing, so you get the best possible experience.
            Get started below.
          </p>
        </div>

        {/* Services 5-UP */}
        <div className="flex flex-wrap justify-center mx-auto py-6 md:my-6 bg-gradient-grey-white">
          {[
            {
              collection: "commercial-painting",
              title: "retail",
              imgUrl: "feat-retail.jpg"
            },
            {
              collection: "commercial-painting",
              title: "hospitality",
              imgUrl: "feat-hotels.jpg"
            },
            {
              collection: "commercial-painting",
              title: "apartments",
              imgUrl: "feat-apartments.jpg"
            },
            {
              collection: "commercial-painting",
              title: "office buildings",
              imgUrl: "feat-office.jpg"
            },
            {
              collection: "commercial-painting",
              title: "parking garages",
              imgUrl: "feat-parking.jpg"
            },
            {
              collection: "commercial-painting",
              title: "healthcare",
              path: "healthcare-hospitals",
              imgUrl: "feat-hospitals.jpg"
            },
            {
              collection: "residential-painting",
              title: "house painting",
              root: true,
              imgUrl: "feat-house.jpg"
            },
            {
              collection: "residential-painting",
              title: "interior painting",
              imgUrl: "feat-interior.jpg"
            },
            {
              collection: "residential-painting",
              title: "exterior painting",
              imgUrl: "feat-exterior.jpg"
            },
            {
              collection: "residential-painting",
              title: "highend estates",
              imgUrl: "feat-estate.jpg"
            }
          ].map((_, idx) => (
            <Card key={idx} title={_.title} imgUrl={_.imgUrl} {..._} />
          ))}
        </div>

        {/* Contact Form */}
        <div className="flex flex-wrap justify-center max-w-3xl mx-auto p-4 py-8 mb-8">
          <H3 className="text-primary text-center">
            Contact us today to discuss your project and how we can help:{" "}
            <a className="no-underline text-primary" href="tel:888-123-4567">
              888-123-4567
            </a>
          </H3>
          <Form />
        </div>

        {/* Hero 2 */}
        <div
          style={{ backgroundImage: `url(${bkgLA})` }}
          className="relative bg-no-repeat bg-cover bg-center py-8"
        >
          <div className="flex flex-wrap justify-center items-center py-6">
            <div className="realtive z-10 py-8 text-white max-w-3xl">
              <div className="px-4 py-8 sm:max-w-screen-3/4">
                <h1 className="font-gotham-bold mb-2 text-5xl leading-none capitalize">
                  Los&nbsp;Angeles building painters
                </h1>
                <small className="font-gotham-medium text-3xl mb-4">
                  Who Understand Your Goals and Concerns
                </small>
                <p className="text-base font-light leading-normal my-6 w-3/4">
                  With over XX years combined experience, Trifecta Painting
                  specializes in humanizing the world of commercial and residential
                  painting services. We know how frustrating it can be to find the
                  best commercial painters in Los Angeles. That&#8217;s why we
                  insist on things like a thorough bidding process, and well-written
                  paint specifications that outline the entire course of your
                  project.
                </p>
                <p className="text-base font-light leading-normal my-8 w-3/4">
                  We&#8217;ve established strong relationships with paint suppliers,
                  allowing us to outfit your project with top-quality paint and
                  supplies for a cost that is both competitive and economical. With
                  experienced crews, including expert high-reach equipment
                  operators, the professionalism of our work is defined by our
                  dedication to safety and an unrivaled cleanliness on the job site.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ top: "1vw" }}
            className="absolute bg-primary h-9/10 sm:h-4/5 my-8 opacity-75 skew left width"
          />
        </div>

        {/* 2 x 2 */}
        <div className="sm:flex flex-wrap mb-8 pb-8">
          <div style={{ height: '40rem' }} className="relative w-full bg-gradient-grey-white">
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
          <div className="flex flex-wrap justify-center items-center w-full md:w-1/2 h-screen-w md:h-screen-w-1/2 bg-gradient-grey-white">
            <div className="w-3/4 block text-center p-4">
              <img
                src="/images/logo-icon.svg"
                alt="trifecta logo"
                className="w-1/2 m-auto"
              />
              <h3 className="font-gotham-bold text-5xl leading-none my-4 text-primary">
                see for yourself
              </h3>
              <Button primary to="/gallery">view our gallery</Button>
            </div>
          </div>
          <div
            style={{ backgroundImage: "url(/images/feat-gallery.jpg)" }}
            className="h-screen-w w-full md:w-1/2 md:h-screen-w-1/2 bg-center bg-cover"
          />
        </div>

        {/* Team */}
        <div className="flex flex-wrap justify-center max-w-3xl mx-auto py-6 md:my-6 mb-4">
          <h2 className="font-gotham-bold leading-tight w-5/6 text-4xl mb-4 text-center gotham-bold text-primary text-4xl leading-none">
            Our team is led by a <span className="text-black">Trifecta</span> of Los
            Angeles Painting Experts
          </h2>
          <p className="text-xl w-5/6 leading-normal text-center font-light mb-8">
            Ean, Chris and Allan embody the term Trifecta. Each with their own
            unique skill set, the trio have formed a premiere Los Angeles painting
            company, with a focus, drive and collective desire to deliver for their
            clients.
          </p>
          {["Ean", "Chris", "Allan"].map(name => (
            <div className="m-4 sm:w-2/5 md:w-1/4">
              <img
                className="w-full"
                src="http://via.placeholder.com/300x350"
                alt="placeholders"
              />
            </div>
          ))}
        </div>

        {/* Hero 3 */}
        <div
          style={{ backgroundImage: `url(${bkgMap})` }}
          className="relative bg-no-repeat bg-cover bg-center py-8"
        >
          <div className="flex flex-wrap justify-center items-center py-6">
            <div className="realtive z-10 py-8 text-white max-w-3xl">
              <div className="px-4 py-8 w-screen-3/4 max-w-screen-3/4">
                <h1 className="font-gotham-bold mb-1 text-5xl leading-none mb-8">
                  Areas We Serve
                </h1>
                <h2 className="font-gotham-medium font-semibold text-3xl mb-4">
                  Commercial
                </h2>
                <p className="text-base font-light leading-normal mb-6">
                  Santa Clarita south to Long Beach & Oxnard east to Pasadena.
                </p>
                <h2 className="font-gotham-medium font-semibold text-3xl mb-4">
                  Residential
                </h2>
                <p className="text-base font-light leading-normal mb-4">
                  San Fernando Valley: Calabasas, West Hills, Woodland Hills,
                  Tarzana, Encino, Sherman Oaks, Studio City, Toluca Lake
                </p>
                <p className="text-base font-light leading-normal">
                  Los Angeles: Santa Monica, Brentwood, Bel Air, Beverly Hills,
                  Hollywood, West Hollywood
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ top: "1vw" }}
            className="absolute bg-primary h-9/10 sm:h-4/5 my-8 opacity-75 skew left width"
          />
        </div>
      </div>
    )
  }
}

export default IndexPage;
