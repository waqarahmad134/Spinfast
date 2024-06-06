import React from "react";
import Header from "../../components/Header";
import { TbClockCheck } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AboutCards from "../../components/AboutCards";

export default function About() {
  return (
    <section>
      <Header />

      <div className="w-11/12 lg:w-5/6 py-5 lg:py-12 mx-auto h-full">
        <div className="grid lg:grid-cols-2 lg:gap-20 pt-10 space-y-5 md:space-y-10 lg:space-y-0">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/about/hero.webp"
                alt="why-choose-us"
                className="w-full h-[300px] md:h-[400px] rounded-br-[120px]"
              />
            </div>
            <div
              className="w-10 h-10 border-2 border-themeVector rounded-full absolute -top-14 left-[70%] 
            -translate-x-3/4 hidden lg:block"
            ></div>
            <div
              className="w-44 h-44 border-2 border-themeVector rounded-full absolute -top-10 -right-5 
            hidden lg:block"
            ></div>
            <div>
              <img
                src="/images/vector-dot.webp"
                alt="vector-dot"
                className="w-28 h-60 absolute -bottom-14 right-0 hidden lg:block"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <h2 className="text-lg text-theme">A Little Introduction</h2>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              Get to Know About Spin Fast
            </h4>
            <p>
              Lorem ipsum is simply free text dolor sit amet, consectetur notted
              adipisicing elit sed do eiusmod tempor.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <TbClockCheck
                  className="text-theme h-10 w-10 bg-white shadow-textShadow rounded-full 
                p-[6px]"
                />
                <p className="font-semibold">Save Time & Money</p>
              </div>
              <div className="flex items-center gap-4">
                <BsCashCoin
                  className="text-theme h-10 w-10 bg-white shadow-textShadow rounded-full 
                p-[6px]"
                />
                <p className="font-semibold">Pay Online in Seconds</p>
              </div>
              <div className="flex items-center gap-4">
                <FaHandHoldingHeart
                  className="text-theme h-10 w-10 bg-white shadow-textShadow rounded-full 
                p-[6px]"
                />
                <p className="font-semibold">Satisfaction Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-5/6 xl:w-4/6 mx-auto grid grid-cols-2 lg:grid-cols-4 py-10 lg:pt-20 lg:pb-10">
        <div className="border-l border-t border-b border-r lg:border-t-0 lg:border-l-0 lg:border-b-0 p-3 md:p-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            877+
          </h2>
          <p className="md:text-lg text-themeGray max-w-28 md:max-w-full mx-auto">
            Happy Customers
          </p>
        </div>
        <div className="border-l border-t border-b border-r lg:border-t-0 lg:border-l-0 lg:border-b-0 p-3 md:p-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            780+
          </h2>
          <p className="md:text-lg text-themeGray max-w-24 md:max-w-full mx-auto">
            Clothes Washed
          </p>
        </div>
        <div className="border-l border-t border-b border-r lg:border-t-0 lg:border-l-0 lg:border-b-0 p-3 md:p-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            300+
          </h2>
          <p className="md:text-lg text-themeGray max-w-24 md:max-w-full mx-auto">
            Dry Cleaned
          </p>
        </div>
        <div className="border-l border-t border-b border-r lg:border-t-0 lg:border-l-0 lg:border-b-0 p-3 md:p-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            977+
          </h2>
          <p className="md:text-lg text-themeGray max-w-24 md:max-w-full mx-auto">
            Steam & Ironed
          </p>
        </div>
      </div>

      <div className="bg-servicesBg">
        <div className="w-5/6 xl:w-4/6 mx-auto py-10 lg:py-20">
          <div className="text-center">
            <h2 className="text-lg text-theme">Testimonials</h2>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              Hear what our clients say
            </h4>
          </div>

          <Swiper
            className="mySwiper"
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            style={{ paddingTop: "30px", paddingBottom: "60px" }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <AboutCards title="Sophie Moore" image="1" />
            </SwiperSlide>
            <SwiperSlide>
              <AboutCards title="Adam Smith" image="2" />
            </SwiperSlide>
            <SwiperSlide>
              <AboutCards title="Sophie Moore" image="1" />
            </SwiperSlide>
            <SwiperSlide>
              <AboutCards title="Adam Smith" image="2" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <Footer />
    </section>
  );
}
