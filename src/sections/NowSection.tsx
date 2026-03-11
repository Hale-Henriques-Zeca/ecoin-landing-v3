"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const categories = [
  { id: "all", name: "All" },
  { id: "defi", name: "DeFi" },
  { id: "ecoin", name: "E-Coin" },
  { id: "ekd", name: "Institutions" },
  { id: "exchange", name: "Exchange" },
  { id: "governance", name: "Governance" },
];

const mockNews = [
  {
    id: 1,
    title: "E-Coin integrates with EKD Pay global gateway",
    category: "FINTECH",
    date: "21 Dec 2025",
  },
  {
    id: 2,
    title: "E-Chain activates smart contracts layer for EKD apps",
    category: "BLOCKCHAIN",
    date: "20 Dec 2025",
  },
  {
    id: 3,
    title: "E-DEX opens high-liquidity pool for E-Coin/USDT",
    category: "EXCHANGE",
    date: "19 Dec 2025",
  },
  {
    id: 4,
    title: "AltaTec Group launches corporate governance DAO",
    category: "INSTITUTIONAL",
    date: "18 Dec 2025",
  },
  {
    id: 5,
    title: "E-Pay introduces on-chain card settlements",
    category: "PAYMENTS",
    date: "17 Dec 2025",
  },
];

export default function NowSection() {
  const [selected, setSelected] = useState("all");
  const [news, setNews] = useState(mockNews);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Quando o Supabase estiver ativo, substituir este mock:
        // const { data, error } = await supabase
        //   .from("news")
        //   .select("*")
        //   .order("created_at", { ascending: false });
        // if (data) setNews(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const filteredNews =
    selected === "all"
      ? news
      : news.filter((item) =>
          item.category.toLowerCase().includes(selected.toLowerCase())
        );

  return (
    <section className="relative w-full bg-black text-white py-24 px-6 flex flex-col items-center overflow-hidden">
      {/* Fundo cinematográfico */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)]" />

      {/* Cabeçalho */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-10">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            What’s happening <span className="text-[#D4AF37]">now</span>
          </motion.h2>
          <p className="text-gray-400 mt-2 text-base">
            As últimas atualizações do ecossistema EdenKingDom.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="border border-[#D4AF37]/50 text-[#D4AF37] px-5 py-2 rounded-full hover:bg-[#D4AF37]/20 transition"
        >
          View all →
        </motion.button>
      </div>

      {/* Estrutura geral */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="col-span-1 border border-gray-800 rounded-xl p-6 bg-[#0D0D0D]/60">
          <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">
            Explore Categories
          </h3>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => setSelected(cat.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition ${
                    selected === cat.id
                      ? "bg-[#D4AF37]/20 text-[#D4AF37]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Feed principal */}
        <div className="col-span-3 border border-gray-800 rounded-xl bg-[#0D0D0D]/60">
          {loading ? (
            <p className="text-center text-gray-400 py-10">
              Carregando atualizações...
            </p>
          ) : (
            <div className="divide-y divide-gray-800">
              {filteredNews.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  whileHover={{
                    backgroundColor: "rgba(212,175,55,0.05)",
                    scale: 1.01,
                  }}
                  className="flex justify-between items-center px-6 py-5 cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-gray-600 w-4">{i + 1}</span>
                    <div>
                      <h4 className="text-white font-medium hover:text-[#D4AF37] transition">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400">
                        Categoria: {item.category}
                      </p>
                    </div>
                  </div>
                  <span className="text-[#D4AF37] text-sm font-semibold">
                    {item.date}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
