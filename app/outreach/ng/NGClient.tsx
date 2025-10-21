"use client";

import Gallery from "../../components/Gallery";
import { motion } from 'framer-motion';

const images = [
  '/galleryimages/110.jpeg',
  '/galleryimages/111.jpeg',
  '/galleryimages/112.jpeg',
  '/galleryimages/113.jpeg',
  '/galleryimages/114.jpeg',
  '/galleryimages/115.jpeg',
  '/galleryimages/116.jpeg',
  '/galleryimages/117.jpeg',
];

export default function NGClient() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <motion.header initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="mb-8">
        <h1 className="text-4xl font-extrabold">GoLarge — Nigeria</h1>
        <p className="text-slate-700 mt-2 max-w-3xl">Our Nigeria chapter runs community development, vocational training and youth mentorship programs across multiple states. We equip leaders and serve communities with practical support and spiritual care.</p>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <motion.section initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{duration:0.5}}>
            <h3 className="text-2xl font-semibold mb-2">Programs & Initiatives</h3>
            <ul className="list-disc pl-5 text-slate-700 space-y-2">
              <li>Youth vocational training (carpentry, tailoring, tech bootcamps)</li>
              <li>Community health and hygiene outreach</li>
              <li>Educational scholarships and mentorship</li>
              <li>Local church strengthenings and leader development</li>
            </ul>
          </motion.section>

          <motion.section initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} transition={{duration:0.6}}>
            <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
            <Gallery images={images} alt="Nigeria outreach" />
          </motion.section>
        </div>

        <aside className="space-y-6">
          <motion.div initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.5}} className="rounded-xl p-4 bg-white shadow">
            <h4 className="font-semibold">Contact</h4>
            <p className="text-sm text-slate-600">Regional lead: Pastor Ade</p>
            <p className="text-sm">Phone: +234 800 000 0000</p>
            <p className="text-sm mt-2">Email: nigeria@golarge.org</p>
          </motion.div>

          <motion.div initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.6, delay:0.1}} className="rounded-xl p-4 bg-white shadow">
            <h4 className="font-semibold">Impact</h4>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-2xl font-bold">24</div>
                <div className="text-xs text-slate-500">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5k+</div>
                <div className="text-xs text-slate-500">Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs text-slate-500">States</div>
              </div>
            </div>
          </motion.div>
        </aside>
      </div>
    </div>
  );
}
