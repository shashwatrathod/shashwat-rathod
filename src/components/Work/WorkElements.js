import styled from "styled-components";

export const WorkContainer = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  height: auto;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.05);
    

  @media screen and (max-width: ${(props) => props.theme.work.triggerWidth}) {
    height: auto;
    flex-direction: column;
  }
`;

export const WorkHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  place-items: center;
  flex-direction: column;
  width: 30%;
  height: 100%;

  @media screen and (max-width: ${(props) => props.theme.work.triggerWidth}) {
    height: auto;
    width: 100%;
  }
`;

export const WorkTitleText = styled.div`
  display: flex;
  margin: 0rem 25%;
  flex-wrap: wrap;
  text-align: center;
  font-size: 5rem;
  font-family: "Damion", cursive;
  font-weight: 200;

  @media screen and (max-width: ${(props) => props.theme.work.triggerWidth}) {
    font-size: 2.4rem;
    margin: 1rem 1rem;
  }
`;

export const TimelineContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.work.yellow};
  width: 70%;

  @media screen and (max-width: ${(props) => props.theme.work.triggerWidth}) {
    height: auto;
    width: 100%;
  }
`;

export const TechContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const Tech = styled.div`
  display: flex;
  margin: 0.5rem 0.5rem 0rem 0rem;
  border-radius: 10px;
  border: 1px solid black;
  justify-content: center;
  padding: 0.7rem;
`;
