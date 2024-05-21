"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { activities } from "./activitiesData";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
})

const Activities = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHoverStart = (index) => {
    setHoveredIndex(index);
  };

  const handleHoverEnd = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="bg-[#d17a29] text-black p-4 md:p-10">
      <h1 className={`${dancing.className} text-6xl text-white`}>What We Do</h1>
      <hr className="sm:w-1/2 border-white mt-2 mb-0" />
      <div className="flex flex-wrap justify-evenly gap-10">
        {activities.map((pt, i) => (
          <div
            className="relative w-72 pt-10"
            key={i}
          >
            <div
              className="h-80 rounded-lg bg-white"
            >
              <div>
                <h4 className="text-center py-2 font-medium">{pt.title}</h4>
                <img src={pt.image} className="object-cover object-left h-64" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
