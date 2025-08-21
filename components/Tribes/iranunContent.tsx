"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ataManobo from "../../image/iranun.jpg";
import ataManobo2 from "../../image/iranun2.jpg";
import ataManobo3 from "../../image/iranun3.jpg";

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
              "Inside their house, you can have a close look at their 'Iroan', a traditional weaving machine that is commonly used by Iranun in creating their fabric textile called 'Inaol'. Aside from that, they have also displayed their version of 'Kampilan' a traditional weapon used by sultans and datu of the tribe."
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
          <h2 className="text-3xl font-bold mb-4">Iranun</h2>
          <p className="text-lg leading-relaxed text-justify">
            Inside their house, you can have a close look at their &apos;Iroan&apos;, a traditional weaving machine that is commonly used 
            by Iranun in creating their fabric textile called &apos;Inaol&apos;. Aside from that, they have also displayed their version 
            of &apos;Kampilan&apos; a traditional weapon used by sultans and datu of the tribe.
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
            Reside in parts of Lanao del Sur and Maguindanao; culturally close to Maranao and Maguindanaon. Historically fierce 
            warriors and seafarers, known for defending their territories. Speak the Iranun language, sharing linguistic roots 
            with Maranao. It was part of the Sultanate of Maguindanao, contributing to its military strength. Islamic faith is 
            central, guiding daily life, rituals, and social structure. Known for epic chants and genealogy recitations, preserving 
            oral traditions. Crafts include brass-making and weapon forging, especially kris blades.
          </p>
        </div>
        <div
          className="md:w-1/2 flex justify-center order-1 md:order-2 cursor-pointer"
          onClick={() =>
            openFullscreen(
              ataManobo2.src,
              "Reside in parts of Lanao del Sur and Maguindanao; culturally close to Maranao and Maguindanaon. Historically fierce warriors and seafarers, known for defending their territories. Speak the Iranun language, sharing linguistic roots with Maranao. It was part of the Sultanate of Maguindanao, contributing to its military strength. Islamic faith is central, guiding daily life, rituals, and social structure. Known for epic chants and genealogy recitations, preserving oral traditions. Crafts include brass-making and weapon forging, especially kris blades."
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
              "Observe Islamic holidays and Ranao traditions, including sacred pilgrimages. Proud of their maritime heritage and resistance to colonial incursions. Actively preserve tribal customs through education and local leadership. Naval Heritage – Skilled boat builders and navigators of Mindanao waters. Islamic Cultural Roots – Embodying faith and tradition in design. Warrior Legacy – History of bravery and resistance. Functional Coastal Homes – Designed for both land and sea living."
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
            Observe Islamic holidays and Ranao traditions, including sacred pilgrimages. Proud of their maritime 
            heritage and resistance to colonial incursions. Actively preserve tribal customs through education and 
            local leadership. Naval Heritage – Skilled boat builders and navigators of Mindanao waters. Islamic 
            Cultural Roots – Embodying faith and tradition in design. Warrior Legacy – History of bravery and resistance.
            Functional Coastal Homes – Designed for both land and sea living.
          </p>
        </div>
      </section>
    </>
  );
}
