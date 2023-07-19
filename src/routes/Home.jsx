import { motion } from "framer-motion";
import Landing from "../sections/Landing/Landing";
import About from '../sections/About/About';
import Faq from "../sections/FAQ/Faq";

function Home() {
  return (
    <>
      <section className="bg-[#200837] text-white">
        <Landing className='min-h-screen '/>
        <About/>
        <section className="overflow-hidden font-[vcr-osd] flex flex-col px-6 sm:px-12 text-center py-12 sm:py-20 bg-[#E2319A]">
          <motion.div
            className="flex text-4xl sm:text-6xl whitespace-nowrap uppercase mb-6 sm:mb-10 font-bold"
            initial={{ x: -100 }}
            animate={{ x: 100 }}
            transition={{ duration: 3, repeat: 100, ease: "linear" }}>
            Innovate / Collaborate / Build / Explore /
          </motion.div>
          <div className="flex flex-col justify-center items-center text-base sm:text-lg">
            <p className="mb-4 sm:mb-5">
            "Join us at CAD Hackathon and embark on a thrilling coding journey that promises to ignite your skills"
            </p>
            <button className="text-xs sm:text-base w-max px-4 sm:px-6 py-2 sm:py-3 cursor-pointer h-max border menu-button">
              APPLY NOW
            </button>
          </div>
        </section>
        <Faq className='min-h-screen'/>
      </section>
      <footer />
    </>
  );
}

export default Home;
