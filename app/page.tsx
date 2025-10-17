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

export default function Home() {
  return (
    <div className="">
        <div className="lg:mt-8 mt-6">
          <HeroCarousel />
        </div>
      
        <div className="mt-12 lg:px-40">
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
    