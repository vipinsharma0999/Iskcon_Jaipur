'use client'
import React from 'react'
import {Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function RoomSection()  {
  return (
    <>
      {/* <room section start> */}
        <div className=" flex mx-[30px] sm:mx-[92px] justify-evenly items-center flex-wrap gap-5 my-10">
        <div className="flex flex-col  gap-2 w-full justify-center items-center ">
          <div>
            <p className="text-[#D9A55B] text-[22px] tracking-widest ">Discover Our Room</p>
          </div>
          <div>
            <p
              className={`md:text-[55px] text-[24px] flex justify-center items-center ${playfair.className}`}
            >
              A Gander At Our Rooms
            </p>
          </div>
        </div>
        <div
          className="w-[365px] h-[400px] bg-cover bg-center shadow-xl"
          style={{ backgroundImage: "url('/Explore/GuestHouse/room3.jpg')" }}
        >
          <div className=" flex flex-col gap-5 p-[10px]">
            <div className=" h-[238px]"></div>
            <div className=" h-[100px]">
              <h1
                className={`text-[30px] text-white animate-bounce  ${playfair.className} `}
              >
                Standard Room
              </h1>
              <h1
                className={`text-[18px] text-white animate-bounce  ${playfair.className}`}
              >
                $45/Night
              </h1>
            </div>
          </div>
        </div>

        <div
          className="w-[365px] h-[400px] bg-cover bg-center shadow-xl"
          style={{ backgroundImage: "url('/Explore/GuestHouse/room2.jpg')" }}
        >
          <div className=" flex flex-col gap-5 p-[10px]">
            <div className=" h-[238px]"></div>
            <div className=" h-[100px]">
              <h1
                className={`text-[30px] text-white animate-bounce  ${playfair.className} `}
              >
                Superior Room
              </h1>
              <h1
                className={`text-[18px] text-white animate-bounce  ${playfair.className}`}
              >
                $129/Night
              </h1>
            </div>
          </div>
        </div>

        <div
          className="w-[365px] h-[400px] bg-cover bg-center shadow-xl"
          style={{ backgroundImage: "url('/Explore/GuestHouse/room1.jpg')" }}
        >
          <div className=" flex flex-col gap-5 p-[10px]">
            <div className=" h-[238px]"></div>
            <div className=" h-[100px]">
              <h1
                className={`text-[30px] text-white animate-bounce  ${playfair.className} `}
              >
                Grand Delux Room
              </h1>
              <h1
                className={`text-[18px] text-white animate-bounce  ${playfair.className}`}
              >
                $99/Night
              </h1>
            </div>
          </div>
        </div>
        </div>
      {/* <room section start> */}
    </>
  )
}
