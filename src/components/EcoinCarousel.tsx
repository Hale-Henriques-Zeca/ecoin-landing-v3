"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import ECoinContractInfo from "@/components/ECoinContractInfo";


type Slide = { title: string; desc: string; img: string };

const slides: Slide[] = [
  { title: "AI-Powered Smart Contracts", desc: "Automation meets security — powered by E-Coin Intelligence.", img: "/images/ai-contract.png" },
  { title: "Cross-Chain Swap Live", desc: "Seamless interoperability across all supported blockchains.", img: "/images/swap.jpg" },
  { title: "Buy-Back Engine Active", desc: "Every transaction fuels E-Coin sustainability & value.", img: "/images/buyback.jpg" },
  { title: "E-Coin is Zero Ownership By Design", desc: "No central control. Ownership-less. Pure decentralization by architecture.", img: "/images/Zero Ownership.png" },
  { title: "Low Gas Fee Protocol", desc: "Optimized for ultra-low latency transactions worldwide.", img: "/images/gasfee.jpg" },
  { title: "There is No Admin", desc: "Only E-Treasury team acts through buy-back mechanism ensuring full decentralization.", img: "/images/Decentralized.jpg" },
  { title: "No Mint by Design", desc: "Mint 100% emitted at deploy time — once and forever.", img: "/images/No Mint.png" },
  { title: "No Burn by Design", desc: "Economic burn via buyback and treasury system. Buyback re-acquires tokens to reserve/inactive wallets.", img: "/images/No Burn by Design.png" },
  { title: "No Privileged Functions", desc: "No owner, no admin, no central control — immutable code by architecture.", img: "/images/No Privileged Functions.png" },
  { title: "Fixed Supply", desc: "E-Coin total supply is permanently capped at deployment — deflationary by logic.", img: "/images/Fixed Supply.png" },
  { title: "Immutable Contract", desc: "No upgrades, no proxy — immutable and verified forever on-chain.", img: "/images/Immutable Contract.png" },
  { title: "No Halving", desc: "No artificial halving events — value is sustained through utility and buyback mechanics.", img: "/images/No Halving.png" },
  { title: "Binance Smart Chain (BEP-20)", desc: "Fully compatible with BSC ecosystem — fast, secure, and low-cost.", img: "/images/Binance Smart Chain (BEP-20).png" },
  { title: "Visit Our Whitepaper & Solidity Interpretation", desc: "Learn more about E-Coin, tokenomics, buyback, and the E-Treasury system.", img: "/images/Whitepaper.jpg" },
];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function ECoinSafeguardRingCarousel() {
  // ✅ Troca aqui para o teu logo real (PNG/SVG)
  const ECOIN_LOGO = "/images/ecoin-logo.png";

  const controls = useAnimation();
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState(0);

  // ring rotation (drag)
  const [dragY, setDragY] = useState(0); // degrees offset
  const dragRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const startDeg = useRef(0);

  // ring geometry
  const count = slides.length;
  const step = 360 / count;

  // Responsive-ish radius
  const radius = 360; // px (aumenta/diminui p/ mais “distância”)

  // Start / stop infinite rotation (Bitget-like)
  useEffect(() => {
    if (paused) {
      controls.stop();
      return;
    }

    // continuous slow spin
    controls.start({
      rotateY: [dragY, dragY - 360],
      transition: { duration: 32, ease: "linear", repeat: Infinity },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, dragY]);

  // Drag to rotate (mouse + touch)
  useEffect(() => {
    const el = dragRef.current;
    if (!el) return;

    const onDown = (e: MouseEvent | TouchEvent) => {
      isDown.current = true;
      setPaused(true);
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      startX.current = clientX;
      startDeg.current = dragY;
    };

    const onUp = () => {
      isDown.current = false;
      setPaused(false);
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDown.current) return;
      e.preventDefault();

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const dx = clientX - startX.current;

      // sensitivity
      const next = startDeg.current + dx * 0.2; // 0.2 deg per px
      setDragY(next);

      // pick "front-most" coin as active
      // Front is angle ~ 0deg, so compute nearest index to -next
      const normalized = ((-next % 360) + 360) % 360;
      const idx = Math.round(normalized / step) % count;
      setActive(idx);
    };

    el.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mousemove", onMove);

    el.addEventListener("touchstart", onDown, { passive: false });
    window.addEventListener("touchend", onUp);
    window.addEventListener("touchcancel", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });

    return () => {
      el.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mousemove", onMove);

      el.removeEventListener("touchstart", onDown as any);
      window.removeEventListener("touchend", onUp);
      window.removeEventListener("touchcancel", onUp);
      window.removeEventListener("touchmove", onMove as any);
    };
  }, [dragY, count, step]);

  const activeSlide = slides[active];



  return (
    <section className="relative w-full overflow-hidden bg-black py-16 sm:py-24">
      {/* Background glow (ouro vermelho + oceano azul) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="absolute top-24 left-10 h-72 w-72 rounded-full bg-[#0B5FFF]/10 blur-3xl" />
        <div className="absolute top-24 right-10 h-72 w-72 rounded-full bg-[#B11226]/10 blur-3xl" />
      </div>

      {/* Title like Bitget */}
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
          E-Coin is Safe, reliable and Descentralized
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/55">
          No one can stop or control E-Coin
        </p>
        {/* Contract + Whitepaper */}
  <ECoinContractInfo />
      </div>

      {/* Ring stage */}
      <div className="mx-auto mt-10 sm:mt-14 max-w-6xl px-6">
        <div
          ref={dragRef}
          className="relative mx-auto w-full max-w-[980px] rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          
          {/* ring viewport */}
          <div className="relative mx-auto h-[260px] sm:h-[320px] w-full overflow-hidden">
            {/* subtle vignettes */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black via-black/60 to-transparent z-30" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black via-black/60 to-transparent z-30" />

            {/* 3D scene */}
            <div className="absolute inset-0 flex items-center justify-center [perspective:1200px]">
              <motion.div
                className="relative h-[220px] sm:h-[280px] w-[220px] sm:w-[280px] [transform-style:preserve-3d]"
                animate={controls}
                style={{ transformStyle: "preserve-3d" }}
              >
                {slides.map((s, i) => {
                  const angle = i * step;

                  // front-most heuristic for “active” styling
                  // compute approx front angle based on current dragY only (good enough visually)
                  const normalized = ((angle + dragY) % 360 + 360) % 360;
                  const isFront = normalized < step / 2 || normalized > 360 - step / 2;

                  return (
                    <div
                      key={i}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
                      }}
                    >
                      {/* coin */}
                      <button
                        type="button"
                        onMouseEnter={() => {
                          setPaused(true);
                          setActive(i);
                        }}
                        onFocus={() => {
                          setPaused(true);
                          setActive(i);
                        }}
                        onBlur={() => setPaused(false)}
                        onClick={() => setActive(i)}
                        className={[
                          "group relative h-20 w-20 sm:h-24 sm:w-24 rounded-full",
                          "outline-none",
                          "transition-transform duration-300",
                          isFront ? "scale-[1.06]" : "scale-[0.92]",
                        ].join(" ")}
                        aria-label={s.title}
                      >
                        {/* coin rim */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/15 to-white/5 blur-[0.2px]" />
                        <div
                          className={[
                            "absolute inset-[2px] rounded-full border",
                            isFront ? "border-[#0B5FFF]/60" : "border-white/12",
                          ].join(" ")}
                        />
                        {/* coin face */}
                        <div className="absolute inset-[6px] rounded-full overflow-hidden bg-black">
                          <Image
                            src={s.img}
                            alt={s.title}
                            fill
                            className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>

                        {/* glow */}
                        <div
                          className={[
                            "absolute -inset-2 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            "bg-gradient-to-r from-[#D4AF37]/25 via-[#0B5FFF]/20 to-[#B11226]/20",
                          ].join(" ")}
                        />

                        {/* tiny title tooltip */}
                        <div className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/70 px-3 py-1 text-[11px] text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                          {s.title}
                        </div>
                      </button>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Info card (shows when paused/hover) */}
          <div className="mt-6 sm:mt-8 grid gap-4 sm:grid-cols-[1.2fr_2fr] items-stretch">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <div className="relative h-40 sm:h-full min-h-[180px]">
                <Image src={activeSlide.img} alt={activeSlide.title} fill className="object-cover opacity-95" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-white text-lg sm:text-xl font-semibold">
                  {activeSlide.title}
                </h3>

                <span
                  className={[
                    "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
                    paused ? "border-[#D4AF37]/40 text-[#D4AF37]" : "border-white/10 text-white/60",
                  ].join(" ")}
                >
                  {paused ? "Paused • Inspecting" : "Auto • Spinning"}
                </span>
              </div>

              <p className="mt-2 text-white/65 text-sm sm:text-base leading-relaxed">
                {activeSlide.desc}
              </p>

              <div className="mt-4 text-xs text-white/45">
                Tip: arraste com o mouse/dedo para girar • passe por cima para pausar • clique numa moeda para fixar
              </div>
            </div>
          </div>
        </div>

        
        </div>
      
    </section>
  );
}
