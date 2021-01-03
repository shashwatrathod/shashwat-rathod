import React from "react";
import styled from "styled-components";
import { IoLocationOutline } from "react-icons/io5";
import { FaBaby, FaPhone, FaEnvelope } from "react-icons/fa";

export const HomeContainer = styled.div`
  display: flex;
  margin-top: -2.2rem;
  align-self: center;
  justify-content: center;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  max-width: 1300px;
  position: relative;
  box-shadow: 2px;
  color: white;
  

  @media screen and (max-width: ${(props) => props.theme.home.triggerWidth}) {
    height: auto;
    width: auto;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 0rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 5rem;
  background-color: ${(props) => props.theme.root.elevationLevelOne};
  border-radius: 50px;
  padding: 1rem;
  box-shadow: -0.2rem 0 2rem #000;
  align-self: center;

  @media screen and (max-width: ${(props) => props.theme.home.triggerWidth}) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const MobileImageContainer = styled.div`
  display: none;

  @media screen and (max-width: ${(props) => props.theme.home.triggerWidth}) {
    display: flex;
    align-self: center;
    height: 180px;
    width: 180px;
    border-radius: 50%;
    margin-bottom: 1rem;
    box-shadow: -0.2rem 0 1rem rgba(0, 0, 0, 0.6);
  }
`;

export const MobileProfilePic = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: left;
  border-radius: 50%;
`;

export const ImageContainer = styled.div`
  display: flex;
  position: absolute;
  margin-right: 3rem;
  align-self: center;
  width: 450px;
  height: 90%;
  right: 0;
  object-fit: cover;
  object-position: top right;
  box-shadow: -0.1rem 0 0.5rem #000;
  border-radius: 30px;

  @media screen and (max-width: ${(props) => props.theme.home.triggerWidth}) {
    display: none;
  }
`;

export const ProfilePic = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: left;
  border-radius: 30px;
  z-index: 3;
`;

export const NameInfoContainer = styled.div`
  height: 100%;
  width: 100%;
  z-index: 4;
  display: flex;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8413932223279936) 0%,
    rgba(6, 6, 13, 0.6565192727481617) 30%,
    rgba(0, 212, 255, 0) 100%
  );
  position: absolute;
  border-radius: 30px;
  justify-content: center;
`;

export const NameInfo = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-end;
  margin-bottom: 7rem;
  flex-direction: column;
  width: 100%;
  padding-left: 3rem;
`;

export const NameGreeting = styled.div`
  display: flex;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.76);
`;

export const H1 = styled.div`
  display: flex;
  font-size: 3rem;
  font-weight: bold;
  flex-direction: column;

  @media screen and (max-width: ${(props) => props.theme.home.triggerWidth}) {
    font-size: 2.2rem;
  }
`;
export const Info = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 1.5rem;
  max-width: 600px;
`;

export const AboutMe = styled.div`
  display: flex;
  font-size: 1.2rem;
  padding-top: 1rem;
  font-weight: normal;
  justify-content: left;

  @media screen and (max-width: ${(props) => props.theme.home.triggerWidth}) {
    font-size: 1rem;
  }
`;

export const OtherInfoContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  justify-content: space-between;

  @media screen and (max-width: ${(props) => props.theme.home.triggerWidth}) {
    display: none;
  }
`;

export const MobileOtherInfoContainer = styled.div`
  display: none;

  @media screen and (max-width: ${(props) => props.theme.home.triggerWidth}) {
    display: flex;
    width: 100%;
    margin-top: 2rem;
    flex-direction: column;
    justify-content: left;
  }
`;

export const OtherInfo = styled.div`
  display: flex;
  color: ${(props) => props.theme.root.purple};
  font-size: 1rem;
  font-weight: lighter;
  justify-content: center;

  @media screen and (max-width: ${(props) => props.theme.home.triggerWidth}) {
    justify-content: left;
    padding: 4px 0;
  }
`;

export const SocialMedia = styled.div`
  margin-top: 5rem;
  display: flex;
  font-size: 2rem;
  justify-content: space-between;
  text-decoration: none;

  @media screen and (max-width: ${(props) => props.theme.home.triggerWidth}) {
    margin-top: 2rem;
    font-size: 1.8rem;
    margin-right: 1rem;
  }
`;

export const A = styled.a`
  text-decoration: none;
  background: transparent;
`;

export const LocationIcon = styled(IoLocationOutline)`
  padding-top: 0.16rem;
`;

export const OName = styled.div`
  padding-left: 0.3rem;
  padding-right: 0.3rem;
`;

export const BdayIcon = styled(FaBaby)`
  padding-top: 0.16rem;
`;

export const PhoneIcon = styled(FaPhone)`
  padding-top: 0.16rem;
`;

export const EmailIcon = styled(FaEnvelope)`
  padding-top: 0.16rem;
`;
