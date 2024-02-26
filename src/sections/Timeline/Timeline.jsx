import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <div className="font-[Power] bg-[#0d0221] grid text-white-off py-10">
      <h1 className="md:text-7xl text-white text-3xl font-semibold text-center mb-6 py-10">
        TIMELINE
      </h1>
      <div className="md:mx-10 mx-5">
        <VerticalTimeline>
          <VerticalTimelineElement
            className=""
            contentStyle={{ background: "#200837", color: "#FFFFFF" }}
            contentArrowStyle={{ borderRight: "7px solid #200837 " }}
            date="29th Feb 2024"
            iconStyle={{ background: "#f6019d", color: "#fff" } }
            
            >
            <h3 className="vertical-timeline-element-title ">
            DEVFOLIO Form Closes
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#200837", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #200837" }}
            date="1st March - 7th March"
            iconStyle={{ background: "#f6019d", color: "#fff" }}
            >
            <h3 className="vertical-timeline-element-title">Ideation PPT Submission on Devfolio</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#200837", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #200837" }}
            date="8th March - 11th March"
            iconStyle={{ background: "#f6019d", color: "#fff" }}
            >
            <h3 className="vertical-timeline-element-title">Filtration Round</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#200837", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #200837" }}
            date="11th March"
            iconStyle={{ background: "#f6019d", color: "#fff" }}
            >
            <h3 className="vertical-timeline-element-title">Filtration Results Announcement</h3>
   
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#200837", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #200837" }}
            date="14th March"
            iconStyle={{ background: "#f6019d", color: "#fff" }}
            >
            <h3 className="vertical-timeline-element-title">
            Introductory Ceremony
            </h3>
  
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#200837", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #200837" }}
            date="15th March 9:30 am"
            iconStyle={{ background: "#f6019d", color: "#fff" }}
            >
            <h3 className="vertical-timeline-element-title">
              Hacking Starts
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#200837", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #200837" }}
            date="16th March 9:30 pm"
            iconStyle={{ background: "#f6019d", color: "#fff" }}
            >
            <h3 className="vertical-timeline-element-title">
            Hacking Ends
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#200837", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #200837" }}
            date="17th March"
            iconStyle={{ background: "#f6019d", color: "#fff" }}
            >
            <h3 className="vertical-timeline-element-title">
            Prize Distribution Ceremony: BYE BYE CAD2.0!
            </h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
