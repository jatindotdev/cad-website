import { motion } from "framer-motion";
import Landing from "../sections/Landing/Landing";
import Tracks from "../../components/Tracks";
import About from "../sections/About/About";
import Faq from "../sections/FAQ/Faq";

function Home() {
  return (
    <>
      <section className="bg-[#200837] text-white">
        <section className="min-h-screen font-[vcr-osd]">
          <Landing />
        </section>
        <About/>
        <section className="overflow-hidden font-[vcr-osd] flex flex-col px-12 text-center py-20 bg-[#E2319A]">
          <motion.div
            className="flex text-6xl whitespace-nowrap uppercase mb-10 font-bold"
            initial={{ x: -100 }}
            animate={{ x: 100 }}
            transition={{ duration: 3, repeat: 100, ease: "linear" }}>
            Register Now / Interesting Prizes / Register Now / Interesting Prizes /
          </motion.div>
          <div className="flex flex-col justify-center items-center text-lg">
            <p className="mb-5">
              Is your business all about glass, or are you thinking about
              including glass interactions in your ideal website?
            </p>
            <button className="text-xs w-max px-[25px] py-[10px] cursor-pointer h-max border menu-button">
              Get in touch for a special deal
            </button>
          </div>
        </section>
      </section>
      <Tracks />
      <section className="bg-[#200837] text-white">
        <Faq className="min-h-screen" />
      </section>
      <footer />
    </>
  );
}

export default Home;
