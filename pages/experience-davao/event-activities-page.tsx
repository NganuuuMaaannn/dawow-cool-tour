"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";

import kayadawan1 from "@/image/Event/kadayawan1.png";
import kayadawan2 from "@/image/Event/kadayawan2.png";
import kayadawan3 from "@/image/Event/kadayawan3.png";
import kayadawan4 from "@/image/Event/kadayawan4.png";
import kayadawan5 from "@/image/Event/kadayawan5.png";

import araw1 from "@/image/Event/araw1.png";
import araw2 from "@/image/Event/araw2.png";
import araw3 from "@/image/Event/araw3.png";
import araw4 from "@/image/Event/araw4.png";
import araw5 from "@/image/Event/araw5.png";
import araw6 from "@/image/Event/araw6.png";
import araw7 from "@/image/Event/araw7.png";
import araw8 from "@/image/Event/araw8.png";

import night1 from "@/image/Event/night1.png";
import night2 from "@/image/Event/night2.png";
import night3 from "@/image/Event/night3.png";

import choco1 from "@/image/Event/choco1.png";
import choco2 from "@/image/Event/choco2.png";
import choco3 from "@/image/Event/choco3.png";
import choco4 from "@/image/Event/choco4.png";
import choco5 from "@/image/Event/choco5.png";

import river1 from "@/image/Event/river1.png";
import river2 from "@/image/Event/river2.png";

import {
  FaArrowLeft,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function EventActivities() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <main className="relative font-montserrat min-h-screen flex flex-col items-center bg-bgLogin">

      <header className="w-full bg-fuchsia-500 text-white flex items-center gap-3 p-4 shadow-md fixed top-0 left-0 z-20">
        <button
          onClick={() => router.push("/experience-davao")}
          className="bg-white text-fuchsia-500 rounded-full p-2 hover:scale-110 transition-transform"
        >
          <FaArrowLeft size={18} />
        </button>
        <h1 className="text-2xl sm:text-3xl font-semibold pl-3">
          Event & Activities
        </h1>
      </header>

      <section
        className={`mt-24 w-full max-w-6xl px-4 sm:px-8 flex flex-col gap-16 pb-10 transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >





        {/* --------- Kadayawan Festival --------- */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start cursor-default"
        >
          {/* LEFT IMAGES */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <Image src={kayadawan5} alt="Vikings" className="w-full h-full object-cover" priority />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2 h-[220px] sm:h-[260px] md:h-[260px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src={kayadawan1} alt="Vikings" className="w-full h-full object-cover" priority />
              </div>
              <div className="w-1/2 h-[220px] sm:h-[260px] md:h-[260px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src={kayadawan3} alt="Vikings" className="w-full h-full object-cover" priority />
              </div>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col justify-center gap-2 self-center cursor-default">

            <h2 className="text-2xl md:text-4xl text-black font-bold mb-5 flex items-center gap-2">
              Kadayawan Festival
            </h2>

            <p className="text-justify text-black mb-10 leading-relaxed">
              The Kadayawan Festival in Davao is an annual celebration of culture, harvest, and thanksgiving, showcasing Mindanao’s
              rich indigenous heritage, street dances, floral floats, arts, and local produce, held every August to honor the bountiful
              harvest and cultural diversity of the region.
            </p>

            {/* CREDITS BOX */}
            <div className="bg-bgLogin rounded-md mt-1 sm:mt-5 md:mt-10 lg:mt-16 w-full">
              <div className="bg-white p-4 border-l-4 border-fuchsia-500">
                <p className="text-xs text-gray-400">Photo Courtesy</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2">
                  <li>
                    <a
                      href="http://www.davaocity.gov.ph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      www.davaocity.gov.ph
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://mytourguide.ph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      mytourguide.ph
                    </a>
                  </li>
                  <li>
                    PhotographyDavao.blogspot.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-6 self-center cursor-default -mt-10">
          <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
            <Image src={kayadawan4} alt="Vikings" className="w-full h-full object-cover" priority />
          </div>

          <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
            <Image src={kayadawan2} alt="Vikings" className="w-full h-full object-cover" priority />
          </div>
        </div>
        <hr className="w-full border-fuchsia-500" />





        {/* --------- Araw ng Davao --------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start cursor-default">

          {/* RIGHT TEXT*/}
          <div className="flex flex-col justify-center gap-2 cursor-default self-center order-2 md:order-1">

            <h2 className="text-2xl md:text-4xl text-black font-bold mb-5 flex items-center gap-2">
              Araw ng Davao
            </h2>

            <p className="text-justify text-black mb-10 leading-relaxed">
              Araw ng Dabaw Festival is an annual celebration in Davao City held every March to commemorate the city’s founding anniversary.
              The festival features street dances, parades, cultural performances, food fairs, and various events showcasing Davao’s rich
              culture, heritage, and local products. It is a vibrant display of the city’s unity, traditions, and festive spirit.
            </p>

            {/* CREDITS BOX */}
            <div className="bg-bgLogin rounded-md mt-1 sm:mt-5 md:mt-10 lg:mt-16 w-full">
              <div className="bg-white p-4 border-l-4 border-fuchsia-500">
                <p className="text-xs text-gray-400">Photo Courtesy</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2">
                  <li>
                    <a
                      href="http://www.brittany.com.ph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      www.brittany.com.ph
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://mindanews.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      mindanews.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.sunstar.com.ph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      www.sunstar.com.ph | Magsaysay Fruit Stand Vendors
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* LEFT IMAGES */}
          <div className="flex flex-col gap-4 order-2">
            <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <Image src={araw8} alt="Vikings" className="w-full h-full object-cover" priority />
            </div>
            <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <Image src={araw7} alt="Vikings" className="w-full h-full object-cover" priority />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2 h-[220px] sm:h-[260px] md:h-[260px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src={araw3} alt="Vikings" className="w-full h-full object-cover" priority />
              </div>
              <div className="w-1/2 h-[220px] sm:h-[260px] md:h-[260px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src={araw2} alt="Vikings" className="w-full h-full object-cover" priority />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-6 self-center cursor-default -mt-10">
          <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
            <Image src={araw5} alt="Vikings" className="w-full h-full object-cover" priority />
          </div>

          <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
            <Image src={araw6} alt="Vikings" className="w-full h-full object-cover" priority />
          </div>
        </div>
        <div className="flex flex-row justify-center gap-6 self-center cursor-default -mt-9">
          <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
            <Image src={araw1} alt="Vikings" className="w-full h-full object-cover" priority />
          </div>

          <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
            <Image src={araw4} alt="Vikings" className="w-full h-full object-cover" priority />
          </div>
        </div>
        <hr className="w-full border-fuchsia-500" />





        {/* --------- Night Markets --------- */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start cursor-default"
        >
          {/* LEFT IMAGES */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-[220px] sm:h-[260px] md:h-[580px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <Image src={night1} alt="Vikings" className="w-full h-full object-cover" priority />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col justify-center gap-2 self-center cursor-default">

            <h2 className="text-2xl md:text-4xl text-black font-bold mb-5 flex items-center gap-2">
              Night Markets
            </h2>

            {/* CREDITS BOX */}
            <div className="bg-bgLogin rounded-md mt-1 sm:mt-5 md:mt-10 lg:mt-16 w-full">
              <div className="bg-white p-4 border-l-4 border-fuchsia-500">
                <p className="text-xs text-gray-400">Photo Courtesy</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2">
                  <li>
                    &apos;Khel Kreations&apos; Davao Global Township
                  </li>
                  <li>
                    Sogod Night Market Roxas Night Market
                  </li>
                  <li>
                    Matina Town Square Matina Town Square Night Market
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-6 self-center cursor-default -mt-10">
          <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
            <Image src={night2} alt="Vikings" className="w-full h-full object-cover" priority />
          </div>

          <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
            <Image src={night3} alt="Vikings" className="w-full h-full object-cover" priority />
          </div>
        </div>
        <hr className="w-full border-fuchsia-500" />




        {/* --------- CHOCOLATE MAKING ACTIVITY --------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start cursor-default">

          {/* RIGHT TEXT*/}
          <div className="flex flex-col justify-center gap-2 cursor-default self-center order-2 md:order-1">

            <h2 className="text-2xl md:text-4xl text-black font-bold mb-5 flex items-center gap-2">
              Chocolate Making Activity
            </h2>

            <p className="text-justify text-black mb-10 leading-relaxed">
              Malagos Chocolate Museum
            </p>

            <div className="flex flex-col text-black gap-3 text-sm">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="mr-2" size={18} color="#d946ef" />
                Riverfront, Corporate City, Diversion Highway, Ma-a, Davao City 8000
              </p>

              <p className="flex items-center gap-2">
                <FaEnvelope className="mr-2" size={18} color="#d946ef" />
                info@malagoschocolate.com /  sales@malagoschocolate.com
              </p>

              <p className="flex items-center gap-2">
                <FaPhoneAlt className="mr-2" size={18} color="#d946ef" />
                Davao +63822218220 | +639176554066
              </p>

              <p className="flex items-center gap-2">
                <FaPhoneAlt className="mr-2" size={18} color="#d946ef" />
                Manila +63289242730 | +639177950775 | +63289299310
              </p>
            </div>

            {/* CREDITS BOX */}
            <div className="bg-bgLogin rounded-md mt-1 sm:mt-5 md:mt-10 lg:mt-16 w-full">
              <div className="bg-white p-4 border-l-4 border-fuchsia-500">
                <p className="text-xs text-gray-400">Photo Courtesy</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2">
                  <li>
                    <a
                      href="http://malagoschocolate.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      malagoschocolate.com 
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.davaolife.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      www.davaolife.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* LEFT IMAGES */}
          <div className="flex flex-col gap-4 order-2">
            <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <Image src={choco1} alt="Vikings" className="w-full h-full object-cover" priority />
            </div>

            <div className="flex gap-4">
              <div className="w-[400px] h-[220px] sm:h-[260px] md:h-[260px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src={choco2} alt="Vikings" className="w-full h-full object-cover" priority />
              </div>
              <div className="w-1/2 h-[220px] sm:h-[260px] md:h-[260px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src={choco3} alt="Vikings" className="w-full h-full object-cover" priority />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-6 self-center cursor-default -mt-10">
          <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
            <Image src={choco4} alt="Vikings" className="w-full h-full object-cover" priority />
          </div>

          <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
            <Image src={choco5} alt="Vikings" className="w-full h-full object-cover" priority />
          </div>
        </div>
        <hr className="w-full border-fuchsia-500" />




        
        {/* --------- River Rafting Davao Activity --------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start cursor-default">

          {/* RIGHT TEXT*/}
          <div className="flex flex-col justify-center gap-2 cursor-default self-center order-2 md:order-1">

            <h2 className="text-2xl md:text-4xl text-black font-bold mb-5 flex items-center gap-2">
              River Rafting Davao Activity
            </h2>

            <div className="flex flex-col text-black gap-3 text-sm">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="mr-2" size={18} color="#d946ef" />
                Emerald St. Jade Valley Homes, Tigatto, Davao City 8000
              </p>

              <p className="flex items-center gap-2">
                <FaEnvelope className="mr-2" size={18} color="#d946ef" />
                support@wayph.com
              </p>

              <p className="flex items-center gap-2">
                <FaPhoneAlt className="mr-2" size={18} color="#d946ef" />
                0998 853 1180
              </p>
            </div>

            {/* CREDITS BOX */}
            <div className="bg-bgLogin rounded-md mt-1 sm:mt-5 md:mt-10 lg:mt-16 w-full">
              <div className="bg-white p-4 border-l-4 border-fuchsia-500">
                <p className="text-xs text-gray-400">Photo Courtesy</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2">
                  <li>
                    <a
                      href="http://klook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      klook.com 
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://wayph.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      wayph.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* LEFT IMAGES */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <Image src={river1} alt="Vikings" className="w-full h-full object-cover" priority />
            </div>

            <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-fuchsia-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <Image src={river2} alt="Vikings" className="w-full h-full object-cover" priority />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
