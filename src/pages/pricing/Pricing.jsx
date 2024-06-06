import React from "react";
import Header from "../../components/Header";
import PricingCards from "../../components/PricingCards";
import Footer from "../../components/Footer";
import { FaCheck } from "react-icons/fa";

export default function Pricing() {
  return (
    <section>
      <Header />

      <div className="w-11/12 lg:w-4/5 mx-auto">
        <div className="pt-10 space-y-4">
          <h2 className="text-2xl lg:text-3xl text-center font-semibold">
            Pricing
          </h2>
          <p className="text-lg font-medium text-[#2D3748] text-center max-w-5xl mx-auto">
            Discover the key to unlocking your laundry business potential
            through our comprehensive licensing program. From regulatory
            compliance to maximizing your business reach, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 py-14">
          <div className="xl:mt-10">
            <PricingCards
              title="Single size"
              description="Perfect for people who live alone"
              image="single-size"
              list={[
                { text: "2 loads per week" },
                { text: "up to 10 lbs per load" },
              ]}
              price="10"
              Icon={FaCheck}
            />
          </div>
          <div className="xl:mb-14">
            <PricingCards
              title="Couples size"
              description="Perfect for couples size 3-6"
              image="couple-size"
              list={[
                { text: "4 loads per week" },
                { text: "up to 12 lbs per load" },
                { text: "Special garments" },
                { text: "Pickup & drop off" },
              ]}
              price="20"
              Icon={FaCheck}
            />
          </div>
          <div className="xl:mt-10">
            <PricingCards
              title="Family size"
              description="Perfect for families size 4-6"
              image="family-size"
              list={[
                { text: "4 loads per week" },
                { text: "up to 12 lbs per load" },
                { text: "Special garments" },
                { text: "Pickup & drop off" },
                { text: "Free detergent samples" },
              ]}
              price="30"
              Icon={FaCheck}
            />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
