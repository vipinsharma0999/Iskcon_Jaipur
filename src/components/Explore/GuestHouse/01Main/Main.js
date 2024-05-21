"use client";
import Image from "next/image";
import { Dancing_Script} from "next/font/google";
import { FaRegStar } from "react-icons/fa";
import {motion} from "framer-motion"



const dancing = Dancing_Script({
  subsets: ["latin"],
})

export default function GuestHouseMain() {
  return (
    <> 
      <div style={{clipPath: 'polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%);'}} className="bg-[url('/Explore/GuestHouse/MainPoster.jpg')] h-[100vh] mt-[65px]  bg-cover bg-center w-full">
        <div className="absolute flex flex-col items-center w-full top-[40vh] justify-center">
          <h1
            className={`font-bold text-white text-6xl md:text-7xl text-center  ${dancing.className}`}
            style={{
              textShadow:
                "2px 2px black, 20px 20px 50px #d17a29, -20px -20px 50px #d17a29, -20px 20px 50px #d17a29, 20px -20px 50px black",
            }}
          >
           <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
            <h1>Welcome To GuestHouse</h1>
            </motion.div>
          </h1>
        </div>
      </div>
      
    </>
  );
}
