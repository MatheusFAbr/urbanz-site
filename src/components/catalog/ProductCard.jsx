import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export default function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[#F0F0F0]">
        <img
          src={product.image}
          alt={product.alt}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#050505]/0 group-hover:bg-[#050505]/20 transition-all duration-500" />

        {/* District watermark */}
        <div className="absolute bottom-3 left-3 font-mono text-[9px] tracking-[0.3em] text-white/0 group-hover:text-white/60 transition-all duration-500 uppercase">
          District: Juquiá
        </div>

        {/* CTA button */}
        <div className="absolute bottom-3 right-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <a
            href={`https://wa.me/5511989005635?text=Olá! Tenho interesse no produto: ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 bg-[#FF4D00] text-white font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-2 hover:bg-white hover:text-[#050505] transition-colors duration-300"
            aria-label={`Consultar preço de ${product.name}`}
          >
            <ShoppingBag className="w-3 h-3" />
            Consultar
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 pb-2">
        <p className="font-mono text-[9px] tracking-[0.3em] text-[#888888] uppercase mb-1">
          {product.brand}
        </p>
        <h3 className="text-sm font-black tracking-[-0.01em] text-[#050505] uppercase">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-black text-[#050505]">
            {product.price}
          </span>
          {product.tag && (
            <span className="font-mono text-[8px] tracking-[0.2em] text-[#FF4D00] uppercase border border-[#FF4D00]/30 px-2 py-0.5">
              {product.tag}
            </span>
          )}
        </div>
        <div className="w-0 group-hover:w-6 h-[2px] bg-[#FF4D00] transition-all duration-500 mt-3" />
      </div>
    </motion.div>
  );
}