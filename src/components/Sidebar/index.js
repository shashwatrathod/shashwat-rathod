import React from "react";
import {
  SidebarContainer,
  CloseIconContainer,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SidebarItem,
} from "./SidebarElements";
import { NavMenuItems } from "../../data/NavMenuItems";
import DownloadCVButton from "../DownloadCVButton";

const Sidebar = () => {
  return (
    <>
      <SidebarContainer isOpen="true">
        <CloseIconContainer>
          <CloseIcon />
        </CloseIconContainer>
        <SidebarWrapper>
          <SidebarMenu>
            {NavMenuItems.map((val, key) => {
              return (
                <SidebarLink key={key} to={val.to}>
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
