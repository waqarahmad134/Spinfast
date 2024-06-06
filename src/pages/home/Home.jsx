import React from "react";
import Header from "../../components/Header";
import WorksCard from "../../components/WorksCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbClockCheck } from "react-icons/tb";
import Footer from "../../components/Footer";
import { BsCashCoin } from "react-icons/bs";
import ServicesCards from "../../components/ServicesCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../swiper.css";
import { FaHandHoldingHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <Header />

      <div className="w-11/12 xl:w-5/6 pt-10 lg:pt-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          <div className="flex flex-col gap-y-7 pb-5">
            <h2 className="text-themeDarkBlue text-3xl md:text-4xl lg:text-5xl font-semibold">
              Revolutionize Your <span className="text-theme">Laundry</span>{" "}
              Experience with Us!
            </h2>
            <p className="lg:text-xl font-normal ">
              We offer a seamless laundry solution designed for your
              convenience. Whether you prefer doorstep delivery or in-person
              drop-offs, our upcoming service has you covered.
            </p>

            <div>
              <Link to="/schedule-service" className="bg-theme text-white px-8 py-3 border border-theme rounded-l-full rounded-tr-full hover:bg-transparent hover:text-theme duration-200">
                Book Service Now
              </Link>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="mt-5">
              <img
                src="/images/hero-image-1.webp"
                alt="hero-one"
                className="w-60 mx-auto"
              />
            </div>
            <div>
              <img
                src="/images/hero-image-2.webp"
                alt="hero-three"
                className="w-60 mx-auto absolute top-36 left-28 lg:left-60"
              />
            </div>
            <div className="mt-5">
              <img
                src="/images/hero-image-3.webp"
                alt="hero-three"
                className="w-72"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-5/6 lg:w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-4 py-10 lg:pt-20 lg:pb-10">
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
        <div className="w-5/6 lg:w-4/5 mx-auto py-10 lg:py-20">
          <div className="text-center">
            <h2 className="text-lg text-theme">What We Offer</h2>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              Our Services
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
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <ServicesCards
                title="Laundry"
                image="services-1"
                description="Pellentesque luctus auctor odio, purus convallis eleifend. Donec volutpat arcu et nulla condimentum."
                button="More Info"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCards
                title="Ironing"
                image="services-2"
                description="Pellentesque luctus auctor odio, purus convallis eleifend. Donec volutpat arcu et nulla condimentum."
                button="More Info"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCards
                title="Dry Cleaning"
                image="services-3"
                description="Pellentesque luctus auctor odio, purus convallis eleifend. Donec volutpat arcu et nulla condimentum."
                button="More Info"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCards
                title="Laundry"
                image="services-1"
                description="Pellentesque luctus auctor odio, purus convallis eleifend. Donec volutpat arcu et nulla condimentum."
                button="More Info"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCards
                title="Ironing"
                image="services-2"
                description="Pellentesque luctus auctor odio, purus convallis eleifend. Donec volutpat arcu et nulla condimentum."
                button="More Info"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCards
                title="Dry Cleaning"
                image="services-3"
                description="Pellentesque luctus auctor odio, purus convallis eleifend. Donec volutpat arcu et nulla condimentum."
                button="More Info"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="bg-[#E0FBFA] py-10 lg:py-16" id="clip">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            How Spinfast works
          </h2>
        </div>

        <div className="w-5/6 lg:w-4/5 mx-auto pt-10 lg:pt-16 space-y-8 lg:space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10">
            <WorksCard title="Pick Up YourClothes" image="1" number="1" />
            <WorksCard title="Laundry" image="2" number="2" />
            <WorksCard title="Deliver" image="3" number="3" />
          </div>

          <div className="w-full flex justify-center">
            <button className="bg-theme text-white px-6 py-3.5 border border-theme rounded-l-full rounded-tr-full hover:bg-transparent hover:text-theme duration-200 flex items-center gap-3">
              Book our Services Now
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-11/12 xl:w-5/6 py-16 xl:py-20 mx-auto h-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/why-choose-us.webp"
                alt="why-choose-us"
                className="lg:w-[600px] lg:h-[500px] w-full h-auto mx-auto lg:object-contain"
              />
            </div>
            <div
              className="w-10 h-10 border-2 border-themeVector rounded-full absolute top-1 left-3/4 
            -translate-x-3/4 hidden lg:block"
            ></div>
            <div
              className="w-44 h-44 border-2 border-themeVector rounded-full absolute top-7 -right-8 
            hidden lg:block"
            ></div>
            <div>
              <img
                src="/images/vector-dot.webp"
                alt="vector-dot"
                className="w-28 h-60 absolute -bottom-0 right-0 hidden lg:block"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <h2 className="text-lg text-theme">Why Choose Us</h2>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              Our Laundry Services Benefits
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

        <div className="grid md:grid-cols-2 pt-14 lg:pt-28">
          <div className="bg-chooseUs bg-no-repeat rounded-tl-lg md:rounded-bl-lg bg-center bg-cover w-full h-full flex justify-center items-center">
            <div className="relative z-40 p-8 md:p-10 space-y-2 text-white">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                No Need to Bring Your Own Detergent
              </h2>
              <p className="text-sm md:text-base leading-loose">
                No need to remember your own detergent, as we utilize innovative
                wash technology to ensure complete cleanliness. All our machines
                have high quality, hypoallergenic detergents and fabric softener
                dispensed in each load, which has been included into the
                pricing. Each machine also has sanitizer dispensed at the end of
                each wash, making it clean and sanitized for the next user.
                Commercial sized dryers are also available.
              </p>
            </div>
          </div>

          <div>
            <img
              src="/images/choose-us-card-2.webp"
              alt="card-two"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
