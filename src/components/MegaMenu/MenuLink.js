import React, { Component } from "react";
import Link from "gatsby-link";
const slugify = require("slugify");

class MenuLink extends Component {
  render() {
    const { to, children, className, sub, ...props } = this.props;

    return (
      <Link
        to={to}
        className={`block py-4 px-4 no-underline ${className}`}
        activeClassName={sub ? 'underline' : 'bg-primary-light'}
        {...props}
      >
        {children}
      </Link>
    );
  }
}

export default MenuLink;
