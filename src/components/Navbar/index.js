import React from "react";
import {
  Nav,
  NavbarNav,
  NavbarLogo,
  Bars,
  NavMenu,
  NavItem,
  NavLink,
  NavDownloadButtonContainer,
} from "./NavbarElements";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { NavMenuItems } from "../../data/NavMenuItems";
import DownloadCVButton from "../DownloadCVButton";

const Navbar = ({ toggleIsSidebarOpen }) => {
  return (
    <>
      <Nav>
        <NavbarNav>
          <NavbarLogo
            to="home"
            smooth={true}
            activeClass="active"
            offset={-80}
          >
            ShashwatRathod
          </NavbarLogo>
          <Bars onClick={toggleIsSidebarOpen}>
            <IoMenu />
          </Bars>
          <NavMenu>
            {NavMenuItems.map((value, key) => {
              return (
                <NavItem key={key} aria-role="navigation">
                  <NavLink
                    to={value.to}
                    smooth={true}
                    exact={true}
                    offset={-83}
                    spy={true}
                  >
                    {value.title}
                  </NavLink>
                </NavItem>
              );
            })}
          </NavMenu>
          <NavDownloadButtonContainer>
            <DownloadCVButton />
          </NavDownloadButtonContainer>
        </NavbarNav>
      </Nav>
    </>
  );
};

export default Navbar;
