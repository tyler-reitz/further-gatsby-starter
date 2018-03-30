import React, { Component } from 'react'

export default ({ children, className }) => {
  console.log(className)

  return (
    <button className="bg-grey hover:bg-grey-darker px-4 py-2 rounded font-bold text-white">
      {children}
    </button>
  )
}