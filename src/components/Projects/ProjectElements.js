import styled from "styled-components";

export const ProjectContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 750px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
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
`;


export const H1 = styled.div`
  display: flex;
  font-size: 4rem;
  font-weight: bold;
  flex-direction: column;
  color: #212121;

  @media screen and (max-width: ${(props) => props.theme.home.triggerWidth}) {
    font-size: 2.2rem;
  }
`;

export const H3 = styled.div`
  display: flex;
  font-size: 1.5rem;
  flex-direction: column;
  color: #212121;

  @media screen and (max-width: ${(props) => props.theme.home.triggerWidth}) {
    font-size: 1rem;
  }
`;