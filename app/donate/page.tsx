'use client';

import DonateForm from "../components/forms/DonateForm";
import Image from 'next/image';
import { motion } from "framer-motion";

export default function DonatePage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-black to-black text-white min-h-screen">
      {/* watermark and subtle textures */}
      <div className="absolute inset-0 bg-[url('/logofolder/golargelogo.png')] bg-center bg-no-repeat opacity-[0.02] bg-fixed"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0,rgba(255,255,255,0.04),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-24 right-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl"></div>

      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/50 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-indigo-200 to-rose-200 bg-clip-text text-transparent leading-tight">
              Give Online
            </h1>
            <p className="lg:text-3xl text-lg text-slate-300 leading-relaxed max-w-2xl">
              Partner with our mission by making a one-time gift or set up recurring support. Your generosity enables training, outreach and transformational projects across nations.
            </p>
          </motion.div>

          <motion.div className="relative w-full h-80 lg:h-[500px] group" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <div className="absolute -inset-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-all duration-700"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image src="/giveimg/10.jpeg" alt="Giving Platforms" width={1200} height={800} className="w-full h-auto object-top transform transition-transform group-hover:scale-105" />
            </div>
          </motion.div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
        <div className="rounded-3xl p-10 md:p-12 border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-md shadow-2xl">
          <div className="prose prose-lg mx-auto text-center text-slate-300">
            <p className="text-4xl font-semibold text-white mb-6">GIVE — You're not losing; you're planting</p>

            <p className="text-xl">There was once a farmer who loved his land. Every year, he planted his best seeds, not the leftovers. His neighbors often mocked him, saying, “Why waste the best? Keep the finest for yourself.”</p>

            <p className="text-xl">But he always smiled and said, “I’m not losing seed; I’m planting a future.”</p>

            <p className="text-xl">One year, a drought came. Fields all around him dried up, but his crops still grew — strong, green, and fruitful. His secret? The good seed he had sown in faith had deeper roots.</p>

            <p className="text-xl mb-5">That’s how giving to God works. When you give, you’re not losing; you’re planting into soil that never fails. Every seed you release creates a future you cannot yet see — in opportunities, favor, peace, and generations to come.</p>

            <blockquote className="border-l-4 border-indigo-500/30 pl-4 italic text-slate-300 text-xl">As Jesus said in Luke 6:38, <br/>“Give, and it will be given to you; a good measure, pressed down, shaken together, and running over.”</blockquote>

          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl shadow-xl overflow-hidden border border-white/10">
          <div className="grid md:grid-cols-2 items-center gap-8 p-8 md:p-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 opacity-20 rounded-xl transition-all group-hover:opacity-30"></div>
              <a href="/giveimg/10.jpeg" download className="relative block overflow-hidden rounded-xl">
                <Image src="/giveimg/10.jpeg" alt="Giving Platforms" width={1200} height={800} className="w-full h-auto object-top transform transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  
                </div>
              </a>
            </div>

            <div className=" bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10">
              <DonateForm />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
