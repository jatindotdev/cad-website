import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <div className="bg-[#0d0221] grid text-white-off py-10">
      <h1 className="font-[Power] md:text-7xl text-white text-3xl font-semibold text-center mb-6 py-10">
        TIMELINE
      </h1>
      <div className="md:mx-10 mx-5">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(32, 8, 55)", color: "#FFFFFF" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(32, 8, 55) " }}
            date="29th Feb"
            iconStyle={{ background: "rgb(285,1,157)", color: "#fff" }}
            icon =""
            >
            <h3
              className="vertical-timeline-element-title "
              style={{ color: "white" }}>
              DEVFOLIO Form Closes
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(32, 8, 55)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(32, 8, 55)" }}
            date="1st March - 7th March"
            iconStyle={{ background: "rgb(285,1,157)", color: "#fff" }}
            icon =""
            >
            <h3
              className="vertical-timeline-element-title "
              style={{ color: "white" }}>
              Ideation PPT Submission on Devfolio
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(32, 8, 55)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(32, 8, 55)" }}
            date="8th March - 11th March"
            iconStyle={{ background: "rgb(285,1,157)", color: "#fff" }}
            icon =""
            >
            <h3
              className="vertical-timeline-element-title "
              style={{ color: "white" }}>
              Filtration Round
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(32, 8, 55)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(32, 8, 55)" }}
            date="11th March"
            iconStyle={{ background: "rgb(285,1,157)", color: "#fff" }}
            icon =""
            >
            <h3
              className="vertical-timeline-element-title "
              style={{ color: "white" }}>
              Filtration Results Announcement
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(32, 8, 55)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(32, 8, 55)" }}
            date="14th March"
            iconStyle={{ background: "rgb(285,1,157)", color: "#fff" }}
            icon =""
            >
            <h3
              className="vertical-timeline-element-title "
              style={{ color: "white" }}>
              Introductory Ceremony
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(32, 8, 55)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(32, 8, 55)" }}
            date="15th March 9:30 am"
            iconStyle={{ background: "rgb(285,1,157)", color: "#fff" }}
            icon =""
            >
            <h3
              className="vertical-timeline-element-title "
              style={{ color: "white" }}>
              Hacking Starts
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(32, 8, 55)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(32, 8, 55)" }}
            date="16th March 9:30 pm"
            iconStyle={{ background: "rgb(285,1,157)", color: "#fff" }}
            icon =""
            >
            <h3
              className="vertical-timeline-element-title "
              style={{ color: "white" }}>
              Hacking Ends
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(32, 8, 55)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(32, 8, 55)" }}
            date="17th March"
            iconStyle={{ background: "rgb(285,1,157)", color: "#fff" }}
            icon =""
            >
            <h3
              className="vertical-timeline-element-title "
              style={{ color: "white" }}>
              Prize Distribution Ceremony <br /> BYE BYE CAD2.0!
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p></p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
