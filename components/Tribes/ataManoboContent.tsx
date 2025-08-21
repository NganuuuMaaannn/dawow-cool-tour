"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ataManobo from "../../image/AtaManobo.jpg";
import ataManobo2 from "../../image/AtaManobo2.jpg";
import ataManobo3 from "../../image/AtaManobo3.jpg";

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
              className="rounded-lg shadow-xl object-contain w-full max-h-[30vh] sm:max-h-[70vh]"
              width={800}
              height={600}
            />

            <p className="mt-0 sm:mt-3 text-sm sm:text-base md:text-sm text-white leading-relaxed text-justify">
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
              "The Ata call the house they have constructed inside the tribal village as Binanwa. This is an exact replica of the houses you can find in the Paquibato District in Davao City. Here you can see how authentic and simple their daily living is, especially livelihood products that made them survive every day."
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
          <h2 className="text-3xl font-bold mb-4">Ata Manobo</h2>
          <p className="text-lg leading-relaxed text-justify">
            The Ata call the house they have constructed inside the tribal village as Binanwa. 
            This is an exact replica of the houses you can find in the Paquibato District in Davao City. 
            Here you can see how authentic and simple their daily living is, especially livelihood products 
            that made them survive every day.
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
            Inhabit the highlands of Davao City and Bukidnon, known for their affinity with mountainous landscapes. 
            Their name, Ata, reflects their high-elevation settlement. Organized through kinship ties and led by a Datu, selected via customs of age and status.
            Farming combines slash-and-burn (shifting cultivation) and terraced rice fields. Spiritually guided by a Baylan (healer/diviner) and observance of 
            rituals like panubad, a thanksgiving at planting season’s end. Marriage typically arranged, with bride price and negotiated polygyny under strict terms. 
            Traditional justice through mediation and customary law, including conflict rituals like &apos;sPangayaw&apos;s.
          </p>
          <p className="text-lg leading-relaxed text-justify mt-5">
            Experience cultural and land displacement pressures, often targeted by logging and corporate agriculture. A local community group, LIPI Inc., actively 
            protects their traditions and homeland. Communicate in the Ata-Manobo language (ISO code atd) with around 38,000 speakers; the New Testament was being 
            translated in oral form to preserve their culture.
          </p>
        </div>
        <div
          className="md:w-1/2 flex justify-center order-1 md:order-2 cursor-pointer"
          onClick={() =>
            openFullscreen(
              ataManobo2.src,
              "Inhabit the highlands of Davao City and Bukidnon, known for their affinity with mountainous landscapes. Their name, Ata, reflects their high-elevation settlement. Organized through kinship ties and led by a Datu, selected via customs of age and status. Farming combines slash-and-burn (shifting cultivation) and terraced rice fields. Spiritually guided by a Baylan (healer/diviner) and observance of rituals like panubad, a thanksgiving at planting season’s end. Marriage typically arranged, with bride price and negotiated polygyny under strict terms. Traditional justice through mediation and customary law, including conflict rituals like 'Pangayaw'. Experience cultural and land displacement pressures, often targeted by logging and corporate agriculture. A local community group, LIPI Inc., actively protects their traditions and homeland. Communicate in the Ata-Manobo language (ISO code atd) with around 38,000 speakers; the New Testament was being translated in oral form to preserve their culture."
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
              "Authentic Indigenous Architecture – Handcrafted with bamboo and nipa, reflecting the Ata tribe’s rich cultural heritage. Eco-Friendly & Sustainable – Built from locally sourced, natural materials. Immersive Cultural Experience – Learn about Ata traditions, beliefs, and craftsmanship. Nature-Connected Living Experience fresh air and the soothing sound of nature in this traditional home."
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
            Authentic Indigenous Architecture – Handcrafted with bamboo and nipa, reflecting the Ata tribe’s rich cultural heritage. 
            Eco-Friendly & Sustainable – Built from locally sourced, natural materials. Immersive Cultural Experience – Learn 
            about Ata traditions, beliefs, and craftsmanship. Nature-Connected Living Experience fresh air and the soothing sound of 
            nature in this traditional home.
          </p>
        </div>
      </section>
    </>
  );
}
