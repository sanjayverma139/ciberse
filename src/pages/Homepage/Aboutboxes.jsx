import React from "react";
import { TbCalendarTime } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
const Aboutboxes = () => {
  return (
    <div className="flex flex-col md:mx-auto    lg:flex-row w-[90%] md:w-[70%] lg:w-[90%] my-[6rem] -mt-[.1rem] md:mt-10  md:gap-10 mx-auto ">
      <div className="py-6 md:py-0  md:text-justify mx-4 text-center ">
        <div className="text-5xl  text-blue-500">
          <TbCalendarTime className=" mx-auto md:mx-0" />
        </div>
        <div>
          <h1 className="text-2xl font-bold py-2">CXO & Dev Friendly</h1>
          <p className="text-xl">
            We understand the intricacies of your business from the Csuite to
            the developer's desk, ensuring a security solution that fits your
            entire organization seamlessly.
          </p>
        </div>
      </div>
      <div className="py-6 md:py-0  md:text-justify  mx-4 text-center">
        <div className="text-5xl  text-blue-500">
          <MdSecurity className=" mx-auto md:mx-0" />
        </div>
        <div>
          <h1 className="text-2xl font-bold py-2">
            Work with our Security Experts
          </h1>
          <p className="text-xl">
            Gain a recognized and verifiable certificate attesting to your
            enhanced security posture and commitment to safeguarding digital
            assets.
          </p>
        </div>
      </div>
      <div className="py-6 md:text-justify text-center  mx-4  md:py-0 ">
        <div className="text-5xl text-blue-500">
          <PiCertificateFill className=" mx-auto md:mx-0" />
        </div>
        <div>
          <h1 className="text-2xl font-bold py-2">
            Get a Verifiable certificate
          </h1>
          <p className="text-xl">
            Gain a recognized and verifiable certificate attesting to your
            enhanced security posture and commitment to safeguarding digital
            assets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutboxes;
