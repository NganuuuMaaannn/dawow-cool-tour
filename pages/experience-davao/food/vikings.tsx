"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaArrowLeft, FaTimes } from "react-icons/fa";

import pic1 from "@/image/Food/vikings1.png";
import pic2 from "@/image/Food/vikings2.png";
import pic3 from "@/image/Food/vikings3.png";
import pic4 from "@/image/Food/vikings4.png";

export default function GalleryPage() {
  const images: StaticImageData[] = [pic1, pic2, pic3, pic4];
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="min-h-screen bg-bgLogin relative">
      <header className="w-full bg-bgLogin text-white flex items-center gap-3 p-4 fixed top-0 left-0 z-20">
        <button
          onClick={() => history.back()}
          className="bg-red-700 text-white rounded-full w-[50px] h-[50px] flex items-center justify-center hover:scale-110 transition-transform"
        >
          <FaArrowLeft size={18} />
        </button>
        <span className="text-sm text-black sm:text-sm pl-3 cursor-default">
          Photo Courtesy: <strong>Vikings Luxury Buffet, SM Lanang Premier</strong>
        </span>
      </header>

      {/* GALLERY GRID */}
      <div className="min-h-screen flex justify-center items-center px-6 pb-20">
        <div
          className="grid gap-10 mt-20 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 hd:grid-cols-2 fhd:grid-cols-4 max-w-[1500px]"
        >
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="cursor-pointer rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px]"
            >
              <div className="w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px]">
                <Image
                  src={img}
                  alt={`Gallery Image ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-40 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative w-full px-4 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl hd:max-w-5xl fhd:max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* FULLSCREEN IMAGE */}
            <Image
              src={selectedImage}
              alt="Fullscreen Image"
              width={1600}
              height={1200}
              className="rounded-xl mx-auto h-auto w-full object-contain max-h-[85vh]"
            />
          </div>
          <button
            className="absolute top-4 right-4 bg-bgTour/80 text-white p-3 rounded-full shadow-md hover:bg-hoverTour/80 transition"
            onClick={closeModal}
          >
            <FaTimes size={18} />
          </button>
        </div>
      )}

      {/* ANIMATION */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
      `}</style>

    </div>
  );
}
