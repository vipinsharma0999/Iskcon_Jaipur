"use client";
import React from "react";
import {Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function LuxriesusSection()  {
  return (
    <>
      {/* <luxriesus section start> */}
      <div className=" flex flex-col mx-[30px] sm:mx-[92px] gap-9 my-[70px] py-[30px] lg:flex-row">
        <div className=" w-full lg:w-1/2 flex  flex-col gap-4">
          <div className=" p-[10px]">
            <p className="text-[#D9A55B] text-[22px] tracking-widest">
              Welcome To Royalea
            </p>
          </div>
          <div className=" flex items-center flex-wrap p-[10px]">
            <p className={`text-[48px] ${playfair.className}`}>
              Enjoy Your Luxury Experience
            </p>
          </div>
          <div className="">
            <p className="text-[#6C6D72] text-[16px] text-justify p-[18px]">
              Convallis tellus id interdum velit. Et leo duis ut diam quam
              nulla. Ultrices tincidunt arcu non sodales neque sodales ut etiam.
              A scelerisque purus semper eget duis. Ac felis donec et odio
              pellentesque diam volutpat
            </p>
          </div>
          <div className="flex  gap-5 flex-col md:flex-row">
            <div className=" flex flex-col w-full md:w-1/2 ">
              <div className=" w-[100px] h-[90px] p-[10px]">
                <img className="w-[60px] h-[70px] " src="/class.png"></img>
              </div>
              <div className="">
                <h2 className="text-[22px] text-[#091826] font-medium p-[10px]">
                  classNamey Facilities
                </h2>
              </div>
              <div className="">
                <p className="text-[#6C6D72] text-[16px] text-justify p-[15px]">
                  Facilisi nullam vehicula ipsum a arcu. Amet luctus venenatis
                  lectus magna
                </p>
              </div>
            </div>
            <div className=" w-full md:w-1/2 ">
              <div className=" w-[100px] h-[90px] p-[10px] ">
                <img className="w-[60px] h-[70px]" src="/Iife2.png"></img>
              </div>
              <div className="">
                <h2 className="text-[22px] text-[#091826] font-medium p-[10px]">
                  Luxury Lifestyle
                </h2>
              </div>
              <div className="">
                <p className="text-[#6C6D72] text-[16px] text-justify p-[15px]">
                  Facilisi nullam vehicula ipsum a arcu. Amet luctus venenatis
                  lectus magna
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* for image */}
        <div className=" w-full lg:w-1/2">
          <img
            src="/istock.jpg"
            className="w-full h-full object-cover"
            alt="Image"
          />
        </div>
      </div>
      {/* <luxriesus section ent> */}
    </>
  );
};
