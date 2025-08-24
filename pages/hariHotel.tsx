"use client";

import Header from "@/components/Header";
import HariHotel from "@/components/Hotels/hariDescrip";
import Footer from "@/components/Footer";

export default function traditionAndCulture() {
  return (
    <div className="flex flex-col min-h-screen bg-bgLogin">
      <Header />
      <main className="flex-grow">
        <HariHotel />
      </main>
      <Footer />
    </div>
  );
}