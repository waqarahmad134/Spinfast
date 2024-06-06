import React from "react";
import { IoNotifications } from "react-icons/io5";

export default function NotificationBox() {
  return (
    <div className="bg-white p-5 space-y-4 md:space-y-0 md:flex gap-5 items-center shadow-textShadow ">
      <div
        className="text-theme flex justify-center items-center w-10 h-10 shadow-textShadow 
        rounded-full bg-[#ECFFFE]"
      >
        <IoNotifications size={22} />
      </div>

      <div className="w-full flex justify-between">
        <div className="space-y-2">
          <h2 className="font-semibold">Notification 1</h2>
          <p className="text-xs">
            Unlock exclusive offers tailored just for you. Don't miss out on
            opportunities to enjoy additional perks and discounts
          </p>
        </div>

        <div className="text-xs">08.30 PM</div>
      </div>
    </div>
  );
}
