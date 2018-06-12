import React from "react";
import Button from "../../components/Button";
import { H3 } from "../../components/Typography";

export default () => (
  <div className="bg-primary py-8 my-8 text-center rounded">
    <H3 className="text-white">
      <span className="text-2xl">Contact us today to discuss your project:{" "}</span>
      <br />
      <a className="no-underline text-white" href={`tel:+${process.env.PHONE}`}>
        {process.env.PHONE}
      </a>
    </H3>
    <Button to="/contact" type="submit">
      Set an appointment
    </Button>
  </div>
);
