import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MdDryCleaning } from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";

export default function BillingDetails() {
  const [timeline] = useState("2");
  return (
    <section>
      <Header />

      <div className="w-11/12 lg:w-5/6 mx-auto py-10 lg:py-20 ">
        <div className="flex items-center text-lg">
          <div
            className={`
                  ${
                    timeline === "1" || timeline === "2" || timeline === "3"
                      ? "bg-theme text-white"
                      : "bg-black bg-opacity-10"
                  } min-w-[24px] min-h-[24px] cursor-pointer text-sm rounded-full flex justify-center items-center`}
          >
            1
          </div>
          <div
            className={`${
              timeline === "2" || timeline === "3"
                ? "border-y-theme"
                : "border-y-black border-opacity-10"
            } w-full h-0 border-y mx-2`}
          ></div>
          <div
            className={`
                  ${
                    timeline === "2" || timeline === "3"
                      ? "bg-theme text-white"
                      : "bg-black bg-opacity-10"
                  } min-w-[24px] min-h-[24px] cursor-pointer text-sm rounded-full flex justify-center items-center`}
          >
            2
          </div>
          <div
            className={`${
              timeline === "3"
                ? "border-y-theme"
                : "border-y-black border-opacity-10"
            } w-full h-0 border-y mx-2`}
          ></div>
          <div
            className={`${
              timeline === "3"
                ? "bg-theme text-white"
                : "bg-black bg-opacity-10"
            }
            min-w-[24px] min-h-[24px] cursor-pointer text-sm rounded-full flex justify-center items-center`}
          >
            3
          </div>
        </div>
        <table className="w-full">
          <>
            <tr>
              <td>
                <div className="max-w-[80px] md:max-w-[100px] text-sm md:text-base text-theme font-semibold">
                  Schedule Service
                </div>
              </td>
              <td>
                <div className="max-w-[90px] md:max-w-[105px] text-sm md:text-base text-theme font-semibold">
                  Billing Details
                </div>
              </td>
            </tr>
            <tr></tr>
          </>
        </table>

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
                Save this information for faster check-out next time
              </label>
            </div>
          </div>
        </div>

        <div className="shadow-textShadow bg-[#F6F6F6] p-5 md:p-8 mt-5">
          <div className="space-y-2 border-b-2 border-[#BEBCBD] p-2">
            <div className="flex justify-between items-center">
              <div className="md:text-xl font-semibold">Service</div>
              <div className="md:text-xl font-semibold">Subtotal</div>
            </div>

            <div className="space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-theme font-semibold">
                  <GiWashingMachine size={24} />
                  <span>Wash Fold</span>
                </div>

                <div className="text-[#807D7E] flex justify-between items-center">
                  <div>
                    <span>T-shirt</span>
                    <span className="text-xs">X 1</span>
                  </div>
                  <div>₹1099</div>
                </div>
                <div className="text-[#807D7E] flex justify-between items-center">
                  <div>
                    <span>Jacket/Blazer</span>
                    <span className="text-xs">X 1</span>
                  </div>
                  <div>₹1099</div>
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="flex items-center gap-2 text-theme font-semibold">
                  <MdDryCleaning size={24} />
                  <span>Dry Clean</span>
                </h2>

                <div className="text-[#807D7E] flex justify-between items-center">
                  <div>
                    <span>T-shirt</span>
                    <span className="text-xs">X 1</span>
                  </div>
                  <div>₹1099</div>
                </div>
                <div className="text-[#807D7E] flex justify-between items-center">
                  <div>
                    <span>Jacket/Blazer</span>
                    <span className="text-xs">X 1</span>
                  </div>
                  <div>₹1099</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 border-b-2 border-[#BEBCBD] p-2 py-6">
            <div className="flex flex-col gap-1">
              <div className="md:text-xl font-semibold">Discount Codes</div>
              <div className="text-sm md:text-base text-[#807D7E]">
                Enter your coupon code if you have one
              </div>
            </div>

            <div className="relative sm:w-96 w-full">
              <input
                type="text"
                name="coupon"
                id="coupon"
                className="w-full bg-white shadow-textShadow rounded-xl outline-none px-5 py-2.5 placeholder:text-sm placeholder:text-[#C1C3D4]"
              />

              <button
                className="text-xs h-full md:text-sm px-2 md:px-4 bg-theme text-white border
                 border-theme rounded-tr-xl rounded-br-xl absolute top-0 right-0 font-semibold"
              >
                Apply Coupon
              </button>
            </div>
          </div>

          <div className="py-4 space-y-5">
            <div className="flex justify-between items-center">
              <div className="font-semibold">Subtotal</div>
              <div className="font-semibold">250,000.00</div>
            </div>

            <div className="flex justify-between gap-1">
              <div className="text-sm text-[#807D7E]">Pickup Charges</div>
              <div className="text-sm text-[#807D7E]">250</div>
            </div>

            <div className="flex justify-between gap-1">
              <div className="text-sm text-[#807D7E]">Delivery Charges</div>
              <div className="text-sm text-[#807D7E]">250</div>
            </div>

            <div className="flex justify-between items-center">
              <div className="font-semibold">Total</div>
              <div className="font-semibold text-theme">250,000.00</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <Link
                to="/payment"
                className="bg-theme text-white px-6 py-2.5 border border-theme 
                rounded-l-full rounded-tr-full hover:bg-transparent hover:text-theme duration-200 flex items-center justify-center gap-3"
              >
                Proceed to Payment
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
