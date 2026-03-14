import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const infoItems = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Av. Brasil - Parque Nacional",
    detail: "Juquiá - SP, 11800-000",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 98900-5635",
    detail: "WhatsApp disponível",
    href: "https://wa.me/5511989005635",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg-Sáb: 14:30 - 20:00",
    detail: "Domingo: Fechado",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@urbanz.juquia",
    detail: "Siga-nos",
    href: "https://instagram.com/urbanz.juquia",
  },
];

export default function StoreInfo() {
  return (
    <section className="relative bg-[#FAFAFA] py-16 md:py-24">
      <div className="px-6 md:px-12">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-[10px] tracking-[0.4em] text-[#888888] uppercase mb-2">
            Informações
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-[-0.03em] text-[#050505] uppercase">
            ENCONTRE-NOS
          </h2>
          <div className="w-full h-px bg-[#E5E5E5] mt-6" />
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {infoItems.map((item, index) => {
            const Icon = item.icon;
            const Wrapper = item.href ? "a" : "div";
            const wrapperProps = item.href
              ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                <Wrapper
                  {...wrapperProps}
                  className="block p-6 md:p-8 group hover:bg-[#050505] transition-colors duration-500 cursor-pointer h-full"
                >
                  {/* Number */}
                  <span className="font-mono text-[10px] tracking-[0.3em] text-[#888888] group-hover:text-white/30 transition-colors duration-500">
                    0{index + 1}
                  </span>

                  <Icon className="w-5 h-5 text-[#050505] group-hover:text-[#FF4D00] transition-colors duration-500 mt-4 mb-4" />

                  <p className="font-mono text-[9px] tracking-[0.3em] text-[#888888] group-hover:text-white/50 uppercase transition-colors duration-500 mb-2">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-[#050505] group-hover:text-white transition-colors duration-500">
                    {item.value}
                  </p>
                  <p className="font-mono text-[10px] text-[#888888] group-hover:text-white/40 transition-colors duration-500 mt-1">
                    {item.detail}
                  </p>
                </Wrapper>

                {/* Hairline border */}
                {index < 3 && (
                  <div className="absolute top-0 right-0 w-px h-full bg-[#E5E5E5] hidden lg:block" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}