"use client"
import { Calendar, Popover, Whisper, Badge } from 'rsuite';
import './HomeCalender.css'

const eventList = {
  '2024-04-10': [
    { time: '10:30 am', title: 'Meeting' },
    { time: '12:00 pm', title: 'Lunch' }
  ],
  '2024-04-14': [
    { time: '09:30 pm', title: 'Products Introduction Meeting' },
    { time: '12:30 pm', title: 'Client entertaining' },
    { time: '02:00 pm', title: 'Product design discussion' },
    { time: '05:00 pm', title: 'Product test and acceptance' },
    { time: '06:30 pm', title: 'Reporting' },
    { time: '10:00 pm', title: 'Going home to walk the dog' }
  ],
  // Add more dates and events here
};

const HomeCalendar = () => {
  function renderCell(date) {
    const key = date.toISOString().split('T')[0];
    const list = eventList[key] || [];

    if (list.length) {
      const popoverContent = (
        <Popover>
          {list.map((item, index) => (
            <p key={index}>
              <b>{item.time}</b> - {item.title}
            </p>
          ))}
        </Popover>
      );

      return (
        <Whisper placement="left" trigger="click" speaker={popoverContent}>
          <Badge className='bg-[#d17a29]' content="Event" />
        </Whisper>
      );
    }

    return null;
  }

  return (
    <div className='w-full h-screen flex gap-20 font-medium flex-col items-center justify-center'>
      <span className='md:hidden text-4xl text-[#ff7a29]'>Events Calender</span>
      <Calendar bordered renderCell={renderCell} />
    </div>
  );
};

export default HomeCalendar;
