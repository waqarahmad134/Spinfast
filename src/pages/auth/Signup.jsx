import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Signup() {
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    newPassword: false,
  });

  const toggleVisibility = (field) => {
    setPasswordVisibility({
      ...passwordVisibility,
      [field]: !passwordVisibility[field],
    });
  };
  return (
    <section className="md:grid grid-cols-8">
      <div className="col-span-3 hidden md:block">
        <img src="/images/signup.webp" alt="login" className="w-full h-full" />
      </div>

      <div className="w-11/12 lg:w-4/5 mx-auto py-8 lg:py-10 col-span-5 flex flex-col justify-center gap-5 2xl:gap-10">
        <div>
          <img src="/images/logo.webp" alt="logo" className="w-20 h-20" />
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">Create account</h2>
          <p className="text-sm">
            Sign up now to unlock exclusive benefits, personalized profiles, and
            seamless service scheduling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="firstName" className="text-sm">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="w-full border border-[#D1D1D1] outline-none px-3 py-2.5 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="lastName" className="text-sm">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="w-full border border-[#D1D1D1] outline-none px-3 py-2.5 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm">
              Email or phone number
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border border-[#D1D1D1] outline-none px-3 py-2.5 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="dateOfBirth" className="text-sm">
              Date of birth (MM/DD/YY)
            </label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              className="w-full border border-[#D1D1D1] outline-none px-3 py-[9px] rounded-md"
            />
          </div>

          <div className="flex flex-col gap-1 relative">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              type={passwordVisibility.password ? "text" : "password"}
              name="password"
              id="password"
              className="border border-[#D1D1D1] outline-none px-3 py-2.5 rounded-md"
            />
            <button
              onClick={() => toggleVisibility("password")}
              type="button"
              className="text-gray-400 absolute right-4 top-[34px]"
            >
              {passwordVisibility.password ? (
                <AiOutlineEye size={24} />
              ) : (
                <AiOutlineEyeInvisible size={24} />
              )}
            </button>
          </div>

          <div className="flex flex-col gap-1 relative">
            <label htmlFor="newPassword" className="text-sm">
              New Password
            </label>
            <input
              type={passwordVisibility.newPassword ? "text" : "password"}
              name="newPassword"
              id="newPassword"
              className="border border-[#D1D1D1] outline-none px-3 py-2.5 rounded-md"
            />
            <button
              onClick={() => toggleVisibility("newPassword")}
              type="button"
              className="text-gray-400 absolute right-4 top-[34px]"
            >
              {passwordVisibility.newPassword ? (
                <AiOutlineEye size={24} />
              ) : (
                <AiOutlineEyeInvisible size={24} />
              )}
            </button>
          </div>
        </div>

        <div className="w-full flex justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              className="w-4 h-4"
            />
            <label htmlFor="rememberMe" className="text-sm">
              Remember Me
            </label>
          </div>

          {/* <button className="text-sm text-theme">Forgot password?</button> */}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="privacy"
            id="privacy"
            className="w-4 h-4"
          />
          <label htmlFor="privacy" className="text-sm">
            I agree to all the <span className="text-[#007AFF]">Terms</span> and{" "}
            <span className="text-[#007AFF]">Privacy policy</span>
          </label>
        </div>

        <div className="lg:grid grid-cols-2 gap-5 space-y-5 lg:space-y-0">
          <button
            className="w-full flex justify-center bg-theme text-white border border-theme 
          rounded-full py-3 font-semibold hover:bg-transparent hover:text-theme duration-200"
          >
            Create account
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
          Already have an account?
          <Link to="/sign-in" className="text-theme">
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
}
