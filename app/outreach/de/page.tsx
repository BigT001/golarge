import Gallery from "../../components/Gallery";

const images = ['/pastor1.png','/pastor2.png','/pastor3.png'];

export default function DEPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold">Golarge Germany</h1>
        <p className="text-gray-700 mt-2">The Germany hub coordinates regional partnerships, training programs and exchange initiatives across Europe.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <section>
            <h3 className="text-2xl font-semibold mb-2">Programs</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Regional leadership training</li>
              <li>Volunteer exchange and placements</li>
              <li>Community integration programs</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-2">Gallery</h3>
            <Gallery images={images} alt="Germany outreach" />
          </section>
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl p-4 bg-white shadow">
            <h4 className="font-semibold">Contact</h4>
            <p className="text-sm text-gray-600">Regional lead: Markus</p>
            <p className="text-sm">Phone: +49 30 000 0000</p>
            <p className="text-sm mt-2">Email: germany@golarge.org</p>
          </div>

          <div className="rounded-xl p-4 bg-white shadow">
            <h4 className="font-semibold">Stats</h4>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-2xl font-bold">8</div>
                <div className="text-xs text-gray-500">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">600+</div>
                <div className="text-xs text-gray-500">Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5</div>
                <div className="text-xs text-gray-500">Regions</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
