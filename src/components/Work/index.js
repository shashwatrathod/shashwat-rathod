import React from "react";
import {
  Tech,
  TechContainer,
  TimelineContainer,
  WorkContainer,
  WorkHeaderContainer,
  WorkTitleText,
} from "./WorkElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../../work.css";
import { WorkData } from "../../data/WorkData";

const Work = () => {
  return (
    <WorkContainer>
      <WorkHeaderContainer>
        <WorkTitleText>Work Experience</WorkTitleText>
      </WorkHeaderContainer>
      <TimelineContainer>
        <VerticalTimeline layout="1-column-left">
          {WorkData.map((val, key) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={val.date}
                iconStyle={val.iconStyle}
                icon={val.icon}
                key={key}
              >
                <h3 className="vertical-timeline-element-title">
                  {val.jobTitle}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {val.companyName}
                </h4>
                <p>{val.description}</p>
                <p>
                  <TechContainer>
                    {val.tech.map((t, k) => {
                      return <Tech key={k}>{t}</Tech>;
                    })}
                  </TechContainer>
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </TimelineContainer>
    </WorkContainer>
  );
};

export default Work;
