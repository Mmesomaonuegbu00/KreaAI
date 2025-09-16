/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HiHome,
  HiVideoCamera,
  HiPhotograph,
  HiPencil,
  HiDocumentText,
  HiSupport,
  HiBell,
  HiMoon,
  HiMenu,
  HiX,
  HiCog,
} from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { FaFont } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const icons = [
    { id: "home", icon: <HiHome />, path: "/" },
    { id: "video", icon: <HiVideoCamera />, path: "/video" },
    { id: "image", icon: <HiPhotograph />, path: "/images" },
    { id: "edit", icon: <HiPencil />, path: "/editor" },
    { id: "pen", icon: <HiDocumentText />, path: "/docs" },
    { id: "eraser", icon: <HiCog />, path: "/eraser" },
    { id: "font", icon: <FaFont />, path: "/fonts" },
  ];

  return (
    <div className="w-full bg-white shadow-sm pb-3 lg:pb-0 shadow-blue-700/10 sticky top-0 z-50">
      <div className="w-[95%] mx-auto px-2">
        <div className="flex justify-between items-center lg:py-4 pt-3 lg:pt-4">
          <div className="flex items-center lg:gap-4 -ml-4 lg:-ml-0">
            <Link href="/">
              <Image src="/c0.png" alt="logo" width={50} height={35} />
            </Link>
            <div className="flex items-center gap-1 cursor-pointer">
              <img
                src="/c1.jpg"
                alt="user"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-semibold text-gray-500 text-sm">
                mmesomaonuegbu
              </span>
              <FiChevronDown className="text-lg text-gray-500" />
            </div>
          </div>

          <div className="hidden lg:flex gap-2 text-lg bg-zinc-100/75 p-2.5 rounded-2xl">
            {icons.map((item) => (
              <Link key={item.id} href={item.path}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`py-2 px-4 rounded-xl transition-all duration-200 ${
                    active === item.id
                      ? "bg-white text-crimson-500 shadow-md"
                      : "text-gray-700 hover:text-crimson-500"
                  }`}
                >
                  {item.icon}
                </button>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/gallery"
              className="flex items-center gap-2 text-gray-700 bg-zinc-100/75 px-3 py-2 rounded-xl"
            >
              <HiPhotograph className="text-lg" />
              <span className="text-sm">Gallery</span>
            </Link>
            <Link
              href="/support"
              className="flex items-center gap-2 text-gray-700 bg-zinc-100/75 px-3 py-2 rounded-xl"
            >
              <HiSupport className="text-lg" />
              <span className="text-sm">Support</span>
            </Link>
            <button className="text-gray-700 bg-zinc-100/75 p-2 rounded-xl">
              <HiBell className="text-lg" />
            </button>
            <button className="text-gray-700 bg-zinc-100/75 p-2 rounded-xl">
              <HiMoon className="text-lg" />
            </button>
            <img
              src="/c1.jpg"
              alt="user"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-gray-700"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-zinc-50 rounded-xl shadow-md mt-2 p-4 space-y-3 mb-3">
            <div className="flex gap-2 flex-wrap">
              {icons.map((item) => (
                <Link key={item.id} href={item.path} className="flex-1">
                  <button
                    onClick={() => setActive(item.id)}
                    className={`p-3 rounded-lg w-full text-center transition-all duration-200 ${
                      active === item.id
                        ? "bg-white text-crimson-500 shadow"
                        : "text-gray-700 hover:text-crimson-500"
                    }`}
                  >
                    {item.icon}
                  </button>
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <Link
                href="/gallery"
                className="flex items-center gap-2 text-gray-700 bg-zinc-100/75 px-3 py-2 rounded-lg"
              >
                <HiPhotograph className="text-lg" />
                <span className="text-sm">Gallery</span>
              </Link>
              <Link
                href="/support"
                className="flex items-center gap-2 text-gray-700 bg-zinc-100/75 px-3 py-2 rounded-lg"
              >
                <HiSupport className="text-lg" />
                <span className="text-sm">Support</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
