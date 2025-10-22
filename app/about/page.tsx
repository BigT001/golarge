import Image from "next/image";
import Faq from "../components/Faq";

export default function AboutPage() {
  return (
    <main className="space-y-24">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-50 via-white to-red-50 py-20 rounded-3xl shadow-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">
              About GoLarge Global Mandate
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              GoLarge Global Mandate is a divine movement dedicated to raising a generation
              of <span className="font-semibold text-blue-700">Kingdom-minded leaders</span> 
              who transform nations through prophetic insight, strategic leadership, and 
              intercession for the next generation. It carries a burden to repair broken cities,
              rebuild destinies, and reveal God’s glory across every sphere of influence —
              from governance and business to education, culture, and ministry.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/ministries" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition">
                Explore Ministries
              </a>
              <a href="/contact" className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition">
                Contact Us
              </a>
            </div>
          </div>

          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/pastor2.png"
              alt="GoLarge Global Mandate"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          </div>
        </div>
      </header>

      {/* Mission, Vision, Core */}
      <section className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Our Mission"
            text="To build thriving, spirit-led communities by equipping Kingdom reformers who will influence culture, transform systems, and reveal God’s heart to nations."
          />
          <Card
            title="Our Vision"
            gradient
            text="A global movement of prophetic leaders transforming nations through prayer, wisdom, and Kingdom excellence—raising a people who manifest Heaven on earth."
          />
          <Card
            title="Our Mandate"
            text="To raise reformers, rebuild nations, and release God’s glory in every sphere—empowering believers to live with vision, lead with purpose, and impact generations."
          />
        </div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/pastor1.png"
              alt="Pastor Dipo Obisesan"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-700">About the Founder</h2>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Pastor Dipo Obisesan</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A life called to awaken purpose and rebuild spiritual foundations across nations.
              <br /><br />
              Dipo Obisesan is a prophetic voice, teacher, and leader with a passion for awakening
              purpose and rebuilding spiritual foundations in nations. As the visionary founder of
              GoLarge Global Mandate, he carries a divine assignment to raise Kingdom builders who
              influence culture, systems, and generations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Through his ministry, Dipo has inspired many to pursue transformation, divine wisdom,
              and spiritual maturity. His message blends revelation with practicality—calling
              believers to rise above survival and walk in their God-given dominion.
            </p>
            <p className="text-blue-700 italic font-medium">
              “He believes that when the manna stops, it is not the end — it is the beginning of a greater harvest.”
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatCard label="Lives Impacted" value="12k+" />
          <StatCard label="Global Volunteers" value="1.2k+" />
          <StatCard label="Countries Reached" value="6+" />
          <StatCard label="Programs & Initiatives" value="45+" />
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-center text-blue-700">Our Journey</h2>
          <ol className="border-l-2 border-blue-200 pl-6 space-y-8 max-w-3xl mx-auto">
            <TimelineItem
              year="2010"
              title="Birth of the Vision"
              description="What began as a small prayer movement focused on youth mentorship has grown into a global prophetic and leadership initiative impacting thousands."
            />
            <TimelineItem
              year="2016"
              title="Expansion Beyond Borders"
              description="GoLarge established international chapters, connecting believers worldwide with a shared call to intercede, influence, and impact."
            />
            <TimelineItem
              year="2023"
              title="The Global Mandate"
              description="Through leadership summits, global missions, and training hubs, GoLarge scaled its programs to empower reformers across multiple continents."
            />
          </ol>
        </div>

        {/* FAQ + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-blue-700">Frequently Asked Questions</h2>
            <Faq question="How can I volunteer?">
              You can sign up via our Ministries page or reach out through our Contact page for available volunteer opportunities.
            </Faq>
            <Faq question="How do I donate?">
              Visit the Give page to contribute online or contact our office for other donation methods.
            </Faq>
          </div>

          <aside className="rounded-3xl p-8 bg-gradient-to-br from-blue-100 to-red-100 shadow-md">
            <h3 className="text-2xl font-semibold mb-3 text-blue-700">Get Involved</h3>
            <p className="text-gray-700 mb-5">
              Be part of what God is doing through GoLarge Global Mandate — join a program,
              volunteer, or partner with us to extend our reach and impact.
            </p>
            <div className="flex gap-4">
              <a href="/ministries" className="px-5 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition">
                Join a Program
              </a>
              <a href="/contact" className="px-5 py-2 rounded-lg border hover:bg-gray-50 transition">
                Partner With Us
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

/* Supporting Components */

function Card({
  title,
  text,
  gradient,
}: {
  title: string;
  text: string;
  gradient?: boolean;
}) {
  return (
    <article
      className={`p-8 rounded-2xl shadow transition hover:shadow-lg ${
        gradient
          ? "bg-gradient-to-br from-blue-100 to-red-100"
          : "bg-white"
      }`}
    >
      <h3 className="text-2xl font-semibold mb-3 text-blue-700">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </article>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow text-center hover:shadow-md transition">
      <div className="text-3xl font-bold text-red-600">{value}</div>
      <div className="text-sm text-gray-600 mt-2">{label}</div>
    </div>
  );
}

function TimelineItem({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) {
  return (
    <li className="relative pl-6">
      <div className="absolute -left-[13px] w-6 h-6 bg-blue-600 rounded-full border-4 border-blue-100"></div>
      <div className="text-sm text-blue-600 font-semibold">{year}</div>
      <div className="text-lg font-semibold text-gray-800">{title}</div>
      <div className="text-gray-700">{description}</div>
    </li>
  );
}
