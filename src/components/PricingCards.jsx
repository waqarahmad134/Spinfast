import React from "react";

export default function PricingCards(props) {
  const { Icon } = props;
  return (
    <div className="bg-white shadow-textShadow p-5 rounded-xl hover:bg-[#E0FBFA] duration-200 card">
      <div className="flex gap-2 items-center">
        <img
          src={`/images/pricing/${props.image}.webp`}
          alt={`${props.image}`}
          className="w-14 h-12"
        />
        <div className="mt-4">
          <h2 className="text-xl text-theme font-semibold uppercase">
            {props.title}
          </h2>
          <p className="text-xs text-[#263238] font-medium">
            {props.description}
          </p>
        </div>
      </div>

      <div className="text-xl text-[#A9A9AA] py-2">What's included</div>

      <div className="flex flex-col justify-between h-96">
        <div className="py-4 space-y-5 border-b border-black border-dashed">
          {props?.list?.map((item, index) => (
            <div key={item.id} className="flex items-center gap-2">
              <Icon className="text-sm w-5 h-5 bg-black rounded-full p-1 text-white" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <div className="pt-10 space-y-5">
          <div>
            <span className="text-2xl md:text-3xl font-bold">{props.price} dollars</span>
            <span className="text-xl">/per month</span>
          </div>

          <div>
            <button className="w-full bg-[#E0FBFA] text-xl text-center font-semibold px-5 py-2.5 rounded-full">
              Choose
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
