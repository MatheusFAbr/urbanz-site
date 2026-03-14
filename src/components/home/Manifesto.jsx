import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import manifestoimage from "@/images/manifesto_image.png";

const ABOUT_IMAGE = manifestoimage;

export default function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-[#FAFAFA] py-20 md:py-32 overflow-hidden">
      {/* Giant background text */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] md:text-[400px] font-black text-[#050505]/[0.02] leading-none select-none pointer-events-none whitespace-nowrap">
        URBANZ
      </span>

      <div className="relative z-10 px-6 md:px-12">
        {/* Section label */}
        <div className="mb-12">
          <p className="font-mono text-[10px] tracking-[0.4em] text-[#888888] uppercase mb-2">
            Manifesto
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-[-0.03em] text-[#050505] uppercase">
            A CULTURA
          </h2>
          <div className="w-full h-px bg-[#E5E5E5] mt-6" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Image */}
          <motion.div
            className="md:col-span-7 overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src={ABOUT_IMAGE}
              alt="Escadaria brutalista de concreto com figura solitária em streetwear"
              className="w-full h-[300px] md:h-[500px] object-cover grayscale"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="md:col-span-5 flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="font-mono text-xs leading-relaxed text-[#888888]">
                Streetwear não é apenas roupa. É identidade. É a linguagem das ruas que transforma concreto em passarela e atitude em estilo.
              </p>
              <p className="text-lg md:text-xl font-black tracking-[-0.02em] text-[#050505] leading-snug uppercase">
                "Vista sua atitude. Qualidade, estilo e exclusividade você encontra aqui."
              </p>
              <p className="font-mono text-xs leading-relaxed text-[#888888]">
                Na URBANZ JUQUIÁ, oferecemos as últimas tendências e peças essenciais que definem a cultura urbana — de sneakers exclusivos a hoodies, camisetas oversized e acessórios de marcas consagradas e emergentes.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E5E5E5]">
                <div>
                  <span className="text-2xl md:text-3xl font-black text-[#050505]">100+</span>
                  <p className="font-mono text-[9px] tracking-[0.2em] text-[#888888] uppercase mt-1">Marcas</p>
                </div>
                <div>
                  <span className="text-2xl md:text-3xl font-black text-[#050505]">500+</span>
                  <p className="font-mono text-[9px] tracking-[0.2em] text-[#888888] uppercase mt-1">Peças</p>
                </div>
                <div>
                  <span className="text-2xl md:text-3xl font-black text-[#FF4D00]">#1</span>
                  <p className="font-mono text-[9px] tracking-[0.2em] text-[#888888] uppercase mt-1">Em Juquiá</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}