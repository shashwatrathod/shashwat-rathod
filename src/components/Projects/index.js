import React from "react";
import {
  ProjectContainer,
  ProjectHeaderContainer,
  H1,
  H3
} from "./ProjectElements";
import {ProjectData} from "../../data/ProjectData"

import Carousel from "./Carousel" 

const Projects = () => {

  return (
    <>
      <ProjectContainer>
        <ProjectHeaderContainer>
          <H1>projects</H1>
          <H3>
            Esse est reprehenderit pariatur elit ea. Esse est reprehenderit
            pariatur elit ea.
          </H3>
        </ProjectHeaderContainer>
        <Carousel ProjectData={ProjectData}/>
      </ProjectContainer>
    </>
  );
};

export default Projects;
