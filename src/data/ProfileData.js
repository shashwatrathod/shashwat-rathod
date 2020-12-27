import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiOutlinePhone } from "react-icons/ai";
import {theme} from "./theme"

export const ProfileData = {
  firstName: "Shashwat",
  lastName: "Rathod",
  phoneNumber: "+91-7203832214",
  email: "shashwatrathod22@gmail.com",
  location: "Ahmedabad, India",
  birthDate: "22nd June, 2000",
  profilePicSrc: "../public/images/pro.jpg",
  about: "Lorem Ipsum",
  social: [
    {
      icon: <IoLogoGithub fill={theme.root.purple}/>,
      iconLabel: "Github",
      link: "https://github.com/shashwatrathod",
    },
    {
      icon: <IoLogoInstagram fill={theme.root.purple}/>,
      iconLabel: "Instagram",
      link: "https://instagram.com/shashwatrathod_",
    },
    {
      icon: <IoMdMail fill={theme.root.purple}/>,
      iconLabel: "Email",
      link: "mailto:shashwatrathod22@gmail.com",
    },
    {
      icon: <FaLinkedin fill={theme.root.purple}/>,
      iconLabel: "LinkedIn",
      link: "https://www.linkedin.com/in/shashwat-rathod-a06727173/",
    },
    {
      icon: <FaTwitter fill={theme.root.purple}/>,
      iconLabel: "Twitter",
      link: "https://twitter.com/sha_sh_wat",
    },
    {
      icon: <FaPhone fill={theme.root.purple}/>,
      iconLabel: "Phone",
      link: "tel:+917203832214",
    },
  ],
};
