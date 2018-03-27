import '../../node_modules/normalize.css/normalize.css'
import React, { Component } from 'react'
import Helmet from 'react-helmet'

import styles from './index.module.css'
console.log(styles)

export default ({ children }) => (
  <div>
    <Helmet 
      title="Further Gatsby Starter"
    />
    <div className={styles.container}>
      {children()}
    </div>
  </div>
)