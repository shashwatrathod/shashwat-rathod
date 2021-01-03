import styled from "styled-components";
import { keyframes } from "styled-components";

export const ProjectContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 750px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  @media screen and (max-width: ${(props) => props.theme.projects.triggerWidth}) {
    height: auto;
    width: auto;
  }
`;

export const ProjectHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 3rem;
  height: auto;
  width: auto;
  max-width: 550px;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: ${(props) => props.theme.projects.triggerWidth}) {
    margin-top: 2rem;
  }
`;

export const H1 = styled.div`
  display: flex;
  font-size: 4rem;
  font-weight: bold;
  flex-direction: column;
  color: #212121;

  @media screen and (max-width: ${(props) => props.theme.projects.triggerWidth}) {
    font-size: 2.1rem;
  }
`;

export const H3 = styled.div`
  display: flex;
  font-size: 1.5rem;
  flex-direction: column;
  color: #212121;

  @media screen and (max-width: ${(props) => props.theme.projects.triggerWidth}) {
    font-size: 1rem;
  }
`;

export const LeftArrowContainer = styled.div`
  display: flex;
  position: absolute;
  align-self: center;
  width: auto;
  height: auto;
  font-size: 2rem;
  justify-content: center;
  background: rgba(0, 0, 0, 0.07);
  left: 0;
  cursor: pointer;
  z-index: 4;

  &:hover {
    transform: scale(1.1);
  }
`;

export const RightArrowContainer = styled.div`
  display: flex;
  position: absolute;
  align-self: center;
  width: auto;
  height: auto;
  font-size: 2rem;
  justify-content: center;
  background: rgba(0, 0, 0, 0.07);
  right: 0;
  z-index: 4;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const slideLeft = keyframes`
  from {
    transform: translateX(105%)
  }
  to{
    transform: translateX(0)
  }
`;
const slideRight = keyframes`
  from {
    transform: translateX(0)
  }
  to{
    transform: translateX(-105%)
  }
`;

const slideLeftRev = keyframes`
  from {
    transform: translateX(0)
  }
  to{
    transform: translateX(105%)
  }
`

const slideRightRev = keyframes`
  from {
    transform: translateX(-105%)
  }
  to{
    transform: translateX(0)
  }
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  display: ${(props) => (props.display ? "flex" : "none")};
  animation: ${(props) => {
      if (props.cur) {
        if(props.right){
          return slideLeft;
        }else if(props.left){
          return slideRightRev;
        }
      } else if (props.prev) {
        if(props.right){
          return slideRight;
        }else if(props.left){
          return slideLeftRev;
        }
      } else {
        return "";
      }
    }}
    0.5s ease-in-out forwards;
  justify-content: flex-start;
  flex-direction: row;
  overflow: hidden;
  z-index: 1;
  position: absolute;

  @media screen and (max-width: ${(props) => props.theme.projects.triggerWidth}) {
    display: ${(props) => (props.display ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

export const SliderContainer = styled.div`
  margin-top: 3rem;
  color: #212121;
  width: 1100px;
  height: 500px;
  align-self: center;
  margin: 3rem;
  overflow: hidden;
  position: relative;
  display: flex;
  border-radius: 10px;

  @media screen and (max-width: ${(props) => props.theme.projects.triggerWidth}) {
    width:90%;
    height: 100%;
    min-height: 650px;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const gradientAnimation = keyframes`
  0%{background-position:45% 0%}
  50%{background-position:56% 100%}
  100%{background-position:45% 0%}
`;

export const ProjectTitle = styled.div`
  left: 0;
  height: 100%;
  width: 30%;
  background: linear-gradient(0deg, #00c9ff, #92fe9d);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 6s ease infinite;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${(props) => props.theme.projects.triggerWidth}) {
    width: 100%;
    height: auto;
  }
`;

export const TitleText = styled.div`
  display: flex;
  margin: 1rem 0.5rem;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
  flex-wrap: wrap;
  color: #13274f;
  overflow: wrap;
  text-align: center;

  @media screen and (max-width: ${(props) => props.theme.projects.triggerWidth}) {
    font-size: 2rem;
  }
`;

export const ProjectInfoContainer = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: center;

  @media screen and (max-width: ${(props) => props.theme.projects.triggerWidth}) {
    justify-content: space-around;
  }
`;

export const ProjectDate = styled.div`
  margin: 3rem 1rem 0rem 1rem;
  color: #515151;
  text-align: center;
  font-style: italic;
  font-size: 1rem;

  @media screen and (max-width: ${(props) => props.theme.projects.triggerWidth}) {
    font-size: 0.8rem;
    margin-bottom: 1.2rem;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  margin: 1rem 1rem 0rem 1rem;
  font-size: 1.5rem;
  text-align: center;

  @media screen and (max-width: ${(props) => props.theme.projects.triggerWidth}) {
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }
`;

export const TechContainer = styled.div`
  display: flex;
  bottom: 0;
  margin: 1rem 1rem 2rem 1rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  overflow: wrap;

  @media screen and (max-width: ${(props) => props.theme.projects.triggerWidth}) {
    margin: 0.7rem 0.7rem 1.2rem 0.7rem;
  }
`;

export const Tech = styled.div`
  display: flex;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 10px;
  border: 1px solid #13274f;
  justify-content: center;
  padding: 1rem;

  @media screen and (max-width: ${(props) => props.theme.projects.triggerWidth}) {
    font-size: 0.9rem;
  }
`;
