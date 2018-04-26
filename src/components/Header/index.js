import React, { Component } from "react"
import Link from "gatsby-link"

import logo from "../../assets/images/logo.svg"

import MegaMenu from '../MegaMenu'
import Button from '../Button'

class Header extends Component {

  state = {
    windowWidth: '',
    isOpen: false
  }

  componentDidMount() {
    this.setState({ windowWidth: window.innerWidth })

    window.addEventListener('resize', (e) => {
      const { innerWidth } = window
      this.setState({ windowWidth: innerWidth })

      if (innerWidth >= 768) {
        this.setState({ windowWidth: innerWidth })

        const main = document.getElementById('main')
        const mobileMenu = document.getElementById('mega-menu')

        main.style.transform = ""

        if (innerWidth < 768) {
          setTimeout(() => mobileMenu.style.display = "none", 300)
        } else {
          mobileMenu.style.display = "block"
        }
      }
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }))

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
      <header className="relative z-10 bg-gradient-grey-white">
        <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
          <p className="hidden lg:block text-lg text-primary w-64 px-4">
            Serving the Greater Los Angeles area for all your painting needs.
          </p>

          <Link to="/" style={{ minWidth: 180 }} className="flex items-center w-1/3">
            <img className="w-full" src={logo} alt="company logo" />
          </Link>

          <button
            className="block md:hidden self-stretch w-12 p-2 text-primary"
            onClick={this.handleClick}
          >
            <svg
              className="fill-current w-full h-full"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <div className="hidden md:flex flex-col text-center">
            <a className="font-gotham-bold no-underline text-primary font-semibold text-2xl mb-2" href="tel:+13239827609">(888) 888-8888</a>
            <Button primary>set an appointment</Button>
          </div>
        </div>

        <MegaMenu 
          mode={ this.state.windowWidth && this.state.windowWidth < 768 ? 'inline' : 'horizontal' }
        />
      </header>
    )
  }
}

export default Header;