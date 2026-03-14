import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import OverlayNav from "@/components/layout/OverlayNav";
import Footer from "@/components/layout/Footer";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=JetBrains+Mono:wght@400;500&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        .font-mono {
          font-family: 'JetBrains Mono', monospace !important;
        }
        
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #FAFAFA;
        }
        ::-webkit-scrollbar-thumb {
          background: #050505;
          border-radius: 0;
        }

        ::selection {
          background: #FF4D00;
          color: white;
        }
      `}</style>

      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ?
        "bg-[#050505]/95 backdrop-blur-md" :
        "bg-[#050505]"}`
        }>

        <div className="flex items-center justify-between px-6 md:px-12 h-14">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-baseline gap-1">

            <span className="text-white text-lg font-black tracking-[-0.02em] uppercase">
              URBANZ
            </span>
            


          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
            { label: "Coleções", href: "#colecoes" },
            { label: "Manifesto", href: "#manifesto" },
            { label: "Contato", href: "#contato" }].
            map((item) =>
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-mono text-[10px] tracking-[0.3em] text-white/50 hover:text-[#FF4D00] transition-colors duration-300 uppercase">

                {item.label}
              </a>
            )}
          </nav>

          {/* WhatsApp CTA + Menu button */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5511989005635"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block font-mono text-[10px] tracking-[0.2em] text-[#050505] bg-[#FF4D00] hover:bg-[#FF4D00]/90 transition-colors duration-300 px-4 py-2 uppercase">

              WhatsApp
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white/60 hover:text-[#FF4D00] transition-colors duration-300 p-1 md:hidden"
              aria-label="Abrir menu">

              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hairline border */}
        <div className="w-full h-px bg-white/10" />
      </header>

      {/* Overlay Navigation */}
      <OverlayNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Page content */}
      <div className="pt-14">
        {children}
      </div>

      {/* Footer */}
      <Footer />
    </div>);

}