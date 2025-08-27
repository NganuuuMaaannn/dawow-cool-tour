"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ataManobo from "../../image/Tribu-Klata.jpg";
import ataManobo2 from "../../image/Tribu-Klata2.jpg";
import ataManobo3 from "../../image/Tribu-Klata3.jpg";

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
          <h2 className="text-3xl font-bold mb-4">Bagobo - Klata</h2>
          <p className="text-base leading-relaxed text-justify">
            The Bagobo Klata, one of the recognized indigenous peoples in Davao City, are known for their rich traditions, colorful attire, 
            and deep spiritual connection to nature. Their traditional practices include farming, weaving, and crafting, which not only provide 
            livelihood but also express their artistry and identity. Rituals and ceremonies play an important role in their community, 
            as these are performed to honor ancestral spirits and natural forces that they believe protect and guide them.
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
            Their traditional clothing, adorned with beads and embroidery, reflects cultural pride and craftsmanship unique to their people. Music 
            and dance are also central to their cultural life, with performances that tell stories of their history and beliefs. Despite the growing 
            influence of modernization and urbanization, the Bagobo Klata remain resilient in maintaining their heritage. They actively teach their 
            youth about customs, values, and traditions to ensure cultural continuity. 
          </p>
          <p className="text-base leading-relaxed text-justify mt-2">
            Community participation in local festivals further strengthens 
            their identity and provides opportunities to share their culture with the wider public. These celebrations often include showcasing 
            traditional dances, music, and crafts that highlight their creativity. Cultural education programs have also been initiated to deepen 
            appreciation of Bagobo Klata heritage among the younger generation. By blending traditional practices with modern lifestyles, the tribe 
            shows adaptability while preserving its authenticity. 
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
              They face challenges such as assimilation pressures and loss of ancestral lands, but their determination keeps their culture alive. 
              Their efforts to safeguard traditions contribute significantly to Davao’s cultural diversity. The Bagobo Klata stand as a proud 
              example of indigenous resilience and pride in the modern world. Ultimately, their culture remains a living testament to the strength 
              of identity, heritage, and unity among indigenous peoples in the Philippines.
          </p>
          <p className="mt-3 text-sm text-white text-justify">
            {fullscreenText}
          </p>
          
          <p className="text-xs text-gray-400 mt-2">
            Albior, A. J. D. (2023, October 2). Bagobo Klata’s culture in the modern world. SunStar Davao.
            <a
              href="https://www.sunstar.com.ph/amp/story/davao/feature/bagobo-klatas-culture-in-the-modern-world"
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1"
            >
              https://www.sunstar.com.ph/amp/story/davao/feature/bagobo-klatas-culture-in-the-modern-world
            </a>
          </p>

        </div>
      </section>
    </>
  );
}
