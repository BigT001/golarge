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
    <div className="min-h-screen py-10 bg-gradient-to-b from-indigo-950 via-black to-black text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
      
      {/* Animated hero */}
      <header className="max-w-7xl mx-auto text-center relative overflow-hidden rounded-3xl py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-red-600/10 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 via-white/5 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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

      <main className="max-w-6xl mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">  
          <div className="md:col-span-8 space-y-8">
            {/* Vision Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-blue-950/40 to-black/20 border-2 border-blue-500/20 shadow-[0_0_25px_rgba(59,130,246,0.2)] transform hover:-translate-y-1 hover:border-red-500/20 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-300">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent mb-4">Vision</h2>
                <p className="text-lg text-slate-300">To raise a generation of Kingdom-minded leaders who transform nations through prophetic insight and intercession — repairing broken cities, rebuilding destinies, and revealing God's glory in every sphere of influence.</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl h-full">
                <Image 
                  src="/visionschoolimg/12.jpeg"
                  alt="Vision in Action" 
                  width={800} 
                  height={600} 
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-700" 
                />
              </div>
            </section>

            {/* Core Values Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </section>            
          </div>

          <aside className="md:col-span-4">
            <div className="sticky top-8">
              <div className="relative">
                <div className="relative z-10">
                  <div className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Vision School</div>
                  <h3 className="text-2xl font-bold text-white mt-2">Begin Your Journey</h3>
                  <p className="text-slate-300 mt-3">Start your transformative journey with us today.</p>
                  <div id="signup" className="mt-6">
                    <div className="text-white">
                      <VisionSignupForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
          