import React, { Component } from 'react'

const services = ['A', 'B', 'C', 'D', 'E', 'F']

export default () => (
  <nav id="mega" className="bg-grey-darker text-white hidden md:block">
    <ul className="flex flex-col sm:flex-row justify-between list-reset max-w-2xl mx-auto px-8">
      { services.map(name => 
          <li className="p-6 text-grey cursor-pointer text-sm" key={name}>{`Service ${name}`}</li>) 
      }
    </ul>
  </nav>
)