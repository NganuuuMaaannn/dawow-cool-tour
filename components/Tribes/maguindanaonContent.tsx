"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";

import ataManobo from "@/image/Maguindanaon/maguindanaon.jpg";
import ataManobo2 from "@/image/Maguindanaon/maguindanaon2.jpg";
import ataManobo3 from "@/image/Maguindanaon/maguindanaon3.jpg";

import ed1 from "@/image/Maguindanaon/ed1.png";
import ed4 from "@/image/Maguindanaon/ed4.png";
import ed5 from "@/image/Maguindanaon/ed5.png";
import ed6 from "@/image/Maguindanaon/ed6.png";
import ed7 from "@/image/Maguindanaon/ed7.png";
import ed8 from "@/image/Maguindanaon/ed8.png";
import ed9 from "@/image/Maguindanaon/ed9.png";
import ed10 from "@/image/Maguindanaon/ed10.png";
import ed11 from "@/image/Maguindanaon/ed11.png";
import ed12 from "@/image/Maguindanaon/ed12.png";

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
    ed4,
    ed5,
    ed6,
    ed7,
    ed8,
    ed9,
    ed10,
    ed11,
    ed12
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
          <h2 className="text-3xl font-bold mb-4">Maguindanaon</h2>
          <p className="text-base leading-relaxed text-justify">
            The Maguindanaon people are a major Muslim group in Mindanao, primarily residing in Maguindanao, Cotabato, and surrounding areas, known for their 
            rich cultural heritage and Islamic traditions. They have a strong connection to agriculture, especially rice cultivation, and rely on river systems 
            for fishing and transportation. Social structure is organized around datus, elders, and kinship networks, emphasizing cooperation, respect, and 
            community cohesion. Islam plays a central role in guiding their daily life, rituals, and celebrations. Music, dance, and oral literature are important 
            cultural expressions, often performed during weddings, festivals, and religious ceremonies. 
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
          <p className="text-base leading-relaxed text-justify">
            Traditional attire is adorned with intricate embroidery and symbolic patterns that reflect social status and heritage. The Maguindanaon are skilled in 
            crafts such as weaving, woodcarving, and brasswork, many of which feature Okir designs symbolizing harmony, spirituality, and identity. Their houses, 
            especially traditional structures, are decorated with these intricate patterns, showcasing artistry and cultural pride. Education, both religious and 
            secular, is valued for preserving knowledge and skills among the younger generation. Festivals and communal events provide platforms to celebrate cultural 
            achievements and strengthen identity. Rituals, prayers, and traditional practices reinforce both Islamic faith and indigenous customs.
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
          <p className="text-base leading-relaxed text-justify">
              Despite modernization and external pressures, they actively maintain language, traditions, and craftsmanship. Their cultural expressions demonstrate 
              resilience, creativity, and continuity across generations. Participation in cultural programs and preservation initiatives ensures that heritage remains 
              vibrant. Overall, the Maguindanaon people exemplify a harmonious blend of artistry, spirituality, and social cohesion that continues to thrive in the 
              Bangsamoro region.
          </p>
          
          <div className="bg-bgLogin rounded-md mt-3">
            <div className="bg-white p-4 border-l-2 border-blue-500">
              <p className="text-xs text-gray-400 cursor-default">Reference</p>
              <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2 cursor-default">
                <li>
                  <a
                    href="https://www.facebook.com/photo/?fbid=1066245692381090&set=a.483263987345933"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Kadayawan sa Davao. (2025). Maguindanaon
                  </a>
                </li>

                <li>
                  <a
                    href="https://bcpch.bangsamoro.gov.ph/maguindanaon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Bangsamoro Commission for the Preservation of Cultural Heritage - BARMM. (2022b, November 28). 
                    Maguindanaon - Bangsamoro Commission for the Preservation of Cultural Heritage - BARMM.
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
