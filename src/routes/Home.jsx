import { motion } from "framer-motion";
import Tracks from "../../components/Tracks";
import About from "../sections/About/About";
import Faq from "../sections/FAQ/Faq";
import Landing from "../sections/Landing/Landing";
import MiniEvent from "../sections/MiniEvent/MiniEvent";
import Timeline from "../sections/Timelines/Timeline";

function Home() {
  return (
    <>
      <section className="bg-[#200837] text-white">
        <section className="min-h-screen font-[vcr-osd]">
          <Landing />
        </section>
        <About />
        <MiniEvent />
        <div className="font-[Power] text-3xl sm:text-6xl my-8 sm:my-16 px-6 sm:px-12 text-center">
          <p>Ready, set, code! 🚀</p>
        </div>
        <section className="overflow-hidden font-[vcr-osd] flex flex-col px-12 text-center py-20 bg-[#E2319A]">
          <motion.div
            className="flex text-6xl whitespace-nowrap uppercase mb-10 font-bold"
            animate={{ x: ["100%", "-200%"], y: 0 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}>
            {/* / Exciting Challenges / Register Now / Unforgettable Experience / */}
            / 1st Phase Review Results Out / 1st Phase Review Results Out /
          </motion.div>
          <div className="flex flex-col justify-center items-center text-lg">
            <p className="mb-5">1st Phase Review Results are now out</p>
          </div>
        </section>
      </section>
      <Tracks />
      <Timeline />
      <section className="bg-[#200837] text-white">
        <Faq className="min-h-screen" />
      </section>
      <footer />
    </>
  );
}

export default Home;
