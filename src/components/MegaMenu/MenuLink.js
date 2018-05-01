import React, { Component } from "react"
import Link from "gatsby-link"

export default ({ to, children, ...props }) => (
  <Link
    to={to}
    className="no-underline text-grey-lighter"
  >
    {children}
  </Link>
);
