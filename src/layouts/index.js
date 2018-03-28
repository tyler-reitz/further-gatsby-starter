import React, { Component } from 'react'
import Helmet from 'react-helmet'

import './index.css'

export default ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
    <div>
      <Helmet 
        title="Further Gatsby Starter"
      />
      <div className="flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
        {children()}
      </div>
    </div>
  </div>
)