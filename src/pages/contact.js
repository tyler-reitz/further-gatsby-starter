import React, { Component } from "react";
import PageContainer from "../components/PageContainer";
import Button from "../components/Button";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Rule from "../components/Rule";
import { H1, H2, H3, H4, P1, P2, P3 } from "../components/Typography";

export default () => (
  <PageContainer>
    <H1>Contact Us</H1>
    <Rule />
    <ul className="md:flex md: flex-row md:justify-around lg:justify-center list-reset leading-loose text-justify p-4">
      <li className="w-1/4 mx-4">
        <H4>
          Phone:{" "}
          <a
            className="no-underline whitespace-no-wrap"
            href="tel+:(888) 888-8888"
          >
            (888) 888-8888
          </a>
        </H4>
      </li>
      <li className="w-1/4 mx-4">
        <H4>
          Fax:{" "}
          <a
            className="no-underline whitespace-no-wrap"
            href="tel+:(888) 888-0000"
          >
            (888) 888-8080
          </a>
        </H4>
      </li>
      <li className="w-1/4 mx-4">
        <H4>
          Address:{" "}
          <a
            className="no-underline whitespace-no-wrap"
            href="https://www.google.com/maps/place/Further./@34.1399754,-118.1537657,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c37a4848fe75:0xb205bab15d04167b!8m2!3d34.139971!4d-118.151577"
            target="_blank"
          >
            123 This St., City, State Zip
          </a>
        </H4>
      </li>
    </ul>
    <Rule />
    <H3>Send Us A Message</H3>
    <form action="" className="p-4 max-w-lg mx-auto">
      <Input placeholder="name*" className="w-full" />
      <Input placeholder="email*" type="email" className="w-full" />
      <Input placeholder="phone*" className="w-full" /> 
      <Textarea placeholder="type of project*" className="w-full" />
      <Textarea placeholder="project notes*" className="w-full" />      
      <Button primary type="submit">
        Submit
      </Button>
    </form>
  </PageContainer>
);
