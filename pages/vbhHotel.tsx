"use client";

import Header from "@/components/Header";
import SequoniaHotel from "@/components/Hotels/vbhDescrip";
import Footer from "@/components/Footer";

export default function traditionAndCulture() {
  return (
    <div className="flex flex-col min-h-screen bg-bgLogin">
      <Header />
      <main className="flex-grow">
        <SequoniaHotel />
      </main>
      <Footer />
    </div>
  );
}