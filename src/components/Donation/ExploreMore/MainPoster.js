"use client";
import React from "react";
import "flowbite";
import Image from 'next/image';
import Link from 'next/link';

import {
  Caveat,
  Playfair_Display,
  Quicksand,
  Oswald,
  Montserrat,
  Merriweather_Sans,
} from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const oswald1 = Oswald({
  subsets: ["latin"],
});

const caveat1 = Caveat({
  subsets: ["latin"],
});

const mons = Montserrat({
  subsets: ["latin"],
});

const merry = Merriweather_Sans({
  subsets: ["latin"],
});

const merri = Merriweather_Sans({
  subsets: ["latin"],
});

const feed = [
  {
    id: "1",
    img: "/Donation/FoodForNeed/Needy.jpg",
    Title: "Food For Needy",
  },
  {
    id: "2",
    img: "/Donation/SadhuSeva/Sadhu.jpg",
    Title: "Sadhu Seva",
  },
  {
    id: "3",
    img: "/Donation/NityaSeva/nitya-seva-mainpage.jpg",
    Title: "Nitya Seva",
  },
  {
    id: "4",
    img: "/Donation/GauSeva/Gaushala.jpg",
    Title: "Gau Seva",
  },
  {
    id: "5",
    img: "/Donation/PujaSeva/puja.jpg",
    Title: "Puja",
  },
];

const MainPoster = () => {
  const imageSize = { width: 800, height: 1000 }; // Set width and height to match the "Gau Seva" image
  const firstRow = feed.slice(0, 3); // First three items for the first row
  const secondRow = feed.slice(3); // Remaining items for the second row

  return (
    <div className="flex flex-wrap justify-center mt-20">
      {/* Rendering the first row */}
      {firstRow.map((item, index) => (
        <div
          key={item.id}
          className=" shadow-lg max-w-xs bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 mx-10 mb-6 w-full md:w-1/3 flex-shrink-0
          hover:scale-110 transition-transform duration-500 "
        >
          <Link href="#">
            <Image
              className="rounded-t-lg"
              src={item.img}
              alt={item.Title}
              width={imageSize.width}
              height={imageSize.height}
              layout="responsive"
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">
              {item.Title}
            </h5>
            <Link href="#">
              <button className = {`ml-[80px] bg-[#fb3f3f] font-medium text-[20px] text-[#ffffff] py-2 px-4 md:py-2 md:px-4 rounded-full drop-shadow-xl ${caveat1.className} transition-transform hover:scale-105`}>
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      ))}

      {/* Rendering the second row */}
      {secondRow.map((item, index) => (
        <div
          key={item.id}
          className="shadow-lg mt-5 max-w-xs bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 mx-10 mb-6 w-full md:w-1/2 flex-shrink-0
          hover:scale-110 transition-transform duration-500"
        >
          <Link href="#">
            <Image
              className="rounded-t-lg"
              src={item.img}
              alt={item.Title}
              width={200}
              height={100}
              layout="responsive"
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">
              {item.Title}
            </h5>
            <Link href="#">
              <button className={`ml-[90px] bg-[#fb3f3f] font-medium text-[20px] text-[#ffffff] py-2 px-4 md:py-2 md:px-4 rounded-full drop-shadow-xl ${caveat1.className} transition-transform hover:scale-105`}>
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPoster;
