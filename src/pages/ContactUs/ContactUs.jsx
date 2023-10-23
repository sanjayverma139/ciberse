import React, { useEffect, useRef, useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts.
  }, []);

  const [verified, setVerified] = useState(false);
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
    <div className="contact__page">
      <Navbar />
      <div className="bg-blue-500 h-[60vh]  mb-[32rem] md:mb-[46rem]  lg:mb-[32rem]  shadow-xl">
        <div className="contact__Hero p-8 w-[90%] mx-auto md:mb-[6rem] lg:mb-[3rem]">
          <h1 className=" text-3xl md:text-5xl font-bold text-center justify-center mb-5 text-white">
            We are here to help you.
          </h1>

          <h2 className=" text-xl md:text-3xl font-semibold text-center justify-center">
            Please provide us with the details of your project or any questions
            you have. <br /> We aim to respond the same business day.
          </h2>
        </div>
        <div className="form relative mx-auto justify-center w-[90%] md:w-[75vw] lg:w-[70vw]  rounded-2xl mt-5 mb-[8rem]  shadow-xl bg-white p-4 overflow-hidden">
          <div className="title__name mb-2 text-center justify-center mx-auto">
            <h1 className="text-4xl font-bold mb-2 text-blue-600">
              Get a Quote
            </h1>
            <p className="text-lg">
              Tell us about your scope. We respond the same business day.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row ">
            <div className="my-auto hidden md:flex mx-auto w-[70%] lg:w-[55%]">
              <img
                src="https://i.ibb.co/xF5PBch/5155597-2672270-svg-2.png"
                alt="Contact Avtar"
              />
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="input__boxes space-y-5 my-auto justify-center "
            >
              <div className="flex space-x-5 ">
                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder="First Name"
                  className="w-1/2 rounded-md shadow-lg bg-slate-50 p-2 "
                />
                <input
                  type="text"
                  name="last_name"
                  required
                  placeholder="Last Name"
                  className="w-1/2 rounded-md shadow-lg bg-slate-50 p-2"
                />
              </div>
              <input
                type="number"
                name="mobile_no"
                placeholder="Phone No."
                className="w-full rounded-md shadow-lg bg-slate-50 p-2"
              />
              <input
                type="email"
                required
                name="user_email"
                placeholder="Email Id"
                className="w-full rounded-md shadow-lg bg-slate-50 p-2"
              />
              <textarea
                rows="4"
                required
                name="message"
                placeholder="Message"
                className="w-full rounded-md shadow-lg bg-slate-50 p-2"
              />
              <ReCAPTCHA
                className="my-2"
                required
                sitekey="6LdCvQ0mAAAAAAEohGw423MngE8OQQ3D8aSNnywu"
                onChange={onChange}
              />
              <button
                disabled={!verified}
                required
                type="submit"
                value="Send"
                className="p-3 rounded-md shadow-lg w-full bg-blue-700   hover:shadow-blue-700 hover:shadow-md text-white font-semibold"
              >
                Send
              </button>
            </form>
          </div>
          {done && (
            <div className="text-green-600 text-center mt-4">
              Your message sent successfully!
            </div>
          )}
        </div>
      </div>

      {/* footer */}
      <Footer className="" />
    </div>
  );
};

export default ContactUs;
