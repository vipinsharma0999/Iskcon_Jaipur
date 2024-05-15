'use client'
import React from 'react'
import {Playfair_Display } from "next/font/google";
import { TbAirConditioning } from "react-icons/tb";
import { ImSpoonKnife } from "react-icons/im";
import { FaWifi } from "react-icons/fa6";
import { LiaSwimmingPoolSolid, LiaUmbrellaBeachSolid } from "react-icons/lia";
import { MdBedroomParent } from "react-icons/md";
import { IoShirtOutline, IoCarSportOutline } from "react-icons/io5";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function FacilitiesSection(){
  return (
    <>
      {/* <facilities section start> */}
      <main className="">
        <div className=" mx-[30px] sm:mx-[92px] flex flex-col my-20 ">
          <div className="flex flex-col xl:flex-row gap-5 mb-[10px]">
            <div className="grow flex flex-col  gap-1 w-full xl:w-[1625px]">
              <div>
                <p className="text-[#D9A55B] text-[22px] tracking-widest">OUR FACILITIES</p>
              </div>
              <div>
                <p className={`text-[55px] ${playfair.className}`}>
                  Our Hotel Facilities
                </p>
              </div>
            </div>
            <div className="grow ">
              <p className="text-[#6C6D72] text-[16px] text-justify p-[5px]">
                Convallis tellus id interdum velit. Et leo duis ut diam quam
                nulla. Ultrices tincidunt arcu non sodales neque sodales ut
                etiam. A scelerisque purus semper eget duis. Ac felis donec et
                odio pellentesque diam volutpat
              </p>
            </div>
          </div>

          <div className=" flex flex-wrap">
            <div className="  grow h-[216px] p-[30px] w-full md:w-1/2 lg:w-1/4 flex flex-col justify-center items-center">
              <div className="w-[100px] h-[100px] rounded-full border border-[#a67b4a] flex justify-center items-center">
                <TbAirConditioning className="text-4xl" />
              </div>
              <div className="w-[242px] h-[26px] flex justify-center items-center mt-[10px]">
                <h2 className="text-[22px] text-[#091826] font-medium">
                  Air Conditioner
                </h2>
              </div>
            </div>

            <div className=" bg-[#3fc94110] grow h-[216px] p-[30px] w-full md:w-1/2 lg:w-1/4 flex flex-col justify-center items-center">
              <div className="w-[100px] h-[100px] rounded-full border border-[#a67b4a] flex justify-center items-center">
                <ImSpoonKnife className="text-[#95af3dc7] text-4xl" />
              </div>
              <div className="w-[242px] h-[26px] flex justify-center items-center mt-[10px]">
                <h2 className="text-[22px] text-[#091826] font-medium">
                  Breakfast
                </h2>
              </div>
            </div>

            <div className=" grow h-[216px] p-[30px] w-full md:w-1/2 lg:w-1/4 flex flex-col justify-center items-center">
              <div className="w-[100px] h-[100px] rounded-full border border-[#a67b4a] flex justify-center items-center">
                <FaWifi className="text-4xl" />
              </div>
              <div className="w-[242px] h-[26px] flex justify-center items-center mt-[10px]">
                <h2 className="text-[22px] text-[#091826] font-medium">
                  Fiber Wifi
                </h2>
              </div>
            </div>

            <div className=" bg-[#3fc94110] grow h-[216px] p-[30px] w-full md:w-1/2 lg:w-1/4 flex flex-col justify-center items-center">
              <div className="w-[100px] h-[100px] rounded-full border border-[#a67b4a] flex justify-center items-center">
                <LiaSwimmingPoolSolid className="text-[#95af3dc7] text-4xl" />
              </div>
              <div className="w-[242px] h-[26px] flex justify-center items-center mt-[10px]">
                <h2 className="text-[22px] text-[#091826] font-medium">Pool</h2>
              </div>
            </div>
          </div>

          <div className=" flex flex-wrap">
            <div className=" bg-[#3fc94110] grow h-[216px] p-[30px] w-full md:w-1/2 lg:w-1/4 flex flex-col justify-center items-center">
              <div className="w-[100px] h-[100px] rounded-full border border-[#a67b4a] flex justify-center items-center">
                <MdBedroomParent className="text-[#95af3dc7] text-4xl" />
              </div>
              <div className="w-[242px] h-[26px] flex justify-center items-center mt-[10px]">
                <h2 className="text-[22px] text-[#091826] font-medium">
                  Room Service
                </h2>
              </div>
            </div>
            <div className="  grow h-[216px] p-[30px] w-full md:w-1/2 lg:w-1/4 flex flex-col justify-center items-center">
              <div className="w-[100px] h-[100px] rounded-full border border-[#a67b4a] flex justify-center items-center">
                <IoCarSportOutline className="text-4xl" />
              </div>
              <div className="w-[242px] h-[26px] flex justify-center items-center mt-[10px]">
                <h2 className="text-[22px] text-[#091826] font-medium">
                  Parking Space
                </h2>
              </div>
            </div>
            <div className=" bg-[#3fc94110] grow h-[216px] p-[30px] w-full md:w-1/2 lg:w-1/4 flex flex-col justify-center items-center">
              <div className="w-[100px] h-[100px] rounded-full border border-[#a67b4a] flex justify-center items-center">
                <IoShirtOutline className="text-[#95af3dc7] text-4xl" />
              </div>
              <div className="w-[242px] h-[26px] flex justify-center items-center mt-[10px]">
                <h2 className="text-[22px] text-[#091826] font-medium">
                  Laundry
                </h2>
              </div>
            </div>
            <div className="  grow h-[216px] p-[30px] w-full md:w-1/2 lg:w-1/4 flex flex-col justify-center items-center">
              <div className="w-[100px] h-[100px] rounded-full border border-[#a67b4a] flex justify-center items-center">
                <LiaUmbrellaBeachSolid className=" text-4xl" />
              </div>
              <div className="w-[242px] h-[26px] flex justify-center items-center mt-[10px]">
                <h2 className="text-[22px] text-[#091826] font-medium">
                  Beach
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <facilities section end> */}
    </>
  )
}
