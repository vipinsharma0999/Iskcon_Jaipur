"use client"
import { useEffect, useRef, useState } from "react";

const Dropdown = ({ title, subtitle }) => {
  // State to control the visibility of the dropdown
  const [isOpen, setIsOpen] = useState(false);

  // Ref for the dropdown container
  const dropdownRef = useRef(null);

  // Handler to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Event handler to close the dropdown when clicking outside of it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Attach the event listener to the document when the component mounts
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Div to toggle the dropdown */}
      <div
        id="dropdownToggleDiv"
        className="inline-flex items-center cursor-pointer"
        onClick={toggleDropdown}
        ref={dropdownRef}
      >
        <span>{title}</span>
        <svg
          className="w-2.5 h-2.5 ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 divide-y divide-gray-100 rounded-lg shadow w-45 top-[50px] text-center bg-gray-700 absolute"
          ref={dropdownRef}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownToggleDiv"
          >
            {subtitle.map(st => (
              <li key={st}>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-600 text-white hover:text-white hover:no-underline"
                >
                  {st}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Dropdown;
