"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Vikings from "@/image/Food/Vikings.png";
import TongYang from "@/image/Food/TongYang.png";
import Huckle from "@/image/Food/Huckle.png";
import Footer from "@/components/Footer";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram
} from "react-icons/fa";

import { HiStar } from "react-icons/hi";

export default function FoodsPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleClickVikings = () => {
    setTimeout(() => {
      router.push("/experience-davao/food/vikings");
    }, 600);
  };

  const handleClickTongyang = () => {
    setTimeout(() => {
      router.push("/experience-davao/food/tongyang");
    }, 600);
  };

  const handleClickHuckle = () => {
    setTimeout(() => {
      router.push("/experience-davao/food/huckleberry");
    }, 600);
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-bgLogin">

      <header className="w-full bg-red-700 text-white flex items-center gap-3 p-4 shadow-md fixed top-0 left-0 z-20">
        <button
          onClick={() => history.back()}
          className="bg-white text-red-700 rounded-full p-2 hover:scale-110 transition-transform"
        >
          <FaArrowLeft size={18} />
        </button>
        <h1 className="text-2xl sm:text-3xl font-semibold pl-3">
          Foods
        </h1>
      </header>

      <section
        className={`mt-24 w-full max-w-5xl px-4 sm:px-8 flex flex-col gap-10 pb-10 transition-all duration-700 ease-out
          ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
          }`}
      >


        {/* VIKINGS */}


        <div className="relative bg-white rounded-xl shadow-xl 
            p-5 sm:p-8 mt-12 flex flex-col md:flex-row 
            items-center md:items-start gap-6 sm:gap-8 w-full overflow-visible">

          <div className="
            absolute -top-5 left-4 sm:left-5 bg-red-700 text-white 
            px-4 sm:px-6 py-2 rounded-tl-3xl rounded-br-3xl 
            text-sm sm:text-base md:text-lg font-semibold shadow-md 
            cursor-default flex items-center gap-3">
            
            <span>Vikings Luxury Buffet</span>

            <span className="flex items-center text-yellow-400 text-xl">
              <HiStar /> <HiStar /> <HiStar /> <HiStar /> <HiStar />
            </span>
          </div>


          <div className="flex flex-col gap-4 sm:gap-5 flex-1 w-full mt-8 md:mt-6">

            <div className="flex items-start gap-3 cursor-default">
              <FaMapMarkerAlt className="text-red-700 text-lg sm:text-xl md:text-2xl mt-1" />
              <p className="text-gray-800 text-xs sm:text-sm md:text-lg leading-snug">
                SM Lanang, Upper Ground Level, The Fountain Court,
                J.P. Laurel Ave, Agdao, Davao City, Philippines
              </p>
            </div>

            <div className="flex items-center gap-3 mb-20 cursor-default">
              <FaPhoneAlt className="text-red-700 text-lg sm:text-xl md:text-2xl" />
              <p className="text-gray-800 text-xs sm:text-sm md:text-lg">
                +63 963 285 3888
              </p>
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div
            onClick={handleClickVikings}
            className="
              absolute cursor-pointer group
              top-auto bottom-[20px] right-4  
              translate-y-0

              sm:bottom-[-30px] sm:right-6        
              md:top-1/2 md:bottom-[100px] md:right-[-70px] md:-translate-y-1/2 

              w-20 h-20                            
              sm:w-20 sm:h-24
              md:w-36 md:h-36
              lg:w-40 lg:h-40

              rounded-full border-[4px] sm:border-[5px] md:border-[6px] 
              border-red-700 bg-white 
              flex items-center justify-center shadow-xl z-20
              overflow-hidden
            "
          >
            {/* IMAGE */}
            <Image
              src={Vikings}
              alt="Food"
              className="w-full h-full object-cover rounded-full transition-all duration-300 group-hover:opacity-50"
            />

            {/* HOVER OVERLAY */}
            <span className="
              absolute text-red-700 font-semibold text-sm sm:text-base md:text-lg
              opacity-0 group-hover:opacity-100
              transition-all duration-300
            ">
              View
            </span>
          </div>
        </div>


        {/* Tong Yang */}  


        <div className="relative bg-white rounded-xl shadow-xl 
            p-5 sm:p-8 mt-12 flex flex-col md:flex-row 
            items-center md:items-start gap-6 sm:gap-8 w-full overflow-visible">

          <div className="
            absolute -top-5 left-4 sm:left-5 bg-red-700 text-white 
            px-4 sm:px-6 py-2 rounded-tl-3xl rounded-br-3xl 
            text-sm sm:text-base md:text-lg font-semibold shadow-md 
            cursor-default flex items-center gap-3">
            
            <span> Tong Yang </span>

            <span className="flex items-center text-yellow-400 text-xl">
              <HiStar /> <HiStar /> <HiStar /> <HiStar /> <HiStar />
            </span>
          </div>

          <div className="flex flex-col gap-4 sm:gap-5 flex-1 w-full mt-8 md:mt-6">

            <div className="flex items-start gap-3 cursor-default">
              <FaMapMarkerAlt className="text-red-700 text-lg sm:text-xl md:text-2xl mt-1" />
              <p className="text-gray-800 text-xs sm:text-sm md:text-lg leading-snug">
                Quimpo Blvd Ground Floor, Annex, SM City Davao, Davao City, Mindanao 8000 Philippines
              </p>
            </div>

            <div className="flex items-center gap-3 cursor-default">
              <FaPhoneAlt className="text-red-700 text-lg sm:text-xl md:text-2xl" />
              <p className="text-gray-800 text-xs sm:text-sm md:text-lg">
                +63 917 716 6888
              </p>
            </div>

            <div className="flex items-center gap-3 cursor-default">
              <FaEnvelope className="text-red-700 text-lg sm:text-xl md:text-2xl" />
              <p className="text-gray-800 text-xs sm:text-sm md:text-lg break-all">
                tongyangplus.marketing@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-3 -ml-1">
              <FaFacebookSquare className="text-red-700 text-xl sm:text-2xl md:text-3xl" />
              <a
                href="https://www.facebook.com/tongyangplusdavao"
                target="_blank"
                className="text-gray-800 hover:underline hover:text-blue-500
                text-xs sm:text-sm md:text-lg break-all">
                Tong Yang, SM City Davao Ecoland
              </a>
            </div>

            <div className="flex items-center gap-3 -ml-1">
              <FaInstagram className="text-red-700 text-xl sm:text-2xl md:text-3xl" />
              <a
                href="https://www.instagram.com/tongyang.ph/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExSU5IWU5WdlM1R2V6WFN2N3NydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5g9ZmJwcVdZhqjPXR8uYf9iBa5ns2-19AAIpyY07mbJTGZmSZLv5qTa7jYHg_aem_wJXiAnMqpnQnhESzIbH7SA#"
                target="_blank"
                className="text-gray-800 hover:underline hover:text-blue-500                                              
                text-xs sm:text-sm md:text-lg break-all">
                tongyang.ph
              </a>
            </div>

          </div>

          {/* RIGHT — IMAGE */}
          <div
            onClick={handleClickTongyang}
            className="
              absolute cursor-pointer group
              top-auto bottom-[20px] right-4  
              translate-y-0

              sm:bottom-[-30px] sm:right-6        
              md:top-1/2 md:bottom-[100px] md:right-[-70px] md:-translate-y-1/2 

              w-20 h-20                            
              sm:w-20 sm:h-24
              md:w-36 md:h-36
              lg:w-40 lg:h-40

              rounded-full border-[4px] sm:border-[5px] md:border-[6px] 
              border-red-700 bg-white 
              flex items-center justify-center shadow-xl z-20
              overflow-hidden
            "
          >
            {/* IMAGE */}
            <Image
              src={TongYang}
              alt="Food"
              className="w-full h-full object-cover rounded-full transition-all duration-300 group-hover:opacity-50"
            />

            {/* HOVER OVERLAY */}
            <span className="
              absolute text-red-700 font-semibold text-sm sm:text-base md:text-lg
              opacity-0 group-hover:opacity-100
              transition-all duration-300
            ">
              View
            </span>
          </div>
        </div>


        {/* Huckleberry Southern Kitchen & Bar Location */}


        <div className="relative bg-white rounded-xl shadow-xl 
            p-5 sm:p-8 mt-12 flex flex-col md:flex-row 
            items-center md:items-start gap-6 sm:gap-8 w-full overflow-visible mb-10">

          <div className="
            absolute -top-5 left-4 sm:left-5 bg-red-700 text-white 
            px-4 sm:px-6 py-2 rounded-tl-3xl rounded-br-3xl 
            text-sm sm:text-base md:text-lg font-semibold shadow-md 
            cursor-default flex items-center gap-3">
            
            <span> Huckleberry Southern Kitchen & Bar Location </span>

            <span className="flex items-center text-yellow-400 text-xl">
              <HiStar /> <HiStar /> <HiStar /> <HiStar />
            </span>
          </div>

          <div className="flex flex-col gap-4 mb-10 sm:gap-5 flex-1 w-full mt-8 md:mt-6">

            <div className="flex items-start gap-3 cursor-default">
              <FaMapMarkerAlt className="text-red-700 text-lg sm:text-xl md:text-2xl mt-1" />
              <p className="text-gray-800 text-xs sm:text-sm md:text-lg leading-snug">
                Oboza Compound, Rizal Street corner C. Bangoy Street, Poblacion District, Davao City, Philippines
              </p>
            </div>

            <div className="flex items-center gap-3 cursor-default">
              <FaPhoneAlt className="text-red-700 text-lg sm:text-xl md:text-2xl" />
              <p className="text-gray-800 text-xs sm:text-sm md:text-lg">
                0916 364 4905
              </p>
            </div>

            <div className="flex items-center gap-3 cursor-default">
              <FaEnvelope className="text-red-700 text-lg sm:text-xl md:text-2xl" />
              <p className="text-gray-800 text-xs sm:text-sm md:text-lg break-all">
                huckleberrysouthernkitchen@gmail.com
              </p>
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div
            onClick={handleClickHuckle}
            className="
              absolute cursor-pointer group
              top-auto bottom-[20px] right-4  
              translate-y-0

              sm:bottom-[-30px] sm:right-6        
              md:top-1/2 md:bottom-[100px] md:right-[-70px] md:-translate-y-1/2 

              w-20 h-20                            
              sm:w-20 sm:h-24
              md:w-36 md:h-36
              lg:w-40 lg:h-40

              rounded-full border-[4px] sm:border-[5px] md:border-[6px] 
              border-red-700 bg-white 
              flex items-center justify-center shadow-xl z-20
              overflow-hidden
            "
          >
            {/* IMAGE */}
            <Image
              src={Huckle}
              alt="Food"
              className="w-full h-full object-cover rounded-full transition-all duration-300 group-hover:opacity-50"
            />

            {/* HOVER OVERLAY */}
            <span className="
              absolute text-red-700 font-semibold text-sm sm:text-base md:text-lg
              opacity-0 group-hover:opacity-100
              transition-all duration-300
            ">
              View
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
