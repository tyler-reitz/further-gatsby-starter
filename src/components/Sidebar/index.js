import React, { Component } from "react";

import MegaMenu from "../../components/MegaMenu";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

export default () => (
  <div className="pr-4">
    <aside className="hidden md:block w-screen-1/5 py-2 mx-4 text-base rounded">
      <div className="flex flex-col text-center p-8 pt-2">
        <a
          className="font-gotham-bold no-underline text-primary font-semibold text-2xl mb-2"
          href="tel:+13239827609"
        >
          (888) 888-8888
        </a>
        <Button primary>set an appointment</Button>
      </div>
      <div className="bg-primary">
        <MegaMenu mode="inline" />
      </div>
    </aside>
  </div>
)