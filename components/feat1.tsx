import { Button } from "@/components/ui/button";


export const Feat1 = () => (
    <div className="w-full py-10 lg:py-10 bg-[#1e3741]">
        <div className="p-5 flex gap-4 flex-col items-center">
              <h1 className="text-5xl md:text-5xl tracking-tighter text-center font-regular max-w-200">
                <span className="text-spektr-cyan-50 text-white">
                        Infrastructure at the Speed of Thought
                </span>
              </h1>
              <p className="text-xl text-white max-w-140 text-center">
              Enable developer self-service without risking compliance, security, cost, or reliability.
              </p>
            </div>
      <div className="container mx-auto p-8">
        <div className="flex flex-col lg:flex-row gap-20 lg:items-center">
          <div className="flex gap-4 flex-col flex-1">
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-l my-6 font-regular text-white text-left">
                Cloud Service Catalog
              </h2>
              <p className="text-m text-white lg:max-w-120 leading-relaxed tracking-tight text-muted-foreground text-left">
                Your DevOps teams have a lot on their plate, don't lose another great teammate to burnout.
                <br /><br />
                Enable developers to self-serve cloud infrastructure from approved IaC templates in a central catalog.
                <br /><br />
                Developers drag, connect, and deploy. No more last-minute Jira tickets to the DevOps team.
              </p>
            </div>
          </div>
  
          {/* Video Section - Responsive */}
          <video
            className="w-full max-w-[600px] md:max-w-[500px] lg:max-w-[700px] aspect-video h-auto flex-1 shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/feat_vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Second Section (Video on Left - Inverted) */}
      <div className="pt-20 flex flex-col lg:flex-row-reverse gap-20 lg:items-center">
        <div className="flex gap-4 flex-col flex-1">
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-l my-6 font-regular text-white text-left">
            Cost & Health Insights
            </h2>
            <p className="text-m text-white max-w-xl lg:max-w-120 leading-relaxed tracking-tight text-muted-foreground text-left">
            Get a clear view of your cloud's health and costs right where your developers manage their infrastructure.
            <br /><br />
            With real-time insights, you can make proactive adjustments, ensuring systems are efficient and cost-effective.
            <br /><br />
            Never get caught with a surprise cloud bill again.
            </p>
          </div>
        </div>

        {/* Video Section - Left */}
        <video
          className="w-full max-w-[600px] md:max-w-[500px] lg:max-w-[700px] aspect-video h-auto flex-1 shadow-lg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/feat_vid2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Third Section (Video on Right Again) */}
      <div className="pt-20 flex flex-col lg:flex-row gap-20 lg:items-center">
        <div className="flex gap-4 flex-col flex-1">
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-l my-6 font-regular text-white text-left">
            Inventory & Audit Records
            </h2>
            <p className="text-m text-white max-w-xl lg:max-w-120 leading-relaxed tracking-tight text-muted-foreground text-left">
                Get instant visibility into every asset, streamline your workflows, and keep your projects moving forward efficiently.
                <br /><br />
                Say goodbye to the chaos of scattered resources and hello to seamless, organized control.
                <br /><br />
                No more hunting for assets or piecing together the puzzle of your cloud infrastructure.
                </p>
          </div>
        </div>

        {/* Video Section - Right */}
        <video
          className="w-full max-w-[600px] md:max-w-[500px] lg:max-w-[700px] aspect-video h-auto flex-1 shadow-lg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/feat_vid3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
            <div className="flex justify-center items-center mt-10">
            <Button size="lg" className="px-16 py-6.5 min-w-[160px] rounded-sm text-white font-bold flex items-center transition-all 
                        bg-gradient-to-r from-[#18acc0] to-[#3ca8eb] hover:from-teal-400 cursor-pointer hover:to-blue-400 shadow-md whitespace-nowrap">
                See demo <MoveRight className="w-4 h-4" />
            </Button>
            </div>


        </div>

    </div>
    
  );
  
