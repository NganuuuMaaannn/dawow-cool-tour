"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import davao from "@/image/davao.png"

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 bg-hoverTour"
      >
        <div className="mx-auto max-w-6xl px-4 lg:px-2 flex items-center justify-between py-3">
          <div
            onClick={() => router.push("/Kadayawan-E-Village")}
            className="text-lg text-white font-normal font-montserrat tracking-wide leading-tight cursor-pointer hover:scale-105 transition-transform duration-200 block"
          >
            <Image
              src={davao}
              alt="Love, Davao!"
              className="object-contain w-[140px] sm:w-[160px] select-none"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
            <span className="text-[9px] ml-11 -mt-2 block">Mabuhay ug Madayaw!</span>
          </div>

          <nav className="hidden md:flex space-x-4">
            <button
              onClick={() => router.push("/experience-davao")}
              className="font-montserrat text-lg font-bold px-4 py-2 rounded-lg text-white hover:bg-gray-200 hover:text-hoverTour transition"
            >
              Experience, Davao!
            </button>
            <button
              onClick={() => router.push("/connect-davao")}
              className="font-montserrat text-lg font-bold px-4 py-2 rounded-lg text-white hover:bg-gray-200 hover:text-hoverTour transition"
            >
              Connect, Davao!
            </button>
            <button
              onClick={() => router.push("/about-davao")}
              className="font-montserrat text-lg font-bold px-4 py-2 rounded-lg text-white hover:bg-gray-200 hover:text-hoverTour transition"
            >
              About Love, Davao!
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
              router.push("/experience-davao");
            }}
            className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Experience, Davao!
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              router.push("/connect-davao");
            }}
            className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Connect, Davao!
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              router.push("/about-davao");
            }}
            className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            About Love, Davao!
          </button>
        </div>
      )}
    </>
  );
}
