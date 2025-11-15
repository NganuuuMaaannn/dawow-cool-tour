"use client";

import Header from "@/components/Header";
import VisitUs from "@/components/about-love";
import Footer from "@/components/Footer";

export default function traditionAndCulture() {
  return (
    <div className="flex flex-col min-h-screen bg-bgLogin">
      <Header />
      <main className="flex-grow">
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}