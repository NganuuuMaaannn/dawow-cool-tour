import Image from "next/image";
import tribesBg from "../image/Tribes.png";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={tribesBg}
          alt="11 Tribes of Davao City"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
          11 Tribes of Davao City
        </h1>
        <p className="text-white text-sm md:text-lg mb-6">
          A journey into the heart of culture and tradition
        </p>
        <div className="flex items-center justify-center">
          <button className="group relative px-20 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-green-500 to-red-500 overflow-hidden flex items-center justify-center hover:opacity-90 transition">
            {/* Text */}
            <span className="transform transition-transform duration-300 group-hover:-translate-x-3">
              Enter
            </span>

            {/* Arrow icon (absolute so it doesn't affect text centering) */}
            <HiArrowNarrowRight
              className="absolute right-10 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              size={20}
            />
          </button>
        </div>
      </div>
    </main>
  );
}
