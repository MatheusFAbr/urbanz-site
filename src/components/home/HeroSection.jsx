import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@/images/header_image.png";

const HERO_IMAGE = heroImage;

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      });
    };
    const el = containerRef.current;
    if (el) el.addEventListener("mousemove", handleMouseMove);
    return () => { if (el) el.removeEventListener("mousemove", handleMouseMove); };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#FAFAFA] flex flex-col md:flex-row"
    >
      {/* Left — Image */}
      <div className="relative w-full md:w-[60%] h-[60vh] md:h-full overflow-hidden">
        <motion.img
          src={HERO_IMAGE}
          alt="Modelo vestindo hoodie oversized em cenário urbano brutalista"
          className="w-full h-full object-cover grayscale"
          style={{
            transform: `perspective(1200px) rotateY(${mousePos.x * 2}deg) rotateX(${-mousePos.y * 2}deg) scale(1.05)`,
            transition: "transform 0.4s ease-out",
          }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#FAFAFA]/40 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAFAFA]/60 md:hidden" />

        {/* Coordinates */}
        <motion.div
          className="absolute bottom-6 left-6 font-mono text-[10px] tracking-[0.3em] text-white/60 uppercase"
          style={{
            transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)`,
            transition: "transform 0.6s ease-out",
          }}
        >
          LAT: -24.32 | LONG: -47.63
        </motion.div>
      </div>

      {/* Right — Typography */}
      <div className="relative w-full md:w-[40%] h-[40vh] md:h-full flex flex-col justify-center items-start px-8 md:px-12">
        {/* Giant background number */}
        <span className="absolute top-1/2 -translate-y-1/2 right-0 text-[280px] md:text-[400px] font-black text-[#050505]/[0.03] leading-none select-none pointer-events-none">
          01
        </span>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10"
        >
          <p className="font-mono text-[10px] tracking-[0.4em] text-[#888888] uppercase mb-4">
            Juquiá, São Paulo — Brasil
          </p>
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-black tracking-[-0.04em] leading-[0.9] text-[#050505] uppercase">
            URBANZ
          </h1>
          <h2 className="text-[clamp(1.2rem,3vw,2.5rem)] font-black tracking-[0.15em] leading-tight text-[#050505]/20 uppercase mt-1">
            JUQUIÁ
          </h2>
          <div className="w-12 h-[2px] bg-[#FF4D00] mt-6 mb-4" />
          <p className="font-mono text-xs text-[#888888] leading-relaxed max-w-[280px]">
            Seu destino premium para o autêntico streetwear masculino. Vista sua atitude.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-8 md:left-12 flex items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-4 h-4 text-[#888888]" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#888888] uppercase">
            Scroll
          </span>
        </motion.div>
      </div>

      {/* Hairline border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E5E5E5]" />
    </section>
  );
}