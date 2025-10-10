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
    <div className="relative w-full overflow-x-hidden mt-6">
      <HeroCarousel />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-12">
          <VisionMission />
        </div>

        <div className="mt-12">
          <OutreachCards />
        </div>

        <div className="mt-12">
          <EventsList />
        </div>

        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
    