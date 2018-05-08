import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import CTA from "../../components/CTA";

class PageContainer extends Component {
  render() {
    const { children, bgImg, className, location } = this.props;

    return (
      <section className="pl-4 flex-grow w-3/5">
        {children}
        {!/contact/.test(location.pathname) && <CTA />}
      </section>
    );
  }
}

export default withRouter(PageContainer);
