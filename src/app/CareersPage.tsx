"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CareersPage() {
  const positions = [
    {
      title: "Blockchain Engineer",
      department: "Technology & Innovation",
      location: "Nhamatanda, Mozambique / Remote",
      type: "Full-Time",
      description:
        "Develop and optimize smart contracts, backend integrations, and DeFi architecture for EKD’s token ecosystem.",
    },
    {
      title: "Frontend Developer",
      department: "Product Design & Experience",
      location: "Toronto, Canada / Hybrid",
      type: "Full-Time",
      description:
        "Create interactive, high-performance UIs for EKD dashboards, trading platforms, and investor panels.",
    },
    {
      title: "AI Systems Analyst",
      department: "EKD Code+ Lab",
      location: "New York, USA / Remote",
      type: "Contract",
      description:
        "Integrate AI-driven data pipelines, automate decision frameworks, and support EKD’s autonomous management systems.",
    },
    {
      title: "Public Relations & Brand Officer",
      department: "Communications & Media",
      location: "Nhamatanda, Mozambique / Field",
      type: "Full-Time",
      description:
        "Represent EKD’s vision across events, media, and community partnerships. Ensure global alignment of the corporate identity.",
    },
    {
      title: "Corporate Administrator",
      department: "Governance & Compliance",
      location: "Nhamatanda, Mozambique / Office",
      type: "Full-Time",
      description:
        "Manage legal documentation, coordinate executive agendas, and oversee corporate reporting between EKD divisions.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* FUNDO */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)]" />

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Work at <span className="text-[#D4AF37]">EKD Corporation</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Join a new era of innovation, technology, and purpose.  
          We’re building the ecosystem that connects finance, infrastructure, and humanity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="#open-positions"
            className="bg-[#D4AF37]/10 border border-[#D4AF37]/40 hover:bg-[#D4AF37]/20 text-[#D4AF37] px-6 py-3 rounded-lg text-sm font-medium transition"
          >
            Explore Open Positions ↓
          </Link>
        </motion.div>
      </section>

      {/* CULTURE & BENEFITS SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Culture & <span className="text-[#D4AF37]">Benefits</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Global Vision",
              text: "Be part of a worldwide corporation connecting Africa, America, and Europe through digital innovation.",
              icon: "🌍",
            },
            {
              title: "Innovation Everyday",
              text: "From blockchain to AI, you’ll work on technologies shaping tomorrow’s decentralized economy.",
              icon: "⚙️",
            },
            {
              title: "Inclusive Growth",
              text: "We empower diversity, creativity, and purpose — our strength comes from our people.",
              icon: "🤝",
            },
            {
              title: "Learning & Development",
              text: "Gain access to continuous training programs, mentorship, and EKD Academy certifications.",
              icon: "🎓",
            },
            {
              title: "Flexible Work",
              text: "Choose remote, hybrid, or field roles depending on your lifestyle and regional needs.",
              icon: "💼",
            },
            {
              title: "Impact Projects",
              text: "Work on real social impact — from education and clean energy to smart finance.",
              icon: "💡",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0D0D0D]/70 border border-gray-800 p-6 rounded-xl text-center hover:shadow-[0_0_25px_#D4AF3755]"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-[#D4AF37]">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEPARADOR */}
      <div className="relative z-10 mt-10 mb-16 flex items-center gap-4 px-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#D4AF37]/80">
          Open Positions
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
      </div>

      {/* OPEN POSITIONS */}
      <section id="open-positions" className="max-w-6xl mx-auto px-6 pb-28">
        <div className="space-y-6">
          {positions.map((job, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0D0D0D]/80 border border-gray-800 p-6 rounded-xl hover:shadow-[0_0_25px_#D4AF3755] cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#D4AF37]">
                    {job.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{job.department}</p>
                </div>
                <div className="flex flex-col md:items-end text-sm text-gray-400 mt-3 md:mt-0">
                  <span>{job.location}</span>
                  <span>{job.type}</span>
                </div>
              </div>
              <p className="text-gray-300 mt-4 text-sm">{job.description}</p>

              <Link
                href="#apply-form"
                className="inline-block mt-4 text-sm text-[#D4AF37] hover:underline"
              >
                Apply Now →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* APPLICATION SECTION */}
      <section
        id="apply-form"
        className="bg-[#0D0D0D]/60 border-t border-[#D4AF37]/20 py-20 px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Apply to <span className="text-[#D4AF37]">Join EKD</span>
        </h2>
        <p className="text-gray-400 mb-10">
          Send your professional profile directly or connect your LinkedIn.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-lg mx-auto space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-transparent border border-gray-700 p-3 rounded-lg text-sm text-white placeholder-gray-500 focus:border-[#D4AF37]/60 outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-transparent border border-gray-700 p-3 rounded-lg text-sm text-white placeholder-gray-500 focus:border-[#D4AF37]/60 outline-none"
          />
          <textarea
            placeholder="Tell us briefly about yourself..."
            rows={4}
            className="w-full bg-transparent border border-gray-700 p-3 rounded-lg text-sm text-white placeholder-gray-500 focus:border-[#D4AF37]/60 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 hover:bg-[#D4AF37]/20 py-3 rounded-lg text-[#D4AF37] text-sm font-medium transition"
          >
            Submit Application
          </button>
        </form>

        <p className="text-gray-500 text-xs mt-6">
          Or send your résumé directly to{" "}
          <span className="text-[#D4AF37]">careers@ekdcorporation.org</span>
        </p>
      </section>
    </main>
  );
}
