"use client";

import Header from "@/components/Header";
import AboutLove from "@/components/about-love";
import Footer from "@/components/Footer-Credits";

export default function traditionAndCulture() {
  return (
    <div className="flex flex-col min-h-screen bg-bgLogin">
      <Header />
      <main className="flex-grow">
        <AboutLove />
      </main>
      <Footer />
    </div>
  );
}