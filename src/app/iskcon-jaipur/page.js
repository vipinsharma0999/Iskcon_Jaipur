"use client"

import IJPHero from "@/components/ISKCON_Jaipur/01Main/Main"
import Letter from "@/components/ISKCON_Jaipur/02Letter/Letter"
import Facilities from "@/components/ISKCON_Jaipur/03Facilities/Facilities"
import Deities from "@/components/ISKCON_Jaipur/05Deties/Deities"

const IJP = () => {
  return (
    <div>
      <IJPHero />
      <Letter />
      <Facilities />
      <Deities />
    </div>
  )
}

export default IJP