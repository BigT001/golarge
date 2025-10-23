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
    images: ["/logofolder/golargelogo.png"],
  },
};

export default function VisionSchoolPage() {
  return (
    <div className="min-h-screen py-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-white to-amber-50">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none"></div>
      
      {/* Animated hero */}
      <header className="max-w-7xl mx-auto text-center relative overflow-hidden rounded-3xl py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-amber-600/10 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/90 via-white/70 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-700 font-medium text-sm">
              Welcome to Excellence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-transparent bg-clip-text animate-gradient">
                The Vision
              </span>{" "}
              <span className="inline-block bg-gradient-to-r from-amber-600 to-red-600 text-transparent bg-clip-text animate-gradient-delayed">
                School
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-medium">
              See Clearly. Think Deeply. Build Boldly — practical training that helps you translate revelation into real-world impact.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-amber-600/20 group-hover:opacity-75 transition-opacity duration-500"></div>
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
              <div className="md:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <h2 className="text-3xl font-bold text-amber-800 mb-4">Vision</h2>
                <p className="text-lg text-amber-900">Raising conceptual thinkers who see possibilities through the lens of purpose.</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl h-full">
                <Image 
                  src="/heroimages/image3.jpeg" 
                  alt="Vision in Action" 
                  width={800} 
                  height={600} 
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-700" 
                />
              </div>
            </section>

            {/* Core Values Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 shadow-xl group hover:-translate-y-2 transition-all duration-300">
                <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">🔍</span>
                <h4 className="text-lg font-bold text-teal-800">Clarity</h4>
                <p className="text-teal-900 mt-2">We pursue understanding and revelation before action, building practices for discernment.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 shadow-xl group hover:-translate-y-2 transition-all duration-300">
                <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">⚖️</span>
                <h4 className="text-lg font-bold text-blue-800">Integrity</h4>
                <p className="text-blue-900 mt-2">We build lives and visions that reflect godly character, emphasizing leadership formation.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 shadow-xl group hover:-translate-y-2 transition-all duration-300">
                <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">🙏</span>
                <h4 className="text-lg font-bold text-purple-800">Faith</h4>
                <p className="text-purple-900 mt-2">We trust God's process in the unfolding of every vision through practical steps.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-red-50 border border-rose-100 shadow-xl group hover:-translate-y-2 transition-all duration-300">
                <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">💡</span>
                <h4 className="text-lg font-bold text-rose-800">Innovation</h4>
                <p className="text-rose-900 mt-2">We embrace creativity and fresh ideas as expressions of divine wisdom.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 shadow-xl group hover:-translate-y-2 transition-all duration-300">
                <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">✨</span>
                <h4 className="text-lg font-bold text-amber-800">Excellence</h4>
                <p className="text-amber-900 mt-2">Pursuing the highest standards in every endeavor.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 shadow-xl group hover:-translate-y-2 transition-all duration-300">
                <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">🎯</span>
                <h4 className="text-lg font-bold text-emerald-800">Impact</h4>
                <p className="text-emerald-900 mt-2">Measuring success through transformation and lasting change.</p>
              </div>
            </section>            
          </div>

          <aside className="md:col-span-4">
            <div className="sticky top-8">
              <div className="relative">
                <div className="relative z-10">
                  <div className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Vision School</div>
                  <h3 className="text-2xl font-bold text-slate-900 mt-2">Begin Your Journey</h3>
                  <p className="text-slate-700 mt-3">Start your transformative journey with us today.</p>
                  <div id="signup" className="mt-6">
                    <div className="text-slate-800">
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