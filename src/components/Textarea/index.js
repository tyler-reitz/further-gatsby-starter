import React, { Component } from 'react'

class Input extends Component {
  render() {
    const { type, placeholder, className, style, rows, ...props } = this.props

    return (
      <textarea 
        cols="30"
        rows={rows || 10}
        placeholder={ placeholder ? placeholder : "" }
        style={{ 
          ...style,
          resize: 'none' 
        }}
        className={
          `border border-grey-light border-solid text-xl leading-tight font-light mb-8 p-4 ${className}`
        }
        {...props} 
      ></textarea>
    )
  }
}

export default Input