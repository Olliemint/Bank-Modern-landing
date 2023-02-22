import React, { useState } from 'react'
import { logo, close, menu } from "../assets"
import { navLinks } from '../constants'

const Navbar = () => {
    const [isOpen,SetisOpen] = useState(false)
  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            key={index}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={isOpen ? close : menu}
          alt=""
          className="w-[28px] h-[28px] cursor-pointer object-contain"
          onClick={() => SetisOpen((prev) => !prev)}
        />
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
                key={index}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar