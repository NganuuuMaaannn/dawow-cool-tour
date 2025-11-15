"use client";

import Image from "next/image";
import devIcon from "../image/devIcon.png";

import dvo from "../image/dvo.png";
import logo1 from "@/image/Logo/cca.jpg";
import logo2 from "@/image/Logo/chatme.jpg";
import logo3 from "@/image/Logo/dc logo.jpg";
import logo4 from "@/image/Logo/DOT.png";
import logo5 from "@/image/Logo/hcdc_logo.png";
import logo6 from "@/image/Logo/ids.jpg";
import logo7 from "@/image/Logo/Life-is-Here-small.png";
import logo8 from "@/image/Logo/love-philippines-logo-png_seeklogo-619869.png";
import logo9 from "@/image/Logo/tourism logo.jpg";


export default function Footer() {
  return (
    <footer className="relative w-full bg-white text-gray-400 py-6">

      <a
        href="/devCred"
        className="absolute bottom-3 right-3 hover:opacity-80 hover:scale-110 transition"
      >
        <Image
          src={devIcon}
          alt="Developer Icon"
          width={30}
          height={30}
          className="object-contain"
        />
      </a>

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">

        <div className="text-sm text-center cursor-default">
          © {new Date().getFullYear()} Love, Davao! All rights reserved.
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6">

          <Image src={logo8} alt="Logo 8" width={80} height={40} className="object-contain hover:opacity-80 hover:scale-105 transition" />

          <Image src={logo9} alt="Logo 9" width={60} height={40} className="object-contain hover:opacity-80 hover:scale-105 transition" />

          <Image src={logo1} alt="Logo 1" width={60} height={40} className="object-contain hover:opacity-80 hover:scale-105 transition" />

          <Image src={logo2} alt="Logo 2" width={60} height={40} className="object-contain hover:opacity-80 hover:scale-105 transition" />

          <Image src={logo6} alt="Logo 6" width={60} height={40} className="object-contain hover:opacity-80 hover:scale-105 transition" />

          <Image src={logo4} alt="Logo 4" width={60} height={40} className="object-contain hover:opacity-80 hover:scale-105 transition" />

          <Image src={logo5} alt="Logo 5" width={60} height={40} className="object-contain hover:opacity-80 hover:scale-105 transition" />

          <Image src={logo3} alt="Logo 3" width={60} height={40} className="object-contain hover:opacity-80 hover:scale-105 transition" />

          <Image src={dvo} alt="Logo 7" width={120} height={40} className="object-contain hover:opacity-80 hover:scale-105 transition" />

        </div>
      </div>
    </footer>
  );
}
