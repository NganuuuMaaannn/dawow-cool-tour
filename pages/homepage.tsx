"use client";

import { HiArrowNarrowRight } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import mainpageImage from "../image/mainpage.jpg";
import logo1 from "../image/dvo.png";
import logo2 from "../image/hcdc.png";

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
          <div
            onClick={() => router.push("/")}
            className="text-lg text-white font-bold tracking-wide leading-tight cursor-pointer hover:opacity-80 hover:scale-105 transition-transform duration-200 block"
          >
            11 TRIBES
            <br />
            <span className="text-sm font-normal">of Davao City</span>
          </div>


          <nav className="hidden md:flex space-x-4">
            <button
              onClick={() => router.push("/homepage")}
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



      <div className="relative flex flex-col items-center justify-start pt-20 gap-1 px-2">
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
      </div>

      <div className="max-w-7xl mx-auto px-1 py-8">
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: "Ata Manobo", img: "/images/AtaManobo.png", link: "/tribes/ata-manobo" },
            { name: "Bagobo-Klata", img: "/images/bagobo-klata.png", link: "/tribes/bagobo-klata" },
            { name: "Bagobo-Tagabawa", img: "/images/bagobo-tagabawa.png", link: "/tribes/bagobo-tagabawa" },
            { name: "Obu Manuvu", img: "/images/obuManuvu.png", link: "/tribes/obu-manuvu" },
            { name: "Matigsalog", img: "/images/matigsalog.png", link: "/tribes/matigsalog" },
            { name: "Tausug", img: "/images/tausug.png", link: "/tribes/tausug" },
            { name: "Sama", img: "/images/sama.png", link: "/tribes/sama" },
            { name: "Iranun", img: "/images/iranun.png", link: "/tribes/iranun" },
            { name: "Maguindanaon", img: "/images/maguindanaon.png", link: "/tribes/maguindanaon" },
            { name: "Maranao", img: "/images/maranao.png", link: "/tribes/maranao" },
            { name: "Kagan", img: "/images/kagan.png", link: "/tribes/kagan" },
          ].map((tribe, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => router.push(tribe.link)}
              style={{ flex: "0 0 calc(25% - 1.5rem)" }}
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={tribe.img}
                  alt={tribe.name}
                  width={208}
                  height={208}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <p className="mt-2 text-center text-black font-semibold text-sm sm:text-base">
                {tribe.name}
              </p>
            </div>
          ))}
        </div>
      </div>



      <footer className="w-full text-gray-400 py-4 mt-10">
        <div className="max-w-6xl mx-auto px-2 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <div className="text-sm text-center sm:text-left">
            © {new Date().getFullYear()} 11 Tribes of Davao City. All rights reserved.
          </div>

          <div className="flex space-x-6 items-center relative z-50">
            <a
              href="https://www.facebook.com/davaocitygov"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 hover:scale-105 transition-transform duration-200 block"
            >
              <Image
                src={logo1}
                alt="Davao City Facebook page"
                width={100}
                height={30}
                className="object-contain"
              />
            </a>

            <a
              href="https://www.facebook.com/hcdcofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 hover:scale-105 transition-transform duration-200 block"
            >
              <Image
                src={logo2}
                alt="HCDC Facebook page"
                width={100}
                height={30}
                className="object-contain"
              />
            </a>
          </div>
          
        </div>
      </footer>


    </main>
  );
}
