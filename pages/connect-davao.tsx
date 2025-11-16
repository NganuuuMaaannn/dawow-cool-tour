"use client";

import Header from "@/components/Header";
import ConnectDavao from "@/components/connect-davao";
import Footer from "@/components/Footer";

export default function ConnectDavaoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bgLogin">
      <Header />
      <main className="flex-grow">
        <ConnectDavao />
      </main>
      <Footer />
    </div>
  );
}