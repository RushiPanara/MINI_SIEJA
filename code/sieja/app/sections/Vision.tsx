export default function Vision() {
  const visions = [
    {
      title: "Futuristic Experience",
      description:
        "Creating next-generation digital experiences with immersive visuals, smooth interactions, and futuristic design aesthetics.",
    },
    {
      title: "Immersive Innovation",
      description:
        "Combining creativity and advanced technology to transform innovative ideas into intelligent and impactful realities.",
    },
    {
      title: "Human-Centered Technology",
      description:
        "Designing technology that enhances human potential through intuitive, meaningful, and accessible digital solutions.",
    },
  ];

  return (
    <section
      id="vision"
      className="py-32 px-6 bg-gradient-to-b from-black to-zinc-950"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-cyan-400 uppercase tracking-[0.4em] mb-4">
          Vision
        </p>

        <h2 className="text-5xl font-bold mb-12">
          Building Tomorrow’s Imagination
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {visions.map((item) => (
            <div
              key={item.title}
              className="glass rounded-3xl p-10 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}