"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ataManobo from "../../image/maguindanaon.jpg";
import ataManobo2 from "../../image/mainpage.jpg";
import ataManobo3 from "../../image/maguindanaon3.jpg";

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
              "Here you can see the typical beddings of a newlywed Maguindanaon. The interior of the house is decorated with how they design houses for every gathering, feast, and especially a wedding. One of the unique features of the house is the intricate design of their 'Likos', a Maguindanaon women's cloth intricately made with different colors and designs, it is commonly designed with different types of beads."
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
          <h2 className="text-3xl font-bold mb-4">Maguindanaon</h2>
          <p className="text-lg leading-relaxed text-justify">
            Here you can see the typical beddings of a newlywed Maguindanaon. The interior of the house is decorated with how 
            they design houses for every gathering, feast, and especially a wedding. One of the unique features of the house 
            is the intricate design of their &apos;Likos&apos;, a Maguindanaon women&apos;s cloth intricately made with different colors and 
            designs, it is commonly designed with different types of beads.
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
            Predominantly Muslim and known for their rich royal heritage and Islamic traditions. Live primarily in the province 
            of Maguindanao and parts of Central Mindanao. Famous for their kulintang music, an ancient musical tradition using gongs. 
            Traditionally governed by sultanates and councils of elders. Skilled in brassware, weaving, and boat-making, showcasing 
            refined craftsmanship. Observe Islamic festivals such as Ramadhan, Eid al-Fitr, and Eid al-Adha. Use the Maguindanaon 
            language, part of the Austronesian family. Wear elegant malong and inaul fabric, often handwoven with royal patterns.
          </p>
        </div>
        <div
          className="md:w-1/2 flex justify-center order-1 md:order-2 cursor-pointer"
          onClick={() =>
            openFullscreen(
              ataManobo2.src,
              "Predominantly Muslim and known for their rich royal heritage and Islamic traditions. Live primarily in the province of Maguindanao and parts of Central Mindanao. Famous for their kulintang music, an ancient musical tradition using gongs. Traditionally governed by sultanates and councils of elders. Skilled in brassware, weaving, and boat-making, showcasing refined craftsmanship. Observe Islamic festivals such as Ramadhan, Eid al-Fitr, and Eid al-Adha. Use the Maguindanaon language, part of the Austronesian family. Wear elegant malong and inaul fabric, often handwoven with royal patterns."
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
              "Storytelling, epics, and chants like the 'Darangen' preserve their oral history. Their culture reflects a fusion of Islamic influence and indigenous heritage. Majestic Cultural Influence – Known for vibrant colors and elegant designs. Architectural Elegance – Inspired by centuries-old Islamic artistry. Cultural Legacy – Experience the deep-rooted traditions of Mindanao royalty. Rich Symbolism – Every detail reflects spiritual and cultural significance."
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
            Storytelling, epics, and chants like the &apos;Darangen&apos; preserve their oral history. Their culture reflects a fusion of 
            Islamic influence and indigenous heritage. Majestic Cultural Influence – Known for vibrant colors and elegant designs. 
            Architectural Elegance – Inspired by centuries-old Islamic artistry. Cultural Legacy – Experience the deep-rooted 
            traditions of Mindanao royalty. Rich Symbolism – Every detail reflects spiritual and cultural significance.
          </p>
        </div>
      </section>
    </>
  );
}
