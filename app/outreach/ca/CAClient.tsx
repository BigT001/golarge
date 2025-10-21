"use client";

import Gallery from "../../components/Gallery";
import { motion } from 'framer-motion';

const images = [
  '/galleryimages/130.jpeg',
  '/galleryimages/131.jpeg',
  '/galleryimages/132.jpeg',
  '/galleryimages/133.jpeg',
  '/galleryimages/134.jpeg',
  '/galleryimages/135.jpeg',
];

export default function CAClient() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <motion.header 
        initial={{opacity:0, y:10}} 
        animate={{opacity:1, y:0}} 
        transition={{duration:0.6}} 
        className="mb-8"
      >
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
          GoLarge — Canada
        </h1>
        <p className="text-slate-700 mt-2 max-w-3xl text-lg">
          Our Canadian chapters foster youth development, education partnerships, and cultural exchange. 
          Through mentorship and scholarship initiatives, we're building bridges and empowering the next generation.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">
          <motion.section 
            initial={{opacity:0, x:-10}} 
            animate={{opacity:1, x:0}} 
            transition={{duration:0.5}}
          >
            <h3 className="text-2xl font-semibold mb-4">Programs & Impact</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-red-600">Youth Mentorship</h4>
                <p className="text-slate-600 mt-2">Connecting young leaders with experienced mentors for personal and professional growth.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-red-500">Education Support</h4>
                <p className="text-slate-600 mt-2">Scholarship programs and academic partnerships with local institutions.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-red-600">Cultural Exchange</h4>
                <p className="text-slate-600 mt-2">Cross-cultural workshops and community events celebrating diversity.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-red-500">Leadership Development</h4>
                <p className="text-slate-600 mt-2">Training programs and internships for emerging community leaders.</p>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{opacity:0, x:10}} 
            animate={{opacity:1, x:0}} 
            transition={{duration:0.6}}
          >
            <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
            <Gallery images={images} alt="Canada outreach events and programs" />
          </motion.section>
        </div>

        <aside className="space-y-6">
          <motion.div 
            initial={{scale:0.98, opacity:0}} 
            animate={{scale:1, opacity:1}} 
            transition={{duration:0.5}} 
            className="rounded-xl p-6 bg-gradient-to-br from-red-50 to-amber-50 shadow-sm"
          >
            <h4 className="font-semibold text-red-900">Contact Us</h4>
            <p className="text-sm text-slate-600 mt-3">Regional Director: Sarah Thompson</p>
            <p className="text-sm text-slate-600">Phone: +1 555 000 0000</p>
            <p className="text-sm text-slate-600 mt-2">Email: canada@golarge.org</p>
            <div className="mt-4 pt-4 border-t border-red-100">
              <p className="text-sm text-slate-600">Location: Toronto, ON</p>
              <p className="text-sm text-slate-600">Office Hours: Mon-Fri, 9am-5pm ET</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{scale:0.98, opacity:0}} 
            animate={{scale:1, opacity:1}} 
            transition={{duration:0.6, delay:0.1}} 
            className="rounded-xl p-6 bg-gradient-to-br from-amber-50 to-red-50 shadow-sm"
          >
            <h4 className="font-semibold text-red-900">Impact Numbers</h4>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">12+</div>
                <div className="text-xs text-slate-600">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">1k+</div>
                <div className="text-xs text-slate-600">Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">4</div>
                <div className="text-xs text-slate-600">Provinces</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-red-100">
              <h5 className="text-sm font-semibold text-red-900 mb-2">2025 Goals</h5>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>• Expand to 3 new provinces</li>
                <li>• Launch digital mentorship platform</li>
                <li>• Double scholarship recipients</li>
              </ul>
            </div>
          </motion.div>
        </aside>
      </div>
    </div>
  );
}