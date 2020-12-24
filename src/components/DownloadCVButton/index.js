import React from "react";
import { Container, DownloadButtonLink, IconContainer } from "./ButtonElements";
import { RiDownload2Line } from "react-icons/ri";

const DownloadCVButton = () => {
  return (
    <>
      <Container>
        <DownloadButtonLink to="/">
          Download CV
          {/* <IconContainer>
            <RiDownload2Line />
          </IconContainer> */}
        </DownloadButtonLink>
      </Container>
    </>
  );
};

export default DownloadCVButton;
