"use client";

import { useState } from "react";
import EntryScreen from "./components/EntryScreen";
import ParticleCanvas from "./components/ParticleCanvas";
import ExperienceSection from "./components/sections/ExperienceSection";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <main>
      {!entered ? (
        <EntryScreen onEnter={() => setEntered(true)} />
      ) : (
        <>
          <ParticleCanvas />
          <ExperienceSection />
        </>
      )}
    </main>
  );
}
