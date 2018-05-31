import React from "react";
import Button from "../../components/Button";
import { H3 } from "../../components/Typography";

export default () => (
  <div className="bg-primary py-8 my-8 text-center">
    <H3 className="text-white">
      Contact us today to discuss your project:{" "}
      <a className="no-underline text-white" href={`tel:+${global.phone}`}>
        {global.phone}
      </a>
    </H3>
    <Button to="/contact" type="submit">
      Set an appointment
    </Button>
  </div>
);
