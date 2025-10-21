"use client"
import HeroCarousel from "./components/HeroCarousel"
import VisionMission from "./components/VisionMission"
import VisionSchoolCard from "./components/VisionSchoolCard"
import OutreachCards from "./components/OutreachCards"
import ContactForm from "./components/ContactForm"
import Vision2020 from "./components/Vision2020"
import AboutCard from "./components/AboutCard"
import AnimatedBackground from "./components/AnimatedBackground"

export default function Home() {
  return (
    <div className="">
      <AnimatedBackground className="" variant="bold">
        <div className="lg:mt-8 mt-6">
          <HeroCarousel />
        </div>
      </AnimatedBackground>

      <AnimatedBackground className="" variant="subtle">
        <div className="mx-auto lg:py-10 lg:px-10">
          <AboutCard />
        </div>
      </AnimatedBackground>

      <AnimatedBackground className="lg:px-10 lg:py-10" variant="accent">
        <VisionMission />
      </AnimatedBackground>

      <AnimatedBackground className="px-4 lg:px-20" variant="bold">
        <OutreachCards />
      </AnimatedBackground>

      <AnimatedBackground className="mt-12 lg:px-10" variant="subtle">
        <VisionSchoolCard />
      </AnimatedBackground>

      <AnimatedBackground className="mt-12 lg:px-10" variant="accent">
        <Vision2020 />
      </AnimatedBackground>

      <AnimatedBackground className="mt-12" variant="bold">
        <ContactForm />
      </AnimatedBackground>
    </div>
  )
}
