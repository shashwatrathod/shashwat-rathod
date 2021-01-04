import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background-color: white;
  justify-content: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 700px) {
    height: auto;
  }
`;

export const SkillsHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;

  @media screen and (max-width: 700px) {
    margin-top: 5rem;
  }
`;

export const SkillsTitleText = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  color: #212121;

`;

export const SkillsSubtitleText = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  font-size: 1.5rem;
  text-align: center;
  color: #212121;

`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 2rem 25% 5rem 25%;
  justify-content: center;

  @media screen and (max-width: 700px) {
    margin: 2rem 5% 2rem 5%;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  margin-top: 1rem;
`;
