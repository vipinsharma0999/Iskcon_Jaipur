"use client";

import { Architects_Daughter, Satisfy } from "next/font/google";
import { campus } from "./campusData";

const architect = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
});

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
});

const CampusAttraction = () => {
  return (
    <div className="p-16 px-8">
      <h1 className={`${architect.className} pb-4 text-5xl text-center`}>
        Temple Campus Attraction
      </h1>
      <div className="2xl:flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 gap-4 place-items-center 2xl:w-[1250px]">
          {campus.map((c, i) => (
            <div key={i} className="w-52 bg-white shadow-md p-4">
              <figure>
                <img
                  src={c.campusImg}
                  alt="Shoes"
                  className="w-40 h-40 object-cover rounded-full"
                />
              </figure>
              <div className="card-body items-center justify-center">
                <h2
                  className={`${satisfy.className} card-title text-3xl justify-center text-center w-[115px]`}
                >
                  {c.title}
                </h2>
                <div className="card-actions justify-center">
                  <button className="bg-[#c69653] py-2 px-3 font-semibold rounded-full text-white flex items-center gap-1">
                    Visit <img src="/IJP/right.svg" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusAttraction;
