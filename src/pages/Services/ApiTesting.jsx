import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import { BsFillCheckSquareFill } from "react-icons/bs";
import Contact from "../Homepage/Contact";

import { Link } from "react-router-dom";

function ApiTesting() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts.
  }, []);
  return (
    <div className="api_testing">
      {/* navbar */}
      <Navbar />
      {/*Hero*/}
      <div className="hero__section__api  bg-blue-500 flex flex-col md:flex-row mb-[2rem] md:h-[40vh] lg:h-[60vh]  shadow-xl ">
        <div className="content__hero p-12 space-y-[2rem] md:flex-[.4] justify-center my-auto">
          <h1 className="text-4xl font-bold text-white ">
            API Penetration Testing
          </h1>
          <p className=" text-white text-xl font-semibold">
            Fast, comprehensive, and scalable API pentesting for compliance and
            security resilience.
          </p>
          <button className="rounded-xl p-3 text-lg bg-gray-100 text-blue-800  hover:shadow-white hover:shadow-md font-bold shadow-xl">
            Schedule a Discovery Call
          </button>
        </div>
        <div className="hidden md:flex relative hero__image md:flex-[.6]  md:mt-[5rem] lg:my-0">
          <img
            className="absolute   md:w-[50rem]"
            src="https://i.ibb.co/QjfL4vg/3629611-772-removebg.png"
            alt="api Image hero"
          />
        </div>
      </div>

      {/*run Api*/}
      <div className="run__api__test w-full md:w-[90%]  mt-3 mx-auto p-6 md:p-0 mb-[3rem]">
        <h1 className=" text-3xl md:text-4xl font-bold text-center lg:text-start mb-4 text-blue-800">
          When to Run an API Pen Test
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="text__content w-full md:w-[50%] space-y-5 my-auto">
            <p className="md:text-lg text-base ">
              Welcome to CIBERSE, where we specialize in safeguarding your
              digital assets with unmatched expertise and unwavering commitment.
              In today's interconnected world, your website, APIs, and mobile
              applications are your gateway to success, but they're also exposed
              to cyber threats. We understand that not everyone speaks the
              language of code and encryption. That's why we're here, bridging
              the gap between tech and non-tech folks. With us, you can be
              certain that your online presence is shielded, your data is safe,
              and your peace of mind is intact. Let's navigate the digital realm
              together, where safety meets simplicity.
            </p>
            <h1 className=" text-2xl md:text-3xl font-bold text-blue-900">
              Ciberse API Pentesting Use Cases
            </h1>
            <ul className="space-y-[1rem]">
              <li className="flex ">
                <BsFillCheckSquareFill className=" text-green-600" />{" "}
                &nbsp;&nbsp;
                <h1 className="-mt-1">
                  Security Compliance (SOC 2, HIPAA, GDPR, ISO 27001, PCI DSS)
                </h1>
              </li>
              <li className="flex">
                <BsFillCheckSquareFill className=" text-green-600" />{" "}
                &nbsp;&nbsp;
                <h1 className="-mt-1"> Third-Party Security Requirements</h1>
              </li>
              <li className="flex">
                <BsFillCheckSquareFill className=" text-green-600" />{" "}
                &nbsp;&nbsp;
                <h1 className="-mt-1"> Vendor Assessments</h1>
              </li>
              <li className="flex">
                <BsFillCheckSquareFill className=" text-green-600" />{" "}
                &nbsp;&nbsp;
                <h1 className="-mt-1"> Initial Web or Mobile App Releases</h1>
              </li>
              <li className="flex">
                <BsFillCheckSquareFill className=" text-green-600" />{" "}
                &nbsp;&nbsp;
                <h1 className="-mt-1"> Major Product Updates and Releases</h1>
              </li>
              <li className="flex">
                <BsFillCheckSquareFill className=" text-green-600" />{" "}
                &nbsp;&nbsp;
                <h1 className="-mt-1">
                  General Attack Surface Visibility & Management
                </h1>
              </li>
            </ul>
          </div>
          <div className="image__side w-full md:w-[50%]">
            <img
              className="mx-auto"
              src=" https://i.ibb.co/hy570Cc/web-api-interface-flat-illustration-203633-2075-removebg-preview.png"
              alt="side image"
            />
          </div>
        </div>
      </div>

      {/*Discover__Risks*/}
      <div className="bg-slate-100">
        <div className=" w-full md:w-[90%] mx-auto p-6  ">
          <h1 className=" text-3xl md:text-4xl font-bold text-center mb-4 p-5 text-blue-800">
            Ciberse’s API Penetration Testing Experts Discover Risks Like:
          </h1>
          <div className="flex flex-col md:flex-row md:space-x-[4rem] lg:space-x-0">
            <div className="image__side w-full md:w-[60%]  justtify-center my-auto">
              <img
                className="mb-8 md:mb-0 mx-0 "
                src=" https://i.ibb.co/2Y8BVNz/risk-report-pdf.png"
                alt="side image"
              />
            </div>
            <div className="text__content w-full md:w-[40%] space-y-5 my-auto">
              <ul className="space-y-[1rem]">
                <li className="flex ">
                  <BsFillCheckSquareFill className=" text-green-600" />{" "}
                  &nbsp;&nbsp;
                  <h1 className="-mt-1">Excessive Data Exposure</h1>
                </li>
                <li className="flex">
                  <BsFillCheckSquareFill className=" text-green-600" />{" "}
                  &nbsp;&nbsp;
                  <h1 className="-mt-1"> Broken User Authentication</h1>
                </li>
                <li className="flex">
                  <BsFillCheckSquareFill className=" text-green-600" />{" "}
                  &nbsp;&nbsp;
                  <h1 className="-mt-1">Broken Object-Level Authorization</h1>
                </li>
                <li className="flex">
                  <BsFillCheckSquareFill className=" text-green-600" />{" "}
                  &nbsp;&nbsp;
                  <h1 className="-mt-1">
                    {" "}
                    Broken Function-Level Authorization
                  </h1>
                </li>
                <li className="flex">
                  <BsFillCheckSquareFill className=" text-green-600" />{" "}
                  &nbsp;&nbsp;
                  <h1 className="-mt-1"> Information Leakage</h1>
                </li>
                <li className="flex">
                  <BsFillCheckSquareFill className=" text-green-600" />{" "}
                  &nbsp;&nbsp;
                  <h1 className="-mt-1">Lack of Resources and Rate Limiting</h1>
                </li>
                <li className="flex">
                  <BsFillCheckSquareFill className=" text-green-600" />{" "}
                  &nbsp;&nbsp;
                  <h1 className="-mt-1">Mass Assignment</h1>
                </li>
                <li className="flex">
                  <BsFillCheckSquareFill className=" text-green-600" />{" "}
                  &nbsp;&nbsp;
                  <h1 className="-mt-1">Security Misconfiguration</h1>
                </li>
                <li className="flex">
                  <BsFillCheckSquareFill className=" text-green-600" />{" "}
                  &nbsp;&nbsp;
                  <h1 className="-mt-1">Injection</h1>
                </li>
                <li className="flex">
                  <BsFillCheckSquareFill className=" text-green-600" />{" "}
                  &nbsp;&nbsp;
                  <h1 className="-mt-1">Improper Assets Management</h1>
                </li>
                <li className="flex">
                  <BsFillCheckSquareFill className=" text-green-600" />{" "}
                  &nbsp;&nbsp;
                  <h1 className="-mt-1">Insufficient Logging and Monitoring</h1>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/*SSFDDSVDVSV*/}
      <div className="run__api__test w-full md:w-[90%] mx-auto p-6 md:p-0 mb-[3rem]">
        <div className="flex flex-col md:flex-row">
          <div className="text__content w-full md:w-[50%] space-y-5 my-auto">
            <h1 className=" text-2xl md:text-5xl font-bold text-blue-800">
              Tools Used for API Pentesting
            </h1>
            <p className="text-base ">
              Our certified expert pentesters leverage the industry’s best tools
              to do a human-led, technology augmented deep dive during API
              pentesting engagements. They meticulously search for
              vulnerabilities according to OWASP standards and your unique
              requirements.
            </p>

            <ul className="space-y-[1rem]">
              <li className="flex ">
                <BsFillCheckSquareFill className=" text-green-600" />{" "}
                &nbsp;&nbsp;
                <h1 className="-mt-1">Ciberse Pen Test Automation Engine</h1>
              </li>
              <li className="flex">
                <BsFillCheckSquareFill className=" text-green-600" />{" "}
                &nbsp;&nbsp;
                <h1 className="-mt-1"> Postman</h1>
              </li>
              <li className="flex">
                <BsFillCheckSquareFill className=" text-green-600" />{" "}
                &nbsp;&nbsp;
                <h1 className="-mt-1"> Swagger UI</h1>
              </li>
              <li className="flex">
                <BsFillCheckSquareFill className=" text-green-600" />{" "}
                &nbsp;&nbsp;
                <h1 className="-mt-1"> Curl</h1>
              </li>
              <li className="flex">
                <BsFillCheckSquareFill className=" text-green-600" />{" "}
                &nbsp;&nbsp;
                <h1 className="-mt-1"> GraphQL</h1>
              </li>
              <li className="flex">
                <BsFillCheckSquareFill className=" text-green-600" />{" "}
                &nbsp;&nbsp;
                <h1 className="-mt-1">Custom Scripts</h1>
              </li>
            </ul>
          </div>
          <div className="image__side w-full md:w-[50%]">
            <img
              src="https://www.breachlock.com/wp-content/themes/breach-lock-theme/dist/images/api-penetration-testing/Group-11113221_517bf9e7.png"
              alt="side image"
            />
          </div>
        </div>
      </div>

      {/*Contact*/}
      <Contact />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default ApiTesting;
