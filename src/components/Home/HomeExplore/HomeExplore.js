"use client";

import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const HomeExplore = () => {
  return (
    <>
      <div className={`pt-16 text-center bg-white ${dancing.className}`}>
        <h1 className="text-6xl font-[900]">Explore ISKCON</h1>
        <h1 className="text-6xl font-[900] m-0">Jaipur</h1>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white">
          <div className="p-10 flex flex-col items-center">
            <div className="h-[175px] w-[175px] bg-[url('/Home/HomeExplore/homeSchedule.jpg')] bg-cover bg-center rounded-full"></div>
            <h1 className={`${dancing.className} pt-4 font-black m-0`}>
              Visit Temple
            </h1>
          </div>
          <div className="p-10 flex flex-col items-center">
            <div className="h-[175px] w-[175px] bg-[url('/Home/HomeExplore/homeSchedule.jpg')] bg-cover bg-center rounded-full"></div>
            <h1 className={`${dancing.className} pt-4 font-black m-0`}>
              Guest House
            </h1>
          </div>
          <div className="p-10 flex flex-col items-center">
            <div className="h-[175px] w-[175px] bg-[url('/Home/HomeExplore/homeSchedule.jpg')] bg-cover bg-center rounded-full"></div>
            <h1 className={`${dancing.className} pt-4 font-black`}>
              Govinda&apos;s
            </h1>
          </div>
          <div className="p-10 flex flex-col items-center ">
            <div className="h-[175px] w-[175px] bg-[url('/Home/HomeExplore/homeSchedule.jpg')] bg-cover bg-center rounded-full"></div>
            <h1 className={`${dancing.className} pt-4 font-black`}>
              Vrindavan Haat
            </h1>
          </div>
          <div className="p-10 flex flex-col items-center">
            <div className="h-[175px] w-[175px] bg-[url('/Home/HomeExplore/homeSchedule.jpg')] bg-cover bg-center rounded-full"></div>
            <h1 className={`${dancing.className} pt-4 font-black`}>D&apos; Cafe</h1>
          </div>
          <div className="p-10 flex flex-col items-center">
            <div className="h-[175px] w-[175px] bg-[url('/Home/HomeExplore/homeSchedule.jpg')] bg-cover bg-center rounded-full"></div>
            <h1 className={`${dancing.className} pt-4 font-black`}>
              Gau Shala
            </h1>
          </div>
        </div>
    </>
  );
};

export default HomeExplore;
