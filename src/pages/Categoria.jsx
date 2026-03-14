import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";

const CATALOG = {
  sneakers: {
    title: "SNEAKERS",
    subtitle: "Exclusivos",
    description: "Tênis das marcas mais icônicas do streetwear. Conforto, estilo e exclusividade em cada par.",
    num: "02",
    products: [
      {
        id: 1,
        name: "Air Force Classic",
        brand: "Urban Essentials",
        price: "R$ 499",
        tag: "Bestseller",
        image: "https://media.base44.com/images/public/69b042fceb64ed960872539e/b2046bbb3_generated_image.png",
        alt: "Tênis branco premium sobre superfície de concreto",
      },
      {
        id: 2,
        name: "High Top Statement",
        brand: "Street Culture",
        price: "R$ 649",
        tag: "Novo",
        image: "https://media.base44.com/images/public/69b042fceb64ed960872539e/dc076bcbd_generated_image.png",
        alt: "Tênis cano alto preto em escada de concreto",
      },
      {
        id: 3,
        name: "Low Runner 550",
        brand: "Block Series",
        price: "R$ 429",
        tag: "Limitado",
        image: "https://media.base44.com/images/public/69b042fceb64ed960872539e/3e727dcae_generated_image.png",
        alt: "Tênis cinza premium contra parede de concreto",
      },
    ],
  },
  hoodies: {
    title: "HOODIES",
    subtitle: "& Moletons",
    description: "Moletons heavyweight com caimento perfeito. Das ruas para o mundo, cada peça conta uma história.",
    num: "03",
    products: [
      {
        id: 1,
        name: "Heavy Pullover",
        brand: "Core Black",
        price: "R$ 389",
        tag: "Bestseller",
        image: "https://media.base44.com/images/public/69b042fceb64ed960872539e/cb55abd36_generated_image.png",
        alt: "Moletom preto oversized em flat lay de concreto",
      },
      {
        id: 2,
        name: "Zip-Up Staple",
        brand: "Urban Volt",
        price: "R$ 429",
        tag: "Novo",
        image: "https://media.base44.com/images/public/69b042fceb64ed960872539e/ffa4b03dc_generated_image.png",
        alt: "Moletom cinza zíper em modelo contra parede",
      },
      {
        id: 3,
        name: "Graphic Hoodie",
        brand: "District Wear",
        price: "R$ 459",
        tag: "Limitado",
        image: "https://media.base44.com/images/public/69b042fceb64ed960872539e/057a57c47_generated_image.png",
        alt: "Moletom branco com estampa gráfica em concreto",
      },
    ],
  },
  camisetas: {
    title: "CAMISETAS",
    subtitle: "Oversized",
    description: "Camisetas oversized com cortes modernos e estampas únicas. O básico que não é básico.",
    num: "04",
    products: [
      {
        id: 1,
        name: "Graphic Tee Vol.1",
        brand: "Print Lab",
        price: "R$ 179",
        tag: "Bestseller",
        image: "https://media.base44.com/images/public/69b042fceb64ed960872539e/48eb025d8_generated_image.png",
        alt: "Camiseta preta com estampa gráfica em flat lay de concreto",
      },
      {
        id: 2,
        name: "Oversized White",
        brand: "Street Canvas",
        price: "R$ 199",
        tag: "Novo",
        image: "https://media.base44.com/images/public/69b042fceb64ed960872539e/d842cc124_generated_image.png",
        alt: "Camiseta branca oversized em modelo em beco urbano",
      },
      {
        id: 3,
        name: "Washed Boxy",
        brand: "Vintage Urb",
        price: "R$ 219",
        tag: "Limitado",
        image: "https://media.base44.com/images/public/69b042fceb64ed960872539e/664037906_generated_image.png",
        alt: "Camiseta cinza delavê boxy em flat lay de concreto",
      },
    ],
  },
  acessorios: {
    title: "ACESSÓRIOS",
    subtitle: "& Complementos",
    description: "Os detalhes que completam o look. Caps, correntes, óculos e muito mais para elevar seu estilo.",
    num: "05",
    products: [
      {
        id: 1,
        name: "Accessory Pack",
        brand: "Street Kit",
        price: "R$ 149",
        tag: "Conjunto",
        image: "https://media.base44.com/images/public/69b042fceb64ed960872539e/d176c0247_generated_image.png",
        alt: "Coleção de acessórios streetwear em flat lay de concreto",
      },
      {
        id: 2,
        name: "Cap + Shades",
        brand: "Block Vision",
        price: "R$ 199",
        tag: "Novo",
        image: "https://media.base44.com/images/public/69b042fceb64ed960872539e/d1cb528cb_generated_image.png",
        alt: "Boné snapback e óculos escuros em concreto com sombras duras",
      },
      {
        id: 3,
        name: "Belt & Chain Set",
        brand: "Metal Culture",
        price: "R$ 249",
        tag: "Limitado",
        image: "https://media.base44.com/images/public/69b042fceb64ed960872539e/837fb4fb5_generated_image.png",
        alt: "Cinto de couro preto e corrente prata em concreto escuro",
      },
    ],
  },
};

export default function Categoria() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || "sneakers";
  const category = CATALOG[slug] || CATALOG["sneakers"];

  const handleWhatsApp = (product) => {
    const msg = `Olá! Tenho interesse no produto: ${product.name} (${product.brand}) — ${product.price}`;
    window.open(`https://wa.me/5511989005635?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Header da categoria */}
      <section className="relative bg-[#050505] pt-28 pb-16 px-6 md:px-12 overflow-hidden">
        {/* Giant background number */}
        <span className="absolute top-1/2 right-8 -translate-y-1/2 text-[200px] md:text-[320px] font-black text-white/[0.03] leading-none select-none pointer-events-none">
          {category.num}
        </span>

        {/* Back button */}
        <a
          href={createPageUrl("Home")}
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-white/40 hover:text-[#FF4D00] transition-colors duration-300 uppercase mb-8"
        >
          <ArrowLeft className="w-3 h-3" />
          Voltar
        </a>

        <div className="relative z-10">
          <p className="font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase mb-2">
            Coleção — Juquiá, SP
          </p>
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-black tracking-[-0.04em] leading-[0.9] text-white uppercase">
            {category.title}
          </h1>
          <p className="font-mono text-xs text-white/30 tracking-[0.2em] uppercase mt-2">
            {category.subtitle}
          </p>
          <div className="w-12 h-[2px] bg-[#FF4D00] mt-6 mb-4" />
          <p className="font-mono text-xs text-white/50 max-w-md leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-[#FF4D00] py-2 overflow-hidden">
        <motion.div
          className="whitespace-nowrap"
          animate={{ x: [0, -800] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <span className="text-[10px] font-mono tracking-[0.4em] text-white/80 uppercase">
            {Array(10).fill(`${category.title} — URBANZ JUQUIÁ — STREETWEAR PREMIUM — `).join("")}
          </span>
        </motion.div>
      </div>

      {/* Produtos */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="flex items-center justify-between mb-10">
          <p className="font-mono text-[10px] tracking-[0.4em] text-[#888888] uppercase">
            {category.products.length} produtos disponíveis
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-[#888888] uppercase hidden md:block">
            LAT: -24.32 | LONG: -47.63
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {category.products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative border border-[#E5E5E5] hover:border-[#050505] transition-colors duration-500 overflow-hidden"
            >
              {/* Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="font-mono text-[9px] tracking-[0.3em] text-white bg-[#050505] px-3 py-1 uppercase">
                  {product.tag}
                </span>
              </div>

              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-[#F0F0F0]">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                {/* District watermark */}
                <div className="absolute bottom-3 right-3 font-mono text-[9px] tracking-[0.3em] text-white/0 group-hover:text-white/60 transition-all duration-500 uppercase">
                  District: Juquiá
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="font-mono text-[9px] tracking-[0.3em] text-[#888888] uppercase mb-1">
                  {product.brand}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-black tracking-[-0.01em] text-[#050505] uppercase">
                    {product.name}
                  </h3>
                  <span className="text-base font-black text-[#050505]">
                    {product.price}
                  </span>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleWhatsApp(product)}
                  className="w-full font-mono text-[10px] tracking-[0.3em] text-white bg-[#050505] hover:bg-[#FF4D00] transition-colors duration-300 py-3 uppercase"
                >
                  Consultar via WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA bottom */}
      <section className="px-6 md:px-12 pb-16">
        <div className="border border-[#E5E5E5] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] tracking-[0.4em] text-[#888888] uppercase mb-2">
              Não encontrou?
            </p>
            <h3 className="text-xl md:text-2xl font-black tracking-[-0.02em] text-[#050505] uppercase">
              Fale com a gente
            </h3>
            <p className="font-mono text-xs text-[#888888] mt-2">
              Temos muito mais em loja. Entre em contato pelo WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/5511989005635"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.3em] text-white bg-[#FF4D00] hover:bg-[#050505] transition-colors duration-300 px-8 py-4 uppercase whitespace-nowrap"
          >
            (11) 98900-5635
          </a>
        </div>
      </section>
    </main>
  );
}