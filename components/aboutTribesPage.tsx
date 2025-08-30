"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import aboutTribesPic from "../image/mainpage.jpg";

export default function AboutTribesPage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <>
      <section 
        className={`max-w-6xl mx-auto px-4 py-12 flex flex-col items-center gap-12 mt-10 lg:mt-14 transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="w-full flex justify-center">
          <Image
            src={aboutTribesPic}
            alt="11 Tribes of Davao City"
            className="rounded-lg shadow-lg object-cover w-full max-w-[1500px] h-auto"
            priority
          />
        </div>

        <div className="w-full text-black grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-base leading-relaxed text-justify">
              Davao, the second largest region in the Philippines located  in Mindanao, is home of 11 indigenous and Moro tribes that 
              reflect a diverse range of heritages. They are the Ata, Bagobo - Klata, Bagobo - Tagabawa, Matigsalug, Obu - Manuvu, Iranun, 
              Kagan, Maguindanaon, Maranao, Sama, and Tausog. Regardless of having diverse languages, practices, and ways of life, all 
              tribes have a strong bond with their ancestors and their environment.
            </p>
          </div>

          <div>
            <p className="text-base leading-relaxed text-justify">
              The 11 tribes are known for their colorful clothing, ravishing textiles, lively dances, and exceptional artistry that makes 
              their heritage pass through generations. Through their traditional music, ritual practices, weaving,  and beadwork, it shows 
              the richness and unique identity of Mindanao. These tribes continued their traditions regardless of modernism, they still 
              celebrate their way of festivals, ceremonies, gatherings that strengthens the relationships between their communities.
            </p>
          </div>

          <div>
            <p className="text-base leading-relaxed text-justify">
              Acknowledging the 11 tribes of Mindanao is more than just appreciating their resilience and solidarity but also learning the 
              ethnicity of Mindanao. These communities serve as a reminder to us of the value of respecting diversity and preserving cultural 
              traditions. Mindanao&apos;s identity is greatly influenced by its heritage, which further contributes to the Philippines&apos; multi-cultural 
              identity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
