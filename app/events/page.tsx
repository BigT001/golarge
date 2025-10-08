import EventsList from "../components/EventsList";
import Gallery from "../components/Gallery";

const sampleImages = ['/pastor1.png','/pastor2.png','/pastor3.png'];

export default function EventsPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-sky-50 to-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Events & Gatherings</h1>
          <p className="text-lg text-gray-700">Find upcoming gatherings, conferences and community meetups. Join us — there's something for every season of life.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6 rounded-xl p-6 bg-white shadow border-l-4 border-sky-400">
              <h2 className="text-2xl font-semibold mb-2">Featured event</h2>
              <h3 className="text-xl font-bold">Go Large Conference 2026</h3>
              <p className="text-sm text-gray-600 mt-2">An annual gathering of leaders, volunteers and partners to learn, worship and plan for community impact.</p>
              <div className="mt-4 flex gap-3">
                <a href="/events" className="inline-block px-4 py-2 rounded bg-sky-500 text-white shadow hover:opacity-95">Register</a>
                <a href="/contact" className="inline-block px-4 py-2 rounded bg-white border border-sky-200 text-sky-600">Contact team</a>
              </div>
            </div>

            <div className="rounded-xl p-6 bg-white shadow">
              <h3 className="text-lg font-semibold mb-4">Upcoming events</h3>
              <EventsList />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl overflow-hidden shadow p-4 bg-gradient-to-br from-amber-100 to-rose-100">
              <h4 className="font-semibold">Event stats</h4>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-2xl font-bold">120+</div>
                  <div className="text-xs text-gray-700">Speakers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">8k+</div>
                  <div className="text-xs text-gray-700">Attendees</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-xs text-gray-700">Sessions</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-4 bg-white shadow">
              <h4 className="font-semibold mb-2">Past highlights</h4>
              <Gallery images={sampleImages} alt="Event highlights" />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
