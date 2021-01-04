import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { ProfileData } from "../../data/ProfileData";
import {
  A,
  ContactText,
  DesignedBy,
  FooterContainer,
  FooterContent,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <ContactText>Get in touch</ContactText>
        <A
          href={"mailto:" + ProfileData.email}
          target="_blank"
          aria-label="email"
          aria-valuenow={ProfileData.email}
        >
          <FaEnvelope />
        </A>
      </FooterContent>
      <DesignedBy>© Designed and Developed by Shashwat Rathod</DesignedBy>
      <a style={{fontSize:'0.8rem'}} href="https://icons8.com/" target="_blank">Icons in "Skills" section by Icons8</a>
    </FooterContainer>
  );
};

export default Footer;
