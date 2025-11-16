"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";

import ataManobo from "@/image/BangsaSama/BangsaSama.jpg";
import ataManobo2 from "@/image/BangsaSama/BangsaSama2.jpg";
import ataManobo3 from "@/image/BangsaSama/BangsaSama3.png";

import ed3 from "@/image/BangsaSama/ed3.png";
import ed5 from "@/image/BangsaSama/ed5.png";
import ed6 from "@/image/BangsaSama/ed6.png";
import ed7 from "@/image/BangsaSama/ed7.png";
import ed8 from "@/image/BangsaSama/ed8.png";
import ed9 from "@/image/BangsaSama/ed9.png";
import ed10 from "@/image/BangsaSama/ed10.png";
import ed11 from "@/image/BangsaSama/ed11.png";
import ed12 from "@/image/BangsaSama/ed12.png";

export default function Page1() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [fullscreenText, setFullscreenText] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const CARD_WIDTH = 300;

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const images = [
    ed3,
    ed5,
    ed6,
    ed7,
    ed8,
    ed9,
    ed10,
    ed11,
    ed12
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const slideLeft = () => {
    if (slideIndex > 0) setSlideIndex(slideIndex - 1);
  };

  const slideRight = () => {
    if (translateX >= maxTranslate) return;
    setSlideIndex(slideIndex + 1);
  };


  const sliderRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);

  useEffect(() => {
    if (!sliderRef.current) return;

    const trackWidth = sliderRef.current.scrollWidth;

    const containerWidth = sliderRef.current.offsetParent
      ? sliderRef.current.offsetParent.clientWidth
      : sliderRef.current.clientWidth;

    const max = trackWidth - containerWidth;

    setMaxTranslate(max > 0 ? max : 0);
  }, [images.length, isDesktop]);

  const translateX = Math.min(slideIndex * CARD_WIDTH, maxTranslate);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const openFullscreen = (img: string) => setFullscreenImage(img);
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

          {/* Close Button (ALWAYS top-right) */}
          <button
            className="absolute top-4 right-4 bg-bgTour/80 text-white p-3 rounded-full shadow-md hover:bg-hoverTour/80 transition"
            onClick={closeFullscreen}
          >
            <FaTimes size={18} />
          </button>

          <div
            className="relative w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl 
                  flex flex-col items-center p-4 sm:p-6"
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
          </div>

        </div>
      )}

      {/* Section 1 */}
      <section
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 mt-14 transition-all duration-700 ease-out cursor-default ${
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
          <h2 className="text-3xl font-bold mb-4">Bangsa - Sama</h2>
          <p className="text-base leading-relaxed text-justify">
            The Sama people, also called Sama Dilaut or Badjao, are a maritime indigenous community in the southern Philippines, primarily living in the 
            Sulu Archipelago, Tawi-Tawi, and coastal areas of Mindanao. Their culture is closely tied to the sea, as many Sama live in stilt houses along 
            the shore or aboard houseboats called lepa, which they skillfully navigate. Fishing is central to their livelihood, supplemented by small-scale 
            trading, boat-making, and crafts. Music, dance, and oral literature are important cultural expressions, often performed during ceremonies, 
            celebrations, and community gatherings. They practice a combination of Islam and animistic beliefs, showing respect for nature, ancestors, 
            and spiritual forces.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ease-out delay-200 cursor-default ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="md:w-1/2 text-black order-2 md:order-1">
          <p className="text-base leading-relaxed text-justify">
            Traditional crafts, such as weaving mats and creating decorative items, demonstrate both artistry and functionality. Kinship and communal cooperation 
            are key social values, ensuring strong community ties. Elders play a vital role in passing down cultural knowledge, traditions, and storytelling 
            to younger generations. Education and cultural programs help preserve Sama heritage amid modernization and external pressures. Their maritime lifestyle 
            emphasizes adaptability, resilience, and a deep connection to their environment. Rituals, prayers, and festive celebrations are intertwined with daily 
            life, reflecting both spiritual and cultural identity.
          </p>
          <p className="text-base leading-relaxed text-justify mt-2">
            Clothing, music, and crafts often symbolize social roles, personal achievements, and communal status. Despite challenges such as displacement, poverty, 
            and cultural assimilation, the Sama maintain pride in their traditions. They continue to participate in cultural preservation programs and festivals to 
            share their heritage with wider communities. Overall, the Sama people exemplify a unique maritime culture that reflects resilience, creativity, and the 
            richness of Philippine indigenous heritage.
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
        className={`max-w-6xl mx-auto px-4 py-12 transition-all duration-700 ease-out delay-400 cursor-default ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div
            className="md:w-1/2 flex justify-center cursor-pointer order-1 md:order-1"
            onClick={() => openFullscreen(ataManobo3.src)}
          >
            <Image
              src={ataManobo3}
              alt="11 Tribes of Davao City"
              className="rounded-lg shadow-lg object-cover h-auto"
              priority
            />
          </div>

          <div className="md:w-1/2 order-2 md:order-2 flex flex-col mt-5 gap-2">
            <p className="text-base leading-relaxed text-justify text-black">
              The Sama, also called Isamal or Samalnon, are recognized as the original inhabitants of the Samal Islands (now Island Garden City of Samal) in Davao Gulf. Oral 
              traditions recount their early struggles with invaders, which eventually led to the loss of much of their ancestral land and waters. They wear modest clothing, 
              with women in patadyong skirts and men in black pants or shorts. Governance is guided by customary laws upheld by the datu, assisted by the bagani, balyan, and 
              emissaries, with community members (kaupodanan) playing a vital role in leadership. As a seafaring people, fishing remains their main livelihood, supplemented 
              by farming rice, root crops, and fruits, as well as gathering forest products. True to their values of fairness, fishing and hunting catches are equally shared 
              among the community.
            </p>

            <div className="bg-bgLogin rounded-md mt-3">
              <div className="bg-white p-4 border-l-2 border-blue-500">
                <p className="text-xs text-gray-400 cursor-default">Reference</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2 cursor-default">
                  <li>
                    <a
                      href="https://www.facebook.com/photo?fbid=1062991546039838&set=a.483263987345933"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Kadayawan sa Davao. (2025). Bangsa - Sama
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://ncca.gov.ph/about-culture-and-arts/culture-profile/glimpses-peoples-of-the-philippines/sama/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      National Commission for Culture and the Arts. (n.d.). Peoples of the Philippines: Sama. In Glimpses: Peoples of the Philippines. Retrieved August 25, 2025
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        className={`max-w-6xl mx-auto px-4 py-12 transition-all duration-700 ease-out delay-500 
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <div className="relative">
          {slideIndex > 0 && (
            <button
              onClick={slideLeft}
              className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 
              bg-bgTour/90 hover:bg-bgTour/80 shadow-xl w-10 h-10 rounded-full z-20 
              items-center justify-center transition active:scale-90"
            >
              <FaChevronLeft className="text-white pr-0" size={18} />
            </button>
          )}

          {translateX < maxTranslate && (
            <button
              onClick={slideRight}
              className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 
              bg-bgTour/90 hover:bg-bgTour/80 shadow-xl w-10 h-10 rounded-full z-20 
              items-center justify-center transition active:scale-90"
            >
              <FaChevronRight className="text-white pl-1" size={18} />
            </button>
          )}

          <div className="overflow-x-auto lg:overflow-hidden w-full scrollbar-none snap-x snap-mandatory whitespace-nowrap">
            <div
              ref={sliderRef}
              className="flex gap-5 transition-transform duration-700 ease-in-out whitespace-nowrap"
              style={{
                transform: isDesktop ? `translateX(-${translateX}px)` : "none"
              }}
            >
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="min-w-[300px] flex-shrink-0 snap-center rounded-2xl hover:scale-[0.97] transition-all cursor-pointer"
                  onClick={() => openFullscreen(img.src)}
                >
                  <Image
                    src={img}
                    alt="Gallery"
                    className="rounded-2xl object-cover w-full h-[200px]"
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
