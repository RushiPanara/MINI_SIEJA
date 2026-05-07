export default function Workflow() {
  const steps = [
    {
      title: "Submit Idea",
      description:
        "Share your innovative idea, project vision, required design, report, or concept details with the SIEJA platform.",
    },
    {
      title: "Analyze & Research",
      description:
        "Our team carefully studies the idea, analyzes possibilities, and researches the best technologies and solutions.",
    },
    {
      title: "Collaboration & Development",
      description:
        "We connect with experts, creators, and companies to design, prototype, and develop the most effective solution.",
    },
    {
      title: "Final Innovation",
      description:
        "The idea transforms into a real-world innovative solution powered by creativity, technology, and futuristic thinking.",
    },
  ];

  return (
    <section id="workflow" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-20">
          Innovation Workflow
        </h2>

        {/* Workflow Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="glass p-10 rounded-3xl relative hover:-translate-y-2 transition-all duration-300"
            >
              {/* Number */}
              <span className="text-7xl font-black text-cyan-400/20 absolute top-2 right-4">
                0{index + 1}
              </span>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-6">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}