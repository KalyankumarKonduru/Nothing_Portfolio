(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/EntryScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EntryScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$animejs$2f$dist$2f$modules$2f$animation$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/animejs/dist/modules/animation/animation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const glowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const phaseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("explore");
    const [phase, _setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("explore");
    const [foundCount, setFoundCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showHint, setShowHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const setPhase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EntryScreen.useCallback[setPhase]": (p)=>{
            phaseRef.current = p;
            _setPhase(p);
        }
    }["EntryScreen.useCallback[setPhase]"], []);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: -9999,
        y: -9999
    });
    const blocksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const blockElsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const layoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        cols: 0,
        rows: 0,
        blockSize: 0,
        step: 0,
        offsetX: 0,
        offsetY: 0
    });
    const k1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const k2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const k1Found = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const k2Found = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const nameBlocksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const glowsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Float32Array(0));
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const vibrateTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const loaderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* ─── Build grid on mount ─── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EntryScreen.useEffect": ()=>{
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
            /* Track which blocks are currently "active" (opacity > 0) so we can
       turn them off when cursor moves away without scanning everything. */ const activeSet = new Set();
            const glowLoop = {
                "EntryScreen.useEffect.glowLoop": ()=>{
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
                }
            }["EntryScreen.useEffect.glowLoop"];
            const glowDelay = setTimeout({
                "EntryScreen.useEffect.glowDelay": ()=>{
                    rafRef.current = requestAnimationFrame(glowLoop);
                }
            }["EntryScreen.useEffect.glowDelay"], 200);
            const hintTimer = setTimeout({
                "EntryScreen.useEffect.hintTimer": ()=>setShowHint(false)
            }["EntryScreen.useEffect.hintTimer"], 5000);
            return ({
                "EntryScreen.useEffect": ()=>{
                    cancelAnimationFrame(rafRef.current);
                    clearTimeout(glowDelay);
                    clearTimeout(hintTimer);
                    vibrateTimerRef.current?.pause();
                    container.innerHTML = "";
                }
            })["EntryScreen.useEffect"];
        }
    }["EntryScreen.useEffect"], []); // eslint-disable-line react-hooks/exhaustive-deps
    /* ─── Mouse / touch tracking ─── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EntryScreen.useEffect": ()=>{
            const handleMouse = {
                "EntryScreen.useEffect.handleMouse": (e)=>{
                    mouseRef.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }["EntryScreen.useEffect.handleMouse"];
            const handleTouch = {
                "EntryScreen.useEffect.handleTouch": (e)=>{
                    const t = e.touches[0];
                    if (t) {
                        mouseRef.current = {
                            x: t.clientX,
                            y: t.clientY
                        };
                    }
                }
            }["EntryScreen.useEffect.handleTouch"];
            window.addEventListener("mousemove", handleMouse);
            window.addEventListener("touchmove", handleTouch, {
                passive: true
            });
            window.addEventListener("touchstart", handleTouch, {
                passive: true
            });
            /* Escape key bypass — skip to particle canvas */ const handleKey = {
                "EntryScreen.useEffect.handleKey": (e)=>{
                    if (e.key === "Escape") {
                        onEnter();
                    }
                }
            }["EntryScreen.useEffect.handleKey"];
            window.addEventListener("keydown", handleKey);
            return ({
                "EntryScreen.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMouse);
                    window.removeEventListener("touchmove", handleTouch);
                    window.removeEventListener("touchstart", handleTouch);
                    window.removeEventListener("keydown", handleKey);
                }
            })["EntryScreen.useEffect"];
        }
    }["EntryScreen.useEffect"], [
        onEnter
    ]);
    /* ─── Cinematic Vibrate → Inhale → Burst sequence ─── */ const startVibrateBurst = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EntryScreen.useCallback[startVibrateBurst]": ()=>{
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
            const buildLoop = {
                "EntryScreen.useCallback[startVibrateBurst].buildLoop": (now)=>{
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
                        requestAnimationFrame({
                            "EntryScreen.useCallback[startVibrateBurst].buildLoop": ()=>{
                                flash.style.opacity = "0";
                            }
                        }["EntryScreen.useCallback[startVibrateBurst].buildLoop"]);
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
                        const convergeLoop = {
                            "EntryScreen.useCallback[startVibrateBurst].buildLoop.convergeLoop": (now)=>{
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
                                    /* All particles arrived — completion flash → transition */ if (loaderRef.current) {
                                        loaderRef.current.style.transition = "opacity 250ms ease-out";
                                        loaderRef.current.style.opacity = "0";
                                    }
                                    flash.style.opacity = "0.85";
                                    flash.style.transition = "opacity 700ms cubic-bezier(0.16, 1, 0.3, 1)";
                                    requestAnimationFrame({
                                        "EntryScreen.useCallback[startVibrateBurst].buildLoop.convergeLoop": ()=>{
                                            flash.style.opacity = "0";
                                        }
                                    }["EntryScreen.useCallback[startVibrateBurst].buildLoop.convergeLoop"]);
                                    setTimeout({
                                        "EntryScreen.useCallback[startVibrateBurst].buildLoop.convergeLoop": ()=>{
                                            flash.remove();
                                            onEnter();
                                        }
                                    }["EntryScreen.useCallback[startVibrateBurst].buildLoop.convergeLoop"], 300);
                                    return;
                                }
                                shakeRAF = requestAnimationFrame(convergeLoop);
                            }
                        }["EntryScreen.useCallback[startVibrateBurst].buildLoop.convergeLoop"];
                        shakeRAF = requestAnimationFrame(convergeLoop);
                    }
                }
            }["EntryScreen.useCallback[startVibrateBurst].buildLoop"];
            shakeRAF = requestAnimationFrame(buildLoop);
            /* Store a pause-able handle */ vibrateTimerRef.current = {
                pause: ({
                    "EntryScreen.useCallback[startVibrateBurst]": ()=>{
                        cancelAnimationFrame(shakeRAF);
                        flash.remove();
                        container.style.transform = "";
                    }
                })["EntryScreen.useCallback[startVibrateBurst]"]
            };
        }
    }["EntryScreen.useCallback[startVibrateBurst]"], [
        onEnter
    ]);
    /* ─── Click handler ─── */ const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EntryScreen.useCallback[handleClick]": (e)=>{
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
            const revealK = {
                "EntryScreen.useCallback[handleClick].revealK": (isK1)=>{
                    const kSet = isK1 ? k1Ref.current : k2Ref.current;
                    const kEls = [];
                    blockElsRef.current.forEach({
                        "EntryScreen.useCallback[handleClick].revealK": (el, i)=>{
                            const b = blocksRef.current[i];
                            if (kSet.has(`${b.gx},${b.gy}`)) {
                                kEls.push(el);
                                el.style.opacity = "1";
                            }
                        }
                    }["EntryScreen.useCallback[handleClick].revealK"]);
                    /* Pop-out with elastic easing */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$animejs$2f$dist$2f$modules$2f$animation$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(kEls, {
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
            }["EntryScreen.useCallback[handleClick].revealK"];
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
        }
    }["EntryScreen.useCallback[handleClick]"], [
        setPhase,
        startVibrateBurst
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `entry${phase === "vibrate" ? " phase-vibrate" : ""}${phase === "converge" ? " phase-converge" : ""}`,
        onClick: handleClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: gridRef,
                className: "entry__grid"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 814,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: loaderRef,
                className: "entry__loader",
                style: {
                    display: 'none'
                },
                children: "0%"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 817,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: glowRef,
                className: "entry__cursor-glow"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 820,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__overlay",
                children: [
                    showHint && phase === "explore" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "entry__hint",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "entry__hint-icon",
                                children: "⌖"
                            }, void 0, false, {
                                fileName: "[project]/app/components/EntryScreen.tsx",
                                lineNumber: 826,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "entry__hint-text",
                                children: "find the hidden K's"
                            }, void 0, false, {
                                fileName: "[project]/app/components/EntryScreen.tsx",
                                lineNumber: 827,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/EntryScreen.tsx",
                        lineNumber: 825,
                        columnNumber: 11
                    }, this),
                    (phase === "explore" || phase === "found1") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "entry__found",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `entry__found-dot ${foundCount >= 1 ? "lit" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/app/components/EntryScreen.tsx",
                                lineNumber: 835,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `entry__found-dot ${foundCount >= 2 ? "lit" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/app/components/EntryScreen.tsx",
                                lineNumber: 838,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/EntryScreen.tsx",
                        lineNumber: 834,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "entry__coord",
                        children: "47.3769° N, 8.5417° E"
                    }, void 0, false, {
                        fileName: "[project]/app/components/EntryScreen.tsx",
                        lineNumber: 844,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "entry__version",
                        children: "v0.0.1"
                    }, void 0, false, {
                        fileName: "[project]/app/components/EntryScreen.tsx",
                        lineNumber: 845,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 823,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__led entry__led--top"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 849,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__led entry__led--bottom"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 850,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__led entry__led--left"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 851,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__led entry__led--right"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 852,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__glyph-corner entry__glyph-corner--tl"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 855,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__glyph-corner entry__glyph-corner--tr"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 856,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__glyph-corner entry__glyph-corner--bl"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 857,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry__glyph-corner entry__glyph-corner--br"
            }, void 0, false, {
                fileName: "[project]/app/components/EntryScreen.tsx",
                lineNumber: 858,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/EntryScreen.tsx",
        lineNumber: 809,
        columnNumber: 5
    }, this);
}
_s(EntryScreen, "VxwS85G5HHyXOiZ6iqFTiJpSvWk=");
_c = EntryScreen;
var _c;
__turbopack_context__.k.register(_c, "EntryScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/sections/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
;
const HeroSection = {
    label: "00 // hero",
    lines: [
        "KALYAN KUMAR",
        "KONDURU",
        "",
        "full-stack software engineer",
        "react · typescript · java · python · go"
    ],
    fontSizeBase: 32,
    lineHeight: 1.7,
    letterSpacing: 3
};
const __TURBOPACK__default__export__ = HeroSection;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/sections/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
;
const AboutSection = {
    label: "01 // about",
    lines: [
        "// about",
        "",
        "3+ years building production",
        "web applications end-to-end.",
        "",
        "clinical AI tools with MCP",
        "servers and RAG pipelines.",
        "",
        "SaaS platforms — 2,400+ users.",
        "e-commerce — 12k+ SKUs.",
        "",
        "docker, kubernetes, terraform,",
        "AWS across the full lifecycle.",
        "",
        "MS Computer Science — Purdue."
    ],
    fontSizeBase: 17,
    lineHeight: 1.6,
    letterSpacing: 1
};
const __TURBOPACK__default__export__ = AboutSection;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/sections/ExperienceSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
;
const ExperienceSection = {
    label: "02 // experience",
    lines: [
        "// experience",
        "",
        "medical informatics eng. — 2025",
        "built MedQuery, clinical AI assistant.",
        "3 MCP servers, 28 medical tools.",
        "BioClinicalBERT entity extraction.",
        "patient analytics dashboard in React.",
        "6 Docker services, k8s autoscaler in Go.",
        "",
        "accenture, SE — 2022-2023",
        "SaaS platform, React/TS frontend.",
        "14 REST endpoints, Spring Boot backend.",
        "load time 4.2s → 1.6s.",
        "87% test coverage before first deploy.",
        "",
        "accenture, ASE — 2021",
        "retail e-commerce, 12k SKUs.",
        "checkout flow, Stripe integration.",
        "page load 3.8s → 2.3s.",
        "140+ tests across cart and catalog."
    ],
    fontSizeBase: 15,
    lineHeight: 1.5,
    letterSpacing: 1
};
const __TURBOPACK__default__export__ = ExperienceSection;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/sections/ProjectsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
;
const ProjectsSection = {
    label: "03 // projects",
    lines: [
        "// projects",
        "",
        "serverless event pipeline — AWS",
        "Lambda (Go), API Gateway, DynamoDB.",
        "CloudFormation IaC, CloudWatch.",
        "",
        "concurrent job scheduler — Go",
        "goroutines + channels, Chi router.",
        "1,200 jobs/min, zero drops.",
        "",
        "next.js e-commerce storefront",
        "SSR/ISR, Redux, Go (Gin) API.",
        "98.5 Lighthouse score on Vercel.",
        "",
        "graphql product search — Go",
        "MongoDB, Apollo Client, cursor",
        "pagination, <100ms responses."
    ],
    fontSizeBase: 16,
    lineHeight: 1.6,
    letterSpacing: 1
};
const __TURBOPACK__default__export__ = ProjectsSection;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/sections/SkillsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
;
const SkillsSection = {
    label: "04 // skills",
    lines: [
        "// tech_stack",
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
        "// ai + testing",
        "OpenAI / LangChain / RAG / HuggingFace",
        "Jest / Cypress / Playwright / k6"
    ],
    fontSizeBase: 16,
    lineHeight: 1.65,
    letterSpacing: 2
};
const __TURBOPACK__default__export__ = SkillsSection;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/sections/ContactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
;
const ContactSection = {
    label: "05 // contact",
    lines: [
        "// let's connect",
        "",
        "kkalyankumar.dev@gmail.com",
        "",
        "github.com/kalyankumar",
        "linkedin.com/in/kalyankumar",
        "",
        "morganville, NJ",
        "",
        "// available for opportunities"
    ],
    fontSizeBase: 19,
    lineHeight: 1.8,
    letterSpacing: 2
};
const __TURBOPACK__default__export__ = ContactSection;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/sections/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/sections/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/sections/AboutSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$ExperienceSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/sections/ExperienceSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$ProjectsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/sections/ProjectsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$SkillsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/sections/SkillsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/sections/ContactSection.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/sections/AboutSection.tsx [app-client] (ecmascript) <export default as AboutSection>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/sections/AboutSection.tsx [app-client] (ecmascript)");
}),
"[project]/app/components/sections/ExperienceSection.tsx [app-client] (ecmascript) <export default as ExperienceSection>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExperienceSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$ExperienceSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$ExperienceSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/sections/ExperienceSection.tsx [app-client] (ecmascript)");
}),
"[project]/app/components/sections/ProjectsSection.tsx [app-client] (ecmascript) <export default as ProjectsSection>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectsSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$ProjectsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$ProjectsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/sections/ProjectsSection.tsx [app-client] (ecmascript)");
}),
"[project]/app/components/sections/SkillsSection.tsx [app-client] (ecmascript) <export default as SkillsSection>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkillsSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$SkillsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$SkillsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/sections/SkillsSection.tsx [app-client] (ecmascript)");
}),
"[project]/app/components/sections/ContactSection.tsx [app-client] (ecmascript) <export default as ContactSection>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/sections/ContactSection.tsx [app-client] (ecmascript)");
}),
"[project]/app/components/ParticleCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticleCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typed$2e$js$2f$dist$2f$typed$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/typed.js/dist/typed.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/sections/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AboutSection$3e$__ = __turbopack_context__.i("[project]/app/components/sections/AboutSection.tsx [app-client] (ecmascript) <export default as AboutSection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$ExperienceSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExperienceSection$3e$__ = __turbopack_context__.i("[project]/app/components/sections/ExperienceSection.tsx [app-client] (ecmascript) <export default as ExperienceSection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$ProjectsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ProjectsSection$3e$__ = __turbopack_context__.i("[project]/app/components/sections/ProjectsSection.tsx [app-client] (ecmascript) <export default as ProjectsSection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$SkillsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkillsSection$3e$__ = __turbopack_context__.i("[project]/app/components/sections/SkillsSection.tsx [app-client] (ecmascript) <export default as SkillsSection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ContactSection$3e$__ = __turbopack_context__.i("[project]/app/components/sections/ContactSection.tsx [app-client] (ecmascript) <export default as ContactSection>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* ═══════════════════════════════════════
   Section setup — hero (index 0) uses Typed.js overlay,
   remaining sections use particle dot-matrix text.
   ═══════════════════════════════════════ */ const HERO_LABEL = "00 // hero";
const TEXT_SECTIONS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AboutSection$3e$__["AboutSection"],
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$ExperienceSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExperienceSection$3e$__["ExperienceSection"],
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$ProjectsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ProjectsSection$3e$__["ProjectsSection"],
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$SkillsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkillsSection$3e$__["SkillsSection"],
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ContactSection$3e$__["ContactSection"]
];
const ALL_LABELS = [
    HERO_LABEL,
    ...TEXT_SECTIONS.map((s)=>s.label)
];
const TOTAL_SECTIONS = ALL_LABELS.length; /* 6 */ 
/* ═══════════════════════════════════════
   Text-to-pixel sampling (fine grid)
   ═══════════════════════════════════════ */ function sampleTextPixels(lines, fontSize, lineHeight, letterSpacing, canvasW, canvasH, gridStep, fontFamily) {
    const off = document.createElement("canvas");
    off.width = canvasW;
    off.height = canvasH;
    const octx = off.getContext("2d");
    octx.fillStyle = "#fff";
    octx.font = `400 ${fontSize}px ${fontFamily}`;
    octx.textBaseline = "top";
    try {
        octx.letterSpacing = `${letterSpacing}px`;
    } catch  {
    /* noop */ }
    const lh = fontSize * lineHeight;
    const totalH = lines.length * lh;
    const startY = (canvasH - totalH) / 2;
    for(let i = 0; i < lines.length; i++){
        const line = lines[i];
        if (!line) continue;
        const m = octx.measureText(line);
        octx.fillText(line, (canvasW - m.width) / 2, startY + i * lh);
    }
    const img = octx.getImageData(0, 0, canvasW, canvasH);
    const set = new Set();
    const cols = Math.floor(canvasW / gridStep);
    const rows = Math.floor(canvasH / gridStep);
    for(let gy = 0; gy < rows; gy++){
        for(let gx = 0; gx < cols; gx++){
            const cx = gx * gridStep + Math.floor(gridStep / 2);
            const cy = gy * gridStep + Math.floor(gridStep / 2);
            if (cx < canvasW && cy < canvasH) {
                const idx = (cy * canvasW + cx) * 4;
                if (img.data[idx + 3] > 40) {
                    set.add(`${gx},${gy}`);
                }
            }
        }
    }
    return set;
}
/* ═══════════════════════════════════════
   Easing
   ═══════════════════════════════════════ */ function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function ParticleCanvas() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const indicatorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const typedElRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroOverlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroVisibleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const [, forceRender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    /* Track hero visibility via ref (fast) + occasional React state for DOM class */ const setHeroVisible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticleCanvas.useCallback[setHeroVisible]": (v)=>{
            if (heroVisibleRef.current === v) return;
            heroVisibleRef.current = v;
            /* Directly toggle class for zero-lag response */ heroOverlayRef.current?.classList.toggle("visible", v);
        }
    }["ParticleCanvas.useCallback[setHeroVisible]"], []);
    /* ── Typed.js for hero section ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleCanvas.useEffect": ()=>{
            if (!typedElRef.current) return;
            const typed = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typed$2e$js$2f$dist$2f$typed$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](typedElRef.current, {
                strings: [
                    "Hi!",
                    "My name is Kalyankumar",
                    "I build things for the upcoming AI world!"
                ],
                typeSpeed: 60,
                backSpeed: 40,
                loop: true,
                showCursor: true,
                cursorChar: "|"
            });
            return ({
                "ParticleCanvas.useEffect": ()=>typed.destroy()
            })["ParticleCanvas.useEffect"];
        }
    }["ParticleCanvas.useEffect"], []);
    /* ── Particle canvas ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleCanvas.useEffect": ()=>{
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
            /* ── Fine dot-matrix grid — small enough for readable text ── */ const dotSize = W < 600 ? 3 : W < 1024 ? 4 : 5;
            const gap = 2;
            const gridStep = dotSize + gap;
            const cols = Math.floor(W / gridStep);
            const rows = Math.floor(H / gridStep);
            const oX = (W - cols * gridStep + gap) / 2;
            const oY = (H - rows * gridStep + gap) / 2;
            const N = cols * rows;
            /* ── Pre-render dot sprite for performance (~20K drawImage > ~20K arc) ── */ const spriteSize = dotSize + 2; /* 1px margin each side */ 
            const dotSprite = document.createElement("canvas");
            dotSprite.width = spriteSize * dpr;
            dotSprite.height = spriteSize * dpr;
            const dctx = dotSprite.getContext("2d");
            dctx.scale(dpr, dpr);
            dctx.fillStyle = "#ffffff";
            dctx.beginPath();
            dctx.arc(spriteSize / 2, spriteSize / 2, dotSize / 2, 0, Math.PI * 2);
            dctx.fill();
            /* Enable scrolling */ document.body.style.overflow = "auto";
            document.body.style.overflowX = "hidden";
            document.body.style.height = `${TOTAL_SECTIONS * 100}vh`;
            /* Wait for fonts, then sample text and start animation */ document.fonts.ready.then({
                "ParticleCanvas.useEffect": ()=>{
                    const computedFont = getComputedStyle(document.documentElement).getPropertyValue("--font-mono").trim();
                    const fontFamily = computedFont ? `${computedFont}, 'JetBrains Mono', monospace` : "'JetBrains Mono', 'SF Mono', monospace";
                    /* ── Build targets for all 6 sections ── */ const allTargets = [];
                    /* Section 0: hero — all ambient (Typed.js handles display) */ const heroTargets = [];
                    for(let gy = 0; gy < rows; gy++){
                        for(let gx = 0; gx < cols; gx++){
                            heroTargets.push({
                                x: oX + gx * gridStep + dotSize / 2,
                                y: oY + gy * gridStep + dotSize / 2,
                                isText: false
                            });
                        }
                    }
                    allTargets.push(heroTargets);
                    /* Sections 1–5: particle dot-matrix text */ for (const section of TEXT_SECTIONS){
                        const fontSize = Math.max(10, Math.round(section.fontSizeBase * Math.min(1, W / 1440)));
                        const textSet = sampleTextPixels(section.lines, fontSize, section.lineHeight, section.letterSpacing, W, H, gridStep, fontFamily);
                        const targets = [];
                        for(let gy = 0; gy < rows; gy++){
                            for(let gx = 0; gx < cols; gx++){
                                targets.push({
                                    x: oX + gx * gridStep + dotSize / 2,
                                    y: oY + gy * gridStep + dotSize / 2,
                                    isText: textSet.has(`${gx},${gy}`)
                                });
                            }
                        }
                        allTargets.push(targets);
                    }
                    /* ── Create particles at center ── */ const particles = [];
                    for(let i = 0; i < N; i++){
                        particles.push({
                            x: cX + (Math.random() - 0.5) * 8,
                            y: cY + (Math.random() - 0.5) * 8,
                            opacity: 0,
                            targets: allTargets.map({
                                "ParticleCanvas.useEffect": (st)=>st[i]
                            }["ParticleCanvas.useEffect"])
                        });
                    }
                    /* ── Animation state ── */ let lastScrollY = 0;
                    let scrollVelocity = 0;
                    let entryPhase = true;
                    let entryStart = 0;
                    const ENTRY_DUR = 2000;
                    let time = 0;
                    let currentLabel = ALL_LABELS[0];
                    let prevActiveIdx = 0;
                    const dotEls = indicatorRef.current?.querySelectorAll(".pc-dot");
                    /* ── RAF loop ── */ const tick = {
                        "ParticleCanvas.useEffect.tick": (now)=>{
                            time = now * 0.001;
                            const scrollY = window.scrollY;
                            scrollVelocity = scrollVelocity * 0.85 + Math.abs(scrollY - lastScrollY) * 0.15;
                            lastScrollY = scrollY;
                            const progress = scrollY / H;
                            const sectionA = Math.min(Math.floor(progress), TOTAL_SECTIONS - 1);
                            const sectionB = Math.min(sectionA + 1, TOTAL_SECTIONS - 1);
                            const t = sectionA === sectionB ? 0 : Math.min(1, progress - sectionA);
                            const eased = easeInOutCubic(t);
                            const activeSec = t > 0.5 ? sectionB : sectionA;
                            /* Show/hide hero overlay */ if (activeSec !== prevActiveIdx) {
                                prevActiveIdx = activeSec;
                                setHeroVisible(activeSec === 0);
                            }
                            const chaos = Math.sin(t * Math.PI) * Math.min(scrollVelocity * 0.4, 20);
                            /* Update section label + dots */ const newLabel = ALL_LABELS[activeSec];
                            if (newLabel !== currentLabel) {
                                currentLabel = newLabel;
                                if (indicatorRef.current) {
                                    const labelEl = indicatorRef.current.querySelector(".pc-label");
                                    if (labelEl) labelEl.textContent = currentLabel;
                                }
                                dotEls?.forEach({
                                    "ParticleCanvas.useEffect.tick": (dot, idx)=>{
                                        dot.classList.toggle("active", idx === activeSec);
                                    }
                                }["ParticleCanvas.useEffect.tick"]);
                            }
                            /* ── Clear ── */ ctx.clearRect(0, 0, W, H);
                            /* ── Update & draw ── */ const halfSprite = spriteSize / 2;
                            for(let i = 0; i < N; i++){
                                const p = particles[i];
                                const fromT = p.targets[sectionA];
                                const toT = p.targets[sectionB];
                                let tgtX = fromT.x * (1 - eased) + toT.x * eased;
                                let tgtY = fromT.y * (1 - eased) + toT.y * eased;
                                const isTextA = fromT.isText;
                                const isTextB = toT.isText;
                                const opaA = isTextA ? 0.88 : 0.025;
                                const opaB = isTextB ? 0.88 : 0.025;
                                let tgtOpacity = opaA * (1 - eased) + opaB * eased;
                                if (chaos > 0.5) {
                                    tgtX += Math.sin(i * 0.37 + time * 3) * chaos;
                                    tgtY += Math.cos(i * 0.53 + time * 3) * chaos;
                                }
                                const centerPull = Math.sin(t * Math.PI) * 0.15;
                                tgtX = tgtX * (1 - centerPull) + cX * centerPull;
                                tgtY = tgtY * (1 - centerPull) + cY * centerPull;
                                if (entryPhase) {
                                    if (!entryStart) entryStart = now;
                                    const entryT = Math.min(1, (now - entryStart) / ENTRY_DUR);
                                    const stagger = i / N * 0.35;
                                    const pT = Math.max(0, Math.min(1, (entryT - stagger) / (1 - stagger)));
                                    const ee = 1 - Math.pow(1 - pT, 3);
                                    tgtX = cX + (tgtX - cX) * ee;
                                    tgtY = cY + (tgtY - cY) * ee;
                                    tgtOpacity *= ee;
                                    if (entryT >= 1) entryPhase = false;
                                }
                                p.x += (tgtX - p.x) * 0.065;
                                p.y += (tgtY - p.y) * 0.065;
                                p.opacity += (tgtOpacity - p.opacity) * 0.08;
                                p.x += Math.sin(time * 0.8 + i * 0.1) * 0.08;
                                p.y += Math.cos(time * 0.6 + i * 0.15) * 0.08;
                                /* Draw via pre-rendered sprite */ if (p.opacity > 0.005) {
                                    ctx.globalAlpha = p.opacity;
                                    ctx.drawImage(dotSprite, p.x - halfSprite, p.y - halfSprite, spriteSize, spriteSize);
                                }
                            }
                            rafRef.current = requestAnimationFrame(tick);
                        }
                    }["ParticleCanvas.useEffect.tick"];
                    rafRef.current = requestAnimationFrame(tick);
                }
            }["ParticleCanvas.useEffect"]);
            return ({
                "ParticleCanvas.useEffect": ()=>{
                    cancelAnimationFrame(rafRef.current);
                    document.body.style.overflow = "";
                    document.body.style.overflowX = "";
                    document.body.style.height = "";
                }
            })["ParticleCanvas.useEffect"];
        }
    }["ParticleCanvas.useEffect"], [
        setHeroVisible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "pc-canvas"
            }, void 0, false, {
                fileName: "[project]/app/components/ParticleCanvas.tsx",
                lineNumber: 401,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: heroOverlayRef,
                className: "pc-hero-overlay visible",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    ref: typedElRef,
                    className: "pc-hero-typed"
                }, void 0, false, {
                    fileName: "[project]/app/components/ParticleCanvas.tsx",
                    lineNumber: 405,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ParticleCanvas.tsx",
                lineNumber: 404,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pc-sections",
                children: ALL_LABELS.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "pc-section",
                        "data-section": i
                    }, i, false, {
                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                        lineNumber: 411,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/ParticleCanvas.tsx",
                lineNumber: 409,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: indicatorRef,
                className: "pc-indicator",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pc-label",
                        children: ALL_LABELS[0]
                    }, void 0, false, {
                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                        lineNumber: 417,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pc-dots",
                        children: ALL_LABELS.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `pc-dot${i === 0 ? " active" : ""}`
                            }, i, false, {
                                fileName: "[project]/app/components/ParticleCanvas.tsx",
                                lineNumber: 420,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/ParticleCanvas.tsx",
                        lineNumber: 418,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ParticleCanvas.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ParticleCanvas, "LLYKsyA1y1/a7b73HtsGqXxfBQk=");
_c = ParticleCanvas;
var _c;
__turbopack_context__.k.register(_c, "ParticleCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$EntryScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/EntryScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParticleCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ParticleCanvas.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Home() {
    _s();
    const [entered, setEntered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: !entered ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$EntryScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onEnter: ()=>setEntered(true)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 13,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParticleCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
_s(Home, "ZWFvFDZaFlODZYwGUMXg7XIOPyM=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_4ad519fb._.js.map