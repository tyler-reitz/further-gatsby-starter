import React, { Component } from "react"
import Link from "gatsby-link"

export default ({ to, children, className, ...props }) => {
  return (
    <Link
      to={to}
      className={`block py-4 px-4 no-underline ${className}`}
    >
      {children}
    </Link>
  )
};
