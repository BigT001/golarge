'use client';

import DonateForm from "../components/forms/DonateForm";
import Image from 'next/image';
import { motion } from "framer-motion";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-rose-50 text-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-16 px-4"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 bg-clip-text text-transparent mb-6">
            Give Online
          </h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Partner with our mission by making a one-time gift or set up recurring support.
          </p>
        </motion.header>

        <div className="mx-auto max-w-4xl px-4 mb-20">
          <div className="prose prose-lg mx-auto text-center text-slate-700">
            <p className="text-2xl font-semibold text-indigo-900 mb-8">GIVE — You're not losing; you're planting</p>

            <p>There was once a farmer who loved his land. Every year, he planted his best seeds, not the leftovers. His neighbors often mocked him, saying, “Why waste the best? Keep the finest for yourself.”</p>

            <p>But he always smiled and said, “I’m not losing seed; I’m planting a future.”</p>

            <p>One year, a drought came. Fields all around him dried up, but his crops still grew — strong, green, and fruitful. His secret? The good seed he had sown in faith had deeper roots.</p>

            <p>That’s how giving to God works. When you give, you’re not losing; you’re planting into soil that never fails. Every seed you release creates a future you cannot yet see — in opportunities, favor, peace, and generations to come.</p>

            <blockquote className="border-l-4 border-slate-200 pl-4 italic text-slate-800">As Jesus said in Luke 6:38, “Give, and it will be given to you; a good measure, pressed down, shaken together, and running over.”</blockquote>

            <p>Your giving is not subtraction — it’s multiplication in disguise.</p>
          </div>
        </div>


          {/* Giving Platforms Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className=" mx-auto bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 items-center gap-8 p-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 opacity-75 rounded-xl transition-opacity group-hover:opacity-85"></div>
                <a href="/giving-platforms.png" download className="relative block overflow-hidden rounded-xl">
                  <Image 
                    src="/giveimg/10.jpeg" 
                    alt="Giving Platforms" 
                    width={900} 
                    height={600} 
                    className="w-full h-[400px] object-cover transform transition-transform group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-white/90 px-6 py-3 rounded-full font-semibold text-blue-900 shadow-lg">
                      Download Details
                    </span>
                  </div>
                </a>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                <DonateForm />
              </div>
            </div>
          </motion.section>

      </div>
    </main>
  );
}
