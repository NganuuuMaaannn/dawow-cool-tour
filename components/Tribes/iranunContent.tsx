"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";

import ataManobo from "@/image/Iranun/iranun.jpg";
import ataManobo2 from "@/image/Iranun/iranun2.jpg";
import ataManobo3 from "@/image/Iranun/iranun3.jpg";

import ed1 from "@/image/Iranun/ed1.png";
import ed2 from "@/image/Iranun/ed2.png";
import ed3 from "@/image/Iranun/ed3.png";
import ed4 from "@/image/Iranun/ed4.png";
import ed5 from "@/image/Iranun/ed5.png";
import ed6 from "@/image/Iranun/ed6.png";
import ed7 from "@/image/Iranun/ed7.png";
import ed8 from "@/image/Iranun/ed8.png";
import ed9 from "@/image/Iranun/ed9.png";

export default function Page1() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [fullscreenText, setFullscreenText] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const CARD_WIDTH = 300;

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const images = [
    ed1,
    ed2,
    ed3,
    ed4,
    ed5,
    ed6,
    ed7,
    ed8,
    ed9,
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const slideLeft = () => {
    if (slideIndex > 0) setSlideIndex(slideIndex - 1);
  };

  const slideRight = () => {
    if (translateX >= maxTranslate) return;
    setSlideIndex(slideIndex + 1);
  };


  const sliderRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);

  useEffect(() => {
    if (!sliderRef.current) return;

    const trackWidth = sliderRef.current.scrollWidth;

    const containerWidth = sliderRef.current.offsetParent
      ? sliderRef.current.offsetParent.clientWidth
      : sliderRef.current.clientWidth;

    const max = trackWidth - containerWidth;

    setMaxTranslate(max > 0 ? max : 0);
  }, [images.length, isDesktop]);

  const translateX = Math.min(slideIndex * CARD_WIDTH, maxTranslate);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const openFullscreen = (img: string) => setFullscreenImage(img);
  const closeFullscreen = () => {
    setFullscreenImage(null);
    setFullscreenText("");
  };

  return (
    <>
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 transition-opacity duration-300 px-4"
          onClick={closeFullscreen}
        >

          {/* Close Button (ALWAYS top-right) */}
          <button
            className="absolute top-4 right-4 bg-bgTour/80 text-white p-3 rounded-full shadow-md hover:bg-hoverTour/80 transition"
            onClick={closeFullscreen}
          >
            <FaTimes size={18} />
          </button>

          <div
            className="relative w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl 
                  flex flex-col items-center p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={fullscreenImage}
              alt="Fullscreen Image"
              className="rounded-lg shadow-xl object-contain w-full max-h-[30vh] sm:max-h-[70vh]"
              width={800}
              height={600}
            />

            <p className="mt-0 sm:mt-3 text-sm sm:text-base md:text-sm text-white leading-relaxed text-justify">
              {fullscreenText}
            </p>
          </div>

        </div>
      )}

      {/* Section 1 */}
      <section
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 mt-14 transition-all duration-700 ease-out cursor-default ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div
          className="md:w-1/2 flex justify-center order-1 cursor-pointer"
          onClick={() => openFullscreen(ataManobo.src)}

        >
          <Image
            src={ataManobo}
            alt="11 Tribes of Davao City"
            className="rounded-lg shadow-lg object-cover h-auto"
            priority
          />
        </div>
        <div className="md:w-1/2 text-black order-2">
          <h2 className="text-3xl font-bold mb-4">Iranun</h2>
          <p className="text-sm leading-relaxed text-justify">
            The Iranun, an ethnolinguistic group in Mindanao, are historically known as seafarers, traders, and warriors whose culture has strongly 
            influenced the Moro identity. Their communities are mainly found in Maguindanao, Lanao del Sur, and parts of Cotabato, where they live 
            close to coastal and riverine areas that sustain their livelihood. Traditionally, the Iranun were skilled in navigation, boat-building, 
            and maritime trade, connecting Mindanao with neighboring regions. They also had a reputation as fierce defenders of their territory, often 
            engaging in sea raids during pre-colonial and colonial times. 
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ease-out delay-200 cursor-default ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="md:w-1/2 text-black order-2 md:order-1">
          <p className="text-sm leading-relaxed text-justify">
            Islam plays a central role in their identity, shaping their values, traditions, and daily practices. Their cultural life includes traditional 
            attire, music, dances, and rituals that reflect both Islamic influences and indigenous heritage. The Iranun speak their own distinct language, 
            which is part of the Austronesian family and closely related to Maguindanaon and Maranao. Farming, fishing, and trading remain important sources 
            of livelihood, though many Iranun have also adapted to modern professions. Oral traditions, epic stories, and genealogies are preserved by 
            elders to pass on wisdom and history to the youth. Their society values kinship, respect, and loyalty, which strengthen communal ties. 
          </p>
        </div>
        <div
          className="md:w-1/2 flex justify-center order-1 md:order-2 cursor-pointer"
          onClick={() => openFullscreen(ataManobo2.src)}
        >
          <Image
            src={ataManobo2}
            alt="11 Tribes of Davao City"
            className="rounded-lg shadow-lg object-cover w-full max-w-[600px] h-auto"
            priority
          />
        </div>
      </section>

      {/* Section 3 */}
      <section
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ease-out delay-400 cursor-default ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div
          className="md:w-1/2 flex justify-center order-1 cursor-pointer"
          onClick={() => openFullscreen(ataManobo3.src)}

        >
          <Image
            src={ataManobo3}
            alt="11 Tribes of Davao City"
            className="rounded-lg shadow-lg object-cover h-auto"
            priority
          />
        </div>
        <div className="md:w-1/2 text-black order-2">
          <p className="text-sm leading-relaxed text-justify">
              The Iranun also uphold artistic expressions such as weaving and brasswork, contributing to Mindanao’s diverse cultural heritage. Despite 
              challenges from displacement, modernization, and assimilation, they remain determined to preserve their cultural identity. Efforts to revitalize 
              traditions are supported by cultural organizations and the BARMM government. Their resilience highlights both pride in their heritage and 
              adaptability to change. Ultimately, the Iranun represent a people whose history, faith, and traditions continue to play a vital role in the 
              cultural fabric of the Bangsamoro region.
          </p>
          
          <div className="bg-bgLogin rounded-md mt-3">
            <div className="bg-white p-4 border-l-2 border-blue-500">
              <p className="text-xs text-gray-400 cursor-default">Reference</p>
              <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2 cursor-default">
                <li>
                  <a
                    href="https://www.facebook.com/photo/?fbid=1064588482546811&set=a.483263987345933"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Kadayawan sa Davao. (2025). Iranun
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.equatorinitiative.org/2020/04/24/solution11483/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Project, J. (n.d.-a). Iranun in Philippines.
                  </a>
                </li>

                <li>
                  <a
                    href="https://bcpch.bangsamoro.gov.ph/iranun/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Bangsamoro Commission for the Preservation of Cultural Heritage - BARMM. (2022, November 28). Iranun - Bangsamoro Commission for the 
                    Preservation of Cultural Heritage - BARMM.
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>


     <section
        className={`max-w-6xl mx-auto px-4 py-12 transition-all duration-700 ease-out delay-500 
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <div className="relative">
          {slideIndex > 0 && (
            <button
              onClick={slideLeft}
              className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 
              bg-bgTour/90 hover:bg-bgTour/80 shadow-xl w-10 h-10 rounded-full z-20 
              items-center justify-center transition active:scale-90"
            >
              <FaChevronLeft className="text-white pr-0" size={18} />
            </button>
          )}

          {translateX < maxTranslate && (
            <button
              onClick={slideRight}
              className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 
              bg-bgTour/90 hover:bg-bgTour/80 shadow-xl w-10 h-10 rounded-full z-20 
              items-center justify-center transition active:scale-90"
            >
              <FaChevronRight className="text-white pl-1" size={18} />
            </button>
          )}

          <div className="overflow-x-auto lg:overflow-hidden w-full scrollbar-none snap-x snap-mandatory whitespace-nowrap">
            <div
              ref={sliderRef}
              className="flex gap-5 transition-transform duration-700 ease-in-out whitespace-nowrap"
              style={{
                transform: isDesktop ? `translateX(-${translateX}px)` : "none"
              }}
            >
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="min-w-[300px] flex-shrink-0 snap-center rounded-2xl hover:scale-[0.97] transition-all cursor-pointer"
                  onClick={() => openFullscreen(img.src)}
                >
                  <Image
                    src={img}
                    alt="Gallery"
                    className="rounded-2xl object-cover w-full h-[200px]"
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
