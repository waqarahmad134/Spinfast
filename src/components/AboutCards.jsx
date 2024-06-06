import React from "react";
import { FaStar } from "react-icons/fa";

export default function AboutCards(props) {
  return (
    <div className="bg-white p-8 rounded-xl space-y-5">
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua quis nostrud
        exercitation ullamco
      </p>

      <div className="flex items-center gap-3">
        <div>
          <img
            src={`/images/about/client-${props.image}.webp`}
            alt={`client-${props.image}`}
            className="w-12 h-12"
          />
        </div>
        <div>
          <h2 className="font-semibold">{props.title}</h2>
          <div className="flex items-center gap-2">
            <FaStar color="#F5AD49" />
            <FaStar color="#F5AD49" />
            <FaStar color="#F5AD49" />
            <FaStar color="#D1D5DB" />
            <FaStar color="#D1D5DB" />
          </div>
        </div>
      </div>
    </div>
  );
}
