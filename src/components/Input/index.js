import React, { Component } from 'react'

class Input extends Component {
  render() {
    const { type, placeholder, className, style } = this.props

    return (
      <input 
        type={type ? type : "text"} 
        placeholder={ placeholder ? placeholder : "" } 
        className={`border border-grey-light border-solid text-xl leading-tight capitalize font-light sm:mx-6 mb-8 p-4 ${className}`}
        style={{ boxShadow: '0 2px 30px 0 rgba(0,0,0,0.10)'}}
      />
    )
  }
}

export default Input