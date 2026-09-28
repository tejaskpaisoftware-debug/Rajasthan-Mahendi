'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Download, Sparkles, Paintbrush, Compass, RefreshCw } from 'lucide-react';

export default function HennaCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState('#D4AF37'); // Default Liquid Gold
  const [brushSize, setBrushSize] = useState(4);
  const [mandalaSymmetry, setMandalaSymmetry] = useState(8); // 8-fold royal symmetry
  const [autoSpinMandala, setAutoSpinMandala] = useState(true);

  // Initialize Canvas background and animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set high dynamic size
    canvas.width = canvas.parentElement?.clientWidth || 800;
    canvas.height = 500;

    // Draw dark regal background grid
    ctx.fillStyle = '#06070E';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawInitialMandalaGuide(ctx, canvas.width, canvas.height);
  }, []);

  const drawInitialMandalaGuide = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const cx = width / 2;
    const cy = height / 2;

    ctx.save();
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.15)';
    ctx.lineWidth = 1;

    // Concentric Guide Rings
    [40, 90, 150, 210].forEach((r) => {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
    });

    // Radial Symmetry Axis Lines
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI) / 6;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * 220, cy + Math.sin(angle) * 220);
      ctx.stroke();
    }
    ctx.restore();
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.beginPath();
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
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

    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    const dx = x - cx;
    const dy = y - cy;

    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowBlur = 12;
    ctx.shadowColor = brushColor;

    // Render symmetric strokes for authentic Henna Mandala effect!
    const angleStep = (Math.PI * 2) / mandalaSymmetry;

    for (let i = 0; i < mandalaSymmetry; i++) {
      const currentAngle = i * angleStep;
      const rx = dx * Math.cos(currentAngle) - dy * Math.sin(currentAngle);
      const ry = dx * Math.sin(currentAngle) + dy * Math.cos(currentAngle);

      ctx.beginPath();
      ctx.arc(cx + rx, cy + ry, brushSize / 2, 0, Math.PI * 2);
      ctx.fillStyle = brushColor;
      ctx.fill();
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#06070E';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawInitialMandalaGuide(ctx, canvas.width, canvas.height);
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'rajmaru-bespoke-henna-mandala.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="w-full relative flex flex-col items-center">
      {/* Canvas Tool Controls Panel */}
      <div className="w-full max-w-4xl flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl liquid-glass mb-4 border border-[#D4AF37]/30">
        <div className="flex items-center gap-3">
          <Paintbrush className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs uppercase tracking-widest text-[#FAF6F0]/80">Brush Color:</span>
          <div className="flex items-center gap-2">
            {[
              { color: '#D4AF37', label: 'Liquid Gold' },
              { color: '#B84A39', label: 'Marwar Henna' },
              { color: '#F3E9C6', label: 'Sand Ivory' },
              { color: '#8F94A0', label: 'Platinum' },
            ].map((c) => (
              <button
                key={c.color}
                onClick={() => setBrushColor(c.color)}
                style={{ backgroundColor: c.color }}
                className={`w-6 h-6 rounded-full border transition-all ${
                  brushColor === c.color ? 'ring-2 ring-white scale-110 shadow-gold-glow' : 'border-white/20'
                }`}
                title={c.label}
              />
            ))}
          </div>
        </div>

        {/* Symmetry Selector */}
        <div className="flex items-center gap-3">
          <Compass className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs uppercase tracking-widest text-[#FAF6F0]/80">Symmetry:</span>
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
            {[4, 8, 12, 16].map((num) => (
              <button
                key={num}
                onClick={() => setMandalaSymmetry(num)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  mandalaSymmetry === num ? 'bg-[#D4AF37] text-black font-bold' : 'text-white/70 hover:text-white'
                }`}
              >
                {num}x
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={clearCanvas}
            className="px-3 py-1.5 rounded-xl liquid-glass text-xs font-medium text-white/80 hover:text-white hover:border-[#D4AF37] transition-all flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
          <button
            onClick={downloadCanvas}
            className="px-4 py-1.5 rounded-xl bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#FFF6D1] transition-all flex items-center gap-1.5 shadow-gold-glow"
          >
            <Download className="w-3.5 h-3.5" />
            Export Artwork
          </button>
        </div>
      </div>

      {/* Interactive Canvas Container */}
      <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-gold-glow-lg group">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onMouseMove={draw}
          onTouchStart={startDrawing}
          onTouchEnd={stopDrawing}
          onTouchMove={draw}
          className="w-full h-[450px] cursor-crosshair touch-none"
        />

        <div className="absolute bottom-4 left-4 right-4 pointer-events-none flex justify-between items-center text-[10px] tracking-widest text-[#D4AF37]/60 font-mono">
          <span>INTERACTIVE HENNA SYMMETRY ENGINE</span>
          <span>CLICK & DRAG TO WEAVE ROYAL MANDALA</span>
        </div>
      </div>
    </div>
  );
}
