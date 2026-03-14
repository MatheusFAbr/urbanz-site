import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";
import { Link } from "react-router-dom";

export default function CategoryHeader({ title, subtitle, num, description }) {
  return (
    <div className="relative bg-[#FAFAFA] pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Giant background number */}
      <span className="absolute top-1/2 -translate-y-1/2 right-0 text-[250px] md:text-[380px] font-black text-[#050505]/[0.03] leading-none select-none pointer-events-none">
        {num}
      </span>

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          to={createPageUrl("Home")}
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-[#888888] hover:text-[#FF4D00] transition-colors duration-300 uppercase mb-8"
        >
          <ArrowLeft className="w-3 h-3" />
          Voltar
        </Link>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="font-mono text-[10px] tracking-[0.4em] text-[#888888] uppercase mb-2">
          {subtitle}
        </p>
        <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black tracking-[-0.04em] leading-[0.9] text-[#050505] uppercase">
          {title}
        </h1>
        <div className="w-12 h-[2px] bg-[#FF4D00] mt-5 mb-4" />
        <p className="font-mono text-xs text-[#888888] max-w-md leading-relaxed">
          {description}
        </p>
      </motion.div>

      {/* Hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E5E5E5]" />
    </div>
  );
}