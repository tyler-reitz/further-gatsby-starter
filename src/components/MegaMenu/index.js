import React, { Component } from 'react'
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu'

import './styles.css'

export default () => (
  <nav id="mega" className="bg-grey-darker text-white hidden md:block">
    <Menu 
      mode="horizontal"
      className="flex justify-center list-reset leading-loose"
      getPopupContainer={(menuItemEl) => menuItemEl}
    >
      <SubMenu key="1" title="Submenu 1" className="bg-grey-darker text-grey-lighter">
        <MenuItem key="1-1">item1-1</MenuItem>
        <MenuItem key="1-2">item1-2</MenuItem>
        <MenuItem key="1-3">item1-3</MenuItem>
        <MenuItem key="1-4">item1-4</MenuItem>
        <MenuItem key="1-5">item1-5</MenuItem>
        <MenuItem key="1-6">item1-4</MenuItem>
        <MenuItem key="1-7">item1-5</MenuItem>
      </SubMenu>
      <SubMenu key="2" title="Submenu 2" className="bg-grey-darker text-grey-lighter">
        <MenuItem key="2-1">item2-1</MenuItem>
        <MenuItem key="2-2">item2-2</MenuItem>
        <MenuItem key="2-3">item2-3</MenuItem>
        <MenuItem key="2-4">item2-4</MenuItem>
        <MenuItem key="2-5">item2-5</MenuItem>
        <MenuItem key="2-6">item2-6</MenuItem>
      </SubMenu>
      <SubMenu key="3" title="Submenu 3" className="bg-grey-darker text-grey-lighter">
        <MenuItem key="3-1">item3-1</MenuItem>
        <MenuItem key="3-2">item3-2</MenuItem>
        <MenuItem key="3-3">item3-3</MenuItem>
        <MenuItem key="3-4">item3-4</MenuItem>
        <MenuItem key="3-5">item3-5</MenuItem>
      </SubMenu>
      <SubMenu key="4" title="Submenu 4" className="bg-grey-darker text-grey-lighter">
        <MenuItem key="4-1">item4-1</MenuItem>
        <MenuItem key="4-2">item4-2</MenuItem>
        <MenuItem key="4-3">item4-3</MenuItem>
        <MenuItem key="4-4">item4-4</MenuItem>
      </SubMenu>
      <SubMenu key="5" title="Submenu 5" className="bg-grey-darker text-grey-lighter">
        <MenuItem key="5-1">item5-1</MenuItem>
        <MenuItem key="5-2">item5-2</MenuItem>
        <MenuItem key="5-3">item5-3</MenuItem>
      </SubMenu>
      <SubMenu key="6" title="Submenu 6" className="bg-grey-darker text-grey-lighter">
        <MenuItem key="6-1">item6-1</MenuItem>
        <MenuItem key="6-2">item6-2</MenuItem>
      </SubMenu>
    </Menu>
  </nav>
)