import React from "react";
import Header from "../../components/Header";
import { FaPlus } from "react-icons/fa";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <section>
      <Header />

      <div className="w-11/12 lg:w-5/6 mx-auto pt-10 pb-20 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold">My Profile</h2>
          <p className="text-sm text-[#2D3748]">
            Welcome John Smith! Its great to see you
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="md:text-2xl font-semibold">Contact Details</h2>

          <div className="bg-white shadow-textShadow rounded-xl p-4 md:p-6">
            <div className="py-4 border-b flex justify-between items-center">
              <div className="space-y-1">
                <h2 className="text-sm md:text-base font-semibold text-[#807D7E]">
                  Your Name
                </h2>
                <p className="text-[#3C4242] text-xs md:text-sm font-semibold">
                  Person Name
                </p>
              </div>
              <div>
                <button className="text-xs md:text-sm text-[#3C4242]">
                  Change
                </button>
              </div>
            </div>
            <div className="py-4 border-b flex justify-between items-center">
              <div className="space-y-1">
                <h2 className="text-sm md:text-base font-semibold text-[#807D7E]">
                  Email Address
                </h2>
                <p className="text-[#3C4242] text-xs md:text-sm font-semibold">
                  Person Name@gmail.com
                </p>
              </div>
              <div>
                <button className="text-xs md:text-sm text-[#3C4242]">
                  Change
                </button>
              </div>
            </div>
            <div className="py-4 border-b flex justify-between items-center">
              <div className="space-y-1">
                <h2 className="text-sm md:text-base font-semibold text-[#807D7E]">
                  Phone Number
                </h2>
                <p className="text-[#3C4242] text-xs md:text-sm font-semibold">
                  (414) 666 - 66666
                </p>
              </div>
              <div>
                <button className="text-xs md:text-sm text-[#3C4242]">
                  Change
                </button>
              </div>
            </div>
            <div className="py-4 border-b flex justify-between items-center">
              <div className="space-y-1">
                <h2 className="text-sm md:text-base font-semibold text-[#807D7E]">
                  Password
                </h2>
                <p className="text-[#3C4242] text-xs md:text-sm font-semibold">
                  ******
                </p>
              </div>
              <div>
                <button className="text-xs md:text-sm text-[#3C4242]">
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="md:text-2xl font-semibold">Address</h2>
            <Link
              to="/add-address"
              className="flex items-center gap-2 md:text-lg text-theme font-bold"
            >
              <FaPlus />
              <span>Add New</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="p-6 bg-white shadow-textShadow rounded-xl">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-[#3C4242] font-semibold">
                    Jhanvi shah
                  </div>
                  <div className="text-[#807D7E] font-medium">
                    (414) 666 - 66666
                  </div>
                  <div className="text-[#807D7E] font-medium">
                    794 Loem ipsm San Francisco, 94102
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    className="px-4 py-1.5 text-[#807D7E] text-sm md:text-base border 
                  border-[#807D7E] rounded-lg"
                  >
                    Home
                  </button>
                  <button
                    className="px-4 py-1.5 text-[#807D7E] text-sm md:text-base border 
                  border-[#807D7E] rounded-lg"
                  >
                    Default billing address
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-theme font-bold text-sm md:text-base">
                    Remove
                  </button>
                  <div className="text-[#D9D9D9]">|</div>
                  <button className="text-theme font-bold text-sm md:text-base">
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white shadow-textShadow rounded-xl">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-[#3C4242] font-semibold">
                    Jhanvi shah
                  </div>
                  <div className="text-[#807D7E] font-medium">
                    (414) 666 - 66666
                  </div>
                  <div className="text-[#807D7E] font-medium">
                    794 Loem ipsm San Francisco, 94102
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-1.5 text-[#807D7E] text-sm md:text-base border border-[#807D7E] rounded-lg">
                    Home
                  </button>
                  <button className="px-4 py-1.5 text-[#807D7E] text-sm md:text-base border border-[#807D7E] rounded-lg">
                    Default billing address
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-theme text-sm md:text-base font-bold">
                    Remove
                  </button>
                  <div className="text-[#D9D9D9]">|</div>
                  <button className="text-theme text-sm md:text-base font-bold">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
