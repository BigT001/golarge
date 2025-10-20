"use client"

import { ReactNode, useEffect, useState } from 'react'

function ParticlesLayer({ count = 12 }: { count?: number }) {
  const [particles, setParticles] = useState<{
    left: string;
    top: string;
    opacity: number;
    duration: number;
    delay: number;
  }[] | null>(null);

  useEffect(() => {
    // generate particles only on client after mount to avoid SSR/client mismatch
    const list = Array.from({ length: count }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.5 + 0.2,
      duration: 15 + Math.random() * 15,
      delay: Math.random() * 5,
    }));

    setParticles(list);
  }, [count]);

  if (!particles) {
    // Render nothing on the server — ensures server markup matches client during hydration
    return <div className="absolute inset-0 -z-2" />;
  }

  return (
    <div className="absolute inset-0 -z-2 opacity-40">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: p.left,
            top: p.top,
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

interface AnimatedBackgroundProps {
  children?: ReactNode;
  className?: string;
  withPattern?: boolean;
  intensity?: 'low' | 'medium' | 'high';
  variant?: 'normal' | 'bold';
  enableParticles?: boolean;
}

export default function AnimatedBackground({
  children,
  className = '',
  withPattern = true,
  intensity = 'medium',
  variant = 'normal',
  enableParticles = true,
}: AnimatedBackgroundProps) {
  const intensityMap = {
    low: { opacity: 0.35, scale: 0.9, blur: 38 },
    medium: { opacity: 0.55, scale: 1, blur: 44 },
    high: { opacity: 0.8, scale: 1.15, blur: 52 },
  } as const;

  const resolvedIntensity: AnimatedBackgroundProps['intensity'] = variant === 'bold' ? 'high' : intensity;
  const { opacity, scale, blur } = intensityMap[resolvedIntensity];

  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden={true}>
      {/* Enhanced base gradient with deeper depth */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 -z-20" 
          style={{ 
            // simple white -> light blue base (no other colors)
            background: 'linear-gradient(180deg, #ffffff 0%, #f4fbff 40%, #eef8ff 100%)' 
          }} 
        />

        {/* Animated color bands with improved blend */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            // blue band with subtle red accents using only blue/red/white
            background: 'linear-gradient(100deg, rgba(10,90,200,0.14) 0%, rgba(255,255,255,0.06) 20%, rgba(220,50,60,0.10) 60%, rgba(255,255,255,0.02) 90%)',
            mixBlendMode: 'screen',
            animation: 'band 20s ease-in-out infinite',
          }}
        />

        {/* Secondary flowing gradient */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(ellipse at 70% 30%, rgba(10,110,220,0.22) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(220,50,60,0.16) 0%, transparent 55%)',
            animation: 'drift 30s ease-in-out infinite alternate',
          }}
        />

        {/* Enhanced blurred orbs with more variety */}
        <div className="absolute -z-10">
          {/* Primary blue orb (white core, blue outer) */}
          <div
            style={{
              position: 'absolute',
              left: '4%',
              top: '-8%',
              width: 520,
              height: 520,
              borderRadius: '9999px',
              filter: `blur(${blur}px)`,
              background: 'radial-gradient(circle at 25% 20%, rgba(255,255,255,0.98) 0%, rgba(80,160,255,0.9) 12%, rgba(80,160,255,0.55) 40%, rgba(80,160,255,0) 75%)',
              opacity: Math.min(1, opacity + 0.45),
              transform: `scale(${scale})`,
              animation: 'softFloat 22s ease-in-out infinite',
            }}
          />

          {/* Red accent orb (white core, red outer) */}
          <div
            style={{
              position: 'absolute',
              right: '6%',
              top: '6%',
              width: 460,
              height: 460,
              borderRadius: '9999px',
              filter: `blur(${blur - 4}px)`,
              background: 'radial-gradient(circle at 80% 30%, rgba(255,255,255,0.98) 0%, rgba(255,110,110,0.9) 10%, rgba(255,110,110,0.55) 38%, rgba(255,110,110,0) 75%)',
              opacity: Math.min(1, opacity * 1.05),
              transform: `scale(${scale * 0.95})`,
              animation: 'softFloat 26s ease-in-out infinite reverse',
            }}
          />

          {/* Blue secondary orb (white core) */}
          <div
            style={{
              position: 'absolute',
              left: '45%',
              bottom: '-5%',
              width: 380,
              height: 380,
              borderRadius: '9999px',
              filter: `blur(${blur - 8}px)`,
              background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.98) 0%, rgba(120,180,255,0.86) 10%, rgba(120,180,255,0.45) 38%, rgba(120,180,255,0) 68%)',
              opacity: Math.min(1, opacity * 0.85),
              transform: `scale(${scale * 0.85})`,
              animation: 'softFloat 28s ease-in-out infinite',
            }}
          />

          {/* Small blue/white accent orb */}
          <div
            style={{
              position: 'absolute',
              right: '25%',
              bottom: '15%',
              width: 320,
              height: 320,
              borderRadius: '9999px',
              filter: `blur(${blur - 12}px)`,
              background: 'radial-gradient(circle at 60% 40%, rgba(255,255,255,0.98) 0%, rgba(140,200,255,0.82) 12%, rgba(140,200,255,0) 72%)',
              opacity: Math.min(1, opacity * 0.75),
              transform: `scale(${scale * 0.8})`,
              animation: 'softFloat 24s ease-in-out infinite reverse',
            }}
          />
        </div>

        {/* Soft white overlay to brighten the scene a bit */}
        <div
          className="absolute inset-0 pointer-events-none -z-1"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, transparent 100%)',
            mixBlendMode: 'screen',
            opacity: 0.9,
          }}
        />

        {/* Enhanced linear gradients overlay */}
          <svg className="absolute inset-0 -z-5 opacity-20" width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="lg1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
              <stop offset="30%" stopColor="#eaf7ff" stopOpacity="0.12" />
              <stop offset="60%" stopColor="#ffeaea" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#lg1)" />
        </svg>

        {/* Enhanced floating lines with multiple layers */}
        {withPattern && (
          <>
            <svg className="absolute inset-0 -z-4 opacity-20" width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden="true">
              <g stroke="rgba(200,220,255,0.08)" strokeWidth="1.2">
                <line x1="0" y1="100" x2="1200" y2="130">
                  <animate attributeName="x1" dur="20s" values="0; -60; 0" repeatCount="indefinite" />
                  <animate attributeName="x2" dur="20s" values="1200; 1140; 1200" repeatCount="indefinite" />
                </line>
                <line x1="0" y1="300" x2="1200" y2="330">
                  <animate attributeName="x1" dur="24s" values="0; -90; 0" repeatCount="indefinite" />
                  <animate attributeName="x2" dur="24s" values="1200; 1110; 1200" repeatCount="indefinite" />
                </line>
                <line x1="0" y1="500" x2="1200" y2="520">
                  <animate attributeName="x1" dur="28s" values="0; -70; 0" repeatCount="indefinite" />
                  <animate attributeName="x2" dur="28s" values="1200; 1130; 1200" repeatCount="indefinite" />
                </line>
              </g>
            </svg>

            {/* Subtle grid pattern */}
            <div 
              className="absolute inset-0 -z-3 opacity-[0.02]"
              style={{
                backgroundImage: 'linear-gradient(rgba(220,235,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(220,235,255,0.02) 1px, transparent 1px)',
                backgroundSize: '80px 80px',
              }}
            />
          </>
        )}

        {/* Floating particles/dots */}
        {enableParticles && (
          <ParticlesLayer />
        )}

        {/* Remove dark vignette; keep a very light center bloom */}
        <div 
          className="absolute inset-0 -z-1 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.2) 100%)',
          }}
        />

        <style>{`
          @keyframes softFloat {
            0%, 100% { transform: translateY(0) scale(1); }
            25% { transform: translateY(-12px) scale(1.01); }
            50% { transform: translateY(-20px) scale(1.03); }
            75% { transform: translateY(-8px) scale(1.01); }
          }

          @keyframes band {
            0%, 100% { transform: translateX(-8%); }
            50% { transform: translateX(8%); }
          }

          @keyframes drift {
            0% { transform: translate(0, 0) rotate(0deg); }
            100% { transform: translate(5%, -5%) rotate(2deg); }
          }

          @keyframes float {
            0%, 100% { transform: translate(0, 0); opacity: 0.2; }
            50% { transform: translate(20px, -30px); opacity: 0.6; }
          }

          @media (prefers-reduced-motion: reduce) {
            .about-animated *, 
            .about-animated *::before, 
            .about-animated *::after { 
              animation: none !important; 
              transition: none !important;
            }
          }
        `}</style>
      </div>

      {/* Content layer */}
      <div className="relative z-10 about-animated">
        {children}
      </div>
    </div>
  );
}