"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope } from "react-icons/fa";

// import dvo from "../image/dvo.png";
import logo1 from "@/image/Logo/cca.jpg";
import logo2 from "@/image/Logo/chatme.jpg";
import logo3 from "@/image/Logo/dc logo.jpg";
import logo4 from "@/image/Logo/DOT.png";
// import logo5 from "@/image/Logo/hcdc_logo.png";
import logo6 from "@/image/Logo/ids.jpg";
// import logo8 from "@/image/Logo/love-philippines-logo-png_seeklogo-619869.png";
// import logo9 from "@/image/Logo/tourism logo.jpg";

export default function AboutLoveDavao() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <main
            className={`flex justify-center items-center px-4 py-12 bg-bgLogin mt-10 transition-all duration-700 ease-out
      ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
            <div className="w-full max-w-6xl space-y-10 font-montserrat cursor-default">

                {/* --- Department of Tourism --- */}
                <div className="bg-white rounded-2xl mt-10 shadow-lg p-10 flex flex-col md:flex-row items-center gap-10">
                    <div className="w-68 h-68 bg-white rounded-full overflow-hidden flex justify-center items-center">
                        <Image
                            src={logo4}
                            alt="DOT Logo"
                            className="object-cover"
                            width={200}
                            height={200}
                        />
                    </div>

                    <div className="space-y-1 text-gray-800">
                        <p className="font-semibold italic text-xl mb-5">Department of Tourism</p>

                        <p className="font-bold">Tanya Virginia P. Rabat-tan</p>
                        <p className="font-semibold">Director, Regional Office XI</p>

                        <div className="flex items-start gap-3 pt-5">
                            <FaMapMarkerAlt className="text-hoverTour text-lg flex-shrink-0 mt-1" />
                            <p>
                                Room 512, 5th Floor, LANDCO Corporate Center Bldg.,
                                J.P. Laurel Avenue 8000 DAVAO CITY
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-hoverTour text-lg flex-shrink-0" />
                            <p>(082) 221 0070 | 221 6955</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaFax className="text-hoverTour text-lg flex-shrink-0" />
                            <p>(082) 225 1940</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-hoverTour text-lg flex-shrink-0 mt-1" />
                            <p className="text-blue-600 underline">
                                dotr11@tourism.gov.ph | dotrdavao@gmail.com | dotr11@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- City Government of Davao - Tourism --- */}
                <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-10">
                    <div className="w-68 h-68 bg-white rounded-full overflow-hidden flex justify-center items-center">
                        <Image
                            src={logo3}
                            alt="DOT Logo"
                            className="object-cover"
                            width={200}
                            height={200}
                        />
                    </div>

                    <div className="space-y-1 text-gray-800">
                        <p className="font-semibold italic text-xl mb-5">City Government of Davao - Tourism</p>

                        <p className="font-bold">ATTY. JONAH MARGARETTE F. PRESTO</p>
                        <p className="font-semibold">Officer-in-charge, Davao City Tourism Office</p>

                        <div className="flex items-start gap-3 pt-5">
                            <FaMapMarkerAlt className="text-hoverTour text-lg flex-shrink-0 mt-1" />
                            <p>
                                4th floor, Davao City Investment and Tourism Promotion Center Bldg, Palma Gil St. Davao City, 8000
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaFax className="text-hoverTour text-lg flex-shrink-0" />
                            <p>(082)285-5755 | 0968-223-0613 </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-hoverTour text-lg flex-shrink-0 mt-1" />
                            <p className="text-blue-600 underline">
                                ctoo@davaocity.gov.ph
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- Center for Culture and the Arts --- */}
                <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-10">
                    <div className="w-68 h-68 bg-white rounded-full overflow-hidden flex justify-center items-center">
                        <Image
                            src={logo1}
                            alt="DOT Logo"
                            className="object-cover"
                            width={200}
                            height={200}
                        />
                    </div>

                    <div className="space-y-1 text-gray-800">
                        <p className="font-semibold italic text-xl mb-5">Center for Culture and the Arts</p>

                        <p className="font-bold">Maricel C. Cayas</p>
                        <p className="font-semibold">Head, Center for Culture and Arts Office</p>

                        <div className="flex items-start gap-3 pt-5">
                            <FaMapMarkerAlt className="text-hoverTour text-lg flex-shrink-0 mt-1" />
                            <p>
                                Sta. Ana Avenue corner C. De Guzman Street, Brgy. 14-B, Davao City, Philippines
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaFax className="text-hoverTour text-lg flex-shrink-0" />
                            <p>(082)221-9071</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-hoverTour text-lg flex-shrink-0 mt-1" />
                            <p className="text-blue-600 underline">
                                cultureandarts@hcdc.edu.ph 
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- Institute of Davao Studies --- */}
                <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-10">
                    <div className="w-68 h-68 bg-white rounded-full overflow-hidden flex justify-center items-center">
                        <Image
                            src={logo6}
                            alt="DOT Logo"
                            className="object-cover"
                            width={200}
                            height={200}
                        />
                    </div>

                    <div className="space-y-1 text-gray-800">
                        <p className="font-semibold italic text-xl mb-5">Institute of Davao Studies</p>

                        <p className="font-bold">Rhys Lloyd D. Lacia, MAEd, LPT</p>
                        <p className="font-semibold">Coordinator, Institute of Davao Studies</p>

                        <div className="flex items-start gap-3 pt-5">
                            <FaMapMarkerAlt className="text-hoverTour text-lg flex-shrink-0 mt-1" />
                            <p>
                                Sta. Ana Avenue corner De Guzman Street. Brgy. 14-B, Davao City, Philippines
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaFax className="text-hoverTour text-lg flex-shrink-0" />
                            <p>(082)221-9071</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-hoverTour text-lg flex-shrink-0 mt-1" />
                            <p className="text-blue-600 underline">
                                instituteofdavaostudies@hcdc.edu.ph 
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- Dr. Ginalyn T. Yretarino --- */}
                <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-10">
                    <div className="w-68 h-68 bg-white rounded-full overflow-hidden flex justify-center items-center">
                        <Image
                            src={logo2}
                            alt="DOT Logo"
                            className="object-cover"
                            width={200}
                            height={200}
                        />
                    </div>

                    <div className="space-y-1 text-gray-800">

                        <p className="font-bold">Dr. Ginalyn T. Yretarino</p>
                        <p className="font-semibold">Dean, College of Tourism and Hospitality Education</p>

                        <div className="flex items-start gap-3 pt-5">
                            <FaMapMarkerAlt className="text-hoverTour text-lg flex-shrink-0 mt-1" />
                            <p>
                                Sta. Ana Avenue corner De Guzman Street. Brgy. 14-B, Davao City, Philippines
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaFax className="text-hoverTour text-lg flex-shrink-0" />
                            <p>(082) 221 - 9071</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-hoverTour text-lg flex-shrink-0 mt-1" />
                            <p className="text-blue-600 underline">
                                chatme@hcdc.edu.ph 
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
