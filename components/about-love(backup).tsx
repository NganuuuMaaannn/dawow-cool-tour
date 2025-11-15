"use client";

import { useState, useEffect } from "react";
// import Image from "next/image";

// import logo1 from "@/image/Logo/cca.jpg";
// import logo2 from "@/image/Logo/chatme.jpg";
// import logo3 from "@/image/Logo/dc logo.jpg";
// import logo4 from "@/image/Logo/DOT.png";
// import logo5 from "@/image/Logo/hcdc_logo.png";
// import logo6 from "@/image/Logo/ids.jpg";
// import logo7 from "@/image/Logo/Life-is-Here-small.png";
// import logo8 from "@/image/Logo/love-philippines-logo-png_seeklogo-619869.png";
// import logo9 from "@/image/Logo/tourism logo.jpg";

export default function AboutLoveDavao() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <main
      className={`flex justify-center items-center px-4 py-12 bg-gray-100 mt-10 transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
    >
      <div className="w-full mt-5 max-w-6xl">
        <div className="bg-white  rounded-2xl shadow-xl p-10 md:p-14 space-y-10 cursor-default mx-auto">

          <h1 className="text-3xl font-montserrat md:text-4xl font-bold text-center text-gray-800">
            About Love, Davao
          </h1>

          <div className="text-gray-700 font-normal space-y-6 leading-relaxed text-justify text-md md:text-xl">

            <p className="text-center">
              Welcome to Love, Davao! — where every journey you will embark begins with a
              heartbeat.
            </p>

            <p>
              Here, you will discover the very heart and soul of Davao through the eyes of the
              11 Indigenous Communities, whose stories, colors, and traditions have shaped Davao
              City’s identity for generations. From the rhythmic beat of the agong and kulintang
              to the intricate weaves of indigenous textiles, Love, Davao! brings you closer to the
              culture, flavors, and people that make this city truly one of a kind.
            </p>

            <p>
              Our Kadayawan e-Village lets you explore Davao’s living heritage. You will meet its
              people, taste its flavors, join its festivities, and see the land that holds their
              narratives. But this journey is more than just a glimpse of Davao culture; it is your
              window into everything Davao has to offer — its food, festivities, nature, and of
              course, Dabawenyo people.
            </p>

            <p>
              Whether you are a traveler, a learner, or simply curious, this is the perfect place
              for you. Right at your fingertips, you can get to know Davao deeply and start
              planning your next unforgettable trip!
            </p>

            <p>
              Wherever you are in the world, Davao awaits you with open arms. Truly, Love, Davao!
            </p>
          </div>

          {/* <div className="pt-10">
            <div className="flex flex-col items-center space-y-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-14 place-items-center">
                {[logo1, logo2, logo3, logo4].map((logo, index) => (
                  <div
                    key={index}
                    className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center bg-white rounded-xl shadow-sm p-3 hover:scale-105 transition"
                  >
                    <Image
                      src={logo}
                      alt={`Logo ${index + 1}`}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 sm:gap-14 place-items-center">
                {[logo5, logo6, logo7, logo8].map((logo, index) => (
                  <div
                    key={index}
                    className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center bg-white rounded-xl shadow-sm p-3 hover:scale-105 transition"
                  >
                    <Image
                      src={logo}
                      alt={`Logo row 2 - ${index + 1}`}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ))}
                <div
                  className="
                    w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center 
                    bg-white rounded-xl shadow-sm p-3 hover:scale-105 transition
                    col-span-2 sm:col-span-1 justify-self-center
                  ">
                  <Image
                    src={logo9}
                    alt="Last Logo"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </main>
  );
}
