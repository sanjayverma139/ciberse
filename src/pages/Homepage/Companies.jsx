import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const Companies = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    // Function to update slidesPerView based on screen width
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(4); // For laptops and larger screens
      }
      if (window.innerWidth >= 769) {
        setSlidesPerView(3); // For Tablet and larger screens
      } else {
        setSlidesPerView(1); // For mobile and tablet screens
      }
    };
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <div className=" bg-slate-50 h-auto pt-[1.5rem] pb-[5rem] md:pb-[8rem]">
      <div className=" text-center  ">
        <h1 className="text-4xl md:text-6xl font-bold my-3">
          <span className="text-blue-500">Trusted</span> By{" "}
        </h1>

        <p className="text-lg md:text-xl my-3">
          Strongly Securing The Website of our Clients
        </p>
        <div className="div ">
          <div className=" bg-blue-700 mb-4 mx-auto w-[80%] md:w-[70%] h-[20rem] md:h-[32rem] lg:h-[28rem] rounded-3xl py-12">
            <h1 className="text-white font-bold text-xl md:text-5xl text-center mb-20">
              Earn your customers' trust. Protect your <br /> organization from
              attacks.
            </h1>
          </div>

          <div className="company__names  flex mx-auto justify-center space-x-5 -mt-[10rem] md:-mt-[14rem] w-[80%] md:w-[70%] h-[8rem]">
            <Swiper
              spaceBetween={0}
              slidesPerView={slidesPerView}
              loop={true}
              //   direction="ltr"
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
              }}
              speed={9000}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <div className="bg-white rounded-lg w-2/3  h-[4.6rem] md:h-[8rem] lg:h-[4.8rem]">
                  <img
                    className="w-1/2 justify-center m-auto"
                    src="https://i.ibb.co/kht2m4y/company1.png"
                    alt="adidas"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-lg w-2/3 h-[4.6rem]  md:h-[8rem] lg:h-[4.8rem]">
                  <img
                    className="w-2/3 justify-center m-auto py-[1.6rem]"
                    src="https://i.ibb.co/wCF4MJm/company2.png"
                    alt="rolex"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white rounded-lg w-2/3  h-[4.6rem] md:h-[8rem] lg:h-[4.8rem] ">
                  <img
                    className="w-1/2 justify-center m-auto pt-[1rem]"
                    src="https://i.ibb.co/kMbjkJP/company3.png"
                    alt="LV"
                  />{" "}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white rounded-lg w-2/3  h-[4.6rem] md:h-[8rem] lg:h-[4.8rem]">
                  <img
                    className="w-1/2 justify-center m-auto pt-2"
                    src="https://i.ibb.co/FgLmYkh/company4.png"
                    alt="amazon"
                  />{" "}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white rounded-lg w-2/3  h-[4.6rem] md:h-[8rem] lg:h-[4.8rem]">
                  {" "}
                  <img
                    className="w-1/3 justify-center m-auto"
                    src="https://i.ibb.co/GTCK7jb/company5.png"
                    alt="google"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
