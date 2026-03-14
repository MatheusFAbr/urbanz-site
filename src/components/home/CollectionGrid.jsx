import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import sneakersImg from "@/images/sneakers_image.png";
import hoodiesImg from "@/images/hoodies_image.png";
import camisetasImg from "@/images/camisas_image.png";
import acessoriosImg from "@/images/acessorios_image.png";

const collections = [
  {
    id: "sneakers",
    title: "SNEAKERS",
    subtitle: "Exclusivos",
    image: sneakersImg,
    alt: "Sneakers premium em close-up sobre superfície de concreto",
    num: "02",
    page: "Sneakers",
  },
  {
    id: "hoodies",
    title: "HOODIES",
    subtitle: "& Moletons",
    image: hoodiesImg,
    alt: "Modelo vestindo hoodie streetwear em quadra de basquete",
    num: "03",
    page: "Hoodies",
  },
  {
    id: "camisetas",
    title: "CAMISETAS",
    subtitle: "Oversized",
    image: camisetasImg,
    alt: "Modelo com camiseta gráfica oversized em cenário industrial",
    num: "04",
    page: "Camisetas",
  },
  {
    id: "acessorios",
    title: "ACESSÓRIOS",
    subtitle: "& Complementos",
    image: acessoriosImg,
    alt: "Acessórios streetwear dispostos sobre concreto brutalista",
    num: "05",
    page: "Acessorios",
  },
];

function CollectionCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative overflow-hidden cursor-pointer"
      onClick={() => window.location.href = createPageUrl(item.page)}
    >
      {/* Giant background number */}
      <span className="absolute top-4 left-4 text-[120px] md:text-[180px] font-black text-[#050505]/[0.03] leading-none select-none pointer-events-none z-0">
        {item.num}
      </span>

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[#F0F0F0]">
        <img
          src={item.image}
          alt={item.alt}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#050505]/0 group-hover:bg-[#050505]/30 transition-all duration-500 flex items-center justify-center">
          <span className="font-mono text-[10px] tracking-[0.4em] text-white uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/40 px-4 py-2">
            Explorar
          </span>
        </div>
        {/* District watermark on hover */}
        <div className="absolute bottom-3 right-3 font-mono text-[9px] tracking-[0.3em] text-white/0 group-hover:text-white/50 transition-all duration-500 uppercase">
          District: Juquiá
        </div>
      </div>

      {/* Text */}
      <div className="pt-4 pb-6 relative z-10">
        <div className="flex items-baseline gap-3">
          <h3 className="text-xl md:text-2xl font-black tracking-[-0.02em] text-[#050505] uppercase">
            {item.title}
          </h3>
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#888888]">
            {item.subtitle}
          </span>
        </div>
        <div className="w-0 group-hover:w-8 h-[2px] bg-[#FF4D00] transition-all duration-500 mt-2" />
      </div>

      {/* Hairline border */}
      <div className="absolute top-0 right-0 w-px h-full bg-[#E5E5E5] hidden md:block" />
    </motion.div>
  );
}

export default function CollectionGrid() {
  return (
    <section className="relative bg-[#FAFAFA] py-16 md:py-24">
      {/* Section header */}
      <div className="px-6 md:px-12 mb-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-[10px] tracking-[0.4em] text-[#888888] uppercase mb-2">
              Coleções
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-[-0.03em] text-[#050505] uppercase">
              CATEGORIAS
            </h2>
          </div>
          <div className="hidden md:block font-mono text-[10px] tracking-[0.2em] text-[#888888] uppercase">
            2024 — Coleção Atual
          </div>
        </div>
        <div className="w-full h-px bg-[#E5E5E5] mt-6" />
      </div>

      {/* Grid */}
      <div className="px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-0">
        {collections.map((item, i) => (
          <CollectionCard key={item.id} item={item} index={i} />
        ))}
      </div>

      <div className="px-6 md:px-12 mt-12">
        <div className="w-full h-px bg-[#E5E5E5]" />
      </div>
    </section>
  );
}