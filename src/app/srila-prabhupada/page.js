"use client";
import Hero from "@/components/SrilaPrabhupada/01Hero.js/Hero";
import Glorification from "@/components/SrilaPrabhupada/02Glorification/Glorification";
import Introduction from "@/components/SrilaPrabhupada/03Intro/Introduction";
import Objectives from "@/components/SrilaPrabhupada/04Objectives/Objectives";
import Timelines from "@/components/SrilaPrabhupada/05Timeline/Timeline";
import Achievements from "@/components/SrilaPrabhupada/06Achievements/Achievements";
import Shrines from "@/components/SrilaPrabhupada/07Shrines/Shrines";

const SrilaPrabhupada = () => {
  return (
    <main>
      <Hero />
      <Glorification />
      <Introduction />
      <Objectives />
      <Timelines />
      <Achievements />
      <Shrines />
    </main>
  );
};

export default SrilaPrabhupada;
