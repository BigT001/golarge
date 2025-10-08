import Gallery from "../../components/Gallery";

const images = ['/pastor2.png','/pastor3.png','/pastor1.png'];

export default function CAPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold">Golarge Canada</h1>
        <p className="text-gray-700 mt-2">Our Canada chapters focus on youth programs, education partnerships and cultural exchange.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <section>
            <h3 className="text-2xl font-semibold mb-2">Programs</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Youth mentorship and internships</li>
              <li>Scholarship initiatives</li>
              <li>Cross-cultural workshops and exchanges</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-2">Gallery</h3>
            <Gallery images={images} alt="Canada outreach" />
          </section>
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl p-4 bg-white shadow">
            <h4 className="font-semibold">Contact</h4>
            <p className="text-sm text-gray-600">Regional lead: Sarah</p>
            <p className="text-sm">Phone: +1 555 000 0000</p>
            <p className="text-sm mt-2">Email: canada@golarge.org</p>
          </div>

          <div className="rounded-xl p-4 bg-white shadow">
            <h4 className="font-semibold">Stats</h4>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs text-gray-500">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1k+</div>
                <div className="text-xs text-gray-500">Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4</div>
                <div className="text-xs text-gray-500">Provinces</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
