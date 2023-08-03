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
              Control Alt Delete is a 24 hour hackathon which is going to be organized by Coding Ninjas SRM community. <br/><br/>
            </p>
            <p>
              You dream about it. You think how you could do it.
              You share that idea with others.<br/><br/>
            </p>
            <p>
              We are a student led organization who strive to promote a healthy coding culture among the budding techies of this generation!
            </p>
          </div>
        </div>
      </section>

      <div className="font-[Power] text-3xl sm:text-6xl mb-8 sm:mb-16 px-6 sm:px-12 text-center">
        <p>Unleash your potential.</p>
      </div>
    </>
  );
};

export default About;
