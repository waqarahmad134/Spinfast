import React, { useState } from "react";
import Header from "../../components/Header";
import { FaClock, FaStar } from "react-icons/fa";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import Map from "../../components/Map";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function StoreDetails() {
  const [tab, setTab] = useState("Wash & Fold");
  return (
    <section>
      <Header />

      <div className="w-11/12 lg:w-5/6 py-5 lg:py-10 mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 pt-5">
          <div className="grid grid-cols-11 gap-3 col-span-2">
            <div className="flex flex-col justify-between gap-3 col-span-3">
              <img
                src="/images/store-details/hero-1.webp"
                alt="hero-one"
                className="w-full h-full"
              />
              <img
                src="/images/store-details/hero-2.webp"
                alt="hero-two"
                className="w-full h-full"
              />
              <img
                src="/images/store-details/hero-3.webp"
                alt="hero-three"
                className="w-full h-full"
              />
            </div>

            <div className="col-span-8">
              <img
                src="/images/store-details/hero-4.webp"
                alt="hero-four"
                className="w-full h-full rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-5 lg:gap-10">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">
                Lorem Ipsm Laundry Newcomb
              </h2>
              <div className="flex items-center gap-2">
                <FaStar color="#F5AD49" />
                <FaStar color="#F5AD49" />
                <FaStar color="#F5AD49" />
                <FaStar color="#F5AD49" />
                <FaStar color="#D1D5DB" />
                <div className="text-sm text-[]">(150 Reviews)</div>
              </div>
            </div>

            <div>
              <ul className="flex flex-col gap-5">
                <li className="flex gap-3">
                  <FaLocationDot size={20} />
                  <span className="text-sm">
                    Shop 8, 123/556 Shaws RoadWerribee VIC 3030
                  </span>
                </li>
                <li className="flex gap-3">
                  <FaPhoneVolume size={20} />
                  <span className="text-sm">(414) 666 - 66666</span>
                </li>
                <li className="flex gap-3">
                  <FaClock size={20} />
                  <span className="text-sm">6:00am – 11:00pm</span>
                </li>
              </ul>
            </div>

            <div>
              <Link
                to="/schedule-service"
                className="bg-theme text-white px-8 py-3.5 border border-theme rounded-l-full 
                rounded-tr-full hover:bg-transparent hover:text-theme duration-200"
              >
                Book our Services Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5 lg:pt-10 pb-10">
        <Map />
      </div>

      <div className=" shadow-textShadow">
        <div className="grid grid-cols-2 md:grid-cols-4 w-11/12 lg:w-5/6 mx-auto py-3">
          <button
            onClick={() => {
              setTab("Wash & Fold");
            }}
            className={`px-6 py-3  ${
              tab === "Wash & Fold"
                ? "text-theme text-sm md:text-base border border-theme rounded-full font-bold"
                : "text-[#D1D5DB] text-xs md:text-base font-medium"
            }  text-center `}
          >
            Wash & Fold
          </button>
          <button
            onClick={() => {
              setTab("Dry Cleaning");
            }}
            className={`px-6 py-3  ${
              tab === "Dry Cleaning"
                ? "text-theme text-sm md:text-base border border-theme rounded-full font-bold"
                : "text-[#D1D5DB] text-xs md:text-base font-medium"
            }  text-center `}
          >
            Dry Cleaning
          </button>
          <button
            onClick={() => {
              setTab("Ironing");
            }}
            className={`px-6 py-3   ${
              tab === "Ironing"
                ? "text-theme text-sm md:text-base border border-theme rounded-full font-bold"
                : "text-[#D1D5DB] text-xs md:text-base font-medium"
            }  text-center `}
          >
            Ironing
          </button>
          <button
            onClick={() => {
              setTab("Pet Bedding");
            }}
            className={`px-6 py-3  ${
              tab === "Pet Bedding"
                ? "text-theme text-sm md:text-base border border-theme rounded-full font-bold"
                : "text-[#D1D5DB] text-xs md:text-base font-medium"
            }  text-center `}
          >
            Pet Bedding
          </button>
        </div>
      </div>

      <div className="w-11/12 lg:w-5/6 mx-auto pt-10 pb-10 lg:pb-20">
        {tab === "Wash & Fold" ? (
          <div className="space-y-8 lg:space-y-10">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">Laundry</h2>
              <p className="text-sm font-medium">
                Elevate Your Laundry Experience with Our Comprehensive Laundry
                Services
              </p>
            </div>
            <div>
              <img src="/images/store-details/laundry.webp" alt="laundry" />
            </div>
            <div>
              <div className="space-y-5">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Why Choose Our Laundry Services?
                </h2>
                <p className="text-sm">
                  Welcome to spin fast, where we redefine the way you think
                  about laundry. Our laundry services go beyond the ordinary,
                  offering you convenience, reliability, and a commitment to the
                  care of your garments.
                </p>
                <ul className="pl-5 space-y-5">
                  <li className="text-sm list-disc">
                    <span className="font-bold">Professional Care:</span>
                    <span>
                      {" "}
                      Our experienced team understands the unique requirements
                      of different fabrics. From delicate silks to sturdy
                      denims, we provide professional care that ensures your
                      clothes look and feel their best after every wash.
                    </span>
                  </li>
                  <li className="text-sm list-disc">
                    <span className="font-bold">Advanced Technology:</span>
                    <span>
                      {" "}
                      We invest in state-of-the-art laundry equipment to deliver
                      superior results. Our cutting-edge technology ensures
                      efficient and thorough cleaning, maintaining the quality
                      of your garments wash after wash.
                    </span>
                  </li>
                  <li className="text-sm list-disc">
                    <span className="font-bold">Transparent Pricing:</span>
                    <span>
                      {" "}
                      At spin fast, we believe in transparency. Our service and
                      pricing information is clear and accessible, empowering
                      you to make informed decisions about the care of your
                      clothes.
                    </span>
                  </li>
                  <li className="text-sm list-disc">
                    <span className="font-bold">Convenient Options:</span>
                    <span>
                      {" "}
                      Enjoy flexibility with our laundry services. Whether you
                      prefer drop-off or pick-up and delivery, we cater to your
                      schedule. Choose the option that suits your lifestyle
                      best.
                    </span>
                  </li>
                  <li className="text-sm list-disc">
                    <span className="font-bold">Value-Added Services:</span>
                    <span>
                      {" "}
                      Looking for more than just standard laundry? Explore our
                      value-added services, including hand-washing, stain
                      removal, garment repair, and even dry cleaning for those
                      special items that require extra care.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold">Pricing</h2>
              <div className="shadow-textShadow space-y-5">
                <div
                  className="bg-[#E0FBFA] text-theme font-bold px-8 py-4 flex items-center 
              justify-between"
                >
                  <div>Kgs</div>
                  <div>Best Price</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>1kg</div>
                  <div>₹1099</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>2kgs</div>
                  <div>₹1099</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>3kgs</div>
                  <div>₹1399</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>7Kgs</div>
                  <div>₹499</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>19kgs</div>
                  <div>₹799</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between pb-5"
                >
                  <div>20kgs</div>
                  <div>₹599</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div>
                <img
                  src="/images/store-details/laundry-2.webp"
                  alt="laundary-two"
                  className="w-full h-full"
                />
              </div>
              <div className="space-y-8">
                <div className="text-[#2D3748] text-sm">
                  Discover the pinnacle of garment care with a professional
                  ironing service. Whether it's your everyday wear or special
                  garments like formal attire, these services offer immaculate
                  results, ensuring a crisp and polished appearance. The skilled
                  professionals adeptly handle even the most stubborn creases,
                  leaving your clothes looking pristine
                </div>
                <div className="text-[#2D3748] text-sm">
                  Ironing services are an integral part of the dry cleaning
                  industry, providing an exhaustible solution for garments that
                  require a smooth finish after the dry cleaning process[3].
                  This convenience saves time and effort for individuals who
                  want their clothes to look freshly pressed without the hassle
                  of doing it themselves.
                </div>
              </div>
            </div>
          </div>
        ) : tab === "Dry Cleaning" ? (
          <div className="space-y-8 lg:space-y-10">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                Dry Cleaning
              </h2>
              <p className="text-sm font-medium">
                Elevate Your Garments with Our Professional Dry Cleaning
                Services!
              </p>
            </div>
            <div>
              <img
                src="/images/store-details/dry-cleaning.webp"
                alt="Cleaning"
              />
            </div>
            <div>
              <div className="space-y-5">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Why Choose Our Dry Cleaning Service?
                </h2>
                <p className="text-sm">
                  Welcome to our Dry Cleaning Service page, where we redefine
                  fabric care with precision and expertise. At [Your Laundry
                  Business Name], we understand that certain garments require
                  specialized care, and our dry cleaning services are designed
                  to meet those exacting standards.
                </p>
                <ul className="pl-5 space-y-5">
                  <li className="text-sm list-disc">
                    <span className="font-bold">Gentle Fabric Care:</span>
                    <span>
                      {" "}
                      Our team of experienced professionals employs advanced dry
                      cleaning techniques that ensure the utmost care for your
                      delicate fabrics. From silk to wool, trust us to handle
                      your garments with the gentle touch they deserve.
                    </span>
                  </li>
                  <li className="text-sm list-disc">
                    <span className="font-bold">Stain Removal Mastery:</span>
                    <span>
                      {" "}
                      Our experts are skilled in the art of stain removal.
                      Whether it's a stubborn wine stain or a delicate silk
                      blouse, we have the expertise to tackle stains
                      effectively, restoring your garments to their pristine
                      condition.
                    </span>
                  </li>
                  <li className="text-sm list-disc">
                    <span className="font-bold">
                      State-of-the-Art Equipment:
                    </span>
                    <span>
                      {" "}
                      We invest in cutting-edge dry cleaning equipment to
                      provide efficient and effective service. Our commitment to
                      quality extends to the technology we use, ensuring your
                      clothes receive the best treatment available.
                    </span>
                  </li>
                  <li className="text-sm list-disc">
                    <span className="font-bold">Personalized Service:</span>
                    <span>
                      {" "}
                      We understand that every garment is unique. Our dry
                      cleaning services are tailored to the specific
                      requirements of each item, ensuring a personalized touch
                      that addresses individual fabric needs.
                    </span>
                  </li>
                  <li className="text-sm list-disc">
                    <span className="font-bold">Timely Turnaround:</span>
                    <span>
                      {" "}
                      Experience the convenience of prompt service. We strive to
                      deliver your dry-cleaned garments within the agreed-upon
                      timeframe, allowing you to enjoy your freshly cleaned
                      clothes at the earliest.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold">Pricing</h2>
              <div className="shadow-textShadow space-y-5">
                <div
                  className="bg-[#E0FBFA] text-theme font-bold px-8 py-4 flex items-center 
              justify-between"
                >
                  <div>Tops</div>
                  <div>Best Price</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>All Shirts</div>
                  <div>₹1099</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>Polo</div>
                  <div>₹1099</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>Blouse</div>
                  <div>₹1099</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>Sweater</div>
                  <div>₹1399</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>Jacket/Blazer</div>
                  <div>₹499</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between pb-4"
                >
                  <div>Vest</div>
                  <div>₹799</div>
                </div>
                <div
                  className="bg-[#E0FBFA] text-theme font-bold px-8 py-4 flex items-center 
              justify-between"
                >
                  <div>Bottoms</div>
                  <div>Best Price</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>Pants</div>
                  <div>₹1099</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>Skirt</div>
                  <div>₹1099</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>Shorts</div>
                  <div>₹1099</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between pb-5"
                >
                  <div>Casual Dress</div>
                  <div>₹1399</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div>
                <img
                  src="/images/store-details/dry-cleaning-2.webp"
                  alt="dry-cleaning-two"
                  className="w-full h-full"
                />
              </div>
              <div className="space-y-8">
                <div className="text-[#2D3748] text-sm">
                  Discover the pinnacle of garment care with a professional
                  ironing service. Whether it's your everyday wear or special
                  garments like formal attire, these services offer immaculate
                  results, ensuring a crisp and polished appearance. The skilled
                  professionals adeptly handle even the most stubborn creases,
                  leaving your clothes looking pristine
                </div>
                <div className="text-[#2D3748] text-sm">
                  Ironing services are an integral part of the dry cleaning
                  industry, providing an exhaustible solution for garments that
                  require a smooth finish after the dry cleaning process[3].
                  This convenience saves time and effort for individuals who
                  want their clothes to look freshly pressed without the hassle
                  of doing it themselves.
                </div>
              </div>
            </div>
          </div>
        ) : tab === "Ironing" ? (
          <div className="space-y-8 lg:space-y-10">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">Ironing</h2>
              <p className="text-sm font-medium">
                Professional Ironing Service: Unwrinkling Elegance and
                Convenience
              </p>
            </div>
            <div>
              <img src="/images/store-details/ironing.webp" alt="ironing" />
            </div>
            <div>
              <div className="space-y-5">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Why Choose Our Ironing Service?
                </h2>
                <p className="text-sm">
                  At Spin Fast, we understand that the art of ironing goes
                  beyond removing creases. It's about preserving the integrity
                  of your clothing, enhancing its lifespan, and presenting you
                  with a wardrobe that exudes sophistication. Here's what sets
                  our ironing service apart:
                </p>
                <ul className="pl-5 space-y-5">
                  <li className="text-sm list-disc">
                    <span className="font-bold">Precision and Care:</span>
                    <span>
                      {" "}
                      Our experienced ironing experts handle each garment with
                      precision, taking care to preserve delicate fabrics and
                      intricate details
                    </span>
                  </li>
                  <li className="text-sm list-disc">
                    <span className="font-bold">
                      State-of-the-Art Equipment:{" "}
                    </span>
                    <span>
                      {" "}
                      We invest in top-notch ironing equipment to guarantee
                      efficient and effective results, leaving your clothes
                      looking impeccably pressed.
                    </span>
                  </li>
                  <li className="text-sm list-disc">
                    <span className="font-bold">Personalized Touch:</span>
                    <span>
                      {" "}
                      We recognize that each garment is unique. Our team tailors
                      the ironing process to suit the specific needs of your
                      clothing, ensuring optimal results every time
                    </span>
                  </li>
                  <li className="text-sm list-disc">
                    <span className="font-bold">Timely Turnaround: </span>
                    <span>
                      {" "}
                      Enjoy the convenience of prompt service. We strive to
                      deliver your ironed garments within the agreed-upon
                      timeframe, so you can step out in style without delay.
                    </span>
                  </li>
                  <li className="text-sm list-disc">
                    <span className="font-bold">Quality Assurance:</span>
                    <span>
                      {" "}
                      Our commitment to quality extends beyond cleanliness. We
                      aim to provide a professional finish, leaving you
                      satisfied with the crisp perfection of your clothes.
                    </span>
                  </li>
                </ul>
                <div className="text-sm">
                  <span>
                    Whether it's your everyday attire or special garments for an
                    occasion, trust us to transform your wardrobe with our
                    exceptional ironing service. Experience the difference of
                    precision, care, and expertise atspin fast
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold">Pricing</h2>
              <div className="shadow-textShadow space-y-5">
                <div
                  className="bg-[#E0FBFA] text-theme font-bold px-8 py-4 flex items-center 
              justify-between"
                >
                  <div>Tops</div>
                  <div>Best Price</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>All Shirts</div>
                  <div>₹1099</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>Polo</div>
                  <div>₹1099</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>Blouse</div>
                  <div>₹1099</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>Sweater</div>
                  <div>₹1399</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>Jacket/Blazer</div>
                  <div>₹499</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between pb-5"
                >
                  <div>Vest</div>
                  <div>₹799</div>
                </div>
                <div
                  className="bg-[#E0FBFA] text-theme font-bold px-8 py-4 flex items-center 
              justify-between"
                >
                  <div>Bottoms</div>
                  <div>Best Price</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>Pants</div>
                  <div>₹1099</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>Skirt</div>
                  <div>₹1099</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between"
                >
                  <div>Shorts</div>
                  <div>₹1099</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
              justify-between pb-5"
                >
                  <div>Casual Dress</div>
                  <div>₹1399</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div>
                <img
                  src="/images/store-details/ironing-2.webp"
                  alt="ironing-two"
                  className="w-full h-full"
                />
              </div>
              <div className="space-y-8">
                <div className="text-[#2D3748] text-sm">
                  Discover the pinnacle of garment care with a professional
                  ironing service. Whether it's your everyday wear or special
                  garments like formal attire, these services offer immaculate
                  results, ensuring a crisp and polished appearance. The skilled
                  professionals adeptly handle even the most stubborn creases,
                  leaving your clothes looking pristine
                </div>
                <div className="text-[#2D3748] text-sm">
                  Ironing services are an integral part of the dry cleaning
                  industry, providing an exhaustible solution for garments that
                  require a smooth finish after the dry cleaning process[3].
                  This convenience saves time and effort for individuals who
                  want their clothes to look freshly pressed without the hassle
                  of doing it themselves.
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8 lg:space-y-10">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                Animal Bedding Machines
              </h2>
              <p className="text-sm font-medium">
                Welcome to Spinfast Laundromats, your dedicated destination for
                pet bedding care!
              </p>
            </div>
            <div>
              <img
                src="/images/store-details/pet-bedding.webp"
                alt="pet-bedding"
              />
            </div>
            <div>
              <div className="space-y-5">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Why Choose Our Pet Bedding Dedicated washer
                </h2>
                <p className="text-sm">
                  Do you wash your laundry in the same machine as your pets? We
                  have a solution for you!
                </p>
                <ul className="space-y-5">
                  <li className="text-sm">
                    We offer dedicated animal bedding machines Washer with
                    premium soap and fabric softener included in every wash. All
                    your pet bedding will be washed and dried in under and hour,
                    leaving your pets bedding like brand new.
                  </li>
                  <li className="text-sm">
                    You can finally stop mixing your laundry with your smelling
                    and hairy pets.
                  </li>
                  <li className="text-sm">
                    We guarantee you will leave Spinfast Laundromats with one
                    happy and satisfied Pet Located at the front of the
                    Laundromat.
                  </li>
                  <li className="text-sm">
                    Your choice of Cold/Warm or Hot Wash.
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold">Pricing</h2>
              <div className="shadow-textShadow space-y-5">
                <div
                  className="bg-[#E0FBFA] text-theme font-bold px-8 py-4 flex items-center 
          justify-between"
                >
                  <div>Service</div>
                  <div>Best Price</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
          justify-between"
                >
                  <div>Standard Wash</div>
                  <div>₹1099</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
          justify-between"
                >
                  <div>Premium Soap</div>
                  <div>₹1099</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
          justify-between"
                >
                  <div>Warm Wash Upgrade</div>
                  <div>₹1099</div>
                </div>
                <div
                  className="bg-transparent text-[#807D7E] text-sm px-8 flex items-center 
          justify-between pb-5"
                >
                  <div>Hot Wash Upgrade</div>
                  <div>₹1399</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div>
                <img
                  src="/images/store-details/pet-bedding-2.webp"
                  alt="pet-bedding-two"
                  className="w-full h-full"
                />
              </div>
              <div className="space-y-4">
                <div className="text-[#2D3748] text-sm">
                  Introducing our Animal Bedding Machines – specially designed
                  washers crafted to cater exclusively to your pet's bedding
                  needs. With premium soap and fabric softener included in every
                  wash, your pet's bedding will emerge fresh and clean in under
                  an hour, restoring it to a like-new condition.
                </div>
                <div className="text-[#2D3748] text-sm">
                  We guarantee that you'll leave Spinfast Laundromats with one
                  happy and satisfied pet. Your pets deserve the best, and our
                  dedicated animal bedding machines deliver just that.
                </div>
                <div className="text-[#2D3748] text-sm">
                  Make the switch today and treat your pets to a laundry
                  experience like never before. Enjoy the peace of mind knowing
                  that your pets' bedding is getting the specialized care it
                  deserves. Visit Spinfast Laundromats – where cleanliness meets
                  convenience for both you and your beloved pets!
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
}
