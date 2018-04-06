import React, { Component } from "react"
import Link from "gatsby-link"

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
      <nav className="bg-grey ">
        <div className="flex flex-wrap items-center justify-between max-w-2xl mx-auto p-4 md:p-8">
          <Link to="/" className="flex items-center no-underline text-white">
            <svg
              className="fill-current hx1-8 mr-2 w-12"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="hidden md:block font-bold text-5xl tracking-tight">
              Further
            </span>
          </Link>

          <button
            className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
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

          <div className="hidden md:flex flex-col text-center">
            <a className="text-2xl mb-2" href="tel:+13239827609">(888) 888-8888</a>
            <button className="bg-grey-darker hover:bg-grey-darkest px-4 py-2 rounded font-bold text-white leading-normal w-screen-1/4">Contact Us</button>
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