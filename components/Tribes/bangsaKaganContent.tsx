"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ataManobo from "../../image/BangsaKagan.jpg";
import ataManobo2 from "../../image/BangsaKagan2.jpg";
import ataManobo3 from "../../image/BangsaKagan3.jpg";

export default function Page1() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [fullscreenText, setFullscreenText] = useState<string>("");

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const openFullscreen = (img: string) => {
    setFullscreenImage(img);
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
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 mt-14 transition-all duration-700 ease-out cursor-default ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
          <h2 className="text-3xl font-bold mb-4">Bangsa - Kagan</h2>
          <p className="text-sm leading-relaxed text-justify">
            The Kagan are an indigenous group in Davao who have largely embraced Islam, blending their ancestral customs with Islamic beliefs and practices. 
            They primarily inhabit the highlands of Davao, where farming and small-scale trading form the backbone of their livelihoods. The Kagan maintain 
            traditional practices, such as ritual ceremonies and communal gatherings, while integrating Islamic teachings into their daily lives. Their 
            spiritual life includes prayers, observance of Islamic holidays, and respect for both ancestral spirits and Allah. Music, dance, and oral 
            literature continue to play an important role in preserving their culture. Traditional attire, often adorned with local designs, is worn during 
            significant events and ceremonies, reflecting both heritage and religious identity. The Kagan are known for their close-knit communities, where 
            kinship, cooperation, and mutual respect are highly valued. 
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ease-out delay-200 cursor-default ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="md:w-1/2 text-black order-2 md:order-1">
          <p className="text-sm leading-relaxed text-justify">
            Leadership is typically guided by elders and community councils, which oversee cultural 
            and religious matters. They face challenges such as cultural assimilation, land disputes, and the pressures of modernization, but continue to uphold 
            their identity. Education and cultural programs have been introduced to help preserve their language, traditions, and practices. The Kagan also participate 
            in regional events that highlight their culture, allowing them to showcase their unique heritage to a wider audience. Their cuisine, crafts, and agricultural 
            techniques reflect both their indigenous roots and Islamic influence. Through resilience and adaptability, the Kagan maintain a balance between tradition 
            and contemporary life. Younger generations are taught both religious teachings and traditional customs to ensure continuity. Overall, the Kagan represent a 
            vibrant example of cultural fusion, demonstrating how indigenous communities can preserve their identity while embracing new influences.
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
        className={`max-w-6xl mx-auto px-4 py-12 transition-all duration-700 ease-out delay-400 cursor-default ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
            The Kagan, originally called Kalagan from the word allag (“light of dawn”), are an indigenous group whose ancestral homeland is in Banaybanay, Davao Oriental, 
            with communities spread across Davao de Oro, Davao del Norte, Davao del Sur, and Davao City. They follow a patriarchal family system, with the father as provider 
            and the mother managing the home, and their governance is led by a Pyagmatikadung (datu) and a council of elders who settle disputes through traditional practices.
            Known for their embroidered attire—women in sablay blouses and dagmay skirts, and men in binugis shirts and sawwa pants—the Kagan rely mainly on fishing but also 
            farm, hunt, and trade with neighboring groups. They uphold strong values of kinship, community harmony, and generosity, as seen in practices like magsukat, where 
            food is shared or requested between communities in times of scarcity.
            </p>
          
            <div className="bg-bgLogin rounded-md mt-3">
              <div className="bg-white p-4 border-l-2 border-blue-500">
                <p className="text-xs text-gray-400 cursor-default">Reference</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2 cursor-default">
                  <li>
                    <a
                      href="https://www.facebook.com/photo/?fbid=1061438989528427&set=a.483263987345933"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Kadayawan sa Davao. (2025). Bangsa - Kagan.
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.sunstar.com.ph/amp/story/more-articles/kagan-the-islamized-davao-natives?fbclid=IwY2xjawMZV9VleHRuA2FlbQIxMQABHoSE-Tjaf2sEEr_E87XmKY3bUulZRfnkE1xFaCTzBvJ3hh5qeSYm5be4QUPM_aem_CmMEvG6r51iOLXgpyvdyvg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Sunnexdesk. (2017, September 3). Kagan: The Islamized Davao natives. SunStar Publishing Inc.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>  
        </div>
      </section>
    </>
  );
}
