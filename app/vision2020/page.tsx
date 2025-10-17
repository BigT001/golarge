import Vision2020 from "../components/Vision2020";

export const metadata = {
  title: "Vision 20/20 — 20 Years of Prayer Investment",
  description: "Join the 20-year prayer investment — impart generational blessings and submit prayer requests.",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 text-balance">
              20 Years of Prayer Investment
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-2 font-medium">
              It's Time to Impart Generational Blessings
            </p>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Join our prayer investment program and watch spiritual returns compound across generations
            </p>
          </div>

          {/* Vision2020 component (chart + prayer form) */}
          <div>
            <Vision2020 />
          </div>
        </div>
      </section>

      {/* Isaac's Blessing Section */}
      <section className="py-16 md:py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">The Power of Generational Blessing</h2>

          <div className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md mb-8">
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              When Isaac was near the end of his life, he spoke a blessing over Jacob:
            </p>
            <blockquote className="text-lg italic text-slate-700 mb-4 pl-6 border-l-2 border-slate-300">
              "May God give you of the dew of heaven, of the fatness of the earth, and plenty of grain and wine. Let
              peoples serve you, and nations bow down to you. Be master over your brethren, and let your mother's sons
              bow down to you. Cursed be everyone who curses you, and blessed be those who bless you!"
            </blockquote>
            <p className="text-sm text-slate-500 font-medium">— Genesis 27:28–29</p>
          </div>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <p>
              Jacob left his father's house with nothing but this blessing. Empty-handed, fleeing for his life, he
              journeyed to Assyria to live with his uncle Laban. For twenty years, that blessing guided and sustained
              him. Despite hardship and deceit, God prospered him in every way.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="font-bold text-slate-900 mb-3">Jacob's Testimony</h3>
              <p className="italic text-slate-700 mb-2">
                "These twenty years I have been with you; your ewes and female goats have not miscarried, and I have not
                eaten the rams of your flock."
              </p>
              <p className="text-sm text-slate-500">— Genesis 31:38, 41</p>
            </div>

            <p>And when he returned home, he declared:</p>

            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
              <p className="italic text-slate-700 mb-2">
                "I crossed over this Jordan with my staff, and now I have become two companies."
              </p>
              <p className="text-sm text-slate-500">— Genesis 32:10</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
              <p className="font-bold text-slate-900 mb-2">The Blessing Multiplied</p>
              <p className="text-lg font-semibold text-slate-900">
                In just 20 years, the blessing made him two companies!
              </p>
              <p className="text-slate-700 mt-2">No investment on earth can match the return of God's blessing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Shift Section */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">The Generational Shift</h2>

          <div className="space-y-6 text-slate-700">
            <p className="text-lg leading-relaxed">
              For too long, we have focused on breaking generational curses. But the next generation—
              <span className="font-bold text-slate-900">Generation Z</span> and{" "}
              <span className="font-bold text-slate-900">Generation Alpha</span>—is rising to walk in the reality of
              God's blessings.
            </p>

            <div className="bg-indigo-50 rounded-xl p-8 border border-indigo-200">
              <p className="text-lg text-slate-900 font-semibold mb-3">It is the blessing that nullifies curses.</p>
              <p className="text-slate-700">
                It is the blessing that preserves destinies and multiplies generations. The time has come to shift our
                focus from breaking curses to imparting blessings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">How Vision 20/20 Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Commit to Prayer</h3>
              <p className="text-slate-600">
                Engage in focused prayer and spiritual disciplines designed to align your heart with God's blessing over
                your family and community.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Join a Cohort</h3>
              <p className="text-slate-600">
                Connect with a community for teaching, mentorship, and accountability. Grow together over the 20-year
                season.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Steward Growth</h3>
              <p className="text-slate-600">
                Track outcomes and steward the spiritual growth for long-term generational impact and multiplication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Join Section */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Who Should Join?</h2>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12 border border-blue-200">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Vision 20/20 is for anyone seeking to steward blessing into the next generation:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-2xl text-blue-600 font-bold mt-1">✓</span>
                <div>
                  <p className="font-semibold text-slate-900">Ministry Leaders</p>
                  <p className="text-slate-600">
                    Seeking to multiply spiritual impact across your congregation and community
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl text-blue-600 font-bold mt-1">✓</span>
                <div>
                  <p className="font-semibold text-slate-900">Parents & Grandparents</p>
                  <p className="text-slate-600">
                    Wanting to impart lasting spiritual legacy to your children and grandchildren
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl text-blue-600 font-bold mt-1">✓</span>
                <div>
                  <p className="font-semibold text-slate-900">Entrepreneurs & Business Leaders</p>
                  <p className="text-slate-600">
                    Seeking to align your work with God's blessing and steward resources wisely
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl text-blue-600 font-bold mt-1">✓</span>
                <div>
                  <p className="font-semibold text-slate-900">Anyone Seeking Generational Impact</p>
                  <p className="text-slate-600">
                    Ready to invest in blessing that multiplies across time and generations
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="bg-white rounded-lg p-6 border border-slate-200 group cursor-pointer hover:shadow-md transition-shadow">
              <summary className="font-semibold text-slate-900 flex items-center justify-between">
                Do I have to donate or is this only prayer?
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Prayer is primary. Where appropriate, some cohorts may include stewardship tracks for resources and
                time, but participation in prayer does not require financial contribution. This is about spiritual
                investment first.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 border border-slate-200 group cursor-pointer hover:shadow-md transition-shadow">
              <summary className="font-semibold text-slate-900 flex items-center justify-between">
                How long are cohorts?
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We run flexible cohorts—short intensives and longer mentorship tracks. You can join a cohort that fits
                your season of life. Some people commit to the full 20 years, while others join for specific seasons.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 border border-slate-200 group cursor-pointer hover:shadow-md transition-shadow">
              <summary className="font-semibold text-slate-900 flex items-center justify-between">
                What if I can't commit to 20 years?
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                The 20-year vision is the ultimate goal, but we believe in meeting people where they are. You can
                participate in shorter seasons and still experience the power of blessing. Every season of faithful
                prayer matters.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 border border-slate-200 group cursor-pointer hover:shadow-md transition-shadow">
              <summary className="font-semibold text-slate-900 flex items-center justify-between">
                How do I join a cohort?
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Contact us at contact@golarge.org to learn about available cohorts and find one that aligns with your
                calling and season. We'll help you get connected with the right community.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Now is the Time</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Impart generational blessings. Join Vision 20/20 and watch spiritual returns compound across generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Join a Cohort
            </button>
            <button className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors border border-blue-500">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-slate-400 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="mb-2">Questions? Reach out to us</p>
          <a href="mailto:contact@golarge.org" className="text-blue-400 hover:text-blue-300 font-medium">
            contact@golarge.org
          </a>
          <p className="mt-6 text-sm text-slate-500">© 2025 Vision 20/20 Prayer Investment. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
