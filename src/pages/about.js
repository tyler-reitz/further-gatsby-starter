import React, { Component } from 'react'
import Link from 'gatsby-link'
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu'
import Button from '../components/Button'

export default () => (
  <div className="flex flex-row-reverse items-start max-w-2xl mx-auto p-4 md:p-8">
    <div className="sm:w-screen-2/3 mx-4 py-2 leading-normal">
      <h2 className="mb-2">About Us</h2>
      <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto, quaerat odit eum expedita harum accusamus est, quis soluta placeat beatae blanditiis ea assumenda excepturi laborum saepe delectus ipsam! Repellat?</p>
      <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti dolor est deserunt maxime ipsam dolorem natus quas repellat ipsa cumque perferendis possimus minima, ex ratione. Voluptatem tenetur accusantium sapiente.</p>
      <img className="w-full sm:p-4 mb-4" src="http://via.placeholder.com/320x195" alt="placholder" />
      <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto, quaerat odit eum expedita harum accusamus est, quis soluta placeat beatae blanditiis ea assumenda excepturi laborum saepe delectus ipsam! Repellat?</p>
      <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti dolor est deserunt maxime ipsam dolorem natus quas repellat ipsa cumque perferendis possimus minima, ex ratione. Voluptatem tenetur accusantium sapiente.</p>
      <div className="pt-4 pb-8 text-center">
      <h2 className="leading-loose text-2xl mb-2">Call To Action</h2>
        {/* <button className="bg-grey hover:bg-grey-darker w-5/6 sm:w-2/5 px-8 py-4 rounded font-bold text-white">Submit</button> */}
        <Button primary type="submit">Submit</Button>
      </div>
    </div>
    <div className="hidden sm:block w-screen-1/3 mx-4 text-base border border-color-grey rounded">
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
        </SubMenu>
      </Menu>
    </div>
  </div>
)