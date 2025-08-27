"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ataManobo from "../../image/maguindanaon.jpg";
import ataManobo2 from "../../image/maguindanaon2.jpg";
import ataManobo3 from "../../image/maguindanaon3.jpg";

export default function Page1() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [fullscreenText, setFullscreenText] = useState<string>("");

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const openFullscreen = (img: string) => {
    setFullscreenImage(img);
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
              className="rounded-lg shadow-xl object-contain w-full max-h-[30vh] sm:max-h-[70vh]"
              width={800}
              height={600}
            />

            <p className="mt-0 sm:mt-3 text-sm sm:text-base md:text-sm text-white leading-relaxed text-justify">
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
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ease-out delay-200 ${
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
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ease-out delay-400 ${
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
          <p className="mt-3 text-sm text-white text-justify">
            {fullscreenText}
          </p>
          
          <p className="text-xs text-gray-400 mt-2">
            Bangsamoro Commission for the Preservation of Cultural Heritage - BARMM. (2022b, November 28). 
            Maguindanaon - Bangsamoro Commission for the Preservation of Cultural Heritage - BARMM.  
            <a
              href="https://bcpch.bangsamoro.gov.ph/maguindanaon/ "
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1"
            >
              https://bcpch.bangsamoro.gov.ph/maguindanaon/ 
            </a>
          </p>

        </div>
      </section>
    </>
  );
}
