import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { Link } from "react-router-dom";

export default function Otp() {
  const [otp, setOtp] = useState("");
  return (
    <section className="md:grid grid-cols-7">
      <div className="col-span-3 hidden md:block">
        <img
          src="/images/verify-otp.webp"
          alt="login"
          className="w-full h-full lg:h-[585px] 2xl:h-screen"
        />
      </div>

      <div className="w-11/12 lg:w-4/5 mx-auto py-8 lg:py-10 col-span-4 flex flex-col justify-center gap-5 2xl:gap-10">
        <div>
          <img src="/images/logo.webp" alt="logo" className="w-20 h-20" />
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">Enter the verfication code</h2>
          <p className="text-sm">
            We have just sent you a 4-digit code to example@gmail.com
          </p>
        </div>

        <div>
          <OTPInput
            numInputs={4}
            value={otp}
            onChange={setOtp}
            renderInput={(props) => <input {...props} />}
            renderSeparator={<span className="mx-2.5"></span>}
            inputStyle={{
              width: "44px",
              height: "44px",
              border: "1px solid #6C6C6C",
              borderRadius: "4px",
            }}
          />
        </div>

        <div>
          <Link
            className="w-full flex justify-center bg-theme text-white border border-theme 
          rounded-full py-3 font-semibold hover:bg-transparent hover:text-theme duration-200"
          >
            Verify
          </Link>
        </div>

        <div className="text-sm font-semibold flex justify-center items-center gap-x-1">
          Didn't receive?
          <Link to="/sign-in" className="text-theme">
            Resend Code
          </Link>
        </div>
      </div>
    </section>
  );
}
