import React from "react";
import CategoryHeader from "@/components/catalog/CategoryHeader";
import ProductCard from "@/components/catalog/ProductCard";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import bonePreto from "@/images/boné_image.png"
import correnteCubana from "@/images/corrente_image.png"

const products = [
  {
    id: 1,
    brand: "Urbanz",
    name: "Snapback Preto",
    price: "Consultar",
    tag: "Street",
    image: bonePreto,
    alt: "Boné snapback preto sobre concreto brutalista",
  },
  {
    id: 2,
    brand: "Urbanz",
    name: "Corrente Cubana Gold",
    price: "Consultar",
    tag: "Premium",
    image: correnteCubana,
    alt: "Corrente cubana dourada sobre superfície escura",
  },
];

export default function Acessorios() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <CategoryHeader
        title="ACESSÓRIOS"
        subtitle="Coleção — Complementos"
        num="05"
        description="Os detalhes que completam o look. Bonés, correntes, óculos e muito mais para finalizar seu estilo com atitude."
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
            href="https://wa.me/5511989005635?text=Olá! Estou procurando um acessório específico."
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