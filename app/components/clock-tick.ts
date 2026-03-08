/* ─── Clock tick sound — Web Audio API synthesis ───
   Mimics the mechanical "tick" of a clock's second-hand escapement.
   Shared AudioContext across components for efficiency. */

let audioCtx: AudioContext | null = null;

function ensureCtx(): AudioContext {
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

/** Call from a user-gesture handler (click/touch) to unlock audio on mobile. */
export function initAudio() {
  ensureCtx();
}

export function playClockTick(volume = 0.12) {
  const ctx = ensureCtx();
  const t = ctx.currentTime;

  /* Resonant body — the "tick" of the escapement mechanism */
  const osc = ctx.createOscillator();
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

  /* Sharp click — the mechanical impact */
  const click = ctx.createOscillator();
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
