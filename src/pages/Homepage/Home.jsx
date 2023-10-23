import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts.
  }, []);
  return (
    <>
      <div className="home flex lg:h-[100vh]  ">
        <div className=" hero__section flex   w-[100vw] py-5 from-[#1a3548] via-[#173245] to-[#142f40]  bg-gradient-to-r  shadow-xl">
          <div className="hidden md:flex md:w-[70vw]  lg:w-[50%] lg:pl-16 object-fit ">
            <img
              className="hero__img md:w-auto md:h-[80%] md:pl-[1rem] md:mt-9 lg:w-full lg:h-[60vh]   "
              alt="Hero image"
              src="https://iili.io/JJLf6Na.png"
            ></img>
          </div>
          <div className="hero__text   md:mt-7 px-[1rem]  lg:mt-[18vh] md:pr-[3rem] ">
            <h1 className="text-white font-bold md:text-4xl  text-6xl lg:text-7xl  lg:-ml-[10rem] mb-6">
              <span className="text-blue-500">Cyber</span> Security
            </h1>
            <h1 className="mb-6">
              <b className="text-white font-semibold text-xl  lg:text-4xl lg:-ml-[10rem] ">
                Is a shared responsibility .
              </b>
            </h1>
            <p className="text-white mb-6 text-xl lg:-ml-[10rem] ">
              There is an cyber attack every <span>39</span> seconds and Hackers
              steal <span>75</span> records every second.
            </p>
            <p className="text-white text-xl mb-6 lg:-ml-[10rem]">
              Are you in the Game? May be we can help you!
            </p>

            <button className=" flex bg-blue-500 hover:shadow-blue-500 hover:shadow-md  justify-center  lg:-ml-[10rem] mb-6 text-xl font-bold text-white h-auto w-auto py-3.5 px-10    rounded-[2.5rem]">
              <Link
                target="_blank"
                to="https://ciberse.com/things/2023/03/bro.pdf"
              >
                Broucher&nbsp;
              </Link>
              <span className="py-1 font-bold">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
