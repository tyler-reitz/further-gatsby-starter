import React, { Component } from 'react'

export default ({ title, imgUrl }) => {
  return (
    <div className="flex-shrink w-4/5 sm:w-45/100 lg:w-9/50 overflow-hidden mx-2 mb-8">
      <h3 className="font-semibold text-primary text-center capitalize mb-2">{ title }</h3>
      <img className="w-full" src={`/images/${imgUrl}`} alt="Sunset in the mountains" />
    </div>
  )
}