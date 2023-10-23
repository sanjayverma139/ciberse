import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Contact from "../Homepage/Contact";
import Footer from "../../components/footer/Footer";
import { BsMotherboardFill } from "react-icons/bs";
import { SiDatabricks } from "react-icons/si";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FiLoader } from "react-icons/fi";
import { MdSupportAgent } from "react-icons/md";
import { PiClockCountdownFill } from "react-icons/pi";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts.
  }, []);
  return (
    <div className="AboutUs__page">
      <Navbar />
      {/* Hero */}
      <div className="bg-blue-800 h-[55vh] md:h-[70vh] lg:h-[80vh]  flex justify-center items-center mb-[2rem] shadow-xl">
        <div className="mx-auto md:w-[100%] lg:w-[75%] py-auto text-center relative">
          <img
            className="w-[60%] md:w-[60%] lg:w-[40%] mx-auto"
            src="https://i.ibb.co/kHwp5gp/20230207-024613.jpg"
          />
          <span className=" text-2xl md:text-5xl lg:text-6xl font-bold text-white absolute inset-x-0  bottom-[3rem] md:bottom-[6rem]">
            Strongly Encrypting The World
          </span>
        </div>
      </div>

      {/* Overview */}
      <div className="company__overview w-[90%] md:w-[80%] mx-auto space-y-4 md:space-y-0 md:space-x-4  mb-[2rem] flex flex-col md:flex-row">
        <div className="md:w-[40%] my-auto justify-center">
          <img
            src="https://qualysec.com/wp-content/uploads/2023/02/download.png"
            className="mx-auto w-[90%] lg:w-[80%]"
          />
        </div>
        <div className="md:w-[60%] justify-center my-auto space-y-6">
          <h1 className=" text-3xl md:text-5xl font-bold text-blue-900 text-center">
            What We’re About
          </h1>
          <p className=" text-center md:text-justify text-lg">
            Qualysec is a penetration testing company that is transforming the
            cyber security testing industry with Process based approach and
            prevention-based cyber security techniques.Qualysec’s penetration
            testing service is a preferred choice among global enterprises for
            testing their web and mobile applications, IoT devices, Blockchain
            and cloud infrastructure to ensure security.
          </p>
        </div>
      </div>

      {/* Core VAlues */}
      <div className="core__values  justify-center mx-auto bg-slate-50 p-8 mb-[2rem]">
        <h1 className="text-center text-4xl md:text-5xl text-blue-900 font-bold mb-6">
          Core Value
        </h1>

        <div className="values__boxes flex flex-wrap gap-8 justify-center mx-auto">
          <div className="conatiner__value w-full md:w-[40%] lg:w-1/4  bg-white space-y-3 rounded-lg shadow-xl p-6">
            <h1 className="text-2xl text-blue-500 font-semibold text-center">
              Honesty And Clarity
            </h1>
            <p className="text-center">
              We believe in honesty and transparency. We don’t sugar-coat
              updates or hidden agendas for our clients. We strive to provide a
              realistic picture of our work and our relationships. Our
              commitment to directness and openness is one of the reasons why
              our clients trust and believe in us.
            </p>
          </div>

          <div className="conatiner__value w-full md:w-[40%] lg:w-1/4 space-y-3 bg-white rounded-lg shadow-xl p-6 ">
            <h1 className="text-2xl text-blue-500 font-semibold text-center">
              Reliable and Quality service
            </h1>
            <p className="text-center">
              To ensure that our results are consistently of the highest
              quality, we have implemented formalized quality assurance and
              oversight measures such as project management workflows,
              practitioner guides, standardized checklists, review and
              pentesting playbooks
            </p>
          </div>

          <div className="conatiner__value w-full md:w-[40%] lg:w-1/4  space-y-3 bg-white rounded-lg shadow-xl p-6 ">
            <h1 className="text-2xl text-blue-500 font-semibold text-center">
              Innovation and improvement
            </h1>
            <p className="text-center">
              We pride ourselves on our innovation and staying up to date on the
              latest cybersecurity information. We continuously challenge
              ourselves to upgrade our skills by thinking outside the box and
              researching evolutionary technologies.
            </p>
          </div>

          <div className="conatiner__value w-full md:w-[40%] lg:w-1/4  space-y-3 bg-white  rounded-lg shadow-xl p-6">
            <h1 className="text-2xl text-blue-500 font-semibold text-center">
              Customer Focus
            </h1>
            <p className="text-center">
              We believe on “A satisfy customer is the best business strategy”.
              Satisfied customers are the key to the success of any business,
              and we approach our client relationships like a true partnership.
            </p>
          </div>

          <div className="conatiner__value w-full md:w-[40%] lg:w-1/4  space-y-3 bg-white rounded-lg shadow-xl p-6">
            <h1 className="text-2xl text-blue-500 font-semibold text-center">
              We Work with The Team, Not Against It
            </h1>
            <p className="text-center">
              A security tester can have the most amazing skill set and the
              expertise needed to do their job well, but without being able to
              work collaboratively, it is all for nothing. We are team players,
              we “embed” ourselves in software development teams and work
              together as one entity.
            </p>
          </div>

          <div className="conatiner__value w-full md:w-[40%] lg:w-1/4  space-y-3 bg-white rounded-lg shadow-xl p-6">
            <h1 className="text-2xl text-blue-500 font-semibold text-center">
              {" "}
              Defence Philosophy
            </h1>
            <p className="text-center">
              Prevention is better than cure, especially when it comes to
              cybersecurity. Our goal is not just to identify vulnerabilities,
              but to ensure that our clients’ businesses are secure. We take a
              proactive approach by identifying the root cause of security
              issues and establishing processes to prevent them from happening
              again.
            </p>
          </div>
        </div>
      </div>

      {/*Our Strength*/}
      {/*----------------------Edit Kr Na H iss Ko Images Wagra ------------*/}
      <div className="Strenghts__ciberse  justify-center mx-auto p-8 mb-[2rem]">
        <h1 className="text-center text-4xl md:text-5xl text-blue-900 font-bold mb-6">
          Our Strength
        </h1>

        <div className="Strenght__boxes flex flex-wrap gap-8 justify-center mx-auto">
          <div className="conatiner__value w-full md:w-[40%] lg:w-1/4  bg-white space-y-3 rounded-lg shadow-xl p-9">
            <PiClockCountdownFill className="text-5xl text-blue-500 mx-auto " />
            <h1 className="text-2xl text-blue-500 font-bold text-center">
              Speed
            </h1>
            <p className="text-center">
              Reduce penetration testing timeline by 30%
            </p>
          </div>

          <div className="conatiner__value w-full md:w-[40%] lg:w-1/4  bg-white space-y-3 rounded-lg shadow-xl p-9">
            <SiDatabricks className="text-5xl text-blue-500 mx-auto " />
            <h1 className="text-2xl text-blue-500 font-bold text-center">
              Depth
            </h1>
            <p className="text-center">
              In-depth detection is just as important as defence in depth
            </p>
          </div>

          <div className="conatiner__value w-full md:w-[40%] lg:w-1/4  bg-white space-y-3 rounded-lg shadow-xl p-9">
            <FiLoader className="text-5xl text-blue-500 mx-auto " />
            <h1 className="text-2xl text-blue-500 font-bold text-center">
              Process
            </h1>
            <p className="text-center">
              Comprehensive, methodical, process-driven approach
            </p>
          </div>

          <div className="conatiner__value w-full md:w-[40%] lg:w-1/4  bg-white space-y-3 rounded-lg shadow-xl p-9">
            <MdSupportAgent className="text-5xl text-blue-500 mx-auto" />
            <h1 className="text-2xl text-blue-500 font-bold text-center">
              Expertise
            </h1>
            <p className="text-center">
              Our team has the expertise and certifications required to meet
              your needs
            </p>
          </div>

          <div className="conatiner__value w-full md:w-[40%] lg:w-1/4  bg-white space-y-3 rounded-lg shadow-xl p-9">
            <HiOutlineClipboardDocumentList className="text-5xl text-blue-500  mx-auto" />
            <h1 className="text-2xl text-blue-500 font-bold text-center">
              Reliable
            </h1>
            <p className="text-center">
              Top penetration testing company trusted by global enterprises
            </p>
          </div>

          <div className="conatiner__value w-full md:w-[40%] lg:w-1/4  bg-white space-y-3 rounded-lg shadow-xl p-9">
            <BsMotherboardFill className="text-5xl text-blue-500  mx-auto" />
            <h1 className="text-2xl font-bold text-blue-500  text-center">
              Applicable
            </h1>
            <p className="text-center">
              Accurate, documented results and applicable recommendations
            </p>
          </div>
        </div>
      </div>

      {/* contact Form */}
      <Contact />

      {/*footer*/}
      <Footer />
    </div>
  );
};

export default About;
