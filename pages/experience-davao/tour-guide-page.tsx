"use client";

import { useEffect, useState } from "react";
import { FaArrowLeft, FaSearch, FaTimes } from "react-icons/fa";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

import type { TourGuide } from "@/components/TourGuideCard";
import TourGuideCard from "@/components/TourGuideCard";
import TourGuideCardStudent from "@/components/TourGuideCardStudent";
import type { TourGuideStudent } from "@/components/TourGuideCardStudent";
import guides from "@/pages/data/tour-guides.json";
import guideStudent from "@/pages/data/tour-guides-student.json";

export default function TourGuide() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const tourGuides: TourGuide[] = guides;
  const tourGuidesStudent: TourGuideStudent[] = guideStudent;

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const filteredGuides = tourGuides.filter((guide) => {
    const t = search.toLowerCase();
    return (
      guide.name.toLowerCase().includes(t) ||
      guide.about.toLowerCase().includes(t) ||
      guide.language.toLowerCase().includes(t) ||
      guide.destinations.toLowerCase().includes(t) ||
      guide.email.toLowerCase().includes(t) ||
      guide.phone.some((p) => p.toLowerCase().includes(t))
    );
  });

  const filteredGuidesStudent = tourGuidesStudent.filter((guideStudent) => {
    const t = search.toLowerCase();
    return (
      guideStudent.student_name.toLowerCase().includes(t) ||
      guideStudent.student_location.toLowerCase().includes(t) ||
      guideStudent.student_email.toLowerCase().includes(t) ||
      guideStudent.student_phone.some((p) => p.toLowerCase().includes(t))
    );
  });

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-bgLogin">

      <header className="w-full bg-yellow-400 text-white flex items-center justify-between p-4 shadow-md fixed top-0 left-0 z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/experience-davao")}
            className="bg-white text-yellow-400 rounded-full p-2 hover:scale-110 transition-transform"
          >
            <FaArrowLeft size={18} />
          </button>

          <h1 className="text-black text-2xl sm:text-3xl pl-3 font-semibold">
            Tour Guides
          </h1>
        </div>

        <button
          onClick={() => {
            setShowSearch(!showSearch);
            if (showSearch) setSearch("");
          }}
          className="bg-white text-yellow-400 rounded-full p-2 hover:scale-110 transition-transform"
        >
          {showSearch ? <FaTimes size={18} /> : <FaSearch size={18} />}
        </button>
      </header>

      <div
        className={`fixed top-16 left-0 w-full bg-bgLogin flex justify-center z-20 transition-all duration-300
        ${showSearch ? "max-h-16 pt-3 pb-2 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
      `}
      >
        <div className="w-full max-w-5xl px-4 sm:px-8">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

            {search.length > 0 && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={16} />
              </button>
            )}

            <input
              type="text"
              placeholder="Search tour guide..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-10 py-3 rounded-xl bg-white shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>
      </div>


      <div className="w-full flex-1 flex justify-center">
        <section
          className={`w-full max-w-5xl px-4 sm:px-8 pt-24 flex flex-col gap-10 pb-16 transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          {filteredGuides.length > 0 ? (
            filteredGuides.map((guide, index) => (
              <TourGuideCard key={index} guide={guide} />
            ))
          ) : (
            <p className="text-center text-gray-600 text-lg mt-20">
              No tour guides found.
            </p>
          )}
          <hr className="w-full border-yellow-400" />
          <h1 className="text-black text-3xl font-montserrat font-semibold text-center">Student Tour Guides</h1>
          {filteredGuidesStudent.length > 0 ? (
            filteredGuidesStudent.map((guide, index) => (
              <TourGuideCardStudent key={index} guideStudent={guide} />
            ))
          ) : (
            <p className="text-center text-gray-600 text-lg mt-20">
              No student tour guides found.
            </p>
          )}
        </section>
      </div>

      <Footer />
    </main>
  );
}
