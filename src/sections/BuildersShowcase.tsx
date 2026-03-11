"use client";

import { BrowserProvider, JsonRpcProvider } from "ethers";
import { motion } from "framer-motion";

export default function BuildersShowcase() {
  return (
    <section className="relative w-full bg-black text-white py-28 px-6 overflow-hidden">
      {/* FUNDO CINEMATOGRÁFICO */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)]" />

      {/* ====================== PARTE 1 — START SECTION ====================== */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="max-w-6xl mx-auto mb-24"
>
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
    Start your <span className="text-[#D4AF37]">EKD Journey</span>
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
    {[
      {
        title: "Start Building",
        text: "Build, launch, and scale your product with the right resources and support.",
        icon: "🏗️",
        button: "Start Now",
      },
      {
        title: "Start Coding",
        text: "Master EKD smart contracts and our blockchain tools with our E-Code+ community, EdenKingDom Innovation Center, and E-Lab.",
        icon: "💻",
        button: "Learn More",
      },
      {
        title: "Start Earning",
        text: "Get a wallet, claim E-Coin, and explore top dApps in the EKD ecosystem.",
        icon: "💰",
        button: "Get Wallet",
      },
      {
        title: "Start Connecting",
        text: "Join a global community of innovators, validators, and dream builders.",
        icon: "🌐",
        button: "Join Now",
      },
      {
        title: "Get Employed at EKD",
        text: "Work with visionaries shaping the future of global innovation. At EKD Corporation, we value creativity, leadership, and purpose-driven impact. Join our corporate, tech, and field teams across Africa, America, and beyond.",
        icon: "🧠",
        button: "Apply Now",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="bg-[#0D0D0D]/80 border border-gray-800 p-6 rounded-xl flex flex-col justify-between shadow hover:shadow-[0_0_25px_#D4AF3755]"
      >
        <div>
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
        </div>
        <button className="mt-6 bg-[#D4AF37]/10 border border-[#D4AF37]/40 hover:bg-[#D4AF37]/20 py-2 rounded-lg text-[#D4AF37] text-sm transition">
          {item.button}
        </button>
      </motion.div>
    ))}
  </div>
</motion.div>


      {/* ====================== PARTE 2 — BUILDERS & Creators PROOF ====================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Proof That <span className="text-[#D4AF37]">Builders & Creators Grow Here</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <img
            src="https://images.unsplash.com/photo-1581090464674-84d3b1d04a3e?auto=format&fit=crop&w=800&q=80"
            className="rounded-xl object-cover h-[250px]"
            alt="builders"
          />
          <div className="bg-[#0D0D0D]/70 border border-gray-800 rounded-xl p-8 flex flex-col justify-center text-center">
            <h3 className="text-4xl font-bold text-[#D4AF37]">92,768</h3>
            <p className="text-gray-400 mt-2 text-sm">Assets Issued</p>
          </div>
          <div className="bg-[#0D0D0D]/70 border border-gray-800 rounded-xl p-8 flex flex-col justify-center text-center">
            <h3 className="text-4xl font-bold text-[#D4AF37]">4,828</h3>
            <p className="text-gray-400 mt-2 text-sm">Hackathons Worldwide</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
            className="rounded-xl object-cover h-[250px]"
            alt="teamwork"
          />
        </div>
      </motion.div>

      {/* ====================== PARTE 3 — GLOBAL COMMUNITY ====================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Build alongside our <span className="text-[#D4AF37]">E-Code+ global community</span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Validate the Network",
              text: "Run a validator to help keep the EKD blockchain secure and fast for all users.",
              icon: "🔒",
            },
            {
              title: "Secure by Staking",
              text: "Stake E-Coin and earn rewards while supporting decentralization.",
              icon: "🪙",
            },
            {
              title: "Build an App",
              text: "Launch your next big idea using our APIs and developer SDKs.",
              icon: "⚙️",
            },
            {
              title: "Contribute with Code",
              text: "Contribute to open-source projects and get paid through ecosystem grants.",
              icon: "💡",
            },
            {
              title: "Tokenize an Asset",
              text: "Turn real-world items into digital assets and trade globally.",
              icon: "🌍",
            },
            {
              title: "Join a Hackathon",
              text: "Collaborate, innovate and get rewarded for building amazing things.",
              icon: "🏆",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0D0D0D]/70 border border-gray-800 p-6 rounded-xl hover:shadow-[0_0_25px_#D4AF3755]"
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ====================== PARTE 4 — HOW WE BUILT THIS ====================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          How we <span className="text-[#D4AF37]">built this at EKD?</span>
        </h2>
        <p className="text-gray-400 text-center mb-10">
          Hear from pioneers creating the future of global markets with EKD.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-xl overflow-hidden">
            <video
              src="/videos/founder-interview-1.mp4"
              controls
              poster="https://images.unsplash.com/photo-1600880292089-90e24d1f8f54?auto=format&fit=crop&w=800&q=80"
              className="rounded-xl w-full h-[300px] object-cover"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <video
              src="/videos/founder-interview-2.mp4"
              controls
              poster="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
              className="rounded-xl w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
