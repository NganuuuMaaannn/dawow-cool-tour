"use client";

import Header from "@/components/Header";
import AboutContent from "@/components/aboutTribesPage";
import Footer from "@/components/Footer";

export default function aboutTribes() {
  return (
    <div className="flex flex-col min-h-screen bg-bgLogin">
      <Header />
      <main className="flex-grow">
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}
