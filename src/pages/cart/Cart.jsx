import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MdDryCleaning } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function Cart() {
  return (
    <section>
      <Header />

      <div className="w-11/12 lg:w-5/6 mx-auto py-10 space-y-5">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold">My Cart</h2>
          <p className="text-sm text-[#2D3748]">
            Please fill in the fields below and click place order to complete
            your purchase!
          </p>
        </div>

        <div className="shadow-textShadow pb-5">
          <table className="w-full">
            <tr className="bg-theme">
              <th className="w-1/4 p-2 sm:p-4 text-white text-xs sm:text-base">
                Product Details
              </th>
              <th className="w-1/4 p-2 sm:p-4 text-white text-xs sm:text-base">
                Price
              </th>
              <th className="w-1/4 p-2 sm:p-4 text-white text-xs sm:text-base">
                Quantity
              </th>
              <th className="w-1/4 p-2 sm:p-4 text-white text-xs sm:text-base">
                Action
              </th>
            </tr>
            <tr>
              <td>
                <div className="flex justify-center items-center gap-2 p-1.5 sm:p-3 text-theme ">
                  <MdDryCleaning size={20} />
                  <span className="text-xs sm:text-base font-semibold">
                    Dry Clean
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-1/4 p-1.5 sm:p-3  text-center text-xs sm:text-base">
                Pants
              </td>
              <td className="w-1/4 p-1.5 sm:p-3 text-center text-xs sm:text-base">
                ₹800
              </td>
              <td className="p-1.5 sm:p-3 flex justify-center">
                <div className="bg-white w-16 h-7 sm:w-24 sm:h-9 shadow-textShadow rounded-full flex justify-center items-center gap-3">
                  <span className="text-xs sm:text-base">01</span>
                  <div className="flex flex-col text-xs sm:text-base">
                    <button>
                      <FaAngleUp />
                    </button>
                    <button>
                      <FaAngleDown />
                    </button>
                  </div>
                </div>
              </td>
              <td className="w-1/4 p-1.5 sm:p-3 text-center text-xs sm:text-base">
                <button>
                  <FaRegTrashCan />
                </button>
              </td>
            </tr>
            <tr>
              <td className="w-1/4 p-1.5 sm:p-3  text-center text-xs sm:text-base">
                Skirt
              </td>
              <td className="w-1/4 p-1.5 sm:p-3 text-center text-xs sm:text-base">
                ₹449
              </td>
              <td className="p-1.5 sm:p-3 flex justify-center">
                <div className="bg-white w-16 h-7 sm:w-24 sm:h-9 shadow-textShadow rounded-full flex justify-center items-center gap-3">
                  <span className="text-xs sm:text-base">01</span>
                  <div className="flex flex-col text-xs sm:text-base">
                    <button>
                      <FaAngleUp />
                    </button>
                    <button>
                      <FaAngleDown />
                    </button>
                  </div>
                </div>
              </td>
              <td className="w-1/4 p-1.5 sm:p-3 text-center text-xs sm:text-base">
                <button>
                  <FaRegTrashCan />
                </button>
              </td>
            </tr>
            <tr>
              <td className="w-1/4 p-1.5 sm:p-3  text-center text-xs sm:text-base">
                Shorts
              </td>
              <td className="w-1/4 p-1.5 sm:p-3 text-center text-xs sm:text-base">
                ₹349
              </td>
              <td className="p-1.5 sm:p-3 flex justify-center">
                <div className="bg-white w-16 h-7 sm:w-24 sm:h-9 shadow-textShadow rounded-full flex justify-center items-center gap-3">
                  <span className="text-xs sm:text-base">01</span>
                  <div className="flex flex-col text-xs sm:text-base">
                    <button>
                      <FaAngleUp />
                    </button>
                    <button>
                      <FaAngleDown />
                    </button>
                  </div>
                </div>
              </td>
              <td className="w-1/4 p-1.5 sm:p-3 text-center text-xs sm:text-base">
                <button>
                  <FaRegTrashCan />
                </button>
              </td>
            </tr>
            <tr>
              <td className="w-1/4 p-1.5 sm:p-3  text-center text-xs sm:text-base">
                Casual Dress
              </td>
              <td className="w-1/4 p-1.5 sm:p-3 text-center text-xs sm:text-base">
                ₹449
              </td>
              <td className="p-1.5 sm:p-3 flex justify-center">
                <div className="bg-white w-16 h-7 sm:w-24 sm:h-9 shadow-textShadow rounded-full flex justify-center items-center gap-3">
                  <span className="text-xs sm:text-base">01</span>
                  <div className="flex flex-col text-xs sm:text-base">
                    <button>
                      <FaAngleUp />
                    </button>
                    <button>
                      <FaAngleDown />
                    </button>
                  </div>
                </div>
              </td>
              <td className="w-1/4 p-1.5 sm:p-3 text-center text-xs sm:text-base">
                <button>
                  <FaRegTrashCan />
                </button>
              </td>
            </tr>
          </table>
        </div>

        {/* <table className="shadow-textShadow">
          <tr className="bg-theme py-3 px-4 md:px-10 flex justify-between items-center gap-2">
            <th className="text-xs md:text-base text-white font-bold uppercase">
              Product Details
            </th>
            <th className="text-xs md:text-base text-white font-bold uppercase">
              Price
            </th>
            <th className="text-xs md:text-base text-white font-bold uppercase">
              Quantity
            </th>
            <th className="text-xs md:text-base text-white font-bold uppercase">
              Action
            </th>
          </tr>
          <tr className="">
            <td className=" text-theme font-semibold">
              <MdDryCleaning size={24} />
              <span>Dry Clean</span>
            </td>
            <td className="text-sm md:text-base">Pants</td>
            <td className="text-sm md:text-base">₹800</td>
            <td className="text-sm md:text-base">
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
            </td>
            <td className="text-sm md:text-base">
              <button className="text-theme ">
                <FaRegTrashCan />
              </button>
            </td>
          </tr>
        </table> */}
      </div>
      {/* 
      <div className="space-y-5 pt-14 pb-20 w-11/12 mx-auto">
        <img
          src="/images/cart/empty-cart.webp"
          alt="empty-cart"
          className="w-96 h-full mx-auto"
        />

        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Your cart is empty and sad :(
          </h2>
          <p className="md:text-lg text-[#807D7E]">
            Add something to make it happy!
          </p>
        </div>

        <div className="w-full flex justify-center">
          <button className="bg-theme text-white px-6 py-3.5 border border-theme rounded-l-full rounded-tr-full hover:bg-transparent hover:text-theme duration-200 flex items-center gap-3">
            Book our Services Now
            <span>
              <FaArrowRightLong />
            </span>
          </button>
        </div>
      </div> */}

      <Footer />
    </section>
  );
}
