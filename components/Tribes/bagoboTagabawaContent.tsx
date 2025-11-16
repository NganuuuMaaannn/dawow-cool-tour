"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";

import ataManobo from "@/image/BagoboTagabawa/bagoboTagabawa.jpg";
import ataManobo2 from "@/image/BagoboTagabawa/bagoboTagabawa2.jpg";
import ataManobo3 from "@/image/BagoboTagabawa/bagoboTagabawa3.jpg";

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
          <h2 className="text-3xl font-bold mb-4">Bagobo - Tagabawa</h2>
          <p className="text-sm leading-relaxed text-justify">
            The Bagobo Tagabawa, one of the subgroups of the Bagobo people in Mindanao, are known for their rich culture, artistry, and deep
            connection to their ancestral traditions. They inhabit areas in Davao, particularly around Mount Apo, where farming serves as their
            primary livelihood. The tribe is highly recognized for their intricate weaving, embroidery, and beadwork, which display symbolic
            patterns and reflect their creativity and identity. Their traditional clothing is distinct, made with vibrant designs that highlight
            social standing and cultural pride. Music and dance are integral to their rituals, often performed during harvest celebrations,
            weddings, and community gatherings. The Bagobo Tagabawa also have strong animistic beliefs, showing reverence to nature and ancestral
            spirits through ceremonies and offerings. Storytelling, chants, and oral literature are passed down from elders to the youth to preserve
            wisdom and values. They also practice indigenous laws and codes of conduct that emphasize respect, bravery, and unity.
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
            Despite modernization, the tribe continues to value their cultural expressions, incorporating them into festivals such as the Kadayawan Festival
            in Davao. Their arts and crafts, such as woven fabrics and brass ornaments, are also recognized as important contributions to Mindanao’s
            cultural heritage. The tribe faces challenges like land encroachment and assimilation pressures, but they strive to safeguard their traditions
            through education and community initiatives. Their resilience is seen in the way they continue teaching the younger generation
            about traditional dances, farming methods, and spiritual practices. The Bagobo Tagabawa are also deeply tied to Mount Apo,
            which they regard as sacred, strengthening their bond with nature. Through their collective efforts, the tribe demonstrates
            cultural strength and adaptability in the modern era. Ultimately, the Bagobo Tagabawa represent a living heritage that
            highlights the diversity and richness of indigenous Filipino identity.
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
              The Bagobo-Tagabawa, known as the “people of the south,” are the earliest settlers on the slopes of Mt. Apo, which they regard as sacred and feel
              responsible for protecting. Their ancestral lands span Davao City, North Cotabato, and nearby areas. They practice a patriarchal family system and
              view marriage as a community affair arranged by elders, with a sablag or bride price. Their clothing, woven from abaca fibers and dyed with natural
              pigments, reflects artistry and cultural memory. The Bagobo-Tagabawa are also known as Bantay Bukid (forest guardians), protecting Mt. Apo and the
              Philippine Eagle. Farming is their main livelihood, producing rice, corn, cacao, coffee, and tropical fruits, alongside organic farming to ensure
              sustainability.
            </p>

            <div className="bg-bgLogin rounded-md mt-3">
              <div className="bg-white p-4 border-l-2 border-blue-500">
                <p className="text-xs text-gray-400 cursor-default">Reference</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2 cursor-default">
                  <li>
                    <a
                      href="https://www.facebook.com/photo/?fbid=1067079842297675&set=a.483263987345933"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Kadayawan sa Davao. (2025). Bagobo - Tagabawa
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.slideshare.net/slideshow/bagobo-tagabawa-tribe-presentation-2-pptx/275529557"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      RemigieCoway. (n.d.). BAGOBO TAGABAWA TRIBE presentation-2 [PPTX slides]. SlideShare. Retrieved August 27, 2025
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.slideshare.net/slideshow/bagobo-tagabawa-tribe-presentation-2-pptx/275529557"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Almerez, J. (n.d.). Bagobo-Tagabawa tribe [PowerPoint slides]. Scribd. Retrieved August 27, 2025
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
