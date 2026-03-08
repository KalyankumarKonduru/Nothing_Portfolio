module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/components/EntryScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EntryScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$animejs$2f$dist$2f$modules$2f$animation$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/animejs/dist/modules/animation/animation.js [app-ssr] (ecmascript)");
"use client";
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
            /* Pop-out with elastic easing */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$animejs$2f$dist$2f$modules$2f$animation$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animate"])(kEls, {
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
                lineNumber: 828,
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
                lineNumber: 831,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: glowRef,
                className: "entry__cursor-glow"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 834,
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
                                lineNumber: 840,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "entry__hint-text",
                                children: "find the hidden K's"
                            }, void 0, false, {
                                fileName: "[project]/app/components/EntryScreen.tsx",
                                lineNumber: 841,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/EntryScreen.tsx",
                        lineNumber: 839,
                        columnNumber: 11
                    }, this),
                    (phase === "explore" || phase === "found1") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "entry__found",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `entry__found-dot ${foundCount >= 1 ? "lit" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/app/components/EntryScreen.tsx",
                                lineNumber: 849,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `entry__found-dot ${foundCount >= 2 ? "lit" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/app/components/EntryScreen.tsx",
                                lineNumber: 852,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/EntryScreen.tsx",
                        lineNumber: 848,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "entry__coord",
                        children: "47.3769° N, 8.5417° E"
                    }, void 0, false, {
                        fileName: "[project]/app/components/EntryScreen.tsx",
                        lineNumber: 858,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "entry__version",
                        children: "v0.0.1"
                    }, void 0, false, {
                        fileName: "[project]/app/components/EntryScreen.tsx",
                        lineNumber: 859,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 837,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__led entry__led--top"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 863,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__led entry__led--bottom"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 864,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__led entry__led--left"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 865,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__led entry__led--right"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 866,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__glyph-corner entry__glyph-corner--tl"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 869,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__glyph-corner entry__glyph-corner--tr"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 870,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__glyph-corner entry__glyph-corner--bl"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 871,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__glyph-corner entry__glyph-corner--br"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 872,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/EntryScreen.tsx",
        lineNumber: 823,
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
    "stampText",
    ()=>stampText,
    "stampTextScaled",
    ()=>stampTextScaled,
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
}),
"[project]/app/components/ParticleCanvas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticleCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pixel$2d$font$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/pixel-font.ts [app-ssr] (ecmascript)");
"use client";
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
    },
    {
        label: "01 // about",
        lineStep: 9,
        lines: [
            "// about",
            "",
            "3+ years building production",
            "web applications end-to-end.",
            "",
            "clinical AI tools with MCP",
            "servers and RAG pipelines.",
            "",
            "SaaS platforms - 2,400+ users.",
            "e-commerce - 12k+ SKUs.",
            "",
            "docker, kubernetes, terraform,",
            "AWS across the full lifecycle.",
            "",
            "MS Computer Science - Purdue."
        ]
    },
    {
        label: "02 // experience",
        lineStep: 8,
        lines: [
            "// experience",
            "",
            "medical informatics eng. - 2025",
            "built MedQuery, clinical AI.",
            "3 MCP servers, 28 medical tools.",
            "BioClinicalBERT extraction.",
            "patient analytics React dashboard.",
            "6 Docker services, k8s in Go.",
            "",
            "accenture, SE - 2022-2023",
            "SaaS platform, React/TS frontend.",
            "14 REST APIs, Spring Boot backend.",
            "load time 4.2s to 1.6s.",
            "87% test coverage, first deploy.",
            "",
            "accenture, ASE - 2021",
            "retail e-commerce, 12k SKUs.",
            "checkout flow, Stripe integration.",
            "page load 3.8s to 2.3s.",
            "140+ tests, cart and catalog."
        ]
    },
    {
        label: "03 // projects",
        lineStep: 8,
        lines: [
            "// projects",
            "",
            "serverless event pipeline - AWS",
            "Lambda (Go), API Gateway, DynamoDB.",
            "CloudFormation IaC, CloudWatch.",
            "",
            "concurrent job scheduler - Go",
            "goroutines + channels, Chi router.",
            "1,200 jobs/min, zero drops.",
            "",
            "next.js e-commerce storefront",
            "SSR/ISR, Redux, Go (Gin) API.",
            "98.5 Lighthouse score on Vercel.",
            "",
            "graphql product search - Go",
            "MongoDB, Apollo Client, cursor",
            "pagination, <100ms responses."
        ]
    },
    {
        label: "04 // skills",
        lineStep: 8,
        lines: [
            "// tech stack",
            "",
            "React / Next.js / Redux / Zustand",
            "TypeScript / JavaScript (ES6+)",
            "Java / Spring Boot / Hibernate",
            "Python / Flask / FastAPI",
            "Go / Gin / Chi",
            "",
            "Docker / Kubernetes / Helm",
            "Terraform / AWS / GKE",
            "PostgreSQL / MongoDB / Redis",
            "GraphQL / REST / OpenAPI",
            "",
            "// AI + testing",
            "OpenAI / LangChain / RAG",
            "Jest / Cypress / Playwright / k6"
        ]
    },
    {
        label: "05 // contact",
        lineStep: 9,
        lines: [
            "// lets connect",
            "",
            "kkalyankumar.dev@gmail.com",
            "",
            "github.com/kalyankumar",
            "linkedin.com/in/kalyankumar",
            "",
            "morganville, NJ",
            "",
            "// available for opportunities"
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
        /* ── Pre-render circle sprite ── */ const spriteSize = blockSize + 2;
        const dotSprite = document.createElement("canvas");
        dotSprite.width = spriteSize * dpr;
        dotSprite.height = spriteSize * dpr;
        const dctx = dotSprite.getContext("2d");
        dctx.scale(dpr, dpr);
        dctx.fillStyle = "#ffffff";
        dctx.beginPath();
        dctx.arc(spriteSize / 2, spriteSize / 2, halfBlock, 0, Math.PI * 2);
        dctx.fill();
        /* Enable scrolling */ document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";
        document.body.style.height = `${TOTAL * 100}vh`;
        /* ── Stamp pixel-art text for each section ── */ const sectionStamps = SECTIONS.map((sec, idx)=>{
            if (idx === 0) {
                /* Hero: big scaled letters */ return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pixel$2d$font$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stampLinesScaled"])(sec.lines, cols, rows, heroScale);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pixel$2d$font$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stampLines"])(sec.lines, cols, rows, sec.lineStep);
        });
        /* ── Build targets for each section ── */ const allTargets = sectionStamps.map((stamp)=>{
            const targets = [];
            for(let gy = 0; gy < rows; gy++){
                for(let gx = 0; gx < cols; gx++){
                    targets.push({
                        x: oX + gx * step + halfBlock,
                        y: oY + gy * step + halfBlock,
                        isText: stamp.has(`${gx},${gy}`)
                    });
                }
            }
            return targets;
        });
        /* ── Create particles at center ── */ const particles = [];
        const trailData = [];
        /* First pass: gather all hero-text particle indices + compute angles */ const heroTextIndices = [];
        for(let i = 0; i < N; i++){
            const heroT = allTargets[0][i];
            if (heroT.isText) heroTextIndices.push(i);
        }
        /* Sort hero-text particles by angle (creates directional streams) then
       within similar angles, by distance (inner first → trailing outward) */ heroTextIndices.sort((a, b)=>{
            const ha = allTargets[0][a];
            const hb = allTargets[0][b];
            const angA = Math.atan2(ha.y - cY, ha.x - cX);
            const angB = Math.atan2(hb.y - cY, hb.x - cX);
            /* Quantize angle to ~24 directional bands for stream grouping */ const bandA = Math.round(angA * 24 / (2 * Math.PI));
            const bandB = Math.round(angB * 24 / (2 * Math.PI));
            if (bandA !== bandB) return bandA - bandB;
            /* Same band: inner particles first */ const dA = Math.hypot(ha.x - cX, ha.y - cY);
            const dB = Math.hypot(hb.x - cX, hb.y - cY);
            return dA - dB;
        });
        /* Assign sequential delay to each hero-text particle (stream stagger) */ const TRAIL_TOTAL_DUR = 3200; /* total animation window */ 
        const STAGGER_WINDOW = 2200; /* spread spawns over this ms */ 
        const FLIGHT_DUR_MIN = 600;
        const FLIGHT_DUR_MAX = 1100;
        const heroTextIndexToOrder = new Map();
        heroTextIndices.forEach((idx, order)=>{
            heroTextIndexToOrder.set(idx, order);
        });
        const totalHeroText = heroTextIndices.length;
        for(let i = 0; i < N; i++){
            const heroT = allTargets[0][i];
            const dx = heroT.x - cX;
            const dy = heroT.y - cY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx);
            const isText = heroT.isText;
            let delay = 0;
            let duration = FLIGHT_DUR_MAX;
            if (isText && heroTextIndexToOrder.has(i)) {
                /* Sequential stagger: each dot spawns slightly after previous */ const order = heroTextIndexToOrder.get(i);
                delay = order / Math.max(1, totalHeroText - 1) * STAGGER_WINDOW;
                /* Closer = slightly faster flight */ const normD = dist / Math.max(1, Math.hypot(W / 2, H / 2));
                duration = FLIGHT_DUR_MIN + normD * (FLIGHT_DUR_MAX - FLIGHT_DUR_MIN);
            }
            /* Curved bezier control point — perpendicular offset for arcing path */ const perpX = -dy / (dist || 1);
            const perpY = dx / (dist || 1);
            const curveAmt = (Math.random() - 0.5) * dist * 0.35;
            const ctrlX = (cX + heroT.x) / 2 + perpX * curveAmt;
            const ctrlY = (cY + heroT.y) / 2 + perpY * curveAmt;
            trailData.push({
                isHeroText: isText,
                angle,
                dist,
                delay,
                duration,
                ctrlX,
                ctrlY
            });
            const heroTarget = allTargets[0][i];
            const isHeroText = heroTarget.isText;
            particles.push({
                /* Hero-text particles start at center (they'll fly to target).
           Ambient particles start at their hero target position (they
           just fade in place — no expanding "paper grid" effect). */ x: isHeroText ? cX + (Math.random() - 0.5) * 4 : heroTarget.x,
                y: isHeroText ? cY + (Math.random() - 0.5) * 4 : heroTarget.y,
                opacity: 0,
                targets: allTargets.map((st)=>st[i])
            });
        }
        /* ── Animation state ── */ let lastScrollY = 0;
        let scrollVelocity = 0;
        let entryPhase = true;
        let entryStart = 0;
        const ENTRY_DUR = TRAIL_TOTAL_DUR;
        let time = 0;
        let currentLabel = SECTIONS[0].label;
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
            /* ── Is hero settled? (for static dots) ── */ const isHeroSettled = activeSec === 0 && t < 0.01 && !entryPhase;
            /* ── Update hero overlay, bottom bar & nav visibility ── */ /* During entry animation, keep overlays hidden. Fade them in
         smoothly once the trailing stream is nearly complete. */ let overlayFade = 1;
            if (entryPhase && entryStart) {
                const elapsed = performance.now() - entryStart;
                /* Start fading in overlays at 70% of entry duration */ overlayFade = Math.min(1, Math.max(0, (elapsed - ENTRY_DUR * 0.7) / (ENTRY_DUR * 0.3)));
            } else if (entryPhase) {
                overlayFade = 0;
            }
            const heroOpacity = (activeSec === 0 ? Math.max(0, 1 - t * 3) : 0) * overlayFade;
            if (heroOverlayRef.current) {
                heroOverlayRef.current.style.opacity = String(heroOpacity);
            }
            if (bottomBarRef.current) {
                bottomBarRef.current.style.opacity = String(heroOpacity);
            }
            if (navRef.current) {
                navRef.current.style.opacity = String(overlayFade);
            }
            if (indicatorRef.current) {
                indicatorRef.current.style.opacity = String(overlayFade);
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
            /* ── Clear ── */ ctx.clearRect(0, 0, W, H);
            /* ── Update & draw ── */ for(let i = 0; i < N; i++){
                const p = particles[i];
                const fromT = p.targets[sectionA];
                const toT = p.targets[sectionB];
                let tgtX = fromT.x * (1 - eased) + toT.x * eased;
                let tgtY = fromT.y * (1 - eased) + toT.y * eased;
                /* Text blocks: bright. Ambient: very dim. */ const opaA = fromT.isText ? 0.88 : 0.025;
                const opaB = toT.isText ? 0.88 : 0.025;
                let tgtOpacity = opaA * (1 - eased) + opaB * eased;
                /* Organic noise during transition */ if (chaos > 0.5) {
                    tgtX += Math.sin(i * 0.37 + time * 3) * chaos;
                    tgtY += Math.cos(i * 0.53 + time * 3) * chaos;
                }
                /* Center pull during mid-transition */ const centerPull = Math.sin(t * Math.PI) * 0.15;
                tgtX = tgtX * (1 - centerPull) + cX * centerPull;
                tgtY = tgtY * (1 - centerPull) + cY * centerPull;
                /* Entry animation: TRAILING STREAM
           Hero-text particles spawn sequentially with staggered delays
           and fly along curved bezier paths from center to their target,
           creating flowing streams of dots that chase each other.
           Ambient (non-text) particles simply fade in quietly. */ if (entryPhase) {
                    if (!entryStart) entryStart = now;
                    const elapsed = now - entryStart;
                    const td = trailData[i];
                    if (td.isHeroText) {
                        /* Staggered trail: each dot starts at its own delay */ const localT = elapsed - td.delay;
                        if (localT < 0) {
                            /* Not spawned yet — invisible at center */ tgtX = cX;
                            tgtY = cY;
                            tgtOpacity = 0;
                        } else {
                            const flightT = Math.min(1, localT / td.duration);
                            /* easeOutCubic for smooth deceleration into position */ const e = 1 - Math.pow(1 - flightT, 3);
                            /* Quadratic bezier: center → ctrl → target */ const u = 1 - e;
                            const heroT = p.targets[0];
                            const bx = u * u * cX + 2 * u * e * td.ctrlX + e * e * heroT.x;
                            const by = u * u * cY + 2 * u * e * td.ctrlY + e * e * heroT.y;
                            tgtX = bx;
                            tgtY = by;
                            /* Opacity: fade in quickly, slight trail glow during flight */ const fadeIn = Math.min(1, localT / 150);
                            /* Bright during flight, settle to final */ const flightGlow = flightT < 0.7 ? 0.95 : 0.88;
                            tgtOpacity = fadeIn * flightGlow;
                            /* Scale effect: slightly larger during flight, shrink on landing */ // (handled by the sprite — we boost opacity for glow illusion)
                            if (flightT < 0.85) {
                                /* Trailing tail: recent-spawned particles (the "tail") glow less */ tgtOpacity *= 0.7 + flightT * 0.3;
                            }
                        }
                    } else {
                        /* Non-text ambient particles: stay at their target positions
               but invisible. Fade in opacity only near the end of the
               trail animation so there's no visible "paper grid" expanding
               from center. */ const ambientFade = Math.min(1, Math.max(0, (elapsed - ENTRY_DUR * 0.65) / (ENTRY_DUR * 0.35)));
                        /* tgtX/tgtY stay as-is (already at correct hero target) */ tgtOpacity *= ambientFade;
                    }
                    if (elapsed >= ENTRY_DUR) entryPhase = false;
                }
                /* ── Movement: static on hero, tight tracking during entry,
              organic drift elsewhere ── */ if (entryPhase && trailData[i].isHeroText) {
                    /* During trail entry: snap tightly to bezier path */ p.x += (tgtX - p.x) * 0.45;
                    p.y += (tgtY - p.y) * 0.45;
                } else if (isHeroSettled) {
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
                p.opacity += (tgtOpacity - p.opacity) * 0.08;
                /* Draw via pre-rendered sprite */ if (p.opacity > 0.005) {
                    ctx.globalAlpha = p.opacity;
                    ctx.drawImage(dotSprite, p.x - halfSprite, p.y - halfSprite, spriteSize, spriteSize);
                }
            }
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return ()=>{
            cancelAnimationFrame(rafRef.current);
            document.body.style.overflow = "";
            document.body.style.overflowX = "";
            document.body.style.height = "";
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "pc-canvas"
            }, void 0, false, {
                fileName: "[project]/app/components/ParticleCanvas.tsx",
                lineNumber: 573,
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
                                lineNumber: 578,
                                columnNumber: 13
                            }, this),
                            "DEV"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                        lineNumber: 577,
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
                                        lineNumber: 582,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://linkedin.com/in/kalyankumar",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "LINKEDIN"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                                        lineNumber: 589,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/resume.pdf",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "RESUME"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                                        lineNumber: 596,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ParticleCanvas.tsx",
                                lineNumber: 581,
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
                                        lineNumber: 604,
                                        columnNumber: 13
                                    }, this),
                                    " KKALYANKUMAR.DEV"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ParticleCanvas.tsx",
                                lineNumber: 600,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                        lineNumber: 580,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ParticleCanvas.tsx",
                lineNumber: 576,
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
                    lineNumber: 611,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ParticleCanvas.tsx",
                lineNumber: 610,
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
                        lineNumber: 623,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pc-available",
                        children: "AVAILABLE FOR OPPORTUNITIES"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                        lineNumber: 624,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ParticleCanvas.tsx",
                lineNumber: 622,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pc-sections",
                children: SECTIONS.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "pc-section",
                        "data-section": i
                    }, i, false, {
                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                        lineNumber: 630,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/ParticleCanvas.tsx",
                lineNumber: 628,
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
                        lineNumber: 636,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pc-dots",
                        children: SECTIONS.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `pc-dot${i === 0 ? " active" : ""}`
                            }, i, false, {
                                fileName: "[project]/app/components/ParticleCanvas.tsx",
                                lineNumber: 639,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                        lineNumber: 637,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ParticleCanvas.tsx",
                lineNumber: 635,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
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
"use client";
;
;
;
;
function Home() {
    const [entered, setEntered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: !entered ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$EntryScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onEnter: ()=>setEntered(true)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 13,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParticleCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 15,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__843d3370._.js.map