"use client";

import { HiArrowNarrowRight } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import mainpageImage from "../image/mainpage.jpg";
import mainpageImage2 from "../image/Tribes.png";

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

      <header className="fixed top-0 left-0 w-full bg-bgTour z-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-2 flex items-center justify-between py-4">
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



      <div className="absolute top-0 left-0 w-full h-full">
        <div className="h-[35vh] lg:h-[50vh] bg-bgTour"></div>
      </div>



      <div className="relative flex flex-col items-center justify-start pt-20 gap-1 px-4">
        {/* First Image */}
        <div className="flex flex-col items-center w-full max-w-6xl">
          <div className="relative w-full">
            <Image
              src={mainpageImage}
              alt="Main page"
              className="rounded-lg shadow-lg w-full h-auto"
            />

            <button
              onClick={handleClick}
              className="absolute left-1/2 bottom-4 lg:bottom-10 -translate-x-1/2 group px-6 sm:px-8 py-2 sm:py-3 rounded-full text-white font-semibold bg-bgTour overflow-hidden flex items-center justify-center hover:bg-hoverTour transition"
            >
              <span className="transform transition-transform duration-300 group-hover:-translate-x-3">
                Get Started
              </span>
              <HiArrowNarrowRight
                className="absolute right-3 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                size={20}
              />
            </button>
          </div>
        </div>

        {/* Second Image */}
        <div className="flex flex-col items-center w-full max-w-6xl mt-5 mb-5">
          <div className="relative w-full">
            <Image
              src={mainpageImage2}
              alt="Main page"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>

    </main>
  );
}
