import React, { Component } from 'react'
import Helmet from 'react-helmet'

import './index.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
    <div>
      <Helmet 
        title="Further Gatsby Starter"
      />
      <Header />
      <div className="flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
        {children()}
      </div>
      <Footer />
    </div>
  </div>
)