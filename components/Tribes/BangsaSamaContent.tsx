"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ataManobo from "../../image/BangsaSama.jpg";
import ataManobo2 from "../../image/BangsaSama2.jpg";
import ataManobo3 from "../../image/BangsaSama3.png";

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
              "The tribe is known as the people who live peacefully at sea. One of the new things you can see within their house is the 'Lepa'. It's a type of traditional boat used by Sama tribe during festivals and weddings. The Lepa displayed in their house was given by Vice President Duterte when she was still a mayor. The Lepa she gave was a gift from the people of Tawi-Tawi during their Lepa Festival in 2019."
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
          <h2 className="text-3xl font-bold mb-4">Bangsa - Sama</h2>
          <p className="text-lg leading-relaxed text-justify">
            The tribe is known as the people who live peacefully at sea. One of the new things you can see within their house is 
            the &apos;Lepa&apos;. It&apos;s a type of traditional boat used by Sama tribe during festivals and weddings. The Lepa displayed in 
            their house was given by Vice President Duterte when she was still a mayor. The Lepa she gave was a gift from the people 
            of Tawi-Tawi during their Lepa Festival in 2019.
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
            A seafaring people traditionally found in Tawi-Tawi, Sulu, and coastal Mindanao. Also called Sama-Bajau; some are known 
            as “sea gypsies” for their nomadic lifestyle. Live in stilt houses and boats called lepa-lepa, central to their identity.
            Masterful in fishing, boat-making, and free diving.
          </p>
        </div>
        <div
          className="md:w-1/2 flex justify-center order-1 md:order-2 cursor-pointer"
          onClick={() =>
            openFullscreen(
              ataManobo2.src,
              "A seafaring people traditionally found in Tawi-Tawi, Sulu, and coastal Mindanao. Also called Sama-Bajau; some are known as “sea gypsies” for their nomadic lifestyle. Live in stilt houses and boats called lepa-lepa, central to their identity. Masterful in fishing, boat-making, and free diving."
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
              "Known for the Regatta Festival, showcasing colorful sailboats (vintas). Observe Islam while maintaining indigenous sea rituals and practices. Speak Sama languages, with various dialects across the region. Wear brightly colored garments and woven headscarves. Their dances mimic ocean movements and marine life. Peaceful and resilient, their lifestyle adapts to tides, currents, and cultural tides. Seafaring Traditions – Known as the “people of the sea.” House on Stilts – Elevated design perfect for coastal living. Marine-Inspired Lifestyle – Built with fishing and sea trade in mind. Adaptable Architecture – Resilient against the tides and coastal conditions."
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
            Known for the Regatta Festival, showcasing colorful sailboats (vintas). Observe Islam while maintaining indigenous 
            sea rituals and practices. Speak Sama languages, with various dialects across the region. Wear brightly colored 
            garments and woven headscarves. Their dances mimic ocean movements and marine life. Peaceful and resilient, their 
            lifestyle adapts to tides, currents, and cultural tides. Seafaring Traditions – Known as the “people of the sea.” House on
            Stilts – Elevated design perfect for coastal living. Marine-Inspired Lifestyle – Built with fishing and sea trade in 
            mind. Adaptable Architecture – Resilient against the tides and coastal conditions.
          </p>
        </div>
      </section>
    </>
  );
}
