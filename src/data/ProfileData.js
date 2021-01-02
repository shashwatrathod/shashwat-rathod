import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { theme } from "./theme";

export const ProfileData = {
  firstName: "Shashwat",
  lastName: "Rathod",
  phoneNumber: "+91-7203832214",
  email: "shashwatrathod22@gmail.com",
  location: "Ahmedabad, India",
  birthDate: "22nd June, 2000",
  profilePicSrc: "../public/images/pro.jpg",
  about:
    "I consider myself as a problem solver who has a genuine desire to learn more and create an impact in the world we live in by shaping the tech around it. I diligently indulge in learning new skills and honing the ones I already have. I am interested in ML and Web Development and have had the opportunity to work on various related projects in teams as well as independently. I am a focused indvidual who gives his best shot at the task at hand.",
  social: [
    {
      icon: <IoLogoGithub fill={theme.root.purple} />,
      iconLabel: "Github",
      link: "https://github.com/shashwatrathod",
    },
    {
      icon: <IoLogoInstagram fill={theme.root.purple} />,
      iconLabel: "Instagram",
      link: "https://instagram.com/shashwatrathod_",
    },
    {
      icon: <IoMdMail fill={theme.root.purple} />,
      iconLabel: "Email",
      link: "mailto:shashwatrathod22@gmail.com",
    },
    {
      icon: <FaLinkedin fill={theme.root.purple} />,
      iconLabel: "LinkedIn",
      link: "https://www.linkedin.com/in/shashwat-rathod-a06727173/",
    },
    {
      icon: <FaTwitter fill={theme.root.purple} />,
      iconLabel: "Twitter",
      link: "https://twitter.com/sha_sh_wat",
    },
    {
      icon: <FaPhone fill={theme.root.purple} />,
      iconLabel: "Phone",
      link: "tel:+917203832214",
    },
  ],
};
