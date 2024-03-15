import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Element/Button";

export const NavbarClient = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full px-4 lg:px-24 py-5 z-50 fixed bg-[#F9F9F9]">
      <div className="flex justify-between items-center mx-auto md:container">
        <img
          src="https://i.ibb.co/zNDdmtV/logo-lokerin.png"
          alt="Logo LokerIn"
          className="h-10"
        />
        <div className="hidden lg:flex gap-8">
          <Link to="/" className="font-normal text-lg hover:font-semibold">
            Home
          </Link>
          <Link to="#" className="font-normal text-lg hover:font-semibold">
            Job Vacancy
          </Link>
          <Link to="#" className="font-normal text-lg hover:font-semibold">
            Dashboard
          </Link>
        </div>
        <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {isMenuOpen && (
          <div className="md:hidden fixed top-0 right-0 w-3/5 h-full bg-white z-40">
            <div className="flex flex-col gap-4 items-start justify-start h-full px-6 pt-5">
              <div className="flex justify-between w-full py-2">
                <p className="font-bold">LOKERIN</p>
                <button
                  className="lg:hidden focus:outline-none"
                  onClick={closeMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <Link to="/" className="font-normal text-lg hover:font-semibold">
                Home
              </Link>
              <Link to="#" className="font-normal text-lg hover:font-semibold">
                Job Vacancy
              </Link>
              <Link to="#" className="font-normal text-lg hover:font-semibold">
                Dashboard
              </Link>
              <Button classname="bg-[#635BFF">Sign In</Button>
            </div>
          </div>
        )}
        <div className="hidden lg:flex gap-4 items-center">
          <Button classname="bg-[#635BFF]">Sign In</Button>
        </div>
      </div>
    </div>
  );
};
