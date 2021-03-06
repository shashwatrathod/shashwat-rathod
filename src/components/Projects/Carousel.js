import React, { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import {
  SliderContainer,
  LeftArrowContainer,
  RightArrowContainer,
  Slide,
  ProjectTitle,
  ProjectInfoContainer,
  ProjectInfo,
  ProjectDate,
  TechContainer,
  Tech,
  TitleText,
} from "./ProjectElements";

const Carousel = ({ ProjectData }) => {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);
  const length = ProjectData.length;

  const nextSlide = () => {
    const c = current;
    setPrevious(c);
    setRight(true);
    setLeft(false);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    const c = current;
    setPrevious(c);
    setLeft(true);
    setRight(false);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <SliderContainer>
        <LeftArrowContainer onClick={prevSlide} role="button" aria-label="Previous Project">
          <IoMdArrowDropleft />
        </LeftArrowContainer>
        <RightArrowContainer onClick={nextSlide} role="button" aria-label="Next Project">
          <IoMdArrowDropright />
        </RightArrowContainer>
        {ProjectData.map((val, key) => {
          var dis = false;
          var cur = false;
          var prev = false;
          if (key === current) {
            dis = true;
            cur = true;
          }
          if (key === previous) {
            prev = true;
            dis = true;
          }
          return (
            <>
              <Slide
                display={dis}
                prev={prev}
                cur={cur}
                left={left}
                right={right}
                key={key}
              >
                <ProjectTitle>
                  <TitleText aria-label="Project Title">{val.title}</TitleText>
                </ProjectTitle>
                <ProjectInfoContainer>
                  <ProjectDate aria-label="Project Dates">{val.date}</ProjectDate>
                  <ProjectInfo aria-label="Project Description">{val.info}</ProjectInfo>
                  <TechContainer>
                    {val.tech.map((t, k) => {
                      return <Tech key={k} aria-label="Technology Used">{t}</Tech>;
                    })}
                  </TechContainer>
                </ProjectInfoContainer>
              </Slide>
            </>
          );
        })}
      </SliderContainer>
    </>
  );
};

export default Carousel;
