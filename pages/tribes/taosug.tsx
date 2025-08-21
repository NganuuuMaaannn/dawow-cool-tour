"use client";

import Header from "@/components/Header";
import AtaManoboContent from "@/components/Tribes/taosugContent";
import Footer from "@/components/Footer";

export default function Page1() {
  return (
    <>
    <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
    </div>
      <main className="relative min-h-screen bg-bgLogin overflow-hidden">
        <AtaManoboContent />
      </main>
      <Footer />
    </>
  );
}
