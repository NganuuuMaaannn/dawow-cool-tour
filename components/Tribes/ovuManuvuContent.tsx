"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ataManobo from "../../image/ovuManuvu.jpg";
import ataManobo2 from "../../image/ovuManuvu2.jpg";
import ataManobo3 from "../../image/ovuManuvu3.png";

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
          <h2 className="text-3xl font-bold mb-4">Ovu Manuvu</h2>
          <p className="text-base leading-relaxed text-justify">
            The Obu Manuvu tribe is an indigenous group primarily found in Mindanao, particularly in Davao del Sur and nearby areas. They are 
            known for their rich cultural heritage, traditional knowledge, and strong connection to the environment. The tribe relies heavily 
            on agriculture, cultivating rice, corn, and other staple crops while also practicing small-scale farming and agroforestry. The Obu 
            Manuvu have developed sustainable farming techniques that integrate traditional knowledge with modern environmental practices. 
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
            Their community governance is kinship-based, with elders and leaders guiding decisions that affect social and economic life. Spiritual 
            beliefs combine animism with influences from Christianity in some areas, emphasizing respect for nature and ancestral spirits. Cultural 
            practices include ritual ceremonies, music, dance, and oral storytelling, which preserve history, moral values, and traditions. 
            Traditional attire and crafts reflect their identity and artistry, often featuring handwoven fabrics and symbolic motifs. The tribe is 
            recognized for its efforts in environmental conservation, protecting forests, rivers, and biodiversity through community-based initiatives. 
            Education programs have been introduced to combine formal learning with the preservation of indigenous knowledge.  
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
              The Obu Manuvu actively participate in regional and national initiatives to safeguard cultural and environmental heritage. Festivals 
              and communal activities serve to strengthen social cohesion and intergenerational knowledge transfer. Despite modernization and external 
              pressures, they remain resilient in maintaining their cultural identity. Their practices highlight the importance of sustainability, 
              community solidarity, and cultural pride. Overall, the Obu Manuvu exemplify a harmonious balance between tradition, environmental stewardship, 
              and adaptation to contemporary challenges.
          </p>
          <p className="mt-3 text-sm text-white text-justify">
            {fullscreenText}
          </p>
          
          <p className="text-xs text-gray-400 mt-2">
            Obu manuvu tribe – Equator Initiative. (2020, April 24).
            <a
              href="https://www.equatorinitiative.org/2020/04/24/solution11483/ "
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1"
            >
               https://www.equatorinitiative.org/2020/04/24/solution11483/
            </a>
          </p>

        </div>
      </section>
    </>
  );
}
