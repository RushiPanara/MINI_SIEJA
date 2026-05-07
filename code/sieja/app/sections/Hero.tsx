"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80 scale-[1.05] sm:scale-100"
      >
        <source src="/images/car_model_video.mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Grid */}
      <div className="absolute inset-0 grid-bg" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-40 sm:w-72 h-40 sm:h-72 bg-cyan-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-40 sm:w-72 h-40 sm:h-72 bg-purple-500/20 blur-[120px] rounded-full" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center px-4 sm:px-6 w-full max-w-5xl mx-auto"
      >
        
        {/* Text Animation Wrapper */}
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <p className="uppercase tracking-[0.25em] sm:tracking-[0.5em] text-cyan-400 mb-4 sm:mb-6 text-xs sm:text-sm">
            Choose Beyond the Matrix.
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            Transforming
            <br />
            <span className="gradient-text">
              Ideas Into Reality
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-5 sm:mt-8 text-gray-300 px-2">
          SIEJA is a futuristic innovation ecosystem where imagination,
          technology, and visionary thinking combine into practical digital
          experiences.
        </p>

        {/* Button */}
        <button className="mt-7 sm:mt-10 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 transition-all glow text-sm sm:text-base">
          Create Account
        </button>

      </motion.div>
    </section>
  );
}