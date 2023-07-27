import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is CAD?",
      answer:
        "CAD (Coding Ninjas Annual Developers) is a hackathon organized by Coding Ninjas SRM. It is an opportunity for developers to showcase their coding skills and creativity in a competitive environment.",
    },
    {
      question: "Who can participate in CAD?",
      answer:
        "CAD is open to all coding enthusiasts, including students and professionals. Whether you are a beginner or an experienced developer, you are welcome to participate and showcase your talent.",
    },
    {
      question: "How can I register for CAD?",
      answer:
        "To register for CAD, visit the official website of Coding Ninjas SRM and navigate to the CAD hackathon page. Fill out the registration form with your details and submit it. Keep an eye on your email for further updates.",
    },
    {
      question: "What is the duration of CAD?",
      answer:
        "CAD is a multi-day hackathon that typically spans over a weekend. Participants will be provided with the specific dates and duration of the event when they register.",
    },
    // Add more FAQ data as needed
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="font-[Power] max-w-5xl min-h-[80vh] mx-auto px-10 py-10">
      <h2 className="md:text-5xl  text-3xl font-semibold text-center mb-6 py-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`border-b border-pink-500 border-b-[0.5px] shadow overflow-hidden transition-height duration-300 ease-in ${
              index === activeIndex ? "h-auto" : "h-14"
            }`}
          >
            <div
              className="flex items-center justify-between px-6 py-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-xl font-regular text-white">
                {faq.question}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`h-6 w-6 transition-transform duration-300 transform ${
                  index === activeIndex ? "rotate-180" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {index === activeIndex && (
              <div className="text-lg px-6 py-4">
                <p className="text-gray-300 ">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;





