"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";

// import ataManobo from "@/image/BagoboKlata/Tribu-Klata.jpg";
// import ataManobo2 from "@/image/BagoboKlata/Tribu-Klata2.jpg";
// import ataManobo3 from "@/image/BagoboKlata/Tribu-Klata3.jpg";

import ed1 from "@/image/BagoboKlata/ed1.png";
import ed3 from "@/image/BagoboKlata/ed3.png";
import ed4 from "@/image/BagoboKlata/ed4.png";
import ed5 from "@/image/BagoboKlata/ed5.png";
import ed6 from "@/image/BagoboKlata/ed6.png";
import ed7 from "@/image/BagoboKlata/ed7.png";
import ed8 from "@/image/BagoboKlata/ed8.png";
import ed9 from "@/image/BagoboKlata/ed9.png";
import ed10 from "@/image/BagoboKlata/ed10.png";

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
    ed3,
    ed4,
    ed5,
    ed6,
    ed7,
    ed8,
    ed9,
    ed10,
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
          <h2 className="text-3xl font-bold mb-4">Bagobo - Klata</h2>
          <p className="text-sm leading-relaxed text-justify">
            Klata means “vein” or “life,” from olat meaning “middle.” They were the original inhabitants of the west part of the Davao River’s mouth, a place
            fit for trading. They also use klat-ang (bamboo stairs with one post). Removing the stairs means no one is home or for safety at night. The klat-ang
            is important to their identity, so they call themselves “wielders of life stairs.” Their territory is north of Davao River, south of Lipadas River,
            stretching to the boundary of North Cotabato and Davao City. It includes Manuel Guianga, Sirib, Tamayong, Tugbok, and Calinan Districts in Davao City.
            Appu Rita is a cultural master naw-woh weaver who helped preserve Bagobo-Klata arts, weaving thousands of meters of fabric for special occasions. Men
            wear saluwah ngo naw-woh and luk-ko lae, while women wear tawis ngo naw-woh and lokolebo, with bak kus, simple earrings, shell bracelet, and salole
            head décor.
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
            These ancestral possessions are priceless and made of tambaga, a mineral second to gold. The maog is a bell used by the talatubad during child baptism,
            dipped in water then wiped on the child’s forehead. The low-wok is a mortar and pestle for preparing betel nuts, while the lomma is a war weapon, and the
            kunggi is a tool for cutting betel nuts. Their main livelihood is farming, growing crops like sweet potato, cassava, corn, upland rice, and banana, and now
            prioritizing durian, cacao, and coffee which made Davao City known internationally. They practice organic farming and also do fishing and hunting as part
            of their living and pastime. The marriage ritual starts with asking the gwata for consent. The tribal priest (talakasa/talatab’bad) prepares the tabba, where
            the bride and groom stand face-to-face. Offerings are placed in the buwis, followed by a prayer for blessing and protection. The priest addresses the god of
            the baliti tree and the spirits in rocks and stones to avoid harming the couple, especially the groom (called kollapu, meaning stranger).
          </p>
        </div>
        <div
          className="md:w-1/2 flex justify-center order-1 md:order-2 cursor-pointer"
          onClick={() => openFullscreen(ed4.src)}
        >
          <Image
            src={ed4}
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
            onClick={() => openFullscreen(ed8.src)}
          >
            <Image
              src={ed8}
              alt="11 Tribes of Davao City"
              className="rounded-lg shadow-lg object-cover h-auto"
              priority
            />
          </div>

          <div className="md:w-1/2 order-2 md:order-2 flex flex-col mt-5 gap-2">
            <p className="text-sm leading-relaxed text-justify text-black">
              Maog is a bell placed in the middle finger by the talatubad (ritualist) doing the baptism of a child. The bell is being dipped into the water that is on
              a marble plate then it will be wiped on the forehead of the child. The Agong called lom-ming is the star of festivals. The tagonggo is a set of lom-ming
              arranged according to tones. The Menum Festival is done annually and lasts nine days to two weeks with drinking, dancing, singing, and lom-ming playing.
              Festivals are held after harvest with family heads, male players, and maiden dancers attending. The girls wear their best attire to show gratitude to
              the god of harvest and serve food and wine.
            </p>

            <div className="bg-bgLogin rounded-md mt-3">
              <div className="bg-white p-4 border-l-2 border-blue-500">
                <p className="text-xs text-gray-400 cursor-default">Reference</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2 cursor-default">
                  <li>
                    <a
                      href="https://www.nomadicexperiences.com/2019/10/a-taste-of-maa-to-ros-bagobo-klata.htm3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      A taste of Maa to Ro’s Bagobo-Klata heritage cuisine. (2019, October 11). Nomadic Experiences.
                    </a>
                  </li>

                  <li>
                    Mantilla, M. C. A., Tuson, C. A., Lamique, J. K., & Burico, I. M. (2025). Bagobo-Klata [Photograph]. Magsaysay Park, Davao City, Philippines.
                  </li>
                  <li>
                    Mantilla, M. C. A., Tuson, C. A., Lamique, J. K., & Burico, I. M. (2025). Bagobo-Klata [Photograph]. Magsaysay Park, Davao City, Philippines.
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
