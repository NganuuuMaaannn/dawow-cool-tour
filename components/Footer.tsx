
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import logo1 from "../image/dvo.png";
import logo2 from "../image/hcdc.png";
import devIcon from "../image/devIcon.png"

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="w-full bg-white text-gray-400 py-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} 11 Tribes of Davao City. All rights reserved. 
        </div>

        <div className="flex space-x-6 items-center">
          <a
            onClick={() => router.push("/devCred")}
            rel="noopener noreferrer"
            className="text-devColor flex items-center gap-2 text-sm hover:opacity-80 hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <Image
              src={devIcon}
              alt="Developer Icon"
              width={25}
              height={25}
            />
            Developers
          </a>

          <a
            href="https://www.facebook.com/hcdcofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 hover:scale-105 transition-transform duration-200 block"
          >
            <Image
              src={logo2}
              alt="HCDC Facebook page"
              width={100}
              height={30}
              className="object-contain"
            />
          </a>

          <a
            href="https://www.facebook.com/davaocitygov"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 hover:scale-105 transition-transform duration-200 block"
          >
            <Image
              src={logo1}
              alt="Davao City Facebook page"
              width={100}
              height={30}
              className="object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
          
