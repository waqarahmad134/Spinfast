import React from "react";
import Header from "../../components/Header";
import { FiSearch } from "react-icons/fi";
import ServicesCards from "../../components/ServicesCards";
import Footer from "../../components/Footer";

export default function Stores() {
  return (
    <section>
      <Header />

      <div className="w-11/12 lg:w-5/6 mx-auto ">
        <div className="pt-10 space-y-4">
          <h2 className="text-2xl lg:text-3xl text-center font-semibold">
            Our Laundromat for all of your laundry and dry cleaning needs
          </h2>
          <p className="text-lg font-medium text-[#2D3748] text-center max-w-2xl mx-auto">
            We work with all types of organizations to be a one-stop-shop for
            all of your laundry and dry cleaning needs
          </p>

          <div className="lg:w-3/4 mx-auto relative">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for stores near you  |"
              className="w-full bg-white shadow-textShadow outline-none py-2.5 px-6 rounded-full placeholder:text-sm"
            />
            <FiSearch className="text-xl text-[#C1C3D4] absolute top-3 right-5" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 py-10">
          <ServicesCards
            title="Norlane"
            image="stores/store-1"
            description="Shop 8, 167-179 Shaws RoadWerribee VIC 3030"
            time="6:00am – midnight"
            button="View Details"
            to="/store-details"
          />
          <ServicesCards
            title="Werribee"
            image="stores/store-2"
            description="Shop 8, 167-179 Shaws RoadWerribee VIC 3030"
            time="6:00am – midnight"
            button="View Details"
            to="/store-details"
          />
          <ServicesCards
            title="Norlane"
            image="stores/store-3"
            description="Shop 8, 167-179 Shaws RoadWerribee VIC 3030"
            time="6:00am – midnight"
            button="View Details"
            to="/store-details"
          />
          <ServicesCards
            title="Norlane"
            image="stores/store-4"
            description="Shop 8, 167-179 Shaws RoadWerribee VIC 3030"
            time="6:00am – midnight"
            button="View Details"
            to="/store-details"
          />
          <ServicesCards
            title="Werribee"
            image="stores/store-5"
            description="Shop 8, 167-179 Shaws RoadWerribee VIC 3030"
            time="6:00am – midnight"
            button="View Details"
            to="/store-details"
          />
          <ServicesCards
            title="Norlane"
            image="stores/store-6"
            description="Shop 8, 167-179 Shaws RoadWerribee VIC 3030"
            time="6:00am – midnight"
            button="View Details"
            to="/store-details"
          />
          <ServicesCards
            title="Norlane"
            image="stores/store-7"
            description="Shop 8, 167-179 Shaws RoadWerribee VIC 3030"
            time="6:00am – midnight"
            button="View Details"
            to="/store-details"
          />
          <ServicesCards
            title="Werribee"
            image="stores/store-8"
            description="Shop 8, 167-179 Shaws RoadWerribee VIC 3030"
            time="6:00am – midnight"
            button="View Details"
            to="/store-details"
          />
          <ServicesCards
            title="Norlane"
            image="stores/store-9"
            description="Shop 8, 167-179 Shaws RoadWerribee VIC 3030"
            time="6:00am – midnight"
            button="View Details"
            to="/store-details"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
}
