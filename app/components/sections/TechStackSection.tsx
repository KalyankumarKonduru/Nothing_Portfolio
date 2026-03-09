"use client";

import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Preload } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import { interpolate } from "flubber";
import TechBall, { PhysicsState } from "./TechBall";
import "./tech-stack.css";

/* ═══════════════════════════════════════
   SVG Morphing Paths (100x100 viewBox)
   ═══════════════════════════════════════ */
const charPaths: Record<string, string> = {
  "C": "M 80 20 L 60 20 L 60 40 L 40 40 L 40 60 L 60 60 L 60 80 L 80 80 L 80 100 L 20 100 L 20 0 L 80 0 Z",
  "A": "M 40 0 L 60 0 L 100 100 L 80 100 L 70 70 L 30 70 L 20 100 L 0 100 Z M 50 20 L 35 55 L 65 55 Z",
  "R": "M 20 0 L 70 0 C 85 0 95 10 95 30 C 95 50 85 60 70 60 L 50 60 L 85 100 L 60 100 L 40 60 L 40 100 L 20 100 Z M 40 20 L 40 40 L 65 40 C 70 40 75 35 75 30 C 75 25 70 20 65 20 Z",
  "E": "M 20 0 L 80 0 L 80 20 L 40 20 L 40 40 L 70 40 L 70 60 L 40 60 L 40 80 L 80 80 L 80 100 L 20 100 Z",
  "S": "M 80 20 L 20 20 L 20 50 L 80 50 L 80 80 L 20 80 L 20 100 L 100 100 L 100 30 L 40 30 L 40 40 L 80 40 Z", // simplified S
  "T": "M 0 0 L 100 0 L 100 20 L 60 20 L 60 100 L 40 100 L 40 20 L 0 20 Z",
  "K": "M 20 0 L 40 0 L 40 40 L 80 0 L 100 0 L 60 50 L 100 100 L 80 100 L 40 60 L 40 100 L 20 100 Z",
  "L": "M 20 0 L 40 0 L 40 80 L 100 80 L 100 100 L 20 100 Z",
  "H": "M 20 0 L 40 0 L 40 40 L 60 40 L 60 0 L 80 0 L 80 100 L 60 100 L 60 60 L 40 60 L 40 100 L 20 100 Z",
  "I": "M 40 0 L 60 0 L 60 100 L 40 100 Z",
};

const shapePaths = [
  "M 50 0 C 77 0 100 23 100 50 C 100 77 77 100 50 100 C 23 100 0 77 0 50 C 0 23 23 0 50 0 Z", /* Circle */
  "M 10 10 L 90 10 L 90 90 L 10 90 Z", /* Square */
  "M 50 10 L 90 90 L 10 90 Z", /* Triangle */
  "M 50 0 L 100 50 L 50 100 L 0 50 Z", /* Diamond */
  "M 50 0 L 65 35 L 100 35 L 70 60 L 80 100 L 50 75 L 20 100 L 30 60 L 0 35 L 35 35 Z", /* Star */
];

// Adding all user requested skills (using a mix of specific brand colors)
const TECH_LIST = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", color: "#ffffff" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", color: "#3178C6" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", color: "#E34F26" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", color: "#1572B6" },
  { name: "REST/GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg", color: "#E10098" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", color: "#007396" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", color: "#3776AB" },
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg", color: "#00ADD8" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", color: "#339933" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", color: "#ffffff" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", color: "#4169E1" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", color: "#47A248" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", color: "#2496ED" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg", color: "#326CE5" },
  { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg", color: "#844FBA" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", color: "#FF9900" },
  { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg", color: "#4285F4" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", color: "#F05032" },
];

// Helper to arrange balls in a visually pleasing hexagonal/scatter grid for INITIAL placement
// Also generates a random physical velocity vector for the bounce physics
function generateInitialState(count: number, width: number) {
  const items: { pos: [number, number, number], vel: [number, number] }[] = [];

  let layout = [7, 6, 7, 7, 7]; // Desktop default (34 items)
  let xSpacing = 1.8;
  let ySpacing = 1.6;
  const zMaxOffset = 0; // Strictly 0 so balls never physically pass behind each other in 3D space causing a clipping illusion

  if (width < 768) {
    // Mobile: 3 per row
    layout = Array(Math.ceil(count / 3)).fill(3);
    xSpacing = 1.5;
    ySpacing = 1.5;
  } else if (width < 1024) {
    // Tablet: 5 per row
    layout = Array(Math.ceil(count / 5)).fill(5);
    xSpacing = 1.6;
    ySpacing = 1.6;
  }

  // Adjust Y offset so grid is explicitly shifted down from the marquee top
  const totalHeight = (layout.length - 1) * ySpacing;
  const startY = (totalHeight / 2) - 2.0;

  let currIndex = 0;

  layout.forEach((rowSize, rIdx) => {
    const rowY = startY - (rIdx * ySpacing);

    for (let c = 0; c < rowSize; c++) {
      if (currIndex >= count) break;

      const rowXOffset = -((rowSize - 1) * xSpacing) / 2;
      const x = rowXOffset + c * xSpacing;

      const z = 0; // Fixed Z plane

      // Random Initial Velocity (X and Y speed between 1 and 3, random direction)
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 2;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      items.push({
        pos: [x, rowY, z],
        vel: [vx, vy]
      });
      currIndex++;
    }
  });

  return items;
}

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);

  /* ── Morphing Text Setup ── */
  const marqueeRef = useRef<HTMLDivElement>(null);
  const cacheRef = useRef<Record<string, (t: number) => string>>({});

  const getInterpolator = (from: string, to: string) => {
    const key = from + "|" + to;
    if (!cacheRef.current[key]) {
      cacheRef.current[key] = interpolate(from, to, { maxSegmentLength: 2 });
    }
    return cacheRef.current[key];
  };

  useEffect(() => {
    if (!marqueeRef.current) return;
    const charPathsElements = Array.from(
      marqueeRef.current.querySelectorAll(".ts-morph-char path")
    ) as SVGPathElement[];

    // Similar stagger/morph logic to ExperienceSection
    const blocksCount = 4; // 4 marquee text blocks
    const pathsPerBlock = charPathsElements.length / blocksCount;

    // We just animate a few characters randomly in "TECH STACK / SKILLS"
    for (let b = 0; b < blocksCount; b++) {
      const blockStartIndex = b * pathsPerBlock;

      // Animate 4 random characters per block
      const pool = Array.from({ length: Math.floor(pathsPerBlock) }, (_, i) => i);
      const shuffled = pool.sort(() => 0.5 - Math.random());
      const animatedIndices = new Set(shuffled.slice(0, 4));

      for (let relIdx = 0; relIdx < pathsPerBlock; relIdx++) {
        if (!animatedIndices.has(relIdx)) continue;

        const globalIdx = Math.floor(blockStartIndex + relIdx);
        const pathEl = charPathsElements[globalIdx];
        if (!pathEl) continue;

        const originalPath = pathEl.getAttribute("data-original");
        if (!originalPath) continue;

        const i = globalIdx;
        const targetPaths = [
          shapePaths[i % shapePaths.length],
          shapePaths[(i + 2) % shapePaths.length],
          shapePaths[(i + 4) % shapePaths.length],
        ];

        const tl = gsap.timeline({
          repeat: -1,
          delay: (i % 19) * 0.4,
        });

        targetPaths.forEach((targetPath) => {
          const toShape = getInterpolator(originalPath, targetPath);
          const fromShape = getInterpolator(targetPath, originalPath);
          const proxy = { progress: 0 };

          tl.to(proxy, {
            progress: 1,
            duration: 0.8,
            ease: "expo.inOut",
            onUpdate: () => pathEl.setAttribute("d", toShape(proxy.progress)),
          });

          const svgEl = pathEl.closest("svg");
          if (svgEl) {
            tl.to(svgEl, { scale: 1.15, rotation: (Math.random() - 0.5) * 20, duration: 0.8, ease: "expo.inOut" }, "<");
            tl.to(pathEl, { fill: `hsla(${(i * 37) % 360}, 60%, 80%, 1)`, duration: 0.8 }, "<");
          }

          tl.to({}, { duration: 1.0 });
          tl.set(proxy, { progress: 0 });

          tl.to(proxy, {
            progress: 1,
            duration: 0.8,
            ease: "expo.inOut",
            onUpdate: () => pathEl.setAttribute("d", fromShape(proxy.progress)),
          });

          if (svgEl) {
            tl.to(svgEl, { scale: 1, rotation: 0, duration: 0.8, ease: "expo.inOut" }, "<");
            tl.to(pathEl, { fill: "#ffffff", duration: 0.8 }, "<");
          }

          tl.to({}, { duration: Math.random() * 2 + 1 });
        });
      }
    }
  }, []);

  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const initialItems = React.useMemo(() => generateInitialState(TECH_LIST.length, windowWidth), [windowWidth]);

  // Shared physics array for N-Body calculation
  const physicsArr = useRef<PhysicsState[]>([]);

  // Re-initialize physics array if the screen resizes and changes layout count
  if (physicsArr.current.length !== initialItems.length) {
    physicsArr.current = initialItems.map((item) => ({
      pos: new THREE.Vector3(...item.pos),
      vel: new THREE.Vector2(...item.vel),
    }));
  }

  // Renders the exact morphable SVG format needed for GSAP
  const renderMorphText = (text: string) => {
    return text.split("").map((char, index) => {
      if (char === " ") return <span key={index} className="ts-space" style={{ display: "inline-block", width: "30px" }} />;
      if (char === "/") return <span key={index} style={{ margin: "0 10px", opacity: 0.5 }}>/</span>;

      const pathData = charPaths[char.toUpperCase()];
      if (!pathData) {
        return <span key={index}>{char}</span>;
      }

      return (
        <svg
          key={index}
          className="ts-morph-char"
          viewBox="0 0 100 100"
          style={{ width: "0.8em", height: "0.8em", display: "inline-block", fill: "#ffffff", overflow: "visible" }}
        >
          <path d={pathData} data-original={pathData} />
        </svg>
      );
    });
  };

  const marqueeTextString = "TECH STACK / SKILLS / ";

  return (
    <section ref={sectionRef} className="ts-section" style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <div className="ts-sticky-wrapper" style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}>

        {/* HTML Marquee overlay layered above Canvas */}
        <div className="ts-header" style={{ pointerEvents: 'none', zIndex: 10 }}>
          <div className="ts-marquee-track" ref={marqueeRef}>
            <div className="ts-marquee-text">{renderMorphText(marqueeTextString)}</div>
            <div className="ts-marquee-text">{renderMorphText(marqueeTextString)}</div>
            <div className="ts-marquee-text">{renderMorphText(marqueeTextString)}</div>
            <div className="ts-marquee-text">{renderMorphText(marqueeTextString)}</div>
          </div>
        </div>

        {/* 3D R3F Viewport */}
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
          <Canvas
            camera={{ position: [0, 0, 10], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <color attach="background" args={['#050505']} />

            <ambientLight intensity={0.2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <directionalLight position={[-10, -10, -10]} intensity={0.5} />

            {/* Environment mapping for glossy reflections (city gives nice high contrast reflections) */}
            <Environment preset="city" />

            <group position={[0, -0.5, 0]}>
              {TECH_LIST.map((tech, i) => (
                <TechBall
                  key={tech.name}
                  id={i}
                  name={tech.name}
                  iconUrl={tech.icon}
                  physicsArr={physicsArr}
                  color={tech.color}
                />
              ))}
            </group>

            <Preload all />
          </Canvas>
        </div>

      </div>
    </section>
  );
}
