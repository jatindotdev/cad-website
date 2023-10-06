import React, { useState } from "react";
import { motion } from "framer-motion";
import footer from "/favicon.png";

const Tracks = () => {
  const lineVariants = {
    initial: { x: "-100vh" },
    animate: { x: "100vh" },
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
      <div id="tracks" className="bg-[#0d0221] grid text-white-off">
        <p className="mt-8 text-5xl sm:text-8xl justify-self-center">
          <span
            className="text-[#f5d7e3] font-[vcr-osd] shadow-lg underline"
            style={{ textShadow: "3px 3px #f6019d" }}>
            TRACKS
          </span>
        </p>

        <div className=" w-[80vw] grid smoverflow:grid-cols-2 smoverflow:grid-rows-3 lgoverflow:grid-cols-3 lgoverflow:grid-rows-2 grid-cols-1 gap-28 mt-12 justify-self-center sm:mr-6">
          {/* Repeat the following block for each grid */}
          <div
            className="border-solid border-2 border-[#f6019d] grid w-[40vh] sm:w-[50vh] justify-self-center"
            onMouseEnter={handleHover1}
            onMouseLeave={handleHoverExit1}>
            <div className="flex overflow-hidden relative">
              {[...Array(100)].map((_, i) => (
                <motion.div
                  key={i}
                  className="border-solid mx-3 h-[30vh] border-r-[1px] border-[#f6019d] text-[#2C1E66]"
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
            <div className="justify-self-center -mt-44">
              <img src={footer} alt="" width={150} />
            </div>
            <div className="px-3 bg-[#f6019d] text-5xl text-center font-[vcr-osd]">
              WEBSITE
            </div>
            <div className="space-y-1">
              <hr className="border-[2px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[4px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[3px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[1px] border-solid border-[#f6019d]"></hr>
            </div>
            <div className="px-2 py-4 text-[#f5d7e3]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident blanditiis dolorem magnam, quae reiciendis est alias
              placeat minima facilis maxime!
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
                  className="border-solid mx-3 h-[30vh] border-r-[1px] border-[#f6019d] text-[#2C1E66]"
                  initial="initial"
                  animate={isHovered2 ? "animate" : 0}
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
            <div className="justify-self-center -mt-44">
              <img src={footer} alt="" width={150} />
            </div>
            <div className="px-3 bg-[#f6019d] text-5xl text-center font-[vcr-osd]">
              WEBSITE
            </div>
            <div className="space-y-1">
              <hr className="border-[2px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[4px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[3px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[1px] border-solid border-[#f6019d]"></hr>
            </div>
            <div className="px-2 py-4 text-[#f5d7e3]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident blanditiis dolorem magnam, quae reiciendis est alias
              placeat minima facilis maxime!
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
                  className="border-solid mx-3 h-[30vh] border-r-[1px] border-[#f6019d] text-[#2C1E66]"
                  initial="initial"
                  animate={isHovered3 ? "animate" : 0}
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
            <div className="justify-self-center -mt-44">
              <img src={footer} alt="" width={150} />
            </div>
            <div className="px-3 bg-[#f6019d] text-5xl text-center font-[vcr-osd]">
              WEBSITE
            </div>
            <div className="space-y-1">
              <hr className="border-[2px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[4px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[3px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[1px] border-solid border-[#f6019d]"></hr>
            </div>
            <div className="px-2 py-4 text-[#f5d7e3]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident blanditiis dolorem magnam, quae reiciendis est alias
              placeat minima facilis maxime!
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
                  className="border-solid mx-3 h-[30vh] border-r-[1px] border-[#f6019d] text-[#2C1E66]"
                  initial="initial"
                  animate={isHovered4 ? "animate" : 0}
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
            <div className="justify-self-center -mt-44">
              <img src={footer} alt="" width={150} />
            </div>
            <div className="px-3 bg-[#f6019d] text-5xl text-center font-[vcr-osd]">
              WEBSITE
            </div>
            <div className="space-y-1">
              <hr className="border-[2px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[4px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[3px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[1px] border-solid border-[#f6019d]"></hr>
            </div>
            <div className="px-2 py-4 text-[#f5d7e3]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident blanditiis dolorem magnam, quae reiciendis est alias
              placeat minima facilis maxime!
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
                  className="border-solid mx-3 h-[30vh] border-r-[1px] border-[#f6019d] text-[#2C1E66]"
                  initial="initial"
                  animate={isHovered5 ? "animate" : 0}
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
            <div className="justify-self-center -mt-44">
              <img src={footer} alt="" width={150} />
            </div>
            <div className="px-3 bg-[#f6019d] text-5xl text-center font-[vcr-osd]">
              WEBSITE
            </div>
            <div className="space-y-1">
              <hr className="border-[2px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[4px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[3px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[1px] border-solid border-[#f6019d]"></hr>
            </div>
            <div className="px-2 py-4 text-[#f5d7e3]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident blanditiis dolorem magnam, quae reiciendis est alias
              placeat minima facilis maxime!
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
                  className="border-solid mx-3 h-[30vh] border-r-[1px] border-[#f6019d] text-[#2C1E66]"
                  initial="initial"
                  animate={isHovered6 ? "animate" : 0}
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
            <div className="justify-self-center -mt-44">
              <img src={footer} alt="" width={150} />
            </div>
            <div className="px-3 bg-[#f6019d] text-5xl text-center font-[vcr-osd]">
              WEBSITE
            </div>
            <div className="space-y-1">
              <hr className="border-[2px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[4px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[3px] border-solid border-[#f6019d]"></hr>
              <hr className="border-[1px] border-solid border-[#f6019d]"></hr>
            </div>
            <div className="px-2 py-4 text-[#f5d7e3]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident blanditiis dolorem magnam, quae reiciendis est alias
              placeat minima facilis maxime!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracks;
