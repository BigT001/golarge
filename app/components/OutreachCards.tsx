import Link from "next/link";
import Image from "next/image";

export const outreach = [
  {
    id: "ng",
    title: "Golarge Nigeria",
    desc: "Nigeria is one of our largest and most active networks. We run community development projects, vocational training, youth mentorship and emergency relief programs in urban and rural communities. Our focus is sustainable impact and local leadership.",
    href: "/outreach/ng",
    image: "/heroimages/image1.jpeg",
  },
  {
    id: "ca",
    title: "Golarge Canada",
    desc: "The Canadian chapters are focused on youth, education and cross-cultural exchange. We partner with schools, community centers and local nonprofits to provide mentoring and scholarship initiatives.",
    href: "/outreach/ca",
    image: "/heroimages/image2.jpeg",
  },
  {
    id: "uk",
    title: "Golarge UK",
    desc: "In the UK we run regular community events, training sessions, and volunteer programs that support integration, employment readiness and local community projects.",
    href: "/outreach/uk",
    image: "/heroimages/image3.jpeg",
  },
  {
    id: "us",
    title: "Golarge USA",
    desc: "Our North American outreach focuses on building partnerships, supporting churches and community groups, and delivering large-scale events and conferences that equip leaders and volunteers.",
    href: "/outreach/us",
    image: "/heroimages/image4.jpeg",
  },
  {
    id: "de",
    title: "Golarge Germany",
    desc: "The European hub coordinates regional partnerships, training programs and exchange initiatives designed to foster collaboration across neighboring countries.",
    href: "/outreach/de",
    image: "/heroimages/image5.jpeg",
  },
  {
    id: "ldn",
    title: "Golarge London",
    desc: "London hosts a vibrant chapter that focuses on community engagement, creative arts, and local outreach events that bring people together across diverse neighborhoods.",
    href: "/outreach/london",
    image: "/heroimages/image1.jpeg",
  },
];

export const colorAccents = [
  "from-amber-400 to-rose-400",
  "from-sky-400 to-indigo-500",
  "from-emerald-400 to-teal-500",
  "from-fuchsia-400 to-pink-500",
  "from-lime-400 to-emerald-500",
  "from-violet-400 to-indigo-500",
];

export function OutreachCard({ o, i }: { o: any; i: number }) {
  const accent = colorAccents[i % colorAccents.length];
  const cardBg = i % 2 === 0 ? `bg-gradient-to-br ${accent} text-white` : `bg-gradient-to-br from-white to-gray-50`;
  const textColor = i % 2 === 0 ? "text-white" : "text-gray-800";

  return (
    <article key={o.id} role="article" aria-labelledby={`outreach-${o.id}-title`} className="group relative">
      {/* colorful halo behind each card */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-pink-400 via-indigo-500 to-amber-400 opacity-20 blur-2xl pointer-events-none group-hover:opacity-60 transition-opacity" />
      <Link
        href={o.href}
        className={`block rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 will-change-transform hover:scale-105 hover:-translate-y-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-amber-300 ${cardBg}`}
        aria-label={`Visit ${o.title} outreach page`}
      >
        {/* skew stripe accent */}
        <div className="absolute -top-6 left-6 w-28 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-red-500 opacity-95 transform rotate-12 pointer-events-none transition-transform group-hover:rotate-6" />
  <div className="relative w-full h-56 md:h-52 lg:h-56">
          <Image
            src={o.image}
            alt={o.title}
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
            className="group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold ${i % 2 === 0 ? 'text-white' : 'text-gray-800'} ${i % 2 === 0 ? 'bg-white/10' : 'bg-amber-50'} backdrop-blur-sm shadow-md border ${i % 2 === 0 ? 'border-white/20' : 'border-amber-100'} transform rotate-6`}>{o.id.toUpperCase()}</div>
            {/* sparkle */}
            <div className="absolute right-6 top-6 w-6 h-6 rounded-full bg-white/80 opacity-60 blur-sm animate-pulse pointer-events-none" />
          <div className="absolute left-4 bottom-4">
            <span id={`outreach-${o.id}-title`} className={`text-base md:text-lg font-semibold drop-shadow ${textColor}`}>{o.title}</span>
          </div>
        </div>

        <div className={`p-4 sm:p-6 ${i % 2 === 0 ? 'bg-transparent' : 'bg-white'}`}>
          <h3 className={`text-base md:text-2xl font-semibold mb-2 ${textColor}`}>{o.title}</h3>
          <p className={`text-sm md:text-base mb-4 ${i % 2 === 0 ? 'text-white/90' : 'text-gray-700'}`}>{o.desc}</p>
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
}

export default function OutreachCards() {
  return (
    <section className="w-full relative py-20 overflow-hidden bg-transparent">
      {/* no background decorations — clean section so cards are the focus */}

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-red">Go Large Outreach</h2>

      <div className="relative w-full  lg:px-0">
          <div className="relative w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {outreach.map((o, i) => (
                <OutreachCard key={o.id} o={o} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
