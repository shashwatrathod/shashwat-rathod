import React from "react";
import {
  ProjectContainer,
  ProjectHeaderContainer,
  H1,
  H3,
} from "./ProjectElements";
import { ProjectData } from "../../data/ProjectData";
import Carousel from "./Carousel";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <ProjectContainer>
          <ProjectHeaderContainer>
            <H1>projects</H1>
            <H3>
              Some of the projects I've worked on 
            </H3>
          </ProjectHeaderContainer>
          <Carousel ProjectData={ProjectData} />
        </ProjectContainer>
      </section>
    </>
  );
};

export default Projects;
