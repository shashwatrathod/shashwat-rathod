import React from "react";
import {
  IconContainer,
  SkillsContainer,
  SkillsHeaderContainer,
  SkillsSubtitleText,
  SkillsTitleText,
  Icon,
} from "./SkillsElements";
import Typewriter from "typewriter-effect";
import { SkillsData } from "../../data/SkillsData";

const Skills = () => {
  return (
    <section id="skills">
      <SkillsContainer role="Skills">
        <SkillsHeaderContainer>
          <SkillsTitleText>skills</SkillsTitleText>
          <SkillsSubtitleText>
            <Typewriter
              options={{
                strings: ["I'm good", "I'm a little good at"],
                autoStart: true,
                delay: 80,
                pauseFor: 1000,
                loop: true,
              }}
            />
          </SkillsSubtitleText>
        </SkillsHeaderContainer>
        <IconContainer>
          {SkillsData.map((val, key) => {
            return (
              <Icon key={key} role="Skill" aria-valuennow={val.title}>
                <img
                  src={val.src}
                  role="Skill"
                  loading="lazy"
                  alt={val.title}
                />
              </Icon>
            );
          })}
        </IconContainer>
      </SkillsContainer>
    </section>
  );
};

export default Skills;
