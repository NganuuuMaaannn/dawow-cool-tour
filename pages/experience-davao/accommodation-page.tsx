"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";

import seda1 from "@/image/Accommodation/seda1.png";
import seda2 from "@/image/Accommodation/seda2.png";
import seda3 from "@/image/Accommodation/seda3.png";
import seda4 from "@/image/Accommodation/seda4.png";

import acacia1 from "@/image/Accommodation/acacia1.png";
import acacia2 from "@/image/Accommodation/acacia2.png";
import acacia3 from "@/image/Accommodation/acacia3.png";
import acacia4 from "@/image/Accommodation/acacia4.png";
import acacia5 from "@/image/Accommodation/acacia5.png";

import water1 from "@/image/Accommodation/water1.png";
import water2 from "@/image/Accommodation/water2.png";
import water3 from "@/image/Accommodation/water3.png";
import water4 from "@/image/Accommodation/water4.png";

import micro1 from "@/image/Accommodation/micro1.png";
import micro2 from "@/image/Accommodation/micro2.png";
import micro3 from "@/image/Accommodation/micro3.png";
import micro4 from "@/image/Accommodation/micro4.png";

import home1 from "@/image/Accommodation/home1.png";
import home2 from "@/image/Accommodation/home2.png";
import home3 from "@/image/Accommodation/home3.png";
import home4 from "@/image/Accommodation/home4.png";

import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaArrowLeft,
} from "react-icons/fa";
import { HiStar, HiGlobeAlt } from "react-icons/hi";

export default function AccommodationPage() {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <main className="relative min-h-screen flex flex-col items-center bg-bgLogin">

            <header className="w-full bg-bgTour text-white flex items-center gap-3 p-4 shadow-md fixed top-0 left-0 z-20">
                <button
                    onClick={() => router.push("/experience-davao")}
                    className="bg-white text-bgTour rounded-full p-2 hover:scale-110 transition-transform"
                >
                    <FaArrowLeft size={18} />
                </button>
                <h1 className="text-2xl sm:text-3xl font-semibold pl-3">
                    Accommodation
                </h1>
            </header>

            <section
                className={`mt-24 w-full max-w-6xl px-4 sm:px-8 flex flex-col gap-16 pb-10 transition-all duration-700 ease-out
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
            >



                {/* --------- Seda Abreeza --------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start cursor-default">

                    {/* RIGHT TEXT*/}
                    <div className="flex flex-col justify-center gap-2 cursor-default self-center order-2 md:order-1">

                        <h2 className="text-2xl md:text-4xl text-black font-bold mb-5 flex items-center gap-2">
                            Seda Abreeza
                            <span className="flex items-center text-yellow-400 text-xl">
                                <HiStar /> <HiStar /> <HiStar /> <HiStar />
                            </span>
                        </h2>

                        <div className="flex flex-col text-black gap-3 text-sm">
                            <p className="flex items-center gap-2">
                                <FaMapMarkerAlt className="mr-2" size={18} color="#00C25D" />
                                J.P. Laurel Avenue, Bajada, Davao City 8000, Philippines
                            </p>

                            <p className="flex items-center gap-2">
                                <FaPhoneAlt className="mr-2" size={18} color="#00C25D" />
                                +6382 244 3000
                            </p>

                            <p className="flex items-center gap-2">
                                <FaEnvelope className="mr-2" size={18} color="#00C25D" />
                                dvo@ayalalandhospitality.com
                            </p>
                        </div>

                        {/* CREDITS BOX */}
                        <div className="bg-bgLogin rounded-md mt-6 w-full">
                            <div className="bg-white p-4 border-l-4 border-bgTour">
                                <p className="text-xs text-gray-400">Photo Courtesy</p>
                                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2">
                                    <li>
                                        <a
                                            href="http://agoda.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            agoda.com
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* LEFT IMAGES */}
                    <div className="flex flex-col gap-4 w-full order-1 md:order-2">
                        <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                            <Image src={seda1} alt="People's Park" className="w-full h-full object-cover" priority />
                        </div>

                        <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                            <Image src={seda2} alt="People's Park" className="w-full h-full object-cover" priority />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-6 self-center cursor-default -mt-10">
                    <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                        <Image src={seda3} alt="Vikings" className="w-full h-full object-cover" priority />
                    </div>

                    <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                        <Image src={seda4} alt="Vikings" className="w-full h-full object-cover" priority />
                    </div>
                </div>
                <hr className="w-full border-bgTour" />





                {/* --------- Acacia Hotel --------- */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start cursor-default"
                >
                    {/* LEFT IMAGES */}
                    <div className="flex flex-col gap-4">
                        <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                            <Image src={acacia1} alt="Vikings" className="w-full h-full object-cover" priority />
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2 h-[220px] sm:h-[260px] md:h-[260px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                                <Image src={acacia2} alt="Vikings" className="w-full h-full object-cover" priority />
                            </div>
                            <div className="w-[400px] h-[220px] sm:h-[260px] md:h-[260px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                                <Image src={acacia3} alt="Vikings" className="w-full h-full object-cover" priority />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="flex flex-col justify-center gap-2 self-center cursor-default">
                        <h2 className="text-2xl md:text-4xl text-black font-bold mb-5 flex items-center gap-2">
                            Acacia Hotel
                            <span className="flex items-center text-yellow-400 text-xl">
                                <HiStar /> <HiStar /> <HiStar /> <HiStar />
                            </span>
                        </h2>

                        <div className="flex flex-col text-black gap-3 text-sm">
                            <p className="flex items-center gap-2">
                                <FaMapMarkerAlt className="mr-2" size={18} color="#00C25D" />
                                J.P. Laurel Avenue, Agdao, Davao City, Philippines, 8000
                            </p>

                            <p className="flex items-center gap-2">
                                <FaPhoneAlt className="mr-2" size={18} color="#00C25D" />
                                0822988088
                            </p>

                            <p className="flex items-center gap-2">
                                <HiGlobeAlt className="mr-2" size={22} color="#00C25D" />
                                <a
                                    href="http://www.acaciahotelsdavao.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-500"
                                >
                                    www.acaciahotelsdavao.com
                                </a>
                            </p>
                        </div>

                        {/* CREDITS BOX */}
                        <div className="bg-bgLogin rounded-md mt-6 w-full">
                            <div className="bg-white p-4 border-l-4 border-bgTour">
                                <p className="text-xs text-gray-400">Photo Courtesy</p>
                                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2">
                                    <li>
                                        <a
                                            href="http://AcaciaHotelDavao.guestreservation.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            AcaciaHotelDavao.guestreservation.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-6 self-center cursor-default -mt-10">
                    <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                        <Image src={acacia4} alt="Vikings" className="w-full h-full object-cover" priority />
                    </div>

                    <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                        <Image src={acacia5} alt="Vikings" className="w-full h-full object-cover" priority />
                    </div>
                </div>
                <hr className="w-full border-bgTour" />





                {/* --------- Waterfront Hotel --------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start cursor-default">

                    {/* RIGHT TEXT*/}
                    <div className="flex flex-col justify-center gap-2 cursor-default self-center order-2 md:order-1">

                        <h2 className="text-2xl md:text-4xl text-black font-bold mb-5 flex items-center gap-2">
                            Waterfront Hotel
                            <span className="flex items-center text-yellow-400 text-xl">
                                <HiStar /> <HiStar /> <HiStar /> <HiStar />
                            </span>
                        </h2>

                        <div className="flex flex-col text-black gap-3 text-sm">
                            <p className="flex items-center gap-2">
                                <FaMapMarkerAlt className="mr-2" size={18} color="#00C25D" />
                                Km. 7 Lanang, Davao, 8000, Philippines
                            </p>

                            <p className="flex items-center gap-2">
                                <FaPhoneAlt className="mr-2" size={18} color="#00C25D" />
                                0822332881
                            </p>

                            <p className="flex items-center gap-2">
                                <HiGlobeAlt className="mr-2" size={22} color="#00C25D" />
                                <a
                                    href="http://www.waterfronthotels.com.ph/waterfront/waterfront-insular-hotel-davao/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-500"
                                >
                                    www.waterfronthotels.com
                                </a>
                            </p>
                        </div>

                        {/* CREDITS BOX */}
                        <div className="bg-bgLogin rounded-md mt-6 w-full">
                            <div className="bg-white p-4 border-l-4 border-bgTour">
                                <p className="text-xs text-gray-400">Photo Courtesy</p>
                                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2">
                                    <li>
                                        <a
                                            href="http://WaterfrontInsular.guestresevation.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            WaterfrontInsular.guestresevation.com
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* LEFT IMAGES */}
                    <div className="flex flex-col gap-4 w-full order-1 md:order-2">
                        <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                            <Image src={water1} alt="People's Park" className="w-full h-full object-cover" priority />
                        </div>

                        <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                            <Image src={water2} alt="People's Park" className="w-full h-full object-cover" priority />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-6 self-center cursor-default -mt-10">
                    <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                        <Image src={water3} alt="Vikings" className="w-full h-full object-cover" priority />
                    </div>

                    <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                        <Image src={water4} alt="Vikings" className="w-full h-full object-cover" priority />
                    </div>
                </div>
                <hr className="w-full border-bgTour" />





                {/* --------- Microtel by Wyndham Davao --------- */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start cursor-default"
                >
                    {/* LEFT IMAGES */}
                    <div className="flex flex-col gap-4">
                        <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                            <Image src={micro1} alt="Vikings" className="w-full h-full object-cover" priority />
                        </div>
                        <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                            <Image src={micro2} alt="Vikings" className="w-full h-full object-cover" priority />
                        </div>
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="flex flex-col justify-center gap-2 self-center cursor-default">
                        <h2 className="text-2xl md:text-3xl text-black font-bold mb-5 flex items-center gap-2">
                            Microtel by Wyndham Davao
                            <span className="flex items-center text-yellow-400 text-xl">
                                <HiStar /> <HiStar /> <HiStar />
                            </span>
                        </h2>

                        <div className="flex flex-col text-black gap-3 text-sm">
                            <p className="flex items-center gap-2">
                                <FaMapMarkerAlt className="mr-2" size={18} color="#00C25D" />
                                Mamay Rd, Buhangin, Davao City, Davao del Sur
                            </p>

                            <p className="flex items-center gap-2">
                                <FaPhoneAlt className="mr-2" size={18} color="#00C25D" />
                                0822332333
                            </p>

                            <p className="flex items-center gap-2">
                                <HiGlobeAlt className="mr-2" size={22} color="#00C25D" />
                                <a
                                    href="http://www.wyndhamhotels.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-500"
                                >
                                    www.wyndhamhotels.com
                                </a>
                            </p>
                        </div>

                        {/* CREDITS BOX */}
                        <div className="bg-bgLogin rounded-md mt-6 w-full">
                            <div className="bg-white p-4 border-l-4 border-bgTour">
                                <p className="text-xs text-gray-400">Photo Courtesy</p>
                                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2">
                                    <li>
                                        <a
                                            href="http://MicrotelWyndhamDavao.guestreservation.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            MicrotelWyndhamDavao.guestreservation.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-6 self-center cursor-default -mt-10">
                    <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                        <Image src={micro3} alt="Vikings" className="w-full h-full object-cover" priority />
                    </div>

                    <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                        <Image src={micro4} alt="Vikings" className="w-full h-full object-cover" priority />
                    </div>
                </div>
                <hr className="w-full border-bgTour" />





                {/* --------- Home Crest Hotel --------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start cursor-default">

                    {/* RIGHT TEXT*/}
                    <div className="flex flex-col justify-center gap-2 cursor-default self-center order-2 md:order-1">

                        <h2 className="text-2xl md:text-4xl text-black font-bold mb-5 flex items-center gap-2">
                            Home Crest Hotel
                            <span className="flex items-center text-yellow-400 text-xl">
                                <HiStar /> <HiStar /> <HiStar />
                            </span>
                        </h2>

                        <div className="flex flex-col text-black gap-3 text-sm">
                            <p className="flex items-center gap-2">
                                <FaMapMarkerAlt className="mr-2" size={18} color="#00C25D" />
                                Tulip Drive corner Walnut Avenue, Ecoland Dr, Davao City, 8000 Davao del Sur
                            </p>

                            <p className="flex items-center gap-2">
                                <FaPhoneAlt className="mr-2" size={18} color="#00C25D" />
                                0922 998 8268
                            </p>

                            <p className="flex items-center gap-2">
                                <HiGlobeAlt className="mr-2" size={22} color="#00C25D" />
                                <a
                                    href="http://homecresthotel.com.ph"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-500"
                                >
                                    homecresthotel.com.ph
                                </a>
                            </p>
                        </div>

                        {/* CREDITS BOX */}
                        <div className="bg-bgLogin rounded-md mt-6 w-full">
                            <div className="bg-white p-4 border-l-4 border-bgTour">
                                <p className="text-xs text-gray-400">Photo Courtesy</p>
                                <ul className="list-disc pl-5 text-xs text-gray-400 mt-2 space-y-2">
                                    <li>
                                        <a
                                            href="http://www.homecresthotel.com.ph"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            www.homecresthotel.com.ph
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="http://booking.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            booking.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* LEFT IMAGES */}
                    <div className="flex flex-col gap-4 w-full order-1 md:order-2">
                        <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                            <Image src={home4} alt="People's Park" className="w-full h-full object-cover" priority />
                        </div>

                        <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                            <Image src={home3} alt="People's Park" className="w-full h-full object-cover" priority />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-6 self-center cursor-default -mt-10">
                    <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                        <Image src={home2} alt="Vikings" className="w-full h-full object-cover" priority />
                    </div>

                    <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] bg-gray-200 border-4 border-bgTour rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                        <Image src={home1} alt="Vikings" className="w-full h-full object-cover" priority />
                    </div>
                </div>





            </section>
            <Footer />
        </main>
    );
}
