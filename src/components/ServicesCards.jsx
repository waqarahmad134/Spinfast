import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ServicesCards(props) {
  return (
    <div>
      <img
        src={`/images/${props.image}.webp`}
        alt={`${props.image}`}
        className="relative z-10"
      />

      <div className="bg-white flex flex-col gap-4 items-center px-2.5 py-4 shadow-textShadow mx-2.5 -mt-16 relative z-20">
        <h2 className="text-lg font-semibold">{props.title}</h2>
        <p className="text-center text-xs">{props.description}</p>
        <p className="text-center text-xs">{props.time}</p>

        <div>
          <Link
            to={props.to}
            className="bg-theme text-white px-6 py-2 border border-theme rounded-l-full 
          rounded-tr-full hover:bg-transparent hover:text-theme duration-200 flex items-center gap-3"
          >
            {props.button}
            <span>
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
