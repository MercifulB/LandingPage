"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);

  const testimonials = [
    {
      text: "The employees of Massdriver are incredibly attentive and helpful. Great product with excellent support.",
      name: "Ben Rosand",
      title: "Founding Engineer",
      logo: "/cc1.png",
    },
    {
      text: "With Massdriver we were able to replace days of planning and debugging backend infrastructure with Terraform to having it up and running seamlessly in under an hour.",
      name: "Bernie Conrad",
      title: "Lead Software Engineer",
      logo: "/cc2.png",
    },
    {
      text: "We've had a great experience. The Massdriver team has always been responsive to our questions and ready to jump in.",
      name: "Elijah Kim",
      title: "Senior Software Engineer",
      logo: "/iv.png",
    },
    {
      text: "Massdriver has helped us scale our infrastructure effortlessly, allowing us to focus on building great products.",
      name: "Sophia Martinez",
      title: "DevOps Engineer",
      logo: "/vb1.png",
    },
    {
      text: "With Massdriver, infrastructure provisioning is streamlined, reducing deployment time significantly.",
      name: "Valeriy Tverdohleb",
      title: "CTO",
      logo: "/vp.png",
    },
  ];

  return (
    <div className="w-full py-20 lg:py-40 test-bg-gradient">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 relative">
          {/* Section Title */}
          <div className="flex justify-between items-center">
            <h2 className="text-3xl md:text-5xl text-white tracking-tighter font-regular">
              Loved by DevOps and Software Engineers
            </h2>
          </div>

          {/* Custom Navigation Arrows at Top Right */}
          <div className="absolute top-[10px] right-0 flex space-x-4">
            {/* Left Arrow */}
            <button
              onClick={() => api?.scrollPrev()}
              className="p-2 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Image src="/left-arrow.svg" alt="Previous" width={60} height={40} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => api?.scrollNext()}
              className="p-2 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Image src="/right-arrow.svg" alt="Next" width={60} height={40} />
            </button>
          </div>

          {/* Carousel with 3 Testimonials at a Time */}
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="flex">
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/3 px-3" key={index}>
                  <div className="bg-gradient-to-b from-[#f9fafb] to-[#e5e7eb] rounded-lg shadow-lg p-6 flex flex-col justify-between min-h-[500px]">
                    <p className="text-gray-800 text-lg">{testimonial.text}</p>
                    <div className="mt-6 flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-gray-500 text-sm">{testimonial.title}</p>
                      </div>
                      <Image
                        src={testimonial.logo}
                        alt="Company Logo"
                        width={testimonial.logo === "/vb2.png" ? 150 : 80} // Bigger size for vb2.png
                        height={testimonial.logo === "/vb2.png" ? 100 : 40} // Bigger size for vb2.png
                        className={`object-contain ${testimonial.logo === "/vb2.png" ? "scale-150" : ""}`}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="w-full mt-0 max-w-none flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-8 mx-auto">
  
  {/* Left Column (Title) */}
  <div className="mt-20 flex flex-col w-full gap-3">
    <h2 className="ml-10 text-l text-white text-4xl mb-4 self-start">Featured In</h2>

    {/* Logos Grid (5x2 Layout) */}
    <div className="px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full mx-auto justify-items-center">
      <Image src="/ms_logo.svg" alt="Logo 1" width={500} height={80} className="object-contain w-[300px] md:w-[350px] h-auto" />
        <Image src="/tc_logo.svg" alt="Logo 2" width={500} height={80} className="object-contain w-[300px] md:w-[350px] h-auto" />
        <Image src="/hn_logo.svg" alt="Logo 3" width={500} height={90} className="object-contain w-[300px] md:w-[350px] h-auto" />
        <Image src="/prodh_logo.svg" alt="Logo 4" width={500} height={80} className="object-contain w-[300px] md:w-[350px] h-auto" />
        <Image src="/do_logo.png" alt="Logo 5" width={500} height={90} className="object-contain w-[300px] md:w-[350px] h-auto" />

        <Image src="/sa_logo.png" alt="Logo 6" width={500} height={90} className="object-contain w-[300px] md:w-[350px] h-auto" />
        <Image src="/yf_logo.png" alt="Logo 7" width={300} height={75} className="object-contain w-[100px] md:w-[150px] h-auto" />
        <Image src="/sl_logo.svg" alt="Logo 8" width={500} height={100} className="object-contain w-[300px] md:w-[350px] h-auto" />
        <Image src="/labj_logo.png" alt="Logo 9" width={500} height={110} className="object-contain w-[300px] md:w-[350px] h-auto" />
        <Image src="/cf_logo.png" alt="Logo 10" width={500} height={120} className="object-contain w-[300px] md:w-[350px] h-auto" />
        </div>
        </div>
      </div>

        </div>
      </div>
  );
};
