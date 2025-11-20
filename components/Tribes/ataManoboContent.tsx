"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";

// import ataManobo from "@/image/AtaManobo/AtaManobo.jpg";
// import ataManobo2 from "@/image/AtaManobo/AtaManobo2.jpg";
import ataManobo3 from "@/image/AtaManobo/AtaManobo3.jpg";

import ed from "@/image/AtaManobo/ed.png";
import ed3 from "@/image/AtaManobo/ed3.png";
import ed5 from "@/image/AtaManobo/ed5.png";
import ed6 from "@/image/AtaManobo/ed6.png";
import ed7 from "@/image/AtaManobo/ed7.png";
import ed14 from "@/image/AtaManobo/ed8.png";
import ed9 from "@/image/AtaManobo/ed9.png";
import ed10 from "@/image/AtaManobo/ed10.png";
import ed11 from "@/image/AtaManobo/ed11.png";
import ed12 from "@/image/AtaManobo/ed12.png";
import ed13 from "@/image/AtaManobo/ed13.png";
import ed8 from "@/image/AtaManobo/ed14.png";

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
    ed,
    ed3,
    ed5,
    ed6,
    ed7,
    ed8,
    ed9,
    ed10,
    ed11,
    ed12,
    ed13,
    ed14
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
          onClick={() => openFullscreen(ed.src)}

        >
          <Image
            src={ed}
            alt="11 Tribes of Davao City"
            className="rounded-lg shadow-lg object-cover h-auto"
            priority
          />
        </div>
        <div className="md:w-1/2 text-black order-2">
          <h2 className="text-3xl font-bold mb-10">Ata Manobo</h2>
          <h2 className="text-lg font-bold mb-2">Profile</h2>
          <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
            - The Ata lived upland along the headwaters of rivers and identified themselves by their place of origin (matig). They were farmers and
            hunter-gatherers. During Spanish colonization, religion was imposed, their baylan were detained, and they moved to higher grounds to defend
            themselves.
          </p>
          <h2 className="text-lg font-bold mt-5 mb-2">Family</h2>
          <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
            - The Ata family includes the father (amoy), mother (inoy), and their children (mgo anak). The father is the head, the mother is the support
            and strength of the home, and the children help both in household and livelihood activities.
          </p>
          <h2 className="text-lg font-bold mt-5 mb-2">Livelihood</h2>
          <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
            - Ibabasuk is the expert in mab-basuk (agriculture) and reads the stars for a successful farming cycle. Neighbors help in the farm through pongakat
            / polusong. Before fishing, they offer tobacco, coins, and mamoon (betel nut) to water spirits gamow-gamow and alimugkat for an abundant catch. Traditional
            fishing methods: duruhong, ooti, panikop, susunob, panung-ow, bobogkoy, wowalag, pamanuwit, durulis.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ease-out delay-200 cursor-default ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
      >
        <div className="md:w-1/2 text-black order-2 md:order-1">
          <h2 className="text-lg font-bold mb-2">Tahakan and Liyang</h2>
          <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
            - The Ata women augment the family income by weaving. With their skillful hands, the sturdy bagtok or wild bamboo is crafted to produce the short takan and the
            longer liyang or storage for farm produce.
          </p>
          <h2 className="text-lg font-bold mt-5 mb-2">Panubad</h2>
          <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
            - The Ata are known for their strong faith in Manama, the supreme being, and the spirits who continuously guide them. Their ancestors and elders teach the
            community to obey Manama’s rules and to respect the guidance of the elders. They communicate with Manama through the panubad, a sacred practice performed with
            deep respect, faith, and devotion, often done before sunset and carried out in several possible ways.
          </p>
          <h2 className="text-lg font-bold mt-5 mb-2">Kalibungan Festival</h2>
          <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
            - The Ata are known for their exceptional faith. They believe that Manama, the supreme being, and the spirits give them guidance. The ancestors and elders teach
            the community to heed the elders and obey the rules of Manama. They communicate with Manama through the panubad, a sacred practice recited with great faith
            and devotion and done in several ways.
          </p>
        </div>
        <div
          className="md:w-1/2 flex justify-center order-1 md:order-2 cursor-pointer"
          onClick={() => openFullscreen(ed3.src)}
        >
          <Image
            src={ed3}
            alt="11 Tribes of Davao City"
            className="rounded-lg shadow-lg object-cover h-[600px]"
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
            onClick={() => openFullscreen(ataManobo3.src)}
          >
            <Image
              src={ataManobo3}
              alt="11 Tribes of Davao City"
              className="rounded-lg shadow-lg object-cover h-auto"
              priority
            />
          </div>

          <div className="md:w-1/2 order-2 md:order-2 flex flex-col mt-5 gap-2 text-black">
            <h2 className="text-lg font-bold mb-2">Sunggod to Kamanga</h2>
            <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
              - The Ibabasuk is the Ata expert in agriculture. He uses the stars and celestial signs like Pandorawa and Balatik (seen in January) to determine the
              start of farming. Before planting, they perform the ritual Sunggud to Kamanga to ask permission from the mountain and forest spirits. They offer a
              pig, a white chicken, and prepare cooked rice in a nihu. Farming tools are placed in the mixture and prayed over by the Tumanuron (traditional priest).
              If many rice grains stick to the tools, it means there will be a good harvest. Another ritual called panluoy is done during the farmers’ first visit
              to the farm before planting.
            </p>

            <div className="bg-bgLogin rounded-md mt-3">
              <div className="bg-white p-4 border-l-2 border-blue-500">
                <p className="text-xs text-gray-400 cursor-default">Reference</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2 cursor-default">
                  <li>
                    Mantilla, M. C. A., Tuson, C. A., Lamique, J. K., & Burico, I. M. (2025). Ata [Photograph]. Magsaysay Park, Davao City, Philippines.
                  </li>
                  <li>
                    Mantilla, M. C. A., Tuson, C. A., Lamique, J. K., & Burico, I. M. (2025). Ata [Photograph]. Magsaysay Park, Davao City, Philippines.
                  </li>
                  <li>
                    Mantilla, M. C. A., Tuson, C. A., Lamique, J. K., & Burico, I. M. (2025). Ata [Photograph]. Magsaysay Park, Davao City, Philippines.
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
