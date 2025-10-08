import Image from "next/image";

type Props = {
  imageFirst?: boolean; // when true, image appears on the right on large screens
  accentClass?: string; // optional gradient class for accents
};

export default function VisionMission({ imageFirst = false, accentClass = "from-amber-500 to-rose-500" }: Props) {
  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      {/* color wash */}
      <div className={`absolute -left-40 -top-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr ${accentClass} opacity-10 pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${imageFirst ? 'lg:flex-row-reverse' : ''}`}>

          {/* Image column */}
          <div className="relative order-1 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform">
              <div className="relative w-full h-96 lg:h-[520px] bg-gray-800">
                <Image src="/pastor2.png" alt="Community" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent mix-blend-multiply" />
              </div>
            </div>

            {/* floating card */}
            <div className="absolute -bottom-12 left-6 w-[320px] md:w-[380px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 transform transition-transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-200 to-rose-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 1.343-3 3v7h6v-7c0-1.657-1.343-3-3-3zM12 5a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Our Vision</h4>
                  <p className="text-sm text-gray-600">Building thriving communities where people belong and grow.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="pt-8 lg:pt-0 order-2 lg:order-2">
            <h2 className="text-4xl font-extrabold mb-4">Vision & Mission</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              We exist to empower individuals and communities through intentional programs, events and partnerships. Our work is practical, compassionate and built to last.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <article className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-l-4 border-amber-500 shadow hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">What we do</h3>
                <p className="text-gray-600">Community programs, training, youth initiatives and large-scale events designed to create meaningful impact.</p>
              </article>

              <article className="p-6 rounded-2xl bg-white border-l-4 border-rose-500 shadow hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">How we measure impact</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>People served</li>
                  <li>Local partnerships</li>
                  <li>Sustainable outcomes</li>
                </ul>
              </article>

              <article className="sm:col-span-2 p-6 rounded-2xl bg-gradient-to-tr from-amber-50 to-rose-50 border border-transparent shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Get involved</h3>
                <p className="text-gray-700">Join our programs, volunteer, or partner with us. We provide clear ways to participate and grow together.</p>
                <div className="mt-4 flex items-center gap-3">
                  <a href="/ministries" className="px-4 py-2 rounded bg-amber-600 text-white">Explore Ministries</a>
                  <a href="/contact" className="px-4 py-2 rounded border">Contact Us</a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
