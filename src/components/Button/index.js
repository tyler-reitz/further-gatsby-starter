import React, { Component } from "react";

import styles from "./style.module.css";

export default ({ children, className, primary, ...props }) => {
  const { button, left, width, skew, button_z_index, skew_z_index } = styles;

  return (
    <button
      className={`relative ${button} bg-${
        primary ? "primary hover:bg-primary-dark" : "white hover:bg-grey-light"
      } px-4 py-2 rounded font-bold text-${
        primary ? "white" : "primary"
      } capitalize leading-normal whitespace-no-wrap mx-4 ${
        className ? className : ""
      } ${button_z_index}`}
      {...props}
    >
      {children}
    </button>
  );
};
