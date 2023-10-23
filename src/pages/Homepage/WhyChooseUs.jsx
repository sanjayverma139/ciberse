import React from "react";

const WhyChooseUs = () => {
  return (
    <div className=" w-full md:w-[90%] mx-auto mt-10 py-9 px-6 bg-slate-50">
      <div className=" text-center  mb-9 ">
        <h1 className="text-4xl md:text-5xl mb-4 font-bold">
          Why <span className="text-blue-500">Choose</span> Us
        </h1>
        <p className="text-xl mb-4 ">
          Our experienced cyber security team can provide your a better insight
          into adversary tactics and techniques to given <br /> your
          organization an egde against them.
        </p>
      </div>

      <div className="flex flex-col flex-wrap lg:flex-row lg:flex-nowrap">
        <div className="mx-4">
          <h1 className="text-2xl text-center md:text-3xl font-bold mb-5">
            <span className=" text-blue-500">&bull;</span> Comprehensive Testing
          </h1>

          <p className="text-xl mb-4 text-center">
            Our team specializes in various types of security testing, including
            website, API, and mobile app security, ensuring all your digital
            assets are protected by seasoned cybersecurity professionals.
          </p>
        </div>

        <div className="mx-4">
          <h1 className="text-2xl text-center md:text-3xl font-bold mb-5">
            <span className=" text-blue-500">&bull;</span> User-Friendly Reports
          </h1>
          <p className="text-xl mb-4 text-center">
            We provide easy-to-understand reports, bridging the gap between
            technical and non-technical stakeholders. Our reports empower you to
            make informed decisions about your digital security effortlessly.
          </p>
        </div>

        <div className="mx-4">
          <h1 className="text-2xl text-center md:text-3xl font-bold mb-5">
            <span className=" text-blue-500">&bull;</span> Cost-Effective
            Solutions
          </h1>
          <p className="text-xl mb-4 text-center">
            CIBERSE offers top-notch security services at budget-friendly
            prices, making high-quality cybersecurity accessible to businesses
            of all sizes without breaking the bank.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
