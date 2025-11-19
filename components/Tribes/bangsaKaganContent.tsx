"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";

// import ataManobo from "@/image/BangsaKagan/BangsaKagan.jpg";
// import ataManobo2 from "@/image/BangsaKagan/BangsaKagan2.jpg";
// import ataManobo3 from "@/image/BangsaKagan/BangsaKagan3.jpg";

import ed1 from "@/image/BangsaKagan/ed1.png";
import ed2 from "@/image/BangsaKagan/ed2.png";
import ed3 from "@/image/BangsaKagan/ed3.png";
import ed4 from "@/image/BangsaKagan/ed4.png";
import ed6 from "@/image/BangsaKagan/ed6.png";
import ed7 from "@/image/BangsaKagan/ed7.png";
import ed8 from "@/image/BangsaKagan/ed8.png";
import ed9 from "@/image/BangsaKagan/ed9.png";
import ed10 from "@/image/BangsaKagan/ed10.png";
import ed11 from "@/image/BangsaKagan/ed11.png";

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
    ed4,
    ed6,
    ed7,
    ed8,
    ed9,
    ed10,
    ed11
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
          onClick={() => openFullscreen(ed1.src)}

        >
          <Image
            src={ed1}
            alt="11 Tribes of Davao City"
            className="rounded-lg shadow-lg object-cover h-auto"
            priority
          />
        </div>
        <div className="md:w-1/2 text-black order-2">
          <h2 className="text-3xl font-bold mb-4">Bangsa - Kagan</h2>
          <p className="text-sm leading-relaxed text-justify">
            The name Kagan comes from allag, meaning light of dawn, referring to the first sunlight that reaches Eastern Mindanao. They were first called Kalagan,
            but it became Kagan because the Spanish could not pronounce it. Whether called Kagan or Kalagan, Muslim or not, they see themselves as one community.
            Their ancestral domains are in Banaybanay, parts of Sumlog River in Lupon, areas in Maco, Mabini, Pantukan (Davao de Oro), Tagum City along Hijo River,
            Padada, Hagonoy, Digos (Davao del Sur), and in Sirawan, Bankerohan, Ma-a, Tigato, Waan, Mandug in Davao City. The Kagan family includes the father, mother,
            and children. The older brother is called itin/kaka, the older sister is be, the uncle is bapa, and the aunt is babo. Their elders are umpo, and the
            grandchildren are makiumpo. The father provides for the family, while the mother, called bya, manages the household.
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
            The Kagan ancestral domain is led by the Sumpadan ng Baraguwa ng Banwa, headed by the Pyagmatikadung (datu) and the datukos (council of elders). When
            conflicts happen, the datu leads the paghusay to restore peace, called Kadayaw or Kanduri. If the offender cannot pay, the datu pays and the offender
            serves the datu. For repeated violations, pyagapapagoy or exile is enforced. The Kagan/ Kalagan wear colorful garments lined with embroidery. The women
            wear the sablay or blouse and dagmay or skirt made of cotton cloth while the men wear binugis or long-sleeved shirt and sawwa or long pants. The Kagan/Kalagan
            mainly earn a living through fishing, building their homes near the sea and using a bangay canoe with a bugsay paddle. They also fish in rivers using
            methods like ngadang with a sapang tool. They are also farmers, hunters, and foragers, and they trade honey, food, and root crops with neighboring groups.
            When food is scarce, they ask for help through pamantiyari or sukat (magsukat), and when they have enough, they share their food even with strangers. The
            Kagan pay tribute to their ancestors and respect the kubur (graveyards). During visits, they perform pagbubu ng kubur. A linsam or tanda (wooden post) is
            placed to identify if the one who rested is male or female—two tanda for female and one tanda for male. Sambayang or worship is a sacred obligation of every
            Kagan done five (5) times a day for spiritual enrichment. Before prayer, ablutions or cleansing are performed as purification. During prayer, women/girls
            are separated from men/boys in the Langgaá (Mosque). The Sambayang is dedicated to Kadunan or Allah for the acceptance of prayers. A ritual or ceremonial
            dedication for a child’s birth for praise and thanksgiving but the duration of its conduct will depend if it is for a man or a woman. Usually performed on
            the seventh (7th) day, but may be done anytime. Offerings include a live goat; prayer is offered to bless the kakana or sundang before incising the neck.
            An umbrella is used to shed the goat, and it is covered with a leaf of banana while being incised. A special supplication is recited before slaughtering.
            Lao or Law is a piece of white cloth attached to a wooden pole at the entrance of the house of the bereaved family. The white cloth signifies the mourning
            period and is placed from the day the person passed away and detached after forty (40) days, or after seven (7) days depending on the family or Baraguwa
            after the ritual called Tammatan.
          </p>
        </div>
        <div
          className="md:w-1/2 flex justify-center order-1 md:order-2 cursor-pointer"
          onClick={() => openFullscreen(ed3.src)}
        >
          <Image
            src={ed3}
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
              A Paglugpad is a way of punishing those who violated Kagan and Islamic laws, aside from the kariduwan (penalty). A settlement is facilitated by the
              Baraguwa ng Banwa to determine the truth and penalty. The public is informed of the kariduwan outside the Masjid or public places, followed by a
              supplication or Du’a. Another prayer is offered before the execution of the Pagbadas (bunal). The Pagbadas or Paglugpad is done by hitting the guilty
              person’s back, and the number of strikes depends on the weight and severity of the violation. A ritual performed during the seventh (7th) day or
              fortieth (40) day inside the house of the deceased. The preliminary rituals are done in the evening with tub and pasarta ng bugas (rice) as offerings,
              and traditional incense is smoked while recitations and prayers are done. The ceremony ends after the noon prayer (duhor - 12:00 noon) with supplications
              and festive offerings of food as thanksgiving. After the ceremony, the Imam and Datu are the first to serve himself a food, followed by others. A ritual
              performed using white chickens. A pagsumbari (to be slaughtered in accordance with Islamic law) is done for every chicken. This ritual asks permission
              from Kadunan or Allah for taking the life of the chicken to help the family or community. For Kagan, taking the life of an animal is subtle if sumbari
              is not done beforehand.
            </p>

            <div className="bg-bgLogin rounded-md mt-3">
              <div className="bg-white p-4 border-l-2 border-blue-500">
                <p className="text-xs text-gray-400 cursor-default">Reference</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2 cursor-default">
                  <li>
                    Mantilla, M. C. A., Tuson, C. A., Lamique, J. K., & Burico, I. M. (2025). Kagan [Photograph]. Magsaysay Park, Davao City, Philippines.
                  </li>
                  <li>
                    Mantilla, M. C. A., Tuson, C. A., Lamique, J. K., & Burico, I. M. (2025). Kagan [Photograph]. Magsaysay Park, Davao City, Philippines.
                  </li>
                  <li>
                    Mantilla, M. C. A., Tuson, C. A., Lamique, J. K., & Burico, I. M. (2025). Kagan [Photograph]. Magsaysay Park, Davao City, Philippines.
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
