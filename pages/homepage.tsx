"use client";

import { HiArrowNarrowRight } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import mainpageImage from "../image/mainpage.jpg";

export default function Page1() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      router.push("/homepage");
    }, 600);
  };

  return (
    <main className="relative min-h-screen bg-bgLogin overflow-hidden">

      <header className="absolute top-0 left-0 w-full backdrop-blur-md z-20">
        <div className="mx-auto max-w-6xl px-4 flex items-center justify-between py-4">
          <div className="text-lg text-white font-bold tracking-wide leading-tight cursor-pointer hover:text-gray-200 transition">
            11 TRIBES
            <br />
            <span className="text-sm font-normal">of Davao City</span>
          </div>

          <nav className="hidden md:flex space-x-4">
            <button
              onClick={() => router.push("/")}
              className="text-lg px-4 py-2 border-gray-300 rounded-lg text-white hover:bg-gray-200 hover:text-black transition"
            >
              Home
            </button>
            <button
              onClick={() => router.push("/about")}
              className="text-lg px-4 py-2 border-gray-300 rounded-lg text-white hover:bg-gray-200 hover:text-black transition"
            >
              About
            </button>
            <button
              onClick={() => router.push("/tradition-culture")}
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
        <div className="absolute top-16 right-4 bg-white text-black rounded-lg shadow-lg z-30 p-4 space-y-2 md:hidden">
          <button
            onClick={() => {
              setIsMenuOpen(false);
              router.push("/homepage");
            }}
            className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Home
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              router.push("/about");
            }}
            className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            About
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              router.push("/tradition-culture");
            }}
            className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Tradition & Culture
          </button>
        </div>
      )}

      <div className="absolute inset-0">
        <div className="h-1/2 bg-bgTour"></div>
        <div className="h-1/2 bg-white"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-screen gap-6">
        <div className="relative w-fit mt-20">
          <Image
            src={mainpageImage}
            alt="Main page"
            className="rounded-lg shadow-lg w-full h-auto"
            width={500}
            height={300}
            sizes="100vw"
          />

          {/* Button centered horizontally, bottom inside image */}
          <button
            onClick={handleClick}
            className="absolute left-1/2 bottom-4 transform -translate-x-1/2 px-6 py-3 bg-bgTour rounded-full hover:bg-hoverTour transition text-white font-semibold flex items-center gap-2"
          >
            Get Started <HiArrowNarrowRight size={20} />
          </button>
        </div>
      </div>

    </main>
  );
}
