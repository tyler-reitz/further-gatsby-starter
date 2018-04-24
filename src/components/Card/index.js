import React, { Component } from 'react'

export default ({ title, imgUrl }) => {
  return (
    <div className="flex-shrink md:w-45/100 lg:w-9/50 overflow-hidden mx-2 mb-8">
      <h3 className="font-medium text-primary text-center capitalize">{ title }</h3>
      <img className="w-full" src={`/images/${imgUrl}`} alt="Sunset in the mountains" />
    </div>
  )
}