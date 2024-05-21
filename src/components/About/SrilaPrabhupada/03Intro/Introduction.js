"use client";

import { Playfair_Display } from "next/font/google";

const play = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Introduction = () => {
  return (
    <div className="md:py-20 md:px-10 py-10 px-4 bg-[#d17a2922] ">
      <h2 className={` text-center pb-6 md:pb-16 md:px-24 ${play.className} `}>
        Founder Acharya : His Divine Grace AC <span className="text-[#d17a29]">Bhaktivedanta</span> Swami Srila
        Prabhupada
      </h2>
      <div className="flex justify-center">
        <div className="max-w-[450px] px-4 md:max-w-[750px] lg:max-w-6xl">
          <div className="flex md:flex-row flex-col lg:gap-16 gap-10 items-center justify-center">
            <img
              // src="https://www.krishnapath.org/ext/art/sp/compress/Prabhupada-the-lion-guru-to-whome-all-heads-bow.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              src="https://www.krishnapath.org/ext/art/sp/Srila%20Prabhupada%20high-res%20(11).jpg"
              className="max-h-[400px]"
            />
            <div className={`text-gray-700 text-justify text-sm md:text-lg`}>
              <p>
                Srila Prabhupada was known by many titles - scholar,
                philosopher, cultural ambassador, prolific author, religious
                leader, spiritual teacher, and social critic. But he was much
                more than that.
              </p>
              <p className="hidden lg:block">
                Over five hundred years ago, Lord Sri Krishna appeared as Sri
                Chaitanya Mahaprabhu in West Bengal to inaugurate the Sankirtana
                Movement for this age of Kali. He predicted that His
                <b> commander-in-chief</b> would appear to spread His holy names
                worldwide. Srila Prabhupada fulfilled this prophecy.
              </p>
              <p>
                Born on September 01, 1896, in Calcutta, he was named Abhay
                Charan, meaning one who is{" "}
                <b> fearless by taking shelter at Lord Krishna&apos;s Lotus Feet</b>.
              </p>
              <p className="mb-0">
                Srila Prabhupada embarked on this journey when he traveled to
                America in 1965 at the age of sixty-nine. He established the{" "}
                <b>International Society for Krishna Consciousness (ISKCON)</b>,
                traveled the world 14 times, founded over 100 Krishna temples,
                and initiated more than 10,000 disciples into Krishna
                consciousness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
