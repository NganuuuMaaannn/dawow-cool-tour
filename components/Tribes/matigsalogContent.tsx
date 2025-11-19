"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";

// import ataManobo from "@/image/Matigsalog/matigsalog.jpg";
import ataManobo2 from "@/image/Matigsalog/matigsalog2.jpg";
// import ataManobo3 from "@/image/Matigsalog/matigsalog3.jpg";

import ed2 from "@/image/Matigsalog/ed2.png";
import ed3 from "@/image/Matigsalog/ed3.png";
import ed4 from "@/image/Matigsalog/ed4.png";
import ed5 from "@/image/Matigsalog/ed5.png";
import ed6 from "@/image/Matigsalog/ed6.png";
import ed7 from "@/image/Matigsalog/ed7.png";
import ed8 from "@/image/Matigsalog/ed8.png";

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
    ed2,
    ed3,
    ed4,
    ataManobo2,
    ed5,
    ed6,
    ed7,
    ed8
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
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 mt-14 transition-all duration-700 ease-out cursor-default ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
      >
        <div
          className="md:w-1/2 flex justify-center order-1 cursor-pointer"
          onClick={() => openFullscreen(ed5.src)}

        >
          <Image
            src={ed5}
            alt="11 Tribes of Davao City"
            className="rounded-lg shadow-lg object-cover h-auto"
            priority
          />
        </div>
        <div className="md:w-1/2 text-black order-2">
          <h2 className="text-3xl font-bold mb-4">Matigsalug</h2>
          <p className="text-sm leading-relaxed text-justify">
            The Matigsalug are the people along the Salug River, originally living in the Pantaron mountain ranges of central Mindanao.
            They named rivers, creeks, mountains, and places after their ancestors. They are typically small in stature, dark brown in
            complexion, and curly-haired. Today, around 50,000 Matigsalug live in the Salug Valley (Kitaotao and San Fernando, Bukidnon),
            recognized as their ancestral domain. The Matigsalug family has a strong kinship with the father as the main decision-maker,
            while the mother plays an important supportive role. The children are expected to respect and follow their parents. They used
            to practice lapowan or arranged marriage, sometimes even from childhood, but this is now rarely practiced because the younger
            generation values love and respect in relationships. The elders now accept these changes, showing cultural sensitivity between
            generations.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ease-out delay-200 cursor-default ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
      >
        <div className="md:w-1/2 text-black order-2 md:order-1">
          <p className="text-sm leading-relaxed text-justify">
            The Matigsalug are known for their distinct and elaborate traditional clothing. Women wear the malalab blouse, ampit skirt with a tabed,
            and accessories like arang, arites, bali-eg, binukol, bulusu, and bobbat. Men wear the binukad with bandera/salu shorts tied with sinalapid,
            and a tangkulo headgear showing leadership. Their binenus beaded sling bag completes their cultural identity. Matigsalug men wear short,
            tight-fitting knee-length pants and beaded turbans with goat/horse hair. Matigsalug women wear mid-length blouses, skirts, and bead strands
            on wooden ear disks. Their clothing is colorfully embroidered with geometric patterns. The Matigsalug rely on agriculture as their primary
            livelihood, planting corn, sweet potato, rice, banana, cassava, and vegetables. Their fertile soil and good climate make crops productive,
            and these products are sold fresh along the Bukidnon-Davao National Road at affordable prices. The Matigsalug rely mainly on farming as their
            livelihood, planting rice, corn, camote, cassava, banana, and fruit trees, with baloloy as their best rice variety. Men prepare seedlings using
            a todak or orak, and grains are pounded through binayo using traditional tools. They also do pangayam or hunting at night with dogs to catch
            deer, wild boar, snake, monkey, monitor lizard, and civet cat.
          </p>
        </div>
        <div
          className="md:w-1/2 flex justify-center order-1 md:order-2 cursor-pointer"
          onClick={() => openFullscreen(ed6.src)}
        >
          <Image
            src={ed6}
            alt="11 Tribes of Davao City"
            className="rounded-lg shadow-lg object-cover w-full max-w-[600px] h-auto"
            priority
          />
        </div>
      </section>

      {/* Section 3 */}
      <section
        className={`max-w-6xl mx-auto px-4 py-12 transition-all duration-700 ease-out delay-400 cursor-default ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
      >
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div
            className="md:w-1/2 flex justify-center cursor-pointer order-1 md:order-1"
            onClick={() => openFullscreen(ed2.src)}
          >
            <Image
              src={ed2}
              alt="11 Tribes of Davao City"
              className="rounded-lg shadow-lg object-cover h-auto"
              priority
            />
          </div>

          <div className="md:w-1/2 order-2 md:order-2 flex flex-col mt-5 gap-2">
            <p className="text-sm leading-relaxed text-justify text-black">
              Their traditional lifestyle is not preserved but still evident in cultural and artistic expression. Kuglung is a two-stringed guitar, and Bantula
              is a bamboo instrument used to call community attention, pounded to produce a loud sound depending on the caller’s intention. During panubad, the
              presence of good spirits is summoned though the ritual called bang-kakawan. It is done by wrapping a huge log with wood stems. This creates a music
              which draws the people’s attention to panubad. Kalibulungan means celebration in Matigsalug. During the Kalibulungan Festival, the dalupo or community
              showcase their rich heritage and give honor to their ancestors. Celebrated every October. Activities include itolан to kabubuyahon (tracing of genealogy),
              panguman (transfer of stories and values), sayew’t keglung wey salurey, uulahingan, tungkuk te ulo, plus indigenous games, and displays and selling of
              traditional arts and crafts. The Matigsalug believes that Magbabaya is their ultimate protector. They invoke Magbabaya’s divine intervention through
              the Panubad or panubadtubad ritual, the highest expression of faith. The babaylan, datuen, or talabawian leads the ritual using panubaran, an altar
              decorated with white, black and red cloths (hinabel ne maangkag, me itum, malalab). Offerings include chicken, tobacco, betel nut, pepper plant, and
              unted te selepi or coins to keep spirits away. Panubad is also done to appease the spirits living in the waters, especially when someone gets sick
              after visiting a river. Sungud or Sungged Te Kamanga is a Matigsalug ritual performed every 2nd day of December to mark the start of the planting season
              where they offer a white chicken and sprinkle its blood on the plants to ask the spirits to protect the land, environment, and crops, expressing gratitude
              and requesting guidance, care, and a fruitful harvest; after the planting season they perform Pasalamat te Mamama as a thanksgiving ceremony for the
              harvest, and they also observe Kalag-kalag to honor the spirits or givers of the harvest, showing the Matigsalug’s deep respect for nature, the land,
              the forest, and the spirits that protect them.
            </p>

            <div className="bg-bgLogin rounded-md mt-3">
              <div className="bg-white p-4 border-l-2 border-blue-500">
                <p className="text-xs text-gray-400 cursor-default">Reference</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2 cursor-default">
                  <li>
                    Mantilla, M. C. A., Tuson, C. A., Lamique, J. K., & Burico, I. M. (2025). Matigsalug [Photograph]. Magsaysay Park, Davao City, Philippines.
                  </li>
                  <li>
                    Mantilla, M. C. A., Tuson, C. A., Lamique, J. K., & Burico, I. M. (2025). Matigsalug [Photograph]. Magsaysay Park, Davao City, Philippines.
                  </li>
                  <li>
                    Mantilla, M. C. A., Tuson, C. A., Lamique, J. K., & Burico, I. M. (2025). Matigsalug [Photograph]. Magsaysay Park, Davao City, Philippines.
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
