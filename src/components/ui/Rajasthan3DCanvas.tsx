'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles, Eye, X, Crown, ArrowRight, ShieldCheck, MapPin, Maximize2 } from 'lucide-react';

interface Hotspot {
  id: string;
  title: string;
  location: string;
  devanagari: string;
  x3d: number;
  y3d: number;
  z3d: number;
  desc: string;
  artifact: string;
  image: string;
}

export default function Rajasthan3DCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Orbit Camera State
  const [rotX, setRotX] = useState(0.2);
  const [rotY, setRotY] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [screenHotspots, setScreenHotspots] = useState<{ id: string; x: number; y: number; hotspot: Hotspot }[]>([]);

  // 3D Historical Rajasthan Spatial Hotspots
  const hotspots: Hotspot[] = [
    {
      id: 'h1',
      title: 'Mehrangarh Imperial Citadel',
      location: 'Jodhpur • Marwar',
      devanagari: 'मेहरानगढ़ दुर्ग • जोधपुर',
      x3d: -140,
      y3d: 60,
      z3d: 40,
      desc: 'Perched 410 feet above Jodhpur, Mehrangarh Fort housed the Royal Henna Guild since 1894. Here, court artisans crafted deep mahogany henna stains for Rajput royal weddings.',
      artifact: 'Imperial Sword & Sun Crest Motif',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'h2',
      title: 'City Palace & Lake Pichola',
      location: 'Udaipur • Mewar',
      devanagari: 'सिटी पैलेस • उदयपुर',
      x3d: 130,
      y3d: -20,
      z3d: 60,
      desc: 'The Venice of the East. Famous for delicate Jharokha balcony balconies and Radha-Krishna court miniature henna storytelling rendered on marble courtyard suites.',
      artifact: 'Jharokha Balcony Lattice Frame',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'h3',
      title: 'Sojat Organic Botanical Reserve',
      location: 'Pali • Rajasthan',
      devanagari: 'सोजत मेंहदी घाटी • पाली',
      x3d: 0,
      y3d: -120,
      z3d: -30,
      desc: 'The world-famous henna capital. Our botanical reserve grows Lawsonia inermis leaves harvested at peak potency, triple-sifted through pure silk mesh.',
      artifact: 'Triple-Filtered Botanical Henna Seal',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'h4',
      title: 'Golden Fort of Jaisalmer & Thar Dunes',
      location: 'Jaisalmer • Thar Desert',
      devanagari: 'जैसलमेर स्वर्ण दुर्ग • थार',
      x3d: 80,
      y3d: 110,
      z3d: -90,
      desc: 'Carved entirely from yellow sandstone, Jaisalmer inspires our fine-line sacred geometry, Rajput swords, and celestial Sanskrit calligraphy permanent tattoos.',
      artifact: 'Rajputana Sacred Geometry Talisman',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  // 3D Rendering Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    // Generate 3D Particles & Fort Wireframe Vertices
    const particleCount = 400;
    const particles: { x: number; y: number; z: number; size: number; speed: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 800,
        y: (Math.random() - 0.5) * 800,
        z: (Math.random() - 0.5) * 800,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2,
      });
    }

    // 3D Rajasthani Fort Jharokha Pyramid Vertices
    const fortVertices = [
      // Base
      { x: -180, y: -100, z: -180 },
      { x: 180, y: -100, z: -180 },
      { x: 180, y: -100, z: 180 },
      { x: -180, y: -100, z: 180 },
      // Mid Citadel
      { x: -120, y: 40, z: -120 },
      { x: 120, y: 40, z: -120 },
      { x: 120, y: 40, z: 120 },
      { x: -120, y: 40, z: 120 },
      // Top Dome Spire
      { x: 0, y: 180, z: 0 },
    ];

    const fortEdges = [
      [0, 1], [1, 2], [2, 3], [3, 0], // Base
      [4, 5], [5, 6], [6, 7], [7, 4], // Mid
      [0, 4], [1, 5], [2, 6], [3, 7], // Pillars
      [4, 8], [5, 8], [6, 8], [7, 8], // Spire Roof
    ];

    let currentAngleY = rotY;

    const render = () => {
      // Auto slow rotation if not dragging
      if (!isDragging) {
        currentAngleY += 0.003;
      } else {
        currentAngleY = rotY;
      }

      // Handle Resize
      canvas.width = canvas.parentElement?.clientWidth || 900;
      canvas.height = 550;
      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2;

      ctx.fillStyle = '#06070E';
      ctx.fillRect(0, 0, width, height);

      // Render 3D Background Grid
      ctx.save();
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.06)';
      ctx.lineWidth = 1;
      const gridCount = 12;
      const gridSpacing = 40;

      for (let i = -gridCount; i <= gridCount; i++) {
        ctx.beginPath();
        ctx.moveTo(cx + i * gridSpacing, 0);
        ctx.lineTo(cx + i * gridSpacing, height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, cy + i * gridSpacing);
        ctx.lineTo(width, cy + i * gridSpacing);
        ctx.stroke();
      }
      ctx.restore();

      // Project 3D Point helper function
      const project3D = (x: number, y: number, z: number) => {
        // Rotate Y
        const cosY = Math.cos(currentAngleY);
        const sinY = Math.sin(currentAngleY);
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;

        // Rotate X
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        // Perspective Projection
        const fov = 450 * zoom;
        const distance = 600;
        const scale = fov / (distance + z2);

        const screenX = cx + x1 * scale;
        const screenY = cy - y2 * scale;

        return { x: screenX, y: screenY, z: z2, scale };
      };

      // 1. Render 3D Floating Dust Particles
      ctx.fillStyle = '#D4AF37';
      particles.forEach((p) => {
        p.y += p.speed;
        if (p.y > 400) p.y = -400;

        const proj = project3D(p.x, p.y, p.z);
        const alpha = Math.max(0.1, Math.min(0.8, (proj.scale * 0.7)));

        ctx.fillStyle = `rgba(212, 175, 55, ${alpha})`;
        ctx.beginPath();
        ctx.arc(proj.x, proj.y, p.size * proj.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Render 3D Rotating Rajasthani Mandala Concentric Rings
      ctx.save();
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
      ctx.lineWidth = 1.5;

      [60, 120, 180, 240].forEach((radius) => {
        ctx.beginPath();
        for (let a = 0; a <= Math.PI * 2; a += 0.1) {
          const rx = Math.cos(a) * radius;
          const rz = Math.sin(a) * radius;
          const proj = project3D(rx, -100, rz);
          if (a === 0) ctx.moveTo(proj.x, proj.y);
          else ctx.lineTo(proj.x, proj.y);
        }
        ctx.closePath();
        ctx.stroke();
      });
      ctx.restore();

      // 3. Render 3D Rajasthani Fort Wireframe Lines
      const projectedFort = fortVertices.map((v) => project3D(v.x, v.y, v.z));

      ctx.save();
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.6)';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#D4AF37';

      fortEdges.forEach(([i, j]) => {
        const p1 = projectedFort[i];
        const p2 = projectedFort[j];

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });
      ctx.restore();

      // 4. Project & Calculate 2D Screen Positions for 3D Hotspot Emblem Markers
      const calculatedHotspots = hotspots.map((hs) => {
        const proj = project3D(hs.x3d, hs.y3d, hs.z3d);
        return {
          id: hs.id,
          x: proj.x,
          y: proj.y,
          hotspot: hs,
        };
      });

      setScreenHotspots(calculatedHotspots);

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationId);
  }, [rotX, rotY, zoom, isDragging]);

  // Orbit Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - lastMouse.x;
    const dy = e.clientY - lastMouse.y;

    setRotY((prev) => prev + dx * 0.008);
    setRotX((prev) => Math.max(-0.8, Math.min(0.8, prev + dy * 0.008)));
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div ref={containerRef} className="w-full relative flex flex-col items-center">
      
      {/* 3D Exploration Controls Bar */}
      <div className="w-full max-w-5xl flex items-center justify-between p-4 rounded-2xl liquid-glass mb-4 border border-[#D4AF37]/40 shadow-gold-glow">
        <div className="flex items-center gap-3">
          <Compass className="w-5 h-5 text-[#D4AF37] animate-spin-slow" />
          <div>
            <h4 className="font-serif text-sm font-bold gold-text-gradient uppercase tracking-widest">
              3D SPATIAL RAJASTHAN EXPLORATION
            </h4>
            <p className="text-[10px] text-white/70 font-mono">
              Click & drag to rotate 360° • Click glowing hotspots to inspect imperial fort archives
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setZoom((prev) => Math.min(1.5, prev + 0.15))}
            className="px-3 py-1.5 rounded-xl liquid-glass border border-white/20 text-xs font-mono text-white hover:text-[#D4AF37]"
          >
            Zoom +
          </button>
          <button
            onClick={() => setZoom((prev) => Math.max(0.7, prev - 0.15))}
            className="px-3 py-1.5 rounded-xl liquid-glass border border-white/20 text-xs font-mono text-white hover:text-[#D4AF37]"
          >
            Zoom -
          </button>
        </div>
      </div>

      {/* 3D Canvas Box */}
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="relative w-full max-w-5xl h-[520px] rounded-3xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-gold-glow-lg cursor-grab active:cursor-grabbing bg-[#06070E] group"
      >
        <canvas ref={canvasRef} className="w-full h-full" />

        {/* Floating 3D Hotspot Emblem Buttons projected onto Canvas */}
        {screenHotspots.map(({ id, x, y, hotspot }) => (
          <div
            key={id}
            style={{ left: `${x}px`, top: `${y}px` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
          >
            <button
              onClick={() => setSelectedHotspot(hotspot)}
              className="relative group/btn flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#06070E]/85 border-2 border-[#D4AF37] shadow-gold-glow hover:scale-115 transition-all duration-300"
            >
              <span className="w-3 h-3 rounded-full bg-[#D4AF37] animate-ping absolute" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] relative z-10" />
              <span className="font-serif text-[11px] font-bold text-[#FFF6D1] whitespace-nowrap hidden sm:inline">
                {hotspot.title}
              </span>
            </button>
          </div>
        ))}

        {/* Canvas Bottom Instructions */}
        <div className="absolute bottom-4 left-6 right-6 pointer-events-none flex justify-between items-center text-[10px] tracking-widest text-[#D4AF37] font-mono">
          <span>GOOGLE ARTS & CULTURE STYLE 3D SPATIAL EXPLORER</span>
          <span>ORBIT ROTATION ACTIVE</span>
        </div>
      </div>

      {/* Hotspot Inspection Modal */}
      <AnimatePresence>
        {selectedHotspot && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedHotspot(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl liquid-glass-gold p-8 rounded-3xl z-10 border-2 border-[#D4AF37] shadow-gold-glow-lg overflow-hidden flex flex-col md:flex-row gap-6"
            >
              <button
                onClick={() => setSelectedHotspot(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full liquid-glass flex items-center justify-center text-white/70 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative w-full md:w-1/2 h-56 md:h-auto rounded-2xl overflow-hidden border border-white/20">
                <img
                  src={selectedHotspot.image}
                  alt={selectedHotspot.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 space-y-3">
                <span className="text-[10px] uppercase font-mono tracking-widest px-3 py-1 rounded-full bg-[#D4AF37] text-black font-bold">
                  {selectedHotspot.location}
                </span>

                <h3 className="font-serif text-xl font-bold gold-text-gradient">
                  {selectedHotspot.title}
                </h3>
                <p className="font-script text-lg text-[#F3E9C6]">
                  {selectedHotspot.devanagari}
                </p>

                <p className="text-xs text-white/80 leading-relaxed font-sans bg-white/5 p-3 rounded-xl border border-white/10">
                  {selectedHotspot.desc}
                </p>

                <div className="pt-2 text-xs font-mono text-[#D4AF37] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Artifact: {selectedHotspot.artifact}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
