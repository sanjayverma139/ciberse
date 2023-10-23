import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import { BsArrowRight } from "react-icons/bs";
import Carousel from "react-elastic-carousel";
import Contact from "../Homepage/Contact";
import Footer from "../../components/footer/Footer";
import emailjs from "@emailjs/browser";
import { Swiper, Slide } from "react-dynamic-swiper";
import "react-dynamic-swiper/lib/styles.css";
import ReCAPTCHA from "react-google-recaptcha";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 769, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function WebTesting() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts.
  }, []);
  const [verified, setVerified] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [done, setDone] = useState(false);
  const form = useRef();

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(value !== ""); // Set to true if value is not empty
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vh2sg0c",
        "template_yfuezgo",
        form.current,
        "lH6R7KfiTjetQkLuF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.first_name.value = "";
          form.current.last_name.value = "";
          form.current.mobile_no.value = "";
          form.current.user_email.value = "";
          form.current.message.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="web__testing ">
      <Navbar />

      {/* hero div  */}

      <div className=" flex  bg-blue-500 w-full  md:h-[75vh] pt-4 px-4 mx-auto justify-center content-center  shadow-xl">
        <div className=" flex  flex-col lg:flex-row mx-auto mt-10 justify-between md:w-[80vw]">
          <div className="holder flex flex-wrap">
            <div className="laptop hero-img">
              <h1 className="text-5xl text-white font-bold md:mt-4">
                Web Application <br />
                <span className="text-4xl font-semibold">
                  Penetration Testing
                </span>
              </h1>
              <div className="flex mt-6 text-yellow-500">
                <p className="text-2xl  font-semibold">Get Started Now</p>
                <span className="text-3xl  mt-1 rev">
                  <BsArrowRight className="w-[3rem]" />
                </span>
              </div>
              <img
                className="hidden lg:flex h-[80%] w-[80%] ml-[15rem] -mt-[8.6rem]"
                src="https://www.linkpicture.com/q/webTesting-hero.png"
                alt=""
              />
            </div>
            <div className=""></div>
          </div>

          {/*--------------------------Contact Form -------------------------------*/}
          <div className="form relative md:w-[70vw] lg:w-[27vw]  md:h-[86vh] rounded-2xl mt-5 mb-8  shadow-xl bg-white p-4 ">
            <div className="title__name mb-6">
              <h1 className="text-3xl font-bold mb-2">Get a Qoute</h1>
              <p className="text-md">
                Tell us about your scope. We respond the same business day.
              </p>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="input__boxes space-y-5"
            >
              <div className="flex space-x-5 ">
                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder="First Name"
                  className="w-1/2 rounded-md shadow-lg bg-slate-200 p-2 "
                />
                <input
                  type="text"
                  required
                  name="last_name"
                  placeholder="Last Name"
                  className="w-1/2 rounded-md shadow-lg bg-slate-200 p-2"
                />
              </div>
              <input
                type="number"
                name="mobile_no"
                placeholder="Phone No. (optional)"
                className="w-full rounded-md shadow-lg bg-slate-200 p-2"
              />
              <input
                required
                type="email"
                name="user_email"
                placeholder="Email Id"
                className="w-full rounded-md shadow-lg bg-slate-200 p-2"
              />
              <textarea
                rows="4"
                required
                name="message"
                placeholder="Message"
                className="w-full rounded-md shadow-lg bg-slate-200 p-2"
              />
              <ReCAPTCHA
                className="my-2  "
                required
                sitekey="6LdCvQ0mAAAAAAEohGw423MngE8OQQ3D8aSNnywu"
                onChange={onChange}
              />

              <button
                disabled={!verified}
                type="submit"
                value="Send"
                className="p-3 rounded-md shadow-lg w-full bg-blue-700  hover:shadow-blue-700 hover:shadow-md text-white font-semibold"
              >
                {" "}
                Send
              </button>
            </form>
            {done && (
              <div className="text-green-600 text-center mt-4">
                Your message sent successfully!
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="comp__application w-[90%] mx-auto mb-[2rem] mt-[5rem] ">
        <div className="title__deatil md:w-1/2 mb-[5rem] space-y-2">
          <h1 className="text-4xl font-bold text-blue-600">
            Comprehensive Application Penetration Testing with Ciberse
          </h1>
          <h2 className="text-2xl font-semibold text-yellow-600">
            Manual Penetration Testing + Automated Scanning = Ciberse
          </h2>
          <p className="text-lg ">
            Your applications and cloud environment are always on the move. New
            features and changes are deployed with agility. Don’t deprive your
            small releases of security testing as that may result in big
            security gaps for your application.
          </p>
        </div>

        {/* Features slots */}
        <div className="features__slots justify-around flex  flex-col md:flex-wrap md:flex-row lg:flex-row">
          <div className=" w-full md:w-[46%] lg:w-[23%]  p-3  rounded-xl shadow-lg space-y-5 mb-[4rem] border-solid border-2 border-slate-100 ">
            <div className="logo__circle rounded-[50%] text-5xl bg-slate-200 w-[5rem] h-[5rem] -mt-[3.0rem] mb-[2rem] mx-auto">
              <img
                src="https://i.ibb.co/86K1Qp5/vulner.png"
                alt="tania andrew"
                class="relative inline-block h-full w-full !rounded-full object-cover object-center"
              />
            </div>
            <h1 className="Heading__name text-center text-2xl font-bold text-blue-600">
              Vulnerability Assessment
            </h1>
            <p className="text-center">
              Our team of ethical hackers leaves no stone unturned, scanning
              every nook and cranny of your website's code to unearth potential
              vulnerabilities.
            </p>
          </div>

          <div className=" w-full md:w-[46%] lg:w-[23%]  p-3  rounded-xl shadow-lg space-y-5 mb-[4rem] border-solid border-2 border-slate-100">
            <div className="logo__circle rounded-[50%] w-[5rem] h-[5rem] -mt-[2.5rem] mb-[2rem] mx-auto ">
              <img src="https://i.ibb.co/ZLzQKZc/pentesing.png" alt="logo" />
            </div>
            <h1 className="Heading__name text-center text-2xl font-bold  text-blue-600 ">
              Penetration Testing <br />
              Testing
            </h1>
            <p className="text-center">
              We don the hats of digital invaders, using state-of-the-art
              techniques to simulate real- world attacks. If your website can
              withstand us, it can fend off any cyber assailant.
            </p>
          </div>

          <div className=" w-full md:w-[46%] lg:w-[23%]  p-3  rounded-xl shadow-lg space-y-5 mb-[4rem] border-solid border-2 border-slate-100">
            <div className="logo__circle rounded-[50%] bg-red-950 w-[5rem] h-[5rem] -mt-[2.5rem] mb-[2rem] mx-auto">
              <img src="https://i.ibb.co/ZxVRwfx/report.png" alt="logo" />
            </div>
            <h1 className="Heading__name text-center text-2xl font-bold  text-blue-600">
              User-Friendly Reports
            </h1>
            <p className="text-center">
              Our Unique Selling Proposition (USP) lies in our ability to turn
              complex technical findings into easily digestible reports. No
              jargon, no tech speak – just crystal-clear insights.
            </p>
          </div>

          <div className=" w-full md:w-[46%] lg:w-[23%]  p-3  rounded-xl shadow-lg space-y-5 mb-[4rem] border-solid border-2 border-slate-100">
            <div className="logo__circle rounded-[50%] w-[5rem] h-[5rem] -mt-[2.5rem] mb-[2rem] mx-auto">
              <img src="https://i.ibb.co/94CWpY1/developer.png" alt="logo" />
            </div>
            <h1 className="Heading__name text-center text-2xl font-bold text-blue-600">
              Developer-Friendly Insights
            </h1>
            <p className="text-center">
              We provide not one, but two reports. One for non-tech personnel
              and another for developers. We believe that cybersecurity should
              be accessible to everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Demo pdf slide */}
      <div className=" text-center  mb-[3rem]">
        <div className=" bg-blue-400 ">
          {/* Slide text heading */}
          <div className="  mb-4 mx-auto w-full   py-12">
            <h1 className=" text-3xl md:text-5xl font-bold  md:my-3 text-white">
              check our sample <br />
              penetration testing report
            </h1>
          </div>

          {/* slides */}
          <div className="sample__slides  flex  justify-center  mx-auto w-[80%]   ">
            <Carousel breakPoints={breakPoints} className="mb-[4rem] ">
              <div className="lg:mx-3">
                <img src="https://i.ibb.co/vzZrHwv/1.png" alt="" />
              </div>
              <div className="lg:mx-3">
                <img src="https://i.ibb.co/RjGvgmQ/2.png" alt="" />
              </div>
              <div className="lg:mx-3">
                <img src="https://i.ibb.co/R2Cnnmt/3.png" alt="" />
              </div>
              <div className="lg:mx-3">
                <img src="https://i.ibb.co/zrY14Z4/4.png" alt="" />
              </div>
              <div className="lg:mx-3">
                <img src="https://i.ibb.co/w7rQCKW/5.png" alt="" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      {/*Steps */}
      <div className="step__methodology w-full p-4  md:p-0 lg:w-[90%] mx-auto md:px-[6rem] mb-8">
        <h1 className="text-center  text-2xl  md:text-4xl font-bold text-blue-700 my-8">
          Ciberse Penetration Testing <br />
          Services 4-Step Methodology
        </h1>

        <div className=" flex flex-col md:flex-row  md:space-x-[5rem] md:w-full lg:w-[90%] mx-auto mb-[4rem] ">
          <div className="   md:text-center md:py-auto">
            <h1 className="text-4xl md:text-6xl   lg:text-8xl font-bold text-slate-200  ">
              01
            </h1>
          </div>
          <div className=" flex flex-col  md:flex-row shadow-xl rounded-2xl    border-2 border-slate-100   ">
            <div className=" rounded-full  w-[6rem] h-[6rem] md -mt-[3rem] mx-auto md:my-auto  md:-mr-[5rem] md:-ml-[3rem]">
              <img src="https://i.ibb.co/MVp0zRq/1.png" alt="" />
            </div>
            <div className="md:w-[70%] md:mx-auto ">
              <h1 className="md:text-3xl text-center mx-auto p-2  md:text-start   text-xl font-bold text-blue-900 ">
                Onboard a Meet with CIBERSE
              </h1>
              <div className=" p-4 ">
                <p className=" text-base md:text-lg text-black   font-normal">
                  Initiating our cybersecurity journey begins with a meeting of
                  minds at CIBERSE. This initial phase is all about
                  understanding your unique digital landscape. Our team of
                  experts engages with your organization to comprehensively
                  grasp your needs, goals, and the intricacies of your
                  infrastructure. We believe that a successful partnership
                  starts with an open, collaborative discussion.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row  md:space-x-[5rem] md:w-full lg:w-[90%] mx-auto mb-[4rem] ">
          <div className="   md:text-center md:py-auto">
            <h1 className="text-4xl md:text-6xl   lg:text-8xl font-bold text-slate-200  ">
              02
            </h1>
          </div>
          <div className=" flex flex-col  md:flex-row shadow-xl rounded-2xl    border-2 border-slate-100   ">
            <div className=" rounded-full w-[6rem] h-[6rem] md -mt-[3rem] mx-auto md:my-auto  md:-mr-[5rem] md:-ml-[3rem]">
              <img src="https://i.ibb.co/4FF40L7/2.png" alt="2" />
            </div>
            <div className="md:w-[70%] md:mx-auto ">
              <h1 className="md:text-3xl text-center mx-auto p-2  md:text-start   text-xl font-bold text-blue-900 ">
                Execute Penetration Testing
              </h1>
              <div className=" p-4 ">
                <p className=" text-base md:text-lg text-black   font-normal">
                  With a deep understanding of your digital ecosystem, we
                  execute the next critical step – penetration testing. Our
                  seasoned professionals meticulously simulate real-world
                  cyberattacks to scrutinize your systems. We follow a robust
                  and comprehensive approach, seeking out vulnerabilities and
                  potential weaknesses. This phase is where we uncover the
                  hidden threats and assess your system's defense mechanisms.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row  md:space-x-[5rem] md:w-full lg:w-[90%] mx-auto mb-[4rem] ">
          <div className="   md:text-center md:py-auto">
            <h1 className="text-4xl md:text-6xl   lg:text-8xl font-bold text-slate-200  ">
              03
            </h1>
          </div>
          <div className=" flex flex-col  md:flex-row shadow-xl rounded-2xl    border-2 border-slate-100   ">
            <div className=" rounded-full  w-[6rem] h-[6rem] md -mt-[3rem] mx-auto md:my-auto  md:-mr-[5rem] md:-ml-[3rem]">
              <img src="https://i.ibb.co/WpZqFSx/3.png" alt="" />
            </div>
            <div className="md:w-[70%] md:mx-auto ">
              <h1 className="md:text-3xl text-center mx-auto p-2  md:text-start   text-xl font-bold text-blue-900 ">
                Get Actionable Remediation
              </h1>
              <div className=" p-4 ">
                <p className=" text-base md:text-lg text-black   font-normal">
                  Identification is just the beginning. At CIBERSE, we believe
                  in taking actionable steps. Once our penetration testing phase
                  is complete, we present you with a detailed report that
                  outlines the vulnerabilities detected. But we don't stop at
                  pointing out the issues; we present you with a clear,
                  practical roadmap for remediation. Our experts work hand in
                  hand with your team to implement tailored solutions, ensuring
                  that your systems are fortified and secure.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row  md:space-x-[5rem] md:w-full lg:w-[90%] mx-auto mb-[4rem] ">
          <div className="   md:text-center md:py-auto">
            <h1 className="text-4xl md:text-6xl   lg:text-8xl font-bold text-slate-200  ">
              04
            </h1>
          </div>
          <div className=" flex flex-col  md:flex-row shadow-xl rounded-2xl    border-2 border-slate-100   ">
            <div className=" rounded-full w-[6rem] h-[6rem] md -mt-[3rem] mx-auto md:my-auto  md:-mr-[5rem] md:-ml-[3rem]">
              <img src="https://i.ibb.co/n6cWpJS/4.png" alt="" />
            </div>
            <div className="md:w-[70%] md:mx-auto ">
              <h1 className="md:text-3xl text-center mx-auto p-2  md:text-start   text-xl font-bold text-blue-900 ">
                Retest for Validation of Fixes
              </h1>
              <div className=" p-4 ">
                <p className=" text-base md:text-lg text-black   font-normal">
                  We understand that cybersecurity is a dynamic field. Once
                  fixes and solutions are implemented, we revisit your
                  environment. Our retesting phase is crucial in validating the
                  effectiveness of the remedies. It ensures that the
                  vulnerabilities we discovered have been successfully addressed
                  and that your digital infrastructure is now fortified against
                  potential threats. Your security is an ongoing commitment, and
                  we take it seriously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact component */}
      <Contact />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default WebTesting;
