"use client";

import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import anime from "animejs";
import { gsap } from "gsap";
import { Draggable } from "gsap/dist/Draggable";
import { interpolate } from "flubber";
import { stampText, textPixelWidth } from "../pixel-font";
import { playClockTick, initAudio } from "../clock-tick";
import "./experience-section.css";

/* ═══════════════════════════════════════
   SVG Morphing Paths (100x100 viewBox)
   ═══════════════════════════════════════ */
const charPaths: Record<string, string> = {
  "C": "M 80 20 L 60 20 L 60 40 L 40 40 L 40 60 L 60 60 L 60 80 L 80 80 L 80 100 L 20 100 L 20 0 L 80 0 Z",
  "A": "M 40 0 L 60 0 L 100 100 L 80 100 L 70 70 L 30 70 L 20 100 L 0 100 Z M 50 20 L 35 55 L 65 55 Z",
  "R": "M 20 0 L 70 0 C 85 0 95 10 95 30 C 95 50 85 60 70 60 L 50 60 L 85 100 L 60 100 L 40 60 L 40 100 L 20 100 Z M 40 20 L 40 40 L 65 40 C 70 40 75 35 75 30 C 75 25 70 20 65 20 Z",
  "E": "M 20 0 L 80 0 L 80 20 L 40 20 L 40 40 L 70 40 L 70 60 L 40 60 L 40 80 L 80 80 L 80 100 L 20 100 Z",
  "&": "M 80 90 L 95 100 L 70 75 C 80 65 85 50 80 35 C 75 15 50 5 35 20 C 20 35 20 65 35 80 C 50 95 70 95 80 90 Z M 45 35 C 55 25 60 35 55 45 C 50 55 40 50 45 35 Z M 45 70 C 35 60 35 50 45 45 C 55 40 65 60 55 70 C 45 80 40 70 45 70 Z",
  "P": "M 20 0 L 70 0 C 90 0 100 15 100 35 C 100 55 90 70 70 70 L 40 70 L 40 100 L 20 100 Z M 40 20 L 40 50 L 65 50 C 75 50 80 45 80 35 C 80 25 75 20 65 20 Z",
  "I": "M 40 0 L 60 0 L 60 100 L 40 100 Z",
  "N": "M 20 0 L 40 0 L 70 60 L 70 0 L 90 0 L 90 100 L 70 100 L 40 40 L 40 100 L 20 100 Z",
  "X": "M 10 0 L 35 0 L 50 40 L 65 0 L 90 0 L 65 50 L 90 100 L 65 100 L 50 60 L 35 100 L 10 100 L 35 50 Z",
};

const shapePaths = [
  "M 50 0 C 77 0 100 23 100 50 C 100 77 77 100 50 100 C 23 100 0 77 0 50 C 0 23 23 0 50 0 Z", /* Circle */
  "M 10 10 L 90 10 L 90 90 L 10 90 Z", /* Square */
  "M 50 10 L 90 90 L 10 90 Z", /* Triangle */
  "M 50 0 L 100 50 L 50 100 L 0 50 Z", /* Diamond */
  "M 50 0 L 65 35 L 100 35 L 70 60 L 80 100 L 50 75 L 20 100 L 30 60 L 0 35 L 35 35 Z", /* Star */
];

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
      "Medical Informatics Engineering (MIE) builds healthcare IT solutions, evolving from ambulatory EHRs to specialized digital health platforms, driving innovation in clinical data and modern care systems since 1995.",
    bullets: [
      "Architected 3 MCP servers with 28 medical tools for clinical data retrieval",
      "Implemented BioClinicalBERT NER pipeline for medical entity extraction",
      "Built patient analytics dashboard in React with real-time visualizations",
      "Deployed 6 Docker services with Kubernetes autoscaler written in Go",
      "Reduced query response time from 4.8s to 1.2s with Redis caching layer",
      "Achieved 92% accuracy on clinical entity extraction benchmarks",
    ],
    videoSrc: "/MIE.mp4",
  },
  {
    year: "2024",
    company: "PURDUE UNIVERSITY",
    role: "Master of Science in Computer Science",
    roleMarquee: "EDUCATION",
    description:
      "Purdue University Fort Wayne offers a prestigious Purdue degree within a dynamic metropolitan setting. Recognized for its top-tier College of Engineering, Technology, and Computer Science, PFW combines rigorous STEM academics with the personalized mentorship of a small-campus environment.",
    bullets: [
      "Engineered an AWS serverless event pipeline utilizing Go Lambdas, API Gateway, and DynamoDB",
      "Designed a distributed Go job scheduler handling 1,200 jobs/min with zero drops",
      "Developed a full-stack Next.js and Go e-commerce storefront achieving a 98.5 Lighthouse score",
      "Built a GraphQL search application delivering infinite scroll and sub-100ms response times",
    ],
    videoSrc: "/PFW.mp4",
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
    videoSrc: "/accenture.mp4",
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
    videoSrc: "/accenture.mp4",
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
     Activate when ~0.35 viewports scrolled (exactly as hero text fades and converges). */
  useEffect(() => {
    const H = window.innerHeight;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = H * 0.35;
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
        
        /* Do not allow the line to draw AT ALL until the dots have finished their initial divergence 
           explosion. Divergence ends exactly at scrollY = H * 1.4 (activation 1.0 + range 0.4). */
        if (scrollY >= H * 1.4) {
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
        }

        const allowedProgress = Math.min(scrollProgress, maxAllowed);

        try {
          const totalLength = zigzagPathRef.current.getTotalLength();
          zigzagPathRef.current.style.strokeDasharray = `${totalLength}`;
          zigzagPathRef.current.style.strokeDashoffset = `${totalLength * (1 - allowedProgress)}`;

          zigzagGlowRef.current.style.strokeDasharray = `${totalLength}`;
          zigzagGlowRef.current.style.strokeDashoffset = `${totalLength * (1 - allowedProgress)}`;
        } catch (e) { }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isActive]);

  /* ── Mouse / touch tracking ── */
  useEffect(() => {
    // Track viewport coordinates independently of scroll
    let cx = -9999;
    let cy = -9999;
    const updateLocalMouse = () => {
      if (!sectionRef.current || cx === -9999) return;
      const rect = sectionRef.current.getBoundingClientRect();
      mouseRef.current = { x: cx - rect.left, y: cy - rect.top };
    };
    const handleMouse = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      updateLocalMouse();
    };
    const handleTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) {
        cx = t.clientX;
        cy = t.clientY;
        updateLocalMouse();
      }
    };
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("scroll", updateLocalMouse, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("scroll", updateLocalMouse);
    };
  }, []);

  /* ── Dot grid canvas + flashlight + hidden years ── */
  useEffect(() => {
    if (!isActive) {
      disperseStartRef.current = 0;
      return;
    }

    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) {
      disperseStartRef.current = 0;
      return;
    }

    /* Record dispersion origin — prefer the converged dot position from ParticleCanvas */
    disperseStartRef.current = performance.now();
    const rect = section.getBoundingClientRect();
    const convergedPos = (window as any).__convergedDotPos;
    if (convergedPos?.active) {
      /* The convergedPos.y is an absolute document coordinate.
         We subtract the section's absolute document coordinate (rect.top + window.scrollY) 
         to get the precise relative Y position within the ExperienceSection canvas. */
      const sectionAbsoluteY = rect.top + window.scrollY;
      disperseOriginRef.current = {
        x: convergedPos.x - rect.left,
        y: convergedPos.y - sectionAbsoluteY,
      };
      convergedPos.active = false; /* consumed */
    } else {
      disperseOriginRef.current = {
        x: mouseRef.current.x > -9000
          ? mouseRef.current.x
          : window.innerWidth / 2 - rect.left,
        y: mouseRef.current.y > -9000
          ? mouseRef.current.y
          : window.innerHeight / 2 - rect.top,
      };
    }

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
    const pulseStart = new Float32Array(N); /* timestamp when pulse begins */
    const PULSE_DUR = 600; /* ms for one pulse up+down */

    /* Directional wave state */
    let prevMx = -9999;
    let prevMy = -9999;
    let cursorStoppedFrames = 0;
    let waveActive = false;
    const WAVE_SPEED = 0.4; /* px per ms — how fast the wave front travels */
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
            /* Quadratic falloff for ambient dots */
            const falloff = Math.max(0, 1 - dist * INV_R);
            let baseTarget = falloff * falloff;

            /* Year dot proximity hint — matches entry screen K behavior:
               use linear falloff (much brighter) so year digits POP
               against the dimmer quadratic ambient dots */
            if (isYearDot[idx] && dist < 130) {
              baseTarget = Math.max(baseTarget, falloff * 0.9);
            }

            if (baseTarget > targetMap[idx]) {
              targetMap[idx] = baseTarget;
            }
          }
        }
      }

      /* Directional wave: when cursor moves, launch a wave in movement direction.
         Dots ahead of cursor (in movement direction) pulse with delay proportional
         to their distance along that direction. Wave travels to screen edge. */
      {
        const velX = mx - prevMx;
        const velY = my - prevMy;
        const speed = Math.sqrt(velX * velX + velY * velY);

        if (speed > 3) {
          /* Cursor is moving — launch a new wave */
          cursorStoppedFrames = 0;
          if (!waveActive) waveActive = true;

          /* Normalize direction */
          const dirX = velX / speed;
          const dirY = velY / speed;

          const now = performance.now();

          /* Project every dot onto the movement direction from cursor position.
             Only dots in the forward half (positive projection) get pulsed.
             Delay = projected distance / wave speed */
          for (let i = 0; i < N; i++) {
            const gx = i % cols;
            const gy = Math.floor(i / cols);
            const px = oX + gx * step + half;
            const py = oY + gy * step + half;
            const toX = px - mx;
            const toY = py - my;

            /* Project onto direction vector */
            const proj = toX * dirX + toY * dirY;

            /* Only forward dots (positive projection), skip dots behind cursor */
            if (proj > 0 && proj < 1200) {
              /* Perpendicular distance — only pulse dots within a band */
              const perp = Math.abs(toX * (-dirY) + toY * dirX);
              if (perp < RADIUS * 1.5) {
                /* Skip dots already mid-pulse */
                if (pulseStart[i] > 0) {
                  const el = now - pulseStart[i];
                  if (el >= 0 && el < PULSE_DUR) continue;
                }
                /* Delay based on distance along wave direction */
                pulseStart[i] = now + proj / WAVE_SPEED;
              }
            }
          }
        } else {
          cursorStoppedFrames++;
          if (cursorStoppedFrames > 10) {
            waveActive = false;
          }
        }

        prevMx = mx;
        prevMy = my;
      }



      /* Apply target map to actual glows — snap-fast lerp matching entry screen */
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
            if (glows[idx] > 0.15) litCount++;
          }
        });
        const ratio = totalCount > 0 ? litCount / totalCount : 0;
        if (ratio > 0.15) {
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

      /* Scroll-linked divergence: dots stay at converged point, then release as user scrolls further.
         divergeProgress: 0 = all dots at origin, 1 = all dots at their grid positions.
         Maps scrollY from activation threshold to threshold + 0.35*H 
         We delay activation until the section is fully in focus (reaches the top of viewport) */
      const activationThreshold = window.innerHeight * 1.0; 
      const divergeRange = window.innerHeight * 0.4; /* dots fully released after scrolling another 0.4 viewports */
      const scrollPastThreshold = window.scrollY - activationThreshold;
      const divergeProgress = Math.min(1, Math.max(0, scrollPastThreshold / divergeRange));
      
      /* Dynamically track the current mouse position. This ensures the dots release 
         from exactly where the cursor is right now (the converged dot follows the cursor). */
      const origX = mx;
      const origY = my;

      /* Clear & draw */
      ctx.clearRect(0, 0, W, H);
      const drawNow = performance.now();
      
      /* Draw the converged dot holding at the cursor if we haven't fully diverged */
      if (divergeProgress < 1) {
        /* Once divergence hits 1, the holding dot fades out completely */
        const holdDotAlpha = 1 - divergeProgress;
        const pulseScale = 1 + 0.15 * Math.sin(drawNow / 200);
        const holdSize = 10 * pulseScale;
        
        ctx.save();
        ctx.globalAlpha = holdDotAlpha;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(origX, origY, holdSize / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = holdDotAlpha * 0.3;
        ctx.beginPath();
        ctx.arc(origX, origY, holdSize * 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      for (let i = 0; i < N; i++) {
        if (glows[i] > 0.005 || divergeProgress < 1) {
          const gx = i % cols;
          const gy = Math.floor(i / cols);
          let px = oX + gx * step + half;
          let py = oY + gy * step + half;

          let alphaMult = 1;
          let shootStretch = 1;
          let shootAngle = 0;
          let isShooting = false;

          /* Scroll-linked divergence: same hash as hero convergence for consistency */
          if (divergeProgress < 1) {
            const hash = ((gx * 73.7 + gy * 157.3 + gx * gy * 0.37) % 997) / 997;
            
            /* Each dot fires in a narrow 0.05 window, staggered across 0.95 of divergence */
            const startT = hash * 0.95;
            const localT = Math.min(1, Math.max(0, (divergeProgress - startT) / 0.05));
            
            if (localT <= 0) {
               alphaMult = 0; /* Invisible before turn — still at convergence point */
            } else if (localT < 1) {
               isShooting = true;
               /* Cubic-out easing for fast initial burst slowing to final grid position */
               const easeT = 1 - Math.pow(1 - localT, 3);
               const easeTPrev = 1 - Math.pow(1 - Math.max(0, localT - 0.1), 3);
               
               const dx = px - origX;
               const dy = py - origY;
               shootAngle = Math.atan2(dy, dx);
               const distFull = Math.sqrt(dx*dx + dy*dy);
               const dCurr = distFull * easeT;
               const dPrev = distFull * easeTPrev;
               
               shootStretch = Math.max(3, (dCurr - dPrev) / 15);
               alphaMult = Math.min(1, shootStretch * 0.4);
               
               px = origX + dx * easeT;
               py = origY + dy * easeT;
            } else {
               /* Landed — fade in smoothly */
               const fadeT = Math.min(1, (divergeProgress - (startT + 0.05)) / 0.05);
               alphaMult = fadeT * fadeT;
            }
          }

          /* Stagger pulse scale: 1.0 → 1.3 → 1.0 over PULSE_DUR ms */
          let scale = 1;
          if (pulseStart[i] > 0) {
            const elapsed = drawNow - pulseStart[i];
            if (elapsed >= 0 && elapsed < PULSE_DUR) {
              const t = elapsed / PULSE_DUR;
              /* Sin curve: 0→1→0 */
              scale = 1 + 0.3 * Math.sin(t * Math.PI);
            } else if (elapsed >= PULSE_DUR) {
              pulseStart[i] = 0; /* pulse done */
            }
          }

          const drawSize = spriteSize * scale;
          const halfDraw = drawSize / 2;

          let renderOp = glows[i] * alphaMult;
          if (isShooting) {
              /* Override glow when shooting so they are distinctly visible */
              renderOp = Math.max(renderOp, Math.min(1, shootStretch * 0.5));
          } else if (divergeProgress < 1) {
              /* During scroll-linked divergence, hide dots that haven't fired yet */
              if (alphaMult === 0) renderOp = 0;
          }
           
          if (renderOp <= 0.005) continue;
          ctx.globalAlpha = renderOp;

          /* Apply rotation and stretching if currently shooting */
          ctx.save();
          ctx.translate(px, py);
          if (isShooting && shootStretch > 1) {
              ctx.rotate(shootAngle);
              ctx.scale(shootStretch, Math.max(0.4, 1.5 - shootStretch*0.1));
          }

          if (isYearDot[i] && glows[i] > 0.35) {
            const tint = Math.min(1, (glows[i] - 0.35) * 3);
            ctx.drawImage(sprite, -halfDraw, -halfDraw, drawSize, drawSize);
            if (tint > 0.1) {
              ctx.globalAlpha = tint * 0.6 * alphaMult;
              ctx.fillStyle = "#ffffff";
              ctx.beginPath();
              ctx.arc(0, 0, half * scale, 0, Math.PI * 2);
              ctx.fill();
            }
          } else {
            ctx.drawImage(sprite, -halfDraw, -halfDraw, drawSize, drawSize);
          }
          
          ctx.restore();
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
    }

    return () => cancelAnimationFrame(rafRef.current);
  }, [isActive]);

  /* ── Interactive Draggable Characters (Safe Custom Implementation) ── */
  useEffect(() => {
    if (!isActive || !marqueeRef.current) return;
    
    const chars = marqueeRef.current.querySelectorAll<HTMLElement>(".exp-marquee-char");
    if (chars.length === 0) return;

    /* Custom drag implementation because GSAP Draggable destroys the inline layout math */
    let activeChar: HTMLElement | null = null;
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;

    const onPointerDown = (e: PointerEvent) => {
      e.preventDefault(); // Prevent native drag/select
      const target = e.currentTarget as HTMLElement;
      activeChar = target;
      
      /* Record absolute mouse start */
      startX = e.clientX;
      startY = e.clientY;
      
      /* Use gsap.getProperty to reliably get current GSAP transforms (bypassing matrix/translate3d string CSS parsing issues) */
      currentX = (gsap.getProperty(target, "x") as number) || 0;
      currentY = (gsap.getProperty(target, "y") as number) || 0;

      gsap.killTweensOf(target, "x,y,zIndex");
      gsap.set(target, { zIndex: 100 });
      
      /* Listen on window to guarantee we don't drop events if the mouse moves very fast, leaves the element, or hits screen edges */
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
      window.addEventListener("pointercancel", onPointerUp);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!activeChar) return;
      
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      
      gsap.set(activeChar, {
        x: currentX + dx,
        y: currentY + dy
      });
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!activeChar) return;
      
      gsap.to(activeChar, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.4)",
        zIndex: 0,
      });
      
      activeChar = null;
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };

    chars.forEach(char => {
      char.addEventListener("pointerdown", onPointerDown);
    });

    return () => {
      chars.forEach(char => {
        char.removeEventListener("pointerdown", onPointerDown);
        
        /* Reset state on cleanup */
        gsap.killTweensOf(char);
      });
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [isActive]);



  /* ── Interpolator Cache to prevent main-thread freezing ── */
  /* Flubber path interpolation is heavy. Calculate each unique path pairing exactly ONCE. */
  const getInterpolator = useMemo(() => {
    const cache = new Map<string, (t: number) => string>();
    return (fromPath: string, toPath: string) => {
      const key = `${fromPath}|${toPath}`;
      if (cache.has(key)) return cache.get(key)!;
      const interpolator = interpolate(fromPath, toPath, { maxSegmentLength: 2 });
      cache.set(key, interpolator);
      return interpolator;
    };
  }, []);

  /* ── Per-character SVG Path Morphing ── */
  useEffect(() => {
    if (!isActive || !marqueeRef.current) return;

    const charPathsElements = Array.from(marqueeRef.current.querySelectorAll<SVGPathElement>(".exp-svg-char-path"));
    if (charPathsElements.length === 0) return;

    const timelines: gsap.core.Timeline[] = [];

    // The text block "CAREER & EXPERIENCE" renders exactly 17 SVGs (spaces are skipped).
    // CAREER = indices 0-5
    // & = index 6
    // EXPERIENCE = indices 7-16
    const pathsPerBlock = 17;
    const blocksCount = Math.floor(charPathsElements.length / pathsPerBlock);

    function getShuffled<T>(array: T[], count: number): T[] {
      const cloned = [...array];
      for (let i = cloned.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
      }
      return cloned.slice(0, count);
    }

    const careerPool = [0, 1, 2, 3, 4, 5];
    const expPool = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    for (let b = 0; b < blocksCount; b++) {
      const blockStartIndex = b * pathsPerBlock;
      
      const careerSelected = getShuffled(careerPool, 2);
      const expSelected = getShuffled(expPool, 3);
      const animatedIndices = new Set([...careerSelected, ...expSelected]);

      for (let relIdx = 0; relIdx < pathsPerBlock; relIdx++) {
        // Skip characters not selected for this block iteration
        if (!animatedIndices.has(relIdx)) continue;

        const globalIdx = blockStartIndex + relIdx;
        const pathEl = charPathsElements[globalIdx];
        if (!pathEl) continue;

        const originalPath = pathEl.getAttribute("data-original");
        if (!originalPath) continue;

        // Use globalIdx 'i' for deterministic deterministic-looking shape logic or randomized logic
        const i = globalIdx;

      /* Pick 3 constant shapes from the pool for this character */
      const targetPaths = [
        shapePaths[i % shapePaths.length],
        shapePaths[(i + 2) % shapePaths.length],
        shapePaths[(i + 4) % shapePaths.length],
      ];

      const tl = gsap.timeline({
        repeat: -1,
        delay: (i % 19) * 0.4,
      });

      targetPaths.forEach((targetPath, shapeIdx) => {
        /* Grab cached interpolators */
        const toShape = getInterpolator(originalPath, targetPath);
        const fromShape = getInterpolator(targetPath, originalPath);
        
        /* Object for GSAP to tween */
        const proxy = { progress: 0 };

        /* Morph Letter -> Shape */
        tl.to(proxy, {
          progress: 1,
          duration: 0.8,
          ease: "expo.inOut",
          onUpdate: () => pathEl.setAttribute("d", toShape(proxy.progress)),
        });

        /* Recolor slightly and subtly scale the SVG container during shape */
        const svgEl = pathEl.closest("svg");
        if (svgEl) {
          tl.to(
            svgEl,
            {
              scale: 1.15,
              rotation: (Math.random() - 0.5) * 20,
              duration: 0.8,
              ease: "expo.inOut",
            },
            "<"
          );
          tl.to(
            pathEl,
            {
              fill: `hsla(${(i * 37) % 360}, 60%, 80%, 1)`,
              duration: 0.8,
            },
            "<"
          );
        }

        /* Hold shape */
        tl.to({}, { duration: 1.0 });

        /* Reset proxy for return trip */
        tl.set(proxy, { progress: 0 });

        /* Morph Shape -> Letter */
        tl.to(proxy, {
          progress: 1,
          duration: 0.8,
          ease: "expo.inOut",
          onUpdate: () => pathEl.setAttribute("d", fromShape(proxy.progress)),
        });

        /* Reset container scale/rotation and color */
        if (svgEl) {
          tl.to(
            svgEl,
            { scale: 1, rotation: 0, duration: 0.8, ease: "expo.inOut" },
            "<"
          );
          tl.to(
            pathEl,
            { fill: "#ffffff", duration: 0.8 },
            "<"
          );
        }

        /* Hold letter */
        tl.to({}, { duration: 0.6 });
      });

      timelines.push(tl);
      }
    }

    return () => {
      timelines.forEach((tl) => tl.kill());
      /* Ensure paths are reset */
      charPathsElements.forEach((pathEl) => {
        pathEl.setAttribute("d", pathEl.getAttribute("data-original") || "");
        gsap.set(pathEl, { clearProps: "all" });
        const svgEl = pathEl.closest("svg");
        if (svgEl) gsap.set(svgEl, { clearProps: "all" });
      });
    };
  }, [isActive]);

  /* ── Marquee text builder (renders SVGs for morphing) ── */
  const marqueeText = "CAREER & EXPERIENCE";
  const buildMarqueeChars = (key: string) => (
    <span className="exp-marquee-text" key={key}>
      {marqueeText.split("").map((ch, i) => {
        const isSpace = ch === " ";
        const pathData = charPaths[ch] || "";

        return (
          <span
            key={`${key}-${i}`}
            className="exp-marquee-char"
            style={{ 
              display: "inline-flex", 
              justifyContent: "center",
              alignItems: "center",
              width: isSpace ? "0.4em" : "1em",
              height: "1em",
              minWidth: isSpace ? "0.4em" : "1em",
              maxWidth: isSpace ? "0.4em" : "1em",
              flexBasis: isSpace ? "0.4em" : "1em",
              flexShrink: 0,
              flexGrow: 0,
              margin: isSpace ? "0" : "0 0.05em",
              verticalAlign: "middle",
              position: "relative",
              pointerEvents: isSpace ? "none" : "auto", 
              cursor: isSpace ? "default" : "grab",
            }}
          >
            {!isSpace && pathData ? (
              <svg 
                viewBox="0 0 100 100" 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  minWidth: "100%", 
                  display: "block", 
                  overflow: "visible",
                  flexShrink: 0  
                }}
              >
                <path 
                  className="exp-svg-char-path"
                  d={pathData} 
                  data-original={pathData}
                  fill="#ffffff"
                />
              </svg>
            ) : null}
          </span>
        );
      })}
    </span>
  );
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
                  <video src={entry.videoSrc} autoPlay muted loop playsInline />
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
