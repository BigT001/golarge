import Link from "next/link";
import Image from "next/image";

const outreach = [
  { id: "ng", title: "Golarge Nigeria", desc: "Community programs and outreach across Nigeria.", href: "/outreach/ng", image: "/pastor1.png" },
  { id: "ca", title: "Golarge Canada", desc: "Canadian chapters focused on youth and education.", href: "/outreach/ca", image: "/pastor2.png" },
  { id: "uk", title: "Golarge UK", desc: "UK-based events and community development.", href: "/outreach/uk", image: "/pastor1.png" },
  { id: "us", title: "Golarge USA", desc: "North American outreach and partnerships.", href: "/outreach/us", image: "/pastor2.png" },
  { id: "de", title: "Golarge Germany", desc: "European hub for Golarge activities.", href: "/outreach/de", image: "/pastor1.png" },
  { id: "ldn", title: "Golarge London", desc: "London chapter focusing on community engagement and events.", href: "/outreach/london", image: "/pastor2.png" },
];

export default function OutreachCards() {
  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">Go Large Outreach</h2>
      </div>

      {/* Full-bleed grid wrapper; inner grid constrained and centered so cards stay centered but wide */}
        <div className="max-w-[1400px] mx-auto">
        <div className="px-2 sm:px-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {outreach.map((o) => (
              <Link
                key={o.id}
                href={o.href}
                className="group block rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-foreground/20"
              >
                <div className="relative w-full h-64 md:h-72 lg:h-72 bg-white">
                  <Image
                    src={o.image}
                    alt={o.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute left-4 bottom-4 text-white">
                    <span className="text-base md:text-lg font-semibold drop-shadow">{o.title}</span>
                  </div>
                </div>

                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">{o.title}</h3>
                  <p className="text-sm text-gray-700 mb-6">{o.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Learn more</span>
                    <button className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                      Explore
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
