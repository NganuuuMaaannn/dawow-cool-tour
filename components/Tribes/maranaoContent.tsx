"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ataManobo from "../../image/maranao.jpg";
import ataManobo2 from "../../image/maranao2.jpg";
import ataManobo3 from "../../image/maranao3.jpg";

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
          <h2 className="text-3xl font-bold mb-4">Maranao</h2>
          <p className="text-base leading-relaxed text-justify">
            The Maranao people of Lanao del Sur in Mindanao are celebrated for their vibrant culture, rich traditions, and strong Islamic faith. They are known 
            for their iconic Sarimanok, a mythical bird symbolizing good fortune and widely depicted in artwork, textiles, and architecture. The Maranao maintain 
            cultural identity through music, dance, epic storytelling, and elaborate rituals, which reflect both their Islamic faith and ancestral heritage. Their 
            most famous artistic tradition is Okir, a form of intricate geometric and floral design used in woodcarving, textiles, and metalwork.
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
            Okir motifs are featured prominently in torogan houses, traditional ceremonial objects, and clothing, representing spiritual beliefs, social status, 
            and cultural pride. Music and dance accompany rituals, festivals, and celebrations, serving as both entertainment and a medium for cultural expression. 
            Traditional attire often includes richly decorated garments, showcasing skilled embroidery and artistry. The Maranao practice communal living, emphasizing
            kinship, respect, and cooperation, with elders guiding cultural and religious matters. Crafts such as weaving, carving, and embroidery are taught to 
            younger generations to ensure the preservation of skills and traditions. 
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
              Festivals and ceremonies provide opportunities for the community to celebrate and display their cultural wealth. Education, both religious and secular, 
              supports the continuity of their cultural knowledge and Islamic values. Despite modernization and external pressures, the Maranao remain committed to 
              preserving their heritage. Their art and architecture serve as tangible representations of identity and history. Rituals and traditional practices reinforce 
              spiritual devotion while maintaining social cohesion. Overall, the Maranao exemplify a resilient and creative culture that blends artistry, faith, and 
              tradition in contemporary Mindanao.
          </p>
          <p className="mt-3 text-sm text-white text-justify">
            {fullscreenText}
          </p>
          
          <p className="text-xs text-gray-400 mt-2">
            Office, B. I., & Office, B. I. (2022, August 3). Sarimanok rising: The colorful culture of Maranaos - BARMM Official Website. BARMM Official Website - 
            Bangsamoro Autonomous Region in Muslim Mindanao.   
            <a
              href="https://bangsamoro.gov.ph/news/latest-news/sarimanok-rising-the-colorful-culture-of-maranaos/?fbclid=IwY2xjawMZV9tleHRuA2FlbQIxMQABHu5MyDB6jNT9LjS81i7EV_J7-H_OnbuUX2NOPAOJZi4GbRfSqzF_CkNKw__1_aem_fJmLDqJ82bXu3pTFrf6NCw"
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1"
            >
              https://bangsamoro.gov.ph/news/latest-news/sarimanok-rising-the-colorful-culture-of-maranaos/?fbclid=IwY2xjawMZV9tleHRuA2FlbQIxMQABHu5MyDB6jNT9LjS81i7EV_J7-H_OnbuUX2NOPAOJZi4GbRfSqzF_CkNKw__1_aem_fJmLDqJ82bXu3pTFrf6NCw 
            </a>
          </p>

        </div>
      </section>
    </>
  );
}
