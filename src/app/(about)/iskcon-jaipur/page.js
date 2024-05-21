"use client"

import IJPHero from "@/components/About/ISKCON_Jaipur/01Main/Main"
import Letter from "@/components/About/ISKCON_Jaipur/02Letter/Letter"
import Facilities from "@/components/About/ISKCON_Jaipur/03Facilities/Facilities"
import Deities from "@/components/About/ISKCON_Jaipur/05Deties/Deities"
import GlassPainting from "@/components/About/ISKCON_Jaipur/06GlassPainting/GlassPainting"
import CampusAttraction from "@/components/About/ISKCON_Jaipur/07CampusAttraction/CampusAttraction"
import { PT_Serif } from "next/font/google"

const serif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const IJP = () => {
  return (
    <div>
      <IJPHero />
      <Letter />
      <Facilities />
      <Deities />
      <GlassPainting />
      <div className={`py-10 sm:text-5xl text-3xl bg-[#d17a29] flex items-center justify-center gap-4 text-white font-[700] ${serif.className}`}>
        <span>How to Reach</span>
        <img src="/IJP/right.svg" className="h-9 sm:h-14" />
      </div>
      <CampusAttraction />
    </div>
  )
}

export default IJP