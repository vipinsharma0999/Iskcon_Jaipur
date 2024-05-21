"use client";

import { Dancing_Script, Playfair_Display } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const HomeActivities = () => {
  return (
    <div className="bg-[#fac592] text-white">
      <div className={`pt-16 text-center text-gray-700 ${playfair.className}`}>
        <h1 className="text-6xl font-[500]">Connect With Us</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 text-center">
          <div className="p-10 flex flex-col items-center">
            <div className="h-[350px] relative w-full bg-[url('/Home/HomeExplore/homeSchedule.jpg')] bg-cover bg-center">
              <h1 className={`absolute bottom-2 w-full ${playfair.className} pt-4 font-medium px-4`}>ISKCON Youth Forum</h1>
            </div>
          </div>
          <div className="p-10 flex flex-col items-center">
            <div className="h-[350px] relative w-full bg-[url('/Home/HomeExplore/homeSchedule.jpg')] bg-cover bg-center">
              <h1 className={`${playfair.className} absolute bottom-2 w-full pt-4 font-medium px-4`}>Kids And Teenager Classes</h1>
            </div>
          </div>
          <div className="p-10 flex flex-col items-center">
            <div className="relative h-[350px] w-full bg-[url('/Home/HomeExplore/homeSchedule.jpg')] bg-cover bg-center">
              <h1 className={`${playfair.className} absolute bottom-2 w-full pt-4 font-medium px-4`}>Bhakti Vriksha</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeActivities;
