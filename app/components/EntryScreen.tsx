"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { animate } from "animejs";
import "./entry-screen.css";
import { playClockTick, initAudio } from "./clock-tick";

/* ─── Pixel-art font: each char is 5 cols × 7 rows ─── */
const FONT: Record<string, number[][]> = {
  K: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
  ],
  A: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  L: [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  Y: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  N: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  U: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  M: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  R: [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
  ],
  " ": [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
};

/* ─── Stamp text into a Set of "gx,gy" keys ─── */
function stampText(
  text: string,
  startGX: number,
  startGY: number,
): Set<string> {
  const set = new Set<string>();
  let cx = startGX;
  for (const ch of text) {
    const glyph = FONT[ch];
    if (!glyph) {
      cx += 4;
      continue;
    }
    for (let row = 0; row < glyph.length; row++) {
      for (let col = 0; col < glyph[row].length; col++) {
        if (glyph[row][col]) set.add(`${cx + col},${startGY + row}`);
      }
    }
    cx += glyph[0].length + 1;
  }
  return set;
}

function textPixelWidth(text: string): number {
  let w = 0;
  for (const ch of text) {
    const g = FONT[ch];
    w += g ? g[0].length + 1 : 4;
  }
  return w - 1;
}

function placeK(gx: number, gy: number): Set<string> {
  return stampText("K", gx, gy);
}

/* ─── Types ─── */
interface BlockData {
  gx: number;
  gy: number;
  x: number;
  y: number;
  isK1: boolean;
  isK2: boolean;
  isName: boolean;
  baseShade: number;
}

type Phase = "explore" | "found1" | "vibrate" | "converge";

/* ─── Component ─── */
export default function EntryScreen({ onEnter }: { onEnter: () => void }) {
  const gridRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const phaseRef = useRef<Phase>("explore");
  const [phase, _setPhase] = useState<Phase>("explore");
  const [foundCount, setFoundCount] = useState(0);
  const [showHint, setShowHint] = useState(true);

  const setPhase = useCallback((p: Phase) => {
    phaseRef.current = p;
    _setPhase(p);
  }, []);

  const mouseRef = useRef({ x: -9999, y: -9999 });
  const blocksRef = useRef<BlockData[]>([]);
  const blockElsRef = useRef<HTMLDivElement[]>([]);
  const layoutRef = useRef({
    cols: 0,
    rows: 0,
    blockSize: 0,
    step: 0,
    offsetX: 0,
    offsetY: 0,
  });
  const k1Ref = useRef<Set<string>>(new Set());
  const k2Ref = useRef<Set<string>>(new Set());
  const k1Found = useRef(false);
  const k2Found = useRef(false);
  const nameBlocksRef = useRef<Set<string>>(new Set());
  const glowsRef = useRef<Float32Array>(new Float32Array(0));
  const rafRef = useRef(0);
  const vibrateTimerRef = useRef<{ pause: () => void } | null>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  /* ─── Build grid on mount ─── */
  useEffect(() => {
    const container = gridRef.current;
    if (!container) return;

    const W = window.innerWidth;
    const H = window.innerHeight;
    const blockSize = W < 600 ? 14 : W < 1024 ? 18 : 22;
    const gap = W < 600 ? 2 : 3;
    const step = blockSize + gap;
    const cols = Math.floor(W / step);
    const rows = Math.floor(H / step);
    const oX = (W - cols * step + gap) / 2;
    const oY = (H - rows * step + gap) / 2;

    layoutRef.current = { cols, rows, blockSize, step, offsetX: oX, offsetY: oY };

    /* Place two hidden Ks in left/right zones */
    const margin = Math.min(6, Math.max(2, Math.floor(cols * 0.08)));
    const kW = 5;
    const kH = 7;
    const zoneW = Math.max(1, Math.floor((cols - margin * 2 - kW) / 2));
    const availH = Math.max(1, rows - margin * 2 - kH);

    const k1gx = margin + Math.floor(Math.random() * zoneW);
    const k1gy = margin + Math.floor(Math.random() * availH);
    const k2gx = margin + zoneW + kW + Math.floor(Math.random() * zoneW);
    const k2gy = margin + Math.floor(Math.random() * availH);

    k1Ref.current = placeK(k1gx, k1gy);
    k2Ref.current = placeK(k2gx, k2gy);

    /* Pre-compute name blocks */
    const line1 = "KALYAN";
    const line2 = "KUMAR";
    const w1 = textPixelWidth(line1);
    const w2 = textPixelWidth(line2);
    const nameStartY = Math.floor(rows / 2) - 8;
    const s1 = stampText(line1, Math.floor((cols - w1) / 2), nameStartY);
    const s2 = stampText(line2, Math.floor((cols - w2) / 2), nameStartY + 9);
    nameBlocksRef.current = new Set([...s1, ...s2]);

    /* Create DOM block elements */
    const frag = document.createDocumentFragment();
    const blocks: BlockData[] = [];
    const els: HTMLDivElement[] = [];

    for (let gy = 0; gy < rows; gy++) {
      for (let gx = 0; gx < cols; gx++) {
        const key = `${gx},${gy}`;
        const el = document.createElement("div");
        el.className = "entry__block";
        el.style.left = `${oX + gx * step}px`;
        el.style.top = `${oY + gy * step}px`;
        el.style.width = `${blockSize}px`;
        el.style.height = `${blockSize}px`;

        blocks.push({
          gx,
          gy,
          x: oX + gx * step,
          y: oY + gy * step,
          isK1: k1Ref.current.has(key),
          isK2: k2Ref.current.has(key),
          isName: nameBlocksRef.current.has(key),
          baseShade: 0.03 + Math.random() * 0.04,
        });

        els.push(el);
        frag.appendChild(el);
      }
    }

    container.appendChild(frag);
    blocksRef.current = blocks;
    blockElsRef.current = els;
    glowsRef.current = new Float32Array(blocks.length);

    /* ── Entrance: blocks start invisible, glow loop reveals them on cursor ── */
    for (const el of els) {
      el.style.opacity = "0";
    }

    /* ── Pre-compute block centers into typed arrays for cache perf ── */
    const N = blocks.length;
    const centersX = new Float32Array(N);
    const centersY = new Float32Array(N);
    const half = blockSize / 2;
    for (let i = 0; i < N; i++) {
      centersX[i] = blocks[i].x + half;
      centersY[i] = blocks[i].y + half;
    }

    /* ── Cursor-reactive glow loop (RAF) ── */
    const RADIUS = 180;
    const R2 = RADIUS * RADIUS;
    const INV_R = 1 / RADIUS;
    let time = 0;
    let lastTickX = -9999;
    let lastTickY = -9999;
    let lastTickTime = 0;
    /* Track which blocks are currently "active" (opacity > 0) so we can
       turn them off when cursor moves away without scanning everything. */
    const activeSet = new Set<number>();

    const glowLoop = () => {
      if (phaseRef.current === "vibrate") {
        rafRef.current = 0;
        return;
      }

      time += 0.016;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const glows = glowsRef.current;

      /* ── Turn off blocks that left the radius last frame ── */
      for (const idx of activeSet) {
        const dx = centersX[idx] - mx;
        const dy = centersY[idx] - my;
        const d2 = dx * dx + dy * dy;
        const b = blocks[idx];
        const isFoundK =
          (b.isK1 && k1Found.current) || (b.isK2 && k2Found.current);
        if (d2 > R2 && !isFoundK) {
          /* Fade out quickly */
          const cur = glows[idx];
          if (cur > 0.005) {
            const next = cur * 0.6;
            glows[idx] = next;
            els[idx].style.opacity = String(next);
          } else {
            glows[idx] = 0;
            els[idx].style.opacity = "0";
            activeSet.delete(idx);
          }
        }
      }

      /* ── Fast grid-based spatial lookup: only visit blocks near cursor ── */
      const gxCenter = Math.floor((mx - oX) / step);
      const gyCenter = Math.floor((my - oY) / step);

      /* ── Clock tick when cursor crosses grid cells ── */
      const tickNow = performance.now();
      if (
        tickNow - lastTickTime > 80 &&
        gxCenter >= 0 && gxCenter < cols &&
        gyCenter >= 0 && gyCenter < rows
      ) {
        const tdx = mx - lastTickX;
        const tdy = my - lastTickY;
        if (tdx * tdx + tdy * tdy > step * step) {
          playClockTick();
          lastTickX = mx;
          lastTickY = my;
          lastTickTime = tickNow;
        }
      }

      const cellRadius = Math.ceil(RADIUS / step) + 1;
      const gxMin = Math.max(0, gxCenter - cellRadius);
      const gxMax = Math.min(cols - 1, gxCenter + cellRadius);
      const gyMin = Math.max(0, gyCenter - cellRadius);
      const gyMax = Math.min(rows - 1, gyCenter + cellRadius);

      for (let gy = gyMin; gy <= gyMax; gy++) {
        for (let gx = gxMin; gx <= gxMax; gx++) {
          const i = gy * cols + gx;
          const dx = centersX[i] - mx;
          const dy = centersY[i] - my;
          const d2 = dx * dx + dy * dy;

          let target: number;
          if (d2 <= R2) {
            const dist = Math.sqrt(d2);
            const falloff = 1 - dist * INV_R;
            target = falloff * falloff; /* quadratic falloff — bright center, soft edge */

            /* K proximity hint */
            const b = blocks[i];
            if (
              (b.isK1 && !k1Found.current) ||
              (b.isK2 && !k2Found.current)
            ) {
              if (dist < 130) target = Math.max(target, falloff * 0.9);
            }
          } else {
            target = 0;
          }

          /* Found K blocks stay lit */
          const b = blocks[i];
          if (
            (b.isK1 && k1Found.current) ||
            (b.isK2 && k2Found.current)
          ) {
            target = 0.85 + 0.15 * Math.sin(time * 2);
          }

          /* Snap-fast lerp toward target */
          const cur = glows[i];
          const next = cur + (target - cur) * 0.55;
          glows[i] = next;

          /* Only write to DOM if opacity actually changes visibly */
          const rounded = next < 0.005 ? 0 : next;
          els[i].style.opacity = String(rounded);

          if (rounded > 0) activeSet.add(i);
          else activeSet.delete(i);
        }
      }

      /* ── Found-K breathing for blocks outside the cursor scan rect ── */
      if (k1Found.current || k2Found.current) {
        const breathe = 0.85 + 0.15 * Math.sin(time * 2);
        for (let i = 0; i < N; i++) {
          const b = blocks[i];
          if (
            (b.isK1 && k1Found.current) ||
            (b.isK2 && k2Found.current)
          ) {
            /* May already be handled above, but ensure even out-of-rect K blocks glow */
            if (!activeSet.has(i) || glows[i] < breathe) {
              glows[i] = breathe;
              els[i].style.opacity = String(breathe);
              activeSet.add(i);
            }
          }
        }
      }

      /* Update cursor glow overlay */
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(circle 200px at ${mx}px ${my}px, rgba(255,255,255,0.04), transparent 70%)`;
      }

      rafRef.current = requestAnimationFrame(glowLoop);
    };

    const glowDelay = setTimeout(() => {
      rafRef.current = requestAnimationFrame(glowLoop);
    }, 200);

    const hintTimer = setTimeout(() => setShowHint(false), 5000);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(glowDelay);
      clearTimeout(hintTimer);
      vibrateTimerRef.current?.pause();
      container.innerHTML = "";
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ─── Mouse / touch tracking ─── */
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) {
        mouseRef.current = { x: t.clientX, y: t.clientY };
      }
    };
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("touchstart", handleTouch, { passive: true });

    /* Escape key bypass — skip to particle canvas */
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onEnter();
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("keydown", handleKey);
    };
  }, [onEnter]);

  /* ─── Cinematic Vibrate → Inhale → Burst sequence ─── */
  const startVibrateBurst = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = 0;
    if (glowRef.current) glowRef.current.style.background = "none";

    const els = blockElsRef.current;
    const blocks = blocksRef.current;
    const { cols, rows, blockSize, step } = layoutRef.current;
    const N = els.length;
    const W = window.innerWidth;
    const H = window.innerHeight;
    const cX = W / 2;
    const cY = H / 2;
    const half = blockSize / 2;

    /* Pre-compute distance from center for each block */
    const dists = new Float32Array(N);
    let maxDist = 0;
    for (let i = 0; i < N; i++) {
      const dx = blocks[i].x + half - cX;
      const dy = blocks[i].y + half - cY;
      dists[i] = Math.sqrt(dx * dx + dy * dy);
      if (dists[i] > maxDist) maxDist = dists[i];
    }
    const invMaxDist = 1 / (maxDist || 1);

    /* Create the white flash overlay for detonation */
    const flash = document.createElement("div");
    flash.style.cssText =
      "position:fixed;inset:0;background:#fff;opacity:0;z-index:200;pointer-events:none;";
    document.body.appendChild(flash);

    /* Container ref for screen-shake */
    const container = gridRef.current!.parentElement!;
    let shakeRAF = 0;

    /*
     * PHASE 1 — WAVE TREMOR (0 → 2.2s)
     * Soft vibration radiates outward from center in sine waves.
     * Intensity ramps gently. Brightness reveals blocks gradually
     * from the center outward like ripples in water.
     */
    const PHASE1_DUR = 2200;

    /*
     * PHASE 2 — PRESSURE BUILD (2.2s → 3.8s)
     * Exponential intensity ramp. Blocks converge slightly toward center.
     * Random white flashes increase in frequency.
     * LED strips and corners already flashing via CSS.
     */
    const PHASE2_DUR = 1600;

    /*
     * PHASE 3 — THE INHALE (3.8s → 4.3s)
     * All blocks contract sharply toward center, screen dims briefly.
     * Creates the "breath before the scream" moment.
     */
    const INHALE_DUR = 500;

    const TOTAL_BUILD = PHASE1_DUR + PHASE2_DUR + INHALE_DUR;
    let startTime = 0;

    const buildLoop = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;

      if (elapsed < PHASE1_DUR) {
        /* ── Phase 1: Wave tremor ── */
        const p = elapsed / PHASE1_DUR; // 0→1
        const waveSpeed = 0.004 + p * 0.008;
        const intensity = 0.3 + Math.pow(p, 1.8) * 3.5;

        for (let i = 0; i < N; i++) {
          const nd = dists[i] * invMaxDist; // 0=center, 1=edge
          const wave = Math.sin(dists[i] * 0.015 - elapsed * waveSpeed);
          const jitter = wave * intensity * (0.4 + nd * 0.6);
          const jx = jitter * (Math.random() > 0.5 ? 1 : -1);
          const jy = jitter * (Math.random() > 0.5 ? 1 : -1);
          els[i].style.transform = `translate3d(${jx.toFixed(2)}px, ${jy.toFixed(2)}px, 0)`;

          /* Reveal from center outward */
          const reveal = Math.max(0, Math.min(1, (p * 1.4 - nd * 0.8)));
          const opc = reveal * (0.08 + p * 0.25);
          els[i].style.opacity = String(opc);
        }
      } else if (elapsed < PHASE1_DUR + PHASE2_DUR) {
        /* ── Phase 2: Pressure build ── */
        const local = (elapsed - PHASE1_DUR) / PHASE2_DUR; // 0→1
        const intensity = 4 + Math.pow(local, 2.5) * 18;
        const pulse = 1 + 0.3 * Math.sin(local * Math.PI * 16);
        const breathe = 1 + 0.08 * Math.sin(local * Math.PI * 6);
        const finalIntensity = intensity * pulse;

        for (let i = 0; i < N; i++) {
          const nd = dists[i] * invMaxDist;
          /* Wave pattern still present but overtaken by chaos */
          const wave = Math.sin(dists[i] * 0.02 - elapsed * 0.012);
          const chaos = (Math.random() - 0.5) * finalIntensity;
          const jx = (wave * 2 + chaos) * breathe;
          const jy = ((Math.random() - 0.5) * finalIntensity + wave * 1.5) * breathe;

          /* Slight convergence toward center as pressure builds */
          const converge = Math.pow(local, 3) * 0.06;
          const towardCX = (cX - (blocks[i].x + half)) * converge;
          const towardCY = (cY - (blocks[i].y + half)) * converge;

          els[i].style.transform = `translate3d(${(jx + towardCX).toFixed(1)}px, ${(jy + towardCY).toFixed(1)}px, 0)`;

          /* Brightness ramps; near-center blocks brighten first */
          let opc = 0.3 + Math.pow(local, 1.5) * 0.7 * (1 - nd * 0.3);
          /* Random flash bursts — increase in frequency */
          if (Math.random() < Math.pow(local, 2) * 0.12) opc = 1;
          els[i].style.opacity = String(Math.min(1, opc));
        }

        /* Subtle screen-shake on container */
        const shake = Math.pow(local, 3) * 3;
        container.style.transform = `translate(${(Math.random() - 0.5) * shake}px, ${(Math.random() - 0.5) * shake}px)`;

      } else if (elapsed < TOTAL_BUILD) {
        /* ── Phase 3: THE INHALE — sharp contraction toward center ── */
        const local = (elapsed - PHASE1_DUR - PHASE2_DUR) / INHALE_DUR; // 0→1
        const contractStrength = Math.pow(local, 0.6); // fast start, decelerates
        const dimming = 1 - local * 0.4; // screen dims slightly

        for (let i = 0; i < N; i++) {
          const nd = dists[i] * invMaxDist;
          /* Contract toward center */
          const towardCX = (cX - (blocks[i].x + half)) * contractStrength * 0.35;
          const towardCY = (cY - (blocks[i].y + half)) * contractStrength * 0.35;
          /* Tiny residual vibration */
          const residual = (1 - local) * 2;
          const jx = (Math.random() - 0.5) * residual;
          const jy = (Math.random() - 0.5) * residual;

          els[i].style.transform = `translate3d(${(towardCX + jx).toFixed(1)}px, ${(towardCY + jy).toFixed(1)}px, 0)`;

          /* Blocks dim except center which stays bright */
          const opc = (1 - nd * 0.5) * dimming + nd * 0.1;
          els[i].style.opacity = String(Math.max(0.05, opc));
          /* Shrink slightly during inhale */
          const sc = 1 - contractStrength * 0.15 * nd;
          els[i].style.transform += ` scale(${sc.toFixed(3)})`;
        }

        /* Screen shake subsides */
        const shake = (1 - local) * 2;
        container.style.transform = `translate(${(Math.random() - 0.5) * shake}px, ${(Math.random() - 0.5) * shake}px)`;
      }

      if (elapsed < TOTAL_BUILD) {
        shakeRAF = requestAnimationFrame(buildLoop);
      } else {
        /* ── PHASE 4: MOTH TO FLAME — particles converge to center ── */
        container.style.transform = "";
        setPhase("converge");

        /* Show loader */
        if (loaderRef.current) {
          loaderRef.current.style.display = "";
          loaderRef.current.textContent = "0%";
        }

        /* Subtle flash at convergence start */
        flash.style.opacity = "0.25";
        flash.style.transition = "opacity 500ms ease-out";
        requestAnimationFrame(() => { flash.style.opacity = "0"; });

        /* Pre-compute per-particle convergence data */
        interface ConvergeParam {
          delay: number;
          duration: number;
          startX: number;
          startY: number;
          ctrlX: number;
          ctrlY: number;
        }
        const convergeParams: ConvergeParam[] = [];

        for (let i = 0; i < N; i++) {
          const nd = dists[i] * invMaxDist;
          const b = blocks[i];
          /* Visual position after inhale contraction */
          const sx = b.x * 0.65 + (cX - half) * 0.35;
          const sy = b.y * 0.65 + (cY - half) * 0.35;

          /* Edge particles start first (moths from afar) */
          const delay = (1 - nd) * 1000;
          const duration = 800 + nd * 1800;

          /* Bezier control point — perpendicular offset for curved path */
          const dx = cX - sx;
          const dy = cY - sy;
          const d = Math.sqrt(dx * dx + dy * dy) || 1;
          const perpX = -dy / d;
          const perpY = dx / d;
          const curveAmt = (Math.random() - 0.5) * d * 0.5;
          const mx = (sx + cX) / 2 + perpX * curveAmt;
          const my = (sy + cY) / 2 + perpY * curveAmt;

          convergeParams.push({ delay, duration, startX: sx, startY: sy, ctrlX: mx, ctrlY: my });
        }

        let convStart = 0;
        let arrivedCount = 0;

        const convergeLoop = (now: number) => {
          if (!convStart) convStart = now;
          const elapsed2 = now - convStart;
          arrivedCount = 0;

          for (let i = 0; i < N; i++) {
            const cp = convergeParams[i];
            const local2 = elapsed2 - cp.delay;

            if (local2 < 0) {
              /* Hasn't started — residual tremor */
              const jx = (Math.random() - 0.5) * 1.2;
              const jy = (Math.random() - 0.5) * 1.2;
              els[i].style.transform = `translate3d(${jx}px, ${jy}px, 0)`;
              els[i].style.opacity = String(0.4 + Math.random() * 0.2);
              continue;
            }

            const t2 = Math.min(1, local2 / cp.duration);
            /* easeInCubic — accelerates toward center (gravity pull) */
            const e2 = t2 * t2 * t2;

            /* Quadratic bezier path */
            const u2 = 1 - e2;
            const wx = u2 * u2 * cp.startX + 2 * u2 * e2 * cp.ctrlX + e2 * e2 * cX;
            const wy = u2 * u2 * cp.startY + 2 * u2 * e2 * cp.ctrlY + e2 * e2 * cY;

            const translateX = wx - blocks[i].x;
            const translateY = wy - blocks[i].y;

            /* Scale: slight growth → shrink to near-zero */
            const scale2 = t2 < 0.3
              ? 1 + t2 * 0.6
              : Math.max(0.05, 1.18 - (t2 - 0.3) * 1.6);

            /* Opacity: bright during flight, fades near end */
            const opc2 = t2 < 0.85 ? 0.9 : 0.9 * (1 - (t2 - 0.85) / 0.15);

            els[i].style.transform = `translate3d(${translateX.toFixed(1)}px, ${translateY.toFixed(1)}px, 0) scale(${scale2.toFixed(3)})`;
            els[i].style.opacity = t2 >= 1 ? "0" : String(opc2.toFixed(3));

            if (t2 >= 1) arrivedCount++;
          }

          /* Update loading counter */
          const pct = Math.min(100, Math.round((arrivedCount / N) * 100));
          if (loaderRef.current) {
            loaderRef.current.textContent = `${pct}%`;
          }

          if (arrivedCount >= N) {
            /* All particles arrived — soft fade-out for seamless handoff */
            if (loaderRef.current) {
              loaderRef.current.style.transition = "opacity 200ms ease-out";
              loaderRef.current.style.opacity = "0";
            }

            /* Brief subtle pulse at center then fade the entire entry screen */
            flash.style.opacity = "0.15";
            flash.style.transition = "opacity 400ms ease-out";
            requestAnimationFrame(() => { flash.style.opacity = "0"; });

            /* Fade out the entry section container */
            const entrySection = container.closest(".entry") as HTMLElement;
            if (entrySection) {
              entrySection.style.transition = "opacity 350ms ease-out";
              entrySection.style.opacity = "0";
            }

            setTimeout(() => {
              flash.remove();
              onEnter();
            }, 380);
            return;
          }

          shakeRAF = requestAnimationFrame(convergeLoop);
        };

        shakeRAF = requestAnimationFrame(convergeLoop);
      }
    };

    shakeRAF = requestAnimationFrame(buildLoop);

    /* Store a pause-able handle */
    vibrateTimerRef.current = {
      pause: () => {
        cancelAnimationFrame(shakeRAF);
        flash.remove();
        container.style.transform = "";
      },
    };
  }, [onEnter]);

  /* ─── Click handler ─── */
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      initAudio();
      const current = phaseRef.current;
      if (current !== "explore" && current !== "found1") return;

      const { step, offsetX, offsetY } = layoutRef.current;
      const clickGX = Math.floor((e.clientX - offsetX) / step);
      const clickGY = Math.floor((e.clientY - offsetY) / step);

      /* ±1 block tolerance around click */
      let hitK1 = false;
      let hitK2 = false;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const key = `${clickGX + dx},${clickGY + dy}`;
          if (k1Ref.current.has(key) && !k1Found.current) hitK1 = true;
          if (k2Ref.current.has(key) && !k2Found.current) hitK2 = true;
        }
      }

      const revealK = (isK1: boolean) => {
        const kSet = isK1 ? k1Ref.current : k2Ref.current;
        const kEls: HTMLDivElement[] = [];
        blockElsRef.current.forEach((el, i) => {
          const b = blocksRef.current[i];
          if (kSet.has(`${b.gx},${b.gy}`)) {
            kEls.push(el);
            el.style.opacity = "1";
          }
        });

        /* Pop-out with elastic easing */
        animate(kEls, {
          scale: [1, 1.35, 1.08],
          z: [0, 18, 6],
          duration: 700,
          ease: "outElastic(1, .5)",
        });
      };

      if (hitK1) {
        k1Found.current = true;
        revealK(true);
        const n = k2Found.current ? 2 : 1;
        setFoundCount(n);
        if (n === 1) {
          setPhase("found1");
          setShowHint(false);
        }
        if (n === 2) {
          setPhase("vibrate");
          startVibrateBurst();
        }
      } else if (hitK2) {
        k2Found.current = true;
        revealK(false);
        const n = k1Found.current ? 2 : 1;
        setFoundCount(n);
        if (n === 1) {
          setPhase("found1");
          setShowHint(false);
        }
        if (n === 2) {
          setPhase("vibrate");
          startVibrateBurst();
        }
      }
    },
    [setPhase, startVibrateBurst],
  );

  return (
    <section
      className={`entry${phase === "vibrate" ? " phase-vibrate" : ""}${phase === "converge" ? " phase-converge" : ""}`}
      onClick={handleClick}
    >
      {/* Block grid */}
      <div ref={gridRef} className="entry__grid" />

      {/* Loading counter (convergence phase) */}
      <div ref={loaderRef} className="entry__loader" style={{ display: 'none' }}>0%</div>

      {/* Cursor ambient glow overlay */}
      <div ref={glowRef} className="entry__cursor-glow" />

      {/* UI overlay */}
      <div className="entry__overlay">
        {showHint && phase === "explore" && (
          <div className="entry__hint">
            <span className="entry__hint-icon">&#x2316;</span>
            <span className="entry__hint-text">
              find the hidden K&apos;s
            </span>
          </div>
        )}

        {(phase === "explore" || phase === "found1") && (
          <div className="entry__found">
            <span
              className={`entry__found-dot ${foundCount >= 1 ? "lit" : ""}`}
            />
            <span
              className={`entry__found-dot ${foundCount >= 2 ? "lit" : ""}`}
            />
          </div>
        )}

        <div className="entry__coord">47.3769&deg; N, 8.5417&deg; E</div>
        <div className="entry__version">v0.0.1</div>
      </div>

      {/* LED strip accents */}
      <div className="entry__led entry__led--top" />
      <div className="entry__led entry__led--bottom" />
      <div className="entry__led entry__led--left" />
      <div className="entry__led entry__led--right" />

      {/* Glyph corner marks */}
      <div className="entry__glyph-corner entry__glyph-corner--tl" />
      <div className="entry__glyph-corner entry__glyph-corner--tr" />
      <div className="entry__glyph-corner entry__glyph-corner--bl" />
      <div className="entry__glyph-corner entry__glyph-corner--br" />
    </section>
  );
}
