'use client';

import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";

import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";

export const Hero = () => {
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
<section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient px-6 py-16">
    {/* Hexagon Shape in the Background */}
    <Image
        src="/hexagon.svg" // Ensure it's in the public folder
        alt="Hexagon Shape"
        width={800}
        height={800}
        className="absolute top-1 right-[-200px] md:right-[-100px] lg:right-[-100px] w-[100px] md:w-[100px] lg:w-[450px] pointer-events-none"
    /> 

    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-18 items-center justify-center flex-col">

          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-5xl md:text-6xl max-w-3xl tracking-tighter text-center font-regular">
            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                    <motion.span
                    key={index}
                    className="absolute font-semibold text-transparent bg-clip-text 
                                bg-gradient-to-r from-[#18acc0] to-[#3ca8eb]"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                        titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                            }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                            }
                    }
                    >
                    {title}
                    </motion.span>
                ))}
                </span>

              <span className="text-spektr-cyan-50 text-[#444444]">DevOps Without the Red Tape</span>
              
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed tracking-tight text-[#666666] max-w-4xl text-center">
            At Massdriver, we believe in prevention, not permission. <br></br><br></br>
            Our platform lets "ops" teams encode their expertise and your organization’s 
            non-negotiables into preapproved self-service infrastructure powered by the 
            IaC tools you already know.
            <br></br>
            <br></br>
            Massdriver—Fast by default. Safe by design.

            </p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <Button size="lg" className="px-8 py-6 rounded-sm gap-4 text-[#38a8e7] font-bold border-[#38a8e7] hover:text-[#38a8e7] cursor-pointer " variant="outline">
              See Demo
            </Button>
            <Button size="lg" className="px-10 py-6.5 rounded-sm text-white font-bold flex items-center space-x-2 transition-all 
                        bg-gradient-to-r from-[#1e79b0] to-[#3aa7ea] hover:from-teal-400 hover:to-blue-400 shadow-md cursor-pointer">
            Start free trial<MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
    </section>

  );
};
