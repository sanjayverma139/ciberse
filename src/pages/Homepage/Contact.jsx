import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact my-[8rem]  w-[100%] justify-center">
      <div className="contact__bar mx-auto bg-blue-800 w-[80%] md:h-[15rem] lg:h-[12rem] mr-[7rem] lg:mr-[8rem] rounded-xl "></div>
      <div className="contact__bar mx-auto bg-blue-500 -mt-[4rem] w-[90%] md:w-[80%] md:h-[15rem] lg:h-[12rem] justify-between md:-mt-[17rem] lg:-mt-[14rem] rounded-xl flex flex-col lg:flex-row px-[4rem]">
        <div className="contact__content font-bold text-2xl md:text-4xl text-white my-5 md:my-auto ">
          <h1>
            Don't cut corners on your
            <br /> security. Do it right.
          </h1>
        </div>
        <div className="contact__button flex justify-center md:my-auto space-x-4 my-5 ">
          <Link to="/contactUs">
            <button className="  bg-white  justify-center text-xl md:text-2xl font-bold text-blue-800  hover:shadow-white hover:shadow-md h-fit w-fit  py-1 px-8 md:py-5 md:px-12  rounded-[.7rem]">
              Contact Us
            </button>
          </Link>
          <Link to="https://wa.me/message/KYGX2BGM4CFVB1" target="_blank">
            <button className="  bg-blue-800  hover:shadow-blue-800 hover:shadow-md justify-center text-xl md:text-2xl font-bold text-white h-fit w-fit py-1 px-8 md:py-5 md:px-12  rounded-[.7rem]">
              Let's Talk
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
