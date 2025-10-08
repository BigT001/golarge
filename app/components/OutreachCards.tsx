import Link from "next/link";
import Image from "next/image";

const outreach = [
  {
    id: "ng",
    title: "Golarge Nigeria",
    desc: "Nigeria is one of our largest and most active networks. We run community development projects, vocational training, youth mentorship and emergency relief programs in urban and rural communities. Our focus is sustainable impact and local leadership.",
    href: "/outreach/ng",
    image: "/pastor1.png",
  },
  {
    id: "ca",
    title: "Golarge Canada",
    desc: "The Canadian chapters are focused on youth, education and cross-cultural exchange. We partner with schools, community centers and local nonprofits to provide mentoring and scholarship initiatives.",
    href: "/outreach/ca",
    image: "/pastor2.png",
  },
  {
    id: "uk",
    title: "Golarge UK",
    desc: "In the UK we run regular community events, training sessions, and volunteer programs that support integration, employment readiness and local community projects.",
    href: "/outreach/uk",
    image: "/pastor1.png",
  },
  {
    id: "us",
    title: "Golarge USA",
    desc: "Our North American outreach focuses on building partnerships, supporting churches and community groups, and delivering large-scale events and conferences that equip leaders and volunteers.",
    href: "/outreach/us",
    image: "/pastor2.png",
  },
  {
    id: "de",
    title: "Golarge Germany",
    desc: "The European hub coordinates regional partnerships, training programs and exchange initiatives designed to foster collaboration across neighboring countries.",
    href: "/outreach/de",
    image: "/pastor1.png",
  },
  {
    id: "ldn",
    title: "Golarge London",
    desc: "London hosts a vibrant chapter that focuses on community engagement, creative arts, and local outreach events that bring people together across diverse neighborhoods.",
    href: "/outreach/london",
    image: "/pastor2.png",
  },
];

const colorAccents = [
  "from-amber-400 to-rose-400",
  "from-sky-400 to-indigo-500",
  "from-emerald-400 to-teal-500",
  "from-fuchsia-400 to-pink-500",
  "from-lime-400 to-emerald-500",
  "from-violet-400 to-indigo-500",
];

export default function OutreachCards() {
  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">Go Large Outreach</h2>
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        {/* animated decorative background */}
        <div aria-hidden className="pointer-events-none absolute -inset-x-8 -top-16 -bottom-12 flex items-center justify-center">
          <div className="w-full max-w-[1200px] h-[420px] bg-gradient-to-r from-amber-200 via-rose-200 to-sky-200 bg-gradient-pan decorative-glow rounded-3xl" />
        </div>
        <div className="px-2 sm:px-4 lg:px-6 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {outreach.map((o, i) => {
              const accent = colorAccents[i % colorAccents.length];
              // Use alternating card background gradients for stronger color
              const cardBg = i % 2 === 0 ? `bg-gradient-to-br ${accent} text-white` : `bg-gradient-to-br from-white to-gray-50`;
              const textColor = i % 2 === 0 ? "text-white" : "text-gray-800";
              return (
                <article key={o.id} role="article" aria-labelledby={`outreach-${o.id}-title`} className="group">
                  <Link
                    href={o.href}
                    className={`block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-amber-300 ${cardBg}`}
                    aria-label={`Visit ${o.title} outreach page`}
                  >
                    <div className="relative w-full h-64 md:h-56 lg:h-64">
                      <Image
                        src={o.image}
                        alt={o.title}
                        fill
                        style={{ objectFit: "cover", objectPosition: "top center" }}
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      <div className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold ${i % 2 === 0 ? 'text-white' : 'text-gray-800'} bg-white/10 backdrop-blur-sm shadow-md`}>{o.id.toUpperCase()}</div>
                      <div className="absolute left-4 bottom-4">
                        <span id={`outreach-${o.id}-title`} className={`text-base md:text-lg font-semibold drop-shadow ${textColor}`}>{o.title}</span>
                      </div>
                    </div>

                    <div className={`p-6 ${i % 2 === 0 ? 'bg-transparent' : 'bg-white'}`}>
                      <h3 className={`text-lg md:text-2xl font-semibold mb-2 ${textColor}`}>{o.title}</h3>
                      <p className={`text-sm mb-4 ${i % 2 === 0 ? 'text-white/90' : 'text-gray-700'}`}>{o.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-medium ${i % 2 === 0 ? 'text-white/90' : 'text-foreground'}`}>Learn more</span>
                        <span className={`inline-flex items-center gap-2 text-sm font-medium ${i % 2 === 0 ? 'text-white' : 'text-amber-600'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                          <span className="sr-only">Explore</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
