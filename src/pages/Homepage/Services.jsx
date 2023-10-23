import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="w-[90%] mx-auto" id="services">
      <h1 className="text-black font-bold text-4xl md:text-6xl text-center  justify-center ml-6 my-12">
        Our<span className="text-blue-500"> Services</span>
      </h1>
      <div className="services__container flex justify-center  flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-nowrap p-2 ">
        <div className="card mx-2 md:mx-6 mb-[4rem] md:mb-9 lg:w-1/3  md:w-[40%] rounded-2xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition ease-in-out   hover:-translate-y-1 hover:scale-110  duration-300 ">
          <div className="h-[50%]">
            <Link to="/webtesting">
              <img
                className=" w-fit h-[100%] mx-auto "
                src="https://imgtr.ee/images/2023/09/27/c796a5962a6785329cdd4b19632d309d.jpeg"
                alt="c796a5962a6785329cdd4b19632d309d.jpeg"
                border="0"
              />
            </Link>
          </div>
          <div class="card-body  mx-8">
            <h5 class=" card-title font-bold text-2xl text-center my-3 ">
              Website Security Testing
            </h5>
            <p class="card-text text-xl mb-8 ">
              We're dedicated to fortifying your online presence through our
              advanced VAPT services. Join satisfied clients who trust us to
              protect their digital domains.
            </p>
            <Link to="/webtesting" class="btn btn-primary">
              <button className="p-3 bg-blue-400 hover:shadow-blue-400 hover:shadow-md text-white rounded-lg font-semibold text-lg mb-4">
                Get Protected
              </button>
            </Link>
          </div>
        </div>
        <div className="card mx-2 md:mx-6  mb-[4rem] md:mb-9 lg:w-1/3 md:w-[40%]   rounded-2xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition ease-in-out   hover:-translate-y-1 hover:scale-110  duration-300">
          <div className="h-[50%] overflow-hidden relative">
            <Link to="/apptesting">
              <img
                className=" w-fit  object-contain    mx-auto "
                src="https://imgtr.ee/images/2023/09/27/ccacdbdf46e079cc2a28b5767e83aebc.png"
                class="card-img-top"
                alt="..."
              ></img>
            </Link>
          </div>
          <div class="card-body mx-8">
            <h5 class="card-title font-bold text-2xl text-center my-3">
              Mobile App Security Testing
            </h5>
            <p class="card-text text-xl mb-8">
              Ensure your APIs are fortified against cyber threats, safeguarding
              your digital communication channels from the forces of darkness in
              the digital realm.
            </p>
            <Link to="/apptesting" class="btn btn-primary">
              <button className="p-3 bg-blue-400  hover:shadow-blue-400 hover:shadow-md text-white rounded-lg font-semibold text-lg mb-4">
                Get Protected
              </button>
            </Link>
          </div>
        </div>
        <div className="card mx-2 md:mx-6  mb-[4rem] md:mb-9 lg:w-1/3 md:w-[40%]  rounded-2xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition ease-in-out   hover:-translate-y-1 hover:scale-110  duration-300  ">
          <div className="releative h-[50%] overflow-hidden">
            <Link to="/apitesting">
              <img
                className="  object-contain  mx-auto "
                src="https://imgtr.ee/images/2023/09/27/27b9f1c11dacb8cf18c1e394c09de327.png"
                class="card-img-top"
                alt="..."
              ></img>
            </Link>
          </div>
          <div class="card-body mx-8">
            <h5 class="card-title font-bold text-2xl text-center  my-3">
              API Security Testing
            </h5>
            <p class="card-text text-xl mb-8 ">
              Ensure your mobile applications remain impervious to
              cyberattacks.We specialize in translating complex technical
              findings into easy-to-understand reports.
            </p>
            <Link to="/apitesting" class="btn btn-primary">
              <button className="p-3 bg-blue-400  hover:shadow-blue-400 hover:shadow-md text-white rounded-lg font-semibold text-lg mb-4">
                Get Protected
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
