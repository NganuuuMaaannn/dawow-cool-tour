"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaArrowLeft, FaTimes } from "react-icons/fa";

import pic1 from "@/image/Food/huckle1.png";
import pic2 from "@/image/Food/huckle2.png";
import pic3 from "@/image/Food/huckle3.png";
import pic4 from "@/image/Food/huckle4.png";
import pic5 from "@/image/Food/huckle5.png";

export default function GalleryPage() {
  const images: StaticImageData[] = [pic1, pic2, pic3, pic4, pic5];
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="min-h-screen bg-bgLogin relative">

      {/* BACK BUTTON */}
      <button
        className="fixed top-6 left-6 z-30 bg-red-700 px-4 py-2 rounded-full shadow-lg hover:bg-red-900 transition flex items-center gap-2"
        onClick={() => window.history.back()}
      >
        <FaArrowLeft className="text-white" />
        <span className="font-montserrat font-semibold text-white">Back</span>
      </button>

      <div className="min-h-screen flex justify-center items-center px-6 pb-20">
        <div className="flex flex-col gap-10 items-center mt-20 w-full">

          {/* ROW 1 — responsive */}
          <div className="flex flex-wrap mt-5 justify-center gap-10 w-full max-w-[1500px]">
            {images.slice(0, 3).map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className="cursor-pointer rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group w-[85%] sm:w-[300px] md:w-[320px]"
              >
                <div className="w-full h-[200px] sm:h-[220px] md:h-[240px]">
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

          {/* ROW 2 — auto centered on desktop */}
          <div className="flex flex-wrap justify-center gap-10 w-full max-w-[900px]">
            {images.slice(3).map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className="cursor-pointer rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group w-[85%] sm:w-[300px] md:w-[320px]"
              >
                <div className="w-full h-[200px] sm:h-[220px] md:h-[240px]">
                  <Image
                    src={img}
                    alt={`Gallery Image ${index + 4}`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

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
            className="absolute top-4 right-4 bg-white text-gray-900 p-3 rounded-full shadow-md hover:bg-gray-300 transition"
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
