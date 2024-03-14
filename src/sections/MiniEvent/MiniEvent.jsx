import aiml from "./aiml_workshop_poster.png";
import cpl from "./cpl_poster.png";

const MiniEvent = () => {
  return (
    <div className=" md:h-screen w-screen flex items-center justify-center">
      <div className="h-fit md:h-[80vh] w-[90vw] flex flex-col items-center justify-center bg-gray-400 rounded-md backdrop-blur-sm bg-opacity-10 border border-[#E2319A] p-4">
        <div className="font-[Power] text-3xl sm:text-6xl my-8 sm:my-16 px-6 sm:px-12 text-center">
          <p>Announcing 2 New Events</p>
        </div>
        <div className="flex flex-col md:flex-row h-fit md:h[50vh] w-[90vw] items-center justify-center md:justify-around space-x-4 space-y-4">
          <img
            src={cpl}
            alt="CPL Poster"
            className="w-[75vw] h-auto md:w-auto md:h-[50vh] object-contain"
          />
          <img
            src={aiml}
            alt="Workshop Poster"
            className="w-[75vw] h-auto md:w-auto md:h-[50vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};
export default MiniEvent;
