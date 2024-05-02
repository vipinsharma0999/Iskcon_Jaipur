"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { Accordion } from "rsuite";
import "./Header.css";

const Header = () => {
  // State to manage the open/close state of the drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showBackground, setShowBackground] = useState("bg-black");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setShowBackground("bg-[#d17a29]");
      } else {
        setShowBackground("bg-black");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle the drawer state
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Function to close the drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Background overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-10 bg-gray-900 opacity-50 transition-opacity duration-300"
          onClick={closeDrawer}
        />
      )}

      <nav
        className={`fixed w-full z-[1000] top-0 left-0 border-b border-gray-600 bg-opacity-95 ${showBackground}`}
      >
        <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-2">
          {/* Logo */}
          <Link
            href="/"
            className="text-white hover:text-white hover:no-underline no-underline"
          >
            <div className="flex items-center space-x-2 cursor-pointer">
              <img src="/jaipur.png" className="h-12" alt="Logo" />
              <span className="self-center text-sm font-thin whitespace-nowrap text-white">
                <p className="m-0">Jaipur,</p>
                <p className="m-0">Mansarovar</p>
              </span>
            </div>
          </Link>

          {/* Navigation links for larger screens */}
          <div className="hidden lg:flex space-x-4">
            <ul className="flex m-0 flex-col lg:flex-row lg:items-center font-medium text-white">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-white hover:no-underline"
                >
                  <div className="block p-3 hover:bg-gray-700 rounded">
                    Home
                  </div>
                </Link>
              </li>
              <li>
                {/* <Link href="/about"> */}
                <div className="block p-3 hover:bg-gray-700 rounded">
                  <Dropdown
                    title={"About"}
                    subtitle={[
                      "Srila Prabhupada",
                      "ISKCON Jaipur",
                      "Gupt Vrindavan",
                    ]}
                  />
                </div>
                {/* </Link> */}
              </li>
              <li>
                <div className="block p-3 hover:bg-gray-700 rounded">
                  <Dropdown
                    title={"Contribute"}
                    subtitle={["Donate", "Grocery", "Volunteer"]}
                  />
                </div>
              </li>
              <li>
                <div className="block p-3 hover:bg-gray-700 rounded">
                  <Dropdown
                    title={"Connect"}
                    subtitle={[
                      "IYF",
                      "IGF",
                      "Bhakti Vriksha",
                      "Teenager",
                      "Whatsapp",
                    ]}
                  />
                </div>
              </li>
              <li>
                <div className="block p-3 hover:bg-gray-700 rounded">
                  <Dropdown
                    title={"Explore"}
                    subtitle={[
                      "Temple",
                      "Guest House",
                      "Govinda's",
                      "D'cafe",
                      "Vrindavan Haat",
                      "Gau Shala",
                    ]}
                  />
                </div>
              </li>
              <li>
                <div className="block p-3 hover:bg-gray-700 rounded">
                  <Dropdown
                    title={"Services"}
                    subtitle={[
                      "Funerals",
                      "House Program",
                      "Puja",
                      "Yatra",
                      "Life Member",
                      "Mridanga Course",
                    ]}
                  />
                </div>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-white hover:no-underline"
                >
                  <div className="block p-3 hover:bg-gray-700 rounded">
                    Contact Us
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Hamburger and donate buttons on the right */}
          <div className="flex items-center lg:space-x-4 space-x-2">
            {/* Donate button */}
            <button
              type="button"
              className="text-white bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 font-medium rounded-full text-sm px-4 py-2 text-center"
            >
              Donate
            </button>

            {/* Hamburger button for mobile */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center lg:p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              onClick={toggleDrawer}
            >
              <svg
                className="w-6 h-6 text-gray-400"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Drawer for mobile navigation */}
          {isDrawerOpen && (
            <div
              className="bg-[#e5b776] fixed top-0 right-0 w-64 h-full shadow-lg z-30 transition-transform transform duration-300 ease-in-out overflow-y-scroll"
              style={{
                transform: isDrawerOpen ? "translateX(0)" : "translateX(100%)",
              }}
            >
              <ul className="flex flex-col p-4">
                {/* Close button for the drawer */}
                <button
                  type="button"
                  className="self-end p-2"
                  onClick={closeDrawer}
                >
                  <svg
                    className="w-6 h-6 text-gray-400"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="w-full flex justify-center pt-5">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 font-medium rounded-full text-sm px-4 py-2 text-center"
                  >
                    Donate
                  </button>
                </div>

                {/* Drawer navigation links */}
                <div className="pt-10">
                  <Accordion>
                    <div className="p-[10px] font-bold text-[16px]">
                      <Link
                        href="#"
                        className="hover:text-[#575757] text-[#575757] hover:no-underline"
                      >
                        Home
                      </Link>
                    </div>
                    <hr className="m-0 mx-[20px]" />
                    <Accordion.Panel header="About" eventKey={1}>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Srila Prabhupada
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          ISKCON Jaipur
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Gupt Vrindavan
                        </Link>
                      </div>
                    </Accordion.Panel>
                    <Accordion.Panel header="Contribute" eventKey={2}>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Donate
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Grocery
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Volunteer Service
                        </Link>
                      </div>
                    </Accordion.Panel>
                    <Accordion.Panel header="Connect" eventKey={3}>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          IYF
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          IGF
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Bhakti Vriksha
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Kids and Teenager
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Join Whatsapp Group
                        </Link>
                      </div>
                    </Accordion.Panel>
                    <Accordion.Panel header="Explore" eventKey={4}>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Temple
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Guest House
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Govinda's
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          D'Cafe
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Vrindavan Haat
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Gau Shala
                        </Link>
                      </div>
                    </Accordion.Panel>
                    <Accordion.Panel header="Our Services" eventKey={5}>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Temple
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Funeral
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          House Program
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Community Hall
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Puja
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Yatra
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Life Member
                        </Link>
                      </div>
                      <div className="p-[2px] font-bold text-[14px]">
                        <Link
                          href="#"
                          className="hover:text-[#575757] text-[#575757] hover:no-underline"
                        >
                          Instruments
                        </Link>
                      </div>
                    </Accordion.Panel>
                    <hr className="m-0 mx-[20px]" />
                    <div className="p-[10px] font-bold text-[16px]">
                      <Link
                        href="#"
                        className="hover:text-[#575757] text-[#575757] hover:no-underline"
                      >
                        Contact Us
                      </Link>
                    </div>
                    <hr className="m-0 mx-[20px]" />
                  </Accordion>
                </div>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
