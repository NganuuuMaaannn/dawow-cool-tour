"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import headerBg from "@/image/headerBG.png";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${headerBg.src})` }}
      >
        <div className="mx-auto max-w-6xl px-4 lg:px-2 flex items-center justify-between py-3">
          <div
            onClick={() => router.push("/")}
            className="text-lg text-white font-bold tracking-wide leading-tight cursor-pointer hover:scale-105 transition-transform duration-200 block"
          >
            DaWow
            <br />
            <span className="text-sm font-normal">Cool Tour</span>
          </div>

          <nav className="hidden md:flex space-x-4">
            <button
              onClick={() => router.push("/mainPage")}
              className="text-lg px-4 py-2 rounded-lg text-white hover:bg-gray-200 hover:text-black transition"
            >
              Home
            </button>
            <button
              onClick={() => router.push("/aboutTribes")}
              className="text-lg px-4 py-2 rounded-lg text-white hover:bg-gray-200 hover:text-black transition"
            >
              About Indigenous Communities
            </button>
            <button
              onClick={() => router.push("/visitUs")}
              className="text-lg px-4 py-2 rounded-lg text-white hover:bg-gray-200 hover:text-black transition"
            >
              Visit Us!
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed top-16 right-4 bg-white text-black rounded-lg shadow-lg z-[60] p-4 space-y-2 md:hidden">
          <button
            onClick={() => {
              setIsMenuOpen(false);
              router.push("/mainPage");
            }}
            className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Home
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              router.push("/aboutTribes");
            }}
            className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            About <br /> Indigenous Communities
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              router.push("/visitUs");
            }}
            className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Visit Us!
          </button>
        </div>
      )}
    </>
  );
}
