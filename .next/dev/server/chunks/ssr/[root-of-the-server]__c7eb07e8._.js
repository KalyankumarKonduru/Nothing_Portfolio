module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/components/clock-tick.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initAudio",
    ()=>initAudio,
    "playClockTick",
    ()=>playClockTick
]);
/* ─── Clock tick sound — Web Audio API synthesis ───
   Mimics the mechanical "tick" of a clock's second-hand escapement.
   Shared AudioContext across components for efficiency. */ let audioCtx = null;
function ensureCtx() {
    if (!audioCtx) {
        audioCtx = new AudioContext();
    }
    if (audioCtx.state === "suspended") {
        audioCtx.resume();
    }
    return audioCtx;
}
function initAudio() {
    ensureCtx();
}
function playClockTick(volume = 0.12) {
    const ctx = ensureCtx();
    const t = ctx.currentTime;
    /* Resonant body — the "tick" of the escapement mechanism */ const osc = ctx.createOscillator();
    const bodyGain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(1800 + Math.random() * 100, t);
    osc.frequency.exponentialRampToValueAtTime(600, t + 0.015);
    bodyGain.gain.setValueAtTime(volume, t);
    bodyGain.gain.exponentialRampToValueAtTime(0.001, t + 0.02);
    osc.connect(bodyGain);
    bodyGain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.025);
    /* Sharp click — the mechanical impact */ const click = ctx.createOscillator();
    const clickGain = ctx.createGain();
    click.type = "square";
    click.frequency.setValueAtTime(4000 + Math.random() * 500, t);
    clickGain.gain.setValueAtTime(volume * 0.3, t);
    clickGain.gain.exponentialRampToValueAtTime(0.001, t + 0.004);
    click.connect(clickGain);
    clickGain.connect(ctx.destination);
    click.start(t);
    click.stop(t + 0.006);
}
}),
"[project]/app/components/EntryScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EntryScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$animejs$2f$lib$2f$anime$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/animejs/lib/anime.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$clock$2d$tick$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/clock-tick.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
/* ─── Pixel-art font: each char is 5 cols × 7 rows ─── */ const FONT = {
    K: [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            1,
            0,
            1,
            0,
            0
        ],
        [
            1,
            1,
            0,
            0,
            0
        ],
        [
            1,
            0,
            1,
            0,
            0
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    A: [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    L: [
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ]
    ],
    Y: [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ]
    ],
    N: [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            0,
            0,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            0,
            0,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    U: [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    M: [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            0,
            1,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    R: [
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            1,
            0,
            0
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    " ": [
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ]
    ]
};
/* ─── Stamp text into a Set of "gx,gy" keys ─── */ function stampText(text, startGX, startGY) {
    const set = new Set();
    let cx = startGX;
    for (const ch of text){
        const glyph = FONT[ch];
        if (!glyph) {
            cx += 4;
            continue;
        }
        for(let row = 0; row < glyph.length; row++){
            for(let col = 0; col < glyph[row].length; col++){
                if (glyph[row][col]) set.add(`${cx + col},${startGY + row}`);
            }
        }
        cx += glyph[0].length + 1;
    }
    return set;
}
function textPixelWidth(text) {
    let w = 0;
    for (const ch of text){
        const g = FONT[ch];
        w += g ? g[0].length + 1 : 4;
    }
    return w - 1;
}
function placeK(gx, gy) {
    return stampText("K", gx, gy);
}
function EntryScreen({ onEnter }) {
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const glowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const phaseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("explore");
    const [phase, _setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("explore");
    const [foundCount, setFoundCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showHint, setShowHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const setPhase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((p)=>{
        phaseRef.current = p;
        _setPhase(p);
    }, []);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: -9999,
        y: -9999
    });
    const blocksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const blockElsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const layoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        cols: 0,
        rows: 0,
        blockSize: 0,
        step: 0,
        offsetX: 0,
        offsetY: 0
    });
    const k1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const k2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const k1Found = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const k2Found = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const nameBlocksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const glowsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Float32Array(0));
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const vibrateTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const loaderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* ─── Build grid on mount ─── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        layoutRef.current = {
            cols,
            rows,
            blockSize,
            step,
            offsetX: oX,
            offsetY: oY
        };
        /* Place two hidden Ks in left/right zones */ const margin = Math.min(6, Math.max(2, Math.floor(cols * 0.08)));
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
        /* Pre-compute name blocks */ const line1 = "KALYAN";
        const line2 = "KUMAR";
        const w1 = textPixelWidth(line1);
        const w2 = textPixelWidth(line2);
        const nameStartY = Math.floor(rows / 2) - 8;
        const s1 = stampText(line1, Math.floor((cols - w1) / 2), nameStartY);
        const s2 = stampText(line2, Math.floor((cols - w2) / 2), nameStartY + 9);
        nameBlocksRef.current = new Set([
            ...s1,
            ...s2
        ]);
        /* Create DOM block elements */ const frag = document.createDocumentFragment();
        const blocks = [];
        const els = [];
        for(let gy = 0; gy < rows; gy++){
            for(let gx = 0; gx < cols; gx++){
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
                    baseShade: 0.03 + Math.random() * 0.04
                });
                els.push(el);
                frag.appendChild(el);
            }
        }
        container.appendChild(frag);
        blocksRef.current = blocks;
        blockElsRef.current = els;
        glowsRef.current = new Float32Array(blocks.length);
        /* ── Entrance: blocks start invisible, glow loop reveals them on cursor ── */ for (const el of els){
            el.style.opacity = "0";
        }
        /* ── Pre-compute block centers into typed arrays for cache perf ── */ const N = blocks.length;
        const centersX = new Float32Array(N);
        const centersY = new Float32Array(N);
        const half = blockSize / 2;
        for(let i = 0; i < N; i++){
            centersX[i] = blocks[i].x + half;
            centersY[i] = blocks[i].y + half;
        }
        /* ── Cursor-reactive glow loop (RAF) ── */ const RADIUS = 180;
        const R2 = RADIUS * RADIUS;
        const INV_R = 1 / RADIUS;
        let time = 0;
        let lastTickX = -9999;
        let lastTickY = -9999;
        let lastTickTime = 0;
        /* Track which blocks are currently "active" (opacity > 0) so we can
       turn them off when cursor moves away without scanning everything. */ const activeSet = new Set();
        const glowLoop = ()=>{
            if (phaseRef.current === "vibrate") {
                rafRef.current = 0;
                return;
            }
            time += 0.016;
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;
            const glows = glowsRef.current;
            /* ── Turn off blocks that left the radius last frame ── */ for (const idx of activeSet){
                const dx = centersX[idx] - mx;
                const dy = centersY[idx] - my;
                const d2 = dx * dx + dy * dy;
                const b = blocks[idx];
                const isFoundK = b.isK1 && k1Found.current || b.isK2 && k2Found.current;
                if (d2 > R2 && !isFoundK) {
                    /* Fade out quickly */ const cur = glows[idx];
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
            /* ── Fast grid-based spatial lookup: only visit blocks near cursor ── */ const gxCenter = Math.floor((mx - oX) / step);
            const gyCenter = Math.floor((my - oY) / step);
            /* ── Clock tick when cursor crosses grid cells ── */ const tickNow = performance.now();
            if (tickNow - lastTickTime > 80 && gxCenter >= 0 && gxCenter < cols && gyCenter >= 0 && gyCenter < rows) {
                const tdx = mx - lastTickX;
                const tdy = my - lastTickY;
                if (tdx * tdx + tdy * tdy > step * step) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$clock$2d$tick$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClockTick"])();
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
            for(let gy = gyMin; gy <= gyMax; gy++){
                for(let gx = gxMin; gx <= gxMax; gx++){
                    const i = gy * cols + gx;
                    const dx = centersX[i] - mx;
                    const dy = centersY[i] - my;
                    const d2 = dx * dx + dy * dy;
                    let target;
                    if (d2 <= R2) {
                        const dist = Math.sqrt(d2);
                        const falloff = 1 - dist * INV_R;
                        target = falloff * falloff; /* quadratic falloff — bright center, soft edge */ 
                        /* K proximity hint */ const b = blocks[i];
                        if (b.isK1 && !k1Found.current || b.isK2 && !k2Found.current) {
                            if (dist < 130) target = Math.max(target, falloff * 0.9);
                        }
                    } else {
                        target = 0;
                    }
                    /* Found K blocks stay lit */ const b = blocks[i];
                    if (b.isK1 && k1Found.current || b.isK2 && k2Found.current) {
                        target = 0.85 + 0.15 * Math.sin(time * 2);
                    }
                    /* Snap-fast lerp toward target */ const cur = glows[i];
                    const next = cur + (target - cur) * 0.55;
                    glows[i] = next;
                    /* Only write to DOM if opacity actually changes visibly */ const rounded = next < 0.005 ? 0 : next;
                    els[i].style.opacity = String(rounded);
                    if (rounded > 0) activeSet.add(i);
                    else activeSet.delete(i);
                }
            }
            /* ── Found-K breathing for blocks outside the cursor scan rect ── */ if (k1Found.current || k2Found.current) {
                const breathe = 0.85 + 0.15 * Math.sin(time * 2);
                for(let i = 0; i < N; i++){
                    const b = blocks[i];
                    if (b.isK1 && k1Found.current || b.isK2 && k2Found.current) {
                        /* May already be handled above, but ensure even out-of-rect K blocks glow */ if (!activeSet.has(i) || glows[i] < breathe) {
                            glows[i] = breathe;
                            els[i].style.opacity = String(breathe);
                            activeSet.add(i);
                        }
                    }
                }
            }
            /* Update cursor glow overlay */ if (glowRef.current) {
                glowRef.current.style.background = `radial-gradient(circle 200px at ${mx}px ${my}px, rgba(255,255,255,0.04), transparent 70%)`;
            }
            rafRef.current = requestAnimationFrame(glowLoop);
        };
        const glowDelay = setTimeout(()=>{
            rafRef.current = requestAnimationFrame(glowLoop);
        }, 200);
        const hintTimer = setTimeout(()=>setShowHint(false), 5000);
        return ()=>{
            cancelAnimationFrame(rafRef.current);
            clearTimeout(glowDelay);
            clearTimeout(hintTimer);
            vibrateTimerRef.current?.pause();
            container.innerHTML = "";
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    /* ─── Mouse / touch tracking ─── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMouse = (e)=>{
            mouseRef.current = {
                x: e.clientX,
                y: e.clientY
            };
        };
        const handleTouch = (e)=>{
            const t = e.touches[0];
            if (t) {
                mouseRef.current = {
                    x: t.clientX,
                    y: t.clientY
                };
            }
        };
        window.addEventListener("mousemove", handleMouse);
        window.addEventListener("touchmove", handleTouch, {
            passive: true
        });
        window.addEventListener("touchstart", handleTouch, {
            passive: true
        });
        /* Escape key bypass — skip to particle canvas */ const handleKey = (e)=>{
            if (e.key === "Escape") {
                onEnter();
            }
        };
        window.addEventListener("keydown", handleKey);
        return ()=>{
            window.removeEventListener("mousemove", handleMouse);
            window.removeEventListener("touchmove", handleTouch);
            window.removeEventListener("touchstart", handleTouch);
            window.removeEventListener("keydown", handleKey);
        };
    }, [
        onEnter
    ]);
    /* ─── Cinematic Vibrate → Inhale → Burst sequence ─── */ const startVibrateBurst = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
        /* Pre-compute distance from center for each block */ const dists = new Float32Array(N);
        let maxDist = 0;
        for(let i = 0; i < N; i++){
            const dx = blocks[i].x + half - cX;
            const dy = blocks[i].y + half - cY;
            dists[i] = Math.sqrt(dx * dx + dy * dy);
            if (dists[i] > maxDist) maxDist = dists[i];
        }
        const invMaxDist = 1 / (maxDist || 1);
        /* Create the white flash overlay for detonation */ const flash = document.createElement("div");
        flash.style.cssText = "position:fixed;inset:0;background:#fff;opacity:0;z-index:200;pointer-events:none;";
        document.body.appendChild(flash);
        /* Container ref for screen-shake */ const container = gridRef.current.parentElement;
        let shakeRAF = 0;
        /*
     * PHASE 1 — WAVE TREMOR (0 → 2.2s)
     * Soft vibration radiates outward from center in sine waves.
     * Intensity ramps gently. Brightness reveals blocks gradually
     * from the center outward like ripples in water.
     */ const PHASE1_DUR = 2200;
        /*
     * PHASE 2 — PRESSURE BUILD (2.2s → 3.8s)
     * Exponential intensity ramp. Blocks converge slightly toward center.
     * Random white flashes increase in frequency.
     * LED strips and corners already flashing via CSS.
     */ const PHASE2_DUR = 1600;
        /*
     * PHASE 3 — THE INHALE (3.8s → 4.3s)
     * All blocks contract sharply toward center, screen dims briefly.
     * Creates the "breath before the scream" moment.
     */ const INHALE_DUR = 500;
        const TOTAL_BUILD = PHASE1_DUR + PHASE2_DUR + INHALE_DUR;
        let startTime = 0;
        const buildLoop = (now)=>{
            if (!startTime) startTime = now;
            const elapsed = now - startTime;
            if (elapsed < PHASE1_DUR) {
                /* ── Phase 1: Wave tremor ── */ const p = elapsed / PHASE1_DUR; // 0→1
                const waveSpeed = 0.004 + p * 0.008;
                const intensity = 0.3 + Math.pow(p, 1.8) * 3.5;
                for(let i = 0; i < N; i++){
                    const nd = dists[i] * invMaxDist; // 0=center, 1=edge
                    const wave = Math.sin(dists[i] * 0.015 - elapsed * waveSpeed);
                    const jitter = wave * intensity * (0.4 + nd * 0.6);
                    const jx = jitter * (Math.random() > 0.5 ? 1 : -1);
                    const jy = jitter * (Math.random() > 0.5 ? 1 : -1);
                    els[i].style.transform = `translate3d(${jx.toFixed(2)}px, ${jy.toFixed(2)}px, 0)`;
                    /* Reveal from center outward */ const reveal = Math.max(0, Math.min(1, p * 1.4 - nd * 0.8));
                    const opc = reveal * (0.08 + p * 0.25);
                    els[i].style.opacity = String(opc);
                }
            } else if (elapsed < PHASE1_DUR + PHASE2_DUR) {
                /* ── Phase 2: Pressure build ── */ const local = (elapsed - PHASE1_DUR) / PHASE2_DUR; // 0→1
                const intensity = 4 + Math.pow(local, 2.5) * 18;
                const pulse = 1 + 0.3 * Math.sin(local * Math.PI * 16);
                const breathe = 1 + 0.08 * Math.sin(local * Math.PI * 6);
                const finalIntensity = intensity * pulse;
                for(let i = 0; i < N; i++){
                    const nd = dists[i] * invMaxDist;
                    /* Wave pattern still present but overtaken by chaos */ const wave = Math.sin(dists[i] * 0.02 - elapsed * 0.012);
                    const chaos = (Math.random() - 0.5) * finalIntensity;
                    const jx = (wave * 2 + chaos) * breathe;
                    const jy = ((Math.random() - 0.5) * finalIntensity + wave * 1.5) * breathe;
                    /* Slight convergence toward center as pressure builds */ const converge = Math.pow(local, 3) * 0.06;
                    const towardCX = (cX - (blocks[i].x + half)) * converge;
                    const towardCY = (cY - (blocks[i].y + half)) * converge;
                    els[i].style.transform = `translate3d(${(jx + towardCX).toFixed(1)}px, ${(jy + towardCY).toFixed(1)}px, 0)`;
                    /* Brightness ramps; near-center blocks brighten first */ let opc = 0.3 + Math.pow(local, 1.5) * 0.7 * (1 - nd * 0.3);
                    /* Random flash bursts — increase in frequency */ if (Math.random() < Math.pow(local, 2) * 0.12) opc = 1;
                    els[i].style.opacity = String(Math.min(1, opc));
                }
                /* Subtle screen-shake on container */ const shake = Math.pow(local, 3) * 3;
                container.style.transform = `translate(${(Math.random() - 0.5) * shake}px, ${(Math.random() - 0.5) * shake}px)`;
            } else if (elapsed < TOTAL_BUILD) {
                /* ── Phase 3: THE INHALE — sharp contraction toward center ── */ const local = (elapsed - PHASE1_DUR - PHASE2_DUR) / INHALE_DUR; // 0→1
                const contractStrength = Math.pow(local, 0.6); // fast start, decelerates
                const dimming = 1 - local * 0.4; // screen dims slightly
                for(let i = 0; i < N; i++){
                    const nd = dists[i] * invMaxDist;
                    /* Contract toward center */ const towardCX = (cX - (blocks[i].x + half)) * contractStrength * 0.35;
                    const towardCY = (cY - (blocks[i].y + half)) * contractStrength * 0.35;
                    /* Tiny residual vibration */ const residual = (1 - local) * 2;
                    const jx = (Math.random() - 0.5) * residual;
                    const jy = (Math.random() - 0.5) * residual;
                    els[i].style.transform = `translate3d(${(towardCX + jx).toFixed(1)}px, ${(towardCY + jy).toFixed(1)}px, 0)`;
                    /* Blocks dim except center which stays bright */ const opc = (1 - nd * 0.5) * dimming + nd * 0.1;
                    els[i].style.opacity = String(Math.max(0.05, opc));
                    /* Shrink slightly during inhale */ const sc = 1 - contractStrength * 0.15 * nd;
                    els[i].style.transform += ` scale(${sc.toFixed(3)})`;
                }
                /* Screen shake subsides */ const shake = (1 - local) * 2;
                container.style.transform = `translate(${(Math.random() - 0.5) * shake}px, ${(Math.random() - 0.5) * shake}px)`;
            }
            if (elapsed < TOTAL_BUILD) {
                shakeRAF = requestAnimationFrame(buildLoop);
            } else {
                /* ── PHASE 4: MOTH TO FLAME — particles converge to center ── */ container.style.transform = "";
                setPhase("converge");
                /* Show loader */ if (loaderRef.current) {
                    loaderRef.current.style.display = "";
                    loaderRef.current.textContent = "0%";
                }
                /* Subtle flash at convergence start */ flash.style.opacity = "0.25";
                flash.style.transition = "opacity 500ms ease-out";
                requestAnimationFrame(()=>{
                    flash.style.opacity = "0";
                });
                const convergeParams = [];
                for(let i = 0; i < N; i++){
                    const nd = dists[i] * invMaxDist;
                    const b = blocks[i];
                    /* Visual position after inhale contraction */ const sx = b.x * 0.65 + (cX - half) * 0.35;
                    const sy = b.y * 0.65 + (cY - half) * 0.35;
                    /* Edge particles start first (moths from afar) */ const delay = (1 - nd) * 1000;
                    const duration = 800 + nd * 1800;
                    /* Bezier control point — perpendicular offset for curved path */ const dx = cX - sx;
                    const dy = cY - sy;
                    const d = Math.sqrt(dx * dx + dy * dy) || 1;
                    const perpX = -dy / d;
                    const perpY = dx / d;
                    const curveAmt = (Math.random() - 0.5) * d * 0.5;
                    const mx = (sx + cX) / 2 + perpX * curveAmt;
                    const my = (sy + cY) / 2 + perpY * curveAmt;
                    convergeParams.push({
                        delay,
                        duration,
                        startX: sx,
                        startY: sy,
                        ctrlX: mx,
                        ctrlY: my
                    });
                }
                let convStart = 0;
                let arrivedCount = 0;
                const convergeLoop = (now)=>{
                    if (!convStart) convStart = now;
                    const elapsed2 = now - convStart;
                    arrivedCount = 0;
                    for(let i = 0; i < N; i++){
                        const cp = convergeParams[i];
                        const local2 = elapsed2 - cp.delay;
                        if (local2 < 0) {
                            /* Hasn't started — residual tremor */ const jx = (Math.random() - 0.5) * 1.2;
                            const jy = (Math.random() - 0.5) * 1.2;
                            els[i].style.transform = `translate3d(${jx}px, ${jy}px, 0)`;
                            els[i].style.opacity = String(0.4 + Math.random() * 0.2);
                            continue;
                        }
                        const t2 = Math.min(1, local2 / cp.duration);
                        /* easeInCubic — accelerates toward center (gravity pull) */ const e2 = t2 * t2 * t2;
                        /* Quadratic bezier path */ const u2 = 1 - e2;
                        const wx = u2 * u2 * cp.startX + 2 * u2 * e2 * cp.ctrlX + e2 * e2 * cX;
                        const wy = u2 * u2 * cp.startY + 2 * u2 * e2 * cp.ctrlY + e2 * e2 * cY;
                        const translateX = wx - blocks[i].x;
                        const translateY = wy - blocks[i].y;
                        /* Scale: slight growth → shrink to near-zero */ const scale2 = t2 < 0.3 ? 1 + t2 * 0.6 : Math.max(0.05, 1.18 - (t2 - 0.3) * 1.6);
                        /* Opacity: bright during flight, fades near end */ const opc2 = t2 < 0.85 ? 0.9 : 0.9 * (1 - (t2 - 0.85) / 0.15);
                        els[i].style.transform = `translate3d(${translateX.toFixed(1)}px, ${translateY.toFixed(1)}px, 0) scale(${scale2.toFixed(3)})`;
                        els[i].style.opacity = t2 >= 1 ? "0" : String(opc2.toFixed(3));
                        if (t2 >= 1) arrivedCount++;
                    }
                    /* Update loading counter */ const pct = Math.min(100, Math.round(arrivedCount / N * 100));
                    if (loaderRef.current) {
                        loaderRef.current.textContent = `${pct}%`;
                    }
                    if (arrivedCount >= N) {
                        /* All particles arrived — soft fade-out for seamless handoff */ if (loaderRef.current) {
                            loaderRef.current.style.transition = "opacity 200ms ease-out";
                            loaderRef.current.style.opacity = "0";
                        }
                        /* Brief subtle pulse at center then fade the entire entry screen */ flash.style.opacity = "0.15";
                        flash.style.transition = "opacity 400ms ease-out";
                        requestAnimationFrame(()=>{
                            flash.style.opacity = "0";
                        });
                        /* Fade out the entry section container */ const entrySection = container.closest(".entry");
                        if (entrySection) {
                            entrySection.style.transition = "opacity 350ms ease-out";
                            entrySection.style.opacity = "0";
                        }
                        setTimeout(()=>{
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
        /* Store a pause-able handle */ vibrateTimerRef.current = {
            pause: ()=>{
                cancelAnimationFrame(shakeRAF);
                flash.remove();
                container.style.transform = "";
            }
        };
    }, [
        onEnter
    ]);
    /* ─── Click handler ─── */ const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$clock$2d$tick$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initAudio"])();
        const current = phaseRef.current;
        if (current !== "explore" && current !== "found1") return;
        const { step, offsetX, offsetY } = layoutRef.current;
        const clickGX = Math.floor((e.clientX - offsetX) / step);
        const clickGY = Math.floor((e.clientY - offsetY) / step);
        /* ±1 block tolerance around click */ let hitK1 = false;
        let hitK2 = false;
        for(let dy = -1; dy <= 1; dy++){
            for(let dx = -1; dx <= 1; dx++){
                const key = `${clickGX + dx},${clickGY + dy}`;
                if (k1Ref.current.has(key) && !k1Found.current) hitK1 = true;
                if (k2Ref.current.has(key) && !k2Found.current) hitK2 = true;
            }
        }
        const revealK = (isK1)=>{
            const kSet = isK1 ? k1Ref.current : k2Ref.current;
            const kEls = [];
            blockElsRef.current.forEach((el, i)=>{
                const b = blocksRef.current[i];
                if (kSet.has(`${b.gx},${b.gy}`)) {
                    kEls.push(el);
                    el.style.opacity = "1";
                }
            });
            /* Pop-out with elastic easing */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$animejs$2f$lib$2f$anime$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                targets: kEls,
                scale: [
                    1,
                    1.35,
                    1.08
                ],
                z: [
                    0,
                    18,
                    6
                ],
                duration: 700,
                ease: "outElastic(1, .5)"
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
    }, [
        setPhase,
        startVibrateBurst
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `entry${phase === "vibrate" ? " phase-vibrate" : ""}${phase === "converge" ? " phase-converge" : ""}`,
        onClick: handleClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: gridRef,
                className: "entry__grid"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 848,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: loaderRef,
                className: "entry__loader",
                style: {
                    display: 'none'
                },
                children: "0%"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 851,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: glowRef,
                className: "entry__cursor-glow"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 854,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__overlay",
                children: [
                    showHint && phase === "explore" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "entry__hint",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "entry__hint-icon",
                                children: "⌖"
                            }, void 0, false, {
                                fileName: "[project]/app/components/EntryScreen.tsx",
                                lineNumber: 860,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "entry__hint-text",
                                children: "find the hidden K's"
                            }, void 0, false, {
                                fileName: "[project]/app/components/EntryScreen.tsx",
                                lineNumber: 861,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/EntryScreen.tsx",
                        lineNumber: 859,
                        columnNumber: 11
                    }, this),
                    (phase === "explore" || phase === "found1") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "entry__found",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `entry__found-dot ${foundCount >= 1 ? "lit" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/app/components/EntryScreen.tsx",
                                lineNumber: 869,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `entry__found-dot ${foundCount >= 2 ? "lit" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/app/components/EntryScreen.tsx",
                                lineNumber: 872,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/EntryScreen.tsx",
                        lineNumber: 868,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "entry__coord",
                        children: "47.3769° N, 8.5417° E"
                    }, void 0, false, {
                        fileName: "[project]/app/components/EntryScreen.tsx",
                        lineNumber: 878,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "entry__version",
                        children: "v0.0.1"
                    }, void 0, false, {
                        fileName: "[project]/app/components/EntryScreen.tsx",
                        lineNumber: 879,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 857,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__led entry__led--top"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 883,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__led entry__led--bottom"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 884,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__led entry__led--left"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 885,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__led entry__led--right"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 886,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__glyph-corner entry__glyph-corner--tl"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 889,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__glyph-corner entry__glyph-corner--tr"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 890,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__glyph-corner entry__glyph-corner--bl"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 891,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__glyph-corner entry__glyph-corner--br"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 892,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/EntryScreen.tsx",
        lineNumber: 843,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/pixel-font.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ═══════════════════════════════════════
   Pixel-art bitmap font — 5 cols × 7 rows per character.
   Matches the EntryScreen K-reveal aesthetic exactly.
   ═══════════════════════════════════════ */ __turbopack_context__.s([
    "FONT",
    ()=>FONT,
    "stampLines",
    ()=>stampLines,
    "stampLinesScaled",
    ()=>stampLinesScaled,
    "stampLinesScaledCenters",
    ()=>stampLinesScaledCenters,
    "stampLinesScaledRegion",
    ()=>stampLinesScaledRegion,
    "stampText",
    ()=>stampText,
    "stampTextScaled",
    ()=>stampTextScaled,
    "stampTextScaledCenters",
    ()=>stampTextScaledCenters,
    "textPixelWidth",
    ()=>textPixelWidth,
    "textPixelWidthScaled",
    ()=>textPixelWidthScaled
]);
const FONT = {
    /* ── Uppercase A-Z ── */ A: [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    B: [
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            0
        ]
    ],
    C: [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    D: [
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            0
        ]
    ],
    E: [
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ]
    ],
    F: [
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ]
    ],
    G: [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    H: [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    I: [
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ]
    ],
    J: [
        [
            0,
            0,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            0,
            1,
            1,
            0,
            0
        ]
    ],
    K: [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            1,
            0,
            1,
            0,
            0
        ],
        [
            1,
            1,
            0,
            0,
            0
        ],
        [
            1,
            0,
            1,
            0,
            0
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    L: [
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ]
    ],
    M: [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            0,
            1,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    N: [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            0,
            0,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            0,
            0,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    O: [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    P: [
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ]
    ],
    Q: [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            0,
            1,
            1,
            0,
            1
        ]
    ],
    R: [
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            1,
            0,
            0
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    S: [
        [
            0,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            0
        ]
    ],
    T: [
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ]
    ],
    U: [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    V: [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ]
    ],
    W: [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            1,
            0,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    X: [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            0,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    Y: [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ]
    ],
    Z: [
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ]
    ],
    /* ── Digits 0-9 ── */ "0": [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            1,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            1,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    "1": [
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            1,
            0,
            0
        ],
        [
            1,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ]
    ],
    "2": [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ]
    ],
    "3": [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            1,
            1,
            0
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    "4": [
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            1,
            0
        ],
        [
            0,
            1,
            0,
            1,
            0
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ]
    ],
    "5": [
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    "6": [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    "7": [
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ]
    ],
    "8": [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    "9": [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    /* ── Symbols ── */ " ": [
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ]
    ],
    "+": [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ]
    ],
    "-": [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ]
    ],
    ".": [
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            1,
            0
        ]
    ],
    "/": [
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ]
    ],
    ":": [
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            1,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            1,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ]
    ],
    "@": [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            1,
            1,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            0,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    ",": [
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            0,
            0
        ],
        [
            0,
            1,
            0
        ],
        [
            1,
            0,
            0
        ]
    ],
    "(": [
        [
            0,
            0,
            1
        ],
        [
            0,
            1,
            0
        ],
        [
            1,
            0,
            0
        ],
        [
            1,
            0,
            0
        ],
        [
            1,
            0,
            0
        ],
        [
            0,
            1,
            0
        ],
        [
            0,
            0,
            1
        ]
    ],
    ")": [
        [
            1,
            0,
            0
        ],
        [
            0,
            1,
            0
        ],
        [
            0,
            0,
            1
        ],
        [
            0,
            0,
            1
        ],
        [
            0,
            0,
            1
        ],
        [
            0,
            1,
            0
        ],
        [
            1,
            0,
            0
        ]
    ],
    "%": [
        [
            1,
            1,
            0,
            0,
            1
        ],
        [
            1,
            1,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            1,
            1
        ],
        [
            1,
            0,
            0,
            1,
            1
        ]
    ],
    "<": [
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ]
    ],
    ">": [
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ]
    ],
    /* ── Lowercase a-z ── */ a: [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            1
        ]
    ],
    b: [
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            0
        ]
    ],
    c: [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    d: [
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            1
        ]
    ],
    e: [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    f: [
        [
            0,
            0,
            1,
            1,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ]
    ],
    g: [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    h: [
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            1,
            1,
            0
        ],
        [
            1,
            1,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    i: [
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            1,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    j: [
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            1,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            0,
            1,
            1,
            0,
            0
        ]
    ],
    k: [
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            1,
            0,
            1,
            0,
            0
        ],
        [
            1,
            1,
            0,
            0,
            0
        ],
        [
            1,
            0,
            1,
            0,
            0
        ],
        [
            1,
            0,
            0,
            1,
            0
        ]
    ],
    l: [
        [
            0,
            1,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    m: [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            0,
            1,
            0
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    n: [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            1,
            1,
            0
        ],
        [
            1,
            1,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    o: [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    p: [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ]
    ],
    q: [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ]
    ],
    r: [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            1,
            1,
            0
        ],
        [
            1,
            1,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ]
    ],
    s: [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            0
        ]
    ],
    t: [
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            1
        ],
        [
            0,
            0,
            1,
            1,
            0
        ]
    ],
    u: [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            1,
            1
        ],
        [
            0,
            1,
            1,
            0,
            1
        ]
    ],
    v: [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ]
    ],
    w: [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            0,
            1,
            0,
            1,
            0
        ]
    ],
    x: [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            0,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    y: [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    z: [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ]
    ]
};
function stampText(text, startGX, startGY) {
    const set = new Set();
    let cx = startGX;
    for (const ch of text){
        const glyph = FONT[ch];
        if (!glyph) {
            cx += 4; /* unknown char: skip like a space */ 
            continue;
        }
        for(let row = 0; row < glyph.length; row++){
            for(let col = 0; col < glyph[row].length; col++){
                if (glyph[row][col]) set.add(`${cx + col},${startGY + row}`);
            }
        }
        cx += glyph[0].length + 1; /* char width + 1 col gap */ 
    }
    return set;
}
function textPixelWidth(text) {
    let w = 0;
    for (const ch of text){
        const g = FONT[ch];
        w += g ? g[0].length + 1 : 4;
    }
    return w > 0 ? w - 1 : 0; /* subtract trailing gap */ 
}
function stampLines(lines, cols, rows, lineStep = 9) {
    const totalH = lines.length * lineStep - (lineStep - 7); /* last line: no bottom gap */ 
    const startYBase = Math.max(0, Math.floor((rows - totalH) / 2));
    const result = new Set();
    for(let i = 0; i < lines.length; i++){
        const line = lines[i];
        if (!line) continue; /* blank spacer line */ 
        const lineWidth = textPixelWidth(line);
        const startGX = Math.max(0, Math.floor((cols - lineWidth) / 2));
        const startGY = startYBase + i * lineStep;
        const lineSet = stampText(line, startGX, startGY);
        lineSet.forEach((key)=>result.add(key));
    }
    return result;
}
function stampTextScaled(text, startGX, startGY, scale) {
    const set = new Set();
    let cx = startGX;
    for (const ch of text){
        const glyph = FONT[ch];
        if (!glyph) {
            cx += 4 * scale;
            continue;
        }
        for(let row = 0; row < glyph.length; row++){
            for(let col = 0; col < glyph[row].length; col++){
                if (glyph[row][col]) {
                    for(let sy = 0; sy < scale; sy++){
                        for(let sx = 0; sx < scale; sx++){
                            set.add(`${cx + col * scale + sx},${startGY + row * scale + sy}`);
                        }
                    }
                }
            }
        }
        cx += (glyph[0].length + 1) * scale;
    }
    return set;
}
function textPixelWidthScaled(text, scale) {
    let w = 0;
    for (const ch of text){
        const g = FONT[ch];
        w += g ? (g[0].length + 1) * scale : 4 * scale;
    }
    return w > 0 ? w - scale : 0;
}
function stampLinesScaled(lines, cols, rows, scale, lineStep) {
    const charH = 7 * scale;
    const ls = lineStep ?? charH + 2 * scale;
    const totalH = lines.length * ls - (ls - charH);
    const startYBase = Math.max(0, Math.floor((rows - totalH) / 2));
    const result = new Set();
    for(let i = 0; i < lines.length; i++){
        const line = lines[i];
        if (!line) continue;
        const lineWidth = textPixelWidthScaled(line, scale);
        const startGX = Math.max(0, Math.floor((cols - lineWidth) / 2));
        const startGY = startYBase + i * ls;
        const lineSet = stampTextScaled(line, startGX, startGY, scale);
        lineSet.forEach((key)=>result.add(key));
    }
    return result;
}
function stampTextScaledCenters(text, startGX, startGY, scale) {
    const set = new Set();
    let cx = startGX;
    const half = Math.floor(scale / 2);
    for (const ch of text){
        const glyph = FONT[ch];
        if (!glyph) {
            cx += 4 * scale;
            continue;
        }
        for(let row = 0; row < glyph.length; row++){
            for(let col = 0; col < glyph[row].length; col++){
                if (glyph[row][col]) {
                    set.add(`${cx + col * scale + half},${startGY + row * scale + half}`);
                }
            }
        }
        cx += (glyph[0].length + 1) * scale;
    }
    return set;
}
function stampLinesScaledCenters(lines, cols, rows, scale, lineStep) {
    const charH = 7 * scale;
    const ls = lineStep ?? charH + 2 * scale;
    const totalH = lines.length * ls - (ls - charH);
    /* Snap to nearest multiple of `scale` so center-dots align with the
     heroScale ambient grid (both use offset = floor(scale/2)). Without
     this, text dots and pond dots interleave → visible double layer. */ const startYBase = Math.max(0, Math.round((rows - totalH) / 2 / scale) * scale);
    const result = new Set();
    for(let i = 0; i < lines.length; i++){
        const line = lines[i];
        if (!line) continue;
        const lineWidth = textPixelWidthScaled(line, scale);
        const startGX = Math.max(0, Math.round((cols - lineWidth) / 2 / scale) * scale);
        const startGY = startYBase + i * ls;
        const lineSet = stampTextScaledCenters(line, startGX, startGY, scale);
        lineSet.forEach((key)=>result.add(key));
    }
    return result;
}
/* ═══════════════════════════════════════
   Scaled stamping — TEXT REGION
   Marks the center cell of EVERY position within
   character bounding boxes (both on AND off pixels).
   Used to exclude ambient grid dots from the text
   area so letter shapes remain visible.
   ═══════════════════════════════════════ */ function stampTextScaledRegion(text, startGX, startGY, scale) {
    const set = new Set();
    let cx = startGX;
    const half = Math.floor(scale / 2);
    for (const ch of text){
        const glyph = FONT[ch];
        if (!glyph) {
            cx += 4 * scale;
            continue;
        }
        for(let row = 0; row < glyph.length; row++){
            for(let col = 0; col < glyph[row].length; col++){
                /* Mark ALL positions — on and off pixels alike */ set.add(`${cx + col * scale + half},${startGY + row * scale + half}`);
            }
        }
        cx += (glyph[0].length + 1) * scale;
    }
    return set;
}
function stampLinesScaledRegion(lines, cols, rows, scale, lineStep) {
    const charH = 7 * scale;
    const ls = lineStep ?? charH + 2 * scale;
    const totalH = lines.length * ls - (ls - charH);
    const startYBase = Math.max(0, Math.round((rows - totalH) / 2 / scale) * scale);
    const result = new Set();
    for(let i = 0; i < lines.length; i++){
        const line = lines[i];
        if (!line) continue;
        const lineWidth = textPixelWidthScaled(line, scale);
        const startGX = Math.max(0, Math.round((cols - lineWidth) / 2 / scale) * scale);
        const startGY = startYBase + i * ls;
        const lineSet = stampTextScaledRegion(line, startGX, startGY, scale);
        lineSet.forEach((key)=>result.add(key));
    }
    return result;
}
}),
"[project]/app/components/ParticleCanvas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticleCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$animejs$2f$lib$2f$anime$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/animejs/lib/anime.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pixel$2d$font$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/pixel-font.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$clock$2d$tick$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/clock-tick.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const SECTIONS = [
    {
        label: "00 // hero",
        lineStep: 0,
        /* unused — hero uses stampLinesScaled */ lines: [
            "KALYAN",
            "KUMAR"
        ]
    }
];
const TOTAL = SECTIONS.length;
/* ═══════════════════════════════════════
   Easing
   ═══════════════════════════════════════ */ function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function ParticleCanvas() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const indicatorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroOverlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bottomBarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroDotsContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
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
        /* ── Grid sizing ── */ const blockSize = W < 600 ? 3 : W < 1024 ? 3 : 4;
        const gap = 1;
        const step = blockSize + gap;
        const cols = Math.floor(W / step);
        const rows = Math.floor(H / step);
        const oX = (W - cols * step + gap) / 2;
        const oY = (H - rows * step + gap) / 2;
        const N = cols * rows;
        const halfBlock = blockSize / 2;
        /* ── Hero scale — big letters that fill the viewport ── */ const heroScale = W < 600 ? 3 : W < 1024 ? 4 : 6;
        const heroGridHalf = Math.floor(heroScale / 2);
        /* ── Pre-render circle sprite (small — for normal sections) ── */ const spriteSize = blockSize + 2;
        const dotSprite = document.createElement("canvas");
        dotSprite.width = spriteSize * dpr;
        dotSprite.height = spriteSize * dpr;
        const dctx = dotSprite.getContext("2d");
        dctx.scale(dpr, dpr);
        dctx.fillStyle = "#ffffff";
        dctx.beginPath();
        dctx.arc(spriteSize / 2, spriteSize / 2, halfBlock, 0, Math.PI * 2);
        dctx.fill();
        /* ── Pre-render LARGE circle sprite (matches entry screen solid dots) ── */ const entryBlockSize = W < 600 ? 14 : W < 1024 ? 18 : 22;
        const heroDotDiam = entryBlockSize;
        const heroSpriteSize = heroDotDiam + 2;
        const heroDotSprite = document.createElement("canvas");
        heroDotSprite.width = heroSpriteSize * dpr;
        heroDotSprite.height = heroSpriteSize * dpr;
        const hdctx = heroDotSprite.getContext("2d");
        hdctx.scale(dpr, dpr);
        hdctx.fillStyle = "#ffffff";
        hdctx.beginPath();
        hdctx.arc(heroSpriteSize / 2, heroSpriteSize / 2, heroDotDiam / 2, 0, Math.PI * 2);
        hdctx.fill();
        /* Enable scrolling */ document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";
        document.body.style.height = `${200}vh`;
        /* ── Stamp pixel-art text for each section ── */ /* Hero: "KALYAN" above center, "KUMAR" below center,
       with a gap in the middle for the bio overlay. */ const charH = 7 * heroScale; /* height of one line in grid cells */ 
        /* Snap the gap to heroScale so KUMAR dots land on the same grid as KALYAN */ const bioGapRows = Math.round(Math.round(rows * 0.28) / heroScale) * heroScale;
        const totalTextH = charH * 2 + bioGapRows;
        const startYTop = Math.max(0, Math.round((rows - totalTextH) / 2 / heroScale) * heroScale);
        const startYBot = startYTop + charH + bioGapRows;
        const kalyanW = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pixel$2d$font$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textPixelWidthScaled"])("KALYAN", heroScale);
        const kumarW = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pixel$2d$font$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textPixelWidthScaled"])("KUMAR", heroScale);
        const kalyanX = Math.max(0, Math.round((cols - kalyanW) / 2 / heroScale) * heroScale);
        const kumarX = Math.max(0, Math.round((cols - kumarW) / 2 / heroScale) * heroScale);
        const heroStampSet = new Set();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pixel$2d$font$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stampTextScaledCenters"])("KALYAN", kalyanX, startYTop, heroScale).forEach((k)=>heroStampSet.add(k));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pixel$2d$font$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stampTextScaledCenters"])("KUMAR", kumarX, startYBot, heroScale).forEach((k)=>heroStampSet.add(k));
        /* ── Create DOM elements for hero text dots (for anime.js 3D pop) ── */ const heroDotsContainer = heroDotsContainerRef.current;
        const heroDotEls = [];
        const heroDotIndices = []; /* grid index → particle index */ 
        const heroDotRevealed = []; /* track first-reveal per dot */ 
        if (heroDotsContainer) {
            heroDotsContainer.innerHTML = "";
            heroDotsContainer.style.perspective = "800px";
            heroDotsContainer.style.transformStyle = "preserve-3d";
            heroStampSet.forEach((key)=>{
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
        const sectionStamps = SECTIONS.map((sec, idx)=>{
            if (idx === 0) return heroStampSet;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pixel$2d$font$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stampLines"])(sec.lines, cols, rows, sec.lineStep);
        });
        /* Build a fast lookup: which particle indices are hero center dots */ const isHeroCenterDot = new Uint8Array(N);
        /* Which particles sit on the hero grid (matching entry screen density). */ const isHeroGridDot = new Uint8Array(N);
        /* ── Build targets for each section ── */ const allTargets = sectionStamps.map((stamp, secIdx)=>{
            const targets = [];
            for(let gy = 0; gy < rows; gy++){
                for(let gx = 0; gx < cols; gx++){
                    const idx = gy * cols + gx;
                    const isText = stamp.has(`${gx},${gy}`);
                    if (secIdx === 0 && isText) {
                        isHeroCenterDot[idx] = 1;
                    }
                    /* Mark cells on the hero grid (same grid as text dots). */ if (secIdx === 0 && !isText && gx % heroScale === heroGridHalf && gy % heroScale === heroGridHalf) {
                        isHeroGridDot[idx] = 1;
                    }
                    targets.push({
                        x: oX + gx * step + halfBlock,
                        y: oY + gy * step + halfBlock,
                        isText
                    });
                }
            }
            return targets;
        });
        /* ── Create particles at their hero target positions ── */ const particles = [];
        for(let i = 0; i < N; i++){
            const heroTarget = allTargets[0][i];
            particles.push({
                x: heroTarget.x,
                y: heroTarget.y,
                opacity: 0,
                targets: allTargets.map((st)=>st[i])
            });
        }
        /* ── Animation state ── */ let lastScrollY = 0;
        let scrollVelocity = 0;
        let time = 0;
        let currentLabel = SECTIONS[0].label;
        /* ── Flashlight glow state — cursor-proximity reveal ── */ const glows = new Float32Array(N); /* 0 = invisible, 1 = fully lit */ 
        const FLASH_RADIUS = 180;
        const FLASH_R2 = FLASH_RADIUS * FLASH_RADIUS;
        const FLASH_INV_R = 1 / FLASH_RADIUS;
        /* (anime.js handles the elastic pop on DOM dots) */ /* ── Mouse tracking for cursor-vicinity clock tick ── */ const soundMouse = {
            x: -9999,
            y: -9999
        };
        let lastSndX = -9999;
        let lastSndY = -9999;
        let lastSndTime = 0;
        const SND_DIST_SQ = 18 * 18;
        const heroStamp = sectionStamps[0];
        const onMouseForSound = (e)=>{
            soundMouse.x = e.clientX;
            soundMouse.y = e.clientY;
        };
        const onTouchForSound = (e)=>{
            const tc = e.touches[0];
            if (tc) {
                soundMouse.x = tc.clientX;
                soundMouse.y = tc.clientY;
            }
        };
        const initClickForSound = ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$clock$2d$tick$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initAudio"])();
            window.removeEventListener("click", initClickForSound);
            window.removeEventListener("touchstart", initClickForSound);
        };
        window.addEventListener("mousemove", onMouseForSound);
        window.addEventListener("touchmove", onTouchForSound, {
            passive: true
        });
        window.addEventListener("click", initClickForSound);
        window.addEventListener("touchstart", initClickForSound);
        const dotEls = indicatorRef.current?.querySelectorAll(".pc-dot");
        /* ── RAF loop ── */ const halfSprite = spriteSize / 2;
        const tick = (now)=>{
            time = now * 0.001;
            const scrollY = window.scrollY;
            scrollVelocity = scrollVelocity * 0.85 + Math.abs(scrollY - lastScrollY) * 0.15;
            lastScrollY = scrollY;
            const progress = scrollY / H;
            const sectionA = Math.min(Math.floor(progress), TOTAL - 1);
            const sectionB = Math.min(sectionA + 1, TOTAL - 1);
            const t = sectionA === sectionB ? 0 : Math.min(1, progress - sectionA);
            const eased = easeInOutCubic(t);
            const activeSec = t > 0.5 ? sectionB : sectionA;
            const chaos = Math.sin(t * Math.PI) * Math.min(scrollVelocity * 0.4, 25);
            /* ── Is hero settled? (for static dots) ── */ const isHeroSettled = activeSec === 0 && t < 0.01;
            const isOnHero = activeSec === 0;
            /* ── Flashlight: cursor-proximity glow for hero section ── */ if (isOnHero) {
                const mx = soundMouse.x;
                const my = soundMouse.y;
                /* Grid cell at cursor */ const gxC = Math.floor((mx - oX) / step);
                const gyC = Math.floor((my - oY) / step);
                const cellRad = Math.ceil(FLASH_RADIUS / step) + 1;
                const gxMin = Math.max(0, gxC - cellRad);
                const gxMax = Math.min(cols - 1, gxC + cellRad);
                const gyMin = Math.max(0, gyC - cellRad);
                const gyMax = Math.min(rows - 1, gyC + cellRad);
                /* All dots invisible by default — only visible near cursor.
           Fast decay (0.6) matches entry screen behavior. */ for(let i = 0; i < N; i++){
                    if (glows[i] > 0.005) {
                        glows[i] *= 0.6;
                    } else {
                        glows[i] = 0;
                    }
                }
                /* Light up cells near cursor */ for(let gy = gyMin; gy <= gyMax; gy++){
                    for(let gx = gxMin; gx <= gxMax; gx++){
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
                            /* Text dots get brighter near cursor (like entry screen K proximity) */ if (isHeroCenterDot[idx] && dist < 140) {
                                target = Math.min(1, target * 1.4);
                            }
                            if (target > glows[idx]) {
                                glows[idx] = glows[idx] + (target - glows[idx]) * 0.55;
                            }
                        }
                    }
                }
            } else if (!isOnHero) {
                /* Reset when leaving hero */ for(let i = 0; i < N; i++){
                    glows[i] = 0;
                }
            }
            /* Fade hero overlay based on scroll — gone by 30% scroll */ const heroOpacity = Math.max(0, 1 - progress * 3);
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
            /* Update section label + dots */ const newLabel = SECTIONS[activeSec].label;
            if (newLabel !== currentLabel) {
                currentLabel = newLabel;
                if (indicatorRef.current) {
                    const labelEl = indicatorRef.current.querySelector(".pc-label");
                    if (labelEl) labelEl.textContent = currentLabel;
                }
                dotEls?.forEach((dot, idx)=>{
                    dot.classList.toggle("active", idx === activeSec);
                });
            }
            /* ── Clock tick sound when cursor is near hero text particles ── */ if (activeSec === 0) {
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
                        for(let sdy2 = -3; sdy2 <= 3 && !nearText; sdy2++){
                            for(let sdx2 = -3; sdx2 <= 3; sdx2++){
                                if (heroStamp.has(`${sgx + sdx2},${sgy + sdy2}`)) {
                                    nearText = true;
                                    break;
                                }
                            }
                        }
                        if (nearText) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$clock$2d$tick$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClockTick"])();
                            lastSndX = smx;
                            lastSndY = smy;
                            lastSndTime = sNow;
                        }
                    }
                }
            }
            /* ── Clear ── */ ctx.clearRect(0, 0, W, H);
            /* ── Update & draw ── */ for(let i = 0; i < N; i++){
                const p = particles[i];
                const fromT = p.targets[sectionA];
                const toT = p.targets[sectionB];
                let tgtX = fromT.x * (1 - eased) + toT.x * eased;
                let tgtY = fromT.y * (1 - eased) + toT.y * eased;
                /* Text blocks: bright. Ambient: very dim. */ let opaA = fromT.isText ? 0.88 : 0.025;
                let opaB = toT.isText ? 0.88 : 0.025;
                let tgtOpacity;
                /* On hero: opacity = glow directly (matches entry screen behavior).
           All dots can reach 1.0. Glow IS the opacity. */ if (isOnHero) {
                    tgtOpacity = glows[i];
                } else {
                    tgtOpacity = opaA * (1 - eased) + opaB * eased;
                }
                /* Organic noise during transition */ if (chaos > 0.5) {
                    tgtX += Math.sin(i * 0.37 + time * 3) * chaos;
                    tgtY += Math.cos(i * 0.53 + time * 3) * chaos;
                }
                /* Center pull during mid-transition */ const centerPull = Math.sin(t * Math.PI) * 0.15;
                tgtX = tgtX * (1 - centerPull) + cX * centerPull;
                tgtY = tgtY * (1 - centerPull) + cY * centerPull;
                /* Converge toward cursor when scrolling from hero toward experience */ if (progress > 0.5 && progress < 1.5) {
                    const convMx = soundMouse.x;
                    const convMy = soundMouse.y;
                    if (convMx > 0 && convMy > 0) {
                        /* Ramp 0→1 from progress 0.5 to ~1.0, quadratic for dramatic pull */ const convergeFactor = Math.min(1, (progress - 0.5) / 0.5);
                        const pullStr = convergeFactor * convergeFactor * 0.85;
                        tgtX = tgtX + (convMx - tgtX) * pullStr;
                        tgtY = tgtY + (convMy - tgtY) * pullStr;
                    }
                }
                /* ── Movement: static on hero, organic drift elsewhere ── */ if (isHeroSettled) {
                    /* Fast snap to target, zero drift */ const dx = tgtX - p.x;
                    const dy = tgtY - p.y;
                    if (Math.abs(dx) < 0.15 && Math.abs(dy) < 0.15) {
                        p.x = tgtX;
                        p.y = tgtY;
                    } else {
                        p.x += dx * 0.3;
                        p.y += dy * 0.3;
                    }
                } else {
                    /* Smooth lerp + gentle organic drift */ p.x += (tgtX - p.x) * 0.065;
                    p.y += (tgtY - p.y) * 0.065;
                    p.x += Math.sin(time * 0.8 + i * 0.1) * 0.08;
                    p.y += Math.cos(time * 0.6 + i * 0.15) * 0.08;
                }
                /* Opacity lerp — match entry screen's 0.55 snap on hero */ const opaLerp = isOnHero ? 0.55 : 0.08;
                p.opacity += (tgtOpacity - p.opacity) * opaLerp;
                /* Draw via pre-rendered sprite.
           On hero: only draw hero-grid dots (text + pond), use large sprite.
           On other sections: draw all dots with small sprite.
           Size lerps smoothly during transitions. */ if (p.opacity > 0.005) {
                    ctx.globalAlpha = p.opacity;
                    /* Compute how much "hero" is active: 1 = fully on hero, 0 = other section */ let heroBlend = 0;
                    if (sectionA === 0 && sectionB === 0) heroBlend = 1;
                    else if (sectionA === 0) heroBlend = 1 - eased;
                    else if (sectionB === 0) heroBlend = eased;
                    if (heroBlend > 0.01) {
                        /* On hero: text dots are DOM (for anime.js 3D pop); pond dots stay on canvas */ if (isHeroGridDot[i]) {
                            const drawSize = spriteSize + (heroSpriteSize - spriteSize) * heroBlend;
                            const halfDraw = drawSize / 2;
                            ctx.drawImage(heroDotSprite, p.x - halfDraw, p.y - halfDraw, drawSize, drawSize);
                        }
                    /* isHeroCenterDot — handled by DOM overlay below */ /* Skip intermediate dots — they're not part of the hero grid */ } else {
                        ctx.drawImage(dotSprite, p.x - halfSprite, p.y - halfSprite, spriteSize, spriteSize);
                    }
                }
            }
            /* ── Update DOM hero text dots (opacity + trigger pop) ── */ if (heroDotsContainer) {
                const showDomDots = isOnHero;
                heroDotsContainer.style.display = showDomDots ? "" : "none";
                if (showDomDots) {
                    for(let d = 0; d < heroDotEls.length; d++){
                        const idx = heroDotIndices[d];
                        const g = glows[idx];
                        heroDotEls[d].style.opacity = String(g);
                        /* Trigger anime.js pop-forward on first reveal */ if (!heroDotRevealed[d] && g > 0.25) {
                            heroDotRevealed[d] = true;
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$animejs$2f$lib$2f$anime$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                                targets: heroDotEls[d],
                                scale: [
                                    1,
                                    1.35,
                                    1.08
                                ],
                                z: [
                                    0,
                                    18,
                                    6
                                ],
                                duration: 700,
                                ease: "outElastic(1, .5)"
                            });
                        }
                    }
                }
            }
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return ()=>{
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "pc-canvas"
            }, void 0, false, {
                fileName: "[project]/app/components/ParticleCanvas.tsx",
                lineNumber: 565,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: heroDotsContainerRef,
                style: {
                    position: "fixed",
                    inset: 0,
                    pointerEvents: "none",
                    zIndex: 2,
                    perspective: 800,
                    transformStyle: "preserve-3d"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/ParticleCanvas.tsx",
                lineNumber: 568,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                ref: navRef,
                className: "pc-nav",
                style: {
                    opacity: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pc-nav-logo",
                        children: [
                            "KK",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pc-diamond",
                                children: "◆"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParticleCanvas.tsx",
                                lineNumber: 583,
                                columnNumber: 13
                            }, this),
                            "DEV"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                        lineNumber: 582,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pc-nav-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pc-nav-links",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/kalyankumar",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "GITHUB"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                                        lineNumber: 587,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://linkedin.com/in/kalyankumar",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "LINKEDIN"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                                        lineNumber: 594,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/resume.pdf",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "RESUME"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                                        lineNumber: 601,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ParticleCanvas.tsx",
                                lineNumber: 586,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:kkalyankumar.dev@gmail.com",
                                className: "pc-nav-email",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "pc-email-dot",
                                        children: "●"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                                        lineNumber: 609,
                                        columnNumber: 13
                                    }, this),
                                    " KKALYANKUMAR.DEV"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ParticleCanvas.tsx",
                                lineNumber: 605,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                        lineNumber: 585,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ParticleCanvas.tsx",
                lineNumber: 581,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: heroOverlayRef,
                className: "pc-hero-overlay",
                style: {
                    opacity: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "pc-hero-bio",
                    children: "I'M KALYAN, A FULL-STACK SOFTWARE ENGINEER BASED IN NEW JERSEY, DEDICATED TO BUILDING SCALABLE WEB APPLICATIONS & AI-POWERED TOOLS FOR PRODUCTION ENVIRONMENTS. LET'S CONNECT!"
                }, void 0, false, {
                    fileName: "[project]/app/components/ParticleCanvas.tsx",
                    lineNumber: 616,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ParticleCanvas.tsx",
                lineNumber: 615,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: bottomBarRef,
                className: "pc-bottom-bar",
                style: {
                    opacity: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pc-scroll-hint",
                        children: "SCROLL TO SEE MORE"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                        lineNumber: 628,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pc-available",
                        children: "AVAILABLE FOR OPPORTUNITIES"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                        lineNumber: 629,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ParticleCanvas.tsx",
                lineNumber: 627,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pc-sections",
                children: SECTIONS.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "pc-section",
                        "data-section": i
                    }, i, false, {
                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                        lineNumber: 635,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/ParticleCanvas.tsx",
                lineNumber: 633,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: indicatorRef,
                className: "pc-indicator",
                style: {
                    opacity: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pc-label",
                        children: SECTIONS[0].label
                    }, void 0, false, {
                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                        lineNumber: 641,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pc-dots",
                        children: SECTIONS.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `pc-dot${i === 0 ? " active" : ""}`
                            }, i, false, {
                                fileName: "[project]/app/components/ParticleCanvas.tsx",
                                lineNumber: 644,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                        lineNumber: 642,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ParticleCanvas.tsx",
                lineNumber: 640,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/components/sections/ExperienceSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExperienceSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$animejs$2f$lib$2f$anime$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/animejs/lib/anime.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pixel$2d$font$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/pixel-font.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$clock$2d$tick$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/clock-tick.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const CAREER = [
    {
        year: "2025",
        company: "MEDICAL INFORMATICS ENGINEERING",
        role: "Software Engineer Intern",
        roleMarquee: "INTERNSHIP",
        description: "Medical Informatics Engineering (MIE) builds healthcare IT solutions, evolving from ambulatory EHRs to specialized digital health platforms, driving innovation in clinical data and modern care systems since 1995.",
        bullets: [
            "Architected 3 MCP servers with 28 medical tools for clinical data retrieval",
            "Implemented BioClinicalBERT NER pipeline for medical entity extraction",
            "Built patient analytics dashboard in React with real-time visualizations",
            "Deployed 6 Docker services with Kubernetes autoscaler written in Go",
            "Reduced query response time from 4.8s to 1.2s with Redis caching layer",
            "Achieved 92% accuracy on clinical entity extraction benchmarks"
        ],
        videoSrc: "/MIE.mp4"
    },
    {
        year: "2024",
        company: "PURDUE UNIVERSITY",
        role: "Master of Science in Computer Science",
        roleMarquee: "EDUCATION",
        description: "Purdue University Fort Wayne offers a prestigious Purdue degree within a dynamic metropolitan setting. Recognized for its top-tier College of Engineering, Technology, and Computer Science, PFW combines rigorous STEM academics with the personalized mentorship of a small-campus environment.",
        bullets: [
            "Engineered an AWS serverless event pipeline utilizing Go Lambdas, API Gateway, and DynamoDB",
            "Designed a distributed Go job scheduler handling 1,200 jobs/min with zero drops",
            "Developed a full-stack Next.js and Go e-commerce storefront achieving a 98.5 Lighthouse score",
            "Built a GraphQL search application delivering infinite scroll and sub-100ms response times"
        ],
        videoSrc: "/PFW.mp4"
    },
    {
        year: "2023",
        company: "ACCENTURE",
        role: "Software Engineer",
        roleMarquee: "FULL-TIME",
        description: "Led frontend development for a SaaS platform serving 2,400+ enterprise users. Built the React/TypeScript frontend from the ground up and implemented 14 REST endpoints with Spring Boot on the backend.",
        bullets: [
            "Built SaaS platform frontend with React/TypeScript from scratch",
            "Implemented 14 REST API endpoints with Spring Boot backend",
            "Reduced page load time from 4.2s to 1.6s through code splitting",
            "Achieved 87% test coverage before first production deploy",
            "Mentored 3 junior developers on React best practices"
        ],
        videoSrc: "/accenture.mp4"
    },
    {
        year: "2021",
        company: "ACCENTURE",
        role: "Associate Software Engineer",
        roleMarquee: "FULL-TIME",
        description: "Built the checkout and catalog system for a retail e-commerce platform handling 12,000+ SKUs. Integrated Stripe payments and optimized page performance significantly.",
        bullets: [
            "Developed checkout flow with Stripe payment integration",
            "Built product catalog system managing 12,000+ SKUs",
            "Reduced page load from 3.8s to 2.3s with lazy loading",
            "Wrote 140+ tests across cart, catalog, and payment modules",
            "Collaborated with UX team on responsive mobile-first design"
        ],
        videoSrc: "/accenture.mp4"
    },
    {
        year: "2019",
        company: "FREELANCE",
        role: "Web Developer",
        roleMarquee: "FREELANCE",
        description: "Started professional development journey building websites and web applications for local businesses. Gained foundational skills in HTML, CSS, JavaScript, and React.",
        bullets: [
            "Built 8+ responsive websites for local businesses",
            "Learned React and began building single-page applications",
            "Implemented SEO optimizations improving search rankings by 40%",
            "Managed client relationships and project timelines"
        ]
    }
];
const YEARS = CAREER.map((c)=>c.year);
/* ═══════════════════════════════════════
   Zigzag year positions (percentage → grid)
   ═══════════════════════════════════════ */ const YEAR_POSITIONS = [
    {
        year: "2025",
        xPct: 0.15,
        yPct: 0.15
    },
    {
        year: "2024",
        xPct: 0.85,
        yPct: 0.35
    },
    {
        year: "2023",
        xPct: 0.20,
        yPct: 0.55
    },
    {
        year: "2021",
        xPct: 0.70,
        yPct: 0.75
    },
    {
        year: "2019",
        xPct: 0.15,
        yPct: 0.90
    }
];
function ExperienceSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const glowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const marqueeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const zigzagPathRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const zigzagGlowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeYear, setActiveYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [revealedYears, setRevealedYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const revealedYearsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Keep ref in sync for the scroll listener without remounting
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        revealedYearsRef.current = revealedYears;
        // Dispatch scroll to force line update when a year is revealed
        window.dispatchEvent(new CustomEvent("scroll"));
    }, [
        revealedYears
    ]);
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: -9999,
        y: -9999
    });
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const yearElsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const cardElsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const convergeDoneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const disperseStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const disperseOriginRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: -1,
        y: -1
    });
    const zigzagPointsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const zigzagLineStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    /* ── Computed pixel positions for year markers (matches canvas grid exactly) ── */ const yearPixelPositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!isActive) return new Map();
        if (!sectionRef.current) return new Map();
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
        const map = new Map();
        for (const yp of YEAR_POSITIONS){
            map.set(yp.year, {
                x: ox + Math.floor(yp.xPct * c) * stp + hf,
                y: oy + Math.floor(yp.yPct * r) * stp + hf
            });
        }
        return map;
    }, [
        isActive
    ]);
    /* ── Scroll-based activation ──
     Activate right after hero section (0-100vh). */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const H = window.innerHeight;
        const handleScroll = ()=>{
            const scrollY = window.scrollY;
            /* Activate when ~0.8 viewports scrolled (right after hero) */ const threshold = H * 0.8;
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
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        handleScroll();
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, [
        isActive
    ]);
    /* ── Mouse / touch tracking ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMouse = (e)=>{
            // Need offset for absolute positioning
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };
        const handleTouch = (e)=>{
            const t = e.touches[0];
            if (!sectionRef.current || !t) return;
            const rect = sectionRef.current.getBoundingClientRect();
            mouseRef.current = {
                x: t.clientX - rect.left,
                y: t.clientY - rect.top
            };
        };
        window.addEventListener("mousemove", handleMouse);
        window.addEventListener("touchmove", handleTouch, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("mousemove", handleMouse);
            window.removeEventListener("touchmove", handleTouch);
        };
    }, []);
    /* ── Dot grid canvas + flashlight + hidden years ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isActive) {
            disperseStartRef.current = 0;
            return;
        }
        /* Record dispersion origin — dots start clustered at cursor then spread */ disperseStartRef.current = performance.now();
        disperseOriginRef.current = {
            x: mouseRef.current.x > 0 ? mouseRef.current.x : window.innerWidth / 2,
            y: mouseRef.current.y > 0 ? mouseRef.current.y : window.innerHeight / 2
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
        const ctx = canvas.getContext("2d");
        ctx.scale(dpr, dpr);
        /* Grid sizing (matches entry screen) */ const blockSize = W < 600 ? 14 : W < 1024 ? 18 : 22;
        const gap = W < 600 ? 2 : 3;
        const step = blockSize + gap;
        const cols = Math.floor(W / step);
        const rows = Math.floor(H / step);
        const oX = (W - cols * step + gap) / 2;
        const oY = (H - rows * step + gap) / 2;
        const N = cols * rows;
        const half = blockSize / 2;
        /* Pre-render circle sprite */ const spriteSize = blockSize + 2;
        const sprite = document.createElement("canvas");
        sprite.width = spriteSize * dpr;
        sprite.height = spriteSize * dpr;
        const sctx = sprite.getContext("2d");
        sctx.scale(dpr, dpr);
        sctx.fillStyle = "#ffffff";
        sctx.beginPath();
        sctx.arc(spriteSize / 2, spriteSize / 2, half, 0, Math.PI * 2);
        sctx.fill();
        /* Stamp year numbers into grid */ const yearStamps = new Map();
        const allYearDots = new Set();
        for (const yp of YEAR_POSITIONS){
            const yw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pixel$2d$font$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textPixelWidth"])(yp.year);
            const yh = 7;
            const gx = Math.max(0, Math.min(cols - yw - 1, Math.floor(yp.xPct * cols) - Math.floor(yw / 2)));
            const gy = Math.max(0, Math.min(rows - yh - 1, Math.floor(yp.yPct * rows) - Math.floor(yh / 2)));
            const stamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pixel$2d$font$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stampText"])(yp.year, gx, gy);
            yearStamps.set(yp.year, stamp);
            stamp.forEach((k)=>allYearDots.add(k));
        }
        /* Fast lookup arrays */ const isYearDot = new Uint8Array(N);
        for (const [, stamp] of yearStamps){
            stamp.forEach((key)=>{
                const [gxS, gyS] = key.split(",");
                const idx = Number(gyS) * cols + Number(gxS);
                if (idx >= 0 && idx < N) isYearDot[idx] = 1;
            });
        }
        /* Glow state */ const glows = new Float32Array(N);
        const RADIUS = 180;
        const R2 = RADIUS * RADIUS;
        const INV_R = 1 / RADIUS;
        let lastTickX = -9999;
        let lastTickY = -9999;
        let lastTickTime = 0;
        const halfSprite = spriteSize / 2;
        /* Year proximity tracking */ const yearProximity = new Map();
        YEARS.forEach((y)=>yearProximity.set(y, 0));
        /* RAF loop */ const tick = ()=>{
            if (!canvasRef.current) return;
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;
            /* Decay all glows */ for(let i = 0; i < N; i++){
                if (glows[i] > 0.005) glows[i] *= 0.6;
                else glows[i] = 0;
            }
            /* Use targetMap to accumulate targets before applying to glows */ const targetMap = new Float32Array(N);
            /* Light up cells near cursor */ const gxC = Math.floor((mx - oX) / step);
            const gyC = Math.floor((my - oY) / step);
            const cellRad = Math.ceil(RADIUS / step) + 1;
            const gxMin = Math.max(0, gxC - cellRad);
            const gxMax = Math.min(cols - 1, gxC + cellRad);
            const gyMin = Math.max(0, gyC - cellRad);
            const gyMax = Math.min(rows - 1, gyC + cellRad);
            for(let gy = gyMin; gy <= gyMax; gy++){
                for(let gx = gxMin; gx <= gxMax; gx++){
                    const idx = gy * cols + gx;
                    const px = oX + gx * step + half;
                    const py = oY + gy * step + half;
                    const dx = px - mx;
                    const dy = py - my;
                    const d2 = dx * dx + dy * dy;
                    if (d2 <= R2) {
                        const dist = Math.sqrt(d2);
                        /* Quadratic falloff for ambient dots */ const falloff = Math.max(0, 1 - dist * INV_R);
                        let baseTarget = falloff * falloff;
                        /* Year dot proximity hint — matches entry screen K behavior:
               use linear falloff (much brighter) so year digits POP
               against the dimmer quadratic ambient dots */ if (isYearDot[idx] && dist < 130) {
                            baseTarget = Math.max(baseTarget, falloff * 0.9);
                        }
                        if (baseTarget > targetMap[idx]) {
                            targetMap[idx] = baseTarget;
                        }
                    }
                }
            }
            /* Apply target map to actual glows — snap-fast lerp matching entry screen */ for(let i = 0; i < N; i++){
                if (targetMap[i] > glows[i]) {
                    glows[i] += (targetMap[i] - glows[i]) * 0.55;
                }
            }
            /* Year proximity auto-reveal */ for (const yp of YEAR_POSITIONS){
                const stamp = yearStamps.get(yp.year);
                let litCount = 0;
                let totalCount = 0;
                stamp.forEach((key)=>{
                    const [gxS, gyS] = key.split(",");
                    const idx = Number(gyS) * cols + Number(gxS);
                    if (idx >= 0 && idx < N) {
                        totalCount++;
                        if (glows[idx] > 0.15) litCount++;
                    }
                });
                const ratio = totalCount > 0 ? litCount / totalCount : 0;
                if (ratio > 0.15) {
                    setRevealedYears((prev)=>{
                        if (prev.has(yp.year)) return prev;
                        const next = new Set(prev);
                        next.add(yp.year);
                        return next;
                    });
                }
            }
            /* Clock tick sound near year dots */ const tickNow = performance.now();
            if (tickNow - lastTickTime > 80) {
                const tdx = mx - lastTickX;
                const tdy = my - lastTickY;
                if (tdx * tdx + tdy * tdy > step * step) {
                    let nearYear = false;
                    for(let sdy = -3; sdy <= 3 && !nearYear; sdy++){
                        for(let sdx = -3; sdx <= 3; sdx++){
                            if (allYearDots.has(`${gxC + sdx},${gyC + sdy}`)) {
                                nearYear = true;
                                break;
                            }
                        }
                    }
                    if (nearYear) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$clock$2d$tick$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClockTick"])();
                        lastTickX = mx;
                        lastTickY = my;
                        lastTickTime = tickNow;
                    }
                }
            }
            /* Dispersion progress: dots start clustered at cursor → spread to grid */ const disperseElapsed = disperseStartRef.current > 0 ? performance.now() - disperseStartRef.current : 99999;
            const disperseT = Math.min(1, disperseElapsed / 1500);
            const disperseEase = disperseT < 1 ? 1 - Math.pow(1 - disperseT, 3) : 1;
            const origX = disperseOriginRef.current.x;
            const origY = disperseOriginRef.current.y;
            /* Clear & draw */ ctx.clearRect(0, 0, W, H);
            for(let i = 0; i < N; i++){
                if (glows[i] > 0.005) {
                    const gx = i % cols;
                    const gy = Math.floor(i / cols);
                    let px = oX + gx * step + half;
                    let py = oY + gy * step + half;
                    /* During dispersion, interpolate from cursor origin to grid position */ if (disperseEase < 1 && origX > 0) {
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
            /* Cursor glow overlay */ if (glowRef.current) {
                const relY = mouseRef.current.y;
                glowRef.current.style.background = `radial-gradient(circle 200px at ${mx}px ${relY}px, rgba(255,255,255,0.04), transparent 70%)`;
            }
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        /* Draw zigzag SVG path */ if (zigzagPathRef.current && zigzagGlowRef.current) {
            const points = YEAR_POSITIONS.map((yp)=>({
                    x: oX + Math.floor(yp.xPct * cols) * step + half,
                    y: oY + Math.floor(yp.yPct * rows) * step + half
                }));
            let d = `M ${points[0].x} ${points[0].y}`;
            for(let i = 1; i < points.length; i++){
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
            /* Sample points along the path for progressive dot lighting */ try {
                const pathLen = zigzagPathRef.current.getTotalLength();
                const numSamples = 150;
                const samples = [];
                for(let s = 0; s <= numSamples; s++){
                    const pt = zigzagPathRef.current.getPointAtLength(s / numSamples * pathLen);
                    samples.push({
                        x: pt.x,
                        y: pt.y
                    });
                }
                zigzagPointsRef.current = samples;
                zigzagLineStartRef.current = performance.now() + 800;
            } catch  {}
            setTimeout(()=>{
                zigzagPathRef.current?.classList.add("drawn");
                zigzagGlowRef.current?.classList.add("drawn");
            }, 800);
        }
        return ()=>cancelAnimationFrame(rafRef.current);
    }, [
        isActive
    ]);
    /* ── Animate marquee chars ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isActive || !marqueeRef.current) return;
        const chars = marqueeRef.current.querySelectorAll(".exp-marquee-char");
        if (chars.length === 0) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$animejs$2f$lib$2f$anime$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            targets: Array.from(chars),
            translateY: [
                {
                    to: -6,
                    duration: 400
                },
                {
                    to: 0,
                    duration: 400
                }
            ],
            rotateZ: [
                {
                    to: -8,
                    duration: 300
                },
                {
                    to: 8,
                    duration: 300
                },
                {
                    to: 0,
                    duration: 300
                }
            ],
            scale: [
                {
                    to: 1.15,
                    duration: 250
                },
                {
                    to: 1,
                    duration: 250
                }
            ],
            delay: (_el, i)=>i * 40,
            loop: true,
            ease: "inOutSine"
        });
    }, [
        isActive
    ]);
    /* ── Year click handler ── */ const handleYearClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((year)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$clock$2d$tick$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initAudio"])();
        setActiveYear((prev)=>prev === year ? null : year);
        const yearEl = yearElsRef.current.get(year);
        if (yearEl) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$animejs$2f$lib$2f$anime$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                targets: yearEl,
                scale: [
                    1,
                    1.2,
                    1.05
                ],
                duration: 500,
                ease: "outElastic(1, .6)"
            });
        }
    }, []);
    /* ── Marquee text builder ── */ const marqueeText = "CAREER & EXPERIENCE";
    const buildMarqueeChars = (key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "exp-marquee-text",
            children: marqueeText.split("").map((ch, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "exp-marquee-char",
                    style: {
                        display: "inline-block"
                    },
                    children: ch === " " ? "\u00A0" : ch
                }, `${key}-${i}`, false, {
                    fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                    lineNumber: 600,
                    columnNumber: 9
                }, this))
        }, key, false, {
            fileName: "[project]/app/components/sections/ExperienceSection.tsx",
            lineNumber: 598,
            columnNumber: 5
        }, this);
    /* ── Mini marquee for cards ── */ const buildMiniMarquee = (text)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "exp-mini-marquee",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-mini-marquee-track",
                children: Array.from({
                    length: 12
                }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-mini-marquee-text",
                        children: text
                    }, i, false, {
                        fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                        lineNumber: 616,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                lineNumber: 614,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/sections/ExperienceSection.tsx",
            lineNumber: 613,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: `exp-section${isActive ? " active" : ""}`,
        id: "experience",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "exp-dot-canvas"
            }, void 0, false, {
                fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                lineNumber: 625,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: glowRef,
                className: "exp-cursor-glow"
            }, void 0, false, {
                fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                lineNumber: 628,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-marquee",
                ref: marqueeRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "exp-marquee-track",
                    children: Array.from({
                        length: 8
                    }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                buildMarqueeChars(`m${i}`),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "exp-marquee-sep",
                                    children: "◆"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                                    lineNumber: 636,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                            lineNumber: 634,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                    lineNumber: 632,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                lineNumber: 631,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "exp-zigzag-line",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "expZigzagGradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "0%",
                            y2: "100%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#ff0033",
                                    stopOpacity: "0.8"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                                    lineNumber: 646,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "50%",
                                    stopColor: "#ff0033",
                                    stopOpacity: "1"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                                    lineNumber: 647,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#ff0033",
                                    stopOpacity: "0.4"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                                    lineNumber: 648,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                            lineNumber: 645,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                        lineNumber: 644,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        ref: zigzagGlowRef,
                        className: "exp-zigzag-glow"
                    }, void 0, false, {
                        fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                        lineNumber: 651,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        ref: zigzagPathRef,
                        className: "exp-zigzag-path"
                    }, void 0, false, {
                        fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                        lineNumber: 652,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                lineNumber: 643,
                columnNumber: 7
            }, this),
            YEAR_POSITIONS.map(({ year, xPct, yPct })=>{
                const pos = yearPixelPositions.get(year);
                const isRevealed = revealedYears.has(year);
                const isYearActive = activeYear === year;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: (el)=>{
                        if (el) yearElsRef.current.set(year, el);
                    },
                    className: `exp-year${isRevealed ? " revealed" : ""}${isYearActive ? " active" : ""}`,
                    style: {
                        left: pos ? pos.x : `${xPct * 100}%`,
                        top: pos ? pos.y : `${yPct * 100}%`
                    },
                    onClick: ()=>handleYearClick(year),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            position: 'absolute',
                            width: 1,
                            height: 1,
                            padding: 0,
                            margin: -1,
                            overflow: 'hidden',
                            clip: 'rect(0,0,0,0)',
                            border: 0
                        },
                        children: year
                    }, void 0, false, {
                        fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                        lineNumber: 672,
                        columnNumber: 13
                    }, this)
                }, year, false, {
                    fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                    lineNumber: 661,
                    columnNumber: 11
                }, this);
            }),
            activeYear && (()=>{
                const entry = CAREER.find((c)=>c.year === activeYear);
                if (!entry) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "exp-card-overlay",
                    onClick: ()=>setActiveYear(null),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exp-card visible",
                        ref: (el)=>{
                            if (el) cardElsRef.current.set(entry.year, el);
                        },
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "exp-card-close",
                                onClick: ()=>setActiveYear(null),
                                "aria-label": "Close",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                                lineNumber: 688,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "exp-card-year-badge",
                                children: entry.year
                            }, void 0, false, {
                                fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                                lineNumber: 696,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "exp-card-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "exp-card-company",
                                        children: entry.company
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                                        lineNumber: 699,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "exp-card-role",
                                        children: entry.role
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                                        lineNumber: 700,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                                lineNumber: 698,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "exp-card-desc",
                                children: entry.description
                            }, void 0, false, {
                                fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                                lineNumber: 703,
                                columnNumber: 15
                            }, this),
                            buildMiniMarquee(entry.roleMarquee),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "exp-card-media",
                                children: entry.videoSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    src: entry.videoSrc,
                                    autoPlay: true,
                                    muted: true,
                                    loop: true,
                                    playsInline: true
                                }, void 0, false, {
                                    fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                                    lineNumber: 709,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "exp-card-media-overlay",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "exp-card-media-icon",
                                        children: "▶"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                                        lineNumber: 712,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                                    lineNumber: 711,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                                lineNumber: 707,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "exp-card-section-title",
                                children: "WHAT I DID"
                            }, void 0, false, {
                                fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                                lineNumber: 717,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "exp-card-bullets",
                                children: entry.bullets.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "exp-card-bullet",
                                        children: b
                                    }, i, false, {
                                        fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                                        lineNumber: 720,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                                lineNumber: 718,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                        lineNumber: 683,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                    lineNumber: 682,
                    columnNumber: 11
                }, this);
            })(),
            isActive && revealedYears.size === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp-hint",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-hint-icon",
                        children: "⌖"
                    }, void 0, false, {
                        fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                        lineNumber: 731,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "exp-hint-text",
                        children: "find the hidden years"
                    }, void 0, false, {
                        fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                        lineNumber: 732,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/sections/ExperienceSection.tsx",
                lineNumber: 730,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/sections/ExperienceSection.tsx",
        lineNumber: 623,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$EntryScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/EntryScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParticleCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ParticleCanvas.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$ExperienceSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/sections/ExperienceSection.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    const [entered, setEntered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    /* Track window size so canvas components re-mount on resize */ const [resizeKey, setResizeKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setResizeKey((k)=>k + 1);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let timer;
        const debounced = ()=>{
            clearTimeout(timer);
            timer = setTimeout(handleResize, 300);
        };
        window.addEventListener("resize", debounced);
        return ()=>{
            window.removeEventListener("resize", debounced);
            clearTimeout(timer);
        };
    }, [
        handleResize
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: !entered ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$EntryScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onEnter: ()=>setEntered(true)
        }, `entry-${resizeKey}`, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 33,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParticleCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, `pc-${resizeKey}`, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$ExperienceSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, `exp-${resizeKey}`, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c7eb07e8._.js.map