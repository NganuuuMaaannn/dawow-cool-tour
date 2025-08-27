"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ataManobo from "../../image/AtaManobo.jpg";
import ataManobo2 from "../../image/AtaManobo2.jpg";
import ataManobo3 from "../../image/AtaManobo3.jpg";

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
          <h2 className="text-3xl font-bold mb-4">Ata Manobo</h2>
          <p className="text-base leading-relaxed text-justify">
            The Ata Manobo tribe, one of the Lumad groups in Mindanao, is recognized for its distinct culture, spirituality, and traditions that are 
            deeply tied to nature. They primarily live in the hinterlands of Davao and Bukidnon, where farming, hunting, and fishing remain their main 
            sources of livelihood. The Ata are known for their animistic beliefs, honoring spirits of the land, rivers, and forests, which they believe 
            protect and guide their communities.
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
            Rituals and ceremonies are central to their lives, often accompanied by chants, prayers, and offerings. Their traditional attire is adorned 
            with colorful beadwork and embroidery that represent their cultural artistry and identity. Music and dance play an important role in their 
            gatherings, using indigenous instruments to celebrate and preserve their heritage. Oral literature such as folktales, chants, and epics also 
            form part of their rich cultural expressions. Despite the growing influence of modernization, the Ata continue to safeguard their ancestral 
            beliefs and practices. To preserve their heritage, the Ata community began building a cultural village that serves as a living museum of 
            their traditions. This village showcases traditional houses, tools, artifacts, and crafts unique to their way of life.
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
              It also provides an educational space for the younger generation to learn and appreciate their roots. At the same time, it serves as a 
              venue for outsiders to understand and respect Ata culture. The initiative reflects the tribe’s resilience and determination to protect 
              their identity despite external challenges. The Ata are also deeply committed to protecting their ancestral domain, which is central to 
              their cultural and spiritual survival. In conclusion, the Ata Manobo tribe embodies strength, creativity, and unity, standing as a proud 
              guardian of their traditions in the modern world.
          </p>
          <p className="mt-3 text-sm text-white text-justify">
            {fullscreenText}
          </p>
          
          <p className="text-xs text-gray-400 mt-2">
            Yodisphere. (2023, September 17). Ata Manobo tribe culture and traditions. 
            <a
              href="https://www.yodisphere.com/2023/09/Ata-Manobo-Tribe-Culture-Traditions.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1"
            >
              https://www.yodisphere.com/2023/09/Ata-Manobo-Tribe-Culture-Traditions.html
            </a>
          </p>

          <p className="text-xs text-gray-400 mt-2">
            SunStar. (2010, May 16). Ata tribe building cultural village to preserve their ways.
            <a
              href="https://www.sunstar.com.ph/more-articles/ata-tribe-building-cultural-village-to-preserve-their-ways"
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1"
            >
               https://www.sunstar.com.ph/more-articles/ata-tribe-building-cultural-village-to-preserve-their-ways
            </a>
          </p>

        </div>
      </section>
    </>
  );
}
