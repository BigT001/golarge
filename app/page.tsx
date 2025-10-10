"use client";

import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "./components/HeroCarousel";
import VisionMission from "./components/VisionMission";
import OutreachCards from "./components/OutreachCards";
import EventsList from "./components/EventsList";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="">
        <div className="lg:mt-8 mt-6">
          <HeroCarousel />
        </div>
      
        <div className="mt-12 lg:px-40">
          <VisionMission />
        </div>

        <div className="mt-6 bg-black px-4 lg:px-20 kinetic-gradient">
        <OutreachCards />
        <style jsx>{`
          .kinetic-gradient{ position: relative; overflow: hidden; background: linear-gradient(120deg, #071233 0%, #0f3260 40%, #b91c1c 75%); background-size: 300% 300%; }
          .kinetic-gradient{
            animation: gradientShift 12s ease infinite;
          }
          .kinetic-gradient::after{
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image: radial-gradient(circle at 10% 20%, rgba(255,255,255,0.03) 0%, transparent 15%),
                              radial-gradient(circle at 80% 70%, rgba(255,255,255,0.02) 0%, transparent 18%);
            mix-blend-mode: screen;
            opacity: 0.9;
            transition: opacity 0.3s ease;
          }
          @keyframes gradientShift {
            0%{ background-position: 0% 50%; }
            50%{ background-position: 100% 50%; }
            100%{ background-position: 0% 50%; }
          }
        `}</style>
        </div>

        <div className="mt-12">
          <EventsList />
        </div>

        <div className="mt-12">
          <ContactForm />
        </div>
    

      {/* full-bleed Outreach section (placed outside the centered container) */}
      
   
    </div>
  );
}
    