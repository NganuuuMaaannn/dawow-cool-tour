"use client";

import Header from "@/components/Header";
import HamptonHotel from "@/components/Hotels/hampDescrip";
import Footer from "@/components/Footer";

export default function traditionAndCulture() {
  return (
    <div className="flex flex-col min-h-screen bg-bgLogin">
      <Header />
      <main className="flex-grow">
        <HamptonHotel />
      </main>
      <Footer />
    </div>
  );
}