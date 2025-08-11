"use client";

import Header from "@/components/Header";
import MainContent from "@/components/homePage";
import Footer from "@/components/Footer";

export default function mainPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bgLogin">
      <Header />
      <main className="flex-grow">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}
