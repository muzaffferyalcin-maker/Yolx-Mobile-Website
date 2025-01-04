"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 lg:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto">
        {/* Logo */}
        <a href="#about-me" className="h-auto w-auto flex items-center">
          <Image
            src="/NavLogo1.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden sm:block text-gray-300">
            YolX Mobile GPS
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center justify-between w-[550px] h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer">
            Ürünler & Servisler
          </a>
          <a href="#skills" className="cursor-pointer">
            Araç & Nesne Takibi
          </a>
          <a href="#projects" className="cursor-pointer">
            Hakkımızda
          </a>
          <a href="#contact" className="cursor-pointer">
            İletişim
          </a>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden flex items-center justify-center text-gray-200 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0300145e] border border-[#7042f861] rounded-md shadow-lg py-4">
          <div className="flex flex-col items-center gap-4 text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              Ürünler & Servisler
            </a>
            <a href="#skills" className="cursor-pointer">
              Araç & Nesne Takibi
            </a>
            <a href="#projects" className="cursor-pointer">
              Hakkımızda
            </a>
            <a href="#contact" className="cursor-pointer">
              İletişim
            </a>
            <div className="flex items-center gap-4">
              {Socials.map((social) => (
                <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
