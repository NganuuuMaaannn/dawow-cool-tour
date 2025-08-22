"use client";

import Image from "next/image";
import { HiArrowNarrowRight, HiLocationMarker } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import hotel1 from "@/image/pinnacle1.jpg";
import hotel2 from "@/image/pinnacle2.jpg";
import hotel3 from "@/image/pinnacle3.jpg";

export default function HotelAccommodations() {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleClick = () => {
    setTimeout(() => {
      router.push("/pinnacleHotel");
    }, 600);
  };

  return (
    <main
      className={`flex flex-col items-center px-4 py-12 bg-gray-100 mt-20 transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <h1 className="text-3xl font-semibold text-black mb-5 text-left w-full max-w-6xl">
        Hotel Accommodations
      </h1>

      <div className="space-y-12 w-full max-w-6xl">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col justify-between relative">
            <div>
              <button
                onClick={handleClick}
                className="absolute top-0 left-0 group px-6 sm:px-8 py-2 sm:py-3 rounded-full text-white font-semibold bg-bgTour overflow-hidden flex items-center justify-center hover:bg-hoverTour transition"
              >
                <span className="transform transition-transform duration-300 group-hover:-translate-x-3">
                  Check this hotel
                </span>
                <HiArrowNarrowRight
                  className="absolute right-3 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  size={20}
                />
              </button>

              <p className="sm:mt-16 mt-16 text-gray-700 leading-relaxed text-justify">
                <b>The Pinnacle Hotel </b> - dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="flex items-center gap-2 text-gray-700 mt-6">
              <HiLocationMarker className="text-bgTour" size={20} />
              <span className="text-sm font-medium">Sta. Ana Ave, Poblacion District, Davao City, 8000 Davao del Sur</span>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
            <div className="relative col-span-2 row-span-2 h-80 border rounded-lg overflow-hidden group">
              <Image
                src={hotel1}
                alt="Resort View"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="relative h-40 border rounded-lg overflow-hidden group">
              <Image
                src={hotel2}
                alt="Hotel Room"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="relative h-40 border rounded-lg overflow-hidden group">
              <Image
                src={hotel3}
                alt="Hotel Lobby"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
