import React, { Component } from 'react'

let stylesStr
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css')
  } catch (e) {
     (e)
  }
}

export default class HTML extends Component {

  state = {
    url: ''
  }

  componentDidMount() {
    this.setState({
      url: location.href
    })
  }
  
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
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="city" content="Los Angeles" />
          <meta name="country" content="United States (usa)" />
          <meta name="state" content="California" />
          <meta name="zipcode" content="90041" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={process.env.SEO_TITLE} />
          <meta property="og:description" content={process.env.SEO_DESCRIPTION} />
          <meta property="og:url" content={`trifect-dev.influx-marketing.com`} />
          <meta property="og:site_name" content={process.env.SEO_SITE_NAME} />
          <meta property="og:image" content={`tbd`} />
          <link rel="icon" type="image/png" href="/favicon.png" />
          { headComponents }
          {/* <link rel="stylesheet" href="https://use.typekit.net/ykn6nrn.css" /> */}
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