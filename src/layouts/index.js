import React, { Component } from 'react'
import Helmet from 'react-helmet'

import './index.css'
import './style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileMenu from '../components/MobileMenu'

export default ({ children }) => (
  <div id="main" className="relative flex flex-col font-sans min-h-screen text-grey-darkest">
    <div>
      <Helmet 
        title="Further Gatsby Starter"
      />
      <Header />
      {children()}
      <Footer />
      {/* <MobileMenu /> */}
    </div>
  </div>
)