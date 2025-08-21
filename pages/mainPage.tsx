"use client";

import Header from "@/components/Header";
import MainContent from "@/components/homePage";
import Footer from "@/components/Footer";

export default function mainPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bgLogin relative">
      
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="h-[35vh] lg:h-[50vh] bg-gradient-to-b from-bgTour from-20% via-white via-60% to-blue-500 to-90%"></div>
      </div>

      <Header />
      <main className="flex-grow">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}
