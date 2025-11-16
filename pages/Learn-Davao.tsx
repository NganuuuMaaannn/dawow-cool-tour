"use client";

import MainContent from "@/components/carousel";

export default function carouselPage() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/Tribes3.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow">
          <MainContent />
        </main>
      </div>
    </div>
  );
}
