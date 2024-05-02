"use client";
import React from "react";
import {
  Merriweather_Sans,
  Dosis,
} from "next/font/google";

const merri = Merriweather_Sans({
  subsets: ["latin"],
});

const merry = Merriweather_Sans({
  subsets: ["latin"],
});

const dosis = Dosis({
  subsets: ["latin"],
});

const feed = [
  {
    id: "1",
    Title: "Feed 251 Sadhus",
    Price: "₹ 11,000 ~ Single Meal",
  },
  {
    id: "2",
    Title: "Feed 111 Sadhus",
    Price: "₹ 51,00 ~ Single Meal",
  },
  {
    id: "3",
    Title: "Amount of your",
    Price: "choice",
  },
];

export default function SadhuDonationSection() {
  return (
    <>
      {/* feed the sadhus section start */}
      <div className=" mx-[20px] lg:mx-[220px] mb-[40px] pt-12 ">
        <div className=" flex flex-col">
          <div className=" pb-[10px] text-center sm:text-left">
            <h2
              className={`text-[50px] font-bold text-[#ffffff] ${merri.className}`}
            >
              Feed the Sadhus
            </h2>
          </div>
          <div className="">
            <p
              className={`text-[20px] text-[#ffffff] text-justify ${merri.className}`}
            >
              Sadhu Bhojdan implies “Donation to Sadhu.” You can donate and
              support true saints living in the ISKCON Mandir. Saints spread
              love and become a carrier of the Lord’s kindness.
            </p>
          </div>
        </div>
      </div>
      {/* feed the sadhus section end */}

      {/* donation section start */}
      <div className=" flex flex-col items-center mb-[40px] ">
        {feed.map((feed) => (
          <>
            <div className=" flex flex-col w-3/4 pt-[27px] pb-[10px] md:flex-row gap-2">
              <div className=" flex flex-col justify-center items-center md:justify-start md:items-start  w-full md:w-1/2">
                <div className="pb-[10px]">
                  <p
                    className={`text-[34px] font-bold text-white ${dosis.className}`}
                  >
                    {feed.Title}
                  </p>
                </div>
                <div>
                  <p
                    className={`text-[18px] font-bold text-white ${merry.className}`}
                  >
                    {feed.Price}
                  </p>
                </div>
              </div>
              <div className=" w-full md:w-1/2 flex justify-center items-center">
                <button
                  className={`bg-[#FCD6A0] font-medium text-[20px] text-[#870909] py-2 px-4 md:py-2 md:px-4 rounded-full drop-shadow-xl ${merry.className} hover:scale-105 transition-transform`}
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
    </>
  );
}
