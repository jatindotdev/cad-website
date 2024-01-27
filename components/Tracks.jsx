import React, { useState } from "react";
import { motion } from "framer-motion";
import footer from "/favicon.png";

const Tracks = () => {
  const lineVariants = {
    initial: { x: "-100vw" },
    animate: { x: "100vw" },
  };

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);

  const handleHover1 = () => {
    setIsHovered1(true);
  };

  const handleHoverExit1 = () => {
    setIsHovered1(false);
  };

  const handleHover2 = () => {
    setIsHovered2(true);
  };

  const handleHoverExit2 = () => {
    setIsHovered2(false);
  };

  const handleHover3 = () => {
    setIsHovered3(true);
  };

  const handleHoverExit3 = () => {
    setIsHovered3(false);
  };

  const handleHover4 = () => {
    setIsHovered4(true);
  };

  const handleHoverExit4 = () => {
    setIsHovered4(false);
  };

  const handleHover5 = () => {
    setIsHovered5(true);
  };

  const handleHoverExit5 = () => {
    setIsHovered5(false);
  };

  const handleHover6 = () => {
    setIsHovered6(true);
  };

  const handleHoverExit6 = () => {
    setIsHovered6(false);
  };

  return (
    <>
      <div id="tracks" className="bg-[#0d0221] grid text-white-off py-10">
        <p className="mt-8 text-5xl sm:text-8xl justify-self-center">
          <span
            className="text-[#f5d7e3] font-[vcr-osd] shadow-lg "
            style={{ textShadow: "3px 3px #f6019d" }}>
            TRACKS
          </span>
        </p>

        <div className=" w-full sm:w-[80vw] grid smoverflow:grid-cols-1 lgoverflow:grid-cols-3 grid-cols-1 gap-[15vw] mt-12 justify-self-center sm:mr-6">
          <div
            className="border-solid border-2 border-[#f6019d] grid w-[40vh] sm:w-[50vh] justify-self-center"
            onMouseEnter={handleHover1}
            onMouseLeave={handleHoverExit1}>
            <div className="flex overflow-hidden relative">
              {[...Array(100)].map((_, i) => (
                <motion.div
                key={i}
                className="border-solid mx-1 sm:mx-3 h-[15vh] sm:h-[30vh] border-r-[1px] border-[#f6019d] text-[#2C1E66]"
                initial="initial"
                animate={isHovered1 ? "animate" : 0}
                variants={lineVariants}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                }}>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                </motion.div>
              ))}
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[5vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[10vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[15vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[20vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[25vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[vh]"></div>
            </div>
            <div className="justify-self-center -mt-16 sm:-mt-44">
              <img src={footer} alt="" width={150} />
            </div>
            <div className="px-3 bg-[#f6019d] md:text-5xl text-4xl text-center font-[vcr-osd] md:h-[13vh] flex items-center justify-center">
            OPEN INNOVATION
            </div>
            <div className="space-y-1">
              <hr className="border-[2px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[4px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[3px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[1px] border-solid border-[#f6019d]"></hr>
            </div>
            <div className="px-2 py-4 text-[#f5d7e3] text-center md:h-[35vh]">
            The Open Innovation Track at CAD is all about embracing collaboration, creativity, and the power of open source. This track encourages participants to leverage existing open-source projects, contribute to them, or create new projects with the spirit of open innovation. It's an opportunity to be part of a global community, solve real-world problems, and make a positive impact on the world
            </div>
          </div>
          <div
            className="border-solid border-2 border-[#f6019d] grid w-[40vh] sm:w-[50vh] justify-self-center"
            onMouseEnter={handleHover2}
            onMouseLeave={handleHoverExit2}>
            <div className="flex overflow-hidden relative">
              {[...Array(50)].map((_, i) => (
                <motion.div
                key={i}
                className="border-solid mx-1 sm:mx-3 h-[15vh] sm:h-[30vh] border-r-[1px] border-[#f6019d] text-[#2C1E66]"
                initial="initial"
                animate={isHovered1 ? "animate" : 0}
                variants={lineVariants}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                }}>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                </motion.div>
              ))}
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[5vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[10vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[15vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[20vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[25vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[vh]"></div>
            </div>
            <div className="justify-self-center -mt-16 sm:-mt-44">
              <img src={footer} alt="" width={150} />
            </div>
            <div className="px-3 bg-[#f6019d] text-5xl text-center font-[vcr-osd] md:h-[13vh] flex items-center justify-center">
            AR/VR
            </div>
            <div className="space-y-1">
              <hr className="border-[2px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[4px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[3px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[1px] border-solid border-[#f6019d]"></hr>
            </div>
            <div className="px-2 py-4 text-[#f5d7e3] text-center md:h-[35vh]">
            At CAD, we invite you to embark on an extraordinary journey into the realms of Augmented Reality (AR) and Virtual Reality (VR). This is where reality blends seamlessly with the virtual, where creativity knows no bounds, and where you have the power to shape the future of immersive technology.
            </div>
          </div>
          <div
            className="border-solid border-2 border-[#f6019d] grid w-[40vh] sm:w-[50vh] justify-self-center"
            onMouseEnter={handleHover3}
            onMouseLeave={handleHoverExit3}>
            <div className="flex overflow-hidden relative">
              {[...Array(50)].map((_, i) => (
                <motion.div
                key={i}
                className="border-solid mx-1 sm:mx-3 h-[15vh] sm:h-[30vh] border-r-[1px] border-[#f6019d] text-[#2C1E66]"
                initial="initial"
                animate={isHovered1 ? "animate" : 0}
                variants={lineVariants}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                }}>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                </motion.div>
              ))}
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[5vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[10vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[15vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[20vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[25vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[vh]"></div>
            </div>
            <div className="justify-self-center -mt-16 sm:-mt-44">
              <img src={footer} alt="" width={150} />
            </div>
            <div className="px-3 bg-[#f6019d] text-5xl text-center font-[vcr-osd] md:h-[13vh] flex items-center justify-center">
            WEB3
            </div>
            <div className="space-y-1">
              <hr className="border-[2px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[4px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[3px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[1px] border-solid border-[#f6019d]"></hr>
            </div>
            <div className="px-2 py-4 text-[#f5d7e3] text-center md:h-[35vh]">
            Join us at CAD as we set off on a thrilling journey into the limitless Web3 universe. This is the point at which the traditional web transforms into a decentralized, trustless ecosystem, giving you the chance to influence the course of the internet. Join the transition as we rethink how we interact, transact, and connect in the digital sphere.
            </div>
          </div>
          <div
            className="border-solid border-2 border-[#f6019d] grid w-[40vh] sm:w-[50vh] justify-self-center"
            onMouseEnter={handleHover4}
            onMouseLeave={handleHoverExit4}>
            <div className="flex overflow-hidden relative">
              {[...Array(50)].map((_, i) => (
                <motion.div
                key={i}
                className="border-solid mx-1 sm:mx-3 h-[15vh] sm:h-[30vh] border-r-[1px] border-[#f6019d] text-[#2C1E66]"
                initial="initial"
                animate={isHovered1 ? "animate" : 0}
                variants={lineVariants}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                }}>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                </motion.div>
              ))}
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[5vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[10vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[15vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[20vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[25vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[vh]"></div>
            </div>
            <div className="justify-self-center -mt-16 sm:-mt-44">
              <img src={footer} alt="" width={150} />
            </div>
            <div className="px-3 bg-[#f6019d] text-5xl text-center font-[vcr-osd] md:h-[13vh] flex items-center justify-center">
            EDTECH
            </div>
            <div className="space-y-1">
              <hr className="border-[2px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[4px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[3px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[1px] border-solid border-[#f6019d]"></hr>
            </div>
            <div className="px-2 py-4 text-[#f5d7e3] text-center md:h-[35vh]">
            Welcome to CAD, where we're embarking on a mission to revolutionize education through the magic of EdTech (Educational Technology). In a digital age where learning knows no boundaries, EdTech stands as the catalyst for reshaping how we acquire knowledge, deliver lessons, and empower learners of every age and background. Join us in shaping the future of education, unlocking its true potential for all.
            </div>
          </div>
          <div
            className="border-solid border-2 border-[#f6019d] grid w-[40vh] sm:w-[50vh] justify-self-center"
            onMouseEnter={handleHover5}
            onMouseLeave={handleHoverExit5}>
            <div className="flex overflow-hidden relative">
              {[...Array(50)].map((_, i) => (
                <motion.div
                key={i}
                className="border-solid mx-1 sm:mx-3 h-[15vh] sm:h-[30vh] border-r-[1px] border-[#f6019d] text-[#2C1E66]"
                initial="initial"
                animate={isHovered1 ? "animate" : 0}
                variants={lineVariants}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                }}>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                </motion.div>
              ))}
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[5vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[10vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[15vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[20vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[25vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[vh]"></div>
            </div>
            <div className="justify-self-center -mt-16 sm:-mt-44">
              <img src={footer} alt="" width={150} />
            </div>
            <div className="px-3 bg-[#f6019d] text-5xl text-center font-[vcr-osd] md:h-[13vh] flex items-center justify-center">
            HEALTH
            </div>
            <div className="space-y-1">
              <hr className="border-[2px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[4px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[3px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[1px] border-solid border-[#f6019d]"></hr>
            </div>
            <div className="px-2 py-4 text-[#f5d7e3] text-center md:h-[35vh]">
            We are working to leverage the potential of technology to transform healthcare at [Your Hackathon Name]. Join us as we investigate how innovative solutions may enhance patient care, simplify medical procedures, and foster a healthier environment in the Health Innovation track. Whether you work in healthcare, are a tech-savvy developer, an innovative designer, or a data scientist, your abilities can have a significant effect on how healthcare is delivered in the future.
            </div>
          </div>
          <div
            className="border-solid border-2 border-[#f6019d] grid w-[40vh] sm:w-[50vh] justify-self-center"
            onMouseEnter={handleHover6}
            onMouseLeave={handleHoverExit6}>
            <div className="flex overflow-hidden relative">
              {[...Array(50)].map((_, i) => (
                <motion.div
                key={i}
                className="border-solid mx-1 sm:mx-3 h-[15vh] sm:h-[30vh] border-r-[1px] border-[#f6019d] text-[#2C1E66]"
                initial="initial"
                animate={isHovered1 ? "animate" : 0}
                variants={lineVariants}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                }}>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                </motion.div>
              ))}
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[5vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[10vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[15vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[20vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[25vh]"></div>
              <div className="absolute border-solid w-[100%] border-b-[1px] border-[#f6019d] top-[vh]"></div>
            </div>
            <div className="justify-self-center -mt-16 sm:-mt-44">
              <img src={footer} alt="" width={150} />
            </div>
            <div className="px-3 bg-[#f6019d] text-5xl text-center font-[vcr-osd] md:h-[13vh] flex items-center justify-center">
            FINTECH
            </div>
            <div className="space-y-1">
              <hr className="border-[2px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[4px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[3px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[1px] border-solid border-[#f6019d]"></hr>
            </div>
            <div className="px-2 py-4 text-[#f5d7e3] text-center md:h-[35vh]">
            Welcome to the CAD FinTech Revolution, where we're pushing financial innovation to new heights. Explore the world of financial technology to see how it can change the way we do business, make investments, and handle our money. Whether you're a specialist in finance, coding, design, or data, your skills can change the way that finance is done in the future.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracks;
