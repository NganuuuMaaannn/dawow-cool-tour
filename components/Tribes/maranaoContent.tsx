"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";

import ataManobo from "@/image/Maranao/maranao.jpg";
import ataManobo2 from "@/image/Maranao/maranao2.jpg";
import ataManobo3 from "@/image/Maranao/maranao3.jpg";

import ed1 from "@/image/Maranao/ed1.png";
import ed2 from "@/image/Maranao/ed2.png";
import ed3 from "@/image/Maranao/ed3.png";
import ed5 from "@/image/Maranao/ed5.png";
import ed6 from "@/image/Maranao/ed6.png";
import ed7 from "@/image/Maranao/ed7.png";
import ed8 from "@/image/Maranao/ed8.png";
import ed9 from "@/image/Maranao/ed9.png";
import ed10 from "@/image/Maranao/ed10.png";

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
    ed1,
    ed2,
    ed3,
    ed5,
    ed6,
    ed7,
    ed8,
    ed9,
    ed10
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
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ease-out delay-200 cursor-default ${
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
              Festivals and ceremonies provide opportunities for the community to celebrate and display their cultural wealth. Education, both religious and secular, 
              supports the continuity of their cultural knowledge and Islamic values. Despite modernization and external pressures, the Maranao remain committed to 
              preserving their heritage. Their art and architecture serve as tangible representations of identity and history. Rituals and traditional practices reinforce 
              spiritual devotion while maintaining social cohesion. Overall, the Maranao exemplify a resilient and creative culture that blends artistry, faith, and 
              tradition in contemporary Mindanao.
            </p>
          
            <div className="bg-bgLogin rounded-md mt-3">
              <div className="bg-white p-4 border-l-2 border-blue-500">
                <p className="text-xs text-gray-400 cursor-default">Reference</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2 cursor-default">
                  <li>
                    <a
                      href="https://www.facebook.com/photo/?fbid=1067855145553478&set=a.483263987345933"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Kadayawan sa Davao. (2025). Maranao
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://bangsamoro.gov.ph/news/latest-news/sarimanok-rising-the-colorful-culture-of-maranaos/?fbclid=IwY2xjawMZV9tleHRuA2FlbQIxMQABHu5MyDB6jNT9LjS81i7EV_J7-H_OnbuUX2NOPAOJZi4GbRfSqzF_CkNKw__1_aem_fJmLDqJ82bXu3pTFrf6NCw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Office, B. I., & Office, B. I. (2022, August 3). Sarimanok rising: The colorful culture of Maranaos - BARMM Official Website. BARMM Official Website - 
                      Bangsamoro Autonomous Region in Muslim Mindanao.
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
