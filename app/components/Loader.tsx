"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      <motion.div
        animate={{
          rotate: 360,
        }}

        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}

        className="w-24 h-24 border-4 border-cyan-400 border-t-transparent rounded-full"
      />
    </div>
  );
}