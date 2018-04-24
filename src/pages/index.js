import './style.scss'
import React from "react";

import Hero from "../components/Hero";
import Card from "../components/Card";
import Carousel2 from "../components/Carousel";
import badge from "../assets/images/badge.svg";
import Button from "../components/Button";
import Input from "../components/Input";

import bkgLA from "../assets/images/bkg-losangeles.jpg";
import bkgMap from "../assets/images/bkg-map.jpg";

const IndexPage = () => (
  <div>

    <div style={{ backgroundImage: `url(${bkgLA})`}} className="relative bg-no-repeat bg-cover bg-center py-8" >
      <div className="flex flex-wrap justify-center items-center py-6" >
        <div className="realtive z-10 py-8 text-white max-w-4xl">
          <div style={{ maxWidth: "75vw" }} className="px-4 py-8">
            <h1 className="font-gotham-bold mb-2 text-5xl leading-none">Yes, we do commercial painting.</h1>
            <small className="font-gotham-medium text-3xl mb-4">Expert Los Angeles Commercial Painters</small>
            <p className="text-base font-light leading-normal my-6 w-3/4">We’ve painted hotels and apartments, office buildings and hospitals, shopping centers and parking garages. We’ve worked with HOAs and property management companies. Let Trifecta work for you.</p>
            <Button className="mr-4 mb-4">Find out more</Button>
            <Button className="mr-4 mb-4">Set an appointment</Button>
          </div>
        </div>
      </div>
      <div style={{ top: '1vw' }} className="absolute bg-primary h-9/10 sm:h-4/5 my-8 opacity-75 skew left width"></div>
    </div>

    <div className="flex flex-wrap justify-center max-w-4xl mx-auto py-6 md:my-6 mb-4">
      <h2 className="font-gotham-bold leading-tight w-5/6 text-5xl mb-4 text-center gotham-bold text-primary text-4xl leading-none">
        Communication is our greatest strength. Talk to us.
      </h2>
      <p className="text-xl w-5/6 leading-normal text-center font-light">
        We pride ourselves on our relationships with our clients, our crews, and
        our suppliers. It’s all part of a thorough bidding process and detailed
        specification writing, so you get the best possible experience. Get
        started below.
      </p>
    </div>

    <div className="flex flex-wrap justify-center max-w-4xl mx-auto py-6 md:my-6">
      {[
        { title: "Office Buildings", imgUrl: "feat-retail.jpg" },
        { title: "Retail", imgUrl: "feat-retail.jpg" },
        { title: "Apartments", imgUrl: "feat-apartments.jpg" },
        { title: "Parking Garages", imgUrl: "feat-parking.jpg" },
        { title: "HOA", imgUrl: "feat-hoa.jpg" },
        { title: "Hotels", imgUrl: "feat-hotels.jpg" },
        { title: "Hospitals", imgUrl: "feat-hospitals.jpg" },
        { title: "House Painting", imgUrl: "feat-house.jpg" },
        { title: "Interior Painting", imgUrl: "feat-interior.jpg" },
        { title: "High-End Estates", imgUrl: "feat-estate.jpg" }
      ].map((_, idx) => <Card key={idx} title={_.title} imgUrl={_.imgUrl} />)}
    </div>

    <div className="flex flex-wrap justify-center max-w-4xl mx-auto p-4 py-8 mb-8">
      <h3 className="text-3xl text-center text-primary mb-8">
        Contact us today to discuss your project and how we can help:{" "}
        <a className="no-underline text-primary" href="tel:888-123-4567">
          888-123-4567  
        </a>
      </h3>
      <form className="flex flex-wrap justify-center" action="/">
        <Input placeholder="name*" className="w-full lg:w-7/25" />
        <Input type="email" placeholder="email*" className="w-full lg:w-7/25" />
        <Input placeholder="phone*" className="w-full lg:w-7/25" />
        <Input placeholder="type of project*" className="w-full lg:w-45/100" />
        <Input placeholder="project notes*" className="w-full lg:w-45/100" />
        <Button primary>set an appointment</Button>
      </form>
    </div>

    <div style={{ backgroundImage: `url(${bkgLA})`}} className="relative bg-no-repeat bg-cover bg-center py-8" >
      <div className="flex flex-wrap justify-center items-center py-6" >
        <div className="realtive z-10 py-8 text-white max-w-4xl">
          <div style={{ maxWidth: "75vw" }} className="px-4 py-8">
            <h1 className="font-gotham-bold mb-2 text-5xl leading-none">Los Angeles building partners</h1>
            <small className="font-gotham-medium text-3xl mb-4">Who Understand Your Goals and Concerns</small>
            <p className="text-base font-light leading-normal my-6 w-3/4">With over XX years combined experience, Trifecta Painting specializes in humanizing the world of commercial and residential painting services. We know how frustrating it can be to find the best commercial painters in Los Angeles. That’s why we insist on things like a thorough bidding process, and well-written paint specifications that outline the entire course of your project.</p>
            <p className="text-base font-light leading-normal my-8 w-3/4">We’ve established strong relationships with paint suppliers, allowing us to outfit your project with top-quality paint and supplies for a cost that is both competitive and economical. With experienced crews, including expert high-reach equipment operators, the professionalism of our work is defined by our dedication to safety and an unrivaled cleanliness on the job site.</p>
          </div>
        </div>
      </div>
      <div style={{ top: '1vw' }} className="absolute bg-primary h-9/10 sm:h-4/5 my-8 opacity-75 skew left width"></div>
    </div>

    <div className="sm:flex flex-wrap mb-8 pb-8">
      <div
        style={{ backgroundImage: "url(/images/feat-reviews.jpg)" }}
        className="h-screen-w sm:w-1/2 sm:h-screen-w-1/2 bg-center bg-cover"
      />
      <div className="h-screen-w sm:w-1/2 sm:h-screen-w-1/2">
        <Carousel2 />
      </div>
      <div className="h-screen-w sm:w-1/2 sm:h-screen-w-1/2">
        <div className="block text-center p-4">
          <img
            src="/images/logo-icon.svg"
            alt="trifecta logo"
            className="w-1/2 m-auto"
          />
          <h3 className="text-5xl leading-none my-4 text-primary">
            see for yourself
          </h3>
          <Button primary>view our gallery</Button>
        </div>
      </div>
      <div
        style={{ backgroundImage: "url(/images/feat-gallery.jpg)" }}
        className="h-screen-w sm:w-1/2 sm:h-screen-w-1/2 bg-center bg-cover"
      />
    </div>

    <div className="flex flex-wrap justify-center max-w-4xl mx-auto py-6 md:my-6 mb-4">
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
        <div className="m-4 md:w-1/4">
          <img
            className="w-full"
            src="http://via.placeholder.com/300x350"
            alt="placeholders"
          />
        </div>
        ))}
    </div>

    <div style={{ backgroundImage: `url(${bkgMap})`}} className="relative bg-no-repeat bg-cover bg-center py-8" >
      <div className="flex flex-wrap justify-center items-center py-6" >
        <div className="realtive z-10 py-8 text-white max-w-4xl">
          <div style={{ maxWidth: "75vw" }} className="px-4 py-8">
            <h1 className="font-gotham-bold mb-1 text-5xl leading-none mb-8">Areas We Serve</h1>
            <small className="font-gotham-medium text-3xl mb-4">Commercial</small>
            <p className="text-base font-light leading-normal mb-6">Santa Clarita south to Long Beach & Oxnard east to Pasadena.</p>
            <small className="font-gotham-medium text-3xl mb-4">Residential</small>
            <p className="text-base font-light leading-normal mb-4">San Fernando Valley: Calabasas, West Hills, Woodland Hills, Tarzana, Encino, Sherman Oaks, Studio City, Toluca Lake</p>
            <p className="text-base font-light leading-normal">Los Angeles: Santa Monica, Brentwood, Bel Air, Beverly Hills, Hollywood, West Hollywood</p>
          </div>
        </div>
      </div>
      <div style={{ top: '1vw' }} className="absolute bg-primary h-9/10 sm:h-4/5 my-8 opacity-75 skew left width"></div>
    </div>

  </div>
);

export default IndexPage;
