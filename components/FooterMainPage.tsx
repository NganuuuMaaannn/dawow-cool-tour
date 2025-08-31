"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import logo1 from "../image/dvo.png";
import logo2 from "../image/hcdc.png";
import devIcon from "../image/devIcon.png"

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-white mt-8">
      {/* References Section */}
      <div className="max-w-6xl mx-auto px-10 py-5">
        <p className="text-xs text-gray-400 mb-3">References:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs text-gray-400">

          <p>
            Kadayawan sa Davao. (2025). Ata Manobo
            <a
              href="https://www.facebook.com/share/p/1JbcpjX7e3/?mibextid=wwXIfr"
              className="underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image Link
            </a>
          </p>

          <p>
            Kadayawan sa Davao. (2025). Bagobo - Klata
            <a
              href="https://www.facebook.com/share/p/16dSy7z97j/?mibextid=wwXIfr"
              className="underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image Link
            </a>
          </p>

          <p>
            Kadayawan sa Davao. (2025). Bagobo - Tagabawa
            <a
              href="https://www.facebook.com/share/p/1Wfi1tmH4g/?mibextid=wwXIfr"
              className="underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image Link
            </a>
          </p>

          <p>
            Kadayawan sa Davao. (2025). Matigsalog
            <a
              href=" https://www.facebook.com/share/p/14GsKCNgEja/?mibextid=wwXIfr"
              className="underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image Link
            </a>
          </p>

          <p>
            Kadayawan sa Davao. (2025). Ovu Manuvu
            <a
              href=" https://www.facebook.com/share/p/14GsKCNgEja/?mibextid=wwXIfr"
              className="underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image Link
            </a>
          </p>

          <p>
            Kadayawan sa Davao. (2025). Iranun
            <a
              href="https://www.facebook.com/share/p/1GdhAz8nb5/?mibextid=wwXIfr"
              className="underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image Link
            </a>
          </p>

          <p>
            Kadayawan sa Davao. (2025). Bangsa - Kagan
            <a
              href="https://www.facebook.com/share/p/1YzFtPSNmy/?mibextid=wwXIfr"
              className="underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image Link
            </a>
          </p>

          <p>
            Kadayawan sa Davao. (2025). Maguindanaon
            <a
              href="https://www.facebook.com/share/p/1ER83SJWBe/?mibextid=wwXIfr "
              className="underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image Link
            </a>
          </p>

          <p>
            Kadayawan sa Davao. (2025). Maranao
            <a
              href="https://www.facebook.com/share/p/14Qn7yghvct/?mibextid=wwXIfr"
              className="underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image Link
            </a>
          </p>

          <p>
            Kadayawan sa Davao. (2025). Bangsa - Sama
            <a
              href="https://www.facebook.com/share/p/1CpSVUer4D/?mibextid=wwXIfr"
              className="underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image Link
            </a>
          </p>

          <p>
            Kadayawan sa Davao. (2025). Tausug
            <a
              href="https://www.facebook.com/share/p/1BFkng3APz/?mibextid=wwXIfr"
              className="underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image Link
            </a>
          </p>

          <p>
            SunStar. (2022). 11 Deputy Mayor
            <a
              href="https://www.sunstar.com.ph/amp/story/davao/feature/know-the-11-tribes-at-the-kadayawan-village "
              className="underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image Link
            </a>
          </p>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center py-4 px-4">
          <div className="text-sm text-center sm:text-left text-gray-400">
            © {new Date().getFullYear()} 11 Tribes of Davao City. All rights reserved.
          </div>

          <div className="flex space-x-6 items-center mt-3 sm:mt-0">
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
      </div>
    </footer>
  );
}
