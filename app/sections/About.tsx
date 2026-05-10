"use client";

import { motion } from "framer-motion";
export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.img
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="/images/idea_spaceship.jpeg"
          alt="Idea spaceship"
          className="rounded-3xl glow"
        />

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p className="text-cyan-400 uppercase tracking-[0.4em] mb-4">
            About SIEJA
          </p>

          <h2 className="text-5xl font-bold mb-8">
            A New Era Of Human Innovation
          </h2>

          <p className="text-gray-300 leading-8">
            <strong>Choose Beyond the Matrix. Be Different. Choose Different.</strong><br />
            SIEJA: Drive the Future. Build the Intelligence.
            SIEJA is a multidisciplinary technology company revolutionizing the automotive and robotics
            industries. From solar-powered hypercars to advanced robotic systems, we are committed to
            sustainable innovation and the pursuit of mechanical perfection. We don’t wait for the future—we
            build it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}