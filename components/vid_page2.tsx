'use client';

import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";


export const Vid_page2 = () => {
  
  return (
    <section className="relative w-full overflow-hidden min-h-screen flex flex-col items-center justify-center vid-bg-gradient2 px-6 py-0">

      <div className="w-full">
        <div className="container mx-auto">
          <div className="flex gap-8 py-20 lg:py-18 items-center justify-center flex-col">

            <div className="flex gap-4 flex-col items-center">
              <h1 className="text-5xl md:text-5xl tracking-tighter text-center font-regular max-w-200">
                <span className="text-spektr-cyan-50 text-black">
                Deliver On-Demand, Self-Service of Standardized Infrastructure
                </span>
              </h1>
            </div>

            {/* Embed YouTube video */}
            <div className="w-full max-w-[1000px] mx-auto mt-0 flex justify-center items-center">
              <iframe
                width="70%"
                height="400"
                src="https://www.youtube.com/embed/Zd2SSE-iT3g"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="shadow-lg"
              ></iframe>
            </div>
      
      <div className="flex flex-row gap-3 items-center">
            <Button size="lg" className="px-10 py-6.5 rounded-sm text-white font-bold flex items-center transition-all 
                         bg-gradient-to-r from-[#18acc0] to-[#3ca8eb] hover:from-teal-400 cursor-pointer hover:to-blue-400 shadow-md whitespace-nowrap">
            See demo<MoveRight className="w-4 h-4" />
            </Button>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
};
