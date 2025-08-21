"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ataManobo from "../../image/ovuManuvu.jpg";
import ataManobo2 from "../../image/ovuManuvu2.jpg";
import ataManobo3 from "../../image/ovuManuvu3.webp";

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
              "Here you can see the setup of their Datu's beddings. Aside from that you can also rent and wear their traditional clothing while taking pictures inside their house. You can also play their traditional instruments like the agong and kulintangan."
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
          <h2 className="text-3xl font-bold mb-4">Ovu Manuvu</h2>
          <p className="text-lg leading-relaxed text-justify">
            Here you can see the setup of their Datu&apos;s beddings. Aside from that you can also rent and wear their traditional 
            clothing while taking pictures inside their house. You can also play their traditional instruments like the agong and kulintangan.
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
            A blend of Bagobo Klata and Bagobo Tagabawa heritage, living in river valleys and hills. Practice reverence for the Philippine 
            eagle under a cultural framework called Pusaka. Worship animistic spirits and ancestral entities through rituals that sustain 
            community and environment. Skilled in farming crops like cacao, cassava, sweet potato, and rice.
          </p>
          <p className="text-lg leading-relaxed text-justify mt-5">
            Celebrate dances such as Asik, accompanied by gongs, drums, and communal movement. Their marriage includes ritual head-knocking 
            and dowry traditions. Utilize ancestral justice and community-healing practices. Culturally honored by having a newly discovered 
            beetle species named after them. Maintain animistic spirituality, ancestral veneration, and oral culture.
          </p>
        </div>
        <div
          className="md:w-1/2 flex justify-center order-1 md:order-2 cursor-pointer"
          onClick={() =>
            openFullscreen(
              ataManobo2.src,
              "A blend of Bagobo Klata and Bagobo Tagabawa heritage, living in river valleys and hills. Practice reverence for the Philippine eagle under a cultural framework called Pusaka. Worship animistic spirits and ancestral entities through rituals that sustain community and environment. Skilled in farming crops like cacao, cassava, sweet potato, and rice. Celebrate dances such as Asik, accompanied by gongs, drums, and communal movement. Their marriage includes ritual head-knocking and dowry traditions. Utilize ancestral justice and community-healing practices. Culturally honored by having a newly discovered beetle species named after them. Maintain animistic spirituality, ancestral veneration, and oral culture."
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
              "Artistic & Symbolic Designs – Intricate patterns and motifs that tell the story of their ancestors. Warm & Welcoming Space – A home that mirrors the hospitality of the Ovu Manuvu people. Heritage Preservation – A living testament to their identity and traditions. Natural Harmony – Crafted from materials that embrace the environment."
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
            Artistic & Symbolic Designs – Intricate patterns and motifs that tell the story of their ancestors. Warm & 
            Welcoming Space – A home that mirrors the hospitality of the Ovu Manuvu people. Heritage Preservation – A 
            living testament to their identity and traditions. Natural Harmony – Crafted from materials that embrace the environment.
          </p>
        </div>
      </section>
    </>
  );
}
