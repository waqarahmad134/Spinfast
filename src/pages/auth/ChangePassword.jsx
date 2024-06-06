import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

export default function ChangePassword() {
  const [modal, setModal] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  const toggleVisibility = (field) => {
    setPasswordVisibility({
      ...passwordVisibility,
      [field]: !passwordVisibility[field],
    });
  };
  return (
    <section className="md:grid grid-cols-7">
      <div className="col-span-3 hidden md:block">
        <img
          src="/images/change-password.webp"
          alt="login"
          className="w-full h-full lg:h-[585px] 2xl:h-screen"
        />
      </div>

      <div className="w-11/12 lg:w-4/5 mx-auto py-8 lg:py-10 col-span-4 flex flex-col justify-center gap-5 2xl:gap-10">
        <div>
          <img src="/images/logo.webp" alt="logo" className="w-20 h-20" />
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">Create a new password</h2>
          <p className="text-sm">
            Your new password must be different from previous used passwords.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="newPassword" className="text-sm">
              New Password
            </label>
            <input
              type={passwordVisibility.newPassword ? "text" : "password"}
              name="newPassword"
              id="newPassword"
              className="w-full border border-[#D1D1D1] outline-none px-3 py-2.5 rounded-md"
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

          <div className="flex flex-col gap-1 relative">
            <label htmlFor="confirmPassword" className="text-sm">
              Confirm Password
            </label>
            <input
              type={passwordVisibility.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              className="border border-[#D1D1D1] outline-none px-3 py-2.5 rounded-md"
            />
            <button
              onClick={() => toggleVisibility("confirmPassword")}
              type="button"
              className="text-gray-400 absolute right-4 top-[34px]"
            >
              {passwordVisibility.confirmPassword ? (
                <AiOutlineEye size={24} />
              ) : (
                <AiOutlineEyeInvisible size={24} />
              )}
            </button>
          </div>
        </div>

        <div>
          <button
            className="w-full flex justify-center bg-theme text-white border border-theme 
            rounded-full py-3 font-semibold hover:bg-transparent hover:text-theme duration-200"
            onClick={() => {
              setModal(true);
            }}
          >
            Save
          </button>
        </div>
      </div>

      <Modal
        isOpen={modal}
        onClose={() => {
          setModal(false);
        }}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="flex flex-col items-center gap-5 p-10">
              <div className="bg-theme bg-opacity-40 p-5 rounded-xl">
                <FaCheck size={24} color="#00D8CF"/>
              </div>

              <div className="text-center space-y-5">
                <h2 className="text-2xl font-bold">Password changed successfully!</h2>
                <p className="text-sm font-medium">
                  We recommend that you write down so you don't forget, okay?
                </p>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
}
