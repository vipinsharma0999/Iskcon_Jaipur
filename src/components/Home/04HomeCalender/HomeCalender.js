"use client";
import { useState } from "react";
import { Calendar, Badge } from "rsuite";
import { LuClock4 } from "react-icons/lu";
import "./HomeCalendar.css";

const eventList = {
  "2024-05-10": [
    { time: "10:30 am", title: "Meeting" },
    { time: "12:00 pm", title: "Lunch" },
  ],
  "2024-05-14": [
    { time: "09:30 pm", title: "Products Introduction Meeting" },
    { time: "12:30 pm", title: "Client entertaining" },
    { time: "02:00 pm", title: "Product design discussion" },
    { time: "05:00 pm", title: "Product test and acceptance" },
    { time: "06:30 pm", title: "Reporting" },
    { time: "10:00 pm", title: "Going home to walk the dog" },
  ],
  // Add more dates and events here
};

const HomeCalendar = () => {
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);

  function handleDateClick(date) {
    const key = date.toISOString().split("T")[0];
    const list = eventList[key] || [];
    setSelectedDateEvents(list);
  }

  function renderCell(date) {
    const key = date.toISOString().split("T")[0];
    const list = eventList[key] || [];

    if (list.length) {
      return (
        <Badge
          className="bg-[#d17a29]"
          content="Event"
          onClick={() => handleDateClick(date)}
        />
      );
    }

    return null;
  }

  return (
    <div className="w-full p-5 min-h-screen flex font-medium flex-col items-center justify-center">
      <span className="md:hidden text-4xl text-[#ff7a29]">Events Calendar</span>
      <Calendar bordered renderCell={renderCell} />
      <div className="w-[97%] max-h-40 overflow-auto p-2 border-[1px] border-gray-300">
        {selectedDateEvents.map((event, index) => (
          <p key={index}>
            <span className="flex gap-2 items-center">
              <LuClock4 className="text-red-500" />
              <b>{event.time}</b>
            </span>
            <div>{event.title}</div>
          </p>
        ))}
      </div>
    </div>
  );
};

export default HomeCalendar;
