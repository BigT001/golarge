"use client"

import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const chartData = [
  { year: "2025", value: 1 },
  { year: "2026", value: 1.2 },
  { year: "2027", value: 1.5 },
  { year: "2028", value: 1.8 },
  { year: "2029", value: 2.2 },
  { year: "2030", value: 2.6 },
  { year: "2031", value: 3.1 },
  { year: "2032", value: 3.7 },
  { year: "2033", value: 4.4 },
  { year: "2034", value: 5.2 },
  { year: "2035", value: 6.1 },
  { year: "2036", value: 7.2 },
  { year: "2037", value: 8.4 },
  { year: "2038", value: 9.8 },
  { year: "2039", value: 11.3 },
  { year: "2040", value: 13 },
  { year: "2041", value: 15 },
  { year: "2042", value: 17.2 },
  { year: "2043", value: 19.8 },
  { year: "2044", value: 22.7 },
  { year: "2045", value: 26 },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export default function ClientPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 min-h-screen flex items-center justify-center">
        <motion.div
          className="max-w-5xl mx-auto text-center z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent mb-6 text-balance leading-tight"
              variants={floatingVariants}
              animate="animate"
            >
              20 Years of Prayer Investment
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-2xl md:text-3xl text-blue-100 font-light mb-4">
              It's Time to Impart Generational Blessings
            </p>
            <p className="text-lg md:text-xl text-blue-200/70 max-w-2xl mx-auto leading-relaxed">
              Join our prayer investment program and watch spiritual returns compound across generations
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join a Cohort
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Chart Section */}
      <section className="relative py-20 px-6">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Rate of Return on the Blessing</h2>
              <p className="text-blue-200/70">Exponential growth through faithful prayer investment over 20 years</p>
            </motion.div>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="year" stroke="rgba(255,255,255,0.5)" tick={{ fontSize: 12 }} interval={2} />
                <YAxis
                  stroke="rgba(255,255,255,0.5)"
                  tick={{ fontSize: 12 }}
                  label={{
                    value: "Blessing Multiplier",
                    angle: -90,
                    position: "insideLeft",
                    fill: "rgba(255,255,255,0.5)",
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(15, 23, 42, 0.9)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                  formatter={(value) => `${value.toFixed(1)}x`}
                />
                <Bar dataKey="value" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity={1} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </section>

      {/* Isaac's Blessing Section */}
      <section className="relative py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The Power of Generational Blessing
          </motion.h2>

          <motion.div
            className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl p-8 border border-blue-400/30 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-blue-100 mb-4 leading-relaxed">
              When Isaac was near the end of his life, he spoke a blessing over Jacob:
            </p>
            <blockquote className="text-xl italic text-blue-50 mb-4 pl-6 border-l-4 border-cyan-400">
              "May God give you of the dew of heaven, of the fatness of the earth, and plenty of grain and wine. Let
              peoples serve you, and nations bow down to you. Be master over your brethren, and let your mother's sons
              bow down to you. Cursed be everyone who curses you, and blessed be those who bless you!"
            </blockquote>
            <p className="text-sm text-blue-300 font-medium">— Genesis 27:28–29</p>
          </motion.div>

          <div className="space-y-6 text-blue-100">
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Jacob left his father's house with nothing but this blessing. Empty-handed, fleeing for his life, he
              journeyed to Assyria to live with his uncle Laban. For twenty years, that blessing guided and sustained
              him. Despite hardship and deceit, God prospered him in every way.
            </motion.p>

            <motion.div
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-6 border border-purple-400/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-white mb-3">Jacob's Testimony</h3>
              <p className="italic text-blue-100 mb-2">
                "These twenty years I have been with you; your ewes and female goats have not miscarried, and I have not
                eaten the rams of your flock."
              </p>
              <p className="text-sm text-blue-300">— Genesis 31:38, 41</p>
            </motion.div>

            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              And when he returned home, he declared:
            </motion.p>

            <motion.div
              className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-6 border border-amber-400/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="italic text-blue-100 mb-2">
                "I crossed over this Jordan with my staff, and now I have become two companies."
              </p>
              <p className="text-sm text-blue-300">— Genesis 32:10</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl p-6 border border-emerald-400/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="font-bold text-white mb-2">The Blessing Multiplied</p>
              <p className="text-xl font-semibold text-cyan-200 mb-2">
                In just 20 years, the blessing made him two companies!
              </p>
              <p className="text-blue-100">No investment on earth can match the return of God's blessing.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* The Shift Section */}
      <section className="relative py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The Generational Shift
          </motion.h2>

          <div className="space-y-6 text-blue-100">
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              For too long, we have focused on breaking generational curses. But the next generation—
              <span className="font-bold text-cyan-200">Generation Z</span> and{" "}
              <span className="font-bold text-cyan-200">Generation Alpha</span>—is rising to walk in the reality of
              God's blessings.
            </motion.p>

            <motion.div
              className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl p-8 border border-indigo-400/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-cyan-200 font-semibold mb-3">It is the blessing that nullifies curses.</p>
              <p className="text-blue-100">
                It is the blessing that preserves destinies and multiplies generations. The time has come to shift our
                focus from breaking curses to imparting blessings.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            How Vision 20/20 Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "1",
                title: "Commit to Prayer",
                desc: "Engage in focused prayer and spiritual disciplines designed to align your heart with God's blessing over your family and community.",
              },
              {
                num: "2",
                title: "Join a Cohort",
                desc: "Connect with a community for teaching, mentorship, and accountability. Grow together over the 20-year season.",
              },
              {
                num: "3",
                title: "Steward Growth",
                desc: "Track outcomes and steward the spiritual growth for long-term generational impact and multiplication.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.2)" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-white">{item.num}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-blue-200/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Who Should Join Section */}
      <section className="relative py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Who Should Join?
          </motion.h2>

          <motion.div
            className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-blue-400/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Vision 20/20 is for anyone seeking to steward blessing into the next generation:
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Ministry Leaders",
                  desc: "Seeking to multiply spiritual impact across your congregation and community",
                },
                {
                  title: "Parents & Grandparents",
                  desc: "Wanting to impart lasting spiritual legacy to your children and grandchildren",
                },
                {
                  title: "Entrepreneurs & Business Leaders",
                  desc: "Seeking to align your work with God's blessing and steward resources wisely",
                },
                {
                  title: "Anyone Seeking Generational Impact",
                  desc: "Ready to invest in blessing that multiplies across time and generations",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-3xl text-cyan-400 font-bold mt-1 flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-blue-200/70">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {[
              {
                q: "Do I have to donate or is this only prayer?",
                a: "Prayer is primary. Where appropriate, some cohorts may include stewardship tracks for resources and time, but participation in prayer does not require financial contribution. This is about spiritual investment first.",
              },
              {
                q: "How long are cohorts?",
                a: "We run flexible cohorts—short intensives and longer mentorship tracks. You can join a cohort that fits your season of life. Some people commit to the full 20 years, while others join for specific seasons.",
              },
              {
                q: "What if I can't commit to 20 years?",
                a: "The 20-year vision is the ultimate goal, but we believe in meeting people where they are. You can participate in shorter seasons and still experience the power of blessing. Every season of faithful prayer matters.",
              },
              {
                q: "How do I join a cohort?",
                a: "Contact us at contact@golarge.org to learn about available cohorts and find one that aligns with your calling and season. We'll help you get connected with the right community.",
              },
            ].map((item, idx) => (
              <motion.details
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 group cursor-pointer hover:bg-white/15 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <summary className="font-semibold text-white flex items-center justify-between">
                  {item.q}
                  <motion.span
                    className="text-blue-300 group-open:rotate-180 transition-transform"
                    initial={{ rotate: 0 }}
                  >
                    ▼
                  </motion.span>
                </summary>
                <motion.p
                  className="mt-4 text-blue-100/80 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.a}
                </motion.p>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Now is the Time
          </motion.h2>
          <motion.p
            className="text-xl text-blue-200/80 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Impart generational blessings. Join Vision 20/20 and watch spiritual returns compound across generations.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join a Cohort
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
