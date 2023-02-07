import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { GlobalContext } from "../utils/context";

function Menu() {
  const { isMenuVisible } = useContext(GlobalContext);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <motion.div
      initial={{
        translateX: "-50%",
        scaleY: 0,
        border: "2px solid #0b021f",
      }}
      animate={
        isMenuVisible
          ? {
              scaleY: 1,
              borderColor: "#f5d7e3",
            }
          : {
              scaleY: 0,
              borderColor: "#0b021f",
            }
      }
      transition={{
        delay: isMenuVisible ? 0 : 0.75,
        duration: 0.4,
      }}
      id="menu"
      className="h-5/6 w-5/6 bg-[#0b021f] bottom-8 absolute left-1/2">
      <div>
        <motion.p
          initial={{
            visibility: "hidden",
            opacity: 0,
          }}
          whileInView={
            isMenuVisible
              ? {
                  visibility: "visible",
                  opacity: 1,
                }
              : {
                  visibility: "inherit",
                  opacity: 0,
                }
          }
          transition={{
            delay: isMenuVisible ? 0.3 : 0.6,
            ease: isMenuVisible ? "easeIn" : "easeOut",
          }}
          className="px-[25px] py-[15px] bg-[#f5d7e3] text-[#0D0221]">
          {">>> PERSONAL NAVIGATOR <<<"}
        </motion.p>
        <ul>
          <motion.li
            initial={{
              opacity: 0,
            }}
            animate={isMenuVisible ? { opacity: 1 } : {}}
            transition={{
              delay: isMenuVisible ? 0.25 : 0.45,
              ease: "easeIn",
            }}
            className="h-[4px] mt-[1px] bg-[#f5d7e3]"></motion.li>
          <motion.li
            initial={{
              opacity: 0,
            }}
            animate={isMenuVisible ? { opacity: 1 } : {}}
            transition={{
              delay: isMenuVisible ? 0.35 : 0.3,
              ease: "easeIn",
            }}
            className="h-[3px] mt-[2px] bg-[#f5d7e3]"></motion.li>
          <motion.li
            initial={{
              opacity: 0,
            }}
            animate={isMenuVisible ? { opacity: 1 } : {}}
            transition={{
              delay: isMenuVisible ? 0.45 : 0.15,
              ease: "easeIn",
            }}
            className="h-[2px] mt-[3px] bg-[#f5d7e3]"></motion.li>
          <motion.li
            initial={{
              opacity: 0,
            }}
            animate={isMenuVisible ? { opacity: 1 } : {}}
            transition={{
              delay: isMenuVisible ? 0.55 : 0,
              ease: "easeIn",
            }}
            className="h-[1px] mt-[4px] bg-[#f5d7e3]"></motion.li>
        </ul>
      </div>
      <div className="px-[25px] py-[15px] text-[#f5d7e3] mt-4 mr-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex-grow flex justify-center">
            <p className="border border-[#f5d7e3] px-[15px] py-[5px] h-max text-xs">
              PAGES
            </p>
          </div>
          <motion.div
            initial={{ scaleX: 0, transformOrigin: "left center" }}
            animate={isMenuVisible ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{
              delay: isMenuVisible ? 0.3 : 0.6,
              ease: "circIn",
            }}
            className="border border-[#f5d7e3] text-xs flex w-[70%]">
            {["CONTACTS", "SOCIALS", "OPTIONS", "CREDITS"].map((tab, index) => {
              const getStyles = () => {
                if (selectedIndex === index) {
                  const styles = {
                    backgroundColor: "#f5d7e3",
                    color: "#0D0221",
                  };
                  if (isMenuVisible) {
                    styles["opacity"] = 1;
                  } else {
                    styles["opacity"] = 0;
                  }
                  return styles;
                } else {
                  const styles = {
                    backgroundColor: "#0D0221",
                    color: "#f5d7e3",
                  };
                  if (isMenuVisible) {
                    styles["opacity"] = 1;
                  } else {
                    styles["opacity"] = 0;
                  }
                  return styles;
                }
              };
              return (
                <motion.button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: isMenuVisible
                      ? index * 0.15 + 0.6
                      : Math.abs(index * 0.15 - 0.45),
                  }}
                  animate={getStyles()}
                  className="px-[15px] py-[5px] border-r border-r-[#f5d7e3]">
                  {tab}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4">
            {["HOME", "PROJECTS", "PLAYGROUND"].map((route, index) => {
              const getStyles = () => {};
              return (
                <div
                  key={index}
                  className="flex flex-col w-[200px] h-auto relative">
                  <button className="border border-[#f5d7e3] p-[1em_0_4em_1.5em] grid place-items-start">
                    {route}
                  </button>
                  <p className="h-[4vh] w-3/4 text-xs m-[0_0_auto_auto] border border-[#f5d7e3] grid place-items-center">
                    YOU'RE HERE
                  </p>
                  <span className="absolute top-[35%] right-0 translate-x-full h-px w-1/2 origin-[left_center] bg-[#f5d7e3] -z-10"></span>
                </div>
              );
            })}
          </div>
          <div className="w-[70%]">
            <motion.div
              initial={{
                scaleX: 0,
                scaleY: 0,
              }}
              animate={
                isMenuVisible
                  ? {
                      scaleX: 1,
                      scaleY: 1,
                    }
                  : {
                      scaleX: 0,
                      scaleY: 0,
                    }
              }
              transition={{
                delay: isMenuVisible ? 0 : 0.7,
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="h-full w-full mt-[15px] border border-[#f5d7e3] bg-[#0D0221]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={
                  isMenuVisible
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      }
                }
                transition={{
                  delay: 0.3,
                }}>
                <div className="px-[25px] py-[5px] flex-initial border-b border-b-[#f5d7e3]">
                  <h1 className="text-xs h-max leading-none">
                    A PRACTICAL GUIDE ON
                  </h1>
                  <h1 className="text-[15px] leading-none">
                    HOW TO GET IN TOUCH
                  </h1>
                </div>
                <div className="flex-auto w-full px-[25px] py-[15px] uppercase text-[15px] leading-none font-semibold grid space-y-14">
                  <div className="border w-max border-[#f5d7e3] px-[25px] py-[15px] justify-self-start">
                    <p className="text-xs">DROP AN EMAIL AT</p>
                    <p className="border-b border-b-pink-600">
                      CONTACT@CODINGNINJAS.COM
                    </p>
                  </div>
                  <div className="border w-max border-[#f5d7e3] px-[25px] py-[15px] justify-self-center">
                    <p className="text-xs">
                      Get in touch via your preferred social.
                    </p>
                  </div>
                  <div className="border w-max border-[#f5d7e3] px-[25px] py-[15px] space-x-2 justify-self-end">
                    <span className="text-xs">MAKE A CALL AT</span>
                    <span className="border-b border-b-pink-600">
                      +91 879 792 7892
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <div className="h-max">
              <motion.p
                initial={{
                  visibility: "hidden",
                  opacity: 0,
                }}
                whileInView={
                  isMenuVisible
                    ? {
                        visibility: "visible",
                        opacity: 1,
                      }
                    : {
                        visibility: "inherit",
                        opacity: 0,
                      }
                }
                transition={{
                  delay: isMenuVisible ? 0.3 : 0.6,
                  ease: isMenuVisible ? "easeIn" : "easeOut",
                }}
                className="px-[25px] py-[15px] bg-[#f5d7e3] text-[#0D0221]">
                {">>> PERSONAL NAVIGATOR <<<"}
              </motion.p>
              <ul>
                <motion.li
                  initial={{
                    opacity: 0,
                  }}
                  animate={isMenuVisible ? { opacity: 1 } : {}}
                  transition={{
                    delay: isMenuVisible ? 0.25 : 0.45,
                    ease: "easeIn",
                  }}
                  className="h-[4px] mt-[1px] bg-[#f5d7e3]"></motion.li>
                <motion.li
                  initial={{
                    opacity: 0,
                  }}
                  animate={isMenuVisible ? { opacity: 1 } : {}}
                  transition={{
                    delay: isMenuVisible ? 0.35 : 0.3,
                    ease: "easeIn",
                  }}
                  className="h-[3px] mt-[2px] bg-[#f5d7e3]"></motion.li>
                <motion.li
                  initial={{
                    opacity: 0,
                  }}
                  animate={isMenuVisible ? { opacity: 1 } : {}}
                  transition={{
                    delay: isMenuVisible ? 0.45 : 0.15,
                    ease: "easeIn",
                  }}
                  className="h-[2px] mt-[3px] bg-[#f5d7e3]"></motion.li>
                <motion.li
                  initial={{
                    opacity: 0,
                  }}
                  animate={isMenuVisible ? { opacity: 1 } : {}}
                  transition={{
                    delay: isMenuVisible ? 0.55 : 0,
                    ease: "easeIn",
                  }}
                  className="h-[1px] mt-[4px] bg-[#f5d7e3]"></motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Menu;
