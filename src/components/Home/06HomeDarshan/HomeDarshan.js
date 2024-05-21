"use client";
import { Dancing_Script } from "next/font/google";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "/Home/HomeDarshan/Sri Sri Gaura Nitai.webp",
  "/Home/HomeDarshan/Sri Sri Giridhari Dauji.webp",
  "/Home/HomeDarshan/Sri Sri Radha MadanMohan.webp",
];

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const HomeDarshan = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="relative h-[80vh] md:h-[90vh] flex items-center bg-white bg-cover">
      <div
        className={`absolute z-[10] top-8 text-white text-6xl w-full text-center sm:text-7xl font-bold ${dancing.className}`}
        style={{
          textShadow:
            "-1px 1px 0 #000000, 2px -2px 0 #000000, 10px -10px 20px #ffd729, -15px 15px 20px #ffd729",
        }}
      >
        <span className="">Vigraha Darshan</span>
      </div>
      <div className="relative mx-auto w-full max-w-7xl flex items-center flex-col-reverse">
        <button className="z-[100] mt-2 bg-gradient-to-r from-pink-500 to-yellow-500 transition-colors duration-1000 text-white w-28 py-2 rounded-full text-2xl font-medium sm:bottom-[-35px] bottom-[-60px]">
          More{" "}
        </button>
        <Carousel
          infiniteLoop
          showStatus={false}
          showIndicators
          interval={5000}
          showThumbs={false}
          onChange={handleSelect}
          fade
          className="h-full"
        >
          {images.map((image, index) => (
            <div key={index} className="h-full">
              <img
                src={image}
                alt={`slide ${index}`}
                className="d-block w-100 h-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeDarshan;
