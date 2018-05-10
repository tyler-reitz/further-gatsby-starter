import React, { Component } from 'react'

class Input extends Component {
  render() {
    const { type, placeholder, className, required, ...props } = this.props

    return (
      <input
        type={type ? type : "text"}
        placeholder={ placeholder ? placeholder : "" }
        style={{ boxShadow: '0 2px 30px 0 rgba(0,0,0,0.10)'}}
        className={`border border-grey-light border-solid text-xl leading-tight font-light mb-8 p-4 ${className}`}
        onChange={(e, el) => props.handleChange(e, el)}
        required
        {...props}
      />
    )
  }
}

export default Input