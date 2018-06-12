import React, { Component } from "react"
import Img from "gatsby-image"

import styles from "./style.module.css"

export const FullWidth = ({ img, className = "" }) => <img src={img} className={`block rounded ${styles.maxWidth} ${className}`} alt="" />
  
export const TwoUp = () =>
  <div className="flex flex-wrap justify-between">
    <img style={{ display: 'inline-block', margin: '1rem 0', width: '49%' }} src="http://via.placeholder.com/438x246" alt="" />
    <img style={{ display: 'inline-block', margin: '1rem 0', width: '49%' }} src="http://via.placeholder.com/438x246" alt="" />
  </div>

export const ThreeUp = () =>
  <div className="flex flex-wrap justify-between">
    <img style={{ display: 'inline-block', margin: '1rem 0', width: '32%' }} src="http://via.placeholder.com/292x219" alt="" />
    <img style={{ display: 'inline-block', margin: '1rem 0', width: '32%' }} src="http://via.placeholder.com/292x219" alt="" />
    <img style={{ display: 'inline-block', margin: '1rem 0', width: '32%' }} src="http://via.placeholder.com/292x219" alt="" />
  </div>

export const FourUp = () =>
  <div className="flex flex-wrap justify-between">
    <img style={{ display: 'inline-block', margin: '1rem 0', width: '24%' }} src="http://via.placeholder.com/219x219" alt="" />
    <img style={{ display: 'inline-block', margin: '1rem 0', width: '24%' }} src="http://via.placeholder.com/219x219" alt="" />
    <img style={{ display: 'inline-block', margin: '1rem 0', width: '24%' }} src="http://via.placeholder.com/219x219" alt="" />
    <img style={{ display: 'inline-block', margin: '1rem 0', width: '24%' }} src="http://via.placeholder.com/219x219" alt="" />
  </div>
