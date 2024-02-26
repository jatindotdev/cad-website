import React from 'react';

const Timeline = () => {
  const events = [
    { date: '29/02', description: 'DEVFOLIO Form Closes' },
    { date: '01/03 - 07/03', description: 'Ideation PPT Submission on Devfolio' },
    { date: '08/03 - 11/03', description: 'Filtration Round' },
    { date: '11/03', description: 'Filtration Results Announcement' },
    { date: '14/03', description: 'Introductory Ceremony' },
    { date: '15/03 9:30 am', description: 'Hacking Starts' },
    { date: '16/03 9:30 pm', description: 'Hacking Ends' },
    { date: '17/03', description: 'Prize Distribution Ceremony: BYE BYE CAD2.0!' }
  ];

  return (
    <div className='flex flex-col md:items-center md:justify-center md:px-0 px-10 py-10 bg-[#0d0221] text-white'>
     <h2 className="md:text-5xl font-[Power] text-3xl font-semibold text-center mb-6 py-10">CAD TIMELINE</h2>
    <div className="flex flex-col ">
      {events.map((event, index) => (
        <div className="flex flex-row items-center mb-5" key={index}>
          <div className="md:w-[5vw] flex-shrink-0 mr-4">
            <div className="bg-[#f6019d] rounded-full h-8 w-8 flex items-center justify-center text-white"></div>
          </div>
          <div className='py-3 px-5 flex flex-col justify-center bg-[#200837] rounded-md'>
            <div className="font-bold">{event.date}</div>
            <div>{event.description}</div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Timeline;
