"use client";
import { Dancing_Script, Kanit, Playfair_Display } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const HomeDonate = () => {
  return (
    <div className="pb-14 bg-white">
      <div className={`pt-16 pb-4 text-center ${dancing.className}`}>
        <h1 className="text-6xl font-[900]">Recieve Blessings from</h1>
        <h1 className="text-6xl font-[900]">Sri Sri Giridhari Dauji</h1>
      </div>
      <div>
        <div className="pt-10 flex md:flex-row flex-col justify-evenly gap-4">
          <div className="flex flex-col items-center pb-4">
            <div className="text-center shadow-md">
              <div className="h-[120px] w-[200px] bg-[url('/Home/HomeExplore/homeSchedule.jpg')] bg-cover bg-center"></div>
              <h1 className={`${dancing.className} pt-4 font-black`}>
                Visit Temple
              </h1>
              <button className="px-2 py-1 bg-[#d17a29] mb-2 text-white rounded-full mt-1">
                Donate
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center pb-4">
            <div className="text-center shadow-md">
              <div className="h-[120px] w-[200px] bg-[url('/Home/HomeExplore/homeSchedule.jpg')] bg-cover bg-center"></div>
              <h1 className={`${dancing.className} pt-4 font-black`}>
                Guest House
              </h1>
              <button className="px-2 py-1 bg-[#d17a29] mb-2 text-white rounded-full mt-1">
                Donate
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center pb-10">
            <div className="text-center shadow-md">
              <div className="h-[120px] w-[200px] bg-[url('/Home/HomeExplore/homeSchedule.jpg')] bg-cover bg-center"></div>
              <h1 className={`${dancing.className} pt-4 font-black`}>
                Govinda's
              </h1>
              <button className="px-2 py-1 bg-[#d17a29] mb-2 text-white rounded-full mt-1">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDonate;
