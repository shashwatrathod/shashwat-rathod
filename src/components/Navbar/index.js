import React from "react";
import {
  Nav,
  NavbarNav,
  NavbarLogo,
  Bars,
  NavMenu,
  NavItem,
  NavLink,
  NavDownloadButtonContainer
} from "./NavbarElements";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { NavMenuItems } from "../../data/NavMenuItems";
import DownloadCVButton from "../DownloadCVButton"

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarNav>
          <NavbarLogo to="/">ShashwatRathod</NavbarLogo>
          <Bars>
            <IoMenu />
          </Bars>
          <NavMenu>
            {NavMenuItems.map((value, key) => {
              return (
                <NavItem key={key}>
                  <NavLink to={value.to}>{value.title}</NavLink>
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
