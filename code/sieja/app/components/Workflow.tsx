const steps = [
  "Idea Submission",
  "Research & Analysis",
  "Development",
  "Innovation Transformation",
  "Implementation"
];

export default function Workflow() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        How SIEJA Works
      </h2>

      <div className="grid md:grid-cols-5 gap-6 text-center">
        {steps.map((step, i) => (
          <div
            key={i}
            className="p-4 border border-gray-800 rounded-xl hover:border-cyan-400 transition"
          >
            {step}
          </div>
        ))}
      </div>
    </section>
  );
}