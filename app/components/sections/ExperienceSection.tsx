"use client";

import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import anime from "animejs";
import { stampText, textPixelWidth } from "../pixel-font";
import { playClockTick, initAudio } from "../clock-tick";
import "./experience-section.css";

/* ═══════════════════════════════════════
   Career data
   ═══════════════════════════════════════ */
interface CareerEntry {
  year: string;
  company: string;
  role: string;
  roleMarquee: string;
  description: string;
  bullets: string[];
  videoSrc?: string;
}

const CAREER: CareerEntry[] = [
  {
    year: "2025",
    company: "MEDICAL INFORMATICS ENGINEERING",
    role: "Software Engineer Intern",
    roleMarquee: "INTERNSHIP",
    description:
      "Built MedQuery — a clinical AI assistant powered by MCP servers and RAG pipelines. The platform helps healthcare professionals query patient data using natural language, with BioClinicalBERT entity extraction and a real-time analytics dashboard.",
    bullets: [
      "Architected 3 MCP servers with 28 medical tools for clinical data retrieval",
      "Implemented BioClinicalBERT NER pipeline for medical entity extraction",
      "Built patient analytics dashboard in React with real-time visualizations",
      "Deployed 6 Docker services with Kubernetes autoscaler written in Go",
      "Reduced query response time from 4.8s to 1.2s with Redis caching layer",
      "Achieved 92% accuracy on clinical entity extraction benchmarks",
    ],
  },
  {
    year: "2024",
    company: "PURDUE UNIVERSITY",
    role: "Graduate Research Assistant",
    roleMarquee: "RESEARCH",
    description:
      "MS Computer Science focused on distributed systems and AI/ML applications. Contributed to research on scalable microservice architectures and LLM-powered development tools.",
    bullets: [
      "Published research on microservice fault tolerance patterns",
      "Built LLM-powered code review tool used by 200+ students",
      "Designed distributed job scheduler handling 1,200 jobs/min",
      "TA for CS 408 — Software Testing, graded 140+ students",
    ],
  },
  {
    year: "2023",
    company: "ACCENTURE",
    role: "Software Engineer",
    roleMarquee: "FULL-TIME",
    description:
      "Led frontend development for a SaaS platform serving 2,400+ enterprise users. Built the React/TypeScript frontend from the ground up and implemented 14 REST endpoints with Spring Boot on the backend.",
    bullets: [
      "Built SaaS platform frontend with React/TypeScript from scratch",
      "Implemented 14 REST API endpoints with Spring Boot backend",
      "Reduced page load time from 4.2s to 1.6s through code splitting",
      "Achieved 87% test coverage before first production deploy",
      "Mentored 3 junior developers on React best practices",
    ],
  },
  {
    year: "2021",
    company: "ACCENTURE",
    role: "Associate Software Engineer",
    roleMarquee: "FULL-TIME",
    description:
      "Built the checkout and catalog system for a retail e-commerce platform handling 12,000+ SKUs. Integrated Stripe payments and optimized page performance significantly.",
    bullets: [
      "Developed checkout flow with Stripe payment integration",
      "Built product catalog system managing 12,000+ SKUs",
      "Reduced page load from 3.8s to 2.3s with lazy loading",
      "Wrote 140+ tests across cart, catalog, and payment modules",
      "Collaborated with UX team on responsive mobile-first design",
    ],
  },
  {
    year: "2019",
    company: "FREELANCE",
    role: "Web Developer",
    roleMarquee: "FREELANCE",
    description:
      "Started professional development journey building websites and web applications for local businesses. Gained foundational skills in HTML, CSS, JavaScript, and React.",
    bullets: [
      "Built 8+ responsive websites for local businesses",
      "Learned React and began building single-page applications",
      "Implemented SEO optimizations improving search rankings by 40%",
      "Managed client relationships and project timelines",
    ],
  },
];

const YEARS = CAREER.map((c) => c.year);

/* ═══════════════════════════════════════
   Zigzag year positions (percentage → grid)
   ═══════════════════════════════════════ */
const YEAR_POSITIONS: { year: string; xPct: number; yPct: number }[] = [
  { year: "2025", xPct: 0.15, yPct: 0.15 },
  { year: "2024", xPct: 0.85, yPct: 0.35 },
  { year: "2023", xPct: 0.20, yPct: 0.55 },
  { year: "2021", xPct: 0.70, yPct: 0.75 },
  { year: "2019", xPct: 0.15, yPct: 0.90 },
];

/* ═══════════════════════════════════════
   Component
   ═══════════════════════════════════════ */
export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const zigzagPathRef = useRef<SVGPathElement>(null);
  const zigzagGlowRef = useRef<SVGPathElement>(null);

  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [revealedYears, setRevealedYears] = useState<Set<string>>(new Set());
  const revealedYearsRef = useRef<Set<string>>(new Set());
  
  // Keep ref in sync for the scroll listener without remounting
  useEffect(() => {
    revealedYearsRef.current = revealedYears;
    // Dispatch scroll to force line update when a year is revealed
    window.dispatchEvent(new CustomEvent("scroll"));
  }, [revealedYears]);

  const [isActive, setIsActive] = useState(false);

  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(0);
  const yearElsRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const cardElsRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const convergeDoneRef = useRef(false);
  const disperseStartRef = useRef<number>(0);
  const disperseOriginRef = useRef({ x: -1, y: -1 });
  const zigzagPointsRef = useRef<{ x: number; y: number }[]>([]);
  const zigzagLineStartRef = useRef<number>(0);

  /* ── Computed pixel positions for year markers (matches canvas grid exactly) ── */
  const yearPixelPositions = useMemo(() => {
    if (!isActive) return new Map<string, { x: number; y: number }>();
    if (!sectionRef.current) return new Map<string, { x: number; y: number }>();
    const W = sectionRef.current.clientWidth || window.innerWidth;
    const MathH = Math.max(sectionRef.current.clientHeight, window.innerHeight * 4);
    const blockSize = W < 600 ? 14 : W < 1024 ? 18 : 22;
    const gap = W < 600 ? 2 : 3;
    const stp = blockSize + gap;
    const c = Math.floor(W / stp);
    const r = Math.floor(MathH / stp);
    const ox = (W - c * stp + gap) / 2;
    const oy = (MathH - r * stp + gap) / 2;
    const hf = blockSize / 2;
    const map = new Map<string, { x: number; y: number }>();
    for (const yp of YEAR_POSITIONS) {
      map.set(yp.year, {
        x: ox + Math.floor(yp.xPct * c) * stp + hf,
        y: oy + Math.floor(yp.yPct * r) * stp + hf,
      });
    }
    return map;
  }, [isActive]);

  /* ── Scroll-based activation ──
     ParticleCanvas uses section indices: hero=0 (0-100vh), about=1 (100-200vh),
     experience=2 (200-300vh). Activate when scroll crosses into section 2. */
  useEffect(() => {
    const H = window.innerHeight;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      /* Activate when ~1.8 viewports scrolled (entering experience area) */
      const threshold = H * 1.8;
      if (scrollY >= threshold && !isActive) {
        setIsActive(true);
      } else if (scrollY < threshold && isActive) {
        setIsActive(false);
      }

      // Animate zigzag line based on scroll progress within the section
      if (sectionRef.current && zigzagPathRef.current && zigzagGlowRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // rect.top is relative to viewport. If it's <= 0, we're inside or past it.
        const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height - H)));
        
        let maxAllowed = 0;
        if (revealedYearsRef.current.has("2025")) {
          maxAllowed = 0.25; // allowed to draw to 2024
          if (revealedYearsRef.current.has("2024")) {
            maxAllowed = 0.50; // allowed to draw to 2023
            if (revealedYearsRef.current.has("2023")) {
              maxAllowed = 0.75; // allowed to draw to 2021
              if (revealedYearsRef.current.has("2021")) {
                maxAllowed = 1.0; // allowed to draw to 2019
              }
            }
          }
        }
        
        const allowedProgress = Math.min(scrollProgress, maxAllowed);
        
        try {
          const totalLength = zigzagPathRef.current.getTotalLength();
          zigzagPathRef.current.style.strokeDasharray = `${totalLength}`;
          zigzagPathRef.current.style.strokeDashoffset = `${totalLength * (1 - allowedProgress)}`;
          
          zigzagGlowRef.current.style.strokeDasharray = `${totalLength}`;
          zigzagGlowRef.current.style.strokeDashoffset = `${totalLength * (1 - allowedProgress)}`;
        } catch (e) {}
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isActive]);

  /* ── Mouse / touch tracking ── */
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      // Need offset for absolute positioning
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!sectionRef.current || !t) return;
      const rect = sectionRef.current.getBoundingClientRect();
      mouseRef.current = { x: t.clientX - rect.left, y: t.clientY - rect.top };
    };
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("touchmove", handleTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("touchmove", handleTouch);
    };
  }, []);

  /* ── Dot grid canvas + flashlight + hidden years ── */
  useEffect(() => {
    if (!isActive) {
      disperseStartRef.current = 0;
      return;
    }

    /* Record dispersion origin — dots start clustered at cursor then spread */
    disperseStartRef.current = performance.now();
    disperseOriginRef.current = {
      x: mouseRef.current.x > 0 ? mouseRef.current.x : window.innerWidth / 2,
      y: mouseRef.current.y > 0 ? mouseRef.current.y : window.innerHeight / 2,
    };

    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const W = section.clientWidth || window.innerWidth;
    const scrollH = window.innerHeight * 4; /* 4.0x viewport height to give massive map scroll space */
    const H = Math.max(section.clientHeight, scrollH);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;

    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    /* Grid sizing (matches entry screen) */
    const blockSize = W < 600 ? 14 : W < 1024 ? 18 : 22;
    const gap = W < 600 ? 2 : 3;
    const step = blockSize + gap;
    const cols = Math.floor(W / step);
    const rows = Math.floor(H / step);
    const oX = (W - cols * step + gap) / 2;
    const oY = (H - rows * step + gap) / 2;
    const N = cols * rows;
    const half = blockSize / 2;

    /* Pre-render circle sprite */
    const spriteSize = blockSize + 2;
    const sprite = document.createElement("canvas");
    sprite.width = spriteSize * dpr;
    sprite.height = spriteSize * dpr;
    const sctx = sprite.getContext("2d")!;
    sctx.scale(dpr, dpr);
    sctx.fillStyle = "#ffffff";
    sctx.beginPath();
    sctx.arc(spriteSize / 2, spriteSize / 2, half, 0, Math.PI * 2);
    sctx.fill();

    /* Stamp year numbers into grid */
    const yearStamps: Map<string, Set<string>> = new Map();
    const allYearDots = new Set<string>();

    for (const yp of YEAR_POSITIONS) {
      const yw = textPixelWidth(yp.year);
      const yh = 7;
      const gx = Math.max(
        0,
        Math.min(cols - yw - 1, Math.floor(yp.xPct * cols) - Math.floor(yw / 2)),
      );
      const gy = Math.max(
        0,
        Math.min(rows - yh - 1, Math.floor(yp.yPct * rows) - Math.floor(yh / 2)),
      );
      const stamp = stampText(yp.year, gx, gy);
      yearStamps.set(yp.year, stamp);
      stamp.forEach((k) => allYearDots.add(k));
    }

    /* Fast lookup arrays */
    const isYearDot = new Uint8Array(N);
    for (const [, stamp] of yearStamps) {
      stamp.forEach((key) => {
        const [gxS, gyS] = key.split(",");
        const idx = Number(gyS) * cols + Number(gxS);
        if (idx >= 0 && idx < N) isYearDot[idx] = 1;
      });
    }

    /* Glow state */
    const glows = new Float32Array(N);
    const RADIUS = 180;
    const R2 = RADIUS * RADIUS;
    const INV_R = 1 / RADIUS;

    let lastTickX = -9999;
    let lastTickY = -9999;
    let lastTickTime = 0;
    const halfSprite = spriteSize / 2;

    /* Year proximity tracking */
    const yearProximity = new Map<string, number>();
    YEARS.forEach((y) => yearProximity.set(y, 0));

    /* RAF loop */
    const tick = () => {
      if (!canvasRef.current) return;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      /* Decay all glows */
      for (let i = 0; i < N; i++) {
        if (glows[i] > 0.005) glows[i] *= 0.6;
        else glows[i] = 0;
      }

      /* Use targetMap to accumulate targets before applying to glows */
      const targetMap = new Float32Array(N);

      /* Light up cells near cursor */
      const gxC = Math.floor((mx - oX) / step);
      const gyC = Math.floor((my - oY) / step);
      const cellRad = Math.ceil(RADIUS / step) + 1;
      const gxMin = Math.max(0, gxC - cellRad);
      const gxMax = Math.min(cols - 1, gxC + cellRad);
      const gyMin = Math.max(0, gyC - cellRad);
      const gyMax = Math.min(rows - 1, gyC + cellRad);

      for (let gy = gyMin; gy <= gyMax; gy++) {
        for (let gx = gxMin; gx <= gxMax; gx++) {
          const idx = gy * cols + gx;
          const px = oX + gx * step + half;
          const py = oY + gy * step + half;
          const dx = px - mx;
          const dy = py - my;
          const d2 = dx * dx + dy * dy;
          if (d2 <= R2) {
            const dist = Math.sqrt(d2);
            /* Quadratic falloff */
            const falloff = Math.max(0, 1 - dist * INV_R);
            const baseTarget = falloff * falloff;
            if (baseTarget > targetMap[idx]) {
              targetMap[idx] = baseTarget;
            }
          }
        }
      }

      /* Zigzag line progressive dot lighting — moving wave along the path */
      const zigPts = zigzagPointsRef.current;
      const zigStart = zigzagLineStartRef.current;
      if (zigPts.length > 0 && zigStart > 0) {
        const zigElapsed = performance.now() - zigStart;
        const zigDuration = 2500;
        const zigProgress = Math.max(0, Math.min(1, zigElapsed / zigDuration));
        if (zigProgress > 0) {
          const numActive = Math.floor(zigProgress * zigPts.length);
          const windowSize = 20;
          const windowStart = Math.max(0, numActive - windowSize);
          const zigCellRad = 3;
          const zigRadius = step * zigCellRad;
          const zigR2 = zigRadius * zigRadius;
          for (let s = windowStart; s < numActive; s++) {
            const pt = zigPts[s];
            const fadeFromEdge = 1 - (numActive - s) / windowSize;
            const gxP = Math.floor((pt.x - oX) / step);
            const gyP = Math.floor((pt.y - oY) / step);
            for (let dy = -zigCellRad; dy <= zigCellRad; dy++) {
              for (let dx = -zigCellRad; dx <= zigCellRad; dx++) {
                const gxz = gxP + dx;
                const gyz = gyP + dy;
                if (gxz >= 0 && gxz < cols && gyz >= 0 && gyz < rows) {
                  const idxz = gyz * cols + gxz;
                  const dpx = oX + gxz * step + half;
                  const dpy = oY + gyz * step + half;
                  const ddx = dpx - pt.x;
                  const ddy = dpy - pt.y;
                  const dd2 = ddx * ddx + ddy * ddy;
                  if (dd2 < zigR2) {
                    const dist = Math.sqrt(dd2);
                    const falloff = Math.max(0, 1 - dist / zigRadius);
                    const lineTarget = falloff * falloff * 0.65 * (0.4 + 0.6 * fadeFromEdge);
                    if (lineTarget > targetMap[idxz]) {
                      targetMap[idxz] = lineTarget;
                    }
                  }
                }
              }
            }
          }
        }
      }

      /* Group year dots so the whole year lights up uniformly if touched */
      for (const yp of YEAR_POSITIONS) {
        const stamp = yearStamps.get(yp.year)!;
        let maxTarget = 0;
        const indices: number[] = [];
        stamp.forEach((key) => {
          const [gxS, gyS] = key.split(",");
          const idx = Number(gyS) * cols + Number(gxS);
          if (idx >= 0 && idx < N) {
            indices.push(idx);
            if (targetMap[idx] > maxTarget) {
              maxTarget = targetMap[idx];
            }
          }
        });
        
        /* If any dot in the year is touched significantly, uniformly light up the whole year */
        if (maxTarget > 0.05) {
          /* Boost the visibility to make the number pop clearly */
          const uniformTarget = Math.min(1, maxTarget * 1.8);
          for (const idx of indices) {
            if (uniformTarget > targetMap[idx]) {
              targetMap[idx] = uniformTarget;
            }
          }
        }
      }

      /* Apply target map to actual glows */
      for (let i = 0; i < N; i++) {
        if (targetMap[i] > glows[i]) {
          glows[i] += (targetMap[i] - glows[i]) * 0.55;
        }
      }

      /* Year proximity auto-reveal */
      for (const yp of YEAR_POSITIONS) {
        const stamp = yearStamps.get(yp.year)!;
        let litCount = 0;
        let totalCount = 0;
        stamp.forEach((key) => {
          const [gxS, gyS] = key.split(",");
          const idx = Number(gyS) * cols + Number(gxS);
          if (idx >= 0 && idx < N) {
            totalCount++;
            if (glows[idx] > 0.3) litCount++;
          }
        });
        const ratio = totalCount > 0 ? litCount / totalCount : 0;
        if (ratio > 0.4) {
          setRevealedYears((prev) => {
            if (prev.has(yp.year)) return prev;
            const next = new Set(prev);
            next.add(yp.year);
            return next;
          });
        }
      }

      /* Clock tick sound near year dots */
      const tickNow = performance.now();
      if (tickNow - lastTickTime > 80) {
        const tdx = mx - lastTickX;
        const tdy = my - lastTickY;
        if (tdx * tdx + tdy * tdy > step * step) {
          let nearYear = false;
          for (let sdy = -3; sdy <= 3 && !nearYear; sdy++) {
            for (let sdx = -3; sdx <= 3; sdx++) {
              if (allYearDots.has(`${gxC + sdx},${gyC + sdy}`)) {
                nearYear = true;
                break;
              }
            }
          }
          if (nearYear) {
            playClockTick();
            lastTickX = mx;
            lastTickY = my;
            lastTickTime = tickNow;
          }
        }
      }

      /* Dispersion progress: dots start clustered at cursor → spread to grid */
      const disperseElapsed = disperseStartRef.current > 0
        ? performance.now() - disperseStartRef.current : 99999;
      const disperseT = Math.min(1, disperseElapsed / 1500);
      const disperseEase = disperseT < 1 ? 1 - Math.pow(1 - disperseT, 3) : 1;
      const origX = disperseOriginRef.current.x;
      const origY = disperseOriginRef.current.y;

      /* Clear & draw */
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < N; i++) {
        if (glows[i] > 0.005) {
          const gx = i % cols;
          const gy = Math.floor(i / cols);
          let px = oX + gx * step + half;
          let py = oY + gy * step + half;

          /* During dispersion, interpolate from cursor origin to grid position */
          if (disperseEase < 1 && origX > 0) {
            px = origX + (px - origX) * disperseEase;
            py = origY + (py - origY) * disperseEase;
          }

          ctx.globalAlpha = glows[i];

          if (isYearDot[i] && glows[i] > 0.35) {
            const tint = Math.min(1, (glows[i] - 0.35) * 3);
            ctx.drawImage(sprite, px - halfSprite, py - halfSprite, spriteSize, spriteSize);
            if (tint > 0.1) {
              ctx.globalAlpha = tint * 0.6;
              ctx.fillStyle = "#ffffff";
              ctx.beginPath();
              ctx.arc(px, py, half, 0, Math.PI * 2);
              ctx.fill();
            }
          } else {
            ctx.drawImage(sprite, px - halfSprite, py - halfSprite, spriteSize, spriteSize);
          }
        }
      }
      ctx.globalAlpha = 1;

      /* Cursor glow overlay */
      if (glowRef.current) {
        const relY = mouseRef.current.y;
        glowRef.current.style.background = `radial-gradient(circle 200px at ${mx}px ${relY}px, rgba(255,255,255,0.04), transparent 70%)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    /* Draw zigzag SVG path */
    if (zigzagPathRef.current && zigzagGlowRef.current) {
      const points = YEAR_POSITIONS.map((yp) => ({
        x: oX + Math.floor(yp.xPct * cols) * step + half,
        y: oY + Math.floor(yp.yPct * rows) * step + half,
      }));

      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const cpX = (prev.x + curr.x) / 2;
        const cpY1 = prev.y + (curr.y - prev.y) * 0.3;
        const cpY2 = prev.y + (curr.y - prev.y) * 0.7;
        d += ` C ${cpX} ${cpY1}, ${cpX} ${cpY2}, ${curr.x} ${curr.y}`;
      }

      zigzagPathRef.current.setAttribute("d", d);
      zigzagGlowRef.current.setAttribute("d", d);
      zigzagPathRef.current.closest("svg")?.setAttribute("viewBox", `0 0 ${W} ${H}`);

      /* Sample points along the path for progressive dot lighting */
      try {
        const pathLen = zigzagPathRef.current.getTotalLength();
        const numSamples = 150;
        const samples: { x: number; y: number }[] = [];
        for (let s = 0; s <= numSamples; s++) {
          const pt = zigzagPathRef.current.getPointAtLength((s / numSamples) * pathLen);
          samples.push({ x: pt.x, y: pt.y });
        }
        zigzagPointsRef.current = samples;
        zigzagLineStartRef.current = performance.now() + 800;
      } catch { /* Path not ready yet */ }

      setTimeout(() => {
        zigzagPathRef.current?.classList.add("drawn");
        zigzagGlowRef.current?.classList.add("drawn");
      }, 800);
    }

    return () => cancelAnimationFrame(rafRef.current);
  }, [isActive]);

  /* ── Animate marquee chars ── */
  useEffect(() => {
    if (!isActive || !marqueeRef.current) return;
    const chars = marqueeRef.current.querySelectorAll<HTMLSpanElement>(".exp-marquee-char");
    if (chars.length === 0) return;

    anime({
      targets: Array.from(chars),
      translateY: [
        { to: -6, duration: 400 },
        { to: 0, duration: 400 },
      ],
      rotateZ: [
        { to: -8, duration: 300 },
        { to: 8, duration: 300 },
        { to: 0, duration: 300 },
      ],
      scale: [
        { to: 1.15, duration: 250 },
        { to: 1, duration: 250 },
      ],
      delay: ((_el: unknown, i: number) => i * 40) as unknown as number,
      loop: true,
      ease: "inOutSine",
    });
  }, [isActive]);

  /* ── Year click handler ── */
  const handleYearClick = useCallback((year: string) => {
    initAudio();
    setActiveYear((prev) => (prev === year ? null : year));

    const yearEl = yearElsRef.current.get(year);
    if (yearEl) {
      anime({
        targets: yearEl,
        scale: [1, 1.2, 1.05],
        duration: 500,
        ease: "outElastic(1, .6)",
      });
    }
  }, []);

  /* ── Marquee text builder ── */
  const marqueeText = "CAREER & EXPERIENCE";
  const buildMarqueeChars = (key: string) => (
    <span className="exp-marquee-text" key={key}>
      {marqueeText.split("").map((ch, i) => (
        <span
          key={`${key}-${i}`}
          className="exp-marquee-char"
          style={{ display: "inline-block" }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );

  /* ── Mini marquee for cards ── */
  const buildMiniMarquee = (text: string) => (
    <div className="exp-mini-marquee">
      <div className="exp-mini-marquee-track">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} className="exp-mini-marquee-text">{text}</span>
        ))}
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className={`exp-section${isActive ? " active" : ""}`} id="experience">
      {/* Dot grid canvas */}
      <canvas ref={canvasRef} className="exp-dot-canvas" />

      {/* Cursor ambient glow */}
      <div ref={glowRef} className="exp-cursor-glow" />

      {/* Marquee banner */}
      <div className="exp-marquee" ref={marqueeRef}>
        <div className="exp-marquee-track">
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i}>
              {buildMarqueeChars(`m${i}`)}
              <span className="exp-marquee-sep">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* SVG Zigzag line — full viewport layer */}
      <svg className="exp-zigzag-line">
        <defs>
          <linearGradient id="expZigzagGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff0033" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ff0033" stopOpacity="1" />
            <stop offset="100%" stopColor="#ff0033" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path ref={zigzagGlowRef} className="exp-zigzag-glow" />
        <path ref={zigzagPathRef} className="exp-zigzag-path" />
      </svg>

      {/* Year markers — positioned at exact canvas dot pixel coordinates */}
      {YEAR_POSITIONS.map(({ year, xPct, yPct }) => {
        const pos = yearPixelPositions.get(year);
        const isRevealed = revealedYears.has(year);
        const isYearActive = activeYear === year;
        return (
          <div
            key={year}
            ref={(el) => { if (el) yearElsRef.current.set(year, el); }}
            className={`exp-year${isRevealed ? " revealed" : ""}${isYearActive ? " active" : ""}`}
            style={{
              left: pos ? pos.x : `${xPct * 100}%`,
              top: pos ? pos.y : `${yPct * 100}%`,
            }}
            onClick={() => handleYearClick(year)}
          >
            {/* Hidden text for accessibility, while the canvas dots render the visuals */}
            <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>{year}</span>
          </div>
        );
      })}

      {/* Card overlay — centered modal */}
      {activeYear && (() => {
        const entry = CAREER.find((c) => c.year === activeYear);
        if (!entry) return null;
        return (
          <div className="exp-card-overlay" onClick={() => setActiveYear(null)}>
            <div
              className="exp-card visible"
              ref={(el) => { if (el) cardElsRef.current.set(entry.year, el); }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="exp-card-close"
                onClick={() => setActiveYear(null)}
                aria-label="Close"
              >
                ✕
              </button>

              <div className="exp-card-year-badge">{entry.year}</div>

              <div className="exp-card-header">
                <h3 className="exp-card-company">{entry.company}</h3>
                <p className="exp-card-role">{entry.role}</p>
              </div>

              <p className="exp-card-desc">{entry.description}</p>

              {buildMiniMarquee(entry.roleMarquee)}

              <div className="exp-card-media">
                {entry.videoSrc ? (
                  <video src={entry.videoSrc} muted loop playsInline />
                ) : (
                  <div className="exp-card-media-overlay">
                    <span className="exp-card-media-icon">▶</span>
                  </div>
                )}
              </div>

              <h4 className="exp-card-section-title">WHAT I DID</h4>
              <ul className="exp-card-bullets">
                {entry.bullets.map((b, i) => (
                  <li key={i} className="exp-card-bullet">{b}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })()}

      {/* Hint overlay */}
      {isActive && revealedYears.size === 0 && (
        <div className="exp-hint">
          <span className="exp-hint-icon">⌖</span>
          <span className="exp-hint-text">find the hidden years</span>
        </div>
      )}
    </section>
  );
}
