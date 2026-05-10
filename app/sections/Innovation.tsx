import Image from "next/image";

export default function Innovation() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <Image src="/images/idea_watch.jpeg" alt="Smart watch" className="rounded-3xl glow" width={600} height={400} />

        <div>
          <p className="text-cyan-400 uppercase tracking-[0.4em] mb-4">
            Innovation
          </p>

          <h2 className="text-5xl font-bold mb-8">
            Technology Meets Creativity
          </h2>

          <p className="text-gray-400 leading-8">
            Every interaction inside SIEJA is designed to feel premium,
            cinematic, immersive, and futuristic.Innovation is the power
             to transform creative ideas into meaningful reality through 
             technology, imagination, and intelligent thinking. It drives
              progress by creating smarter solutions, futuristic experiences,
               and new possibilities for the world.
          </p>
        </div>
      </div>
    </section>
  );
}