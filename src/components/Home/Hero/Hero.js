"use client";
import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <>
      <div className="z-[3] h-[110vh]">
        <video
          src="/Home/Hero/ijpHero.mp4"
          className="z-[0] object-cover h-[110vh] w-full absolute"
          autoPlay
          loop
          muted
        />
        <div className="relative bg-black/50 z-[10] h-[100vh] top-[65px] space-y-0 leading-[65px] flex justify-center text-center">
          <div className="text-white mx-auto top-0 left-0 right-0 px-1">
            <motion.span
              className="font-bold sm:text-[16px] text-[14px]"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              WELCOME TO
            </motion.span>
            <motion.h1
              className={`lg:text-[84px] text-[52px] ${dancing.className}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Sri Sri Giridhari Dauji
            </motion.h1>
            <motion.span
              className="font-medium sm:text-[18px]"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Temple | Jaipur, Mansarovar
            </motion.span>
          </div>
          <motion.button
            type="button"
            className="absolute bottom-[20vh] text-white bg-gradient-to-r bg-[#d17a29] rounded-full hover:from-pink-500 hover:to-yellow-500 font-medium text-base lg:text-xl px-4 py-2 text-center flex gap-2 items-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/Home/Hero/location.svg" />
            <span>Location</span>
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Hero;
