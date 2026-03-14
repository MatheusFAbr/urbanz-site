import React from "react";
import HeroSection from "@/components/home/HeroSection";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import CollectionGrid from "@/components/home/CollectionGrid";
import Manifesto from "@/components/home/Manifesto";
import StoreInfo from "@/components/home/StoreInfo";

export default function Home() {
  return (
    <main className="bg-[#FAFAFA]">
      <div id="hero">
        <HeroSection />
      </div>
      <MarqueeStrip />
      <div id="colecoes">
        <CollectionGrid />
      </div>
      <div id="manifesto">
        <Manifesto />
      </div>
      <MarqueeStrip />
      <StoreInfo />
    </main>
  );
}