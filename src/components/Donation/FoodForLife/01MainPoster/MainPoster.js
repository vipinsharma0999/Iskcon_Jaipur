"use client";
import React from "react";
import { Merriweather_Sans, Oswald, Dosis } from "next/font/google";
import SadhuPaymentSection from "../../SadhuSeva/04SadhuPaymentSection/SadhuPaymentSection";

const merri = Merriweather_Sans({
  subsets: ["latin"],
});

const merry = Merriweather_Sans({
  subsets: ["latin"],
});

const oswa = Oswald({
  subsets: ["latin"],
});

const dosis = Dosis({
  subsets: ["latin"],
});

const feed = [
  {
    id: "1",
    Title: "General Donation",
    Price: "₹ Amount of your choice ~ Serving for Dharma purifies your soul.",
  },
  {
    id: "2",
    Title: "Donate 21 Meals",
    Price: "₹ 525 ~ Do your part and contribute this amount.",
  },
  {
    id: "3",
    Title: "Donate 51 Meals",
    Price: "₹ 1,275 ~ Do your part and contribute this amount.",
  },
  {
    id: "4",
    Title: "Donate 151 Meals",
    Price: "₹ 3,775 ~ Do your part and contribute this amount.",
  },
  {
    id: "5",
    Title: "Donate 251 Meals",
    Price: "₹ 6,225 ~ Do your part and contribute this amount.",
  },
  {
    id: "6",
    Title: "Donate 501 Meals",
    Price: "₹ 12,525 ~ Do your part and contribute this amount.",
  },
  {
    id: "7",
    Title: "Donate 1,001 Meals",
    Price: "₹ 25,025 ~ Do your part and contribute this amount.",
  },
  {
    id: "8",
    Title: "Donate 3,001 Meals",
    Price: "₹ 75,025 ~ Do your part and contribute this amount.",
  },
  {
    id: "9",
    Title: "Donate 5,001 Meals",
    Price: "₹ 1,25,025 ~ You can serve these meals to needy people.",
  },
];

export default function MainPoster() {
  return (
    <>
      <div className="bg-[url('/Donation/FoodForNeed/BannerforHome.jpg')] h-[100vh]   bg-cover bg-center w-full mt-[60px]">
        <div className="absolute flex flex-col items-center w-full top-[60vh] justify-center">
          <h1
            className={`font-bold text-white text-6xl md:text-7xl text-center ${merri.className}`}
            style={{
              textShadow:
                "2px 2px black, 20px 20px 50px #d17a29, -20px -20px 50px #d17a29, -20px 20px 50px #d17a29, 20px -20px 50px black",
            }}
          >
            Food Relief
          </h1>
          <button
            className={`relative bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% mt-3 font-bold text-[#ffffff] text-[20px] py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-full overflow-hidden`}
          >
            Donate Now
          </button>
        </div>
      </div>

      <div className="relative bg-[url('/Donation/FoodForNeed/mv2.jpg')] bg-cover bg-center w-full">
        <div style={{ backgroundColor: "#38002099", paddingBottom: "44px" }}>
          <div className=" mx-[20px] lg:mx-[220px] py-[40px]">
            <div className=" flex">
              <p
                className={`text-[30px] py-[30px] font-medium text-[#ffffff] text-center ${oswa.className}`}
              >
                "Support our food donation drive, combating hunger by offering
                nutritious meals to the needy. Your backing holds transformative
                potential. Let&apos;s unite for change, effecting tangible
                results together!"
              </p>
            </div>
          </div>

          {/* donation section start */}
          <div className=" flex flex-col items-center mb-[40px]">
            {feed.map((feed) => (
              <>
                <div className=" flex flex-col w-3/4 pt-[27px] pb-[10px] md:flex-row gap-1 ">
                  <div className=" flex flex-col justify-center items-center md:justify-start md:items-start  w-full md:w-1/2">
                    <div className="pb-[1px]">
                      <span
                        className={`text-[30px] sm:text-[34px] font-bold text-white ${dosis.className}`}
                      >
                        {feed.Title}
                      </span>
                    </div>
                    <div className="max-md:text-center">
                      <span
                        className={`text-[18px] font-bold text-white ${merry.className}`}
                      >
                        {feed.Price}
                      </span>
                    </div>
                  </div>
                  <div className=" w-full md:w-1/2 flex justify-center items-center">
                    <button
                      className={`bg-[#FCD6A0]  font-medium text-[20px] text-[#870909] py-2 px-4 md:py-2  md:px-4 rounded-full drop-shadow-xl ${merry.className} hover:scale-105 transition-transform `}
                    >
                      Donate Now
                    </button>
                  </div>
                </div>
                <div className="border-b-[1px] w-3/4 border-yellow-400"></div>
              </>
            ))}
          </div>
          {/* donation section end */}

          <SadhuPaymentSection />
        </div>
      </div>
    </>
  );
}
