import React from "react";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  return (
    <section className="md:grid grid-cols-7">
      <div className="col-span-3 hidden md:block">
        <img
          src="/images/reset-password.webp"
          alt="login"
          className="w-full h-[585px] 2xl:h-screen"
        />
      </div>

      <div className="w-11/12 lg:w-4/5 mx-auto py-8 lg:py-10 col-span-4 flex flex-col justify-center gap-5 2xl:gap-10">
        <div>
          <img src="/images/logo.webp" alt="logo" className="w-20 h-20" />
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">Reset Your Password</h2>
          <p className="text-sm">
            Enter your email and we'll send you a link to reset your password.
          </p>
        </div>

        <div className="space-y-4">
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
        </div>

        <div>
          <Link
            className="w-full flex justify-center bg-theme text-white border border-theme 
            rounded-full py-3 font-semibold hover:bg-transparent hover:text-theme duration-200"
            to="/verify-otp"
          >
            Send
          </Link>
        </div>

        <div className="text-sm font-semibold flex justify-center items-center gap-x-1">
          Back to
          <Link to="/sign-in" className="text-theme">
            Sign in
          </Link>
        </div>
      </div>
    </section>
  );
}
