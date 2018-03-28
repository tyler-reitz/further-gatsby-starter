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
      {children()}
      <Footer />
    </div>
  </div>
)