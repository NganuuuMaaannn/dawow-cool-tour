"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ataManobo from "../../image/maranao2.jpg";
import ataManobo2 from "../../image/maranao.jpg";
import ataManobo3 from "../../image/maranao3.jpg";

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
              "Maranao of all the tribal houses, their house is filled with antique furniture. You can also find a big weapon known as 'kampilan', a traditional maranao creeper of Sultans and Datus that was passed on from one generation to another. On the second floor, you will see the setup of the beddings of a sultan's daughter or princess of the tribe."
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
          <h2 className="text-3xl font-bold mb-4">Maranao</h2>
          <p className="text-lg leading-relaxed text-justify">
            Of all the tribal houses, their house is filled with antique furniture. You can also find a big weapon known 
            as &apos;kampilan&apos;, a traditional maranao creeper of Sultans and Datus that was passed on from one generation to 
            another. On the second floor, you will see the setup of the beddings of a sultan&apos;s daughter or princess of 
            the tribe.
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
            Known as the “People of the Lake,” living around Lake Lanao in Lanao del Sur. Famous for their torogan houses—royal 
            dwellings adorned with okir carvings. Practice Islam deeply, with sultanates still playing ceremonial roles in governance. 
            Use Darangen, a UNESCO-recognized epic, as a cultural treasure. Highly skilled in weaving langkit and ornamental crafts. 
            Perform the singkil, a traditional dance that dramatizes the Darangen epic. Their architecture, attire, and musical 
            instruments reflect Islamic and native artistry. The Maranao language is widely spoken in Lanao provinces and nearby areas.
          </p>
        </div>
        <div
          className="md:w-1/2 flex justify-center order-1 md:order-2 cursor-pointer"
          onClick={() =>
            openFullscreen(
              ataManobo2.src,
              "Known as the “People of the Lake,” living around Lake Lanao in Lanao del Sur. Famous for their torogan houses—royal dwellings adorned with okir carvings. Practice Islam deeply, with sultanates still playing ceremonial roles in governance. Use Darangen, a UNESCO-recognized epic, as a cultural treasure. Highly skilled in weaving langkit and ornamental crafts. Perform the singkil, a traditional dance that dramatizes the Darangen epic. Their architecture, attire, and musical instruments reflect Islamic and native artistry. The Maranao language is widely spoken in Lanao provinces and nearby areas."
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
              "Language and culture face erosion as youth increasingly lose mastery of Klata. Cultural Masterpiece – Showcasing the unique craftsmanship of the Bagobo tribe. Authentic Design – Made from bamboo and woven nipa, preserving traditional architecture. Cultural Immersion – Discover the tribe’s artistry, weaving, and warm hospitality. Nature-Inspired Living – Blends seamlessly with lush surroundings for a serene escape."
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
            Language and culture face erosion as youth increasingly lose mastery of Klata. Cultural Masterpiece – Showcasing 
            the unique craftsmanship of the Bagobo tribe. Authentic Design – Made from bamboo and woven nipa, preserving 
            traditional architecture. Cultural Immersion – Discover the tribe’s artistry, weaving, and warm hospitality. Nature-Inspired 
            Living – Blends seamlessly with lush surroundings for a serene escape.
          </p>
        </div>
      </section>
    </>
  );
}
