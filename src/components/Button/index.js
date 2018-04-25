import React, { Component } from 'react'

export default ({ children, className, primary, ...props }) => {

  return (
    <button className={`bg-${primary ? 'primary' : 'white'} px-4 py-2 rounded font-bold text-${ primary ? 'white' : 'primary' } capitalize leading-normal ${className}`}>
      {children}
    </button>
  )
}