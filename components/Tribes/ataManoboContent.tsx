"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";

import ataManobo from "@/image/AtaManobo/AtaManobo.jpg";
import ataManobo2 from "@/image/AtaManobo/AtaManobo2.jpg";
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
          <h2 className="text-3xl font-bold mb-4">Ata Manobo</h2>
          <p className="text-sm leading-relaxed text-justify">
            The Ata Manobo tribe, one of the Lumad groups in Mindanao, is recognized for its distinct culture, spirituality, and traditions that are
            deeply tied to nature. They primarily live in the hinterlands of Davao and Bukidnon, where farming, hunting, and fishing remain their main
            sources of livelihood. The Ata are known for their animistic beliefs, honoring spirits of the land, rivers, and forests, which they believe
            protect and guide their communities. Rituals and ceremonies are central to their lives, often accompanied by chants, prayers, and offerings.
            Their traditional attire is adorned with colorful beadwork and embroidery that represent their cultural artistry and identity. Music and dance
            play an important role in their gatherings, using indigenous instruments to celebrate and preserve their heritage. Oral literature such as
            folktales, chants, and epics also form part of their rich cultural expressions.
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
            Despite the growing influence of modernization, the Ata continue to safeguard their ancestral
            beliefs and practices. To preserve their heritage, the Ata community began building a cultural village that serves as a living museum of
            their traditions. This village showcases traditional houses, tools, artifacts, and crafts unique to their way of life. It also provides
            an educational space for the younger generation to learn and appreciate their roots. At the same time, it serves as a venue for outsiders
            to understand and respect Ata culture. The initiative reflects the tribe’s resilience and determination to protect their identity despite
            external challenges. The Ata are also deeply committed to protecting their ancestral domain, which is central to their cultural and
            spiritual survival. In conclusion, the Ata Manobo tribe embodies strength, creativity, and unity, standing as a proud guardian of their
            traditions in the modern world.
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

          <div className="md:w-1/2 order-2 md:order-2 flex flex-col mt-5 gap-2">
            <p className="text-sm leading-relaxed text-justify text-black">
              The Ata-Manobo, whose ancestors once roamed the Pantaron Mountain Range
              and settled in areas like Kapalong, Bukidnon, and Davao del Norte, are
              known for their distinct appearance and diverse lifestyles, from
              riverside living to isolation in the forests. Despite being feared for
              their role in tribal wars to defend their ancestral lands, they are also
              approachable and community-oriented. Guided by palabian woy gontangan
              (customary laws), they uphold kinship and early marriage traditions,
              though modern influences are gradually reshaping family choices. The
              bagani play a vital role as leaders, protectors, and mediators, earning
              deep respect within their society. Ata-Manobo clothing is colorful and
              symbolic, with women wearing kinabo or konoman and men adorned with
              tangkulo headpieces symbolizing power. Farming remains their main
              livelihood, producing rice, corn, bananas, cassava, and other crops,
              while they also gather forest products, fish, and hunt. Their resilience
              reflects a balance between cultural heritage and adapting to modern
              challenges.
            </p>

            <div className="bg-bgLogin rounded-md mt-3">
              <div className="bg-white p-4 border-l-2 border-blue-500">
                <p className="text-xs text-gray-400 cursor-default">Reference</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2 cursor-default">
                  <li>
                    <a
                      href="https://www.facebook.com/photo/?fbid=1063798645959128&set=a.483263987345933"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Kadayawan sa Davao. (2025). Ata Manobo
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.yodisphere.com/2023/09/Ata-Manobo-Tribe-Culture-Traditions.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Yodisphere. (2023, September 17). Ata Manobo tribe culture and traditions.
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.sunstar.com.ph/more-articles/ata-tribe-building-cultural-village-to-preserve-their-ways"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      SunStar. (2010, May 16). Ata tribe building cultural village to preserve their ways.
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
