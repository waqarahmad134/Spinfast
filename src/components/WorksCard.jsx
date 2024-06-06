import React from "react";

export default function WorksCard(props) {
  return (
    <div className="space-y-3 relative">
      <div className="bg-white py-12 rounded-[80px]">
        <img
          src={`/images/works-image-${props.image}.webp`}
          alt={`works-img-${props.image}`}
          className="w-60 h-44 mx-auto"
        />
      </div>
      <div className="text-xl font-semibold text-center">{props.title}</div>
      <div
        className="w-10 h-10 rounded-full bg-black text-white text-2xl font-semibold flex 
      justify-center items-center absolute -top-6 right-8"
      >
        {props.number}
      </div>
    </div>
  );
}
