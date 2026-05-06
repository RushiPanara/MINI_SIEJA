export default function Showcase() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Innovation Showcase</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-[#0b0f1a] rounded-xl border border-gray-800">
          AI Concepts
        </div>
        <div className="p-6 bg-[#0b0f1a] rounded-xl border border-gray-800">
          Future Tech
        </div>
        <div className="p-6 bg-[#0b0f1a] rounded-xl border border-gray-800">
          Research Models
        </div>
      </div>
    </section>
  );
}