"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";

// import ataManobo from "@/image/BagoboTagabawa/bagoboTagabawa.jpg";
// import ataManobo2 from "@/image/BagoboTagabawa/bagoboTagabawa2.jpg";
// import ataManobo3 from "@/image/BagoboTagabawa/bagoboTagabawa3.jpg";

import ed1 from "@/image/BagoboTagabawa/ed1.png";
import ed4 from "@/image/BagoboTagabawa/ed4.png";
import ed5 from "@/image/BagoboTagabawa/ed5.png";
import ed6 from "@/image/BagoboTagabawa/ed6.png";
import ed7 from "@/image/BagoboTagabawa/ed7.png";
import ed8 from "@/image/BagoboTagabawa/ed8.png";
import ed9 from "@/image/BagoboTagabawa/ed9.png";
import ed10 from "@/image/BagoboTagabawa/ed10.png";

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
          onClick={() => openFullscreen(ed9.src)}

        >
          <Image
            src={ed9}
            alt="11 Tribes of Davao City"
            className="rounded-lg shadow-lg object-cover h-[600px]"
            priority
          />
        </div>
        <div className="md:w-1/2 text-black order-2">
          <h2 className="text-3xl font-bold mb-10">Bagobo - Tagabawa</h2>
          <h2 className="text-lg font-bold mb-2">Profile</h2>
          <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
            - The Bagobo-Tagabawa are the first inhabitants of the southern and eastern slopes of Mt. Apo, committed to protecting the mountain’s rich biodiversity.
            Their ancestral domain stretches from Lipadas River (Davao City) to Saguing River (Makilala), including areas in Toril, Sta. Cruz, Digos, Bansalan,
            Kidapawan, and nearby upland and coastal areas.
          </p>
          <h2 className="text-lg font-bold mt-5 mb-2">Family</h2>
          <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
            - The Bagobo-Tagabawa family is patriarchal in nature with the father as the head. It also includes the other relatives who wish to live with them. The
            Bagobo-Tagabawa family observes close family ties and a closer relationship to Manama (God).
          </p>
          <h2 className="text-lg font-bold mt-5 mb-2">Marriage</h2>
          <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
            - For the Bagobo-Tagabawa, marriage is a community responsibility, not just a family matter. Elders from both sides, called togal, meet to decide the
            marriage and agree on the sablag or bride price, which may include horses, carabaos, and a kamag’ge (gold necklace).
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ease-out delay-200 cursor-default ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
      >
        <div className="md:w-1/2 text-black order-2 md:order-1">
          <h2 className="text-lg font-bold mb-2">Bantay Bukid</h2>
          <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
            - The Bagobo-Tagabawa serve as Bantay Bukid or forest guards to protect their ancestral land, especially the home of the Philippine Eagle. Their knowledge
            and strength make them effective stewards of Mt. Apo, helping keep the air and water clean for their people.
          </p>
          <h2 className="text-lg font-bold mt-5 mb-2">Livelihood</h2>
          <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
            - Farming supports the daily needs of the Bagobo-Tagabawa. They grow rice, corn, banana, coffee, cacao, vegetables, and fruits like durian, marang, lanzones,
            rambutan, and mangosteen in the rich volcanic soil of Mt. Apo. They plant rice with corn, and sesame, cassava, and other root crops around the fields. To protect
            health and the environment, they practice organic farming, especially in Brgy. Sibulan, which is declared an organic zone.
          </p>
          <h2 className="text-lg font-bold mt-5 mb-2">Panubadtubad</h2>
          <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
            - Bagobo-Tagabawa is very spiritual. As such, most activities are coupled with rituals and paying attention to signs in the environment. Panubadtubad is one of the
            rituals performed by a Taranitoan (ritualist) seeking guidance from Manama (God) when an activity is undertaken in the community. A white-feathered chicken is often
            slain during the ritual.
          </p>
        </div>
        <div
          className="md:w-1/2 flex justify-center order-1 md:order-2 cursor-pointer"
          onClick={() => openFullscreen(ed4.src)}
        >
          <Image
            src={ed4}
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
            onClick={() => openFullscreen(ed1.src)}
          >
            <Image
              src={ed1}
              alt="11 Tribes of Davao City"
              className="rounded-lg shadow-lg object-cover h-[600px]"
              priority
            />
          </div>

          <div className="md:w-1/2 order-2 md:order-2 flex flex-col mt-5 gap-2 text-black">
            <h2 className="text-lg font-bold mb-2">Arrus Ka Subuwan</h2>
            <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
              - It means the flow of the water, symbolizing continuing life through the grace of Manama. Subuwan/Sibulan signifies the water where ancestors ended
              conflicts with other IP groups. The festival showcases authentic Bagobo-Tagabawa cultures, with each sitio having a booth for local products, and the
              youths lead in educating others about Bagobo-Tagabawa culture and arts.
            </p>
            <h2 className="text-lg font-bold mt-5 mb-2">Dorong Festival</h2>
            <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
              - In Brgy. Kapatagan in Digos City, Davao del Sur, the Dorong Festival is held to give honor or dorong to Manama for blessing Bagobo-Tagabawa leaders
              with wisdom and heart to serve unconditionally. The Dorong Festival is open to other communities in Davao del Sur as a gesture of strengthening peace
              and unity. Dorong is now an attraction in Kapatagan every September.
            </p>
            <h2 className="text-lg font-bold mt-5 mb-2">Sin’abbadan Festival</h2>
            <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
              - The Sin’abban Festival celebrates the oneness of the Bagobo-Tagabawa and gives the ancestors the opportunity to solidify unity with neighboring
              communities. Held in Sta. Cruz, Davao del Sur, and Bagobo-Tagabawa are the leading initiators of the festival. The highlights include indigenous games,
              cuisines, arts and crafts, the playing of musical instruments, and community dancing.
            </p>

            <div className="bg-bgLogin rounded-md mt-3">
              <div className="bg-white p-4 border-l-2 border-blue-500">
                <p className="text-xs text-gray-400 cursor-default">Reference</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2 cursor-default">
                  <li>
                    Mantilla, M. C. A., Tuson, C. A., Lamique, J. K., & Burico, I. M. (2025). Bagobo-Tagabawa.  [Photograph]. Magsaysay Park, Davao City, Philippines.
                  </li>
                  <li>
                    Mantilla, M. C. A., Tuson, C. A., Lamique, J. K., & Burico, I. M. (2025). Bagobo-Tagabawa.  [Photograph]. Magsaysay Park, Davao City, Philippines.
                  </li>
                  <li>
                    Mantilla, M. C. A., Tuson, C. A., Lamique, J. K., & Burico, I. M. (2025). Bagobo-Tagabawa.  [Photograph]. Magsaysay Park, Davao City, Philippines.
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
