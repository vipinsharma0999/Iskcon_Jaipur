'use client'
import React from 'react'
import {
  Merriweather_Sans,
  Source_Code_Pro,
} from "next/font/google";

const sorce = Source_Code_Pro({
  subsets: ["latin"],
});

const merry = Merriweather_Sans({
  subsets: ["latin"],
});

const handleScrollToCard = () => {
  const cardSection = document.getElementById('cardSection');
  if (cardSection) {
      cardSection.scrollIntoView({ behavior: 'smooth' });
  }
};


const sadhuseva = [
  {
    id: "1",
    img : "https://www.iskcondelhi.com/wp-content/uploads/2021/06/sadhu-bhojan-2.png",
    Title: "Maha Preeti Bhoj",
    Description:
      "Roti, Daal, Chawal, and Multiple Vegies with 3-4 types Sweets",
    Donation: "₹ 11,000",
  },
  {
    id: "2",
    img : "https://www.iskcondelhi.com/wp-content/uploads/2021/06/sadhu-bhojan-2.png",
    Title: "Preeti Bhoj",
    Description: "Paneer Meal + Special Sweets + Snacks",
    Donation: "₹ 31,000",
  },
  {
    id: "3",
    Title: "Preeti Bhoj",
    img : "https://www.iskcondelhi.com/wp-content/uploads/2021/06/sadhu-bhojan-2.png",
    Description: "Normal Meal + 1 Sweet + 2 special Subji",
    Donation: "₹ 21,000",
  },
  {
    id: "4",
    img : "https://www.iskcondelhi.com/wp-content/uploads/2021/06/sadhu-bhojan-2.png",
    Title: "Regular Bhoj",
    Description: "Normal Meal (Daal Chawal) + 1 Vegie",
    Donation: "₹ 15,000",
  },
];

export default function SadhuCardSection() {
  return (
    <>
     {/* sadhus card section start */}
     <div id="cardSection" className="flex justify-center items-center h-full mb-[40px] py-10">
            <div className=" grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 justify-center items-center gap-8  ">
              {sadhuseva.map((x) => (
                <div class="max-w-sm overflow-hidden shadow-lg w-[300px] xl:w-[270px] md:w-[350px]  h-[480px] bg-[#ffffff] 
                hover:scale-110 transition-transform duration-500 rounded-lg">
                  <img
                    class="w-full"
                    src={x.img}
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-center">
                      {x.Title}
                    </div>
                    <p class="text-gray-700 text-base text-center">
                      {x.Description}
                    </p>
                  </div>
                  <div class=" px-6 pb-4">
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-center items-center">
                        <p
                          className={`text-[30px] font-bold text-[#870909] ${merry.className}`}
                        >
                          {x.Donation}
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <button
                          className={`bg-[#FCD6A0] font-medium text-[20px] text-[#870909] py-2 px-4 md:py-2 md:px-4 rounded-full drop-shadow-xl ${merry.className} hover:scale-105 transition-transform`}
                        >
                          Donate Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* sadhus card section end */}
    </>
  )
}