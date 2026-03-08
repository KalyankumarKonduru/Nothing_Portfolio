"use client";

import { useRef, useEffect } from "react";
import anime from "animejs";
import "./particle-canvas.css";
import { stampLines, stampTextScaledCenters, textPixelWidthScaled } from "./pixel-font";
import { playClockTick, initAudio } from "./clock-tick";

/* ═══════════════════════════════════════
   Section data — full resume content.
   Hero uses scaled stamping (big letters).
   Other sections use normal 4px grid text.
   ═══════════════════════════════════════ */
interface DisplaySection {
  label: string;
  lines: string[];
  lineStep: number;
}

const SECTIONS: DisplaySection[] = [
  {
    label: "00 // hero",
    lineStep: 0, /* unused — hero uses stampLinesScaled */
    lines: ["KALYAN", "KUMAR"],
  },
];

const TOTAL = SECTIONS.length;

/* ═══════════════════════════════════════
   Easing
   ═══════════════════════════════════════ */
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/* ═══════════════════════════════════════
   Particle type
   ═══════════════════════════════════════ */
interface SectionTarget {
  x: number;
  y: number;
  isText: boolean;
}

interface Particle {
  x: number;
  y: number;
  opacity: number;
  targets: SectionTarget[];
}

/* ═══════════════════════════════════════
   Component
   ═══════════════════════════════════════ */
export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const heroOverlayRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const heroDotsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = window.innerWidth;
    const H = window.innerHeight;

    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    ctx.scale(dpr, dpr);

    const cX = W / 2;
    const cY = H / 2;

    /* ── Grid sizing ── */
    const blockSize = W < 600 ? 3 : W < 1024 ? 3 : 4;
    const gap = 1;
    const step = blockSize + gap;
    const cols = Math.floor(W / step);
    const rows = Math.floor(H / step);
    const oX = (W - cols * step + gap) / 2;
    const oY = (H - rows * step + gap) / 2;
    const N = cols * rows;
    const halfBlock = blockSize / 2;

    /* ── Hero scale — big letters that fill the viewport ── */
    const heroScale = W < 600 ? 3 : W < 1024 ? 4 : 6;
    const heroGridHalf = Math.floor(heroScale / 2);

    /* ── Pre-render circle sprite (small — for normal sections) ── */
    const spriteSize = blockSize + 2;
    const dotSprite = document.createElement("canvas");
    dotSprite.width = spriteSize * dpr;
    dotSprite.height = spriteSize * dpr;
    const dctx = dotSprite.getContext("2d")!;
    dctx.scale(dpr, dpr);
    dctx.fillStyle = "#ffffff";
    dctx.beginPath();
    dctx.arc(spriteSize / 2, spriteSize / 2, halfBlock, 0, Math.PI * 2);
    dctx.fill();

    /* ── Pre-render LARGE circle sprite (matches entry screen solid dots) ── */
    const entryBlockSize = W < 600 ? 14 : W < 1024 ? 18 : 22;
    const heroDotDiam = entryBlockSize;
    const heroSpriteSize = heroDotDiam + 2;
    const heroDotSprite = document.createElement("canvas");
    heroDotSprite.width = heroSpriteSize * dpr;
    heroDotSprite.height = heroSpriteSize * dpr;
    const hdctx = heroDotSprite.getContext("2d")!;
    hdctx.scale(dpr, dpr);
    hdctx.fillStyle = "#ffffff";
    hdctx.beginPath();
    hdctx.arc(heroSpriteSize / 2, heroSpriteSize / 2, heroDotDiam / 2, 0, Math.PI * 2);
    hdctx.fill();

    /* Enable scrolling */
    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden";
    document.body.style.height = `${200}vh`;

    /* ── Stamp pixel-art text for each section ── */
    /* Hero: "KALYAN" above center, "KUMAR" below center,
       with a gap in the middle for the bio overlay. */
    const charH = 7 * heroScale; /* height of one line in grid cells */
    /* Snap the gap to heroScale so KUMAR dots land on the same grid as KALYAN */
    const bioGapRows = Math.round(Math.round(rows * 0.28) / heroScale) * heroScale;
    const totalTextH = charH * 2 + bioGapRows;
    const startYTop = Math.max(0, Math.round(((rows - totalTextH) / 2) / heroScale) * heroScale);
    const startYBot = startYTop + charH + bioGapRows;

    const kalyanW = textPixelWidthScaled("KALYAN", heroScale);
    const kumarW = textPixelWidthScaled("KUMAR", heroScale);
    const kalyanX = Math.max(0, Math.round(((cols - kalyanW) / 2) / heroScale) * heroScale);
    const kumarX = Math.max(0, Math.round(((cols - kumarW) / 2) / heroScale) * heroScale);

    const heroStampSet = new Set<string>();
    stampTextScaledCenters("KALYAN", kalyanX, startYTop, heroScale)
      .forEach((k) => heroStampSet.add(k));
    stampTextScaledCenters("KUMAR", kumarX, startYBot, heroScale)
      .forEach((k) => heroStampSet.add(k));

    /* ── Create DOM elements for hero text dots (for anime.js 3D pop) ── */
    const heroDotsContainer = heroDotsContainerRef.current;
    const heroDotEls: HTMLDivElement[] = [];
    const heroDotIndices: number[] = [];       /* grid index → particle index */
    const heroDotRevealed: boolean[] = [];     /* track first-reveal per dot */
    if (heroDotsContainer) {
      heroDotsContainer.innerHTML = "";
      heroDotsContainer.style.perspective = "800px";
      heroDotsContainer.style.transformStyle = "preserve-3d";
      heroStampSet.forEach((key) => {
        const [gxS, gyS] = key.split(",");
        const gx = Number(gxS);
        const gy = Number(gyS);
        const idx = gy * cols + gx;
        const px = oX + gx * step + halfBlock;
        const py = oY + gy * step + halfBlock;
        const el = document.createElement("div");
        el.style.cssText = `
          position:absolute;
          left:${px - entryBlockSize / 2}px;
          top:${py - entryBlockSize / 2}px;
          width:${entryBlockSize}px;
          height:${entryBlockSize}px;
          border-radius:50%;
          background:#fff;
          opacity:0;
          will-change:transform,opacity;
          transform-style:preserve-3d;
          pointer-events:none;
        `;
        heroDotsContainer.appendChild(el);
        heroDotEls.push(el);
        heroDotIndices.push(idx);
        heroDotRevealed.push(false);
      });
    }

    const sectionStamps: Set<string>[] = SECTIONS.map((sec, idx) => {
      if (idx === 0) return heroStampSet;
      return stampLines(sec.lines, cols, rows, sec.lineStep);
    });

    /* Build a fast lookup: which particle indices are hero center dots */
    const isHeroCenterDot = new Uint8Array(N);
    /* Which particles sit on the hero grid (matching entry screen density). */
    const isHeroGridDot = new Uint8Array(N);

    /* ── Build targets for each section ── */
    const allTargets: SectionTarget[][] = sectionStamps.map((stamp, secIdx) => {
      const targets: SectionTarget[] = [];
      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < cols; gx++) {
          const idx = gy * cols + gx;
          const isText = stamp.has(`${gx},${gy}`);
          if (secIdx === 0 && isText) {
            isHeroCenterDot[idx] = 1;
          }
          /* Mark cells on the hero grid (same grid as text dots). */
          if (secIdx === 0 && !isText
              && (gx % heroScale === heroGridHalf)
              && (gy % heroScale === heroGridHalf)) {
            isHeroGridDot[idx] = 1;
          }
          targets.push({
            x: oX + gx * step + halfBlock,
            y: oY + gy * step + halfBlock,
            isText,
          });
        }
      }
      return targets;
    });

    /* ── Create particles at their hero target positions ── */
    const particles: Particle[] = [];
    for (let i = 0; i < N; i++) {
      const heroTarget = allTargets[0][i];
      particles.push({
        x: heroTarget.x,
        y: heroTarget.y,
        opacity: 0,
        targets: allTargets.map((st) => st[i]),
      });
    }

    /* ── Animation state ── */
    let lastScrollY = 0;
    let scrollVelocity = 0;
    let time = 0;
    let currentLabel = SECTIONS[0].label;

    /* ── Flashlight glow state — cursor-proximity reveal ── */
    const glows = new Float32Array(N); /* 0 = invisible, 1 = fully lit */
    const FLASH_RADIUS = 180;
    const FLASH_R2 = FLASH_RADIUS * FLASH_RADIUS;
    const FLASH_INV_R = 1 / FLASH_RADIUS;

    /* (anime.js handles the elastic pop on DOM dots) */

    /* ── Mouse tracking for cursor-vicinity clock tick ── */
    const soundMouse = { x: -9999, y: -9999 };
    let lastSndX = -9999;
    let lastSndY = -9999;
    let lastSndTime = 0;
    const SND_DIST_SQ = 18 * 18;
    const heroStamp = sectionStamps[0];

    const onMouseForSound = (e: MouseEvent) => {
      soundMouse.x = e.clientX;
      soundMouse.y = e.clientY;
    };
    const onTouchForSound = (e: TouchEvent) => {
      const tc = e.touches[0];
      if (tc) {
        soundMouse.x = tc.clientX;
        soundMouse.y = tc.clientY;
      }
    };
    const initClickForSound = () => {
      initAudio();
      window.removeEventListener("click", initClickForSound);
      window.removeEventListener("touchstart", initClickForSound);
    };
    window.addEventListener("mousemove", onMouseForSound);
    window.addEventListener("touchmove", onTouchForSound, { passive: true });
    window.addEventListener("click", initClickForSound);
    window.addEventListener("touchstart", initClickForSound);

    const dotEls =
      indicatorRef.current?.querySelectorAll<HTMLDivElement>(".pc-dot");

    /* ── RAF loop ── */
    const halfSprite = spriteSize / 2;

    const tick = (now: number) => {
      time = now * 0.001;

      const scrollY = window.scrollY;
      scrollVelocity =
        scrollVelocity * 0.85 + Math.abs(scrollY - lastScrollY) * 0.15;
      lastScrollY = scrollY;

      const progress = scrollY / H;
      const sectionA = Math.min(Math.floor(progress), TOTAL - 1);
      const sectionB = Math.min(sectionA + 1, TOTAL - 1);
      const t =
        sectionA === sectionB ? 0 : Math.min(1, progress - sectionA);
      const eased = easeInOutCubic(t);
      const activeSec = t > 0.5 ? sectionB : sectionA;

      const chaos =
        Math.sin(t * Math.PI) * Math.min(scrollVelocity * 0.4, 25);

      /* ── Is hero settled? (for static dots) ── */
      const isHeroSettled = activeSec === 0 && t < 0.01;
      const isOnHero = activeSec === 0;

      /* ── Flashlight: cursor-proximity glow for hero section ── */
      if (isOnHero) {
        const mx = soundMouse.x;
        const my = soundMouse.y;

        /* Grid cell at cursor */
        const gxC = Math.floor((mx - oX) / step);
        const gyC = Math.floor((my - oY) / step);
        const cellRad = Math.ceil(FLASH_RADIUS / step) + 1;
        const gxMin = Math.max(0, gxC - cellRad);
        const gxMax = Math.min(cols - 1, gxC + cellRad);
        const gyMin = Math.max(0, gyC - cellRad);
        const gyMax = Math.min(rows - 1, gyC + cellRad);

        /* All dots invisible by default — only visible near cursor.
           Fast decay (0.6) matches entry screen behavior. */
        for (let i = 0; i < N; i++) {
          if (glows[i] > 0.005) {
            glows[i] *= 0.6;
          } else {
            glows[i] = 0;
          }
        }

        /* Light up cells near cursor */
        for (let gy = gyMin; gy <= gyMax; gy++) {
          for (let gx = gxMin; gx <= gxMax; gx++) {
            const idx = gy * cols + gx;
            const px = oX + gx * step + halfBlock;
            const py = oY + gy * step + halfBlock;
            const dx = px - mx;
            const dy = py - my;
            const d2 = dx * dx + dy * dy;
            if (d2 <= FLASH_R2) {
              const dist = Math.sqrt(d2);
              const falloff = 1 - dist * FLASH_INV_R;
              let target = falloff * falloff; /* quadratic falloff */
              /* Text dots get brighter near cursor (like entry screen K proximity) */
              if (isHeroCenterDot[idx] && dist < 140) {
                target = Math.min(1, target * 1.4);
              }
              if (target > glows[idx]) {
                glows[idx] = glows[idx] + (target - glows[idx]) * 0.55;
              }
            }
          }
        }
      } else if (!isOnHero) {
        /* Reset when leaving hero */
        for (let i = 0; i < N; i++) { glows[i] = 0; }
      }

      /* ── Update hero overlay, bottom bar & nav visibility ── */
      const heroOpacity = activeSec === 0 ? Math.max(0, 1 - t * 3) : 0;
      if (heroOverlayRef.current) {
        heroOverlayRef.current.style.opacity = String(heroOpacity);
      }
      if (bottomBarRef.current) {
        bottomBarRef.current.style.opacity = String(heroOpacity);
      }
      if (navRef.current) {
        navRef.current.style.opacity = "1";
      }
      if (indicatorRef.current) {
        indicatorRef.current.style.opacity = "1";
      }

      /* Update section label + dots */
      const newLabel = SECTIONS[activeSec].label;
      if (newLabel !== currentLabel) {
        currentLabel = newLabel;
        if (indicatorRef.current) {
          const labelEl =
            indicatorRef.current.querySelector<HTMLDivElement>(".pc-label");
          if (labelEl) labelEl.textContent = currentLabel;
        }
        dotEls?.forEach((dot, idx) => {
          dot.classList.toggle("active", idx === activeSec);
        });
      }

      /* ── Clock tick sound when cursor is near hero text particles ── */
      if (activeSec === 0) {
        const smx = soundMouse.x;
        const smy = soundMouse.y;
        const sNow = performance.now();
        if (sNow - lastSndTime > 80) {
          const sdx = smx - lastSndX;
          const sdy = smy - lastSndY;
          if (sdx * sdx + sdy * sdy > SND_DIST_SQ) {
            const sgx = Math.floor((smx - oX) / step);
            const sgy = Math.floor((smy - oY) / step);
            let nearText = false;
            for (let sdy2 = -3; sdy2 <= 3 && !nearText; sdy2++) {
              for (let sdx2 = -3; sdx2 <= 3; sdx2++) {
                if (heroStamp.has(`${sgx + sdx2},${sgy + sdy2}`)) {
                  nearText = true;
                  break;
                }
              }
            }
            if (nearText) {
              playClockTick();
              lastSndX = smx;
              lastSndY = smy;
              lastSndTime = sNow;
            }
          }
        }
      }

      /* ── Clear ── */
      ctx.clearRect(0, 0, W, H);

      /* ── Update & draw ── */
      for (let i = 0; i < N; i++) {
        const p = particles[i];
        const fromT = p.targets[sectionA];
        const toT = p.targets[sectionB];

        let tgtX = fromT.x * (1 - eased) + toT.x * eased;
        let tgtY = fromT.y * (1 - eased) + toT.y * eased;

        /* Text blocks: bright. Ambient: very dim. */
        let opaA = fromT.isText ? 0.88 : 0.025;
        let opaB = toT.isText ? 0.88 : 0.025;

        let tgtOpacity: number;

        /* On hero: opacity = glow directly (matches entry screen behavior).
           All dots can reach 1.0. Glow IS the opacity. */
        if (isOnHero) {
          tgtOpacity = glows[i];
        } else {
          tgtOpacity = opaA * (1 - eased) + opaB * eased;
        }

        /* Organic noise during transition */
        if (chaos > 0.5) {
          tgtX += Math.sin(i * 0.37 + time * 3) * chaos;
          tgtY += Math.cos(i * 0.53 + time * 3) * chaos;
        }

        /* Center pull during mid-transition */
        const centerPull = Math.sin(t * Math.PI) * 0.15;
        tgtX = tgtX * (1 - centerPull) + cX * centerPull;
        tgtY = tgtY * (1 - centerPull) + cY * centerPull;

        /* Converge toward cursor when scrolling from hero toward experience */
        if (progress > 0.5 && progress < 1.5) {
          const convMx = soundMouse.x;
          const convMy = soundMouse.y;
          if (convMx > 0 && convMy > 0) {
            /* Ramp 0→1 from progress 0.5 to ~1.0, quadratic for dramatic pull */
            const convergeFactor = Math.min(1, (progress - 0.5) / 0.5);
            const pullStr = convergeFactor * convergeFactor * 0.85;
            tgtX = tgtX + (convMx - tgtX) * pullStr;
            tgtY = tgtY + (convMy - tgtY) * pullStr;
          }
        }

        /* ── Movement: static on hero, organic drift elsewhere ── */
        if (isHeroSettled) {
          /* Fast snap to target, zero drift */
          const dx = tgtX - p.x;
          const dy = tgtY - p.y;
          if (Math.abs(dx) < 0.15 && Math.abs(dy) < 0.15) {
            p.x = tgtX;
            p.y = tgtY;
          } else {
            p.x += dx * 0.3;
            p.y += dy * 0.3;
          }
        } else {
          /* Smooth lerp + gentle organic drift */
          p.x += (tgtX - p.x) * 0.065;
          p.y += (tgtY - p.y) * 0.065;
          p.x += Math.sin(time * 0.8 + i * 0.1) * 0.08;
          p.y += Math.cos(time * 0.6 + i * 0.15) * 0.08;
        }

        /* Opacity lerp — match entry screen's 0.55 snap on hero */
        const opaLerp = isOnHero ? 0.55 : 0.08;
        p.opacity += (tgtOpacity - p.opacity) * opaLerp;

        /* Draw via pre-rendered sprite.
           On hero: only draw hero-grid dots (text + pond), use large sprite.
           On other sections: draw all dots with small sprite.
           Size lerps smoothly during transitions. */
        if (p.opacity > 0.005) {
          ctx.globalAlpha = p.opacity;

          /* Compute how much "hero" is active: 1 = fully on hero, 0 = other section */
          let heroBlend = 0;
          if (sectionA === 0 && sectionB === 0) heroBlend = 1;
          else if (sectionA === 0) heroBlend = 1 - eased;
          else if (sectionB === 0) heroBlend = eased;

          if (heroBlend > 0.01) {
            /* On hero: text dots are DOM (for anime.js 3D pop); pond dots stay on canvas */
            if (isHeroGridDot[i]) {
              const drawSize = spriteSize + (heroSpriteSize - spriteSize) * heroBlend;
              const halfDraw = drawSize / 2;
              ctx.drawImage(heroDotSprite, p.x - halfDraw, p.y - halfDraw, drawSize, drawSize);
            }
            /* isHeroCenterDot — handled by DOM overlay below */
            /* Skip intermediate dots — they're not part of the hero grid */
          } else {
            ctx.drawImage(dotSprite, p.x - halfSprite, p.y - halfSprite, spriteSize, spriteSize);
          }
        }
      }

      /* ── Update DOM hero text dots (opacity + trigger pop) ── */
      if (heroDotsContainer) {
        const showDomDots = isOnHero;
        heroDotsContainer.style.display = showDomDots ? "" : "none";
        if (showDomDots) {
          for (let d = 0; d < heroDotEls.length; d++) {
            const idx = heroDotIndices[d];
            const g = glows[idx];
            heroDotEls[d].style.opacity = String(g);

            /* Trigger anime.js pop-forward on first reveal */
            if (!heroDotRevealed[d] && g > 0.25) {
              heroDotRevealed[d] = true;
              anime({
                targets: heroDotEls[d],
                scale: [1, 1.35, 1.08],
                z: [0, 18, 6],
                duration: 700,
                ease: "outElastic(1, .5)",
              });
            }
          }
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseForSound);
      window.removeEventListener("touchmove", onTouchForSound);
      window.removeEventListener("click", initClickForSound);
      window.removeEventListener("touchstart", initClickForSound);
      document.body.style.overflow = "";
      document.body.style.overflowX = "";
      document.body.style.height = "";
      if (heroDotsContainer) heroDotsContainer.innerHTML = "";
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="pc-canvas" />

      {/* ── Hero text dots (DOM for anime.js 3D pop-forward) ── */}
      <div
        ref={heroDotsContainerRef}
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 2,
          perspective: 800,
          transformStyle: "preserve-3d" as React.CSSProperties["transformStyle"],
        }}
      />

      {/* ── Navigation bar ── */}
      <nav ref={navRef} className="pc-nav" style={{ opacity: 0 }}>
        <div className="pc-nav-logo">
          KK<span className="pc-diamond">◆</span>DEV
        </div>
        <div className="pc-nav-right">
          <div className="pc-nav-links">
            <a
              href="https://github.com/kalyankumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
            <a
              href="https://linkedin.com/in/kalyankumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              RESUME
            </a>
          </div>
          <a
            href="mailto:kkalyankumar.dev@gmail.com"
            className="pc-nav-email"
          >
            <span className="pc-email-dot">●</span> KKALYANKUMAR.DEV
          </a>
        </div>
      </nav>

      {/* ── Hero text overlay ── */}
      <div ref={heroOverlayRef} className="pc-hero-overlay" style={{ opacity: 0 }}>
        <p className="pc-hero-bio">
          I&apos;M KALYAN, A FULL-STACK SOFTWARE
          ENGINEER BASED IN NEW JERSEY,
          DEDICATED TO BUILDING SCALABLE
          WEB APPLICATIONS &amp; AI-POWERED
          TOOLS FOR PRODUCTION ENVIRONMENTS.
          LET&apos;S CONNECT!
        </p>
      </div>

      {/* ── Bottom bar (hero section only) ── */}
      <div ref={bottomBarRef} className="pc-bottom-bar" style={{ opacity: 0 }}>
        <span className="pc-scroll-hint">SCROLL TO SEE MORE</span>
        <span className="pc-available">AVAILABLE FOR OPPORTUNITIES</span>
      </div>

      {/* Scroll spacers */}
      <div className="pc-sections">
        {SECTIONS.map((_, i) => (
          <section key={i} className="pc-section" data-section={i} />
        ))}
      </div>

      {/* Section indicator */}
      <div ref={indicatorRef} className="pc-indicator" style={{ opacity: 0 }}>
        <div className="pc-label">{SECTIONS[0].label}</div>
        <div className="pc-dots">
          {SECTIONS.map((_, i) => (
            <div key={i} className={`pc-dot${i === 0 ? " active" : ""}`} />
          ))}
        </div>
      </div>
    </>
  );
}
