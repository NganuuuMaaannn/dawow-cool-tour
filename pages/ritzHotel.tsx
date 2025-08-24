"use client";

import Header from "@/components/Header";
import RitzHotel from "@/components/Hotels/ritzDescrip";
import Footer from "@/components/Footer";

export default function traditionAndCulture() {
  return (
    <div className="flex flex-col min-h-screen bg-bgLogin">
      <Header />
      <main className="flex-grow">
        <RitzHotel />
      </main>
      <Footer />
    </div>
  );
}