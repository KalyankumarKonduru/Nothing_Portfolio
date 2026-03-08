"use client";

import { useState } from "react";
import EntryScreen from "./components/EntryScreen";
import ParticleCanvas from "./components/ParticleCanvas";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <main>
      {!entered ? (
        <EntryScreen onEnter={() => setEntered(true)} />
      ) : (
        <ParticleCanvas />
      )}
    </main>
  );
}
