import Link from "next/link";
import Image from "next/image";
import Vision2020Form from "../components/forms/Vision2020Form";
import VisionSignupForm from "../components/forms/VisionSignupForm";

export const metadata = {
  title: "The Vision School — GoLarge",
  description: "The Vision School: Raising conceptual thinkers who see possibilities through the lens of purpose. Equipping believers to carry divine vision and create lasting impact.",
  openGraph: {
    title: "The Vision School — GoLarge",
    description: "The Vision School: Raising conceptual thinkers who see possibilities through the lens of purpose.",
    images: ["//golargelogo.png"],
  },
};

export default function VisionSchoolPage() {
  return (
    <div className="min-h-screen py-10 bg-white text-slate-900 px-6 md:px-0">
      {/* Animated hero */}
      <header className="max-w-7xl mx-auto text-center relative overflow-hidden px-6 md:px-0">

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 mt-10 mb-10 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm">
              Welcome to Excellence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3">
              <span className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 text-transparent bg-clip-text animate-gradient">
                The Vision
              </span>{" "}
              <span className="inline-block bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text animate-gradient-delayed">
                School
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-medium">
              See Clearly. Think Deeply. Build Boldly — practical training that helps you translate revelation into real-world impact.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500 group">
              <Image
                src="/schoolimg.jpeg"
                alt="Vision School"
                width={900}
                height={560}
                className="object-cover hover:scale-110 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      <main className="lg:px-20 mx-auto mt-16 px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-12 space-y-8">
            {/* About / Photo (side-by-side on md+) */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-8 bg-white border border-gray-200 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 via-blue-500 to-rose-500 bg-clip-text text-transparent">About The Vision School</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">The Vision School is a transformative learning platform dedicated to raising believers who think conceptually, lead purposefully, and create impact through divine insight. We exist to bridge revelation and application—helping individuals translate God-given visions into strategies that influence culture, ministry, and the marketplace. Through teaching, mentorship, and innovation, we equip a generation of leaders to see beyond limits and build according to divine patterns.</p>

                <h3 className="text-xl font-bold text-slate-900 mb-3">Program Overview</h3>
                <p className="text-lg text-slate-700 leading-relaxed">The Vision School is a leadership development platform designed to awaken the visionary capacity in believers. Through teaching, mentorship, and guided practice, participants learn how to receive divine ideas, interpret purpose, and translate revelation into real-world solutions. It is a place where vision meets clarity, and faith meets strategy—raising a generation of thinkers, builders, and innovators who create change from a place of conviction and divine insight.</p>
              </div>

                {/* Image (full-width large) */}
                <div className="rounded-2xl overflow-hidden flex justify-center items-center w-full">
                  <div className="w-full max-w-none md:max-w-4xl lg:max-w-4xl h-96 md:h-[36rem] lg:h-[36rem] overflow-hidden">
                    <Image
                      src="/visionschoolimg/12.jpeg"
                      alt="Vision in Action"
                      width={3000}
                      height={2000}
                      className="object-cover object-top w-full h-full transition-transform duration-700"
                      priority
                    />
                  </div>
                </div>
            </section>

            {/* Core Values + Inline Signup */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Core values (spans two columns on md+) */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm group hover:-translate-y-2 transition-all duration-300">
                  <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">🔍</span>
                  <h4 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Clarity</h4>
                  <p className="text-slate-700 mt-2">We pursue understanding and revelation before action, building practices for discernment.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm group hover:-translate-y-2 transition-all duration-300">
                  <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">⚖️</span>
                  <h4 className="text-lg font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Integrity</h4>
                  <p className="text-slate-700 mt-2">We build lives and visions that reflect godly character, emphasizing leadership formation.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm group hover:-translate-y-2 transition-all duration-300">
                  <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">🙏</span>
                  <h4 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Faith</h4>
                  <p className="text-slate-700 mt-2">We trust God's process in the unfolding of every vision through practical steps.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm group hover:-translate-y-2 transition-all duration-300">
                  <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">💡</span>
                  <h4 className="text-lg font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Innovation</h4>
                  <p className="text-slate-700 mt-2">We embrace creativity and fresh ideas as expressions of divine wisdom.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm group hover:-translate-y-2 transition-all duration-300">
                  <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">✨</span>
                  <h4 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Excellence</h4>
                  <p className="text-slate-700 mt-2">Pursuing the highest standards in every endeavor.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm group hover:-translate-y-2 transition-all duration-300">
                  <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">🎯</span>
                  <h4 className="text-lg font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Impact</h4>
                  <p className="text-slate-700 mt-2">Measuring success through transformation and lasting change.</p>
                </div>
              </div>

              {/* Signup card inside main flow */}
              <div className="rounded-2xl p-6 bg-white border border-gray-200 shadow-sm h-full">
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Vision School</div>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">Begin Your Journey</h3>
                <p className="text-slate-700 mt-3">Start your transformative journey with us today.</p>
                <div id="signup" className="mt-6">
                  <div>
                    <VisionSignupForm />
                  </div>
                </div>
              </div>
            </section>
          </div>

        </div>
      </main>
    </div>
  );
}
