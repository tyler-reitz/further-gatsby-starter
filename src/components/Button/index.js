import React, { Component } from "react";
import Link from "gatsby-link";

import styles from "./style.module.css";

export default ({ children, className, primary, to, ...props }) => {
  const { button, left, width, skew, button_z_index, skew_z_index } = styles;

  const Tag = to ? Link : "button";

  return (
    <Tag
      to={to}
      className={`inline-block relative ${button} bg-${
        primary ? "primary hover:bg-primary-light" : "white hover:bg-grey-light"
      } px-4 py-2 rounded font-bold text-${
        primary ? "white" : "primary"
      } capitalize leading-normal whitespace-no-wrap no-underline mx-4 ${
        className ? className : ""
      } ${button_z_index}`}
      {...props}
    >
      {children}
    </Tag>
  );
};
