"use client";

import Image from "next/image";
import aboutTribesPic from "../image/mainpage.jpg";

export default function aboutTribesPage() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center gap-8 mt-14 lg:mt-20">
        <div className="w-full flex justify-center">
          <Image
            src={aboutTribesPic}
            alt="11 Tribes of Davao City"
            className="rounded-lg shadow-lg object-cover w-full max-w-[1000px] h-auto"
            priority
          />
        </div>
        <div className="w-full text-black text-justify">
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
            In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
            lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel
            class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
          <p className="text-lg leading-relaxed mt-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
            In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
            lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel
            class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
          <p className="text-lg leading-relaxed mt-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
            In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
            lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel
            class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
        </div>
      </section>
    </>
  );
}
