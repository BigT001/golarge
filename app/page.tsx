"use client"
import HeroCarousel from "./components/HeroCarousel"
import VisionMission from "./components/VisionMission"
import VisionSchoolCard from "./components/VisionSchoolCard"
import OutreachCards from "./components/OutreachCards"
import ContactForm from "./components/forms/ContactForm"
import Vision2020 from "./components/Vision2020"
import AboutCard from "./components/AboutCard"
import AnimatedBackground from "./components/AnimatedBackground"
import Vision2020Form from "./components/forms/Vision2020Form"

export default function Home() {
  return (
    <div className="">
      
        <div className="">
          <HeroCarousel />
        </div>
      
        <div className="mx-auto lg:py-10 lg:px-10 lg:mt-20">
          <AboutCard />
        </div>
      

        <div className="mx-auto lg:py-10 lg:px-10">
        <VisionMission />
      </div>

        <div className="mx-auto lg:py-10 lg:px-10">
        <OutreachCards />
      </div>

        <div className="mx-auto lg:py-10 lg:px-10">
        <VisionSchoolCard />
      </div>

        <div className="mx-auto lg:py-10 lg:px-10">
        <Vision2020 />
      </div>

        <div className="mx-auto lg:py-10 lg:px-10">
        <ContactForm />
      </div>

      
    </div>
  )
}
