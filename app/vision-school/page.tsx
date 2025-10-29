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
    <div className="min-h-screen py-10 bg-gradient-to-b from-indigo-950 via-black to-black text-white px-6 md:px-0">
  {/* grid background removed to give image more focus */}

      {/* Animated hero */}
      <header className="max-w-7xl mx-auto text-center relative overflow-hidden px-6 md:px-0">
        <div className="absolute inset-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 via-white/5 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 mt-10 mb-10 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-red-500/10 text-white font-medium text-sm">
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
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
              See Clearly. Think Deeply. Build Boldly — practical training that helps you translate revelation into real-world impact.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-red-600/20 group-hover:opacity-75 transition-opacity duration-500"></div>
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
              <div className="rounded-2xl p-8 bg-gradient-to-b from-white/3 to-white/[0.02] border border-white/8 shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4 bg-gradient-to-r from-white via-indigo-200 to-rose-200 bg-clip-text text-transparent">About The Vision School</h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">The Vision School is a transformative learning platform dedicated to raising believers who think conceptually, lead purposefully, and create impact through divine insight. We exist to bridge revelation and application—helping individuals translate God-given visions into strategies that influence culture, ministry, and the marketplace. Through teaching, mentorship, and innovation, we equip a generation of leaders to see beyond limits and build according to divine patterns.</p>

                <h3 className="text-xl font-bold text-white mb-3">Program Overview</h3>
                <p className="text-lg text-slate-300 leading-relaxed">The Vision School is a leadership development platform designed to awaken the visionary capacity in believers. Through teaching, mentorship, and guided practice, participants learn how to receive divine ideas, interpret purpose, and translate revelation into real-world solutions. It is a place where vision meets clarity, and faith meets strategy—raising a generation of thinkers, builders, and innovators who create change from a place of conviction and divine insight.</p>
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
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 to-black/20 border-2 border-blue-500/20 shadow-[0_0_25px_rgba(59,130,246,0.2)] group hover:-translate-y-2 hover:border-red-500/20 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-300">
                  <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">🔍</span>
                  <h4 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">Clarity</h4>
                  <p className="text-slate-300 mt-2">We pursue understanding and revelation before action, building practices for discernment.</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-red-950/40 to-black/20 border-2 border-red-500/20 shadow-[0_0_25px_rgba(239,68,68,0.2)] group hover:-translate-y-2 hover:border-blue-500/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">⚖️</span>
                  <h4 className="text-lg font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">Integrity</h4>
                  <p className="text-slate-300 mt-2">We build lives and visions that reflect godly character, emphasizing leadership formation.</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 to-black/20 border-2 border-blue-500/20 shadow-[0_0_25px_rgba(59,130,246,0.2)] group hover:-translate-y-2 hover:border-red-500/20 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-300">
                  <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">🙏</span>
                  <h4 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">Faith</h4>
                  <p className="text-slate-300 mt-2">We trust God's process in the unfolding of every vision through practical steps.</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-red-950/40 to-black/20 border-2 border-red-500/20 shadow-[0_0_25px_rgba(239,68,68,0.2)] group hover:-translate-y-2 hover:border-blue-500/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">💡</span>
                  <h4 className="text-lg font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">Innovation</h4>
                  <p className="text-slate-300 mt-2">We embrace creativity and fresh ideas as expressions of divine wisdom.</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 to-black/20 border-2 border-blue-500/20 shadow-[0_0_25px_rgba(59,130,246,0.2)] group hover:-translate-y-2 hover:border-red-500/20 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-300">
                  <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">✨</span>
                  <h4 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">Excellence</h4>
                  <p className="text-slate-300 mt-2">Pursuing the highest standards in every endeavor.</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-red-950/40 to-black/20 border-2 border-red-500/20 shadow-[0_0_25px_rgba(239,68,68,0.2)] group hover:-translate-y-2 hover:border-blue-500/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">🎯</span>
                  <h4 className="text-lg font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">Impact</h4>
                  <p className="text-slate-300 mt-2">Measuring success through transformation and lasting change.</p>
                </div>
              </div>

              {/* Signup card inside main flow */}
              <div className="rounded-2xl p-6 bg-gradient-to-b from-white/3 to-white/[0.02] border border-white/8 shadow-2xl h-full">
                <div className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Vision School</div>
                <h3 className="text-2xl font-bold text-white mt-2">Begin Your Journey</h3>
                <p className="text-slate-300 mt-3">Start your transformative journey with us today.</p>
                <div id="signup" className="mt-6">
                  <div className="text-white">
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
