import React, { useState } from "react";
import Header from "../../components/Header";
import { FiSearch } from "react-icons/fi";
import { GiWashingMachine } from "react-icons/gi";
import { MdDryCleaning } from "react-icons/md";

export default function MyOrders() {
  const [tab, setTab] = useState("Scheduled");
  return (
    <section>
      <Header />

      <div className="w-11/12 lg:w-5/6 mx-auto pt-10 pb-10 lg:pb-20">
        <div>
          <h2 className="text-2xl font-semibold text-center">My Orders</h2>
          <div className="relative py-10 space-y-1">
            <label htmlFor="trackingNumber" className="text-xl font-semibold">
              Tracking ID
            </label>
            <input
              type="text"
              name="trackingNumber"
              id="trackingNumber"
              placeholder="Enter your order number for tracking"
              className="w-full bg-white shadow-textShadow outline-none py-2.5 px-6 rounded-full placeholder:text-sm placeholder:text-[#C1C3D4]"
            />
            <FiSearch className="text-xl text-[#C1C3D4] absolute top-20 right-5" />
          </div>
        </div>

        <div className="grid grid-cols-2">
          <button
            onClick={() => {
              setTab("Scheduled");
            }}
            className={`px-6 py-3  ${
              tab === "Scheduled"
                ? "bg-[#E0FBFA] text-theme border-b-theme"
                : "border-[#F6F6F6] text-[#D1D5DB] bg-transparent"
            }  text-center rounded-tr-lg rounded-tl-lg 
            border-b-4 `}
          >
            Scheduled
          </button>
          <button
            onClick={() => {
              setTab("Cancelled");
            }}
            className={`px-6 py-3  ${
              tab === "Cancelled"
                ? "bg-[#E0FBFA] text-theme border-b-theme"
                : "border-[#F6F6F6] text-[#D1D5DB] bg-transparent"
            }  text-center rounded-tr-lg rounded-tl-lg 
              border-b-4 `}
          >
            Cancelled
          </button>
        </div>

        <div className="shadow-textShadow mt-5">
          <div className="p-5 bg-[#F6F6F6] space-y-2">
            <h2 className="md:text-xl font-semibold">Order no: #123456789</h2>

            <div className="md:flex justify-between items-center space-y-3 md:space-y-0 ">
              <div className="space-y-1">
                <div className="text-sm">
                  <span className="text-[#807D7E] font-semibold">
                    Pickup Date :
                  </span>{" "}
                  <span className="text-[#BEBCBD]"> 2 June 2023 2:40 PM</span>
                </div>
                <div className="text-sm">
                  <span className="text-[#807D7E] font-semibold">
                    Estimated Delivery Date :
                  </span>{" "}
                  <span className="text-[#BEBCBD]"> 8 June 2023</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-sm">
                  <span className="text-[#807D7E] font-semibold">
                    Order Status :
                  </span>{" "}
                  <span className="text-[#BEBCBD]">Inprogress</span>
                </div>
                <div className="text-sm">
                  <span className="text-[#807D7E] font-semibold">
                    Payment Method :
                  </span>{" "}
                  <span className="text-[#BEBCBD]">Cash on delivery </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 space-y-5">
            <div className="space-y-3">
              <h2 className="flex items-center gap-2 text-theme font-semibold">
                <GiWashingMachine size={24} />
                <span>Wash Fold</span>
              </h2>

              <div className="text-[#807D7E]">
                <span>T-shirt</span> <span className="text-xs">X 1</span>
              </div>
              <div className="text-[#807D7E]">
                <span>Jacket/Blazer</span> <span className="text-xs">X 1</span>
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="flex items-center gap-2 text-theme font-semibold">
                <MdDryCleaning size={24} />
                <span>Dry Clean</span>
              </h2>

              <div className="text-[#807D7E]">
                <span>T-shirt</span> <span className="text-xs">X 1</span>
              </div>
              <div className="text-[#807D7E]">
                <span>Jacket/Blazer</span> <span className="text-xs">X 1</span>
              </div>
            </div>
          </div>

          <div className="p-5 flex justify-between items-center">
            <div className="text-[#807D7E] font-semibold">Total : $23.00</div>
            <div>
              <button
                className="bg-theme text-white px-6 py-2.5 border border-theme 
                rounded-l-full rounded-tr-full hover:bg-transparent hover:text-theme duration-200 flex items-center justify-center gap-3"
              >
                View Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
