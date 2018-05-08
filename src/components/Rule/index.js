import React, { Component } from 'react'

export default ({ className }) => (
  <hr style={{ borderWidth: '.5px' }} className={`border border-solid border-grey my-4 ${className}`} />
)