import React from "react";
import { motion } from "framer-motion";

export default function MarqueeStrip() {
  const text = "URBANZ JUQUIÁ — STREETWEAR PREMIUM — VISTA SUA ATITUDE — ";
  const repeated = text.repeat(6);

  return (
    <div className="relative bg-[#050505] py-4 overflow-hidden">
      <motion.div
        className="whitespace-nowrap"
        animate={{ x: [0, -(text.length * 9)] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <span className="text-xs font-mono tracking-[0.4em] text-white/40 uppercase">
          {repeated}
        </span>
      </motion.div>
    </div>
  );
}