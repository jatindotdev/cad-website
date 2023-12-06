import React from "react";

const About = () => {
  return (
    <>
      <section className="max-w-7xl min-h-screen flex flex-col justify-center items-center mx-auto px-6 sm:px-16">
        <div className="">
          <h2 className="font-[Power] font-semibold w-full mb-6 text-4xl sm:text-7xl text-center">
            ABOUT CAD
          </h2>
        </div>
        <div className="flex md:text-2xl text-sm flex-col gap-6 space-y-10 sm:flex-row font-[Swansea] mb-10">
          <div className="flex-1">
            <p>
            Say hello to CAD (Ctrl Alt Del) Hackathon, brought to you by the cool folks at Coding Ninjas. This isn't your average hackathon – it's a rollercoaster of coding, creativity, and pure tech excitement. <br/><br/>
            </p>
            <p>
            Remember that magical keystroke combo Ctrl Alt Del? Well, we're applying that same spirit to innovation. With a vibe that's more high-five than high-and-mighty, CAD is all about hitting refresh and diving into challenges headfirst.<br/><br/>
            </p>
            <p>
            CAD is where we're cranking things up a notch. No stiff suits here – just brilliant minds coming together to crack codes, dream big, and make a real impact in areas like education, environment, healthcare, and beyond.
            </p>
            <p>
            So, if coding's your thing and you're up for some tech-fueled awesomeness, join us as we Ctrl Alt Del the norm and write a new code for innovation.
            </p>
          </div>
        </div>
      </section>

      <div className="font-[Power] text-3xl sm:text-6xl mb-8 sm:mb-16 px-6 sm:px-12 text-center">
        <p>Ready, set, code! 🚀</p>
      </div>
    </>
  );
};

export default About;
