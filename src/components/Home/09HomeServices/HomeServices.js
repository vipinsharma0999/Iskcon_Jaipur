"use client";

import { Architects_Daughter, Dancing_Script } from "next/font/google";

const architects = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const HomeServices = () => {
  return (
    <div className="bg-[#d17a29] text-white min-h-[60vh]">
      <div className={`pt-16 text-center ${architects.className}`}>
        <h1 className="text-6xl font-[400]">Our Services</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-10 flex flex-col items-center">
            <div
              className="h-[150px] w-[175px] bg-[url('/Home/HomeExplore/homeSchedule.jpg')] bg-cover bg-center"
              style={{ clipPath: "polygon(100% 0%, 0 20%, 0 100%, 100% 80%)" }}
            ></div>
            <h1 className={`${dancing.className} rotate-[-9deg]`}>House Program</h1>
          </div>
          <div className="p-10 flex flex-col items-center">
            <div
              className="h-[150px] w-[175px] bg-[url('/Home/HomeExplore/homeSchedule.jpg')] bg-cover bg-center"
              style={{ clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 80%)" }}
            ></div>
            <h1 className={`${dancing.className} rotate-[9deg]`}>Community Hall</h1>
          </div>
          <div className="p-10 flex flex-col items-center">
            <div
              className="h-[150px] w-[175px] bg-[url('/Home/HomeExplore/homeSchedule.jpg')] bg-cover bg-center"
              style={{ clipPath: "polygon(0 20%, 100% 0%, 100% 80%, 0 100%)" }}
            ></div>
            <h1 className={`${dancing.className} rotate-[-9deg]`}>Yatra</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
