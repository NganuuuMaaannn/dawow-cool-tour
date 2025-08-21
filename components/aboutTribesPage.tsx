"use client";

import Image from "next/image";
import aboutTribesPic from "../image/mainpage.jpg";

export default function AboutTribesPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center gap-12 mt-14 lg:mt-15">
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
            <p className="text-lg leading-relaxed text-justify">
              Mindanao, the second-largest island in the Philippines, is home to a rich tapestry of cultures represented by the 11 
              tribes of its indigenous and Moro communities. These tribes include the Ata, Bagobo, Banwaon, B’laan, Dibabawon, 
              Higaonon, Mamanwa, Mandaya, Mangguangan, Manobo, and Matigsalug. Each tribe has its own language, traditions, and way 
              of life, yet they all share a deep connection to their ancestral lands and natural environment.
            </p>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-justify">
              The 11 tribes are known for their colorful attire, vibrant dances, and unique craftsmanship that reflect centuries of 
              cultural heritage. From weaving and beadwork to traditional music and rituals, their practices highlight the diversity 
              and richness of Mindanaoan identity. Despite modernization, these tribes continue to preserve their customs and celebrate 
              them through festivals, rituals, and gatherings that strengthen community bonds.
            </p>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-justify">
              Honoring the 11 tribes of Mindanao is more than a celebration of culture—it is also a recognition of resilience and 
              unity. By keeping their traditions alive, these communities remind us of the importance of cultural preservation and 
              respect for diversity. Their heritage plays a vital role in shaping Mindanao’s identity and contributes to the broader 
              story of the Philippines as a nation of many cultures.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
