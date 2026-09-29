'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCcw, Download, Sparkles, Feather, Crown, Compass, Flower2, Paintbrush, RotateCcw } from 'lucide-react';

export type MehendiPreset = 'minimal' | 'arabic' | 'rajasthani' | 'mandala' | 'floral';

export default function RealTimeHandCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Drawing State
  const [isDrawing, setIsDrawing] = useState(false);
  const [activePreset, setActivePreset] = useState<MehendiPreset | null>(null);
  const [brushSize, setBrushSize] = useState(3.5);
  const [symmetry, setSymmetry] = useState<number>(1); // 1 = freehand, 4, 8, 12 = radial
  const [conePos, setConePos] = useState({ x: 250, y: 350, visible: false });
  const [isAnimatingPreset, setIsAnimatingPreset] = useState(false);

  // Real Clean Hand Photo URL
  const handPhotoUrl = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80';

  // Initialize Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 500;
    canvas.height = 650;
  }, []);

  // Freehand Mouse / Touch Event Handlers
  const startFreehand = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (isAnimatingPreset) return;
    setIsDrawing(true);
    setActivePreset(null);
    drawFreehand(e);
  };

  const stopFreehand = () => {
    setIsDrawing(false);
    setConePos((prev) => ({ ...prev, visible: false }));
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.beginPath();
    }
  };

  const drawFreehand = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing && e.type !== 'mousedown' && e.type !== 'touchstart') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX = 0;
    let clientY = 0;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;

    setConePos({ x, y, visible: true });

    ctx.strokeStyle = '#2C1405'; // Real Organic Dark Henna Paste
    ctx.fillStyle = '#2C1405';
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowBlur = 4;
    ctx.shadowColor = 'rgba(26, 10, 2, 0.4)';

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const dx = x - cx;
    const dy = y - cy;

    if (symmetry === 1) {
      ctx.beginPath();
      ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Radial Symmetry Live Drawing!
      const angleStep = (Math.PI * 2) / symmetry;
      for (let i = 0; i < symmetry; i++) {
        const angle = i * angleStep;
        const rx = dx * Math.cos(angle) - dy * Math.sin(angle);
        const ry = dx * Math.sin(angle) + dy * Math.cos(angle);

        ctx.beginPath();
        ctx.arc(cx + rx, cy + ry, brushSize / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  };

  // Real-Time Animated Preset Drawing Engine
  const playPresetAnimation = (preset: MehendiPreset) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsAnimatingPreset(true);
    setActivePreset(preset);

    // Clear previous artwork
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Preset Paths Definitions
    const presetPaths: Record<MehendiPreset, { d: string; width: number; speed: number }[]> = {
      minimal: [
        { d: 'M 250 520 Q 235 440 248 370 Q 262 300 238 230 Q 220 180 215 130', width: 3.5, speed: 1.5 },
        { d: 'M 248 370 C 230 350 220 380 248 390 C 276 380 266 350 248 370', width: 3.0, speed: 1.8 },
        { d: 'M 240 450 Q 215 440 222 415 M 255 390 Q 280 380 270 355', width: 2.5, speed: 2.0 },
      ],
      arabic: [
        { d: 'M 320 600 Q 265 480 235 380 Q 205 280 245 190 Q 252 130 245 70', width: 4.0, speed: 1.5 },
        { d: 'M 265 480 C 215 440 205 520 265 520 C 325 520 315 440 265 480', width: 3.2, speed: 1.8 },
        { d: 'M 235 380 C 190 350 190 420 235 410 C 280 400 280 350 235 380', width: 3.2, speed: 1.8 },
        { d: 'M 245 190 Q 220 160 240 130 M 245 110 H 265', width: 2.8, speed: 2.0 },
      ],
      rajasthani: [
        { d: 'M 180 580 Q 250 610 320 580 M 180 595 Q 250 625 320 595', width: 4.0, speed: 1.8 },
        { d: 'M 250 380 A 50 50 0 1 0 250 379 M 250 380 A 75 75 0 1 0 250 379', width: 3.5, speed: 1.5 },
        { d: 'M 205 430 L 295 330 M 205 330 L 295 430 M 200 380 L 300 380', width: 2.2, speed: 2.5 },
        { d: 'M 250 290 C 220 260 230 220 250 220 C 270 220 280 260 250 290', width: 2.8, speed: 2.0 },
        { d: 'M 130 250 H 160 M 175 185 H 205 M 235 130 H 265 M 295 160 H 325', width: 3.0, speed: 2.0 },
      ],
      mandala: [
        { d: 'M 250 370 A 20 20 0 1 0 250 369 M 250 370 A 45 45 0 1 0 250 369', width: 4.0, speed: 1.5 },
        { d: 'M 250 310 Q 225 340 250 370 Q 275 340 250 310 M 310 370 Q 280 345 250 370 Q 280 395 310 370 M 250 430 Q 225 400 250 370 Q 275 400 250 430 M 190 370 Q 220 345 250 370 Q 220 395 190 370', width: 3.0, speed: 1.8 },
        { d: 'M 250 370 A 90 90 0 1 0 250 369', width: 2.5, speed: 2.0 },
        { d: 'M 180 560 Q 250 585 320 560', width: 3.5, speed: 2.2 },
      ],
      floral: [
        { d: 'M 250 370 C 220 340 220 400 250 400 C 280 400 280 340 250 370 M 250 330 C 195 290 195 430 250 430 C 305 430 305 290 250 330', width: 3.8, speed: 1.6 },
        { d: 'M 230 280 C 210 265 210 300 230 300 C 250 300 250 265 230 280', width: 3.0, speed: 2.0 },
        { d: 'M 250 430 Q 230 490 252 550 M 235 460 Q 200 450 210 425', width: 2.5, speed: 2.2 },
        { d: 'M 230 265 Q 210 190 195 120 M 270 275 Q 255 170 242 95', width: 2.5, speed: 2.2 },
      ],
    };

    const paths = presetPaths[preset];
    let pathIdx = 0;

    const animateNextPath = () => {
      if (pathIdx >= paths.length) {
        setIsAnimatingPreset(false);
        setConePos((prev) => ({ ...prev, visible: false }));
        return;
      }

      const p = paths[pathIdx];
      const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      svgPath.setAttribute('d', p.d);
      const totalLength = svgPath.getTotalLength();

      let lengthDrawn = 0;
      const speed = p.speed * 4;

      ctx.strokeStyle = '#2C1405';
      ctx.lineWidth = p.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowBlur = 4;
      ctx.shadowColor = 'rgba(26, 10, 2, 0.4)';

      const drawStep = () => {
        lengthDrawn += speed;
        if (lengthDrawn > totalLength) lengthDrawn = totalLength;

        const pt1 = svgPath.getPointAtLength(Math.max(0, lengthDrawn - speed));
        const pt2 = svgPath.getPointAtLength(lengthDrawn);

        ctx.beginPath();
        ctx.moveTo(pt1.x, pt1.y);
        ctx.lineTo(pt2.x, pt2.y);
        ctx.stroke();

        setConePos({ x: pt2.x, y: pt2.y, visible: true });

        if (lengthDrawn < totalLength) {
          requestAnimationFrame(drawStep);
        } else {
          pathIdx++;
          setTimeout(animateNextPath, 150);
        }
      };

      requestAnimationFrame(drawStep);
    };

    animateNextPath();
  };

  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setActivePreset(null);
    setConePos({ x: 250, y: 350, visible: false });
  };

  const handleExport = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'inkaura-realtime-mehendi-art.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <section className="py-16 md:py-24 bg-[#FFF0F3] text-[#1F0712] relative overflow-hidden border-t border-b border-[#F8C8DC]/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D81B60]" />
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D81B60] font-bold">
              REAL-TIME INTERACTIVE HAND STUDIO
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F0712]">
            Real-Time Mehendi Canvas
          </h2>

          <p className="font-script text-2xl text-[#D81B60] font-normal">
            “Draw live with your mouse or watch designs come to life in real-time.”
          </p>
        </div>

        {/* Real-Time Studio Tools Toolbar */}
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#D2B48C]/40 shadow-md mb-6">
          
          {/* Freehand Brush Size */}
          <div className="flex items-center gap-3">
            <Paintbrush className="w-4 h-4 text-[#C5A059]" />
            <span className="text-xs uppercase tracking-wider font-mono text-[#2C1F17] font-semibold">Tip Size:</span>
            <div className="flex gap-1">
              {[2, 3.5, 6].map((sz) => (
                <button
                  key={sz}
                  onClick={() => setBrushSize(sz)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                    brushSize === sz ? 'bg-[#2C3E2B] text-white shadow-sm' : 'bg-gray-100 text-[#2C1F17]'
                  }`}
                >
                  {sz === 2 ? 'Fine (2px)' : sz === 3.5 ? 'Classic (3.5px)' : 'Bold (6px)'}
                </button>
              ))}
            </div>
          </div>

          {/* Radial Symmetry Mode */}
          <div className="flex items-center gap-3">
            <Compass className="w-4 h-4 text-[#C5A059]" />
            <span className="text-xs uppercase tracking-wider font-mono text-[#2C1F17] font-semibold">Symmetry:</span>
            <div className="flex gap-1">
              {[1, 4, 8, 12].map((sym) => (
                <button
                  key={sym}
                  onClick={() => setSymmetry(sym)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                    symmetry === sym ? 'bg-[#2C3E2B] text-white shadow-sm' : 'bg-gray-100 text-[#2C1F17]'
                  }`}
                >
                  {sym === 1 ? 'Freehand' : `${sym}x Radial`}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleClearCanvas}
              className="px-3.5 py-1.5 rounded-xl border border-[#D2B48C]/50 text-xs font-mono font-bold text-[#2C1F17] hover:bg-[#2C3E2B] hover:text-white transition-all flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
            <button
              onClick={handleExport}
              className="px-4 py-1.5 rounded-xl bg-[#C5A059] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E2C799] transition-all flex items-center gap-1.5 shadow-md"
            >
              <Download className="w-3.5 h-3.5" /> Export
            </button>
          </div>
        </div>

        {/* Real Hand Photo + Live Canvas Container */}
        <div className="relative max-w-md mx-auto mb-8">
          <div
            ref={containerRef}
            className="relative w-full aspect-[5/6.5] bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2B48C]/50 flex items-center justify-center group"
          >
            {/* Layer 1: Real Human Hand Photograph */}
            <div className="absolute inset-0 w-full h-full bg-cover bg-center brightness-95">
              <img
                src={handPhotoUrl}
                alt="Real Clean Human Hand Canvas"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Layer 2: Real-Time 60fps HTML5 Henna Drawing Canvas */}
            <canvas
              ref={canvasRef}
              onMouseDown={startFreehand}
              onMouseUp={stopFreehand}
              onMouseLeave={stopFreehand}
              onMouseMove={drawFreehand}
              onTouchStart={startFreehand}
              onTouchEnd={stopFreehand}
              onTouchMove={drawFreehand}
              className="absolute inset-0 w-full h-full cursor-crosshair touch-none z-10"
            />

            {/* Layer 3: Animated Traditional Henna Cone Cursor */}
            {conePos.visible && (
              <div
                style={{
                  left: `${(conePos.x / 500) * 100}%`,
                  top: `${(conePos.y / 650) * 100}%`,
                }}
                className="absolute z-20 pointer-events-none -translate-x-1 -translate-y-full transition-transform duration-75"
              >
                <div className="relative w-8 h-16 -rotate-45">
                  <div className="w-full h-full bg-gradient-to-b from-[#C5A059] via-[#E2C799] to-[#3D2612] clip-path-cone border border-[#D4AF37] shadow-md" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }} />
                  <div className="w-2 h-2 rounded-full bg-[#2C1405] absolute bottom-0 left-1/2 -translate-x-1/2" />
                </div>
              </div>
            )}

            {/* Canvas Bottom Instruction */}
            <div className="absolute bottom-3 left-4 right-4 pointer-events-none flex justify-between items-center text-[10px] tracking-widest text-white/90 font-mono z-20 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
              <span>REAL-TIME LIVE HENNA DRAWING</span>
              <span>CLICK & DRAG TO DRAW</span>
            </div>
          </div>
        </div>

        {/* 5 Real-Time Preset Animation Buttons */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { id: 'minimal' as MehendiPreset, name: 'Minimal Mehendi', icon: Feather },
              { id: 'arabic' as MehendiPreset, name: 'Arabic Mehendi', icon: Sparkles },
              { id: 'rajasthani' as MehendiPreset, name: 'Rajasthani Mehendi', icon: Crown },
              { id: 'mandala' as MehendiPreset, name: 'Mandala Mehendi', icon: Compass },
              { id: 'floral' as MehendiPreset, name: 'Floral Mehendi', icon: Flower2 },
            ].map((btn) => {
              const IconComponent = btn.icon;
              const isActive = activePreset === btn.id;

              return (
                <button
                  key={btn.id}
                  onClick={() => playPresetAnimation(btn.id)}
                  disabled={isAnimatingPreset}
                  className={`px-4 py-3.5 rounded-2xl font-serif text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 flex flex-col items-center justify-center gap-2 border text-center relative overflow-hidden group ${
                    isActive
                      ? 'bg-[#2C3E2B] text-white border-[#D4AF37] shadow-xl scale-105'
                      : 'bg-white/90 text-[#2C1F17] border-[#D2B48C]/40 hover:bg-[#F4E6D4]'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isActive ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-[#2C1F17]/5 text-[#2C1F17]'
                  }`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span>{btn.name}</span>
                  {isActive && isAnimatingPreset && (
                    <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-widest animate-pulse">
                      Drawing Live...
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
