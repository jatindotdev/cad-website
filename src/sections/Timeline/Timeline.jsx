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
            date="29th Feb"
            iconStyle={{ background: "#f6019d", color: "#fff" } }

            >
            <h2 className="vertical-timeline-element-title " style={{color:"white"}}>
            DEVFOLIO Form Closes
            </h2>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#200837", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #200837" }}
            date="1st March - 7th March"
            iconStyle={{ background: "#f6019d", color: "#fff" }}
            >
            <h2 className="vertical-timeline-element-title " style={{color:"white"}}>Ideation PPT Submission on Devfolio</h2>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#200837", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #200837" }}
            date="8th March - 11th March"
            iconStyle={{ background: "#f6019d", color: "#fff" }}
            >
            <h2 className="vertical-timeline-element-title " style={{color:"white"}}>Filtration Round</h2>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#200837", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #200837" }}
            date="11th March"
            iconStyle={{ background: "#f6019d", color: "#fff" }}
            >
            <h2 className="vertical-timeline-element-title " style={{color:"white"}}>Filtration Results Announcement</h2>
   
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#200837", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #200837" }}
            date="14th March"
            iconStyle={{ background: "#f6019d", color: "#fff" }}
            >
            <h2 className="vertical-timeline-element-title " style={{color:"white"}}>
            Introductory Ceremony
            </h2>
  
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#200837", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #200837" }}
            date="15th March 9:30 am"
            iconStyle={{ background: "#f6019d", color: "#fff" }}
            >
            <h2 className="vertical-timeline-element-title " style={{color:"white"}}>
              Hacking Starts
            </h2>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#200837", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #200837" }}
            date="16th March 9:30 pm"
            iconStyle={{ background: "#f6019d", color: "#fff" }}
            >
            <h2 className="vertical-timeline-element-title " style={{color:"white"}}>
            Hacking Ends
            </h2>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#200837", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #200837" }}
            date="17th March"
            iconStyle={{ background: "#f6019d", color: "#fff" }}
            >
            <h2 className="vertical-timeline-element-title " style={{color:"white"}}>
            Prize Distribution Ceremony <br/> BYE BYE CAD2.0!
            </h2>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
