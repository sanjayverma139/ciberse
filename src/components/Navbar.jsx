import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <nav className="bg-white border-gray-200">
        <div className="max-w-full flex flex-wrap items-center  my-auto justify-between mx-8 p-2">
          <a href="/" className="flex items-center">
            <img
              src="https://i.ibb.co/ryK6q0B/ciberse-logo-white-cropped-2.png"
              className="h-[3.5rem] mr-3"
              alt="Ciberse"
            />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-20 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-5 h-5 ${menuOpen ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            <svg
              className={`w-5 h-5 ${menuOpen ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full md:w-auto md:flex md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:relative md:top-auto md:left-auto`}
            id="navbar-default"
          >
            <ul className="font-medium  flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  to="/"
                  className="block my-[9px] text-lg py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/freeScan"
                  className="block my-[9px] text-lg py-2 pl-3 pr-4 text-yellow-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-yellow-500 md:p-0 md:dark:hover:text-yellow-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Free Scan
                </Link>
              </li>
              {/* <li>
                <Link className="block my-[9px] text-lg py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Services
                </Link>
              </li> */}
              <li>
                <div
                  onClick={toggleServicesDropdown}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  className="relative group    "
                >
                  <button className="block my-[9px]   text-lg py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover-bg-transparent">
                    Services &nbsp; &nbsp;
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 absolute right-0 top-1/2 transform -translate-y-1/2 group-hover:-rotate-180 transition-transform duration-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {servicesDropdownOpen && (
                    <ul className="absolute z-10 mt-2 space-y-2 w-44 py-2 bg-white border border-gray-100 rounded-lg">
                      <li>
                        <Link
                          to="/webtesting"
                          className="block py-2 px-4 text-black rounded hover:bg-gray-100"
                        >
                          Web Testing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/apptesting"
                          className="block py-2 px-4 text-black rounded hover:bg-gray-100"
                        >
                          App Testing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/apitesting"
                          className="block py-2 px-4 text-black rounded hover:bg-gray-100"
                        >
                          API Testing
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block my-[9px] text-lg py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/Blogs"
                  className="block my-[9px] text-lg py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contactUs"
                  className="block  py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700  md:dark:hover:bg-transparent"
                >
                  <button className="py-3 px-6 bg-blue-800 hover:bg-slate-500 text-white font-bold rounded-xl">
                    Contact Us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
