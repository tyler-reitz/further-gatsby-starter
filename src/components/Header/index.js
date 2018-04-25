import React, { Component } from "react"
import Link from "gatsby-link"

import logo from "../../assets/images/logo.svg"

import MegaMenu from '../MegaMenu'
import Button from '../Button'

class Header extends Component {

  state = {
    windowWidth: ''
  }

  componentDidMount() {
    this.setState({ windowWidth: window.innerWidth })

    window.addEventListener('resize', (e) => {
      const { innerWidth } = window
      this.setState({ windowWidth: innerWidth })

      if (innerWidth > 768) {
        this.setState({ windowWidth: innerWidth })

        const main = document.getElementById('main')
        const mobileMenu = document.getElementById('mega-menu')

        main.style.transform = ""

        if (innerWidth < 768 ) {
          setTimeout(() => mobileMenu.style.display = "none", 300)
        }
      }
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    const main = document.getElementById('main')
    const mobileMenu = document.getElementById('mega-menu')

    if (!main.style.transform) {
      main.style.transform = "translateX(-75vw)"
      mobileMenu.style.display = "block"
      return 
    }
    
    main.style.transform = ""
    setTimeout(() => mobileMenu.style.display = "none", 300)
  };

  render() {
    return (
      <nav className="bg-white">
        <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
          <p className="hidden md:block text-primary w-1/5">
            Serving the Greater Los Angeles area for all your painting needs.
          </p>

          <Link to="/" className="flex items-center w-1/5">
            <img className="w-full" src={logo} alt="company logo" />
          </Link>

          <button
            className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-primary"
            onClick={this.handleClick}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <div className="hidden w-1/5 md:flex flex-col text-center">
            <a className="font-gotham-bold no-underline text-primary font-semibold text-2xl mb-2" href="tel:+13239827609">(888) 888-8888</a>
            <Button primary>set an appointment</Button>
          </div>
        </div>

        <MegaMenu 
          mode={ this.state.windowWidth > 768 ? 'horizontal' : 'inline' }
        />
      </nav>
    )
  }
}

export default Header;