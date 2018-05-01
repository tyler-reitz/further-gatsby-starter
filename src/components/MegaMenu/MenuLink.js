import React, { Component } from "react"
import Link from "gatsby-link"

export default ({ to, children, ...props }) => (
  <Link
    to={to}
    className="block py-4 px-4 hover:bg-primary-light no-underline text-grey-lighter"
  >
    {children}
  </Link>
);
