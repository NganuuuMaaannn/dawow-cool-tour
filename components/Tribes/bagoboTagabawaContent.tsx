"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ataManobo from "../../image/bagoboTagabawa.jpg";
import ataManobo2 from "../../image/bagoboTagabawa2.jpg";
import ataManobo3 from "../../image/bagoboTagabawa3.jpg";

export default function Page1() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [fullscreenText, setFullscreenText] = useState<string>("");

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const openFullscreen = (img: string, text: string) => {
    setFullscreenImage(img);
    setFullscreenText(text);
  };

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
          <div
            className="relative w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl flex flex-col items-center p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={fullscreenImage}
              alt="Fullscreen Image"
              className="rounded-lg shadow-xl object-contain w-full max-h-[60vh] sm:max-h-[70vh]"
              width={800}
              height={600}
            />

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-sm text-white leading-relaxed text-justify">
              {fullscreenText}
            </p>

            <button
              className="absolute lg:top-7 lg:right-7 top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full lg:px-3 lg:py-1 px-3 py-1 text-lg"
              onClick={closeFullscreen}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Section 1 */}
      <section
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 mt-14 transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div
          className="md:w-1/2 flex justify-center order-1 cursor-pointer"
          onClick={() =>
            openFullscreen(
              ataManobo.src,
              "Fun fact this is the tribe that Vice President Sara Duterte represented during the last State of the Nation Address when she wore the traditional clothes of this tribe. The traditional clothes that Duterte wore are displayed on the balcony of their house. When you visit here, you can also try a cup of their tribal coffee for free."
            )
          }
        >
          <Image
            src={ataManobo}
            alt="11 Tribes of Davao City"
            className="rounded-lg shadow-lg object-cover h-auto"
            priority
          />
        </div>
        <div className="md:w-1/2 text-black order-2">
          <h2 className="text-3xl font-bold mb-4">Bagobo - Tagabawa</h2>
          <p className="text-lg leading-relaxed text-justify">
            Fun fact this is the tribe that Vice President Sara Duterte represented during the last State of the Nation 
            Address when she wore the traditional clothes of this tribe. The traditional clothes that Duterte wore are displayed on 
            the balcony of their house. When you visit here, you can also try a cup of their tribal coffee for free.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ease-out delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="md:w-1/2 text-black order-2 md:order-1">
          <p className="text-lg leading-relaxed text-justify">
            A subgroup of the larger Bagobo-Manobo complex, with distinct dialects and cultural traits. Reside around Mount Apo, sharing the 
            Bagobo-Klata region with unique traditions. Display distinctive costumes, dances, and color preferences setting them apart from 
            the Klata. Share rituals involving spirit and ancestor worship, integrated into daily life. Historically practiced headhunting, 
            reformed by colonial influence. Agriculture features rice cultivation interwoven with ceremonial planting rites. Governed through Datu 
            leadership and ritual offerings in cycles of planting and harvest.
          </p>
        </div>
        <div
          className="md:w-1/2 flex justify-center order-1 md:order-2 cursor-pointer"
          onClick={() =>
            openFullscreen(
              ataManobo2.src,
              "A subgroup of the larger Bagobo-Manobo complex, with distinct dialects and cultural traits. Reside around Mount Apo, sharing the Bagobo-Klata region with unique traditions. Display distinctive costumes, dances, and color preferences setting them apart from the Klata. Share rituals involving spirit and ancestor worship, integrated into daily life. Historically practiced headhunting, reformed by colonial influence. Agriculture features rice cultivation interwoven with ceremonial planting rites. Governed through Datu leadership and ritual offerings in cycles of planting and harvest."
            )
          }
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
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ease-out delay-400 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div
          className="md:w-1/2 flex justify-center order-1 cursor-pointer"
          onClick={() =>
            openFullscreen(
              ataManobo3.src,
              "Language and customs risk decline without active cultural transmission. Their identity merges Bagobo heritage with localized Tagabawa distinctions. Classified within the Manobo ethnolinguistic family. Vibrant Cultural Patterns – Traditional clothing and weaving arts displayed in their homes. Highland Life – Architecture adapted to the cool mountain climate. Community Spirit – Spaces built for gatherings and celebrations. Sustainable Building – Crafted from bamboo, wood, and natural fibers."
            )
          }
        >
          <Image
            src={ataManobo3}
            alt="11 Tribes of Davao City"
            className="rounded-lg shadow-lg object-cover h-auto"
            priority
          />
        </div>
        <div className="md:w-1/2 text-black order-2">
          <p className="text-lg leading-relaxed text-justify">
            Language and customs risk decline without active cultural transmission. Their identity merges Bagobo 
            heritage with localized Tagabawa distinctions. Classified within the Manobo ethnolinguistic family. Vibrant 
            Cultural Patterns – Traditional clothing and weaving arts displayed in their homes. Highland Life – 
            Architecture adapted to the cool mountain climate. Community Spirit – Spaces built for gatherings and 
            celebrations. Sustainable Building – Crafted from bamboo, wood, and natural fibers.
          </p>
        </div>
      </section>
    </>
  );
}
