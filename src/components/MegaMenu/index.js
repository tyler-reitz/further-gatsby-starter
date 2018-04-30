import React, { Component } from 'react'
import Link from 'gatsby-link'
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu'

import './style.css'

class MegaMenu extends Component {
  render() {
    const { mode, ...props } = this.props
    
    return (
      <nav 
        id="mega-menu" 
        className={
          mode === "inline" && mode !== undefined
            ? "absolute bg-primary text-white hidden pin-t w-screen-3/4 h-screen" 
            : "bg-primary text-white hidden md:block"
        }
        style={props.style}
      >
        <Menu 
          mode={mode}
          className={
            mode === 'horizontal' 
              ? "flex justify-around max-w-4xl mx-auto list-reset leading-loose"
              : "list-reset leading-loose"
          }
          getPopupContainer={(menuItemEl) => menuItemEl}
        >
          <MenuItem key="1" className="bg-primary text-grey-lighter">
            <Link to="/" className="no-underline text-grey-lighter">Home</Link>
          </MenuItem>
          <MenuItem key="2" className="bg-primary text-grey-lighter">
            <Link to="/about" className="no-underline text-grey-lighter">About Us</Link>
          </MenuItem>
          <SubMenu key="3" title="Commercial Painting" className="bg-primary text-grey-lighter">
            <MenuItem key="3-1">Commercial Painting</MenuItem>
          </SubMenu>
          <SubMenu key="4" title="Residential Painting" className="bg-primary text-grey-lighter">
            <MenuItem key="4-1">Residential Painting</MenuItem>
          </SubMenu>
          <SubMenu key="5" title="Specialty Services" className="bg-primary text-grey-lighter">
            <MenuItem key="5-1">Specialty Services</MenuItem>
          </SubMenu>
          <MenuItem key="7" className="bg-primary text-grey-lighter">
            <Link to="/gallery" className="no-underline text-grey-lighter">Gallery</Link>
          </MenuItem>
          <MenuItem key="8" className="bg-primary text-grey-lighter">
            <Link to="/service-areas" className="no-underline text-grey-lighter">Service Areas</Link>
          </MenuItem>
          <MenuItem key="9" className="bg-primary text-grey-lighter">
            <Link to="/reviews" className="no-underline text-grey-lighter">Reviews</Link>
          </MenuItem>
          <MenuItem key="10" className="bg-primary text-grey-lighter">
            <Link to="/contact" className="no-underline text-grey-lighter">Contact</Link>
          </MenuItem>
        </Menu>
      </nav>
    )
  }
}

export default MegaMenu