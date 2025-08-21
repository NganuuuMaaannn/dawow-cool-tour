"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ataManobo from "../../image/BangsaKagan.jpg";
import ataManobo2 from "../../image/BangsaKagan2.jpg";
import ataManobo3 from "../../image/BangsaKagan3.jpg";

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
              "The tribe showcases the replica of a traditional house of a royal family made of lauan, coco lumber, nipa, and bamboo. The exterior houses have icons and patterns carved by burning a portion of the wood, symbolizing royalty."
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
          <h2 className="text-3xl font-bold mb-4">Bangsa - Kagan</h2>
          <p className="text-lg leading-relaxed text-justify">
            The tribe showcases the replica of a traditional house of a royal family made of lauan, coco lumber, nipa, and bamboo. 
            The exterior houses have icons and patterns carved by burning a portion of the wood, symbolizing royalty.
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
            Also known as Kalagan, a Muslim ethnolinguistic group from Davao and nearby areas. Live along coastal and riverine areas, 
            often engaged in fishing and farming. Their culture blends indigenous roots with Islamic faith, resulting in unique traditions. 
            Speak the Kalagan language, closely related to Tausug and Maguindanaon. Perform Muslim rites such as du&apos;a and zikir 
            integrated with local customs. Wear modest yet colorful clothing, reflecting both Islamic and tribal aesthetics. Their 
            traditional dances feature storytelling and community participation.
          </p>

        </div>
        <div
          className="md:w-1/2 flex justify-center order-1 md:order-2 cursor-pointer"
          onClick={() =>
            openFullscreen(
              ataManobo2.src,
              "Also known as Kalagan, a Muslim ethnolinguistic group from Davao and nearby areas. Live along coastal and riverine areas, often engaged in fishing and farming. Their culture blends indigenous roots with Islamic faith, resulting in unique traditions. Speak the Kalagan language, closely related to Tausug and Maguindanaon. Perform Muslim rites such as du'a and zikir integrated with local customs. Wear modest yet colorful clothing, reflecting both Islamic and tribal aesthetics. Their traditional dances feature storytelling and community participation."
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
              "Governance revolves around elders and religious leaders (Imams). They practice circumcision rituals, marriage customs, and Islamic education. Their cultural identity is less known but integral to Mindanao’s Muslim mosaic. Coastal Heritage – Showcasing their life along the shores of Davao Gulf. Fishing & Maritime Influence – Inspired by their seafaring traditions. Blended Culture – A mix of Islamic faith and indigenous customs. Functional & Sustainable – Homes adapted to coastal living."
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
            Governance revolves around elders and religious leaders (Imams). They practice circumcision rituals, marriage customs, 
            and Islamic education. Their cultural identity is less known but integral to Mindanao’s Muslim mosaic. Coastal Heritage 
            – Showcasing their life along the shores of Davao Gulf. Fishing & Maritime Influence – Inspired by their seafaring 
            traditions. Blended Culture – A mix of Islamic faith and indigenous customs. Functional & Sustainable – Homes adapted to 
            coastal living.
          </p>
        </div>
      </section>
    </>
  );
}
