import React, { useRef, useEffect } from "react";

/**
 * CanvasBackground.jsx
 * - Recreates the layered, blurred purple "mountain" look from your Tailwind CSS version
 * - Uses 2D canvas radial gradients, large blur via ctx.filter, and composite ops
 * - Responsive to DPR and resize, debounced resize handler
 * - Simple sine-based roaming animation for each layer
 *
 * Usage:
 *  <div className="relative min-h-screen overflow-hidden">
 *    <CanvasBackground />
 *    <main className="relative z-10">...your content</main>
 *  </div>
 */

export default function CanvasBackground({
  performanceMode = false, // set true to lower work (lower tile size, fewer passes)
}) {
  const ref = useRef(null);
  const rafRef = useRef(null);
  const resizeTimeout = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0, dpr = Math.max(1, window.devicePixelRatio || 1);

    // Layer definitions: approximate the CSS classes
    const layers = [
      {
        // deep ridge (multiply)
        type: "ridge",
        composite: "multiply",
        blur: 64,
        alpha: 0.98,
        base: { x: 0.28, y: -0.10 },
        size: 0.95, // relative to viewport (vmax style)
        colorStops: [
          { stop: 0.0, color: "rgba(4,4,4,0.98)" },
          { stop: 0.26, color: "rgba(18,12,30,0.96)" },
          { stop: 0.42, color: "rgba(34,18,42,0.9)" },
          { stop: 0.64, color: "rgba(34,18,42,0.0)" },
        ],
        roam: { ampX: 14, ampY: 10, speed: 0.00045, phase: Math.random() * Math.PI * 2 },
      },
      {
        // main purple mass (screen/lighter)
        type: "purple",
        composite: "lighter",
        blur: 72,
        alpha: 0.995,
        base: { x: -0.12, y: -0.18 },
        size: 1.04,
        colorStops: [
          { stop: 0.0, color: "rgba(158,61,255,0.98)" },
          { stop: 0.28, color: "rgba(124,40,212,0.95)" },
          { stop: 0.48, color: "rgba(90,28,150,0.86)" },
          { stop: 0.70, color: "rgba(60,22,120,0.72)" },
          { stop: 0.78, color: "rgba(60,22,120,0.0)" },
        ],
        roam: { ampX: 8, ampY: 10, speed: 0.0006, phase: Math.random() * Math.PI * 2 },
      },
      {
        // accent purple (screen)
        type: "accent",
        composite: "lighter",
        blur: 84,
        alpha: 0.98,
        base: { x: 0.40, y: 0.28 },
        size: 0.90,
        colorStops: [
          { stop: 0.0, color: "rgba(130,60,230,0.98)" },
          { stop: 0.30, color: "rgba(96,30,180,0.88)" },
          { stop: 0.55, color: "rgba(50,20,110,0.6)" },
          { stop: 0.70, color: "rgba(0,0,0,0.0)" },
        ],
        roam: { ampX: 6, ampY: 12, speed: 0.00085, phase: Math.random() * Math.PI * 2 },
      },
      {
        // soft white highlight (screen, subtle)
        type: "white",
        composite: "lighter",
        blur: 100,
        alpha: 0.6,
        base: { x: 0.62, y: 0.22 },
        size: 0.70,
        colorStops: [
          { stop: 0.0, color: "rgba(255,255,255,0.86)" },
          { stop: 0.18, color: "rgba(250,250,252,0.70)" },
          { stop: 0.32, color: "rgba(235,230,236,0.45)" },
          { stop: 0.48, color: "rgba(0,0,0,0.0)" },
        ],
        roam: { ampX: 6, ampY: 9, speed: 0.00045, phase: Math.random() * Math.PI * 2 },
      },
    ];

    // If the user prefers reduced motion, zero the roam speeds
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      layers.forEach(l => (l.roam.speed = 0, l.roam.ampX = 0, l.roam.ampY = 0));
    }

    function setSize() {
      // Use full window size so canvas covers viewport
      w = Math.max(1, Math.floor(window.innerWidth));
      h = Math.max(1, Math.floor(window.innerHeight));
      dpr = Math.max(1, window.devicePixelRatio || 1);

      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);

      // scale context for DPR
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // debounced resize
    function handleResize() {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(() => {
        setSize();
      }, 80);
    }

    setSize();
    window.addEventListener("resize", handleResize);

    // helper: draw a radial gradient circle with color stops, center px coords, radius px
    function drawRadialGradient(cx, cy, r, stops, alpha, blurVal) {
      // set blur
      ctx.filter = blurVal ? `blur(${blurVal}px)` : "none";
      ctx.globalAlpha = alpha;

      const g = ctx.createRadialGradient(cx, cy, r * 0.02, cx, cy, r);
      for (const s of stops) {
        g.addColorStop(s.stop, s.color);
      }
      ctx.fillStyle = g;
      ctx.fillRect(cx - r - 4, cy - r - 4, r * 2 + 8, r * 2 + 8); // slightly larger rect to contain blur
      ctx.filter = "none";
      ctx.globalAlpha = 1;
    }

    // animation state
    const start = performance.now();

    // use requestAnimationFrame loop
    function frame(now) {
      const t = now - start;

      // clear full canvas
      ctx.clearRect(0, 0, w, h);

      // Draw a subtle base gradient similar to live-bg background in CSS
      const base = ctx.createLinearGradient(0, 0, 0, h);
      base.addColorStop(0, "#5b3aa6");
      base.addColorStop(0.55, "#4a2a75");
      base.addColorStop(1, "#3b274d");
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, w, h);

      // draw each layer in an order that mimics CSS mixing (white under/purple above etc.)
      // We'll draw white first so purple can sit above it (or tune order if needed)
      const order = ["white", "ridge", "purple", "accent"]; // chosen to make purple dominant
      for (const id of order) {
        const L = layers.find(l => l.type === id);
        if (!L) continue;

        // compute roaming offsets using sine/cos + layer phase
        const rx = Math.sin((t * L.roam.speed) + L.roam.phase) * L.roam.ampX;
        const ry = Math.cos((t * (L.roam.speed * 1.25)) + L.roam.phase * 1.1) * L.roam.ampY;

        // convert relative base pos/size into pixels
        // base.x is relative where 0 -> left, 1 -> right; negative allowed from CSS earlier
        const cx = (0.5 + L.base.x) * w + (rx / 100) * w; // rx in percent
        const cy = (0.5 + L.base.y) * h + (ry / 100) * h;
        const r = Math.max(w, h) * L.size * 0.5;

        // set composite
        ctx.globalCompositeOperation = L.composite;
        ctx.globalAlpha = L.alpha;

        // Draw gradient circle with stops
        drawRadialGradient(cx, cy, r, L.colorStops, L.alpha, L.blur);

        // restore for next layer
        ctx.globalCompositeOperation = "source-over";
      }

      // subtle overlay to tint and vignette like purple-overlay
      ctx.globalCompositeOperation = "multiply";
      ctx.globalAlpha = 0.08;
      const overlay = ctx.createLinearGradient(0, 0, w, 0);
      overlay.addColorStop(0, "rgba(80,40,160,0.16)");
      overlay.addColorStop(0.3, "rgba(80,40,160,0.04)");
      overlay.addColorStop(1, "rgba(30,16,70,0.12)");
      ctx.fillStyle = overlay;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;

      // small optional vignette (darken edges slightly)
      ctx.globalCompositeOperation = "multiply";
      ctx.globalAlpha = 0.06;
      const vg = ctx.createRadialGradient(w * 0.5, h * 0.5, Math.max(w, h) * 0.2, w * 0.5, h * 0.5, Math.max(w, h) * 0.9);
      vg.addColorStop(0, "rgba(0,0,0,0)");
      vg.addColorStop(1, "rgba(3,2,8,1)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(frame);
    }

    // start
    rafRef.current = requestAnimationFrame(frame);

    return () => {
      // cleanup
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
    };
  }, [performanceMode]);

  // position fixed ensures it covers the viewport and sits under everything
  return (
    <canvas
      ref={ref}
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
