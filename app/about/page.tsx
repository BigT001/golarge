import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="space-y-16">
      {/* Hero */}
      <header className="bg-gradient-to-r from-amber-50 to-rose-50 py-16 rounded-lg">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Go Large</h1>
            <p className="text-lg text-gray-700 mb-6">Go Large exists to empower communities through intentional programs, training, and partnership. We believe everyone has a role to play.</p>

            <div className="flex flex-wrap gap-3">
              <a href="/ministries" className="px-5 py-3 bg-amber-600 text-white rounded-lg">Our Ministries</a>
              <a href="/contact" className="px-5 py-3 border rounded-lg">Contact Us</a>
            </div>
          </div>

          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <Image src="/pastor2.png" alt="Go Large community" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6">
        {/* Mission & Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <article className="p-6 rounded-2xl bg-white shadow">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-700">To build thriving communities through practical programs, leadership development, and compassionate outreach.</p>
          </article>

          <article className="p-6 rounded-2xl bg-gradient-to-br from-amber-100 to-rose-100 shadow">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-800">A world where everyone belongs and has the opportunity to grow spiritually, socially, and economically.</p>
          </article>

          <article className="p-6 rounded-2xl bg-white shadow">
            <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
            <p className="text-gray-700">We partner with local leaders to deliver sustainable programs that address education, youth development, and community health.</p>
          </article>
        </div>

        {/* Animated stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
          <StatCard label="People Served" value={"12k+"} />
          <StatCard label="Volunteers" value={"1.2k+"} />
          <StatCard label="Countries" value={"6"} />
          <StatCard label="Programs" value={"45"} />
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <ol className="border-l-2 border-amber-200 pl-6 space-y-6">
            <li>
              <div className="text-sm text-amber-600 font-semibold">2010</div>
              <div className="text-lg font-semibold">Founded</div>
              <div className="text-gray-700">Go Large started as a small community gathering focused on youth mentorship and has grown into a global movement.</div>
            </li>
            <li>
              <div className="text-sm text-amber-600 font-semibold">2016</div>
              <div className="text-lg font-semibold">First International Chapter</div>
              <div className="text-gray-700">We established our first international chapter to support diaspora communities and cross-cultural exchange.</div>
            </li>
            <li>
              <div className="text-sm text-amber-600 font-semibold">2023</div>
              <div className="text-lg font-semibold">Scaling Programs</div>
              <div className="text-gray-700">Expanded vocational training and education initiatives across multiple regions.</div>
            </li>
          </ol>
        </div>

        {/* Team grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <TeamCard name="Pastor Dipo obisesan" role="Founder" img="/pastor1.png" />
            <TeamCard name="Pastor B" role="community Pastor" img="/pastor2.png" />
            <TeamCard name="Pastor C" role="Community Director" img="/pastor3.png" />
          </div>
        </div>

        {/* FAQ + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Frequently asked questions</h2>
            <Faq question="How can I volunteer?">You can sign up via our ministries page or contact our office for available roles.</Faq>
            <Faq question="How do I donate?">Visit the Give page to donate online or contact the office for other methods.</Faq>
          </div>

          <aside className="rounded-2xl p-6 bg-gradient-to-br from-amber-100 to-rose-100 shadow">
            <h3 className="text-xl font-semibold mb-2">Get involved</h3>
            <p className="text-gray-800 mb-4">Join a program, volunteer, or partner with us to expand our impact.</p>
            <div className="flex gap-3">
              <a href="/ministries" className="px-4 py-2 rounded bg-amber-600 text-white">Explore Ministries</a>
              <a href="/contact" className="px-4 py-2 rounded border">Contact</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow text-center">
      <div className="text-2xl font-bold text-amber-600">{value}</div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </div>
  );
}

function TeamCard({ name, role, img }: { name: string; role: string; img: string }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow flex items-center gap-4">
      <div className="w-20 h-20 rounded-lg overflow-hidden relative">
        <Image src={img} alt={name} fill style={{ objectFit: 'cover' }} />
      </div>
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-600">{role}</div>
      </div>
    </div>
  );
}

import Faq from "../components/Faq";
