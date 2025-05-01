import React, { useRef, useEffect } from 'react';

const NUM_PARTICLES = 32;
const COLORS = [
  'rgba(0,255,255,0.7)', // cyan
  'rgba(0,128,255,0.7)', // blue
  'rgba(0,200,255,0.7)', // light cyan
  'rgba(0,80,255,0.7)',  // deep blue
];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Responsive resize
    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle system
    const particles = Array.from({ length: NUM_PARTICLES }).map(() => ({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      vx: randomBetween(-0.5, 0.5), // más movimiento en idle
      vy: randomBetween(-0.5, 0.5),
      r: randomBetween(32, 64),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      mass: randomBetween(1, 2),
    }));

    function animate() {
      ctx.clearRect(0, 0, width, height);
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 180) {
            ctx.save();
            ctx.globalAlpha = 0.15;
            ctx.strokeStyle = a.color;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      // Draw particles
      for (const p of particles) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 32;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.restore();
      }
      // Physics
      for (const p of particles) {
        // Todas las partículas reaccionan al hover, pero con sensibilidad moderada
        let ax = 0, ay = 0;
        if (mouse.current.active) {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          // Todas reaccionan, pero la fuerza decae suavemente con la distancia
          const k = 0.06; // sensibilidad moderada
          const force = Math.max(0, (400 - dist) / 400 * k);
          ax += force * dx / (dist + 1e-6) / p.mass;
          ay += force * dy / (dist + 1e-6) / p.mass;
        }
        // Movimiento idle más fluido
        if (!mouse.current.active) {
          ax += randomBetween(-0.01, 0.01);
          ay += randomBetween(-0.01, 0.01);
        }
        // Fricción
        p.vx = (p.vx + ax) * 0.995;
        p.vy = (p.vy + ay) * 0.995;
        // Move
        p.x += p.vx;
        p.y += p.vy;
        // Bounce
        if (p.x < p.r) { p.x = p.r; p.vx *= -1; }
        if (p.x > width - p.r) { p.x = width - p.r; p.vx *= -1; }
        if (p.y < p.r) { p.y = p.r; p.vy *= -1; }
        if (p.y > height - p.r) { p.y = height - p.r; p.vy *= -1; }
      }
      requestAnimationFrame(animate);
    }
    animate();

    // Mouse events
    function handleMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouse.current.active = true;
    }
    function handleLeave() {
      mouse.current.active = false;
    }
    canvas.addEventListener('mousemove', handleMove);
    canvas.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMove);
      canvas.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section id="hero" className="w-full bg-gray-900 text-white py-20 relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ pointerEvents: 'auto', display: 'block' }}
      />
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Texto a la izquierda */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Transformamos tu Negocio con Estrategias Digitales de Alto Impacto
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl">
            Agencia Integral de Marketing, Diseño y Desarrollo Web. Talento Latino con Estándares Internacionales y Precios Competitivos para Norteamérica.
          </p>
          <a 
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition duration-300 text-lg shadow-lg"
          >
            Descubre cómo podemos impulsar tus ventas
          </a>
        </div>
        {/* Video a la derecha en desktop (opcional, puedes quitarlo si solo quieres el canvas) */}
        <div className="flex-1 w-full max-w-2xl hidden md:flex items-center justify-center">
          <video
            src="/videos/avanxia_hq.webm"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-full w-[340px] h-[340px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] object-cover bg-gray-800"
            poster="/images/portfolio/poolquality/HOME.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

