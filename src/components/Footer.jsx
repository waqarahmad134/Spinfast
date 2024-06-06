import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegEnvelope,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { PiMapPinBold } from "react-icons/pi";
import { FaSquareInstagram } from "react-icons/fa6";
import { TbPhone } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white shadow-textShadow">
      <div className="w-11/12 xl:w-5/6 mx-auto border-b py-10 lg:py-20">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 xl:gap-0">
          <div className="flex flex-col gap-5">
            <Link to="/">
              <img src="/images/logo.webp" alt="logo" className="w-16 h-16 md:w-20 md:h-20" />
            </Link>

            <div className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            </div>

            <div className="flex items-center gap-5">
              <Link>
                <FaFacebookF className="text-theme" />
              </Link>
              <Link>
                <FaTwitter className="text-theme" />
              </Link>
              <Link>
                <FaSquareInstagram className="text-theme" />
              </Link>
              <Link>
                <FaLinkedinIn className="text-theme" />
              </Link>
              <Link>
                <FaYoutube className="text-theme" />
              </Link>
            </div>
          </div>

          <div className="lg:mx-auto space-y-5">
            <h2 className="md:text-lg lg:text-xl font-semibold">Explore</h2>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-[#6F6C90]">Our Services</li>
              <li className="text-sm text-[#6F6C90]">Pricing</li>
              <li className="text-sm text-[#6F6C90]">Reviews</li>
            </ul>
          </div>

          <div className="lg:mx-auto space-y-5">
            <h2 className="md:text-lg lg:text-xl font-semibold">Company</h2>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-[#6F6C90]">About</li>
              <li className="text-sm text-[#6F6C90]">Contact us</li>
            </ul>
          </div>

          <div className="lg:mx-auto space-y-5">
            <h2 className="md:text-lg lg:text-xl font-semibold">Support</h2>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-[#6F6C90]">Getting started</li>
              <li className="text-sm text-[#6F6C90]">Help center</li>
              <li className="text-sm text-[#6F6C90]">Server status</li>
              <li className="text-sm text-[#6F6C90]">Report a bug</li>
              <li className="text-sm text-[#6F6C90]">Chat support</li>
            </ul>
          </div>

          <div className="lg:mx-auto space-y-5">
            <h2 className="md:text-lg lg:text-xl font-semibold">Contacts us</h2>
            <ul className="flex flex-col gap-3">
              <li className="text-[#6F6C90] flex items-center gap-3">
                <FaRegEnvelope size={14} />
                <span className="text-sm">contact@company.com</span>
              </li>
              <li className="text-[#6F6C90] flex items-center gap-3">
                <TbPhone size={15} />
                <span className="text-sm">(414) 666 - 66666</span>
              </li>
              <li className="text-[#6F6C90] flex items-center gap-3">
                <PiMapPinBold size={15} />
                <span className="text-sm">794 Francisco, 94102</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-11/12 xl:w-5/6 mx-auto text-center md:flex justify-between items-center py-5">
        <div className="text-[#6F6C90] text-sm md:text-base">
          Copyright © 2022{" "}
        </div>
        <div>
          All Rights Reserved |{" "}
          <Link className="text-blue-500 underline text-sm md:text-base">
            Terms and Conditions
          </Link>{" "}
          |{" "}
          <Link className="text-blue-500 underline text-sm md:text-base">
            Privacy Policy
          </Link>{" "}
        </div>
      </div>
    </footer>
  );
}
