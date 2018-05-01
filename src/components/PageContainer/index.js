import React, { Component } from "react";
import Link from "gatsby-link";
import MegaMenu from "../MegaMenu";
import Button from "../Button";

class PageContainer extends Component {
  render() {
    const { children } = this.props
    
    return (
      <div className="flex flex-row-reverse items-start max-w-2xl mx-auto p-4 md:p-8">
        <div className="sm:w-screen-2/3 mx-4 py-2 leading-normal">{children}</div>
        <div className="hidden sm:block w-screen-1/3 mx-4 text-base border border-color-grey rounded">
          <MegaMenu />
        </div>
      </div>
    )
  }
}

export default PageContainer