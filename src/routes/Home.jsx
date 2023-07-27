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
        <section className="max-w-7xl min-h-screen flex flex-col justify-center items-center mx-auto px-16">
          <div className="">
            <h2 className="font-[Power] w-full mb-6 text-7xl text-center">
              ACCESS THE GLOBAL SYSTEM <br /> OF INTERCONNECTED <br /> COMPUTER
              NETWORKS.
            </h2>
          </div>
          <div className="flex gap-10 font-[Swansea] mb-10">
            <div className="flex-1">
              <p>
                I'm Dylan and I'm a <strong>web designer</strong> and{" "}
                <strong>web developer</strong>, passionate about{" "}
                <em>graphic design and 3D graphics</em>. I've always liked being
                able to experiment with new methods to create something unique,
                from the graphics of a post, a product or a website.
              </p>
              <p>
                So I decided to turn my passion into a job and today I develop
                <em> creative websites </em>of all kinds.
              </p>
              <p>
                My goal is to{" "}
                <em>bring to life modern and particular projects</em>, for this
                I study and make use of the latest technologies that allow me to
                create <strong>unique experiences</strong>.
              </p>{" "}
            </div>
            <div className="flex-1">
              <p>
                For every entrepreneur and business owner, your brilliant ideas
                can get bigger. The passion for innovative design is fueled by
                the goals and needs of your company. There are no projects too
                big or too small.
              </p>
              <p>
                It's constant growth, every project teaches me a lot and the
                quality of my work is always on the rise.
              </p>
            </div>
          </div>
        </section>
        <div className="font-[Power] text-6xl mb-16 px-12 text-center">
          <p>Make the winning choice.</p>
        </div>
        <section className="overflow-hidden font-[vcr-osd] flex flex-col px-12 text-center py-20 bg-[#E2319A]">
          <motion.div
            className="flex text-6xl whitespace-nowrap uppercase mb-10 font-bold"
            initial={{ x: -100 }}
            animate={{ x: 100 }}
            transition={{ duration: 3, repeat: 100, ease: "linear" }}>
            Limited offer / Limited offer / Limited offer / Limited offer /
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
      <Faq className="min-h-screen" />
      <footer />
    </>
  );
}

export default Home;
