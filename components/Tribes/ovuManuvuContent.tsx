"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";

// import ataManobo from "@/image/OvuManuvu/ovuManuvu.jpg";
// import ataManobo2 from "@/image/OvuManuvu/ovuManuvu2.jpg";
// import ataManobo3 from "@/image/OvuManuvu/ovuManuvu3.png";

import ed1 from "@/image/OvuManuvu/ed1.png";
import ed3 from "@/image/OvuManuvu/ed3.png";
import ed4 from "@/image/OvuManuvu/ed4.png";
import ed5 from "@/image/OvuManuvu/ed5.png";
import ed6 from "@/image/OvuManuvu/ed6.png";
import ed7 from "@/image/OvuManuvu/ed7.png";
import ed8 from "@/image/OvuManuvu/ed8.png";
import ed9 from "@/image/OvuManuvu/ed9.png";
import ed10 from "@/image/OvuManuvu/ed10.png";
import ed11 from "@/image/OvuManuvu/ed11.png";
import ed12 from "@/image/OvuManuvu/ed12.png";
import ed13 from "@/image/OvuManuvu/ed13.png";
import ed14 from "@/image/OvuManuvu/ed14.png";
import ed15 from "@/image/OvuManuvu/ed15.png";
import ed16 from "@/image/OvuManuvu/ed16.png";

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
    ed11,
    ed12,
    ed13,
    ed14,
    ed15,
    ed16
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
          onClick={() => openFullscreen(ed3.src)}

        >
          <Image
            src={ed3}
            alt="11 Tribes of Davao City"
            className="rounded-lg shadow-lg object-cover h-[600px]"
            priority
          />
        </div>
        <div className="md:w-1/2 text-black order-2">
          <h2 className="text-3xl font-bold mb-10">Ovu Manuvu</h2>
          <h2 className="text-lg font-bold mb-2">Profile</h2>
          <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
            - Manuvu/Monuvu means “person” and may also come from mansuba, meaning “river people.” The Obo-Manuvu formed through intermarriages among neighboring
            groups and are related to the Manuvu of southern Bukidnon, northern Cotabato, and northwestern Davao, which is why their language is similar. They were
            also among the first traders in the mountain areas of Davao.
          </p>
          <p className="text-sm leading-relaxed mt-2 text-justify ml-0 sm:ml-0 lg:ml-5">
            - The Monuvu, a sub-tribe of the Bagobo, live in the highlands north of Tammuhan River and west of Davao River. Their ancestral domains are mainly in
            Marilog and Baguio Districts of Davao City, including areas like Dalag Lumot, Salaysay, Marilog Proper, Malamba, Suawan, Tamugan, Tambobong, Carmen,
            Tawantawan, Malagos, Gumalang, and parts of Arakan Valley.
          </p>
          <h2 className="text-lg font-bold mt-5 mb-2">Minonuvo No Boyo To Od Possopong-Ngoy</h2>
          <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
            - The Minonuvo No Boyo To Od Possopong-Ngoy is the highest governing body of the Obu-Manuvu, where all decisions and policies come from. It is made up of
            leaders and elders of the entire ancestral domain. Their rules follow pooviyan woy gontangan, meaning proper procedure and standards, which guide the
            Obu-Manuvu ancestral domain.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ease-out delay-200 cursor-default ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
      >
        <div className="md:w-1/2 text-black order-2 md:order-1">
          <h2 className="text-lg font-bold mb-2">Clothing</h2>
          <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
            - Obu-Manuvu women wear a colorful top with an ampit skirt and tabod, and adorn themselves with beads, earrings, necklace, bracelets, and anklets. Men wear a
            binukad blazer with souwan molivutut and sinalapid belt, and may use a tanku headgear with horse hair to show leadership.
          </p>
          <h2 className="text-lg font-bold mt-5 mb-2">Livelihood</h2>
          <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
            - The Obu-Manuvu enjoy and depend on the natural resources given by Magbabaya, as their culture and way of life are deeply tied to the land. They are skilled
            farmers, planting various crops, and also fish in the Tamugan and Davao Rivers. They practice hunting during Pongannop, often with a trained mohoruwag no
            tuyyang dog to catch sarong (deer) and mohintownan no baboy (wild pig) and usa (wild deer).
          </p>
          <h2 className="text-lg font-bold mt-5 mb-2">Sumaya</h2>
          <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
            - Sumaya is a ritual offering to God done to ask for help to end plagues and epidemic and to ensure a good and bountiful harvest. It can also be performed
            before starting important acts, such as the crafting of this Book that narrates the life of the indigenous peoples. It shows their faith and dependence on
            God during challenges and significant activities.
          </p>
        </div>
        <div
          className="md:w-1/2 flex justify-center order-1 md:order-2 cursor-pointer"
          onClick={() => openFullscreen(ed16.src)}
        >
          <Image
            src={ed16}
            alt="11 Tribes of Davao City"
            className="rounded-lg shadow-lg object-cover h-[550px]"
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
            onClick={() => openFullscreen(ed5.src)}
          >
            <Image
              src={ed5}
              alt="11 Tribes of Davao City"
              className="rounded-lg shadow-lg object-cover h-[550px]"
              priority
            />
          </div>

          <div className="md:w-1/2 order-2 md:order-2 flex flex-col mt-5 gap-2 text-black">
            <h2 className="text-lg font-bold mb-2">Panuvad</h2>
            <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
              - Panuvad is a ritual asking Magbabaya and the spirits for guidance, healing, and protection. A respected elder or healer performs it using chicken,
              tobacco, betel nut, and pepper plant as offerings. The moon and constellations guide decisions on farming and marriage arrangements. Panuvad is done
              before and after farming to ask permission from spirits and ensure a good harvest of crops like rice, corn, cassava, sweet potato, coffee, and abaca.
            </p>
            <h2 className="text-lg font-bold mt-5 mb-2">Allow to Obu Manuvu</h2>
            <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
              - The Allow Tu Obu-Manuvu is a yearly thanksgiving celebration where the Obu-Manuvu show gratitude to Monama by gathering and sharing their bountiful
              harvest. The event includes dances, instrument playing, and games as part of the festivities.
            </p>
            <h2 className="text-lg font-bold mt-5 mb-2">Pokaa’t Kollu/Sunggod to Kamanga</h2>
            <p className="text-sm leading-relaxed text-justify ml-0 sm:ml-0 lg:ml-5">
              - Pokaa’t kollu/sunggod to kamanga is a January 1 festival honoring Kaya’g to Pomuwa, where farm tools are displayed and included in the ritual. Music
              is the highlight, with women playing the Kagoo, and when they play while dancing, it is called Soroy.
            </p>

            <div className="bg-bgLogin rounded-md mt-3">
              <div className="bg-white p-4 border-l-2 border-blue-500">
                <p className="text-xs text-gray-400 cursor-default">Reference</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2 cursor-default">
                  <li>
                    <a
                      href="https://www.facebook.com/share/p/1VrkdUJXnq/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Department of Tourism - Davao Region. (2025).
                    </a>
                  </li>

                  <li>
                    Mantilla, M. C. A., Tuson, C. A., Lamique, J. K., & Burico, I. M. (2025). Obu- Manuvu [Photograph]. Magsaysay Park, Davao City, Philippines.
                  </li>
                  <li>
                    Mantilla, M. C. A., Tuson, C. A., Lamique, J. K., & Burico, I. M. (2025). Obu- Manuvu [Photograph]. Magsaysay Park, Davao City, Philippines.
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
