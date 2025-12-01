"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-4 lg:px-0">
        {/* Logo */}
        <Link href="/" className="h-auto w-auto flex items-center gap-2">
          <Image
            src="/yolx-logo.png" // public klasöründeki logo dosyanın adı
            alt="YOLX Mobile"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="font-semibold text-slate-900 text-sm md:text-base">
            YOLX Mobile
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 bg-white/90 px-6 py-2 rounded-full border border-slate-200 shadow-sm">
          <Link
            href="/#cozumler"
            className="text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            Çözümler
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            Ürünler
          </Link>
          <Link
  href="http://k.yolxmobile.com/#/loginv2"
  className="text-sm font-medium text-slate-700 hover:text-blue-600"
>
  Filo Yazılımı
</Link>

          <Link
            href="/about"
            className="text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            Kurumsal
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            İletişim
          </Link>
          <Link
            href="/contact"
            className="ml-2 text-sm font-semibold px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700"
          >
            Teklif Al
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex items-center justify-center text-slate-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menüyü Aç/Kapat"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden w-full bg-white/95 border-t border-slate-200 shadow-lg"
          ref={menuRef}
        >
          <div className="flex flex-col items-center gap-4 py-4">
            <Link
              href="/#cozumler"
              className="text-sm font-medium text-slate-800"
              onClick={() => setMenuOpen(false)}
            >
              Çözümler
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-slate-800"
              onClick={() => setMenuOpen(false)}
            >
              Ürünler
            </Link>
            <Link
              href="http://k.yolxmobile.com/#/loginv2"
              className="text-sm font-medium text-slate-800"
              onClick={() => setMenuOpen(false)}
            >
              Filo Yazılımı
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-slate-800"
              onClick={() => setMenuOpen(false)}
            >
              Kurumsal
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-slate-800"
              onClick={() => setMenuOpen(false)}
            >
              İletişim
            </Link>
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
              onClick={() => setMenuOpen(false)}
            >
              Teklif Al
            </Link>

            <div className="flex items-center gap-4 pt-2">
              {Socials.map((social) => (
                <Link
                  href={social.href}
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
