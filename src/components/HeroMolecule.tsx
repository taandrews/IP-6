"use client";

import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { asset } from "@/lib/site";

export default function HeroMolecule() {
  const [reducedMotion, setReducedMotion] = useState(true);
  const [playing, setPlaying] = useState<boolean | null>(null);
  const paused = !(playing ?? !reducedMotion);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      setReducedMotion(preference.matches);
      setPlaying(null);
    };
    syncPreference();
    preference.addEventListener("change", syncPreference);
    return () => preference.removeEventListener("change", syncPreference);
  }, []);

  return (
    <div className="hero-molecule-stage" data-paused={paused} data-motion-enabled={playing === true}>
      <img
        src={asset("/images/ip6-molecule.png")}
        alt="Molecular model of phytic acid: an inositol ring carrying six phosphate groups"
        fetchPriority="high"
        width="1489"
        height="1664"
      />
      <button
        type="button"
        className="molecule-motion-toggle"
        onClick={() => setPlaying(paused)}
        aria-label={paused ? "Play molecule animation" : "Pause molecule animation"}
      >
        {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
        <span>{paused ? "Play" : "Pause"}</span>
      </button>
    </div>
  );
}
