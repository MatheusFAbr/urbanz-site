import React, { useState, useEffect } from "react";
import { Instagram, Phone } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const juquiaTime = time.toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const hour = time.getHours();
  const day = time.getDay();
  const isOpen = day >= 1 && day <= 6 && hour >= 14 && hour < 20;

  return (
    <footer id="contato" className="relative bg-[#050505] text-white overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 px-6 md:px-12 py-16 md:py-24">
        {/* Giant address */}
        <div className="text-center mb-16">
          <p className="font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase mb-6">
            Visite nossa loja
          </p>
          <h2 className="text-[clamp(1.5rem,5vw,4rem)] font-black tracking-[-0.02em] leading-tight uppercase">
            AV. BRASIL
          </h2>
          <p className="text-[clamp(0.8rem,2vw,1.5rem)] font-black tracking-[0.1em] text-white/20 uppercase mt-1">
            PARQUE NACIONAL — JUQUIÁ, SP
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-white/30 mt-4">
            CEP 11800-000
          </p>
        </div>

        {/* Live clock & status */}
        <div className="flex flex-col items-center mb-16">
          <div className="font-mono text-4xl md:text-6xl font-bold tracking-wider text-white/90">
            {juquiaTime}
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
            <span className="font-mono text-[10px] tracking-[0.3em] text-white/50 uppercase">
              {isOpen ? "Aberto agora" : "Fechado — Abre às 14:30"}
            </span>
          </div>
        </div>

        {/* Hairline */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Bottom links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase">
            © 2024 URBANZ JUQUIÁ — Todos os direitos reservados
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/5511989005635"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-[#FF4D00] transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <Phone className="w-4 h-4" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase">WhatsApp</span>
            </a>
            <a
              href="https://instagram.com/urbanz.juquia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-[#FF4D00] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}