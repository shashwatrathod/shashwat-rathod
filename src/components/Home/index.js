import React from "react";
import {
  HomeContainer,
  ImageContainer,
  InfoContainer,
  ProfilePic,
  Info,
  NameInfoContainer,
  NameInfo,
  NameGreeting,
  H1,
  AboutMe,
  OtherInfoContainer,
  OtherInfo,
  LocationIcon,
  OName,
  BdayIcon,
  PhoneIcon,
  EmailIcon,
  A,
  SocialMedia,
  MobileOtherInfoContainer,
  MobileImageContainer,
  MobileProfilePic,
} from "./HomeElements";
// import ProfilePic from "../../images/profile_pic.jpg";
import { ProfileData } from "../../data/ProfileData";

const Home = () => {
  return (
    <HomeContainer>
      <InfoContainer>
        <Info>
          <MobileImageContainer>
            <MobileProfilePic src={ProfileData.profilePicSrc} loading="lazy" />
          </MobileImageContainer>
          <H1>about me</H1>
          <AboutMe>{ProfileData.about}</AboutMe>
          <OtherInfoContainer>
            <OtherInfo>
              <EmailIcon />
              <OName>{ProfileData.email}</OName>
            </OtherInfo>
            <OtherInfo>
              <PhoneIcon />
              <OName>{ProfileData.phoneNumber}</OName>
            </OtherInfo>
          </OtherInfoContainer>
          <OtherInfoContainer>
            <OtherInfo>
              <LocationIcon />
              <OName>{ProfileData.location}</OName>
            </OtherInfo>
            <OtherInfo>
              <BdayIcon />
              <OName>{ProfileData.birthDate}</OName>
            </OtherInfo>
          </OtherInfoContainer>
          <MobileOtherInfoContainer>
            <OtherInfo>
              <EmailIcon />
              <OName>{ProfileData.email}</OName>
            </OtherInfo>
            <OtherInfo>
              <PhoneIcon />
              <OName>{ProfileData.phoneNumber}</OName>
            </OtherInfo>
            <OtherInfo>
              <LocationIcon />
              <OName>{ProfileData.location}</OName>
            </OtherInfo>
            <OtherInfo>
              <BdayIcon />
              <OName>{ProfileData.birthDate}</OName>
            </OtherInfo>
          </MobileOtherInfoContainer>
          <SocialMedia>
            {ProfileData.social.map((val, key) => {
              return (
                <A
                  href={val.link}
                  aria-label={val.iconLabel}
                  key={key}
                  target="_blank"
                >
                  {val.icon}
                </A>
              );
            })}
          </SocialMedia>
        </Info>
      </InfoContainer>
      <ImageContainer>
        <ProfilePic src={ProfileData.profilePicSrc} loading="lazy" />
        <NameInfoContainer>
          <NameInfo>
            <NameGreeting>Hello, I'm</NameGreeting>
            <H1>
              <div>SHASHWAT</div>
              <div>RATHOD</div>
            </H1>
          </NameInfo>
        </NameInfoContainer>
      </ImageContainer>
    </HomeContainer>
  );
};

export default Home;
