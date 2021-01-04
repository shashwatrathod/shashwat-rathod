import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.sidebar.bgPrimary};
  display: flex;
  align-items: center;
  top: 0;
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? "0" : "100%")};
  opacity: ${({ isSidebarOpen }) => (isSidebarOpen ? "100%" : "0")};
  justify-content: center;
  transition: 0.3s ease;
`;

export const CloseIconContainer = styled.div`
  position: absolute;
  text-align: right;
  display: block;
  width: 100%;
  top: 0;
  padding: 2rem;
  margin-right: 4rem;
  font-size: 2rem;
`;

export const CloseIcon = styled(FaTimes)`
  color: ${(props) =>
    props.theme.sidebar.textPrimary
      ? props.theme.sidebar.textPrimary
      : "white"};
`;

export const SidebarWrapper = styled.div`
  width: 100%;
  color: ${(props) =>
    props.theme.sidebar.textPrimary
      ? props.theme.sidebar.textPrimary
      : "white"};
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  list-style: none;
  padding: 0;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  height: 80px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${(props) =>
      props.theme.sidebar.textSecondary
        ? props.theme.sidebar.textSecondary
        : "#01bf71"};
  }
`;

export const SidebarDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  height: 80px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${(props) =>
      props.theme.sidebar.textSecondary
        ? props.theme.sidebar.textSecondary
        : "#01bf71"};
  }
`;