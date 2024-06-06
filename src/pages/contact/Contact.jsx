import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <section>
      <Header />

      <div className="w-11/12 lg:w-5/6 mx-auto pb-5 lg:pb-10">
        <div className="grid lg:grid-cols-2 lg:gap-5">
          <div>
            <img src="/images/contact-us/hero.webp" alt="hero" className="w-full h-auto object-contain"/>
          </div>

          <div className="py-5 lg:py-14 space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Contact Us
            </h2>
            <p className="text-sm text-[#2D3748]">
              Whether you're looking to elevate your laundry business or explore
              the latest trends, we're here to guide you. Connect with us at
              SpinFast! Call us at (414) 666 - 66666 or fill out the form below
              to schedule a live consultation with our laundry experts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full border border-[#D1D1D1] outline-none px-3 py-2.5 rounded-md"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full border border-[#D1D1D1] outline-none px-3 py-2.5 rounded-md"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="w-full border border-[#D1D1D1] outline-none px-3 py-2.5 rounded-md"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="subject" className="text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="w-full border border-[#D1D1D1] outline-none px-3 py-2.5 rounded-md"
                />
              </div>

              <div className="md:col-span-2">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="4"
                  placeholder="Write a comment"
                  className="w-full border border-[#D1D1D1] outline-none px-3 py-2.5 rounded-md placeholder:text-sm placeholder:text-[#D1D1D1]"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
