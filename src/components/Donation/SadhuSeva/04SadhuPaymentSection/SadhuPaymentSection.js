'use client'
import React from 'react'
import {
  Merriweather_Sans,
  Montserrat,
} from "next/font/google";

const mons = Montserrat({
  subsets: ["latin"],
});

const merri = Merriweather_Sans({
  subsets: ["latin"],
});

const merry = Merriweather_Sans({
  subsets: ["latin"],
});

const textData = [
  { category: "UPI:", content: "8152687.6278.payuqr@indus" },
  { category: "Account No:", content: "2223330044191637" },
  { category: "Account Name:", content: "ISKCON DELHI" },
  { category: "IFSC:", content: "UTIB000RAZP" },
];

const handleCopy = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // Text copied successfully
      console.log("Text copied !", text);
      // You can also provide some feedback to the user if needed
      alert("Text copied !!");
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error copying text:", error);
    });
};

export default function SadhuPaymentSection() {
  return (
    <>
         {/* payment section start */}
         <div class=" md:mx-16 sm:mx-9 mx-2 flex flex-col md:flex-row py-[20px] bg-[#400669] rounded-lg">
            <div class=" flex flex-col items-center justify-center w-full  md:w-1/2 pb-[20px]">
              <div className="flex">
                <p
                  className={`text-[24px] text-center font-bold text-[#FCD6A0] ${mons.className} p-[20px]`}
                >
                  SCAN & PAY with any UPI App
                </p>
              </div>
              <div className="flex justify-center items-center w-6/12 md:w-[304px] md:h-[304px]">
                <img src="/Screenshot.png"></img>
              </div>
            </div>

            <div class="  flex flex-col items-center w-full  md:w-1/2">
              <div className="flex">
                <p
                  className={`text-[24px] text-center font-bold text-[#FCD6A0] ${mons.className} p-[20px]`}
                >
                  Direct Bank NEFT/RTGS/IMPS
                </p>
              </div>

              <div className="">
                {textData.map((text, index) => (
                  <div
                    className="  flex flex-col lg:flex-row justify-center items-center flex-wrap  p-[10px]"
                    key={index}
                  >
                    <div className="flex flex-wrap">
                      <div>
                        <p
                          className={`text-[#4CAF50] text-[16px] font-bold ${merry.className}`}
                        >
                          {text.category}{" "}
                        </p>
                      </div>
                      <div>
                        <p
                          className={`text-gray-500 text-[16px]  font-bold ${merry.className}`}
                        >
                          <b>{text.content}</b>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap">
                      <button
                        className="transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 duration-300 p-[10px] mx-[10px] rounded-lg"
                        onClick={() => handleCopy(text.content)}
                      >
                        Copy{" "}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* payment section end */}
    </>
  )
}