"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";

import eagle1 from "@/image/Attraction/eagle1.png";
import eagle2 from "@/image/Attraction/eagle2.png";

import ppark1 from "@/image/Attraction/ppark1.png";
import ppark2 from "@/image/Attraction/ppark2.png";
import ppark3 from "@/image/Attraction/ppark3.png";

import national1 from "@/image/Attraction/national1.png";
import national2 from "@/image/Attraction/national2.png";

import croc1 from "@/image/Attraction/croc1.png";
import croc2 from "@/image/Attraction/croc2.png";

import malagos1 from "@/image/Attraction/malagos1.png";
import malagos2 from "@/image/Attraction/malagos2.png";
import malagos3 from "@/image/Attraction/malagos3.png";

import eden1 from "@/image/Attraction/eden1.png";
import eden2 from "@/image/Attraction/eden2.png";
import eden3 from "@/image/Attraction/eden3.png";

import bamboo1 from "@/image/Attraction/bamboo1.png";
import bamboo2 from "@/image/Attraction/bamboo2.png";

import bone1 from "@/image/Attraction/bone1.png";
import bone2 from "@/image/Attraction/bone2.png";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookSquare,
  FaArrowLeft,
  FaCalendarAlt
} from "react-icons/fa";
import { HiMiniBuildingOffice } from "react-icons/hi2";

import { HiClock } from "react-icons/hi";

export default function AttractionPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-bgLogin">

      <header className="w-full bg-cyan-500 text-white flex items-center gap-3 p-4 shadow-md fixed top-0 left-0 z-20">
        <button
          onClick={() => router.push("/experience-davao")}
          className="bg-white text-cyan-500 rounded-full p-2 hover:scale-110 transition-transform"
        >
          <FaArrowLeft size={18} />
        </button>
        <h1 className="text-2xl sm:text-3xl font-semibold pl-3">
          Attractions
        </h1>
      </header>

      <section
        className={`mt-24 w-full max-w-6xl px-4 sm:px-8 flex flex-col gap-16 pb-10 transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >

        {/* --------- PHILIPPINE EAGLE --------- */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start cursor-default"
        >
          {/* LEFT IMAGES */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-cyan-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <Image src={eagle1} alt="Vikings" className="w-full h-full object-cover" priority/>
            </div>

            <div className="flex gap-4">
              <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-cyan-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src={eagle2} alt="Vikings" className="w-full h-full object-cover" priority/>
              </div>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col justify-center gap-2 self-center cursor-default">
            <h2 className="text-2xl text-black font-bold mb-2 flex items-center gap-2">
              Philippine Eagle Center
            </h2>

            <p className="text-justify text-black leading-relaxed mb-10">
              The Philippine Eagle Center in Barangay Malagos, Davao City is a sanctuary dedicated to
              the conservation and protection of the Philippine Eagle, home to over 30 eagles, including
              18 bred in captivity, along with more than 100 species of birds of prey, reptiles, and
              mammals. Visitors can enjoy interactive exhibits like the Flight Zone with the “Raptors in
              Flight” show and learn about rescued eagles at Talon Alley. The best time to visit is during
              the dry season from December to May, and it is often included in Davao City tours with Eden
              Nature Park, Malagos Garden Resort, and People’s Park.
            </p>

            <div className="mt-4 mb-2 flex flex-col text-black gap-3 text-sm">
              <p className="flex items-center gap-2"><FaMapMarkerAlt className="mr-2" size={18} color="#73D7EA" /> Philippine Eagle Center Malagos, Baguio District, Davao City, 8018 </p>
              <p className="flex items-center gap-2"><FaEnvelope className="mr-2" size={18} color="#73D7EA" /> info@philippineeaglefoundation.org </p>
              <p className="flex items-center gap-2"><FaPhoneAlt className="mr-2" size={18} color="#73D7EA" /> +63 917 708 9084 / +63 82 324 1860 </p>
            </div>

            {/* CREDITS BOX */}
            <div className="bg-bgLogin rounded-md mt-6 w-full">
              <div className="bg-white p-4 border-l-4 border-cyan-500">
                <p className="text-xs text-gray-400">Photo Courtesy</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2">
                  <li>Guide to the Philippines</li>
                  <li>
                    <a
                      href="https://newsinfo.inquirer.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      newsinfo.inquirer.net
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>



        {/* --------- People's Park --------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start cursor-default">

          {/* RIGHT TEXT*/}
          <div className="flex flex-col justify-center gap-2 cursor-default self-center order-2 md:order-1">

            <h2 className="text-2xl md:text-3xl text-black font-bold mb-2 flex items-center gap-2">
              People’s Park
            </h2>

            <p className="text-justify text-black mb-10 leading-relaxed">
              Davao’s People’s Park is a gem amidst the city’s concrete jungle. This 4-hectare public park provides
              a relaxing green escape from the usual city noise (and heat) for Davaoeños and visitors alike. With lush
              gardens, artistic sculptures, a durian-inspired dome, and walking paths, every visitor will certainly
              have plenty of features to enjoy.
            </p>

            <div className="flex flex-col text-black gap-3 text-sm">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="mr-2" size={18} color="#73D7EA" />
                Uy Building, 49 Jln Palma Gil St, Poblacion District, Davao City, 8000
              </p>

              <p className="flex items-center gap-2">
                <FaFacebookSquare className="mr-2" size={18} color="#73D7EA" />
                Peoples Park Davao Official Page
              </p>

              <p className="flex items-center gap-2">
                <HiClock className="mr-2" size={18} color="#73D7EA" />
                Monday - Sunday: 1:00 PM - 10:00 PM
              </p>
            </div>

            {/* CREDITS BOX */}
            <div className="bg-bgLogin rounded-md mt-6 w-full">
              <div className="bg-white p-4 border-l-4 border-cyan-500">
                <p className="text-xs text-gray-400">Photo Courtesy</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2">
                  <li>
                    <a
                      href="http://Meanttogo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Meanttogo.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.discoverthephilippines.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      www.discoverthephilippines.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://realbreezdavaotours.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      realbreezdavaotours.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* LEFT IMAGES */}
          <div className="flex flex-col gap-4 w-full order-1 md:order-2">
            <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] bg-gray-200 border-4 border-cyan-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <Image src={ppark1} alt="People's Park" className="w-full h-full object-cover" priority/>
            </div>

            <div className="flex gap-4 w-full">
              <div className="w-1/2 h-[180px] sm:h-[220px] md:h-[260px] bg-gray-200 border-4 border-cyan-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src={ppark2} alt="People's Park" className="w-full h-full object-cover" priority/>
              </div>

              <div className="w-1/2 h-[180px] sm:h-[220px] md:h-[260px] bg-gray-200 border-4 border-cyan-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src={ppark3} alt="People's Park" className="w-full h-full object-cover" priority/>
              </div>
            </div>
          </div>
        </div>



        {/* --------- National Museum of the Philippines Davao --------- */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start cursor-default"
        >
          {/* LEFT IMAGES */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-cyan-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <Image src={national1} alt="Vikings" className="w-full h-full object-cover" priority/>
            </div>

            <div className="flex gap-4">
              <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-cyan-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src={national2} alt="Vikings" className="w-full h-full object-cover" priority/>
              </div>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col justify-center gap-2 self-center cursor-default">
            <h2 className="text-2xl text-black font-bold mb-2 flex items-center gap-2">
              National Museum of the Philippines Davao
            </h2>

            <p className="text-justify text-black text-justified mb-10">
              The National Museum of the Philippines – Davao is the 17th regional component museum and fourth under the
              Mindanao National Museums. It represents an important milestone in preserving Davao’s cultural heritage.
              Its six-story building, inspired by the Durian fruit, houses exhibits on natural history, cultural and
              historical artifacts, Indigenous Peoples of Mindanao, and masterpieces by local and national artists. The
              first four floors are managed by the National Museum of the Philippines, while the fifth floor is for Museo
              Dabawenyo.
            </p>

            <div className="mt-4 mb-2 flex flex-col text-black gap-3 text-sm">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="mr-2" size={18} color="#73D7EA" />
                People’s Park Compound, J. Palma Gil Street, Barangay 4-A, Poblacion District, Davao City
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="mr-2" size={18} color="#73D7EA" />
                davao@nationalmuseum.gov.ph
              </p>
              <p className="flex items-center gap-2">
                <FaFacebookSquare className="mr-2" size={18} color="#73D7EA" />
                National Museum of the Philippine – Davao
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="mr-2" size={18} color="#73D7EA" />
                0998 557 9370
              </p>
            </div>

            {/* CREDITS BOX */}
            <div className="bg-bgLogin rounded-md mt-6 w-full">
              <div className="bg-white p-4 border-l-4 border-cyan-500">
                <p className="text-xs text-gray-400">Photo Courtesy</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2">
                  <li>
                    <a
                      href="http://www.nationalmuseum.gov.ph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      www.nationalmuseum.gov.ph
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        {/* --------- Crocodile Park Davao --------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start cursor-default">

          {/* RIGHT TEXT*/}
          <div className="flex flex-col justify-center gap-2 cursor-default self-center order-2 md:order-1">

            <h2 className="text-2xl md:text-3xl text-black font-bold mb-2 flex items-center gap-2">
              Crocodile Park Davao
            </h2>

            <p className="text-justify text-black mb-10 leading-relaxed">
              Experience the thrill of wildlife up close at Davao&apos;s premier conservation and entertainment destination.
            </p>

            <div className="flex flex-col text-black gap-3 text-sm">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="mr-2" size={18} color="#73D7EA" />
                Riverfront, Corporate City, Diversion Highway, Ma-a, Davao City 8000
              </p>

              <p className="flex items-center gap-2">
                <FaPhoneAlt className="mr-2" size={18} color="#73D7EA" />
                (082) 286 8883 | (082) 221 7749 | +63.082.221.4671
              </p>

              <p className="flex items-center gap-2">
                <FaEnvelope className="mr-2" size={18} color="#73D7EA" />
                parkinfo@crocodilepark.ph
              </p>

              <p className="flex items-center gap-2">
                <HiClock className="mr-2" size={18} color="#73D7EA" />
                Opening Hours
                Monday - Sunday
                8:00 AM - 5:00 PM
                Last admission at 4:00 PM
              </p>
            </div>

            {/* CREDITS BOX */}
            <div className="bg-bgLogin rounded-md mt-6 w-full">
              <div className="bg-white p-4 border-l-4 border-cyan-500">
                <p className="text-xs text-gray-400">Photo Courtesy</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2">
                  <li>
                    <a
                      href="http://Poorlakwatchera.blogspot.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Poorlakwatchera.blogspot.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.phtourguide.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      www.phtourguide.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* LEFT IMAGES */}
          <div className="flex flex-col gap-4 w-full order-1 md:order-2">
            <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-cyan-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <Image src={croc1} alt="People's Park" className="w-full h-full object-cover" priority/>
            </div>

            <div className="flex gap-4 w-full">
              <div className="w-full h-[180px] sm:h-[220px] md:h-[360px] bg-gray-200 border-4 border-cyan-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src={croc2} alt="People's Park" className="w-full h-full object-cover" priority/>
              </div>
            </div>
          </div>
        </div>


        {/* --------- Malagos Garden Davao --------- */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start cursor-default"
        >
          {/* LEFT IMAGES */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] bg-gray-200 border-4 border-cyan-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <Image src={malagos1} alt="People's Park" className="w-full h-full object-cover" priority/>
            </div>

            <div className="flex gap-4 w-full">
              <div className="w-1/2 h-[180px] sm:h-[220px] md:h-[260px] bg-gray-200 border-4 border-cyan-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src={malagos2} alt="People's Park" className="w-full h-full object-cover" priority/>
              </div>

              <div className="w-1/2 h-[180px] sm:h-[220px] md:h-[260px] bg-gray-200 border-4 border-cyan-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src={malagos3} alt="People's Park" className="w-full h-full object-cover" priority/>
              </div>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col justify-center gap-2 self-center cursor-default">
            <h2 className="text-2xl text-black font-bold mb-2 flex items-center gap-2">
              Malagos Garden Davao
            </h2>

            <p className="text-justify text-black text-justified mb-10">
              For travellers and locals who are seeking to reconnect with nature, Malagos Garden Resort is an agri-ecotourism 
              resort that offers an all-inclusive hospitality experience - from dining, accommodation, recreation to wellness 
              activities - in a sustainable farm setting. With the resort’s commitment to a service that is guest-oriented, 
              environmentally ethical, and considers a positive impact in the community, guests may enjoy an ultimate vacation 
              experience while being one with nature.
            </p>

            <div className="mt-4 mb-2 flex flex-col text-black gap-3 text-sm">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="mr-2" size={18} color="#73D7EA" />
                Malagos, Baguio District, Davao City
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="mr-2" size={18} color="#73D7EA" />
                malagos.reservations2@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="mr-2" size={18} color="#73D7EA" />
                Globe +63 917 624 5727 | Phone +63 (82) 224 7438
              </p>
            </div>

            {/* CREDITS BOX */}
            <div className="bg-bgLogin rounded-md mt-6 w-full">
              <div className="bg-white p-4 border-l-4 border-cyan-500">
                <p className="text-xs text-gray-400">Photo Courtesy</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2">
                  <li>
                    <a
                      href="http://www.malagos.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      www.malagos.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        {/* --------- Eden Nature Park --------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start cursor-default">

          {/* RIGHT TEXT*/}
          <div className="flex flex-col justify-center gap-2 cursor-default self-center order-2 md:order-1">

            <h2 className="text-2xl md:text-3xl text-black font-bold mb-2 flex items-center gap-2">
              Eden Nature Park
            </h2>

            <p className="text-justify text-black mb-10 leading-relaxed">
              Eden offers experiences to provide a time of your life, including nature, authentic mountain experience, 
              cool crisp mountain air, spectacular views of pine trees, and infinite possibilities within its 80-hectare 
              resort. Visitors can enjoy private leisure, family moments, reading, or entertaining thoughts. Tinubdan 
              showcases Mindanaon ancestors, cultural treasures, street dances, arts, and festivals. Food features abundant 
              flavors, fresh natural ingredients, and a marriage of local and international recipes. Romantic balcony rooms 
              offer luxury, escape from daily worries, and cherished time with loved ones. Experience it all at Eden!
            </p>

            <div className="flex flex-col text-black gap-3 text-sm">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="mr-2" size={18} color="#73D7EA" />
                Brgy. Eden, Toril, Davao City
              </p>

              <p className="flex items-center gap-2">
                <FaPhoneAlt className="mr-2" size={18} color="#73D7EA" />
                (0918) 930-7590 | (0917) 111-3336
              </p>

              <p className="flex items-center gap-2">
                <FaEnvelope className="mr-2" size={18} color="#73D7EA" />
                 info@edennaturepark.com.ph
              </p>

              <p className="flex items-center gap-2">
                <FaCalendarAlt className="mr-2" size={18} color="#73D7EA" />
                 JFM Corporate Center, 848 Atis Street, Juna
              </p>

              <p className="flex items-center gap-2">
                <HiClock className="mr-2" size={18} color="#73D7EA" />
                Mondays - Sundays from 9:00 AM - 5:00 PM
              </p>

              <p className="flex items-center gap-2">
                <HiMiniBuildingOffice className="mr-2" size={18} color="#73D7EA" />
                Mondays - Saturdays 8:00 AM - 5:00 PM | Sundays 8:00 AM - 12:00 NN
              </p>
            </div>

            {/* CREDITS BOX */}
            <div className="bg-bgLogin rounded-md mt-6 w-full">
              <div className="bg-white p-4 border-l-4 border-cyan-500">
                <p className="text-xs text-gray-400">Photo Courtesy</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2">
                  <li>
                    <a
                      href="http://www.edennaturepark.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      www.edennaturepark.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.agoda.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      www.agoda.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.moneymax.ph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      www.moneymax.ph
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* LEFT IMAGES */}
          <div className="flex flex-col gap-4 w-full order-1 md:order-2">
            <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] bg-gray-200 border-4 border-cyan-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <Image src={eden1} alt="People's Park" className="w-full h-full object-cover" priority/>
            </div>

            <div className="flex gap-4 w-full">
              <div className="w-full h-[180px] sm:h-[220px] md:h-[260px] bg-gray-200 border-4 border-cyan-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src={eden2} alt="People's Park" className="w-full h-full object-cover" priority/>
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <div className="w-full h-[180px] sm:h-[220px] md:h-[260px] bg-gray-200 border-4 border-cyan-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src={eden3} alt="People's Park" className="w-full h-full object-cover" priority/>
              </div>
            </div>
          </div>
        </div>


        
        {/* --------- Bamboo Sanctuary and Ecological Park Davao --------- */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start cursor-default"
        >
          {/* LEFT IMAGES */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-[220px] sm:h-[260px] md:h-[260px] bg-gray-200 border-4 border-cyan-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <Image src={bamboo1} alt="People's Park" className="w-full h-full object-cover" priority/>
            </div>

            <div className="flex gap-4 w-full">
              <div className="w-full h-[180px] sm:h-[220px] md:h-[260px] bg-gray-200 border-4 border-cyan-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src={bamboo2} alt="People's Park" className="w-full h-full object-cover" priority/>
              </div>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col justify-center gap-2 self-center cursor-default">
            <h2 className="text-2xl text-black font-bold mb-2 flex items-center gap-2">
              Bamboo Sanctuary and Ecological Park Davao
            </h2>

            <p className="text-justify text-black text-justified mb-10">
              Davao Bamboo Sanctuary and Ecological Park offers various amenities for families and friends who would like to 
              unwind from the hustle and bustle of city life. Thus, for those seeking relaxation and recreation, Davao Bamboo 
              Sanctuary and Ecological Park is your eco-friendly destination.
            </p>

            <div className="mt-4 mb-2 flex flex-col text-black gap-3 text-sm">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="mr-2" size={18} color="#73D7EA" />
                Davao Bamboo Sanctuary and Ecological Park Purok 5 Barangay Malagos Baguio District, Davao City, Philippines
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="mr-2" size={18} color="#73D7EA" />
                davbamboosanctuary.sales@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="mr-2" size={18} color="#73D7EA" />
                +63917-621-2652 | 082 - 227 - 7705
              </p>
            </div>

            {/* CREDITS BOX */}
            <div className="bg-bgLogin rounded-md mt-6 w-full">
              <div className="bg-white p-4 border-l-4 border-cyan-500">
                <p className="text-xs text-gray-400">Photo Courtesy</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2">
                  <li>
                    <a
                      href="http://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      www.youtube.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://davaobamboo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      davaobamboo.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        {/* --------- D’ Bone Collector Davao --------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start cursor-default">

          {/* RIGHT TEXT*/}
          <div className="flex flex-col justify-center gap-2 cursor-default self-center order-2 md:order-1">

            <h2 className="text-2xl md:text-3xl text-black font-bold mb-2 flex items-center gap-2">
              D’ Bone Collector Davao
            </h2>

            <p className="text-justify text-black mb-10 leading-relaxed">
              Explore the captivating realm of natural history at D&apos; Bone Collector Museum. Immerse yourself in a collection 
              of meticulously curated specimens, from skeletal remains to preserved creatures.
            </p>

            <div className="flex flex-col text-black gap-3 text-sm">
              <p className="flex items-center text-[12px] gap-2">
                <FaMapMarkerAlt className="mr-2" size={28} color="#73D7EA" />
                San Pedro Ext. Or Common Name Bucana. Brg 76-A across from Nograles Park. 3  Story Building Blue Cone. Family 
                Circus Compound , Davao City, Philippines
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="mr-2" size={18} color="#73D7EA" />
                 crocodiledd1@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FaFacebookSquare className="mr-2" size={18} color="#73D7EA" />
                dbonecollectormuseuminc
              </p>
            </div>

            {/* CREDITS BOX */}
            <div className="bg-bgLogin rounded-md mt-6 w-full">
              <div className="bg-white p-4 border-l-4 border-cyan-500">
                <p className="text-xs text-gray-400">Photo Courtesy</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2">
                  <li>
                    <a
                      href="http://www.tripadvisor.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      www.tripadvisor.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://wondrousdrifter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      wondrousdrifter.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* LEFT IMAGES */}
          <div className="flex flex-col gap-4 w-full order-1 md:order-2">
            <div className="w-full h-[220px] sm:h-[260px] md:h-[310px] bg-gray-200 border-4 border-cyan-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <Image src={bone1} alt="People's Park" className="w-full h-full object-cover" priority/>
            </div>

            <div className="flex gap-4 w-full">
              <div className="w-full h-[180px] sm:h-[220px] md:h-[310px] bg-gray-200 border-4 border-cyan-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src={bone2} alt="People's Park" className="w-full h-full object-cover" priority/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
