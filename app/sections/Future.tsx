"use client";
import { motion } from "framer-motion";
export default function Future() {
  return (
    <section
      id="future"
      className="py-32 text-center px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.img
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="/images/future.jpeg"
          alt="Future"
          className="rounded-3xl glow"
        />

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-cyan-400 uppercase tracking-[0.4em] mb-4">
            FUTURE OF SIEJA
          </h2>


          <p className="text-gray-300 leading-8">
            SIEJA has the potential to become a futuristic innovation platform where ideas
            transform into real-world technology. 
            In the future, it can grow beyond a website into a global 
            ecosystem for startups, robotics, smart solutions, and 
            next-generation digital experiences.By combining innovation
            with modern technology, SIEJA could inspire creators,
            developers, and visionaries worldwide.
              
          </p>
        </motion.div>
      </div>
    </section>
  );
}