// src/components/CanvasBackground.jsx
import React, { useRef, useEffect } from "react";

/**
 * Canvas dynamic blur blobs background (Type A)
 * - Responsive to DPR (devicePixelRatio)
 * - Several layered radial gradients + large blur + composite ops to match Tailwind blob visuals
 * - Small roaming animation (sine-based)
 * - Respects prefers-reduced-motion (disables animation)
 *
 * Usage: <CanvasBackground />
 */

export default function CanvasBackground({
  // tuning props (optional)
  animation = true,
  dprLimit = 2,            // cap devicePixelRatio for performance on very high-DPR screens
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const resizeTimer = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let DPR = Math.min(window.devicePixelRatio || 1, dprLimit);
    let startTime = performance.now();

    // If user prefers reduced motion -> disable
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) animation = false;

    // Layers roughly match the Tailwind CSS example:
    // order: white highlight (lighter/screen), ridge (multiply), main purple (lighter), accent (lighter)
    const layers = [
      {
        name: "white",
        composite: "lighter",
        blur: 100,
        alpha: 0.6,
        size: 0.70, // relative to max dimension
        base: { x: 0.62, y: 0.22 },
        stops: [
          { s: 0.0, c: "rgba(255,255,255,0.86)" },
          { s: 0.18, c: "rgba(250,250,252,0.70)" },
          { s: 0.32, c: "rgba(235,230,236,0.45)" },
          { s: 0.48, c: "rgba(0,0,0,0)" },
        ],
        roam: { ampX: 6, ampY: 9, speed: 0.00045, phase: Math.random() * Math.PI * 2 },
      },
      {
        name: "ridge",
        composite: "multiply",
        blur: 64,
        alpha: 0.98,
        size: 0.95,
        base: { x: 0.28, y: -0.10 },
        stops: [
          { s: 0.0, c: "rgba(2,2,2,0.98)" },
          { s: 0.26, c: "rgba(18,12,30,0.96)" },
          { s: 0.42, c: "rgba(34,18,42,0.9)" },
          { s: 0.64, c: "rgba(34,18,42,0.0)" },
        ],
        roam: { ampX: 14, ampY: 10, speed: 0.00045, phase: Math.random() * Math.PI * 2 },
      },
      {
        name: "purple",
        composite: "lighter",
        blur: 72,
        alpha: 0.995,
        size: 1.04,
        base: { x: -0.12, y: -0.18 },
        stops: [
          { s: 0.0, c: "rgba(158,61,255,0.98)" },
          { s: 0.28, c: "rgba(124,40,212,0.95)" },
          { s: 0.48, c: "rgba(90,28,150,0.86)" },
          { s: 0.70, c: "rgba(60,22,120,0.72)" },
          { s: 0.78, c: "rgba(60,22,120,0.0)" },
        ],
        roam: { ampX: 8, ampY: 10, speed: 0.00056, phase: Math.random() * Math.PI * 2 },
      },
      {
        name: "accent",
        composite: "lighter",
        blur: 84,
        alpha: 0.98,
        size: 0.90,
        base: { x: 0.40, y: 0.28 },
        stops: [
          { s: 0.0, c: "rgba(130,60,230,0.98)" },
          { s: 0.30, c: "rgba(96,30,180,0.88)" },
          { s: 0.55, c: "rgba(50,20,110,0.6)" },
          { s: 0.70, c: "rgba(0,0,0,0.0)" },
        ],
        roam: { ampX: 6, ampY: 12, speed: 0.00085, phase: Math.random() * Math.PI * 2 },
      },
    ];

    function setSize() {
      // full-viewport sizing
      width = Math.max(1, window.innerWidth);
      height = Math.max(1, window.innerHeight);
      DPR = Math.min(window.devicePixelRatio || 1, dprLimit);

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);

      // set ctx transform for DPR so we draw in CSS pixels
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    // draw radial gradient with blur and composite
    function drawLayer(layer, t) {
      const maxDim = Math.max(width, height);
      // roam offsets as small percentages of viewport (sine)
      const rx = Math.sin((t * layer.roam.speed) + layer.roam.phase) * layer.roam.ampX;
      const ry = Math.cos((t * (layer.roam.speed * 1.25)) + layer.roam.phase * 1.1) * layer.roam.ampY;

      // compute center in pixels: base.x is relative to center (-0.5..+0.5 style)
      const cx = (0.5 + layer.base.x) * width + (rx / 100) * width;
      const cy = (0.5 + layer.base.y) * height + (ry / 100) * height;
      const radius = maxDim * layer.size * 0.5;

      // use blur filter for soft edges
      ctx.filter = `blur(${layer.blur}px)`;
      ctx.globalCompositeOperation = layer.composite || "source-over";
      ctx.globalAlpha = layer.alpha;

      // radial gradient inner radius small -> outer radius radius
      const g = ctx.createRadialGradient(cx, cy, radius * 0.02, cx, cy, radius);
      for (const stop of layer.stops) g.addColorStop(stop.s, stop.c);

      ctx.fillStyle = g;
      // draw slightly larger rect to cover blur edges
      ctx.fillRect(cx - radius - 8, cy - radius - 8, radius * 2 + 16, radius * 2 + 16);

      // reset
      ctx.globalAlpha = 1;
      ctx.filter = "none";
      ctx.globalCompositeOperation = "source-over";
    }

    function draw(tMs) {
      // convert to ms since start (useful for smooth animation)
      const t = tMs - startTime;

      // clear and paint a vertical base gradient (like your Tailwind base)
      ctx.clearRect(0, 0, width, height);
      const baseG = ctx.createLinearGradient(0, 0, 0, height);
      baseG.addColorStop(0, "#5b3aa6");
      baseG.addColorStop(0.55, "#4a2a75");
      baseG.addColorStop(1, "#3b274d");
      ctx.fillStyle = baseG;
      ctx.fillRect(0, 0, width, height);

      // draw layers (white first then ridge then purple+accent so purple dominates)
      const drawOrder = ["white", "ridge", "purple", "accent"];
      for (const name of drawOrder) {
        const layer = layers.find(l => l.name === name);
        if (!layer) continue;
        drawLayer(layer, t);
      }

      // subtle overlay to tint and add vignette like CSS .purple-overlay
      ctx.globalCompositeOperation = "multiply";
      ctx.globalAlpha = 0.08;
      const overlay = ctx.createLinearGradient(0, 0, width, 0);
      overlay.addColorStop(0, "rgba(80,40,160,0.16)");
      overlay.addColorStop(0.3, "rgba(80,40,160,0.04)");
      overlay.addColorStop(1, "rgba(30,16,70,0.12)");
      ctx.fillStyle = overlay;
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;

      // small vignette
      ctx.globalCompositeOperation = "multiply";
      ctx.globalAlpha = 0.06;
      const vg = ctx.createRadialGradient(width * 0.5, height * 0.45, Math.max(width, height) * 0.15, width * 0.5, height * 0.45, Math.max(width, height) * 0.95);
      vg.addColorStop(0, "rgba(0,0,0,0)");
      vg.addColorStop(1, "rgba(3,2,8,1)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;

      if (animation) rafRef.current = requestAnimationFrame(draw);
    }

    // initial setup & start
    setSize();
    rafRef.current = requestAnimationFrame(draw);

    // handle resizes with debounce
    function handleResize() {
      if (resizeTimer.current) clearTimeout(resizeTimer.current);
      resizeTimer.current = setTimeout(() => {
        setSize();
      }, 60);
    }
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      if (resizeTimer.current) clearTimeout(resizeTimer.current);
    };
  }, [animation, dprLimit]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
        display: "block",
      }}
    />
  );
}
