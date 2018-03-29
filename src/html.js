import React, { Component } from 'react'

let stylesStr
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css')
  } catch (e) {
    console.log(e)
  }
}

export default class HTML extends Component {
  render() {
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style 
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    
    const { headComponents, postBodyComponents } = this.props
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>Further Gatsby Starter</title>
          { headComponents }
          { css }
        </head>
        <body className="overflow-x-hidden">
          <div 
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          { postBodyComponents }
        </body>
      </html>
    )
  }
}