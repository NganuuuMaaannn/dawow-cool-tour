"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ataManobo from "../../image/iranun.jpg";
import ataManobo2 from "../../image/iranun2.jpg";
import ataManobo3 from "../../image/iranun3.jpg";

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
          <h2 className="text-3xl font-bold mb-4">Iranun</h2>
          <p className="text-base leading-relaxed text-justify">
            The Iranun, an ethnolinguistic group in Mindanao, are historically known as seafarers, traders, and warriors whose culture has strongly 
            influenced the Moro identity. Their communities are mainly found in Maguindanao, Lanao del Sur, and parts of Cotabato, where they live 
            close to coastal and riverine areas that sustain their livelihood. Traditionally, the Iranun were skilled in navigation, boat-building, 
            and maritime trade, connecting Mindanao with neighboring regions. They also had a reputation as fierce defenders of their territory, often 
            engaging in sea raids during pre-colonial and colonial times. 
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
            Islam plays a central role in their identity, shaping their values, traditions, and daily practices. Their cultural life includes traditional 
            attire, music, dances, and rituals that reflect both Islamic influences and indigenous heritage. The Iranun speak their own distinct language, 
            which is part of the Austronesian family and closely related to Maguindanaon and Maranao. Farming, fishing, and trading remain important sources 
            of livelihood, though many Iranun have also adapted to modern professions. Oral traditions, epic stories, and genealogies are preserved by 
            elders to pass on wisdom and history to the youth. Their society values kinship, respect, and loyalty, which strengthen communal ties. 
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
              The Iranun also uphold artistic expressions such as weaving and brasswork, contributing to Mindanao’s diverse cultural heritage. Despite 
              challenges from displacement, modernization, and assimilation, they remain determined to preserve their cultural identity. Efforts to revitalize 
              traditions are supported by cultural organizations and the BARMM government. Their resilience highlights both pride in their heritage and 
              adaptability to change. Ultimately, the Iranun represent a people whose history, faith, and traditions continue to play a vital role in the 
              cultural fabric of the Bangsamoro region.
          </p>
          <p className="mt-3 text-sm text-white text-justify">
            {fullscreenText}
          </p>
          
          <p className="text-xs text-gray-400 mt-2">
            Bangsamoro Commission for the Preservation of Cultural Heritage - BARMM. (2022, November 28). Iranun - Bangsamoro Commission for the 
            Preservation of Cultural Heritage - BARMM.
            <a
              href="https://bcpch.bangsamoro.gov.ph/iranun/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1"
            >
              https://bcpch.bangsamoro.gov.ph/iranun/
            </a>
          </p>

          <p className="text-xs text-gray-400 mt-2">
            Project, J. (n.d.-a). Iranun in Philippines. 
            <a
              href="https://www.equatorinitiative.org/2020/04/24/solution11483/ "
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1"
            >
              https://joshuaproject.net/people_groups/12209/RP 
            </a>
          </p>

        </div>
      </section>
    </>
  );
}
