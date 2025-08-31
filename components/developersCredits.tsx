"use client";

import { FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";



export default function HotelAccommodations() {

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <main
    className={`flex flex-col items-center px-4 py-12 bg-gray-100 mt-10 transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`}
    >
        <h1 className="text-3xl font-semibold text-black mt-5 mb-5 text-left w-full max-w-6xl">
            Developers
        </h1>

        <div className="flex flex-col lg:flex-row gap-4 w-full max-w-6xl">      
            <div className="bg-white rounded-xl shadow-lg p-8 flex-1 flex flex-col gap-8">
                <div className="flex-1 flex flex-col justify-between relative">
                    <div>
                        <h1 className="text-black font-bold text-xl flex items-center">
                            Sean Michael T. Doinog 
                        </h1>

                        <div className="flex items-center text-green-600 mt-2">
                            <span className="text-sm font-medium">Front-End Developer</span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-400 mt-10">
                            <span className="text-sm font-medium">
                            In-charge of the Front-End development.
                            </span>
                        </div>

                        {/* Social Media */}
                        <div className="flex items-center gap-4 text-gray-400 mt-5">
                            <a
                                href="https://github.com/NganuuuMaaannn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-black transition-colors duration-200"
                                >
                                <BsGithub size={20} />
                            </a>

                            <a
                                href="https://www.facebook.com/seanthesheepzxc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                                >
                                <FaFacebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 flex-1 flex flex-col gap-8">
                <div className="flex-1 flex flex-col justify-between relative">
                    <div>
                        <h1 className="text-black font-bold text-xl flex items-center">
                            Eugene Bulabog 
                        </h1>

                        <div className="flex items-center text-green-600 mt-2">
                            <span className="text-sm font-medium">UI/UX</span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-400 mt-10">
                            <span className="text-sm font-medium">
                            In-charge of the designs and informations to be placed.
                            </span>
                        </div>

                        {/* Social Media */}
                        <div className="flex items-center gap-4 text-gray-400 mt-5">
                            <a
                                href="https://github.com/Yugin22"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-black transition-colors duration-200"
                                >
                                <BsGithub size={20} />
                            </a>

                            <a
                                href="https://www.facebook.com/yugin.bulabog.2024"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                                >
                                <FaFacebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </main>
  );
}
