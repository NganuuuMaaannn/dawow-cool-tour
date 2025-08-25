"use client";

import { useState, useEffect } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";
import Image from "next/image";
import hotel1 from "@/image/hari.jpg";
import hotel2 from "@/image/hari2.webp";
import hotel3 from "@/image/hari3.jpg";

export default function PinnacleDescription() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleClick = () => {
    setTimeout(() => {
      router.push("/visitUs");
    }, 600);
  };

  return (
    <main
      className={`flex flex-col items-center px-4 py-12 bg-gray-100 mt-10 transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="w-full max-w-6xl">
        <section className="bg-white rounded-xl shadow-lg p-8 space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-800">Building</h2>
            <button
              onClick={handleClick}
              className="relative group px-6 sm:px-8 py-2 sm:py-3 rounded-full text-white font-semibold bg-bgTour overflow-hidden flex items-center justify-center hover:bg-hoverTour transition"
            >
              <HiArrowNarrowLeft
                className="absolute left-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                size={20}
              />
              <span className="transform transition-transform duration-300 group-hover:translate-x-3">
                Back
              </span>
            </button>
          </div>

          <div>
            <Image
              src={hotel1}
              alt="Building View"
              width={1000}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Rooms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Image
                src={hotel2}
                alt="Room 1"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
              <Image
                src={hotel3}
                alt="Room 2"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
