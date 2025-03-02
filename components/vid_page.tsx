'use client';

import { useEffect, useMemo, useState } from "react";

import Image from "next/image";

export const Vid_page = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["AllMinds AI", "Merciful"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="relative w-full overflow-hidden min-h-screen flex flex-col items-center justify-center vid-bg-gradient px-6 py-0">
      {/* Hexagon Shape in the Background */}
      <Image
        src="/hexagon.svg" // Ensure it's in the public folder
        alt="Hexagon Shape"
        width={800}
        height={800}
        className="absolute top-[-70] right-[-200px] md:right-[-100px] lg:right-[-100px] w-[100px] md:w-[100px] lg:w-[450px] pointer-events-none"
      />

      <div className="w-full">
        <div className="container mx-auto">
          <div className="flex gap-8 py-20 lg:py-18 items-center justify-center flex-col">

            <div className="flex gap-4 flex-col items-center">
              <h1 className="text-5xl md:text-5xl tracking-tighter text-center font-regular">
                <span className="text-spektr-cyan-50 text-black">
                  See What’s Possible with Massdriver’s IaC-Powered Platform
                </span>
              </h1>
            </div>

            {/* Embed YouTube video */}
            <div className="w-full max-w-[1000px] mx-auto mt-0 flex justify-center items-center">
              <iframe
                width="80%"
                height="500"
                src="https://www.youtube.com/embed/yxAPMfGR0jE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>

       {/* Cloud Certified and VC Backed Section */}
    <div className="w-full mt-0 max-w-[900px] flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-8 mx-auto">

      {/* Cloud Certified Column */}
      <div className="flex flex-col items-center w-full sm:w-1/2 gap-3">
        <h2 className="text-xl text-gray-500 mb-2 mt-4">Cloud Certified</h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-[500px]">
          <Image
            src="/cc1.png"
            alt="Logo 1"
            width={50}
            height={40}
            className="object-contain"
          />
          <Image
            src="/cc2.png"
            alt="Logo 2"
            width={50}
            height={40}
            className="object-contain"
          />
          <Image
            src="/cc3.svg"
            alt="Logo 3"
            width={180}
            height={60}
            className="object-contain"
          />
        </div>
      </div>

      {/* VC Backed Column */}
      <div className="flex flex-col items-center w-full sm:w-1/2 gap-3">
        <h2 className="text-xl text-gray-500 mb-2 mt-4">VC Backed</h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-[500px]">
          <Image
            src="/vb1.png"
            alt="Logo 4"
            width={50}
            height={40}
            className="object-contain"
          />
          <Image
            src="/vb2.png"
            alt="Logo 5"
            width={150}
            height={60}
            className="object-contain"
          />
          <Image
            src="/vb3.png"
            alt="Logo 6"
            width={50}
            height={40}
            className="object-contain"
          />
        </div>
      </div>

        </div>
          </div>
        </div>
      </div>
    </section>
  );
};
