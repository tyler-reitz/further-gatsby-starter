import React from "react";
import Form from "../components/Form";
import PageContainer from "../components/PageContainer";
import Rule from "../components/Rule";
import { H1, H3, H4 } from "../components/Typography";
import Helmet from "react-helmet"

export default () => (
  <PageContainer>
    <Helmet>
      <title>Trifecta | Contact</title>
    </Helmet>

    <H1>Contact Us</H1>
    <Rule />
    <ul className="md:flex md: flex-row md:justify-around lg:justify-center list-reset leading-loose text-justify p-4">
      <li className="md:w-1/2 mx-4 text-center">
        <H4>
          <a
            className="no-underline whitespace-no-wrap text-primary text-3xl"
            href={`tel+:${process.env.PHONE}`}
          >
            {process.env.PHONE}
          </a>
        </H4>
      </li>
      <li className="md:w-1/2 mx-4 text-center">
        <H4>
          <a
            className="no-underline whitespace-no-wrap text-primary text-3xl"
            href="https://www.google.com/maps/place/Further./@34.1399754,-118.1537657,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c37a4848fe75:0xb205bab15d04167b!8m2!3d34.139971!4d-118.151577"
            target="_blank"
          >
            {process.env.ADDRESS}
          </a>
        </H4>
      </li>
    </ul>
    <Rule />
    <H3 className="capitalize">Set an appointment</H3>
    <Form formElementClassName="w-full" textAreaHeight={5} />
  </PageContainer>
);
