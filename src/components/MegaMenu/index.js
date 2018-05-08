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
      "residential-painting": 4
    }
  };

  renderMenuIndexLink = menuText => {
    const slug = slugify(menuText).toLowerCase();

    return (
      <MenuLink exact to={`/${slug}`} className="text-grey-lighter">
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

    let strippedPath;

    if (regex1.test(pathname)) {
      strippedPath = regex1.exec(pathname)[0];
    }

    if (regex2.test(pathname)) {
      strippedPath = regex2.exec(pathname)[0];
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

    let strippedPath;

    if (regex1.test(pathname)) {
      strippedPath = regex1.exec(pathname)[0];
    }

    if (regex2.test(pathname)) {
      strippedPath = regex2.exec(pathname)[0];
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
              ? "font-gotham-bold flex justify-around max-w-3xl mx-auto list-reset leading-loose px-8"
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

          {/* About */}
          <MenuItem key="2">
            <MenuLink
              to="/about"
              className="text-grey-lighter hover:bg-primary-light"
            >
              About Us
            </MenuLink>
          </MenuItem>

          {/* Commercial Painting */}
          <SubMenu
            key="3"
            title={this.renderMenuIndexLink("Commercial Painting")}
            className="text-grey-lighter hover:bg-primary-light"
          >
            <MenuItem key="3-1" className="bg-white">
              <MenuLink
                sub
                to="/commercial-painting/office-buildings"
                className="text-primary"
              >
                Office Buildings
              </MenuLink>
            </MenuItem>
            <MenuItem key="3-2" className="bg-white">
              <MenuLink
                sub
                to="/commercial-painting/retail"
                className="text-primary"
              >
                Retail
              </MenuLink>
            </MenuItem>
            <MenuItem key="3-3" className="bg-white">
              <MenuLink
                sub
                to="/commercial-painting/apartments"
                className="text-primary"
              >
                Apartments
              </MenuLink>
            </MenuItem>
            <MenuItem key="3-4" className="bg-white">
              <MenuLink
                sub
                to="/commercial-painting/parking-garages"
                className="text-primary"
              >
                Parking Garages
              </MenuLink>
            </MenuItem>
            <MenuItem key="3-5" className="bg-white">
              <MenuLink
                sub
                to="/commercial-painting/hoa"
                className="text-primary"
              >
                HOA
              </MenuLink>
            </MenuItem>
            <MenuItem key="3-6" className="bg-white">
              <MenuLink
                sub
                to="/commercial-painting/hospitality"
                className="text-primary"
              >
                Hospitality
              </MenuLink>
            </MenuItem>
          </SubMenu>

          {/* Residential Paiting */}
          <SubMenu
            key="4"
            title={this.renderMenuIndexLink("Residential Painting")}
            className="text-grey-lighter hover:bg-primary-light"
          >
            <MenuItem key="4-1" className="bg-white">
              <MenuLink
                sub
                to="/residential-painting/highend-estates"
                className="text-primary"
              >
                High-End Estates
              </MenuLink>
            </MenuItem>
            <MenuItem key="4-2" className="bg-white">
              <MenuLink
                sub
                to="/residential-painting/interior-painting"
                className="text-primary"
              >
                Interior Painting
              </MenuLink>
            </MenuItem>
            <MenuItem key="4-4" className="bg-white">
              <MenuLink
                sub
                to="/residential-painting/exterior-painting"
                className="text-primary"
              >
                Exterior Painting
              </MenuLink>
            </MenuItem>
            <MenuItem key="4-5" className="bg-white">
              <MenuLink
                sub
                to="/residential-painting/cabinet-refinishing"
                className="text-primary"
              >
                Cabinet Refinishing
              </MenuLink>
            </MenuItem>
          </SubMenu>

          {/* Specialty Services */}
          <MenuItem key="5">
            <MenuLink
              to="/specialty-services"
              className="text-grey-lighter hover:bg-primary-light"
            >
              Specialty Services
            </MenuLink>
          </MenuItem>

          {/* Gallery */}
          <MenuItem key="6">
            <MenuLink
              to="/gallery"
              className="text-grey-lighter hover:bg-primary-light"
            >
              Gallery
            </MenuLink>
          </MenuItem>

          {/* Service Areas */}
          <MenuItem key="7">
            <MenuLink
              to="/service-areas"
              className="text-grey-lighter hover:bg-primary-light"
            >
              Service Areas
            </MenuLink>
          </MenuItem>

          {/* Reviews */}
          <MenuItem key="8">
            <MenuLink
              to="/reviews"
              className="text-grey-lighter hover:bg-primary-light"
            >
              Reviews
            </MenuLink>
          </MenuItem>

          {/* Contact */}
          <MenuItem key="9">
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
