"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="logo"
            width={60}
            height={60}
            className="rounded-full glow"
          />
          <Image
            src="/Images/Name_Img.png"
            alt="logo"
            width={100}
            height={60}
            className="rounded-full glow"
          />

        </div>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <a href="#about">About</a>
          <a href="#vision">Vision</a>
          <a href="#workflow">Workflow</a>
          <a href="#future">Future</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}