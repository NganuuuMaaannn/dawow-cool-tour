"use client";

import { HiArrowNarrowRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      router.push("/mainPage");
    }, 600);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/Tribes3.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

    {/* Overlay - push behind with z-0 */}
    <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

    {/* Your link - bring forward with z-10 */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-50 select-none z-10">
      <p className="text-xs text-gray-500 mt-2 text-center">
        Kadayawan sa Davao
        <a
          href="https://www.facebook.com/watch/?v=1468188284306231&rdid=UPYdZ4D2bCphn1SL"
          target="_blank"
          rel="noopener noreferrer"
          className="underline ml-1"
        >
          https://www.facebook.com/watch/?v=1468188284306231&rdid=UPYdZ4D2bCphn1SL
        </a>
      </p>
    </div>


      <AnimatePresence>
        {!isExiting && (
          <motion.div
            className="relative z-10 text-center px-4"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-montserrat font-normal text-white mb-2">
              DaWow Cool Tour
            </h1>
            <p className="text-white text-sm md:text-lg mb-6">
              A journey into the heart of culture and tradition
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={handleClick}
                className="group relative px-20 py-3 rounded-full text-white font-semibold bg-bgTour overflow-hidden flex items-center justify-center hover:bg-hoverTour transition"
              >
                <span className="transform transition-transform duration-300 group-hover:-translate-x-3">
                  Explore
                </span>
                <HiArrowNarrowRight
                  className="absolute right-10 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  size={20}
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
