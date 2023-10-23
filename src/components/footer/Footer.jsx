import React from "react";
import { Link } from "react-router-dom";
import { ImLinkedin } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FcLock } from "react-icons/fc";
import { AiFillHeart } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className="footer  bg-blue-800  max-w-full md:w-[90%] md:py-[3.5rem] md:px-[1.5rem] lg:p-[5rem] md:mx-auto md:rounded-2xl">
        <div className="flex flex-col md:flex-row  md:space-x-4 lg:space-x-0 md:justify-between  p-[2rem]">
          <div className="flex-[0.3] mb-6 ">
            <Link to="/">
              <h1 className="text-5xl font-bold text-white mb-6">Ciberse</h1>
            </Link>
            <p className="text-lg  text-white mb-6">
              Whether it's website testing, mobile application analysis, or API
              assessment, our mission is to ensure that your business operates
              in a safe and secure environment.
            </p>
            <div className="Social_Icons flex  gap-6 text-white text-3xl">
              <Link
                target="_blank"
                to="https://www.linkedin.com/company/ciberse/"
                className=" hover:text-slate-300"
              >
                <ImLinkedin />
              </Link>

              <Link
                target="_blank"
                to="https://www.instagram.com/ciberse._/ "
                className=" hover:text-slate-300"
              >
                <GrInstagram />
              </Link>
              <Link
                target="_blank"
                to="https://twitter.com/Ciberse_"
                className=" hover:text-slate-300"
              >
                <FaTwitterSquare />
              </Link>
              <Link
                target="_blank"
                to="mailto:support@ciberse.com"
                className=" hover:text-slate-300"
              >
                <IoMail />
              </Link>
              <Link
                target="_blank"
                to="https://wa.me/message/KYGX2BGM4CFVB1"
                className=" hover:text-slate-300"
              >
                <FaWhatsappSquare />
              </Link>
            </div>
          </div>
          <div className="text-white text-xl font-bold">
            Services
            <ul className=" ">
              <Link to="/webtesting">
                <li className=" font-semibold hover:text-slate-300 text-base my-5">
                  Web Application Testing
                </li>
              </Link>
              <Link to="/apptesting">
                <li className=" font-semibold  hover:text-slate-300 text-base my-5">
                  Mobile Application Testing
                </li>
              </Link>

              <Link to="/apitesting">
                {" "}
                <li className=" font-semibold  hover:text-slate-300 text-base my-5 ">
                  API Testing
                </li>
              </Link>
            </ul>
          </div>
          <div className="text-white text-xl font-bold">
            Company
            <ul className=" ">
              <li className=" font-semibold  hover:text-slate-300 text-base my-5">
                <Link to="/about">About</Link>
              </li>
              <li className=" font-semibold  hover:text-slate-300 text-base my-5">
                <Link to="/terms">Terms</Link>
              </li>
              <li className=" font-semibold  hover:text-slate-300 text-base my-5">
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li className=" font-semibold  hover:text-slate-300 text-base my-5">
                <Link to="/Careers">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="text-white text-xl font-bold">
            More
            <ul className=" ">
              <li className=" font-semibold  hover:text-slate-300  text-base my-5">
                <Link to="/Disclaimer">Disclaimer</Link>
              </li>
              <li className=" font-semibold  hover:text-slate-300 text-base my-5">
                <Link to="/Blogs">Blogs</Link>
              </li>

              <li className=" font-semibold  hover:text-slate-300 text-base my-5">
                <Link to="/contactUs"> Help</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex text-5xl flex-col items-center space-y-4 md:col-span-12 lg:col-span-10">
          <FcLock className="  h-auto" />

          <p className="font-bold italic text-white text-base">
            Strongly Encrypting The World
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between  w-[90%] mx-auto">
        <div className="flex text-center justify-center font-bold text-lg py-4">
          Made with <AiFillHeart className="w-7 my-2 text-red-600" /> in&nbsp;
          <img
            className="w-6 h-6 my-1"
            src="https://img.icons8.com/?size=96&id=32584&format=png"
            alt=""
          />
        </div>
        <div className=" text-center my-auto">
          Copyright © 2023 Ciberse, Inc. All Rights Reserved.
        </div>

        <div className="my-auto  mx-auto lg:mx-0 text-[10px] md:text-base mb-4 md:font-normal font-bold ">
          <Link to="/privacy" className=" px-4 hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className=" px-4 hover:underline">
            Terms of Service
          </Link>
          <Link to="/contactUs" className=" px-4 hover:underline">
            Report a vulnerability
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
