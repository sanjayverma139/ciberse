import React from "react";

const Mission = () => {
  return (
    <div className="flex md:w-[90%] w-full justify-center md:mx-auto">
      <div className=" w-full md:w-[60%]">
        <h1 className="text-black font-bold text-4xl pt-4 md:text-6xl  ml-6 md:my-6 ">
          <span className="text-blue-500">About</span> Us
        </h1>
        <h2 className="text-black font-bold text-2xl md:text-3xl ml-8 my-6">
          Our Mission
        </h2>
        <p className="text-lg  md:text-xl ml-8 my-6">
          Our mission is to safeguard every enterprise swiftly and
          comprehensively. We're committed to delivering top-tier security
          solutions efficiently, within minimal timeframes, and with maximum
          cost-effectiveness. We're dedicated to making cybersecurity
          accessible, even to non-technical small vendors, empowering them to
          protect their digital assets without grappling with technical
          complexities
        </p>

        <h1 className="text-black font-bold text-2xl md:text-3xl ml ml-8 my-6">
          Who We Are ?
        </h1>
        <p className="text-lg  md:text-xl ml-8 my-6 ">
          At Ciberse, we're more than just a cybersecurity company; we're your
          dedicated partner in the ever-evolving digital landscape. Our mission
          is to provide state-of-the-art security solutions that protect your
          business, customer data, and reputation with the utmost efficiency and
          affordability. We understand the unique challenges faced by businesses
          of all sizes, from startups to established enterprises, and we're here
          to bridge the cybersecurity gap for you. With a team of seasoned
          experts and a commitment to accessibility, we ensure that your online
          presence remains secure, allowing you to focus on what matters most –
          your business.
        </p>
      </div>
      <div className=" hidden md:flex w-[40%] md:w-[50%] my-auto justify-center md:h-1/2">
        <img
          className="lg:h-[35rem] "
          src="https://imgtr.ee/images/2023/09/27/97abe7e36e0ea9b8d1a0aa1d1d1a0212.jpeg"
          alt="97abe7e36e0ea9b8d1a0aa1d1d1a0212.jpeg"
          border="0"
        />
      </div>
    </div>
  );
};

export default Mission;
