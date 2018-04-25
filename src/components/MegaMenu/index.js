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
              ? "flex justify-center list-reset leading-loose"
              : "list-reset leading-loose"
          }
          getPopupContainer={(menuItemEl) => menuItemEl}
        >
          <MenuItem key="1" className="bg-primary text-grey-lighter">
            <Link to="/" className="no-underline text-grey-lighter">Home</Link>
          </MenuItem>
          <MenuItem key="2" className="bg-primary text-grey-lighter">
            <Link to="/about" className="no-underline text-grey-lighter">About</Link>
          </MenuItem>
          <MenuItem key="3" className="bg-primary text-grey-lighter">
            <Link to="/contact" className="no-underline text-grey-lighter">Contact</Link>
          </MenuItem>
          <SubMenu key="4" title="Submenu 4" className="bg-primary text-grey-lighter">
            <MenuItem key="4-1">item4-1</MenuItem>
          </SubMenu>
          <SubMenu key="5" title="Submenu 5" className="bg-primary text-grey-lighter">
            <MenuItem key="5-1">item5-1</MenuItem>
          </SubMenu>
          <SubMenu key="6" title="Submenu 6" className="bg-primary text-grey-lighter">
            <MenuItem key="6-1">item6-1</MenuItem>
          </SubMenu>
          <SubMenu key="7" title="Submenu 7" className="bg-primary text-grey-lighter">
            <MenuItem key="7-1">item7-1</MenuItem>
          </SubMenu>
        </Menu>
      </nav>
    )
  }
}

export default MegaMenu