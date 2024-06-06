import React from "react";
import Header from "../../components/Header";
import { FaAngleLeft } from "react-icons/fa";
import Footer from "../../components/Footer";

export default function AddAddress() {
  return (
    <section>
      <Header />

      <div className="w-11/12 lg:w-5/6 mx-auto pt-10 pb-10 lg:pb-20">
        <div className="flex gap-3 items-center">
          <button
            onClick={() => {
              window.history.back();
            }}
          >
            <FaAngleLeft size={24} />
          </button>
          <h2 className="text-lg md:text-2xl font-semibold">Add Address</h2>
        </div>

        <div className="md:grid grid-cols-2 gap-5 space-y-5 md:space-y-0 lg:gap-10 pt-10">
          <div className="flex flex-col gap-1">
            <label htmlFor="firstName" className="font-semibold">
              First Name*
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              className="w-full bg-white shadow-textShadow rounded-full outline-none px-5 py-2.5 placeholder:text-sm placeholder:text-[#C1C3D4]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="lastName" className="font-semibold">
              Last Name*
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              className="w-full bg-white shadow-textShadow rounded-full outline-none px-5 py-2.5 placeholder:text-sm placeholder:text-[#C1C3D4]"
            />
          </div>

          <div className="flex flex-col gap-1 col-span-2">
            <label htmlFor="phone" className="font-semibold">
              Phone*
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="apartment, suite, unit, etc. (optional)"
              className="w-full bg-white shadow-textShadow rounded-full outline-none px-5 py-2.5 placeholder:text-sm placeholder:text-[#C1C3D4]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="country" className="font-semibold">
              Country / Region*
            </label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Country / Region*"
              className="w-full bg-white shadow-textShadow rounded-full outline-none px-5 py-2.5 placeholder:text-sm placeholder:text-[#C1C3D4]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="city" className="font-semibold">
              City*
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              className="w-full bg-white shadow-textShadow rounded-full outline-none px-5 py-2.5 placeholder:text-sm placeholder:text-[#C1C3D4]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="state" className="font-semibold">
              State*
            </label>
            <input
              type="text"
              name="state"
              id="state"
              placeholder="State"
              className="w-full bg-white shadow-textShadow rounded-full outline-none px-5 py-2.5 placeholder:text-sm placeholder:text-[#C1C3D4]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="code" className="font-semibold">
              Postal Code*
            </label>
            <input
              type="number"
              name="code"
              id="code"
              placeholder="Code"
              className="w-full bg-white shadow-textShadow rounded-full outline-none px-5 py-2.5 placeholder:text-sm placeholder:text-[#C1C3D4]"
            />
          </div>

          <div className="flex flex-col gap-1 col-span-2">
            <label htmlFor="apartment" className="font-semibold">
              Apt, suite, unit
            </label>
            <input
              type="text"
              name="apartment"
              id="apartment"
              placeholder="apartment, suite, unit, etc. (optional)"
              className="w-full bg-white shadow-textShadow rounded-full outline-none px-5 py-2.5 placeholder:text-sm placeholder:text-[#C1C3D4]"
            />
          </div>

          <div className="space-y-2 col-span-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="shippingAddress"
                id="shippingAddress"
                className="w-4 h-4"
              />
              <label htmlFor="shippingAddress" className="text-sm">
                Set as default shipping address
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="billingAddress"
                id="billingAddress"
                className="w-4 h-4"
              />
              <label htmlFor="billingAddress" className="text-sm">
                Set as default billing address
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 col-span-2 gap-5">
            <button
              className="bg-transparent text-theme px-6 py-3.5 border border-theme 
                rounded-tl-full rounded-r-full hover:text-white hover:bg-theme
                 duration-200 flex items-center justify-center gap-3"
            >
              Cancel
            </button>

            <button
              className="bg-theme text-white px-6 py-3.5 border border-theme 
                rounded-l-full rounded-tr-full hover:bg-transparent hover:text-theme duration-200 flex items-center justify-center gap-3"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
