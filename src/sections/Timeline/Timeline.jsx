import React from "react";

const Timeline = () => {
  const timelineData = [
    { date: "Feb 29", event: "DEVFOLIO Form Closes" },
    { date: "Mar 1-7", event: "Ideation PPT Submission on Devfolio" },
    { date: "Mar 8-11", event: "Filtration Round" },
    { date: "Mar 11", event: "Filtration Results Announcement" },
    { date: "Mar 14", event: "Introductory Ceremony" },
    { date: "Mar 15 9:30 am", event: "Hacking Starts" },
    { date: "Mar 16 9:30 pm", event: "Hacking Ends" },
    { date: "Mar 17", event: "Prize Distribution Ceremony" },
  ];

  return (
    <div className="bg-[#0d0221] text-white py-10 w-[100%]">
      <h1 className="font-[Power] md:text-7xl text-white text-3xl font-semibold text-center mb-6">
        TIMELINE
      </h1>
      <div className="md:mx-[35vw] mx-5 relative flex flex-col w-full my-20">
        <div className="flex flex-col gap-4 justify-center items-start">
          {timelineData.map((item, index) => (
            <div key={index} className="flex flex-row items-center space-x-10 space-y-5">
              <div className="md:block hidden text-white text-sm w-[5vw]">{item.date}</div>
              <div className="md:w-16 md:h-16 h-5 w-5 flex items-center justify-center bg-[#f6019d] rounded-full">

              </div>
              <div className={`bg-[#200837] rounded-md p-4  ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}>
                <h3 className="text-lg font-semibold capitalize">{item.event}</h3>
              </div>
            </div>
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default Timeline;