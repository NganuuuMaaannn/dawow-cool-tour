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
          <h2 className="text-3xl font-bold mb-4">Matigsalog</h2>
          <p className="text-base leading-relaxed text-justify">
            The Matigsalug tribe, an indigenous group in Bukidnon and parts of Davao, is known for their strong cultural identity and deep 
            connection to nature. The name “Matigsalug” means “people of the Salug River,” reflecting their origin and dependence on waterways 
            for survival. Farming is their main livelihood, with corn, rice, and root crops as staples, while hunting and fishing supplement 
            their food resources. The tribe is also skilled in weaving, basketry, and craft-making, which showcase both practicality and artistry. 
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
            Their traditional clothing is decorated with beadwork and colorful patterns, symbolizing their heritage and creativity. Like many 
            Lumad groups, the Matigsalug practice animism, believing in nature spirits and conducting rituals for protection, healing, and 
            thanksgiving. Elders play an important role in preserving oral traditions, folktales, and wisdom that guide the community. Music 
            and dance are also vital aspects of their culture, performed during rituals and gatherings to express unity and joy. Their houses, 
            often made of bamboo and nipa, are simple yet functional, adapted to their environment. 
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
              The Matigsalug also uphold indigenous laws and practices that stress cooperation, respect, and kinship. Despite the pressures of 
              modernization, land issues, and cultural assimilation, they continue to preserve their identity. Participation in cultural events 
              and festivals helps them showcase their heritage to the broader society. Their youth are taught traditional practices to ensure 
              continuity of their culture. The tribe’s resilience lies in their efforts to protect their ancestral lands and way of life. 
              Ultimately, the Matigsalug remain a symbol of cultural pride and survival, representing the enduring traditions of Bukidnon’s 
              indigenous peoples.
          </p>
          <p className="mt-3 text-sm text-white text-justify">
            {fullscreenText}
          </p>
          
          <p className="text-xs text-gray-400 mt-2">
            Tribes in the Philippines. (2018, March 24). Bukidnon: The Matigsalug tribe. Tribes in the Philippines.
            <a
              href="https://tribesinthephilippines.wordpress.com/2018/03/24/bukidnon-the-matigsalug-tribe/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1"
            >
               https://tribesinthephilippines.wordpress.com/2018/03/24/bukidnon-the-matigsalug-tribe/
            </a>
          </p>

        </div>
      </section>
    </>
  );
}
