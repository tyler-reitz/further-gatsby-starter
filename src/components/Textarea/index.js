import React, { Component } from 'react'

class Input extends Component {
  render() {
    const { type, placeholder, className, style } = this.props

    return (
      <textarea 
        cols="30"
        rows="10"
        placeholder={ placeholder ? placeholder : "" }
        style={{ boxShadow: '0 2px 30px 0 rgba(0,0,0,0.10)'}}
        className={`border border-grey-light border-solid text-xl leading-tight capitalize font-light mb-8 p-4 ${className}`}
      ></textarea>
    )
  }
}

export default Input