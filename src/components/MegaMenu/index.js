import React, { Component } from "react";
import Link from "gatsby-link";
import MenuLink from "./MenuLink";
import Menu, { SubMenu, Item as MenuItem, Divider } from "rc-menu";
const slugify = require("slugify");

import "./style.css";

class MegaMenu extends Component {
  renderMenuIndexLink = menuText => (
    <MenuLink to={slugify(menuText).toLowerCase()}>{menuText}</MenuLink>
  );

  render() {
    const { mode, ...props } = this.props;

    return (
      <nav
        id="mega-menu"
        style={props.style}
      >
        <Menu
          mode={mode}
          className={
            mode === "horizontal"
              ? "flex justify-around max-w-3xl mx-auto list-reset leading-loose px-8"
              : "list-reset leading-tight"
          }
          getPopupContainer={menuItemEl => menuItemEl}
        >
          {/* Home */}
          <MenuItem key="1" className="text-grey-lighter">
            <MenuLink to="/">Home</MenuLink>
          </MenuItem>

          {/* About */}
          <MenuItem key="2" className="text-grey-lighter">
            <MenuLink to="/about">About Us</MenuLink>
          </MenuItem>

          {/* Commercial Painting */}
          <SubMenu
            key="3"
            title={this.renderMenuIndexLink("Commercial Painting")}
            className="text-grey-lighter"
          >
            <MenuItem key="3-1">
              <MenuLink to="/commercial-painting/office-buildings">
                Office Buildings
              </MenuLink>
            </MenuItem>
            <MenuItem key="3-2">
              <MenuLink to="/commercial-painting/retail">Retail</MenuLink>
            </MenuItem>
            <MenuItem key="3-3">
              <MenuLink to="/commercial-painting/apartments">Apartments</MenuLink>
            </MenuItem>
            <MenuItem key="3-4">
              <MenuLink to="/commercial-painting/parking-garages">Parking Garages</MenuLink>
            </MenuItem>
            <MenuItem key="3-5">
              <MenuLink to="/commercial-painting/hoa">HOA</MenuLink>
            </MenuItem>
            <MenuItem key="3-6">
              <MenuLink to="/commercial-painting/hotels">Hotels</MenuLink>
            </MenuItem>
          </SubMenu>

          {/* Residential Paiting */}
          <SubMenu
            key="4"
            title={this.renderMenuIndexLink("Residential Painting")}
            className="text-grey-lighter"
          >
            <MenuItem key="4-1">
              <MenuLink to="/residential-painting/highend-estates">
                High-End Estates
              </MenuLink>
            </MenuItem>
            <MenuItem key="4-2">
              <MenuLink to="/residential-painting/interior-painting">Interior Painting</MenuLink>
            </MenuItem>
            <MenuItem key="4-4">
              <MenuLink to="/residential-painting/exterior-painting">Exterior Painting</MenuLink>
            </MenuItem>
            <MenuItem key="4-4">
              <MenuLink to="/residential-painting/cabinet-refinishing">Cabinet Refinishing</MenuLink>
            </MenuItem>
          </SubMenu>

          {/* Specialty Services */}
          <MenuItem key="5" className="text-grey-lighter">
            <MenuLink to="/specialty-services">Specialty Services</MenuLink>
          </MenuItem>
          
          {/* Gallery */}
          <MenuItem key="6" className="text-grey-lighter">
            <MenuLink to="/gallery">Gallery</MenuLink>
          </MenuItem>

          {/* Service Areas */}
          <MenuItem key="7" className="text-grey-lighter">
            <MenuLink to="/service-areas">Service Areas</MenuLink>
          </MenuItem>

          {/* Reviews */}
          <MenuItem key="8" className="text-grey-lighter">
            <MenuLink to="/reviews">Reviews</MenuLink>
          </MenuItem>

          {/* Contact */}
          <MenuItem key="9" className="text-grey-lighter">
            <MenuLink to="/contact">Contact</MenuLink>
          </MenuItem>
        </Menu>
      </nav>
    );
  }
}

export default MegaMenu;
