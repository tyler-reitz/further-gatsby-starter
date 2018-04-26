import React, { Component } from 'react'

import styles from './style.module.css'


export default ({ children, className, primary, ...props }) => {
  const { left, width, skew, button_z_index, skew_z_index } = styles

  return (
    <button className={`relative bg-${primary ? 'primary' : 'white'} px-4 py-2 rounded font-bold text-${ primary ? 'white' : 'primary' } capitalize leading-normal whitespace-no-wrap mx-4 ${className ? className : '' } ${button_z_index}`}>
      {children}
      <div className={`absolute bg-${primary ? 'primary' : 'white'} w-full h-full pin-t pin-l ${skew} ${left} ${width} ${skew_z_index}`}></div>
    </button>
  )
}