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
    <main >
      
        <div className="">
          <HeroCarousel />
        </div>

         <div className="mx-auto lg:py-10">
          <AboutCard />
        </div>
        <div className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-black to-black text-white">
        {/* decorative backgrounds (match About page) */}
        <div className="absolute inset-0 bg-[url('/logofolder/golargelogo.png')] bg-center bg-no-repeat opacity-[0.02] bg-fixed"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0,rgba(255,255,255,0.05),transparent_50%)]"></div>
  

        {/* subtle color orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-24 right-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl"></div>
      
       
      

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
    </main>
  )
}
