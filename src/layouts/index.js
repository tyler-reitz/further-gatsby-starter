import React, { Component } from 'react'
import Helmet from 'react-helmet'

import './index.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default ({ children }) => (
  <div id="main" className="relative flex flex-col font-sans min-h-screen text-grey-darkest">
    <div>
      <Helmet 
        title="Further Gatsby Starter"
      />
      <Header />
      {children()}
      <Footer />
      <div id="mobile-menu" className="bg-grey-darkest absolute text-grey pin-t w-4/5 h-screen">
        Mobile Menu
      </div>
    </div>
  </div>
)