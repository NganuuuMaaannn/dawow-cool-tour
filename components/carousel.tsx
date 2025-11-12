"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useRouter } from "next/navigation";

import davao from "@/image/davao.png"
import main1 from "@/image/Carousel/ata.jpg";
import main2 from "@/image/Carousel/bago.png";
import main3 from "@/image/Carousel/iranun.jpg";
import main4 from "@/image/Carousel/klata.png";
import main5 from "@/image/Carousel/magui.jpg";
import main6 from "@/image/Carousel/maranao.jpg";
import main7 from "@/image/Carousel/obu.png";
import main8 from "@/image/Carousel/sama.jpg";
import main9 from "@/image/Carousel/tau.jpg";

export default function HomePage() {
  const router = useRouter();
  const [current, setCurrent] = useState(4);
  const [animating, setAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const images = [main1, main2, main3, main4, main5, main6, main7, main8, main9];
  const total = images.length;

  // ✨ Fade in animation setup
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    if (animating || current >= total - 1) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => prev + 1);
      setAnimating(false);
    }, 400);
  };

  const prevSlide = () => {
    if (animating || current <= 0) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => prev - 1);
      setAnimating(false);
    }, 400);
  };

  const handleClick = () => router.push("/mainPage");

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen relative overflow-hidden transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      {/* Title */}
      <div className="flex items-center justify-center gap-0 sm:gap-0">
        <h1 className="font-montserrat text-4xl sm:text-5xl font-bold text-white m-0 -mr-3">
          Learn,
        </h1>
        <Image
          src={davao}
          alt="Love, Davao!"
          className="object-contain w-[140px] sm:w-[200px] select-none"
          priority
        />
        <h1 className="font-montserrat text-4xl sm:text-5xl font-bold text-white m-0 -ml-3">
          !
        </h1>
      </div>

      {/* Carousel */}
      <div className="relative mt-10 mb-10 flex items-center justify-center w-full max-w-7xl h-[260px] sm:h-[380px] md:h-[450px] lg:h-[500px]">
        {/* Left Arrow */}
        {current > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-10 md:left-28 top-1/2 -translate-y-1/2 bg-bgTour hover:bg-bgTour/80 text-white rounded-full p-2 sm:p-4 md:p-5 shadow-lg transition z-30"
          >
            <FaChevronLeft size={18} />
          </button>
        )}

        {/* Image logic */}
        {images.map((img, index) => {
          const isCurrent = index === current;
          const isLeft = index === current - 1;
          const isRight = index === current + 1;

          let transform = "";
          if (isCurrent) {
            transform = "translate-x-0 scale-100 opacity-100 z-20";
          } else if (isLeft) {
            transform =
              "-translate-x-[80%] scale-50 sm:scale-50 opacity-30 z-10";
          } else if (isRight) {
            transform =
              "translate-x-[80%] scale-50 sm:scale-50 opacity-30 z-10";
          } else {
            transform = "opacity-0 pointer-events-none scale-80";
          }

          return (
            <div
              key={index}
              className={`absolute w-[260px] h-[180px] sm:w-[400px] sm:h-[250px] md:w-[650px] md:h-[400px] lg:w-[880px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-in-out transform ${transform}`}
            >
              <Image
                src={img}
                alt={`Slide ${index}`}
                className="object-cover w-full h-full rounded-3xl select-none"
                priority
              />
            </div>
          );
        })}

        {/* Right Arrow */}
        {current < total - 1 && (
          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-10 md:right-28 top-1/2 -translate-y-1/2 bg-bgTour hover:bg-hoverTour/80 text-white rounded-full p-2 sm:p-4 md:p-5 shadow-lg transition z-30"
          >
            <FaChevronRight className="pl-1" size={18} />
          </button>
        )}
      </div>

      {/* Bottom Button */}
      <button
        onClick={handleClick}
        className="absolute left-1/2 bottom-36 sm:bottom-24 md:bottom-24 lg:bottom-24 -translate-x-1/2 group px-5 sm:px-7 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-white text-sm sm:text-base md:text-lg font-semibold bg-bgTour overflow-hidden flex items-center justify-center hover:bg-hoverTour transition"
      >
        <span className="transform transition-transform duration-300 group-hover:-translate-x-3">
          Kayadawan E-Village
        </span>
        <HiArrowNarrowRight
          className="absolute right-3 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
          size={18}
        />
      </button>
    </div>
  );
}
