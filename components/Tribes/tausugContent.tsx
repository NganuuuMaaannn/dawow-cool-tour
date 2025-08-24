"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ataManobo from "../../image/taosug.jpg";
import ataManobo2 from "../../image/taosug2.jpg";
import ataManobo3 from "../../image/taosug3.jpg";

export default function Page1() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [fullscreenText, setFullscreenText] = useState<string>("");

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const openFullscreen = (img: string, text: string) => {
    setFullscreenImage(img);
    setFullscreenText(text);
  };

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
          <div
            className="relative w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl flex flex-col items-center p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={fullscreenImage}
              alt="Fullscreen Image"
              className="rounded-lg shadow-xl object-contain w-full max-h-[60vh] sm:max-h-[70vh]"
              width={800}
              height={600}
            />

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-sm text-white leading-relaxed text-justify">
              {fullscreenText}
            </p>

            <button
              className="absolute lg:top-7 lg:right-7 top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full lg:px-3 lg:py-1 px-3 py-1 text-lg"
              onClick={closeFullscreen}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Section 1 */}
      <section
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 mt-14 transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div
          className="md:w-1/2 flex justify-center order-1 cursor-pointer"
          onClick={() =>
            openFullscreen(
              ataManobo.src,
              "The main highlight inside their tribal house is the Sultan's Chair. You can take pictures sitting on it while you wear their Batawi, Sablay, and Laphi which are their tribal clothes. On other days, you can also try their delicacies like their famous black soup called 'Tiyula itum'."
            )
          }
        >
          <Image
            src={ataManobo}
            alt="11 Tribes of Davao City"
            className="rounded-lg shadow-lg object-cover h-auto"
            priority
          />
        </div>
        <div className="md:w-1/2 text-black order-2">
          <h2 className="text-3xl font-bold mb-4">Taosug</h2>
          <p className="text-lg leading-relaxed text-justify">
            The main highlight inside their tribal house is the Sultan&apos;s Chair. You can take pictures sitting on it while you 
            wear their Batawi, Sablay, and Laphi which are their tribal clothes. On other days, you can also try their delicacies 
            like their famous black soup called &apos;Tiyula itum&apos;.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ease-out delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="md:w-1/2 text-black order-2 md:order-1">
          <p className="text-lg leading-relaxed text-justify">
            Their name means “People of the Current,” based in the Sulu Archipelago. Historically led the Sultanate of Sulu, a 
            powerful Muslim kingdom. Known for their martial prowess and the indigenous fighting art Kali/Silat. Speak the Tausug language, 
            also used in trade across maritime Southeast Asia. Practice Islam with deep reverence, integrating local customs and royal codes.
            Skilled in weaving, boat-building, and pearling industries. Perform dances like the Pangalay, showcasing grace and balance.
          </p>
        </div>
        <div
          className="md:w-1/2 flex justify-center order-1 md:order-2 cursor-pointer"
          onClick={() =>
            openFullscreen(
              ataManobo2.src,
              "Their name means “People of the Current,” based in the Sulu Archipelago. Historically led the Sultanate of Sulu, a powerful Muslim kingdom. Known for their martial prowess and the indigenous fighting art Kali/Silat. Speak the Tausug language, also used in trade across maritime Southeast Asia. Practice Islam with deep reverence, integrating local customs and royal codes. Skilled in weaving, boat-building, and pearling industries. Perform dances like the Pangalay, showcasing grace and balance."
            )
          }
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
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ease-out delay-400 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div
          className="md:w-1/2 flex justify-center order-1 cursor-pointer"
          onClick={() =>
            openFullscreen(
              ataManobo3.src,
              "Wear the badju and sawal—traditional clothes with elaborate embroidery. Their epic stories, such as the Parang Sabil, honor resistance and bravery. Known for their strong warrior heritage and cultural pride. Pearl of the South Seas – Influenced by Sulu’s rich maritime culture. Colorful & Bold Designs – Reflecting their warrior heritage. Islamic-Inspired Architecture – Elegant patterns and details in every corner. Cultural Pride – A celebration of Tausug bravery, artistry, and faith."
            )
          }
        >
          <Image
            src={ataManobo3}
            alt="11 Tribes of Davao City"
            className="rounded-lg shadow-lg object-cover h-auto"
            priority
          />
        </div>
        <div className="md:w-1/2 text-black order-2">
          <p className="text-lg leading-relaxed text-justify">
            Wear the badju and sawal—traditional clothes with elaborate embroidery. Their epic stories, such as the Parang 
            Sabil, honor resistance and bravery. Known for their strong warrior heritage and cultural pride. Pearl of the South Seas – 
            Influenced by Sulu’s rich maritime culture. Colorful & Bold Designs – Reflecting their warrior heritage. Islamic-Inspired 
            Architecture – Elegant patterns and details in every corner. Cultural Pride – A celebration of Tausug bravery, artistry, and faith.
          </p>
        </div>
      </section>
    </>
  );
}
