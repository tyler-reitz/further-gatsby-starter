import React, { Component } from "react";
import Link from "gatsby-link";
const slugify = require("slugify");

class MenuLink extends Component {
  render() {
    const { to, children, className, sub, ...props } = this.props;

    return (
      <Link
        to={to}
        className={`block py-3 px-6 no-underline text-sm ${className}`}
        activeClassName={sub ? 'underline' : 'bg-primary-dark'}
        {...props}
      >
        {children}
      </Link>
    );
  }
}

export default MenuLink;
