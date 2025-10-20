"use client";

import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "./components/HeroCarousel";
import VisionMission from "./components/VisionMission";
import VisionSchoolCard from "./components/VisionSchoolCard";
import OutreachCards from "./components/OutreachCards";
import EventsList from "./components/EventsList";
import ContactForm from "./components/ContactForm";
import Vision2020 from "./components/Vision2020";
import AboutCard from "./components/AboutCard";
import AnimatedBackground from "./components/AnimatedBackground";

export default function Home() {
  return (
    <div className="">
      <AnimatedBackground className="" variant="bold">
        <div className="lg:mt-8 mt-6">
          <HeroCarousel />
        </div>
        </AnimatedBackground>

        <AnimatedBackground className="" variant="bold">
          <div className="mx-auto lg:py-10 lg:px-10">
            <AboutCard />
          </div>
        </AnimatedBackground>

        <div className="lg:px-10 lg:py-10">
          <VisionMission />
        </div>        
        
        <div className="mt-12 px-4 lg:px-20 ">
        <OutreachCards />
        </div>

         <div className="mt-12 lg:px-10">
          <VisionSchoolCard />
        </div>

         <div className="mt-12 lg:px-10">
          <Vision2020 />
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
    