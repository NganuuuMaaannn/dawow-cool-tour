"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import mainpageImage from "../image/mainpage.jpg";

export default function HomePage() {
  const router = useRouter();
  const [selectedTribe, setSelectedTribe] = useState<string | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleClick = () => {
    setTimeout(() => {
      router.push("/aboutTribes");
    }, 600);
  };

  const handleTribeClick = (link: string, name: string) => {
    setSelectedTribe(name);
    setTimeout(() => {
      router.push(link);
    }, 600);
  };

  const tribes = [
    { name: "Ata Manobo", img: "/images/AtaManobo.png", link: "/tribes/ataManobo" },
    { name: "Bagobo - Klata", img: "/images/bagobo-klata.png", link: "/tribes/bagoboKlata" },
    { name: "Bagobo - Tagabawa", img: "/images/bagobo-tagabawa.png", link: "/tribes/bagoboTagabawa" },
    { name: "Bangsa - Kagan", img: "/images/kagan.png", link: "/tribes/bangsaKagan" },
    { name: "Bangsa - Sama", img: "/images/sama.png", link: "/tribes/bangsaSama" },
    { name: "Iranun", img: "/images/iranun.png", link: "/tribes/iranun" },
    { name: "Maguindanaon", img: "/images/maguindanaon.png", link: "/tribes/maguindanaon" },
    { name: "Maranao", img: "/images/maranao.png", link: "/tribes/maranao" },
    { name: "Matigsalog", img: "/images/matigsalog.png", link: "/tribes/matigsalog" },
    { name: "Ovu Manuvu", img: "/images/obuManuvu.png", link: "/tribes/ovuManuvu" },
    { name: "Taosug", img: "/images/tausug.png", link: "/tribes/taosug" },
  ];

  return (
    <>
      <div 
        className={`flex flex-col items-center justify-start pt-20 gap-1 px-2 transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
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
          {tribes.map((tribe, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center cursor-pointer group transition-all duration-500 ${
                selectedTribe === tribe.name
                  ? "scale-110 opacity-0"
                  : "opacity-100"
              }`}
              onClick={() => handleTribeClick(tribe.link, tribe.name)}
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
    </>
  );
}
