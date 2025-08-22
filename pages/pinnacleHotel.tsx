"use client";

import Header from "@/components/Header";
import PinnacleHotel from "@/components/Hotels/pinnacleDescrip";
import Footer from "@/components/Footer";

export default function traditionAndCulture() {
  return (
    <div className="flex flex-col min-h-screen bg-bgLogin">
      <Header />
      <main className="flex-grow">
        <PinnacleHotel />
      </main>
      <Footer />
    </div>
  );
}