"use client";

import { Playfair } from "next/font/google";
import { featuresGovindas } from "./featuresData";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Features = () => {
  return (
    <div className="py-10 px-4 sm:px-10">
      <div className="flex flex-wrap justify-center gap-7 sm:gap-10 lg:gap-16">
        {featuresGovindas.map((feature, i) => (
          <div className="flex items-center gap-2" key={i}>
            <div className="h-9 w-9 rounded-full flex justify-center items-center bg-[#d17a29]">
              <img src={feature.icon} className="h-7" />
            </div>
            <h4 className="font-medium">{feature.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
