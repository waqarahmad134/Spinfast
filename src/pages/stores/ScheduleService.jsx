import React, { useState } from "react";
import Header from "../../components/Header";
import Select from "react-select";
import { GiWashingMachine } from "react-icons/gi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdDryCleaning, MdIron } from "react-icons/md";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function ScheduleService() {
  const [timeline] = useState("1");
  const [tab, setTab] = useState("");

  const handleAccordion = (newTab) => {
    setTab(tab === newTab ? "" : newTab);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "100%",
      backgroundColor: "white",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0)",
      border: "none",
      padding: "0.3rem 1rem",
      borderRadius: "9999px",
      "&:focus": { outline: "none" },
      "&::placeholder": {
        fontSize: "14px",
        color: "#C1C3D4",
      },
    }),
  };

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
        <div className="text-sm md:text-base max-w-24 text-theme font-semibold">
          Schedule Service
        </div>

        <div className="pt-10 space-y-5 md:space-y-10">
          <div className="space-y-2">
            <label htmlFor="store" className="md:text-xl font-semibold">
              Select Store
            </label>
            <Select
              id="store"
              styles={customStyles}
              placeholder="Select stores |"
            />
          </div>

          <div className="space-y-2">
            <h2 className="md:text-xl font-semibold">Select Service</h2>

            <div className="shadow-textShadow py-2 md:py-4 px-4 md:px-8">
              <div>
                <div
                  className="py-4 border-b flex justify-between items-center cursor-pointer"
                  onClick={() => handleAccordion("Wash & Fold")}
                >
                  <div
                    className={`flex items-center gap-2 ${
                      tab === "Wash & Fold" ? "text-theme" : "text-black"
                    } font-semibold`}
                  >
                    <GiWashingMachine size={24} />
                    <span>Wash & Fold</span>
                  </div>
                  <div>
                    {tab === "Wash & Fold" ? <FaAngleUp /> : <FaAngleDown />}
                  </div>
                </div>

                {tab === "Wash & Fold" ? (
                  <div className="py-4 space-y-4">
                    <div className="grid grid-cols-3">
                      <div className="text-sm md:text-base">Pants</div>
                      <div className="mx-auto text-sm md:text-base">₹800</div>

                      <div className="flex justify-end">
                        <div className="bg-white w-24 h-9 shadow-textShadow rounded-full flex justify-center items-center gap-3">
                          <span className="text-sm md:text-base">01</span>
                          <div className="flex flex-col">
                            <button>
                              <FaAngleUp size={14} />
                            </button>
                            <button>
                              <FaAngleDown size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="text-sm md:text-base">Skirt</div>
                      <div className="mx-auto text-sm md:text-base">₹449</div>

                      <div className="flex justify-end">
                        <div className="bg-white w-24 h-9 shadow-textShadow rounded-full flex justify-center items-center gap-3">
                          <span className="text-sm md:text-base">01</span>
                          <div className="flex flex-col">
                            <button>
                              <FaAngleUp size={14} />
                            </button>
                            <button>
                              <FaAngleDown size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="text-sm md:text-base">Shorts</div>
                      <div className="mx-auto text-sm md:text-base">₹349</div>

                      <div className="flex justify-end">
                        <div className="bg-white w-24 h-9 shadow-textShadow rounded-full flex justify-center items-center gap-3">
                          <span className="text-sm md:text-base">01</span>
                          <div className="flex flex-col">
                            <button>
                              <FaAngleUp size={14} />
                            </button>
                            <button>
                              <FaAngleDown size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="text-sm md:text-base">Casual Dress</div>
                      <div className="mx-auto text-sm md:text-base">₹449</div>

                      <div className="flex justify-end">
                        <div className="bg-white w-24 h-9 shadow-textShadow rounded-full flex justify-center items-center gap-3">
                          <span className="text-sm md:text-base">01</span>
                          <div className="flex flex-col">
                            <button>
                              <FaAngleUp size={14} />
                            </button>
                            <button>
                              <FaAngleDown size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div>
                <div
                  className="py-4 border-b flex justify-between items-center cursor-pointer"
                  onClick={() => handleAccordion("Ironing")}
                >
                  <div
                    className={`flex items-center gap-2 ${
                      tab === "Ironing" ? "text-theme" : "text-black"
                    } font-semibold`}
                  >
                    <MdIron size={24} />
                    <span>Ironing</span>
                  </div>
                  <div>
                    {tab === "Ironing" ? <FaAngleUp /> : <FaAngleDown />}
                  </div>
                </div>

                {tab === "Ironing" ? (
                  <div className="py-4 space-y-4">
                    <div className="grid grid-cols-3">
                      <div className="text-sm md:text-base">Pants</div>
                      <div className="mx-auto text-sm md:text-base">₹800</div>

                      <div className="flex justify-end">
                        <div className="bg-white w-24 h-9 shadow-textShadow rounded-full flex justify-center items-center gap-3">
                          <span className="text-sm md:text-base">01</span>
                          <div className="flex flex-col">
                            <button>
                              <FaAngleUp size={14} />
                            </button>
                            <button>
                              <FaAngleDown size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="text-sm md:text-base">Skirt</div>
                      <div className="mx-auto text-sm md:text-base">₹449</div>

                      <div className="flex justify-end">
                        <div className="bg-white w-24 h-9 shadow-textShadow rounded-full flex justify-center items-center gap-3">
                          <span className="text-sm md:text-base">01</span>
                          <div className="flex flex-col">
                            <button>
                              <FaAngleUp size={14} />
                            </button>
                            <button>
                              <FaAngleDown size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="text-sm md:text-base">Shorts</div>
                      <div className="mx-auto text-sm md:text-base">₹349</div>

                      <div className="flex justify-end">
                        <div className="bg-white w-24 h-9 shadow-textShadow rounded-full flex justify-center items-center gap-3">
                          <span className="text-sm md:text-base">01</span>
                          <div className="flex flex-col">
                            <button>
                              <FaAngleUp size={14} />
                            </button>
                            <button>
                              <FaAngleDown size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="text-sm md:text-base">Casual Dress</div>
                      <div className="mx-auto text-sm md:text-base">₹449</div>

                      <div className="flex justify-end">
                        <div className="bg-white w-24 h-9 shadow-textShadow rounded-full flex justify-center items-center gap-3">
                          <span className="text-sm md:text-base">01</span>
                          <div className="flex flex-col">
                            <button>
                              <FaAngleUp size={14} />
                            </button>
                            <button>
                              <FaAngleDown size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div>
                <div
                  className="py-4 border-b flex justify-between items-center cursor-pointer"
                  onClick={() => handleAccordion("Dry Clean")}
                >
                  <div
                    className={`flex items-center gap-2 ${
                      tab === "Dry Clean" ? "text-theme" : "text-black"
                    } font-semibold`}
                  >
                    <MdDryCleaning size={24} />
                    <span>Dry Clean</span>
                  </div>
                  <div>
                    {tab === "Dry Clean" ? <FaAngleUp /> : <FaAngleDown />}
                  </div>
                </div>

                {tab === "Dry Clean" ? (
                  <div className="py-4 space-y-4">
                    <div className="grid grid-cols-3">
                      <div className="text-sm md:text-base">Pants</div>
                      <div className="mx-auto text-sm md:text-base">₹800</div>

                      <div className="flex justify-end">
                        <div className="bg-white w-24 h-9 shadow-textShadow rounded-full flex justify-center items-center gap-3">
                          <span className="text-sm md:text-base">01</span>
                          <div className="flex flex-col">
                            <button>
                              <FaAngleUp size={14} />
                            </button>
                            <button>
                              <FaAngleDown size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="text-sm md:text-base">Skirt</div>
                      <div className="mx-auto text-sm md:text-base">₹449</div>

                      <div className="flex justify-end">
                        <div className="bg-white w-24 h-9 shadow-textShadow rounded-full flex justify-center items-center gap-3">
                          <span className="text-sm md:text-base">01</span>
                          <div className="flex flex-col">
                            <button>
                              <FaAngleUp size={14} />
                            </button>
                            <button>
                              <FaAngleDown size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="text-sm md:text-base">Shorts</div>
                      <div className="mx-auto text-sm md:text-base">₹349</div>

                      <div className="flex justify-end">
                        <div className="bg-white w-24 h-9 shadow-textShadow rounded-full flex justify-center items-center gap-3">
                          <span className="text-sm md:text-base">01</span>
                          <div className="flex flex-col">
                            <button>
                              <FaAngleUp size={14} />
                            </button>
                            <button>
                              <FaAngleDown size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="text-sm md:text-base">Casual Dress</div>
                      <div className="mx-auto text-sm md:text-base">₹449</div>

                      <div className="flex justify-end">
                        <div className="bg-white w-24 h-9 shadow-textShadow rounded-full flex justify-center items-center gap-3">
                          <span className="text-sm md:text-base">01</span>
                          <div className="flex flex-col">
                            <button>
                              <FaAngleUp size={14} />
                            </button>
                            <button>
                              <FaAngleDown size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            <div className="space-y-2">
              <label htmlFor="pickupDate" className="md:text-xl font-semibold">
                Pickup Date
              </label>
              <input
                type="date"
                name="pickupDate"
                id="pickupDate"
                placeholder="Pickup Date"
                className="w-full bg-white shadow-textShadow outline-none py-2.5 px-6 rounded-full placeholder:text-sm placeholder:text-[#C1C3D4]"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="deliveryDate"
                className="md:text-xl font-semibold"
              >
                Delivery Date
              </label>
              <input
                type="date"
                name="deliveryDate"
                id="deliveryDate"
                placeholder="Delivery Date"
                className="w-full bg-white shadow-textShadow outline-none py-2.5 px-6 rounded-full placeholder:text-sm placeholder:text-[#C1C3D4]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="pickupTime" className="md:text-xl font-semibold">
                Pickup Time
              </label>
              <input
                type="time"
                name="pickupDate"
                id="pickupDate"
                placeholder="Pickup Date"
                className="w-full bg-white shadow-textShadow outline-none py-2.5 px-6 rounded-full placeholder:text-sm placeholder:text-[#C1C3D4]"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="deliveryTime"
                className="md:text-xl font-semibold"
              >
                Delivery Time
              </label>
              <input
                type="time"
                name="deliveryTime"
                id="deliveryTime"
                placeholder="Delivery Time"
                className="w-full bg-white shadow-textShadow outline-none py-2.5 px-6 rounded-full placeholder:text-sm placeholder:text-[#C1C3D4]"
              />
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

            <div className="py-4 space-y-5">
              <div className="flex justify-between items-center">
                <div className="font-semibold">Subtotal</div>
                <div className="font-semibold">250,000.00</div>
              </div>

              <div className="flex justify-between items-center">
                <div className="font-semibold">Total</div>
                <div className="font-semibold text-theme">250,000.00</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <button
                  className="bg-transparent text-theme px-6 py-2.5 border border-theme 
                rounded-tl-full rounded-r-full hover:text-white hover:bg-theme
                 duration-200 flex items-center justify-center gap-3"
                >
                  Add to Cart
                </button>

                <Link
                  to="/billing-details"
                  className="bg-theme text-white px-6 py-2.5 border border-theme 
                rounded-l-full rounded-tr-full hover:bg-transparent hover:text-theme duration-200 flex items-center justify-center gap-3"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
