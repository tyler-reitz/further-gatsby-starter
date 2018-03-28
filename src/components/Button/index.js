import React, { Component } from 'react'

export default ({ children }) => (
  <button className="bg-grey hover:bg-grey-darker px-4 py-2 rounded font-bold text-white">
    {children}
  </button>
)