import React from "react";
import Button from "../../components/Button";
import MegaMenu from "../../components/MegaMenu";
import { maxWidth, minWidth } from "./style.module.css";



export default () => (
  <div className="pr-4">
    <aside className={`hidden md:block w-screen-1/5 py-2 mx-4 text-base rounded ${minWidth} ${maxWidth}`}>
      <div className="flex flex-col text-center p-8 pt-2">
        <h2 className="mb-2 text-3xl font-thin">Contact us today to discuss your project</h2>
        <a
          className="font-gotham-bold no-underline text-primary font-semibold text-2xl mb-2"
          href={`tel:+${global.phone}`}
        >
          {global.phone}
        </a>
        <Button to="/contact" primary>set an appointment</Button>
      </div>
      <div className="bg-primary">
        <MegaMenu mode="inline" />
      </div>
    </aside>
  </div>
)