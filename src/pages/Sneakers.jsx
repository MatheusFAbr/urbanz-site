import React from "react";
import CategoryHeader from "@/components/catalog/CategoryHeader";
import ProductCard from "@/components/catalog/ProductCard";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import airForce01 from "@/images/air1_image.png";
import newBalance from "@/images/NB_image.png";
import adidasSuperstar from "@/images/adidas_image.png";
import vansOldSchool from "@/images/vans_image.png"

const products = [
  {
    id: 1,
    brand: "Nike",
    name: "Air Force 1 '07 Branco",
    price: "Consultar",
    tag: "Clássico",
    image: airForce01,
    alt: "Nike Air Force 1 branco em superfície de concreto",
  },
  {
    id: 2,
    brand: "New Balance",
    name: "574 Core Cinza",
    price: "Consultar",
    tag: "Novo",
    image: newBalance,
    alt: "New Balance 574 cinza em superfície de concreto",
  },
  {
    id: 3,
    brand: "Adidas",
    name: "Superstar Preto",
    price: "Consultar",
    tag: "Essencial",
    image: adidasSuperstar,
    alt: "Adidas Superstar preto com listras brancas",
  },
  {
    id: 4,
    brand: "Vans",
    name: "Old Skool Preto/Branco",
    price: "Consultar",
    tag: "Streetwear",
    image: vansOldSchool,
    alt: "Vans Old Skool preto e branco em concreto",
  },
];

export default function Sneakers() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <CategoryHeader
        title="SNEAKERS"
        subtitle="Coleção — Calçados"
        num="02"
        description="Sneakers exclusivos das maiores marcas do streetwear mundial. Cada par, uma declaração de estilo."
      />

      <section className="px-6 md:px-12 py-16">
        <div className="flex items-center justify-between mb-10">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#888888] uppercase">
            {products.length} produtos
          </p>
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#888888] uppercase">
            LAT: -24.32 | LONG: -47.63
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-20 border-t border-[#E5E5E5] pt-12 text-center">
          <p className="font-mono text-[10px] tracking-[0.4em] text-[#888888] uppercase mb-4">
            Não encontrou o que procura?
          </p>
          <a
            href="https://wa.me/5511989005635?text=Olá! Estou procurando um sneaker específico."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#050505] text-white font-mono text-[10px] tracking-[0.3em] uppercase px-8 py-4 hover:bg-[#FF4D00] transition-colors duration-400"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <MarqueeStrip />
    </main>
  );
}