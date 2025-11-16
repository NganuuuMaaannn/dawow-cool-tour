"use client";

import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

import food from "@/image/food.jpg";
import eagle from "@/image/eagle.jpg";
import accom from "@/image/ac.jpg";
import tour from "@/image/tg.jpg";
import event from "@/image/ea1.jpg";
  
export default function ExperienceDavao() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleClick = () => {
    setTimeout(() => {
      router.push("/Kadayawan-E-Village");
    }, 600);
  };

  return (
    <main
      className={`relative flex flex-col lg:flex-row w-full min-h-screen overflow-hidden transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Back Button */}
      <button
        onClick={handleClick}
        className="absolute top-5 left-5 z-20 bg-bgTour hover:bg-hoverTour text-black rounded-full p-3 shadow-lg hover:scale-110 transition-transform"
      >
        <FaArrowLeft color="white" size={18} />
      </button>

      {/* Panel 1 - Food */}
      <div 
        onClick={() => router.push("/experience-davao/food-page")} 
        className="relative flex-1 flex items-center justify-center overflow-hidden group transition-all duration-700 ease-in-out hover:lg:flex-[1.5] min-h-[50vh] lg:min-h-screen"
      >
        <Image
          src={food}
          alt="Food"
          fill
          className="object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-red-500/80 mix-blend-multiply"></div>
        <h2 className="absolute text-white font-semibold tracking-wide z-10 select-none text-2xl sm:text-5xl md:text-5xl 
                       lg:rotate-[-90deg] lg:bottom-20 lg:right-2 
                       bottom-10 right-1/2 translate-x-1/2 lg:translate-x-0">
          Foods
        </h2>
      </div>

      {/* Panel 2 - Attractions */}
      <div
        onClick={() => router.push("/experience-davao/attraction-page")} 
        className="relative flex-1 flex items-center justify-center overflow-hidden group transition-all duration-700 ease-in-out hover:lg:flex-[1.5] min-h-[50vh] lg:min-h-screen"
      >
        <Image
          src={eagle}
          alt="Attractions"
          fill
          className="object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-cyan-500/80 mix-blend-multiply"></div>
        <h2 className="absolute text-white font-semibold tracking-wide z-10 select-none text-2xl sm:text-5xl md:text-5xl 
                       lg:rotate-[-90deg] lg:bottom-36 lg:-right-16 
                       bottom-10 right-1/2 translate-x-1/2 lg:translate-x-0">
          Attractions
        </h2>
      </div>

      {/* Panel 3 - Accommodation */}
      <div
        onClick={() => router.push("/experience-davao/accommodation-page")} 
        className="relative flex-1 flex items-center justify-center overflow-hidden group transition-all duration-700 ease-in-out hover:lg:flex-[1.5] min-h-[50vh] lg:min-h-screen"
      >
        <Image
          src={accom}
          alt="Accommodation"
          fill
          className="object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-bgTour mix-blend-multiply"></div>
        <h2 className="absolute text-white font-semibold tracking-wide z-10 select-none text-2xl sm:text-5xl md:text-5xl 
                       lg:rotate-[-90deg] lg:bottom-52 lg:-right-32 
                       bottom-10 right-1/2 translate-x-1/2 lg:translate-x-0">
          Accommodation
        </h2>
      </div>

      {/* Panel 4 - Tour Guides */}
      <div
        onClick={() => router.push("/experience-davao/tour-guide-page")} 
        className="relative flex-1 flex items-center justify-center overflow-hidden group transition-all duration-700 ease-in-out hover:lg:flex-[1.5] min-h-[50vh] lg:min-h-screen"
      >
        <Image
          src={tour}
          alt="Tour Guides"
          fill
          className="object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-yellow-300 mix-blend-multiply"></div>
        <h2 className="absolute text-white font-semibold tracking-wide z-10 select-none text-2xl sm:text-5xl md:text-5xl 
                       lg:rotate-[-90deg] lg:bottom-40 lg:-right-20 
                       bottom-10 right-1/2 translate-x-1/2 lg:translate-x-0">
          Tour Guides
        </h2>
      </div>

      {/* Panel 5 - Events & Activities */}
      <div
        onClick={() => router.push("/experience-davao/event-activities-page")} 
        className="relative flex-1 flex items-center justify-center overflow-hidden group transition-all duration-700 ease-in-out hover:lg:flex-[1.5] min-h-[50vh] lg:min-h-screen"
      >
        <Image
          src={event}
          alt="Events & Activities"
          fill
          className="object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-fuchsia-500 mix-blend-multiply"></div>
        <h2 className="absolute text-white font-semibold tracking-wide z-10 select-none text-[20px] sm:text-5xl md:text-5xl 
                       lg:rotate-[-90deg] lg:bottom-56 lg:-right-40 
                       bottom-10 right-1/2 translate-x-1/2 lg:translate-x-0">
          Events & Activities
        </h2>
      </div>
    </main>
  );
}
