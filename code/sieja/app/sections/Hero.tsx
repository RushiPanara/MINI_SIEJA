"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        px-4
        pt-28
        pb-14
        sm:px-6
        sm:pt-24
      "
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      >
        <source src="/images/car_model_video.mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Grid */}
      <div className="absolute inset-0 grid-bg" />

      {/* Glow Effects */}
      <div className="absolute top-10 left-0 h-40 w-40 sm:h-72 sm:w-72 bg-cyan-500/20 blur-[90px] sm:blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 h-40 w-40 sm:h-72 sm:w-72 bg-purple-500/20 blur-[90px] sm:blur-[120px] rounded-full" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 mx-auto w-full max-w-5xl text-center"
      >
        {/* Animated Wrapper */}
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <p
            className="
              mb-4
              text-[10px]
              uppercase
              tracking-[0.18em]
              text-cyan-400
              sm:mb-6
              sm:text-sm
              sm:tracking-[0.5em]
            "
          >
            Choose Beyond the Matrix.
          </p>

          <h1
            className="
              text-3xl
              font-semibold
              leading-tight
              sm:text-5xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Transforming
            <br />
            <span className="gradient-text">
              Ideas Into Reality
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            px-2
            text-sm
            leading-relaxed
            text-gray-300
            sm:mt-8
            sm:text-base
            md:text-lg
          "
        >
          SIEJA is a futuristic innovation ecosystem where imagination,
          technology, and visionary thinking combine into practical digital
          experiences.
        </p>

        {/* Button */}
        <button
          className="
            mt-8
            rounded-full
            bg-cyan-400
            px-6
            py-3
            text-sm
            font-bold
            text-black
            transition-all
            hover:scale-105
            sm:mt-10
            sm:px-8
            sm:py-4
            sm:text-base
          "
        >
          Create Account
        </button>
      </motion.div>
    </section>
  );
}