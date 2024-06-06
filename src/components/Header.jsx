import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import { FaAngleDown, FaShoppingCart } from "react-icons/fa";
import { TbLineScan } from "react-icons/tb";
import { TiThMenu } from "react-icons/ti";
import ListHead from "./ListHead";
import ListItem from "./ListItem";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="bg-white border-b lg:border-none">
      <nav className="w-11/12 xl:w-5/6 mx-auto py-2">
        <div className="flex justify-between items-center lg:grid grid-cols-12 gap-x-5">
          <Link to="/">
            <img
              src="/images/logo.webp"
              alt="logo"
              className="w-16 h-16 md:w-20 md:h-20 col-span-1 object-contain"
            />
          </Link>

          <div
            className={`col-span-11 lg:flex justify-between items-center z-[-1] md:z-50 absolute lg:static
             bg-white w-full transition-all ease-in left-0  lg:opacity-100 opacity-0 ${
               open ? "top-24 opacity-100 bg-white z-[999] shadow-textShadow" : "top-[-400px]"
             }`}
          >
            <ul className="lg:flex items-center gap-6 pt-2 lg:pt-0">
              <ListHead title="Home" to="/" />

              <div className="relative">
                <ListHead
                  title="Stores"
                  icon={<FaAngleDown />}
                  onClick={() => {
                    setDropDown(!dropDown);
                  }}
                  active={location === "/stores" ? true : false}
                />
                {dropDown ? (
                  <ul
                    className={`bg-white shadow-textShadow rounded-lg pt-3 pb-8 ${
                      open
                        ? "relative top-0 left-0 mx-6"
                        : "absolute top-9 left-0 w-72"
                    }   
                  `}
                  >
                    <ListItem
                      title="All Stores"
                      to="/stores"
                      active={location === "/stores" ? true : false}
                    />
                    <ListItem title="Los Angeles" />
                    <ListItem title="New york" />
                    <ListItem title="Boston" />
                    <ListItem title="Dallas" />
                  </ul>
                ) : (
                  <></>
                )}
              </div>

              <ListHead title="My Orders" to="/my-orders" />
              <ListHead title="About" to="/about" />
              <ListHead title="Contact" to="/contact-us" />
              <ListHead title="Pricing" to="/pricing" />
            </ul>

            <div className="flex items-center gap-2 md:gap-3 px-5 py-3 pb-5 md:px-10 lg:px-0 lg:pb-0 lg:py-0">
              {location === "/stores" || location === "/cart" ? (
                <>
                  <Link
                    to="/cart"
                    className="px-5 py-2 text-theme text-sm md:text-base font-medium border
                  border-theme rounded-full hover:bg-theme hover:text-white duration-200 flex 
                    gap-2 items-center"
                  >
                    <FaShoppingCart />
                    <span>Cart(0)</span>
                  </Link>
                  <Link to="/profile">
                    <img
                      src="/images/profile.webp"
                      alt="profile"
                      className="w-12 h-12 rounded-full"
                    />
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/sign-in"
                    className="px-5 py-2 text-theme text-sm md:text-base xl:text-lg font-medium border
                 border-theme rounded-full hover:bg-theme hover:text-white duration-200"
                  >
                    Login
                  </Link>
                  <Link
                    to="/sign-up"
                    className="px-5 py-2 text-white bg-theme text-sm md:text-base xl:text-lg font-medium 
                border border-theme rounded-full hover:bg-transparent hover:text-theme duration-200"
                  >
                    Sign up
                  </Link>
                </>
              )}

              <Link
                to="/notifications"
                className="text-theme flex justify-center items-center w-10 h-10 shadow-textShadow 
                rounded-full hover:bg-theme hover:text-white duration-200"
              >
                <IoNotifications size={22} />
              </Link>
              <Link
                className="text-theme flex justify-center items-center w-10 h-10 shadow-textShadow 
                rounded-full hover:bg-theme hover:text-white duration-200"
              >
                <TbLineScan size={22} />
              </Link>
            </div>
          </div>

          <div>
            <button
              className="text-theme text-2xl md:text-3xl lg:hidden block"
              onClick={() => setOpen(!open)}
            >
              <TiThMenu />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
