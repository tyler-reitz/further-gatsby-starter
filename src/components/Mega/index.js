import React, { Component } from 'react'
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu'

export default () => (
  <nav id="mega" className="bg-grey-darker text-white hidden md:block">
    <Menu mode="horizontal" className="flex justify-center list-reset leading-loose">
      <MenuItem>Home</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Contact</MenuItem>
      <SubMenu key="1" title="Submenu 1" className="bg-grey-darker text-grey-lighter">
        <MenuItem key="1-1">item1-1</MenuItem>
        <MenuItem key="1-2">item1-2</MenuItem>
      </SubMenu>
      <SubMenu key="2" title="Submenu 2" className="bg-grey-darker text-grey-lighter">
        <MenuItem key="2-1">item2-1</MenuItem>
        <MenuItem key="2-2">item2-2</MenuItem>
      </SubMenu>
      <SubMenu key="3" title="Submenu 3" className="bg-grey-darker text-grey-lighter">
        <MenuItem key="3-1">item3-1</MenuItem>
        <MenuItem key="3-2">item3-2</MenuItem>
      </SubMenu>
      <SubMenu key="4" title="Submenu 4" className="bg-grey-darker text-grey-lighter">
        <MenuItem key="4-1">item4-1</MenuItem>
        <MenuItem key="4-2">item4-2</MenuItem>
      </SubMenu>
    </Menu>
  </nav>
)