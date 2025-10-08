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
  <HeroCarousel />

  <div className="pt-6" />

  <VisionMission />

  <div className="pt-6" />
  <OutreachCards />

  <EventsList />

<div className="pt-6" />
  <ContactForm />
    </div>
  );
}
