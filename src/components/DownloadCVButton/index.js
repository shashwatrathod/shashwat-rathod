import React from "react";
import { Container, DownloadButtonLink, IconContainer } from "./ButtonElements";
import { RiDownload2Line } from "react-icons/ri";

const DownloadCVButton = () => {
  return (
    <>
      <Container>
        <DownloadButtonLink href="./ShashwatResume.pdf" download>
          Download CV
        </DownloadButtonLink>
      </Container>
    </>
  );
};

export default DownloadCVButton;
