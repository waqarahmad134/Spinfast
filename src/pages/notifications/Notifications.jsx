import React from "react";
import Header from "../../components/Header";
import { FiSearch } from "react-icons/fi";
import NotificationBox from "../../components/NotificationBox";
import Footer from "../../components/Footer";

export default function Notifications() {
  return (
    <section>
      <Header />

      <div className="w-11/12 lg:w-5/6  mx-auto">
        <div className="relative py-10">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for notifications |"
            className="w-full bg-white shadow-textShadow outline-none py-2.5 px-6 rounded-full placeholder:text-sm"
          />
          <FiSearch className="text-xl text-[#C1C3D4] absolute top-[52px] right-5" />
        </div>

        <div className="space-y-5 pb-10 lg:pb-20">
          <NotificationBox />
          <NotificationBox />
          <NotificationBox />
          <NotificationBox />
        </div>
      </div>

      <Footer />
    </section>
  );
}
