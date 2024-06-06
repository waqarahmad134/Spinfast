import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Login() {
  const [visible, setVisible] = useState(false);
  return (
    <section className="md:grid grid-cols-7">
      <div className="col-span-3 hidden md:block">
        <img
          src="/images/login.webp"
          alt="login"
          className="w-full h-full lg:h-[585px] 2xl:h-screen"
        />
      </div>

      <div className="w-11/12 lg:w-4/5 mx-auto py-8 lg:py-10 col-span-4 flex flex-col justify-center gap-5 2xl:gap-10">
        <div>
          <img src="/images/logo.webp" alt="logo" className="w-20 h-20" />
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">Sign in</h2>
          <p className="text-sm">
            Sign in to your account for a seamless laundry experience. Your
            clean clothes are just a click away!
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

          <div className="flex flex-col gap-1 relative">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              type={visible ? "text" : "password"}
              name="password"
              id="password"
              className="border border-[#D1D1D1] outline-none px-3 py-2.5 rounded-md"
            />
            <button
              onClick={() => setVisible(!visible)}
              type="button"
              className="text-gray-400 absolute right-4 top-[35px]"
            >
              {visible ? (
                <AiOutlineEye size={24} />
              ) : (
                <AiOutlineEyeInvisible size={24} />
              )}
            </button>
          </div>

          <Link
            to="/reset-password"
            className="w-full flex justify-end text-sm text-theme font-semibold"
          >
            Forgot password?
          </Link>
        </div>

        <div className="lg:grid grid-cols-2 gap-5 space-y-5 lg:space-y-0">
          <button
            className="w-full flex justify-center bg-theme text-white border border-theme 
            rounded-full py-3 font-semibold hover:bg-transparent hover:text-theme duration-200"
          >
            Sign in
          </button>

          <button
            className="w-full flex justify-center items-center gap-3 bg-transparent text-theme border border-theme 
            rounded-full py-3 font-semibold hover:bg-theme hover:text-white duration-200"
          >
            <img
              src="/images/google-icon.webp"
              alt="google-icon"
              className="w-5 h-5"
            />
            <span>Sign up with google</span>
          </button>
        </div>

        <div className="text-sm font-semibold flex justify-center items-center gap-x-1">
          Dont have an account?{" "}
          <Link to="/sign-up" className="text-theme">
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
}
