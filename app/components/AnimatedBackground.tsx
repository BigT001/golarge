"use client"

import { ReactNode } from 'react'

interface AnimatedBackgroundProps {
  children?: ReactNode;
  className?: string;
  withPattern?: boolean;
  intensity?: 'low' | 'medium' | 'high';
  // optional convenience prop used across the app (e.g. <AnimatedBackground variant="bold">)
  variant?: 'normal' | 'bold';
}

export default function AnimatedBackground({
  children,
  className = '',
  withPattern = true,
  intensity = 'medium',
  variant = 'normal',
}: AnimatedBackgroundProps) {
  // intensity drives opacity/scale of decorative blobs
  const intensityMap = {
    low: { opacity: 0.35, scale: 0.9 },
    medium: { opacity: 0.55, scale: 1 },
    high: { opacity: 0.8, scale: 1.15 },
  } as const;

  // allow variant to override intensity for simpler markup elsewhere
  const resolvedIntensity: AnimatedBackgroundProps['intensity'] = variant === 'bold' ? 'high' : intensity;

  const { opacity, scale } = intensityMap[resolvedIntensity];

  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden={true}>
      {/* Decorative blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute rounded-full filter blur-3xl mix-blend-overlay"
          style={{
            width: 520,
            height: 520,
            left: '-12%',
            top: '-8%',
            background: 'radial-gradient(circle at 30% 30%, #7dd3fc, #60a5fa 40%, rgba(96,165,250,0) 60%)',
            opacity: opacity,
            transform: `scale(${scale})`,
            animation: 'blob 18s ease-in-out infinite',
            animationDelay: '0s',
          }}
        />

        <div
          className="absolute rounded-full filter blur-3xl mix-blend-screen"
          style={{
            width: 420,
            height: 420,
            right: '-8%',
            top: '10%',
            background: 'radial-gradient(circle at 70% 30%, #fda4af, #fb7185 40%, rgba(251,113,133,0) 60%)',
            opacity: opacity * 0.9,
            transform: `scale(${scale * 0.95})`,
            animation: 'blob 20s ease-in-out infinite',
            animationDelay: '4s',
          }}
        />

        <div
          className="absolute rounded-full filter blur-2xl mix-blend-multiply"
          style={{
            width: 360,
            height: 360,
            left: '10%',
            bottom: '-10%',
            background: 'radial-gradient(circle at 20% 80%, #a78bfa, #7c3aed 40%, rgba(124,58,237,0) 60%)',
            opacity: opacity * 0.8,
            transform: `scale(${scale * 0.9})`,
            animation: 'blob 22s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />

        {/* subtle floating SVG accents */}
        {withPattern && (
          <svg
            className="absolute left-1/2 top-1/3 -translate-x-1/2 -z-20 opacity-30"
            width="900"
            height="600"
            viewBox="0 0 900 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g style={{ filter: 'url(#blur)' }}>
              <circle cx="120" cy="80" r="10" fill="#fff" opacity="0.6">
                <animate attributeName="cy" dur="8s" values="80;120;80" repeatCount="indefinite" />
              </circle>
              <circle cx="780" cy="460" r="8" fill="#fff" opacity="0.5">
                <animate attributeName="cy" dur="10s" values="460;420;460" repeatCount="indefinite" />
              </circle>
              <circle cx="450" cy="300" r="6" fill="#fff" opacity="0.4">
                <animate attributeName="cx" dur="12s" values="450;480;450" repeatCount="indefinite" />
              </circle>
            </g>
            <defs>
              <filter id="blur">
                <feGaussianBlur stdDeviation="20" />
              </filter>
            </defs>
          </svg>
        )}

        {/* inline keyframes for blob movement (scoped to this component) */}
        <style>{`
          @keyframes blob {
            0% { transform: translateY(0) translateX(0) scale(1) rotate(0deg); }
            33% { transform: translateY(-18px) translateX(12px) scale(1.06) rotate(10deg); }
            66% { transform: translateY(8px) translateX(-16px) scale(0.96) rotate(-6deg); }
            100% { transform: translateY(0) translateX(0) scale(1) rotate(0deg); }
          }
        `}</style>
      </div>

      {/* Content layer: keep above decorations */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}