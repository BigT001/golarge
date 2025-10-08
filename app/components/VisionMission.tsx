import Image from "next/image";

export default function VisionMission() {
  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      {/* Decorative diagonal background */}
      <div className="absolute -left-48 -top-40 w-[700px] h-[700px] bg-gradient-to-tr from-foreground/5 to-transparent rounded-full rotate-45 pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Stylized image with floating vision card */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative w-full h-96 lg:h-[520px]">
                <Image src="/pastor2.png" alt="Community" fill style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
              </div>
            </div>

            {/* Floating vision card */}
            <div className="absolute -bottom-10 left-6 w-[320px] md:w-[380px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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

          {/* Right: Mission content with emphasis */}
          <div className="pt-8 lg:pt-0">
            <h2 className="text-4xl font-extrabold mb-4">Vision & Mission</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              We exist to empower individuals and communities through intentional programs,
              events and partnerships. Our work is practical, compassionate and built to last.
            </p>

            <div className="grid grid-cols-1 gap-6">
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow">
                <h3 className="text-2xl font-semibold mb-3">What we do</h3>
                <p className="text-gray-600">We run community programs, training sessions, youth initiatives and large-scale events designed to create meaningful impact.</p>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow">
                <h3 className="text-2xl font-semibold mb-3">How we measure impact</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Number of people served</li>
                  <li>Local community partnerships</li>
                  <li>Sustainable program outcomes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
