import React from 'react';
import { Timeline, TimelineHeaders, SidebarHeader, DateHeader } from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';

const TimelineComponent = () => {
  const groups = [{ id: 1, title: 'Group 1' }];
  const items = [
    {
      id: 1,
      group: 1,
      title: 'DEVFOLIO Form Closes',
      start_time: new Date(2024, 1, 29),
      end_time: new Date(2024, 1, 29),
    },
    {
      id: 2,
      group: 1,
      title: 'Ideation PPT Submission on Devfolio',
      start_time: new Date(2024, 2, 1),
      end_time: new Date(2024, 2, 7),
    },
    {
      id: 3,
      group: 1,
      title: 'Filtration Round',
      start_time: new Date(2024, 2, 8),
      end_time: new Date(2024, 2, 11),
    },
    {
      id: 4,
      group: 1,
      title: 'Filtration Results Announcement',
      start_time: new Date(2024, 2, 11),
      end_time: new Date(2024, 2, 11),
    },
    {
      id: 5,
      group: 1,
      title: 'Introductory Ceremony',
      start_time: new Date(2024, 2, 14),
      end_time: new Date(2024, 2, 14),
    },
    {
      id: 6,
      group: 1,
      title: 'Hacking Starts',
      start_time: new Date(2024, 2, 15, 9, 30),
      end_time: new Date(2024, 2, 15, 9, 30),
    },
    {
      id: 7,
      group: 1,
      title: 'Hacking Ends',
      start_time: new Date(2024, 2, 16, 21, 30),
      end_time: new Date(2024, 2, 16, 21, 30),
    },
    {
      id: 8,
      group: 1,
      title: 'Prize Distribution Ceremony\nBYE BYE CAD2.0!',
      start_time: new Date(2024, 2, 17),
      end_time: new Date(2024, 2, 17),
    },
  ];

  return (
    <div className="bg-[#0d0221] grid text-white-off py-10">
      <h1 className="font-[Power] md:text-7xl text-white text-3xl font-semibold text-center mb-6 py-10">
        TIMELINE
      </h1>
      <div className="md:mx-10 mx-5">
        <Timeline
          groups={groups}
          items={items}
          defaultTimeStart={new Date(2024, 1, 28)}
          defaultTimeEnd={new Date(2024, 2, 18)}
        >
          <TimelineHeaders>
            <SidebarHeader>
              {({ getRootProps }) => {
                return <div {...getRootProps()}>Group</div>;
              }}
            </SidebarHeader>
            <DateHeader unit="primaryHeader" />
            <DateHeader />
          </TimelineHeaders>
        </Timeline>
      </div>
    </div>
  );
};

export default TimelineComponent;
