import React, { Component } from 'react'
import Helmet from 'react-helmet'

import '../assets/fonts/Gotham.css'
import './index.css'
import './style.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default ({ children }) => (
  <div id="main" className="relative flex flex-col nimbus-sans min-h-screen text-grey-darkest">
    <Helmet />
    <Header />
    {children()}
    <Footer />
  </div>
)