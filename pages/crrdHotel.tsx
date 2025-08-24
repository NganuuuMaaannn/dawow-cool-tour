"use client";

import Header from "@/components/Header";
import CrrdHotel from "@/components/Hotels/crrdDescrip";
import Footer from "@/components/Footer";

export default function traditionAndCulture() {
  return (
    <div className="flex flex-col min-h-screen bg-bgLogin">
      <Header />
      <main className="flex-grow">
        <CrrdHotel />
      </main>
      <Footer />
    </div>
  );
}