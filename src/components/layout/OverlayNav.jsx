import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const navItems = [
  { label: "INÍCIO", href: "#hero" },
  { label: "COLEÇÕES", href: "#colecoes" },
  { label: "MANIFESTO", href: "#manifesto" },
  { label: "CONTATO", href: "#contato" },
];

export default function OverlayNav({ isOpen, onClose }) {
  const handleClick = (href) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-[#050505] flex flex-col justify-center items-center"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-6 md:right-12 text-white/60 hover:text-[#FF4D00] transition-colors duration-300 p-2"
            aria-label="Fechar menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nav items */}
          <nav className="flex flex-col items-center gap-2">
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                onClick={() => handleClick(item.href)}
                className="group relative px-4 py-3"
              >
                <span className="text-[clamp(2rem,6vw,5rem)] font-black tracking-[-0.02em] text-transparent uppercase transition-all duration-300"
                  style={{
                    WebkitTextStroke: "1px rgba(255,255,255,0.3)",
                  }}
                >
                  {item.label}
                </span>
                {/* Filled text on hover */}
                <span className="absolute inset-0 flex items-center justify-center text-[clamp(2rem,6vw,5rem)] font-black tracking-[-0.02em] text-white uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </span>
              </motion.button>
            ))}
          </nav>

          {/* Bottom info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-8 left-6 md:left-12 font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase"
          >
            Av. Brasil — Juquiá, SP
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-8 right-6 md:right-12 font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase"
          >
            (11) 98900-5635
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}