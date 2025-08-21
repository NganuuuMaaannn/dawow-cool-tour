"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ataManobo from "../../image/matigsalog.jpg";
import ataManobo2 from "../../image/matigsalog2.jpg";
import ataManobo3 from "../../image/matigsalog3.jpg";

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
              "One of the unique features of their house is how they designed their small windows. It was designed this way because the tribe uses the window to 'ngilam' or to alert themselves to a 'Mangayaw' or person seeking justice. You can also see their weaved bags and some of their indigenous fruits."
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
          <h2 className="text-3xl font-bold mb-4">Matigsalog</h2>
          <p className="text-lg leading-relaxed text-justify">
            One of the unique features of their house is how they designed their small windows. It was designed this way 
            because the tribe uses the window to &apos;ngilam&apos; or to alert themselves to a &apos;Mangayaw&apos; or person seeking justice. 
            You can also see their weaved bags and some of their indigenous fruits.
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
            Literally means “people of the Salug River,” a sector of Bukidnon in Mindanao. Subsist mainly through farming, 
            guided by deep spiritual respect for nature. Preserve their customs through oral storytelling, chants, and 
            traditional justice systems emphasizing restoration. Wear distinctive woven garments such as Tinilogas red blouses 
            with stripes. Men are primary hunters and protectors, sustaining the community. Celebrate nature and community 
            through storytelling that passes down history and values. Engage in balanced agriculture adapted to river ecosystems. 
            Governed through customary processes that prioritize community harmony.
          </p>
        </div>
        <div
          className="md:w-1/2 flex justify-center order-1 md:order-2 cursor-pointer"
          onClick={() =>
            openFullscreen(
              ataManobo2.src,
              "Literally means “people of the Salug River,” a sector of Bukidnon in Mindanao. Subsist mainly through farming, guided by deep spiritual respect for nature. Preserve their customs through oral storytelling, chants, and traditional justice systems emphasizing restoration. Wear distinctive woven garments such as Tinilogas red blouses with stripes. Men are primary hunters and protectors, sustaining the community. Celebrate nature and community through storytelling that passes down history and values. Engage in balanced agriculture adapted to river ecosystems. Governed through customary processes that prioritize community harmony."
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
              "A distinct subgroup of the Manobo cultural family, with unique linguistic traits. Cultural traditions face pressures from development and assimilation. Highland Heritage – Originating from the highlands of Davao, showcasing unique hill tribe architecture. Bamboo & Wood Craftsmanship – Designed with precision and tradition in every detail. Cultural Storytelling – Each structure reflects the tribe’s rich folklore and history. Sustainable Living – Built in harmony with the mountains and forests."
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
            A distinct subgroup of the Manobo cultural family, with unique linguistic traits. Cultural traditions face 
            pressures from development and assimilation. Highland Heritage – Originating from the highlands of Davao, 
            showcasing unique hill tribe architecture. Bamboo & Wood Craftsmanship – Designed with precision and tradition 
            in every detail. Cultural Storytelling – Each structure reflects the tribe’s rich folklore and history.
            Sustainable Living – Built in harmony with the mountains and forests.
          </p>
        </div>
      </section>
    </>
  );
}
