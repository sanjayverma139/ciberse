import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsBug } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { FaLink } from "react-icons/fa6";

import { TbHandClick } from "react-icons/tb";

import Footer from "../../components/footer/Footer";

import { MdOutlineSecurity } from "react-icons/md";

function Scan() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts.
  }, []);
  return (
    <div className="scan__page">
      {/*Navbar*/}
      <Navbar />

      {/*Hero Section*/}
      <div className="hero__section bg-blue-800 p-[2.5rem] md:p-[4rem] md:py-[5rem]">
        <div className="hero__content flex flex-col lg:flex-row mx-auto justify-center gap-10 md:w-[90%] md:p-[1rem] lg:p-[2rem]">
          <div className="hero__text space-y-8 my-auto justify-center lg:w-[60%]">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Free Security Check
            </h1>
            <p className="text-md md:text-xl lg:text-lg text-slate-200">
              We believe that everyone deserves to have a secure website,
              regardless of their budget. That’s why we’re offering a free
              security check to all website owners. <br />
              <br />
              Our free security check will use OSINT techniques to identify any
              potential vulnerabilities in your website. OSINT stands for Open
              Source Intelligence, and it refers to the collection and analysis
              of publicly available information. This means that our scan will
              be completely safe and won’t impact the performance of your
              website.
            </p>
          </div>
          <div className="hero__image lg:w-[40%] justify-center my-auto">
            <img
              className=""
              src="https://ciberse.com/things/2023/05/pexels-pixabay-60504-scaled-1-2048x1366.jpg"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>

      <div className="Passion__text bg-blue-50 p-[1.5rem]">
        <h1 className="text-lg text-center text-blue-800  md:text-3xl tracking-widest lg:tracking-[.7rem]">
          YOUR SECURITY, OUR PASSION
        </h1>
      </div>
      {/*------------------ ISS Mai Button h Ek center nhi Ho raha h Vo --------------------------------- */}
      <div className="more__text bg-blue-800 p-[2rem] md:p-[4rem] md:py-[5rem] mb-[2rem] shadow-xl">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white md:w-[80%] mx-auto leading-[2.5rem] md:leading-[3.5rem] lg:leading-[4rem] mb-[2.5rem]">
          To get started, simply enter your website URL in the form below. We'll
          then send you a report within 24 hours that outlines any potential
          vulnerabilities we found.
        </h1>

        <div className="button_div mx-auto w-[80%] flex  justify-center px-auto">
          <Link to="https://forms.gle/75M4DYZyYEzjLFN29" target="_blank">
            <button className="rounded-xl bg-white  text-lg md:text-xl p-[.6rem] md:p-[1rem] text-blue-800  hover:shadow-white hover:shadow-md text-center font-semibold content-center ">
              {" "}
              Get Started{" "}
            </button>
          </Link>
        </div>
      </div>

      {/* Benefits  */}
      <div className="benefits__container space-y-[2rem] mb-[4rem]">
        <h1 className="text-center text-4xl font-bold ">
          Benefits of Our{" "}
          <span className="drop-shadow-2xl text-blue-500">Free</span> Security
          Check
        </h1>
        <div className="benefits__boxes w-[80%] flex flex-col md:flex-row mx-auto md:space-x-8 justify-between mb-[1rem]">
          <div className="benefit__content rounded-xl shadow-lg border-2 border-green-500 p-[2rem] space-y-5 mb-[2rem] md:mb-0 ">
            <HiOutlineComputerDesktop className="text-5xl text-green-500" />
            <h1 className="text-lg ">
              Identify potential vulnerabilities that could be exploited by
              attackers
            </h1>
          </div>
          <div className="benefit__content rounded-xl shadow-lg border-2 border-red-500 p-[2rem] space-y-5 mb-[2rem] md:mb-0">
            <BsBug className="text-5xl text-red-500" />
            <h1 className="text-lg ">
              Get peace of mind knowing that your website is secure and safe
              from hackers
            </h1>
          </div>

          <div className="benefit__content rounded-xl shadow-lg border-2 border-yellow-500 p-[2rem] space-y-5 mb-[2rem] md:mb-0">
            <MdOutlineSecurity className="text-5xl text-yellow-500" />
            <h1 className="text-lg ">
              Completely safe and won't impact the performance of your website
            </h1>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="steps_container bg-slate-100 p-[2rem] mb-[3rem]">
        <h1 className="text-center text-5xl text-blue-800 font-bold">
          {" "}
          How to Get Started{" "}
        </h1>
        <div className="lg:w-[80%] mx-auto mt-4 flex flex-col  lg:flex-row lg:justify-between">
          <div className="image__div hidden  mx-auto md:flex  md:w-[45%]">
            <img
              className="md:h-[50%] lg:h-full mx-auto"
              src="https://ciberse.com/things/2023/09/design-8-1-962x1024.png"
              alt="side Iamge"
            />
          </div>
          <div className="divs_content  lg:ml-[4rem] lg:w-[55%]">
            <div className="steps_box md:gap-5 mt-4 lg:gap-0 flex flex-col  md:flex-row  lg:flex-wrap ">
              <div className=" rounded-xl bg-white shadow-xl md:w-[40%] p-[2.5rem] text-center mb-4 h-[13rem] md:h-[16rem] ">
                <FaLink className=" text-3xl md:text-5xl mx-auto text-green-500 " />
                <h1 className="text-2xl md:text-3xl">Step 1</h1>
                <h1 className="p-2">
                  Enter your website URL in the form below.
                </h1>
              </div>

              <div className=" rounded-xl bg-white shadow-xl md:w-[40%] p-[2.5rem] text-center lg:ml-[60%]  lg:-mt-[18%] mb-4 h-[13rem] md:h-[16rem] ">
                <TbHandClick className="text-3xl md:text-5xl mx-auto text-red-500" />
                <h1 className="text-2xl md:text-3xl">Step 2</h1>
                <h1 className="p-2">Click the "Submit" button.</h1>
              </div>

              <div className=" rounded-xl bg-white shadow-xl md:w-[40%] p-[2.5rem] text-center  lg:-mt-[12%]  mb-4  h-[13rem] md:h-[16rem] ">
                <BiTime className="text-3xl md:text-5xl mx-auto text-yellow-500" />
                <h1 className=" text-2xl md:text-3xl">Step 3</h1>
                <h1 className="p-2">
                  You will receive a vulnerability report within 24 hours.s
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Formality*/}
      <div className="formal__div p-[2rem] md:w-[80%] lg:w-[70%] mx-auto mb-[3rem]">
        <h1 className="text-center text-2xl md:text-4xl font-bold md:leading-[3.5rem] ">
          We hope you take advantage of our free security check. Your website's
          security is important to us, and we want to help you keep it safe.
        </h1>
        <p className="text-green-500  md:text-xl text-center text-semibold tracking-widest">
          LETS DO ENCRYPTING BUSINESS !
        </p>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Scan;
