
'use client';

import Vision2020Form from "@/app/components/forms/Vision2020Form";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Vision2020Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h1 className="relative inline-block">
              <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-red-800 mb-6 tracking-tight leading-tight">
                20 Years of Prayer Investment
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-red-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-800 to-red-800 text-transparent bg-clip-text max-w-3xl mx-auto mt-8"
            >
              It&apos;s Time to Impart Generational Blessings!
            </motion.p>
          </motion.div>

          {/* Image and Scripture Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Scripture Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl shadow-2xl p-8 text-white"
            >
              <blockquote className="text-lg md:text-xl italic mb-4 leading-relaxed">
                &quot;May God give you of the dew of heaven, of the fatness of the earth, and plenty of grain and wine.
                Let peoples serve you, and nations bow down to you. Be master over your brethren, and let your mother&apos;s sons bow down to you.
                Cursed be everyone who curses you, and blessed be those who bless you!&quot;
              </blockquote>
              <p className="text-right text-blue-200 font-semibold">— Genesis 27:28–29</p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/galleryimages/84.jpeg"
                alt="Man studying the Bible in nature"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </motion.div>
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="max-w-4xl mx-auto mb-16 space-y-8"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Jacob left his father's house with nothing but this blessing. Empty-handed, fleeing for his life,
              he journeyed to Assyria to live with his uncle Laban. For twenty years, that blessing guided and sustained him.
              Despite hardship and deceit, God prospered him in every way.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-red-900 to-red-800 rounded-xl p-6 text-white shadow-xl"
            >
              <blockquote className="text-lg italic leading-relaxed">
                &quot;These twenty years I have been with you; your ewes and female goats have not miscarried,
                and I have not eaten the rams of your flock.&quot;
              </blockquote>
              <p className="text-right mt-4 text-red-200">— Genesis 31:38, 41</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-6 text-white shadow-xl"
            >
              <blockquote className="text-lg italic leading-relaxed">
                &quot;I crossed over this Jordan with my staff, and now I have become two companies.&quot;
              </blockquote>
              <p className="text-right mt-4 text-blue-200">— Genesis 32:10</p>
            </motion.div>

            <p className="text-xl font-semibold text-gray-900">
              The blessing turned one man with nothing into a man with nations.
              In just 20 years, the blessing made him two companies!
            </p>

            <p className="text-lg">
              No investment on earth can match the return of God's blessing.
            </p>

            <p>
              For too long, we have focused on breaking generational curses. But the next generation
              — Generation Z and Generation Alpha— is rising to walk in the reality of God's blessings.
              It is the blessing that nullifies curses. It is the blessing that preserves destinies and
              multiplies generations.
            </p>

            <p className="text-2xl font-bold text-center my-8 text-blue-900">
              Now is the time to impart generational blessings!
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="text-center mb-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-red-600/10 rounded-3xl transform -skew-y-2"></div>
            <div className="relative py-12 px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-red-900 mb-4">
                Register Your Children for Vision 2040
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Secure their future in the covenant of blessing
              </p>
              <motion.div
                className="w-32 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.7 }}
              />
            </div>
          </motion.div>

          {/* Registration Form */}
          <Vision2020Form />
        </div>
      </section>
    </main>
  );
}