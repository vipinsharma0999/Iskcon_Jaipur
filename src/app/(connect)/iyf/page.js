"use client";

import Intro from "@/components/Connect/IYF/01Intro/Intro";
import Activities from "@/components/Connect/IYF/02Activities/Activities";
import Contact from "@/components/Connect/IYF/04Contact/Contact";
import Service from "@/components/Connect/IYF/03Services/Service";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div
        className="relative h-screen w-full bg-cover bg-top"
        style={{ backgroundImage: "url('/IJP/ijpBanner.jpg')" }}
      >
        <Link href="#contact" className="absolute w-full flex justify-center top-[80vh] no-underline hover:no-underline active:no-underline">
          <button className="py-3 px-6 rounded-full text-xl bg-[#d17a29] text-white font-semibold top-[80vh]">
            Contact Us
          </button>
        </Link>
      </div>
      <Intro />
      <Activities />
      <Service />
      <Contact />
    </div>
  );
};

export default page;
