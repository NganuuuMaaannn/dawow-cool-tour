
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-green-500 z-50">
        <div className="mx-auto max-w-6xl bg-green-500 px-4 lg:px-2 flex items-center justify-between py-4">
          <div
            onClick={() => router.push("/")}
            className="text-lg text-white font-bold tracking-wide leading-tight cursor-pointer hover:opacity-80 hover:scale-105 transition-transform duration-200 block"
          >
            DaWow
            <br />
            <span className="text-sm font-normal">Cool Tour</span>
          </div>

          <nav className="hidden md:flex space-x-4">
            <button
              onClick={() => router.push("/mainPage")}
              className="text-lg px-4 py-2 border-gray-300 rounded-lg text-white hover:bg-gray-200 hover:text-black transition"
            >
              Home
            </button>
            <button
              onClick={() => router.push("/aboutTribes")}
              className="text-lg px-4 py-2 border-gray-300 rounded-lg text-white hover:bg-gray-200 hover:text-black transition"
            >
              About 11 Tribes
            </button>
            <button
              onClick={() => router.push("/traditionAndCulture")}
              className="text-lg px-4 py-2 border-gray-300 rounded-lg text-white hover:bg-gray-200 hover:text-black transition"
            >
              Tradition & Culture
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
            About
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              router.push("/traditionAndCulture");
            }}
            className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Tradition & Culture
          </button>
        </div>
      )}
    </>
  );
}
