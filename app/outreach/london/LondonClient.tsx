"use client";

import Gallery from "../../components/Gallery";
import { motion } from 'framer-motion';

const images = [
  '/galleryimages/120.jpeg',
  '/galleryimages/121.jpeg',
  '/galleryimages/122.jpeg',
  '/galleryimages/123.jpeg',
  '/galleryimages/124.jpeg',
  '/galleryimages/125.jpeg',
  '/galleryimages/126.jpeg',
  '/galleryimages/127.jpeg',
];

export default function LondonClient() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <motion.header 
        initial={{opacity:0, y:10}} 
        animate={{opacity:1, y:0}} 
        transition={{duration:0.6}} 
        className="mb-8"
      >
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          GoLarge — London
        </h1>
        <p className="text-slate-700 mt-2 max-w-3xl text-lg">
          Our London chapter focuses on creative arts, community engagement, and transformative outreach events. 
          Through innovative programs and local partnerships, we're bringing hope and practical support to neighbourhoods across the city.
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
                <h4 className="font-semibold text-blue-600">Creative Arts</h4>
                <p className="text-slate-600 mt-2">Community nights featuring music, dance, and visual arts exhibitions by local talent.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-purple-600">Community Care</h4>
                <p className="text-slate-600 mt-2">Food bank partnerships and shelter support for vulnerable populations.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-600">Skills Development</h4>
                <p className="text-slate-600 mt-2">Employment readiness workshops and career mentoring programs.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-purple-600">Youth Initiatives</h4>
                <p className="text-slate-600 mt-2">After-school activities and leadership development for young people.</p>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{opacity:0, x:10}} 
            animate={{opacity:1, x:0}} 
            transition={{duration:0.6}}
          >
            <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
            <Gallery images={images} alt="London outreach events and activities" />
          </motion.section>
        </div>

        <aside className="space-y-6">
          <motion.div 
            initial={{scale:0.98, opacity:0}} 
            animate={{scale:1, opacity:1}} 
            transition={{duration:0.5}} 
            className="rounded-xl p-6 bg-gradient-to-br from-blue-50 to-purple-50 shadow-sm"
          >
            <h4 className="font-semibold text-blue-900">Contact Us</h4>
            <p className="text-sm text-slate-600 mt-3">Regional Director: Emma Thompson</p>
            <p className="text-sm text-slate-600">Phone: +44 20 0000 0000</p>
            <p className="text-sm text-slate-600 mt-2">Email: london@golarge.org</p>
            <div className="mt-4 pt-4 border-t border-blue-100">
              <p className="text-sm text-slate-600">Location: Central London</p>
              <p className="text-sm text-slate-600">Office Hours: Mon-Fri, 9am-5pm</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{scale:0.98, opacity:0}} 
            animate={{scale:1, opacity:1}} 
            transition={{duration:0.6, delay:0.1}} 
            className="rounded-xl p-6 bg-gradient-to-br from-purple-50 to-blue-50 shadow-sm"
          >
            <h4 className="font-semibold text-purple-900">Impact Numbers</h4>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">18+</div>
                <div className="text-xs text-slate-600">Active Programs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">2k+</div>
                <div className="text-xs text-slate-600">Annual Impact</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10</div>
                <div className="text-xs text-slate-600">Boroughs</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-purple-100">
              <h5 className="text-sm font-semibold text-purple-900 mb-2">2025 Goals</h5>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>• Expand to 5 new neighbourhoods</li>
                <li>• Launch youth mentorship program</li>
                <li>• Partner with 10+ local businesses</li>
              </ul>
            </div>
          </motion.div>
        </aside>
      </div>
    </div>
  );
}