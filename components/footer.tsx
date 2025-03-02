import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full bg-[#e6f2f8] text-gray-800 py-10">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Top Section: Logo, System Status & Social Icons */}
        <div className="flex flex-col sm:flex-row items-start justify-between text-center sm:text-left">
          {/* Left Section: Logo and Social Icons */}
          <div className="flex flex-col items-start">
            {/* Logo */}
            <Image src="/massdriver_logo.svg" alt="Massdriver Logo" width={160} height={40} />
            
            {/* System Status */}
            <div className="mt-2 flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-[#0079AD] font-medium border border-[#0079AD] px-3 py-1 rounded-sm text-sm">
                System Operational
              </span>
            </div>

            {/* Social Icons */}
            <div className="mt-4 flex space-x-4">
              <Image src="/slack.svg" alt="Slack" width={40} height={40} className="cursor-pointer" />
              <Image src="/youtube.svg" alt="YouTube" width={40} height={40} className="cursor-pointer" />
              <Image src="/twitter.svg" alt="Twitter" width={40} height={40} className="cursor-pointer" />
              <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} className="cursor-pointer" />
              <Image src="/github.svg" alt="GitHub" width={40} height={40} className="cursor-pointer" />
            </div>
          </div>

          {/* Right Section: Certifications & Start Free Trial Button */}
          <div className="flex flex-col items-start sm:items-end">
            {/* "Start Free Trial" Button */}
            <Link
              href="/register"
              className="px-6 py-3 bg-gradient-to-r from-[#18acc0] to-[#3ca8eb] text-white font-bold rounded-md shadow-md hover:from-teal-400 hover:to-blue-400 mt-4"
            >
              Start Free Trial →
            </Link>

            {/* Partner Badges */}
            <div className="flex space-x-4 mt-4">
              <Image src="/cc2.png" alt="AWS Partner" width={80} height={80} className="object-contain" />
              <Image src="/cc1.png" alt="Google Cloud Certified" width={80} height={80} className="object-contain" />
              <Image src="/salesforce.svg" alt="SourceForge Reviews" width={80} height={80} className="object-contain" />
            </div>
          </div>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-10 text-left text-sm">
          <div>
            <h3 className="font-bold text-gray-900">Marketplace</h3>
            <Link href="/" className="block text-gray-600 mt-2">AWS</Link>
            <Link href="/" className="block text-gray-600">Azure</Link>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Templates</h3>
            <Link href="/" className="block text-gray-600 mt-2">AWS</Link>
            <Link href="/" className="block text-gray-600">GCP</Link>
            <Link href="/" className="block text-gray-600">Azure</Link>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Solutions</h3>
            <Link href="/" className="block text-gray-600 mt-2">Developer Self Service</Link>
            <Link href="/" className="block text-gray-600">OpenTofu for Enterprise</Link>
            <Link href="/" className="block text-gray-600">Platform Engineering Accelerator</Link>
            <Link href="/" className="block text-gray-600">Cost Management</Link>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Company</h3>
            <Link href="/" className="block text-gray-600 mt-2">About Us</Link>
            <Link href="/" className="block text-gray-600">Jobs</Link>
            <Link href="/" className="block text-gray-600">News</Link>
            <Link href="/" className="block text-gray-600">Contact Us</Link>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Resources</h3>
            <Link href="/" className="block text-gray-600 mt-2">Pricing</Link>
            <Link href="/" className="block text-gray-600">Blog</Link>
            <Link href="/" className="block text-gray-600">Docs</Link>
            <Link href="/" className="block text-gray-600">Webinars</Link>
            <Link href="/" className="block text-gray-600">Pitch Deck</Link>
            <Link href="/" className="block text-gray-600">FAQ</Link>
          </div>
        </div>

        {/* Bottom Section: Copyright & Links */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center text-gray-600 text-sm">
          © Massdriver, Inc. 2024 • <Link href="/" className="hover:underline">Terms of Service</Link> • <Link href="/" className="hover:underline">Privacy Policy</Link> • <Link href="/" className="hover:underline">Security</Link>
        </div>
      </div>
    </div>
  );
};
