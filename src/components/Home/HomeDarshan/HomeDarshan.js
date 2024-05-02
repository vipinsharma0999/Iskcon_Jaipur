"use client";
import { Dancing_Script } from "next/font/google";
import Carousel from "react-bootstrap/Carousel";

const images = [
  "/Home/HomeDarshan/Sri Sri Gaura Nitai.webp",
  "/Home/HomeDarshan/Sri Sri Giridhari Dauji.webp",
  "/Home/HomeDarshan/Sri Sri Radha MadanMohan.webp",
];

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const HomeDarshan = () => {
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
      <div className="relative mx-auto w-full max-w-7xl flex justify-center">
        <button className="absolute z-[100] bg-gradient-to-r from-pink-500 to-yellow-500 transition-colors duration-1000 text-white px-3 py-2 rounded-full text-2xl font-medium sm:bottom-[-35px] bottom-[-60px]">
          More{" "}
        </button>
        <Carousel fade className="h-full">
          {images.map((image, index) => (
            <Carousel.Item key={index} className="h-full">
              <img
                src={image}
                alt={`slide ${index}`}
                className="d-block w-100 h-full object-cover"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeDarshan;
