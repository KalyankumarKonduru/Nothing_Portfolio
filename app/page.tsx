"use client";

import { useState, useEffect, useCallback } from "react";
import EntryScreen from "./components/EntryScreen";
import ParticleCanvas from "./components/ParticleCanvas";
import ExperienceSection from "./components/sections/ExperienceSection";
import TechStackSection from "./components/sections/TechStackSection";

export default function Home() {
  const [entered, setEntered] = useState(false);
  /* Track window size so canvas components re-mount on resize */
  const [resizeKey, setResizeKey] = useState(0);

  const handleResize = useCallback(() => {
    setResizeKey((k) => k + 1);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const debounced = () => {
      clearTimeout(timer);
      timer = setTimeout(handleResize, 300);
    };
    window.addEventListener("resize", debounced);
    return () => {
      window.removeEventListener("resize", debounced);
      clearTimeout(timer);
    };
  }, [handleResize]);

  return (
    <main>
      {!entered ? (
        <EntryScreen key={`entry-${resizeKey}`} onEnter={() => setEntered(true)} />
      ) : (
        <>
          <ParticleCanvas key={`pc-${resizeKey}`} />
          <ExperienceSection key={`exp-${resizeKey}`} />
          <TechStackSection key={`ts-${resizeKey}`} />
        </>
      )}
    </main>
  );
}
