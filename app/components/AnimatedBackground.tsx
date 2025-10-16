"use client"

import { ReactNode } from 'react'

interface AnimatedBackgroundProps {
  children: ReactNode
}

export default function AnimatedBackground({ children }: AnimatedBackgroundProps) {
  return (
    <>
      {children}
      <style jsx global>{`
        @keyframes gradient { 
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          animation: gradient 6s ease infinite;
          background-size: 200% auto;
        }
        
        .animate-gradient-delayed {
          animation: gradient 6s ease infinite;
          animation-delay: 2s;
          background-size: 200% auto;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        @keyframes moving-line {
          0% { transform: translateX(0%); }
          100% { transform: translateX(400%); }
        }
        
        .animate-moving-line {
          animation: moving-line 15s linear infinite;
        }
        
        .animate-moving-line-delayed {
          animation: moving-line 15s linear infinite;
          animation-delay: 7.5s;
        }
        
        @keyframes light-sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-light-sweep {
          animation: light-sweep 10s linear infinite;
        }
        
        .stars-small, .stars-medium, .stars-large {
          position: fixed;
          width: 100%;
          height: 100%;
        }
        
        .stars-small {
          background-image: radial-gradient(1px 1px at 50% 50%, white, rgba(255,255,255,0));
          background-size: 50px 50px;
          animation: stars-animation-small 100s linear infinite;
        }
        
        .stars-medium {
          background-image: radial-gradient(2px 2px at 50% 50%, white, rgba(255,255,255,0));
          background-size: 100px 100px;
          animation: stars-animation-medium 150s linear infinite;
        }
        
        .stars-large {
          background-image: radial-gradient(3px 3px at 50% 50%, white, rgba(255,255,255,0));
          background-size: 200px 200px;
          animation: stars-animation-large 200s linear infinite;
        }
        
        @keyframes stars-animation-small {
          from { transform: translateY(0); }
          to { transform: translateY(-50px); }
        }
        
        @keyframes stars-animation-medium {
          from { transform: translateY(0); }
          to { transform: translateY(-100px); }
        }
        
        @keyframes stars-animation-large {
          from { transform: translateY(0); }
          to { transform: translateY(-150px); }
        }
      `}</style>
    </>
  )
}