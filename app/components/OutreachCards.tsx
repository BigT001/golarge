import Link from "next/link";
import Image from "next/image";

export const outreach = [
  {
    id: "ng",
    title: "Golarge Nigeria",
    desc: "Nigeria is one of our largest and most active networks. We run community development projects, vocational training, youth mentorship and emergency relief programs in urban and rural communities. Our focus is sustainable impact and local leadership.",
    href: "/outreach",
    image: "/galleryimages/126.jpeg",
  },
  {
    id: "ca",
    title: "Golarge Canada",
    desc: "The Canadian chapters are focused on youth, education and cross-cultural exchange. We partner with schools, community centers and local nonprofits to provide mentoring and scholarship initiatives.",
    href: "/outreach",
    image: "/galleryimages/WhatsApp3.jpeg",
  },
  {
    id: "uk",
    title: "Golarge London",
    desc: "In the UK we run regular community events, training sessions, and volunteer programs that support integration, employment readiness and local community projects.",
    href: "/outreach",
    image: "/golargelondonimg/46.jpeg",
  },
  {
    id: "us",
    title: "Golarge USA",
    desc: "Our North American outreach focuses on building partnerships, supporting churches and community groups, and delivering large-scale events and conferences that equip leaders and volunteers.",
    href: "/outreach",
    image: "/galleryimages/06.jpeg",
  },
  {
    id: "de",
    title: "Golarge Germany",
    desc: "The European hub coordinates regional partnerships, training programs and exchange initiatives designed to foster collaboration across neighboring countries.",
    href: "/outreach",
    image: "/golargegermanyimg/36.jpeg",
  },
  {
    id: "Pa",
    title: "Paris",
    desc: "Paris hosts a vibrant chapter that focuses on community engagement, creative arts, and local outreach events that bring people together across diverse neighborhoods.",
    href: "/outreach",
    image: "/golargeparisimg/43.jpeg",
  },
];

export const colorAccents = [
  "from-blue-400 to-red-400",
  "from-indigo-400 to-pink-400",
  "from-teal-400 to-sky-400",
  "from-rose-400 to-amber-400",
  "from-cyan-400 to-blue-500",
  "from-fuchsia-400 to-indigo-400",
];

export function OutreachCard({ o, i }: { o: any; i: number }) {
  const accent = colorAccents[i % colorAccents.length];
  const cardBg =
    i % 2 === 0
      ? `bg-gradient-to-br ${accent} text-white`
      : `bg-gradient-to-br from-white to-gray-50`;
  const textColor = i % 2 === 0 ? "text-white" : "text-gray-800";

  return (
    <article role="article" aria-labelledby={`outreach-${o.id}-title`} className="group relative">
      <Link
        href={o.href}
        className={`block rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-red-300 ${cardBg}`}
        aria-label={`Visit ${o.title} outreach page`}
      >
        <div className="relative w-full h-56 md:h-52 lg:h-56">
          <Image
            src={o.image}
            alt={o.title}
            fill
            style={{ objectFit: "cover", objectPosition: o.imagePosition || "top center" }}
            className="group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div
            className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold ${
              i % 2 === 0 ? "text-white bg-white/10 border-white/20" : "text-gray-800 bg-gray-100 border-gray-200"
            } backdrop-blur-sm border transform rotate-6`}
          >
            {o.id.toUpperCase()}
          </div>
          <div className="absolute left-4 bottom-4">
            <span
              id={`outreach-${o.id}-title`}
              className={`text-base md:text-lg font-semibold drop-shadow ${textColor}`}
            >
              {o.title}
            </span>
          </div>
        </div>

        <div className={`p-4 sm:p-6 ${i % 2 === 0 ? "bg-transparent" : "bg-white"}`}>
          <h3 className={`text-base md:text-2xl font-semibold mb-2 ${textColor}`}>{o.title}</h3>
          <p className={`text-sm md:text-base mb-4 ${i % 2 === 0 ? "text-white/90" : "text-gray-700"}`}>
            {o.desc}
          </p>
          <div className="flex items-center justify-between">
            <span className={`text-sm font-medium ${i % 2 === 0 ? "text-white/90" : "text-gray-700"}`}>
              Learn more
            </span>
            <span
              className={`inline-flex items-center gap-2 text-sm font-medium ${
                i % 2 === 0 ? "text-white" : "text-red-500"
              }`}
            >
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
    <section className="w-full relative py-10 bg-transparent">
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-900">
          Go Large Outreach
        </h2>

        <div className="w-full lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {outreach.map((o, i) => (
              <OutreachCard key={o.id} o={o} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
