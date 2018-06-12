import React, { Component } from "react";
import Link from "gatsby-link";
import MenuLink from "./MenuLink";
import Menu, { SubMenu, Item as MenuItem, Divider } from "rc-menu";
const slugify = require("slugify");
import { withRouter } from "react-router-dom";

import "./style.css";

class MegaMenu extends Component {
  state = {
    openKeys: [],
    navigationMapping: {
      "commercial-painting": 3,
      "residential-painting": 4,
      "gallery": 6
    }
  };

  renderMenuIndexLink = menuText => {
    const slug = slugify(menuText).toLowerCase();

    return (
      <MenuLink 
        to={`/${slug}`} 
        onClick={e => e.preventDefault()} 
        className="text-grey-lighter"
      >
        {menuText}
      </MenuLink>
    );
  };

  mapMenusToPaths = () => {};

  componentDidMount() {
    const { navigationMapping } = this.state;
    const {
      location: { pathname },
      mode
    } = this.props;

    const regex1 = RegExp("commercial-painting");
    const regex2 = RegExp("residential-painting");
    const regex3 = RegExp("gallery");

    let strippedPath;

    if (regex1.test(pathname)) {
      strippedPath = regex1.exec(pathname)[0];
    }

    if (regex2.test(pathname)) {
      strippedPath = regex2.exec(pathname)[0];
    }

    if (regex3.test(pathname)) {
      strippedPath = regex3.exec(pathname)[0];
    }

    const includesPath = Object.keys(navigationMapping).includes(strippedPath);

    if (mode === "inline" && includesPath) {
      const openKey = navigationMapping[strippedPath].toString();

      this.setState({
        openKeys: [openKey]
      });
    } else {
      this.setState({ openKeys: [] });
    }
  }

  componentWillReceiveProps(nextProps) {
    nextProps;
    const { navigationMapping } = this.state;
    const {
      location: { pathname },
      mode
    } = nextProps;
    "mode", mode;

    const regex1 = RegExp("commercial-painting");
    const regex2 = RegExp("residential-painting");
    const regex3 = RegExp("gallery");

    let strippedPath;

    if (regex1.test(pathname)) {
      strippedPath = regex1.exec(pathname)[0];
    }

    if (regex2.test(pathname)) {
      strippedPath = regex2.exec(pathname)[0];
    }

    if (regex3.test(pathname)) {
      strippedPath = regex3.exec(pathname)[0];
    }

    const includesPath = Object.keys(navigationMapping).includes(strippedPath);

    if (mode === "inline" && includesPath) {
      const openKey = navigationMapping[strippedPath].toString();

      this.setState({
        openKeys: [openKey]
      });
    } else {
      this.setState({ openKeys: [] });
    }
  }

  render() {
    const {
      props: { mode, ...props },
      state: { openKeys }
    } = this;

    return (
      <nav id="mega-menu">
        <Menu
          mode={mode}
          className={
            mode === "horizontal"
              ? "font-gotham-bold flex justify-center max-w-3xl mx-auto list-reset leading-loose px-8"
              : "font-gotham-bold list-reset leading-tight"
          }
          getPopupContainer={menuItemEl => menuItemEl}
          inlineIndent={0}
          openKeys={openKeys}
          onOpenChange={e => this.setState({ openKeys: e })}
          openAnimation="slide-up"
          // triggerSubMenuAction="click"
        >
          {/* Home */}
          <MenuItem key="1">
            <MenuLink
              exact
              to="/"
              className="text-grey-lighter hover:bg-primary-light"
            >
              Home
            </MenuLink>
          </MenuItem>

          {/* Commercial Painting */}
          <SubMenu
            key="2"
            title={this.renderMenuIndexLink("Commercial Painting")}
            className="text-grey-lighter hover:bg-primary-light"
          >
            <MenuItem key="3-1" className="bg-grey-lightest">
              <MenuLink
                sub
                exact
                to="/commercial-painting"
                className="text-primary"
              >
                Commercial Pianting
              </MenuLink>
            </MenuItem>
            <MenuItem key="2-2" className="bg-grey-lightest">
              <MenuLink
                sub
                to="/commercial-painting/office-buildings"
                className="text-primary"
              >
                Office Buildings
              </MenuLink>
            </MenuItem>
            <MenuItem key="2-3" className="bg-grey-lightest">
              <MenuLink
                sub
                to="/commercial-painting/retail"
                className="text-primary"
              >
                Retail
              </MenuLink>
            </MenuItem>
            <MenuItem key="2-4" className="bg-grey-lightest">
              <MenuLink
                sub
                to="/commercial-painting/apartments"
                className="text-primary"
              >
                Apartments
              </MenuLink>
            </MenuItem>
            <MenuItem key="2-5" className="bg-grey-lightest">
              <MenuLink
                sub
                to="/commercial-painting/parking-garages"
                className="text-primary"
              >
                Parking Garages
              </MenuLink>
            </MenuItem>
            <MenuItem key="2-6" className="bg-grey-lightest">
              <MenuLink
                sub
                to="/commercial-painting/hoa"
                className="text-primary"
              >
                HOA
              </MenuLink>
            </MenuItem>
            <MenuItem key="2-7" className="bg-grey-lightest">
              <MenuLink
                sub
                to="/commercial-painting/hospitality"
                className="text-primary"
              >
                Hospitality
              </MenuLink>
            </MenuItem>
            <MenuItem key="2-8" className="bg-grey-lightest">
              <MenuLink
                sub
                to="/commercial-painting/prep-work"
                className="text-primary"
              >
                Prep Work
              </MenuLink>
            </MenuItem>
          </SubMenu>

          {/* Residential Paiting */}
          <SubMenu
            key="3"
            title={this.renderMenuIndexLink("Residential Painting")}
            className="text-grey-lighter hover:bg-primary-light"
          >
            <MenuItem key="3-1" className="bg-grey-lightest">
              <MenuLink
                sub
                to="/residential-painting"
                className="text-primary"
              >
                Residential Painting
              </MenuLink>
            </MenuItem>
            <MenuItem key="3-2" className="bg-grey-lightest">
              <MenuLink
                sub
                to="/residential-painting/highend-estates"
                className="text-primary"
              >
                High-End Estates
              </MenuLink>
            </MenuItem>
            <MenuItem key="3-3" className="bg-grey-lightest">
              <MenuLink
                sub
                to="/residential-painting/interior-painting"
                className="text-primary"
              >
                Interior Painting
              </MenuLink>
            </MenuItem>
            <MenuItem key="3-4" className="bg-grey-lightest">
              <MenuLink
                sub
                to="/residential-painting/exterior-painting"
                className="text-primary"
              >
                Exterior Painting
              </MenuLink>
            </MenuItem>
            <MenuItem key="3-5" className="bg-grey-lightest">
              <MenuLink
                sub
                to="/residential-painting/cabinet-refinishing"
                className="text-primary"
              >
                Cabinet Refinishing
              </MenuLink>
            </MenuItem>
            <MenuItem key="3-6" className="bg-grey-lightest">
              <MenuLink
                sub
                to="/residential-painting/prep-work"
                className="text-primary"
              >
                Prep Work
              </MenuLink>
            </MenuItem>
          </SubMenu>

          {/* Gallery */}
          <SubMenu
            key="4"
            title={this.renderMenuIndexLink("Gallery")}
            className="text-grey-lighter hover:bg-primary-light"
          >
            <MenuItem key="4-1" className="bg-grey-lightest">
              <MenuLink
                sub
                to="/gallery/commercial"
                className="text-primary"
              >
                Commercial
              </MenuLink>
            </MenuItem>
            <MenuItem key="4-2" className="bg-grey-lightest">
              <MenuLink
                sub
                to="/gallery/residential"
                className="text-primary"
              >
                Residential
              </MenuLink>
            </MenuItem>
          </SubMenu>

          {/* Reviews */}
          <MenuItem key="5">
            <MenuLink
              to="/reviews"
              className="text-grey-lighter hover:bg-primary-light"
            >
              Reviews
            </MenuLink>
          </MenuItem>

          {/* About */}
          <SubMenu
            key="6"
            title={this.renderMenuIndexLink("About Us")}
            className="text-grey-lighter hover:bg-primary-light"
          >
            <MenuItem key="4-1" className="bg-grey-lightest">
              <MenuLink
                sub
                to="/about-us/service-areas"
                className="text-primary"
              >
                Service Areas
              </MenuLink>
            </MenuItem>
          </SubMenu>

          {/* Contact */}
          <MenuItem key="7">
            <MenuLink
              to="/contact"
              className="text-grey-lighter hover:bg-primary-light"
            >
              Contact
            </MenuLink>
          </MenuItem>
        </Menu>
      </nav>
    );
  }
}

export default withRouter(MegaMenu);
