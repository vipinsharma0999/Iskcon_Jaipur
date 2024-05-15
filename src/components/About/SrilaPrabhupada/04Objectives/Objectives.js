"use client";
import { Playfair_Display } from "next/font/google";
import { useState } from "react";
import { qualities } from "./qualities";

const play = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const MyComponent = ({ point }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-full w-full bg-black/50 flex justify-center p-2 flex-col"
      style={{
        opacity: isHovered ? 1 : 0,
        transition: "opacity 0.2s ease-in-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p
        className={`${play.className} text-justify text-[12px] m-0 text-gray-100`}
        style={{
          textAlignLast: "center",
        }}
      >
        {point}
      </p>
    </div>
  );
};

const Objectives = () => {
  return (
    <div className={`py-10 text-center bg-[#ececec]`}>
      <h1 className={`${play.className} pb-5 px-2`}>
        Srila <span className="text-[#d17a29]">Prabhupada</span>: The Ocean of Qualities
      </h1>
      <div className="flex gap-x-2 gap-y-4 flex-row flex-wrap justify-center">
        {qualities.map((quality, index) => (
          <div className="bg-white" key={index}>
            <h5 className={`${play.className}`}>{quality.title}</h5>
            <div
              className="w-[180px] h-[180px] text-white bg-contain"
              style={{ backgroundImage: `url(${quality.img})` }}
            >
              <MyComponent point={quality.point} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Objectives;
