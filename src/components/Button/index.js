import React, { Component } from 'react'

export default ({ children, className, primary, ...props }) => {
  console.log(className)

  return (
    <button className={`bg-${primary ? 'primary' : 'white'} px-4 py-2 rounded font-bold text-${ primary ? 'white' : 'primary' } leading-normal sm:w-1/5 ${className}`}>
      {children}
    </button>
  )
}