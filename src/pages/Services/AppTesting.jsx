import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import { ImAppleinc } from "react-icons/im";
import { BsAndroid2 } from "react-icons/bs";
import { LuCheckCircle } from "react-icons/lu";
import { GiCyberEye } from "react-icons/gi";
import { GrShieldSecurity } from "react-icons/gr";
import { SiMusicbrainz } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { FaHandsHelping } from "react-icons/fa";
import { TfiUnlink } from "react-icons/tfi";
import { Link } from "react-router-dom";

function AppTesting() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts.
  }, []);
  return (
    <div className="app_testing">
      <Navbar />

      {/* why need mobile pentesting */}
      <div className="Testing_Details flex flex-col lg:flex-row  justify-between mx-auto px-6 md:px-2 my-4   w-full md:w-[90%] ">
        <div className="img  lg:w-1/2  mb-4  ">
          <img
            className=" "
            src="https://i.ibb.co/2Y2ZXhj/mobile-application.gif"
            alt=""
          />
        </div>
        <div className="Hero_text lg:w-1/2">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-[1rem]">
            Why Conduct
            <span className="text-blue-500">
              &nbsp;Mobile Application Penetration Testing
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-justify">
            In today's fast-paced digital landscape, mobile applications are the
            lifeblood of your business, connecting you with your customers and
            ensuring a seamless user experience. But, in this interconnected
            world, vulnerabilities and exploits are just a step away, ready to
            strike. At CIBERSE, we understand the value of your mobile
            applications and the potential risks they carry. That's why our
            Mobile Application Penetration Testing service is your shield
            against cyber threats. We dive deep into your apps,identifying and
            neutralizing vulnerabilities, so you can enjoy peace of mind. With
            us, your digital assets remain secure, your reputation untarnished,
            and your business protected. Join CIBERSE and safeguard the future
            of your mobile apps.
          </p>

          <Link to="https://wa.me/message/KYGX2BGM4CFVB1">
            <button className="bg-blue-600  hover:shadow-blue-600 hover:shadow-md px-5 py-3 text-xl text-white font-bold  rounded-xl my-6   ">
              Talk to us
            </button>
          </Link>
        </div>
      </div>

      {/* Common Vulnerabilities */}
      <div className="flex  flex-col-reverse md:flex-row mx-auto  md:space-x-[8rem] px-6 md:px-2  w-full md:w-[90%] mb-[4rem] md:mb-[8rem]">
        <div className="Vulnerabilities md:w-[60%]  ">
          <div className="heading__text">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold  mt-6 md:mt-5 ">
              Common Vulnerabilities In
              <span className="text-blue-500">&nbsp;Mobile Applications</span>
            </h1>

            <div className="flex justify-between mt-[2rem]">
              <ul className=" space-y-4 ">
                <li className="flex  ">
                  <LuCheckCircle className="text-green-500 text-2xl mt-2" />
                  <h1 className="text-xl md:text-2xl  font-semibold">
                    &nbsp; Improper Platform Usage
                  </h1>
                </li>
                <li className="flex  ">
                  <LuCheckCircle className="text-green-500 text-2xl mt-2" />
                  <h1 className=" text-xl md:text-2xl  font-semibold">
                    &nbsp; Insecure Authentication
                  </h1>
                </li>
                <li className="flex  ">
                  <LuCheckCircle className="text-green-500 text-2xl mt-2" />
                  <h1 className=" text-xl md:text-2xl  font-semibold">
                    &nbsp; Insufficient Cryptography
                  </h1>
                </li>
                <li className="flex  ">
                  <LuCheckCircle className="text-green-500 text-2xl mt-2" />
                  <h1 className=" text-xl md:text-2xl  font-semibold">
                    &nbsp; Poor Code Quality
                  </h1>
                </li>
                <li className="flex  ">
                  <LuCheckCircle className="text-green-500 text-2xl mt-2" />
                  <h1 className=" text-xl md:text-2xl font-semibold">
                    &nbsp; Insecure Data Storage
                  </h1>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex  ">
                  <LuCheckCircle className="text-green-500 text-2xl mt-2" />
                  <h1 className=" text-xl md:text-2xl  font-semibold">
                    &nbsp; Insecure Authorization
                  </h1>
                </li>
                <li className="flex  ">
                  <LuCheckCircle className="text-green-500 text-2xl mt-2" />
                  <h1 className=" text-xl md:text-2xl  font-semibold">
                    &nbsp; Insecure Communication
                  </h1>
                </li>
                <li className="flex  ">
                  <LuCheckCircle className="text-green-500 text-2xl mt-2" />
                  <h1 className=" text-xl md:text-2xl  font-semibold">
                    &nbsp; Code Tampering
                  </h1>
                </li>
                <li className="flex  ">
                  <LuCheckCircle className="text-green-500 text-2xl mt-2" />
                  <h1 className=" text-xl md:text-2xl  font-semibold">
                    &nbsp; Reverse Engineering
                  </h1>
                </li>
                <li className="flex  ">
                  <LuCheckCircle className="text-green-500 text-2xl mt-2" />
                  <h1 className=" text-xl md:text-2xl  font-semibold">
                    &nbsp; Extraneous Functionality
                  </h1>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="image__container md:w-[40%] my-auto  ">
          <img
            className="img w-full  my-auto   "
            src="https://cdn.dribbble.com/users/620539/screenshots/17381430/media/c1c29b8d746e26e84790eb6d4dc87b51.png"
            alt=""
          />
        </div>
      </div>
      {/*Android and Apple testing div  */}
      <div className=" w-[90%] mx-auto text-center ">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-5 ">
          Start Your Mobile{" "}
          <span className="text-blue-500">Application Pentesting</span> Services
        </h1>
        <p className="text-xl text-justify md:text-center mb-9">
          Preparing for mobile app pentesting is simple. For Android app
          pentesting and/or iOS app pentesting, we’ll ask you bring these
          details to scope your pentest.
        </p>

        <div className="flex flex-col md:flex-row justify-center md:gap-10 lg:gap-[15rem]  ">
          <div className="flex shadow-md p-10 bg-white rounded-xl mb-9 text-3xl text-center hover:bg-blue-500 hover:text-white">
            <BsAndroid2 className="text-6xl text-slate-700" />
            <div className="h-[5rem] bg-black w-[2px] mx-4"></div>
            <div className="my-auto font-bold">3256+ Pentest</div>
          </div>
          <div className="flex shadow-md p-10 bg-white rounded-xl mb-9 text-3xl text-center hover:bg-blue-500 hover:text-white">
            <ImAppleinc className="text-6xl text-slate-700 " />
            <div className="h-[5rem] bg-black w-[2px] mx-4"></div>
            <div className="my-auto font-bold">2177+ Pentest</div>
          </div>
        </div>
      </div>

      {/* Advantages  */}
      <div className=" w-full md:w-[90%]  justify-center p-4 text-center mx-auto my-[6rem]">
        <h1 className="text-3xl md:text-4xl  lg:text-5xl font-bold mb-10">
          Mobile Application Penetration <br />
          <span className="font-semibold text-blue-500">Testing Advantage</span>
        </h1>
        <div className="flex flex-wrap justify-around px-10 py-6  gap-8 ">
          <div class="posture  pb-[6px] pr-2 bg-blue-500  lg:w-[25%] md:w-[45%] rounded-lg shadow-2xl">
            <div class="posture-item bg-white  rounded-lg p-3 md:h-[17rem]">
              <div class="posture_img  ">
                <GiCyberEye className="text-8xl text-blue-500" />
              </div>
              <div class="posture_box">
                <div class="posture-title pt-4">
                  <h3 class="font-600 text-2xl font-bold text-black text-left">
                    Proven methodology
                  </h3>
                </div>
                <div class="posture_des pt-3">
                  <p class="font-size-0 font-300 text-black  text-left">
                    Get comprehensive insights from a tried and tested hybrid
                    testing process
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="posture pb-[6px] pr-2 bg-blue-500 lg:w-[25%] md:w-[45%] rounded-lg shadow-2xl">
            <div class="posture-item bg-white  rounded-lg p-3 h-[17rem]">
              <div class="posture_img ">
                <GrShieldSecurity className="text-8xl  text-blue-500" />
              </div>
              <div class="posture_box">
                <div class="posture-title pt-4">
                  <h3 class="font-600 text-2xl font-bold text-black text-left">
                    Ensure Data Security
                  </h3>
                </div>
                <div class="posture_des pt-3">
                  <p class="font-size-0 font-300 text-black  text-left">
                    Detect data leaks emerging from OWASP top 10 issues
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="posture pb-[6px] pr-2 bg-blue-500 lg:w-[25%] md:w-[45%] rounded-lg shadow-2xl ">
            <div class="posture-item bg-white rounded-lg p-3 h-[17rem]">
              <div class="posture_img  ">
                <SiMusicbrainz className="text-8xl text-blue-500" />
              </div>
              <div class="posture_box">
                <div class="posture-title pt-4">
                  <h3 class="font-600 text-2xl font-bold text-black text-left">
                    Strengthen Backend Tech
                  </h3>
                </div>
                <div class="posture_des pt-3">
                  <p class="font-size-0 font-300 text-black  text-left">
                    Ensure backend services and servers are robust and free from
                    security flaws
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="posture pb-[6px] pr-2 bg-blue-500 lg:w-[25%] md:w-[45%] rounded-lg shadow-2xl">
            <div class="posture-item bg-white  rounded-lg p-3 h-[17rem]">
              <div class="posture_img  ">
                <CgWebsite className="text-8xl text-blue-500" />
              </div>
              <div class="posture_box">
                <div class="posture-title pt-4">
                  <h3 class="font-600 text-2xl font-bold text-black text-left">
                    Ensure Web Apps Resilience
                  </h3>
                </div>
                <div class="posture_des pt-3">
                  <p class="font-size-0 font-300 text-black  text-left">
                    Make your web application resilient to real world web
                    attacks
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="posture pb-[6px] pr-2 bg-blue-500 lg:w-[25%] md:w-[45%] rounded-lg shadow-2xl">
            <div class="posture-item bg-white  rounded-lg p-3 h-[17rem]">
              <div class="posture_img  ">
                <FaHandsHelping className="text-8xl text-blue-500" />
              </div>
              <div class="posture_box">
                <div class="posture-title pt-4">
                  <h3 class="font-600 text-2xl font-bold text-black text-left">
                    Fix Business Logic
                  </h3>
                </div>
                <div class="posture_des pt-3">
                  <p class="font-size-0 font-300 text-black  text-left">
                    Custom checklist created as per the business logic of the
                    application
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="posture pb-[6px] pr-2 bg-blue-500 lg:w-[25%] md:w-[45%] rounded-lg shadow-2xl">
            <div class="posture-item bg-white  rounded-lg p-3 h-[17rem]">
              <div class="posture_img  ">
                <TfiUnlink className="text-8xl text-blue-500" />
              </div>
              <div class="posture_box">
                <div class="posture-title pt-4">
                  <h3 class="font-600 text-2xl font-bold text-black text-left">
                    Identify Weakness in Apps
                  </h3>
                </div>
                <div class="posture_des pt-3">
                  <p class="font-size-0 font-300 text-black  text-left">
                    Assess where attackers might focus their efforts to exploit
                    weaknesses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* steps pic */}
      <div className="testing__process w-full md:w-[90%]  justify-center p-4 text-center mx-auto my-[6rem]">
        <h1 className="text-3xl md:text-4xl  lg:text-5xl font-bold mb-10">
          A tried, tested & recognized <br />
          <span className="font-semibold text-blue-500">
            Mobile Application Penetration Testing Process
          </span>
        </h1>
        <div className="image__process w-full md:w-1/2 justify-center mx-auto">
          <img src="https://i.ibb.co/12gWCg4/testing-process.png" alt="" />
        </div>
      </div>

      {/* contact div */}
      <div className="w-[90%] text-center my-5 mx-auto ">
        <h1 className="text-2xl md:text-5xl font-bold text-blue-500  mb-10">
          Book a security posture review <br />
          <span className=" text-lg md:text-3xl font-semibold mt-2 text-black">
            Assess Your Business For Security Risks
          </span>
        </h1>

        <Link to="/contactUs">
          <button className=" p-3 md:p-4 bg-blue-500  hover:shadow-blue-500 hover:shadow-md text-white text-base md:text-lg font-bold rounded-xl mb-7">
            Book Now
          </button>
        </Link>

        <div className="h-1 bg-red-700 w-[50%] mx-auto bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900"></div>
      </div>

      <div className="footer__section"></div>
      <Footer />
    </div>
  );
}

export default AppTesting;
