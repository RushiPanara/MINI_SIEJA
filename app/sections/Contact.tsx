export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto glass rounded-3xl p-6 sm:p-10 md:p-12">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Contact SIEJA
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Connect with SIEJA and become part of the future of innovation,
            technology, creativity, and futuristic digital experiences.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

          {/* Email */}
          <div className="glass rounded-2xl p-5 sm:p-6 border border-cyan-400/20 hover:border-cyan-400 transition overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-cyan-400">
              Email
            </h3>
              <p>siejaofficial@gmail.com</p>
            
          </div>

          {/* Instagram */}
          <div className="glass rounded-2xl p-5 sm:p-6 border border-cyan-400/20 hover:border-cyan-400 transition overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-cyan-400">
              Instagram
            </h3>

            <a
              href="https://instagram.com/sieja.official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition break-words text-sm sm:text-base"
            >
              @sieja.official
            </a>
          </div>

          {/* LinkedIn */}
          <div className="glass rounded-2xl p-5 sm:p-6 border border-cyan-400/20 hover:border-cyan-400 transition overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-cyan-400">
              LinkedIn
            </h3>

            <a
              href="https://www.linkedin.com/company/sieja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition break-all text-sm sm:text-base"
            >
              https://www.linkedin.com/company/sieja
            </a>
          </div>

          {/* Whatsapp */}
          <div className="glass rounded-2xl p-5 sm:p-6 border border-cyan-400/20 hover:border-cyan-400 transition overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-cyan-400">
              Whatsapp
            </h3>

            <a
              href="https://whatsapp.com/channel/0029VbCKzjeCRs1oEmuFgA05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition break-all text-sm sm:text-base"
            >
              https://whatsapp.com/channel/0029VbCKzjeCRs1oEmuFgA05
            </a>
          </div>

          {/* Location */}
          <div className="glass rounded-2xl p-5 sm:p-6 border border-cyan-400/20 hover:border-cyan-400 transition">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-cyan-400">
              Location
            </h3>

            <p className="text-gray-300 text-sm sm:text-base">
              India
            </p>
          </div>

          {/* Future Vision */}
          <div className="glass rounded-2xl p-5 sm:p-6 border border-cyan-400/20 hover:border-cyan-400 transition">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-cyan-400">
              Vision
            </h3>

            <p className="text-gray-300 text-sm sm:text-base">
              Transforming Ideas Into Reality Through AI & Innovation
            </p>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-14">
          <a
            href="mailto:siejaofficial@gmail.com"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-cyan-400 text-black font-bold glow hover:scale-105 transition duration-300 text-sm sm:text-base"
          >
            Connect With SIEJA
          </a>
        </div>
      </div>
    </section>
  );
}