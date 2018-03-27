import React, { Component } from 'react'
import Helmet from 'react-helmet'

export default ({ children }) => (
  <div>
    <Helmet 
      title="Further Gatsby Starter"
    />
    <div 
      style={{
        margin: '0  auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45em',
        paddingTop: 0,
      }}>
      {children()}
    </div>
  </div>
)