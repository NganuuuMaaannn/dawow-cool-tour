"use client";

import Header from "@/components/Header";
import AboutContent from "@/components/aboutTribesPage";
import Footer from "@/components/Footer";
import bgPattern from "@/image/tourBG.png";

export default function aboutTribes() {
  return (
    <div className="flex flex-col min-h-screen bg-bgLogin relative">

      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div
          className="h-[35vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${bgPattern.src})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/90"></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AboutContent />
        </main>
        <Footer />
      </div>
    </div>
  );
}