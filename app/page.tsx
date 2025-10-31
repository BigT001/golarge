"use client"
import VisionMission from "./components/VisionMission"
import VisionSchoolCard from "./components/VisionSchoolCard"
import ContactForm from "./components/forms/ContactForm"
import Vision2020 from "./components/Vision2020"
import Hero from "./components/Hero"
import QuoteCard from "./components/QuoteCard"
import Gvv from "./components/Gvv"

export default function Home() {
  return (
    <main >

      <div className="">
        <Hero />
      </div>

      <div className="">
        <QuoteCard />
      </div>


      <div className="mx-auto lg:py-10 lg:px-10">
        <VisionMission />
      </div>

      <div className="mx-auto lg:py-10 lg:px-10">
        <Gvv />
      </div>

      <div className="mx-auto lg:py-10 lg:px-10 px-5  py-10">
        <ContactForm />
      </div>

    </main>
  )
}
