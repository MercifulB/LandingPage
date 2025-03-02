'use client';

import { JSX, useState } from "react";
import Image from "next/image";

// Define the type for the content object
type TabContent = {
  title: string;
  description: JSX.Element;
  imageSrc: string;
  imageAlt: string;
};

export const Works = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState<"Code" | "Publish" | "Diagram">("Code");

  // Content for each tab
  const content: Record<string, TabContent> = {
    Code: {
      title: "Ops Teams Write IaC",
      description: (
        <>
          DevOps and Platform teams use the infrastructure-as-code tools they know,
          such as Terraform / OpenTofu, Helm, or CloudFormation, and package them into
          use-case-specific modules with your policy tooling built in.
          <br />
          <strong className="text-white">
            Your IaC is no longer just config; it&apos;s a functional software asset.
          </strong> Policy and cost tools are embedded, cutting down maintenance for Ops teams.
        </>
      ),
      imageSrc: "/works-code.webp",
      imageAlt: "Platform Screenshot",
    },
    Publish: {
      title: "Ops Teams Publish Modules",
      description: (
        <>
          Bundled modules are published in the Massdriver Service Catalog, where developers can easily discover supported cloud services and applications with your organization&apos;s compliance, security, and guardrails in place.
          <br /><br />
          <strong className="text-white">
            A central repository for provisioning, policy, and cost controls of your cloud resources.
          </strong>
        </>
      ),
      imageSrc: "/works-publish.webp",
      imageAlt: "Publish Screenshot",
    },
    Diagram: {
      title: "Devs Diagram to Provision",
      description: (
        <>
          Developers diagram what they want and your IaC modules are used to provision.
          Developers don&apos;t have to copy Helm Charts or Terraform Modules. They don&apos;t have brittle IaC pipelines. Instead, Massdriver uses your modules to provision and builds ephemeral CI/CD pipelines behind the scenes based on the tooling <i>in</i> your modules.
          <br /><br />
          <strong className="text-white">
            Say goodbye to 100&apos;s of brittle IaC pipelines.
          </strong>
        </>
      ),
      imageSrc: "/works-diagram.webp", // Add a new image here
      imageAlt: "Diagram Screenshot",
    },
  };

  return (
    <div className="w-full py-20 lg:py-12 work-bg-gradient text-white px-6 flex flex-col justify-center items-center">
    
      <div className="text-center w-full max-w-[1600px] mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold">How it Works</h2>
      </div>

      {/* Bordered Section (Wider & Centered) */}
      <div className="border border-gray-600 border-opacity-50 p-8 ml-4 w-full mx-8">
        
        {/* Navigation Tabs - Spread further apart */}
        <div className="flex justify-center gap-6 mb-12 text-xl font-semibold">
        <span
            className={`mr-8 cursor-pointer ${activeTab === "Code" ? "text-white border-b-2 border-white pb-2" : "text-gray-400 hover:text-white"}`}
            onClick={() => setActiveTab("Code")}
          >
            1. Code
          </span>
          <span
            className={`mr-8 cursor-pointer ${activeTab === "Publish" ? "text-white border-b-2 border-white pb-2" : "text-gray-400 hover:text-white"}`}
            onClick={() => setActiveTab("Publish")}
          >
            2. Publish
          </span>
          <span
            className={`mr-8 cursor-pointer ${activeTab === "Diagram" ? "text-white border-b-2 border-white pb-2" : "text-gray-400 hover:text-white"}`}
            onClick={() => setActiveTab("Diagram")}
          >
            3. Diagram
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
          {/* Left Side - Text Content (Smaller Column) */}
          <div className="lg:col-span-5 text-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              {content[activeTab].title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-300">
              {content[activeTab].description}
            </p>
          </div>

          {/* Right Side - Image (Larger Column) */}
          <div className="lg:col-span-7 flex justify-center">
            <Image
              src={content[activeTab].imageSrc}
              alt={content[activeTab].imageAlt}
              width={4000}
              height={2000}
              className="w-full max-w-full h-auto border border-gray-600"
            />
          </div>

        </div>
      </div>
    </div>
  );
};
