import { motion } from "framer-motion";
import { useContext } from "react";
import { GlobalContext } from "../utils/context";

function Menu() {
  const { isMenuVisible } = useContext(GlobalContext);

  return (
    <motion.div
      initial={{
        translateX: "-50%",
        scaleY: 0,
      }}
      animate={
        isMenuVisible
          ? {
              scaleY: 1,
            }
          : {
              scaleY: 0,
            }
      }
      transition={{
        delay: isMenuVisible ? 0 : 0.75,
        duration: 0.4,
      }}
      id="menu"
      className="h-5/6 w-5/6 bg-[#0b021f] border border-[#f5d7e3] bottom-8 absolute left-1/2">
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
    </motion.div>
  );
}

export default Menu;
