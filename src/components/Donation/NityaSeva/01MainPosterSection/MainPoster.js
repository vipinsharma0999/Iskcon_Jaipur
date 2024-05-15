"use client";
import React, { useState, useRef } from "react";
import { Caveat, Playfair_Display, Quicksand, Oswald } from "next/font/google";

const caveat1 = Caveat({
  subsets: ["latin"],
});

const palyfair = Playfair_Display({
  subsets: ["latin"],
});

const setis = Quicksand({
  subsets: ["latin"],
});

const oswald1 = Oswald({
  subsets: ["latin"],
});

const item = [
  {
    id: "1",
    Price: "Rs. 100 Auto Debit Per Month till an Year",
  },
  {
    id: "2",
    Price: "Rs. 500 Auto Debit Per Month till an Year",
  },
  {
    id: "3",
    Price: "Rs. 1000 Auto Debit Per Month till an Year",
  },
  {
    id: "4",
    Price: "Rs. 2000 Auto Debit Per Month till an Year",
  },
  {
    id: "5",
    Price: "Rs. 5000 Auto Debit Per Month till an Year",
  },
  {
    id: "6",
    title: "General Donation",
    Price: "Choose an amount whatever you like to donate monthly",
  },
];

const MainPoster = () => {
  const [showUpArrow, setShowUpArrow] = useState(false); // State to manage the visibility of the up arrow
  const donationSectionRef = useRef(null); // Ref to the donation section

  const handleMouseEnter = () => {
    setShowUpArrow(true); // Show the up arrow when mouse enters the button
  };

  const handleMouseLeave = () => {
    setShowUpArrow(false); // Hide the up arrow when mouse leaves the button
  };

  const scrollToDonationSection = () => {
    // Scroll to the donation section
    if (donationSectionRef.current) {
      window.scrollTo({
        top: donationSectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="bg-[url('/Donation/NityaSeva/nitya-seva-mainpage.jpg')] h-[100vh] bg-cover bg-center w-full mt-[40px]">
        <div className="absolute flex flex-col items-center w-full top-[25vh] sm:top-[45vh] justify-center">
          <h1
            className={`font-bold text-white text-6xl md:text-7xl text-center ${caveat1.className}`}
            style={{
              textShadow:
                "2px 2px black, 20px 20px 50px #d17a29, -20px -20px 50px #d17a29, -20px 20px 50px #d17a29, 20px -20px 50px black",
            }}
          >
            Nitya Seva
          </h1>
          <div className="xl:px-64 px-10">
            <p
              className={`text-center text-[18px] font-medium text-[#ffffff] ${palyfair.className}`}
            >
              <strong>
                Note:- Please note that Nitya Seva is a monthly donation program
                in which every month your desired amount will be automatically
                debited from your bank. So, please choose the donation amount
                accordingly.!
              </strong>
            </p>
          </div>
          <button
            className={`bg-[#fb3f3f]  font-medium text-[30px] text-[#ffffff] py-2 px-4 md:py-2  md:px-4 rounded-full drop-shadow-xl ${caveat1.className} hover:scale-105 transition-transform `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={scrollToDonationSection}
          >
            Donate Now{" "}
            {showUpArrow && (
              <img
                src="/Donation/NityaSeva/down_arrow.svg"
                className="inline-block w-6 h-6"
                alt="Up Arrow"
              />
            )}
          </button>
        </div>
      </div>
      <div className="bg-[url('/Donation/NityaSeva/curve.svg')] h-[150px] bg-cover bg-center w-full z-10 mt-[-150px]"></div>

      <div className="w-full h-[50px] bg-[#4c1a00]"></div>

      <div className="bg-gradient-to-b from-[#500a0a] via-amber-600 to-amber-400 py-[70px]">
        <div className=" mx-[50px] lg:mx-[200px] max-sm:mx-[20px] flex flex-col">
          <div className=" pb-[10px]">
            <h2 className={`${setis.className} text-[#ffffff]`}>Nitya Seva</h2>
          </div>
          <div className=" pb-[20px]">
            <p
              className={`text-[20px] text-justify font-medium ${palyfair.className} text-[#ffffff]`}
            >
              It is essential for devotees to worship their lordship in a
              wealthy and gorgeous manner befitting palatial standards.
              <br />
              To make progress in Krishna consciousness, we always need the
              blessing of the Lord on your special day. And when the Lord is
              pleased with our services, we will surely get the unlimited
              blessing from the Lord Shree Krishna
            </p>
          </div>
          <div
            className={`text-[#ffffff] font-bold text-center ${caveat1.className} pb-[20px]`}
          >
            <h3>
              <strong className="text-[33px]">
                ~Nitya Seva is a monthly charity program where a devotee can
                monthly participate by donating in the lotus feet of the
                Krishna. ~
              </strong>
            </h3>
          </div>
          <div className=" mt-3 text-[#ffffff]">
            <p
              className={`text-[20px] font-medium ${palyfair.className} text-justify `}
            >
              Note:- Please note that Nitya Seva is a monthly donation program
              in which every month your desired amount will be automatically
              debited from your account. So, please choose the donation amount
              accordingly.!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[url('/Donation/NityaSeva/download.svg')] h-[150px] bg-cover bg-center w-full z-10 mt-[-150px]"></div>

      {/* donation section start */}
      <div
        ref={donationSectionRef}
        className="bg-[url('/Donation/NityaSeva/Nitya-Seva.jpg')] bg-cover bg-center w-full  relative"
      >
        <div
          style={{
            background:
              "linear-gradient(180deg, #9b2636 0%, rgba(38, 17, 0, 0.61) 100%)",
          }}
        >
          <div className=" flex flex-col items-center mb-[40px]">
            {item.map((item) => (
              <>
                <div className=" flex flex-col w-3/4 pt-[27px] pb-[10px] md:flex-row gap-1">
                  <div className=" flex flex-col justify-center items-center md:justify-start md:items-start  w-full md:w-1/2">
                    <div className="pb-[1px]">
                      <span
                        className={`text-[34px] font-bold text-white ${palyfair.className}`}
                      >
                        <h2>
                          {item.id === "6" ? item.title : "Your Nitya Seva"}
                        </h2>
                      </span>
                    </div>
                    <div className="flex sm:text-left text-center">
                      <span
                        className={`text-[18px] font-bold text-white ${palyfair.className} `}
                      >
                        {item.Price}
                      </span>
                    </div>
                  </div>
                  <div className=" w-full md:w-1/2 flex justify-center items-center">
                    <button
                      className={`bg-[#FCD6A0]  font-medium text-[20px] text-[#870909] py-2 px-4 md:py-2  md:px-4 rounded-full drop-shadow-xl ${palyfair.className} hover:scale-105 transition-transform `}
                    >
                      Donate Now
                    </button>
                  </div>
                </div>
                <div className="border-b-[1px] w-3/4 border-yellow-400"></div>
              </>
            ))}

            <div className=" mx-[50px] lg:mx-[200px] max-sm:mx-[20px] flex flex-col py-[60px]">
              <div className=" pb-[10px] flex justify-center items-center">
                <h1 className={`${oswald1.className} text-[#ffffff]`}>
                  Nitya Seva
                </h1>
              </div>
              <div className=" pb-[20px]">
                <p
                  className={`text-[25px] text-justify font-medium ${oswald1.className} text-[#ffffff]`}
                >
                  To make progress in Krishna consciousness, we always need the
                  blessing of the Lord on your special day. And when the Lord is
                  pleased with our services, we will surely get the unlimited
                  blessing from the Lord Shree Krishna
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[url('/Donation/NityaSeva/reverse_curve.svg')] h-[100px] bg-cover bg-center w-full z-10 mt-[20px]"></div>
        </div>
      </div>
      {/* donation section end */}

      <div className="bg-gradient-to-b from-[#500a0a] via-amber-600 to-amber-400 py-[70px]">
        <div className="w-full h-[50px]"></div>
        <div className=" mx-[60px] lg:mx-[300px] max-sm:mx-[30px] flex flex-col">
          <div className=" pb-[10px] flex max-[567px]:text-left text-center">
            <h2 className={`${setis.className} text-[#ffffff]`}>
              Devotees Donates and seek blessings
            </h2>
          </div>
          <div className=" pb-[20px]">
            <p
              className={`text-[20px] text-justify font-medium ${palyfair.className} text-[#ffffff]`}
            >
              If you join with any of the above seva program, we offer to
              perform a special pooja for you in a memory of your dear ones,
              this way you will get the blessings of Lord Krishna, and you can
              do an automatic transfer of your desired amount in 356days.
            </p>
          </div>
          <div
            className={`text-[#ffffff] font-bold text-center ${caveat1.className} pb-[20px]`}
          >
            <button
              className={`bg-[#fb3f3f]  font-medium text-[30px] text-[#ffffff] py-2 px-4 md:py-2  md:px-4 rounded-full drop-shadow-xl ${caveat1.className} hover:scale-105 transition-transform `}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={scrollToDonationSection}
            >
              Contribute Now{" "}
              {showUpArrow && (
                <img
                  src="/Donation/NityaSeva/up_arrow.svg"
                  className="inline-block w-6 h-6"
                  alt="Up Arrow"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="relative bg-[url('/Donation/NityaSeva/new_curve.svg')] h-[100px] bg-cover bg-center w-full z-50"></div>

      
      <div className="relative h-[80vh] bg-cover bg-center w-full mt-[-100px] flex justify-center items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: "url('/Donation/NityaSeva/Krishna-Painting.jpg')",
          }}
        ></div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #4c1900db 0%, rgba(10, 9, 0, 0.79) 100%)",
          }}
        ></div>

        {/* Content */}
        <div className="absolute flex flex-col items-center  px-5">
          <h1
            className={`font-bold text-white text-[30px] sm:text-[50px] text-center ${caveat1.className}`}
          >
            Be the Nitya Sewak of Krishna
          </h1>
          <div className="xl:px-64 ">
            <p
              className={`text-center text-[18px] sm:font-medium text-[#ffffff] ${palyfair.className}`}
            >
              <strong>
                Collectively once in a time or as per your bank account choices
                or pay by any other mode of your wish. But, at the same time,
                you get overflowing mercy for joining in the service of the
                supreme Lord.
              </strong>
            </p>
          </div>
          <button
            className={`bg-[#fb3f3f]  font-medium text-[30px] text-[#ffffff] py-2 px-4 md:py-2  md:px-4 rounded-full drop-shadow-xl ${caveat1.className} hover:scale-105 transition-transform `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={scrollToDonationSection}
          >
            Donate Now{" "}
            {showUpArrow && (
              <img
                src="/Donation/NityaSeva/up_arrow.svg"
                className="inline-block w-6 h-6"
                alt="Up Arrow"
              />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default MainPoster;
