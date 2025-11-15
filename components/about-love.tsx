"use client";

import { useState, useEffect } from "react";

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
      <div className="w-full mt-10 max-w-6xl">
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
        </div>
      </div>
    </main>
  );
}
