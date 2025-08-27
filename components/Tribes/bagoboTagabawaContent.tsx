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
          <h2 className="text-3xl font-bold mb-4">Bagobo - Tagabawa</h2>
          <p className="text-base leading-relaxed text-justify">
            The Bagobo Tagabawa, one of the subgroups of the Bagobo people in Mindanao, are known for their rich culture, artistry, and deep 
            connection to their ancestral traditions. They inhabit areas in Davao, particularly around Mount Apo, where farming serves as their 
            primary livelihood. The tribe is highly recognized for their intricate weaving, embroidery, and beadwork, which display symbolic 
            patterns and reflect their creativity and identity. Their traditional clothing is distinct, made with vibrant designs that highlight 
            social standing and cultural pride. Music and dance are integral to their rituals, often performed during harvest celebrations, 
            weddings, and community gatherings.
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
            The Bagobo Tagabawa also have strong animistic beliefs, showing reverence to nature and ancestral spirits through ceremonies and 
            offerings. Storytelling, chants, and oral literature are passed down from elders to the youth to preserve wisdom and values. They 
            also practice indigenous laws and codes of conduct that emphasize respect, bravery, and unity. Despite modernization, the tribe 
            continues to value their cultural expressions, incorporating them into festivals such as the Kadayawan Festival in Davao. Their 
            arts and crafts, such as woven fabrics and brass ornaments, are also recognized as important contributions to Mindanao’s 
            cultural heritage. The tribe faces challenges like land encroachment and assimilation pressures, but they strive to safeguard their traditions 
            through education and community initiatives. 
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
              Their resilience is seen in the way they continue teaching the younger generation 
              about traditional dances, farming methods, and spiritual practices. The Bagobo Tagabawa are also deeply tied to Mount Apo, 
              which they regard as sacred, strengthening their bond with nature. Through their collective efforts, the tribe demonstrates 
              cultural strength and adaptability in the modern era. Ultimately, the Bagobo Tagabawa represent a living heritage that 
              highlights the diversity and richness of indigenous Filipino identity.
          </p>
          <p className="mt-3 text-sm text-white text-justify">
            {fullscreenText}
          </p>
          
          <p className="text-xs text-gray-400 mt-2">
            RemigieCoway. (n.d.). BAGOBO TAGABAWA TRIBE presentation-2 [PPTX slides]. SlideShare. Retrieved August 27, 2025, from
            <a
              href="https://www.slideshare.net/slideshow/bagobo-tagabawa-tribe-presentation-2-pptx/275529557"
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1"
            >
               https://www.slideshare.net/slideshow/bagobo-tagabawa-tribe-presentation-2-pptx/275529557
            </a>
          </p>

          <p className="text-xs text-gray-400 mt-2">
            Almerez, J. (n.d.). Bagobo-Tagabawa tribe [PowerPoint slides]. Scribd. Retrieved August 27, 2025, from
            <a
              href="https://www.slideshare.net/slideshow/bagobo-tagabawa-tribe-presentation-2-pptx/275529557"
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1"
            >
               http://www.scribd.com/presentation/466187486/bagobo-tagabawa-tribe
            </a>
          </p>

        </div>
      </section>
    </>
  );
}
