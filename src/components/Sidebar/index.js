import React from "react";
import {
  SidebarContainer,
  CloseIconContainer,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu
} from "./SidebarElements";
import { NavMenuItems } from "../../data/NavMenuItems";
import DownloadCVButton from "../DownloadCVButton";

const Sidebar = ({isSidebarOpen, toggleIsSidebarOpen}) => {
  return (
    <>
      <SidebarContainer isSidebarOpen={isSidebarOpen} onClick={toggleIsSidebarOpen}>
        <CloseIconContainer>
          <CloseIcon onClick={toggleIsSidebarOpen}/>
        </CloseIconContainer>
        <SidebarWrapper>
          <SidebarMenu>
            {NavMenuItems.map((val, key) => {
              return (
                <SidebarLink key={key} to={val.to} onClick={toggleIsSidebarOpen}>
                  {val.title}
                </SidebarLink>
              );
            })}
            <SidebarLink to="/">
              <DownloadCVButton />
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
