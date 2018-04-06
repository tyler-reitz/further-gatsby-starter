import React, { Component } from 'react'
import Link from 'gatsby-link'
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu'

import './style.css'

class MobileMenu extends Component {
  render() {
    return (
      <div id="mobile-menu" className="bg-grey-darkest absolute text-grey pin-t w-screen-3/4 h-full">
        <Menu mode="inline" selectable={false} className="list-reset leading-loose">
          <MenuItem>
            <Link to="/" className="text-grey no-underline">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/about" className="text-grey no-underline">About</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/contact" className="text-grey no-underline">Contact</Link>
          </MenuItem>
          <SubMenu key="1" title="Submenu 1">
            <MenuItem key="1-1">item1-1</MenuItem>
            <MenuItem key="1-2">item1-2</MenuItem>
          </SubMenu>
          <SubMenu key="2" title="Submenu 2">
            <MenuItem key="2-1">item2-1</MenuItem>
            <MenuItem key="2-2">item2-2</MenuItem>
            <SubMenu key="2-3" title="Submenu 2-3" className="list-reset">
              <MenuItem key="2-3-1">item2-3-1</MenuItem>
              <MenuItem key="2-3-2">item2-3-2</MenuItem>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default MobileMenu