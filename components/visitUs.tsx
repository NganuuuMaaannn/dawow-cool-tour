"use client";

import Image from "next/image";
import { HiArrowNarrowRight, HiLocationMarker, HiGlobeAlt, HiPhone, HiClock, HiStar,  } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import pinnacle1 from "@/image/pinnacle1.jpg";
import pinnacle2 from "@/image/pinnacle2.jpg";
import pinnacle3 from "@/image/pinnacle3.jpg";

import evergreen1 from "@/image/evergreen.jpg";
import evergreen2 from "@/image/evergreen2.webp";
import evergreen3 from "@/image/evergreen3.webp";

import sequoiaInn from "@/image/sequoiaInn.webp";
import sequoiaInn2 from "@/image/sequoiaInn2.png";
import sequoiaInn3 from "@/image/sequoiaInn3.png";

import vbhInn from "@/image/vbhInn.jpg";
import vbhInn2 from "@/image/vbhInn2.jpg";
import vbhInn3 from "@/image/vbhInn3.jpg";

import crrd from "@/image/crrd.webp";
import crrd2 from "@/image/crrd2.jpg";
import crrd3 from "@/image/crrd3.webp";

import hari from "@/image/hari.jpg";
import hari2 from "@/image/hari2.webp";
import hari3 from "@/image/hari3.jpg";

import ritz from "@/image/ritz.webp";
import ritz2 from "@/image/ritz2.png";
import ritz3 from "@/image/ritz3.jpg";

import hamp from "@/image/hamp.jpeg";
import hamp2 from "@/image/hamp2.jpeg";
import hamp3 from "@/image/hamp3.webp";


export default function HotelAccommodations() {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const pinnacleHandleClick = () => {
    setTimeout(() => {
      router.push("/pinnacleHotel");
    }, 600);
  };

  const evergreeenHandleClick = () => {
    setTimeout(() => {
      router.push("/evergreenHotel");
    }, 600);
  };

  const sequoniaHandleClick = () => {
    setTimeout(() => {
      router.push("/sequoniaHotel");
    }, 600);
  };

  const vbhHandleClick = () => {
    setTimeout(() => {
      router.push("/vbhHotel");
    }, 600);
  };

  const crrdHandleClick = () => {
    setTimeout(() => {
      router.push("/crrdHotel");
    }, 600);
  };

  const hariHandleClick = () => {
    setTimeout(() => {
      router.push("/hariHotel");
    }, 600);
  };

  const ritzHandleClick = () => {
    setTimeout(() => {
      router.push("/ritzHotel");
    }, 600);
  };

   const hampHandleClick = () => {
    setTimeout(() => {
      router.push("/hampHotel");
    }, 600);
  };

  return (
    <main
      className={`flex flex-col items-center px-4 py-12 bg-gray-100 mt-10 transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <h1 className="text-3xl font-semibold text-black mb-5 text-left w-full max-w-6xl">
        Hotel Accommodations
      </h1>

      <div className="space-y-12 w-full max-w-6xl">


        {/* Pinnacle Hotel */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col justify-between relative">
            <div>
              {/* CTA Button */}
              <button
                onClick={pinnacleHandleClick}
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

              {/* Title */}
              <h1 className="mt-20 text-black font-bold text-3xl flex items-center gap-2">
                The Pinnacle Hotel and Suites 
                <span className="flex items-center text-yellow-400 text-xl">
                  <HiStar /> <HiStar /> <HiStar />
                </span>
              </h1>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiLocationMarker className="text-bgTour" size={20} />
                <span className="text-sm font-medium">
                  Sta. Ana Ave, Poblacion Davao City
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiPhone className="text-bgTour" size={20} />
                <span className="text-sm font-medium">(08) 221 3025</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiGlobeAlt className="text-bgTour" size={20} />
                <span className="text-sm font-medium">swiftbook.io</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiClock className="text-bgTour" size={20} />
                <span className="text-sm font-medium">8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>


          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
            <div className="relative col-span-2 row-span-2 h-80 border rounded-lg overflow-hidden group">
              <Image
                src={pinnacle1}
                alt="Resort View"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="relative h-40 border rounded-lg overflow-hidden group">
              <Image
                src={pinnacle2}
                alt="Hotel Room"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="relative h-40 border rounded-lg overflow-hidden group">
              <Image
                src={pinnacle3}
                alt="Hotel Lobby"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </div>





        {/* Evergreen Hotel */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col justify-between relative">
            <div>
              {/* CTA Button */}
              <button
                onClick={evergreeenHandleClick}
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

              {/* Title */}
              <h1 className="mt-20 text-black font-bold text-3xl flex items-center gap-2">
                Evergreen Hotel 
                <span className="flex items-center text-yellow-400 text-xl">
                  <HiStar /> <HiStar />
                </span>
              </h1>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiLocationMarker className="text-bgTour" size={20} />
                <span className="text-sm font-medium">
                  4 R Magsaysay, Poblacion District, Davao City
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiPhone className="text-bgTour" size={20} />
                <span className="text-sm font-medium">0965 894 4070</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiClock className="text-bgTour" size={20} />
                <span className="text-sm font-medium">24 hours</span>
              </div>
            </div>
          </div>


          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
            <div className="relative col-span-2 row-span-2 h-80 border rounded-lg overflow-hidden group">
              <Image
                src={evergreen1}
                alt="Resort View"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="relative h-40 border rounded-lg overflow-hidden group">
              <Image
                src={evergreen2}
                alt="Hotel Room"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="relative h-40 border rounded-lg overflow-hidden group">
              <Image
                src={evergreen3}
                alt="Hotel Lobby"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </div>





        {/* Sequonia Inn */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col justify-between relative">
            <div>
              {/* CTA Button */}
              <button
                onClick={sequoniaHandleClick}
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

              {/* Title */}
              <h1 className="mt-20 text-black font-bold text-3xl flex items-center gap-2">
                Sequonia Inn 
                <span className="flex items-center text-yellow-400 text-xl">
                  <HiStar /> <HiStar />
                </span>
              </h1>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiLocationMarker className="text-bgTour" size={20} />
                <span className="text-sm font-medium">
                  72 Monteverde St, Poblacion District, Davao City
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiPhone className="text-bgTour" size={20} />
                <span className="text-sm font-medium">(082) 300 3636</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <FaFacebook className="text-bgTour" size={20} />
                <span className="text-sm font-medium">Sequoia Inn</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiClock className="text-bgTour" size={20} />
                <span className="text-sm font-medium">24 hours</span>
              </div>
            </div>
          </div>


          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
            <div className="relative col-span-2 row-span-2 h-80 border rounded-lg overflow-hidden group">
              <Image
                src={sequoiaInn}
                alt="Resort View"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="relative h-40 border rounded-lg overflow-hidden group">
              <Image
                src={sequoiaInn2}
                alt="Hotel Room"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="relative h-40 border rounded-lg overflow-hidden group">
              <Image
                src={sequoiaInn3}
                alt="Hotel Lobby"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </div>




        {/* VBH Inn */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col justify-between relative">
            <div>
              {/* CTA Button */}
              <button
                onClick={vbhHandleClick}
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

              {/* Title */}
              <h1 className="mt-20 text-black font-bold text-3xl flex items-center gap-2">
                VBH Inn 
                <span className="flex items-center text-yellow-400 text-xl">
                  <HiStar /> <HiStar />
                </span>
              </h1>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiLocationMarker className="text-bgTour" size={20} />
                <span className="text-sm font-medium">
                  Agdao Public Market, W Aquino St, Davao City
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiPhone className="text-bgTour" size={20} />
                <span className="text-sm font-medium">(082) 227 7369</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <FaFacebook className="text-bgTour" size={20} />
                <span className="text-sm font-medium">VBH Inn Davao City</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiClock className="text-bgTour" size={20} />
                <span className="text-sm font-medium">24 Hours</span>
              </div>
            </div>
          </div>


          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
            <div className="relative col-span-2 row-span-2 h-80 border rounded-lg overflow-hidden group">
              <Image
                src={vbhInn}
                alt="Resort View"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="relative h-40 border rounded-lg overflow-hidden group">
              <Image
                src={vbhInn2}
                alt="Hotel Room"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="relative h-40 border rounded-lg overflow-hidden group">
              <Image
                src={vbhInn3}
                alt="Hotel Lobby"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </div>





        {/* Crown Regency Residences Davao */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col justify-between relative">
            <div>
              {/* CTA Button */}
              <button
                onClick={crrdHandleClick}
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

              {/* Title */}
              <h1 className="mt-20 text-black font-bold text-2xl flex items-center gap-2">
                Crown Regency Residences Davao 
                <span className="flex items-center text-yellow-400 text-xl">
                  <HiStar /> <HiStar /> <HiStar />
                </span>
              </h1>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiLocationMarker className="text-bgTour" size={20} />
                <span className="text-sm font-medium">
                  J.P, Cabaguio Ave, Davao City
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiPhone className="text-bgTour" size={20} />
                <span className="text-sm font-medium">(082) 291 0088</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <FaFacebook className="text-bgTour" size={20} />
                <span className="text-sm font-medium">Crown Regency Residences Davao</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiClock className="text-bgTour" size={20} />
                <span className="text-sm font-medium">24 hours</span>
              </div>
            </div>
          </div>


          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
            <div className="relative col-span-2 row-span-2 h-80 border rounded-lg overflow-hidden group">
              <Image
                src={crrd}
                alt="Resort View"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="relative h-40 border rounded-lg overflow-hidden group">
              <Image
                src={crrd2}
                alt="Hotel Room"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="relative h-40 border rounded-lg overflow-hidden group">
              <Image
                src={crrd3}
                alt="Hotel Lobby"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </div>





        {/* Hari Royale Suites */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col justify-between relative">
            <div>
              {/* CTA Button */}
              <button
                onClick={hariHandleClick}
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

              {/* Title */}
              <h1 className="mt-20 text-black font-bold text-3xl flex items-center gap-2">
                Hari Royale Suites 
                <span className="flex items-center text-yellow-400 text-xl">
                  <HiStar /> <HiStar /> <HiStar />
                </span>
              </h1>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiLocationMarker className="text-bgTour" size={20} />
                <span className="text-sm font-medium">
                  Narra S, Sta, Ana AvePoblacion District, Davao City
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiPhone className="text-bgTour" size={20} />
                <span className="text-sm font-medium">0915 952 7999</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiGlobeAlt className="text-bgTour" size={20} />
                <span className="text-sm font-medium">hrsdavao.com</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiClock className="text-bgTour" size={20} />
                <span className="text-sm font-medium">24 hours</span>
              </div>
            </div>
          </div>


          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
            <div className="relative col-span-2 row-span-2 h-80 border rounded-lg overflow-hidden group">
              <Image
                src={hari}
                alt="Resort View"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="relative h-40 border rounded-lg overflow-hidden group">
              <Image
                src={hari2}
                alt="Hotel Room"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="relative h-40 border rounded-lg overflow-hidden group">
              <Image
                src={hari3}
                alt="Hotel Lobby"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </div>





        {/* The Ritz Hotel at Garden Oases */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col justify-between relative">
            <div>
              {/* CTA Button */}
              <button
                onClick={ritzHandleClick}
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

              {/* Title */}
              <h1 className="mt-20 text-black font-bold text-3xl flex items-center gap-2">
                The Ritz Hotel at Garden Oases 
                <span className="flex items-center text-yellow-400 text-xl">
                  <HiStar /> <HiStar /> <HiStar />
                </span>
              </h1>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiLocationMarker className="text-bgTour" size={20} />
                <span className="text-sm font-medium">
                  Porras St, Corner Ignacio Villamor St, Barrio Obrero, Davao City
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiPhone className="text-bgTour" size={20} />
                <span className="text-sm font-medium">(02) 8249 8745</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <FaFacebook className="text-bgTour" size={20} />
                <span className="text-sm font-medium">The Ritz Hotel at Garden Oases</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiClock className="text-bgTour" size={20} />
                <span className="text-sm font-medium">24 hours</span>
              </div>
            </div>
          </div>


          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
            <div className="relative col-span-2 row-span-2 h-80 border rounded-lg overflow-hidden group">
              <Image
                src={ritz}
                alt="Resort View"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="relative h-40 border rounded-lg overflow-hidden group">
              <Image
                src={ritz2}
                alt="Hotel Room"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="relative h-40 border rounded-lg overflow-hidden group">
              <Image
                src={ritz3}
                alt="Hotel Lobby"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </div>





        {/* Hampton Suites */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col justify-between relative">
            <div>
              {/* CTA Button */}
              <button
                onClick={hampHandleClick}
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

              {/* Title */}
              <h1 className="mt-20 text-black font-bold text-3xl flex items-center gap-2">
                Hampton Suites 
                <span className="flex items-center text-yellow-400 text-xl">
                  <HiStar /> <HiStar />
                </span>
              </h1>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiLocationMarker className="text-bgTour" size={20} />
                <span className="text-sm font-medium">
                  779 Lapu-Lapu St, Poblacion District, Davao City, 8000 Davao del Sur
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiPhone className="text-bgTour" size={20} />
                <span className="text-sm font-medium">0917 187 3838</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <FaFacebook className="text-bgTour" size={20} />
                <span className="text-sm font-medium">Hampton Suites</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 mt-3">
                <HiClock className="text-bgTour" size={20} />
                <span className="text-sm font-medium">2:00 PM - 12:00 PM</span>
              </div>
            </div>
          </div>


          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
            <div className="relative col-span-2 row-span-2 h-80 border rounded-lg overflow-hidden group">
              <Image
                src={hamp}
                alt="Resort View"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="relative h-40 border rounded-lg overflow-hidden group">
              <Image
                src={hamp2}
                alt="Hotel Room"
                fill
                className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="relative h-40 border rounded-lg overflow-hidden group">
              <Image
                src={hamp3}
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
