import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none">
          <path
            d="M0 300C200 450 400 150 600 300S1000 450 1200 300L1440 0V600H0V0Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="600">
              <stop offset="0%" stopColor="#ff9211" />
              <stop offset="100%" stopColor="#0f0f0f" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-[#ff9211]">Empower</span> Your Development Journey
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0">
            Join the Core blockchain ecosystem, stake tokens, contribute on GitHub, and earn rewards as a top developer.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 bg-[#ff9211] text-[#0f0f0f] font-semibold rounded-full hover:bg-[#e0820f] transition-all duration-300 shadow-lg">
              Get Started
            </button>
            <ConnectButton chainStatus="icon" />
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          className="lg:w-1/2 mt-10 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-80 h-80 mx-auto">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#ff9211" strokeWidth="4" opacity="0.2" />
              <circle cx="100" cy="100" r="60" fill="#ff9211" opacity="0.1" />
              <path
                d="M70 130 L130 70 M70 70 L130 130"
                stroke="#ff9211"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[#ff9211]">
              Core Devs
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}