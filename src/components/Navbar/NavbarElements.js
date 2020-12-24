import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav`
  background: ${(props) => props.theme.nav.bgPrimary};
  width: 100%;
  height: ${(props) =>
    props.theme.nav.height ? props.theme.nav.height : "80px"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: ${props => props.theme.nav.triggerWidth}) {
    transition: 1s all ease;
  }
`;

export const NavbarNav = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${(props) =>
    props.theme.nav.height ? props.theme.nav.height : "80px"};
  z-index: 1;
  width: 100%;
  max-width: 1300px;
`;

export const NavbarLogo = styled(Link)`
  color: ${(props) =>
    props.theme.nav.textPrimary ? props.theme.nav.textPrimary : "white"};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  margin-left: 20px;
`;

export const Bars = styled.div`
  display: none;

  @media screen and (max-width: ${props => props.theme.nav.triggerWidth}) {
    color: ${(props) =>
      props.theme.nav.textPrimary ? props.theme.nav.textPrimary : "white"};
    display: flex;
    justify-self: flex-end;
    cursor: pointer;
    font-size: 2.5rem;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    margin-right: 20px;
    transition: translateX(-100%, 60%);
  }
`;

export const NavMenu = styled.ul`
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;

  @media screen and (max-width: ${props => props.theme.nav.triggerWidth}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 100%;
`;

export const NavLink = styled(Link)`
  color: ${(props) =>
    props.theme.nav.textPrimary ? props.theme.nav.textPrimary : "white"};
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;

  &.active {
      border-bottom: 3px solid ${props => props.theme.nav.textPrimary ? props.theme.nav.textPrimary : "white"};
  }
`;

export const NavDownloadButtonContainer = styled.div `
  display: flex;
  justify-content: center;
  margin-right: 20px;

  @media screen and (max-width: ${props => props.theme.nav.triggerWidth}) {
    display: none;
  }
`