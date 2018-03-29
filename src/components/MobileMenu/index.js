import React, { Component } from 'react'
import Link from 'gatsby-link'
import Menu, { SubMenu, MenuItem } from 'rc-menu'


class MobileMenu extends Component {

  renderMenuItem = title => (
    <MenuItem key={title} className="leading-loose ">
      <Link className="no-underline text-grey capitalize" to={`/${title}`}>
        {title}
      </Link>
    </MenuItem>
  )

  render() {
    const { renderMenuItem } = this

    return (
      <div id="mobile-menu" className="bg-grey-darkest absolute text-grey pin-t w-4/5 h-screen">
        <Menu className="list-reset p-4">
          {
            ['home', 'about', 'contact']
              .map(item => 
                renderMenuItem(item)
              )
          }
        </Menu>
      </div>
    )
  }
}

export default MobileMenu