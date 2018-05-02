import React, { Component } from "react";
import Link from "gatsby-link";
import MegaMenu from "../MegaMenu";
import Button from "../Button";

class PageContainer extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="flex flex-row-reverse items-start max-w-3xl mx-auto p-4 md:p-8">
        <section className="md:w-screen-2/3 mx-4 py-2 leading-normal">
          {children}
        </section>
        <aside className="hidden md:block bg-primary w-screen-1/4 py-2 mx-4 text-base border rounded-lg border-color-grey rounded">
          <MegaMenu mode="inline" />
        </aside>
      </div>
    );
  }
}

export default PageContainer;
