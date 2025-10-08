"use client";

import { useMemo, useState } from "react";

type EventItem = {
  id: string;
  title: string;
  start: string; // ISO
  end?: string; // ISO
  venue?: string;
  excerpt?: string;
  details?: string;
  featured?: boolean;
};

const MOCK_EVENTS: EventItem[] = [
  {
    id: "e1",
    title: "Annual Conference 2026",
    start: "2026-02-06T17:00:00",
    end: "2026-02-08T12:00:00",
    venue: "The Dream Centre",
    excerpt: "A three-day gathering of community and learning.",
    details:
      "Join leaders and volunteers for plenaries, workshops and hands-on community projects. Expect keynote messages, breakout sessions, and networking opportunities designed to equip and inspire.",
    featured: true,
  },
  {
    id: "e2",
    title: "Festival of Mercy 2026",
    start: "2026-03-01T09:00:00",
    end: "2026-03-07T18:00:00",
    venue: "Main Campus",
    excerpt: "A week of worship and outreach.",
    details: "Worship nights, community outreach, and skill-based training for volunteers. Open to the whole family.",
  },
  {
    id: "e3",
    title: "WINGS 2026",
    start: "2026-03-21T09:00:00",
    venue: "City Hall",
    excerpt: "Youth empowerment conference.",
    details: "High-energy sessions, mentorship circles, and practical workshops for career and leadership development.",
  },
  {
    id: "e4",
    title: "Manifest 2025",
    start: "2025-05-30T09:00:00",
    end: "2025-06-01T18:00:00",
    venue: "Dream Centre",
    excerpt: "A past event.",
    details: "Highlights from the Manifest event including recordings and testimonies.",
  },
  {
    id: "e5",
    title: "Resurrection Faith Seminar 2025",
    start: "2025-04-18T09:00:00",
    end: "2025-04-20T18:00:00",
    venue: "Dream Centre",
    excerpt: "A past conference.",
    details: "Deep-dive seminars and worship archives are available.",
  },
];

function isUpcoming(ev: EventItem) {
  const now = new Date();
  return new Date(ev.start) >= now;
}

const DATE_OPTIONS: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
const TIME_OPTIONS: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };

function formatDateRange(start: string, end?: string) {
  const s = new Date(start);
  if (!end) return new Intl.DateTimeFormat('en-US', { ...DATE_OPTIONS, ...TIME_OPTIONS }).format(s);
  const e = new Date(end);
  const sameDay = s.toDateString() === e.toDateString();
  if (sameDay) {
    return `${new Intl.DateTimeFormat('en-US', DATE_OPTIONS).format(s)} • ${new Intl.DateTimeFormat('en-US', TIME_OPTIONS).format(s)} - ${new Intl.DateTimeFormat('en-US', TIME_OPTIONS).format(e)}`;
  }
  return `${new Intl.DateTimeFormat('en-US', { ...DATE_OPTIONS, ...TIME_OPTIONS }).format(s)} - ${new Intl.DateTimeFormat('en-US', { ...DATE_OPTIONS, ...TIME_OPTIONS }).format(e)}`;
}

export default function EventsList() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const [pastLimit, setPastLimit] = useState(4);
  const [q, setQ] = useState("");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [rsvped, setRsvped] = useState<Record<string, boolean>>({});

  const { upcoming, past } = useMemo(() => {
    const up: EventItem[] = [];
    const ps: EventItem[] = [];
    for (const e of MOCK_EVENTS) {
      if (isUpcoming(e)) up.push(e);
      else ps.push(e);
    }
    up.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
    ps.sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime());
    return { upcoming: up, past: ps };
  }, []);

  const filteredUpcoming = upcoming.filter((e) => e.title.toLowerCase().includes(q.toLowerCase()) || (e.excerpt || "").toLowerCase().includes(q.toLowerCase()) || (e.details || "").toLowerCase().includes(q.toLowerCase()));
  const filteredPast = past.filter((e) => e.title.toLowerCase().includes(q.toLowerCase()) || (e.excerpt || "").toLowerCase().includes(q.toLowerCase()) || (e.details || "").toLowerCase().includes(q.toLowerCase()));

  function toggleExpand(id: string) {
    setExpanded((s) => ({ ...s, [id]: !s[id] }));
  }

  function toggleRsvp(id: string) {
    setRsvped((s) => ({ ...s, [id]: !s[id] }));
  }

  const featured = filteredUpcoming.find((e) => e.featured) || filteredUpcoming[0];

  return (
    <section className="w-full bg-gradient-to-b from-amber-50 via-white to-sky-50 bg-gradient-pan py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-4 mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Events</h2>
            <p className="text-sm text-gray-600 mt-1">Join us for training, outreach and community gatherings.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
            <div className="w-full sm:w-64">
              <label className="sr-only" htmlFor="event-search">Search events</label>
              <input
                id="event-search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search events, topics or locations"
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-amber-300"
              />
            </div>

            <div className="w-full sm:w-auto">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setTab("upcoming")}
                  aria-pressed={tab === "upcoming"}
                  className={`w-full px-4 py-3 rounded-lg ${tab === "upcoming" ? 'bg-amber-600 text-white shadow' : 'bg-white/90 text-foreground'}`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setTab("past")}
                  aria-pressed={tab === "past"}
                  className={`w-full px-4 py-3 rounded-lg ${tab === "past" ? 'bg-amber-600 text-white shadow' : 'bg-white/90 text-foreground'}`}
                >
                  Past
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative backdrop behind list to add depth */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-24 flex justify-center">
          <div className="w-[92%] h-36 rounded-3xl bg-white/60 blur-lg -z-10" />
        </div>

        {tab === "upcoming" ? (
          <div className="space-y-8">
            {featured ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <article className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-lg transform hover:-translate-y-2 transition flex flex-col lg:flex-row gap-4">
                  <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
                    <div className="w-full sm:w-20 flex-shrink-0 text-center lg:w-32">
                      <div className="text-sm text-gray-500">{new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date(featured.start))}</div>
                      <div className="text-3xl font-bold">{new Date(featured.start).getDate()}</div>
                      <div className="text-xs text-gray-500">{new Date(featured.start).getFullYear()}</div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{featured.title}</h3>
                      <div className="text-sm text-gray-600 mb-4">{formatDateRange(featured.start, featured.end)} • {featured.venue}</div>
                      <p className="text-gray-700 mb-4">{featured.details || featured.excerpt}</p>
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <button onClick={() => toggleRsvp(featured.id)} className={`w-full sm:w-auto px-4 py-3 rounded-lg ${rsvped[featured.id] ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-700'}`}>
                          {rsvped[featured.id] ? 'Registered' : 'RSVP'}
                        </button>
                        <a href="#" className="w-full sm:w-auto text-center px-4 py-3 rounded-lg border shadow-sm">Calendar</a>
                      </div>
                    </div>
                  </div>
                </article>

                <div className="space-y-4">
                  {filteredUpcoming.filter((e) => e.id !== (featured && featured.id)).slice(0, 2).map((e) => (
                    <article key={e.id} className="bg-white rounded-2xl p-4 sm:p-6 shadow hover:shadow-lg transition">
                      <div className="flex flex-col sm:flex-row gap-3 items-start">
                        <div className="w-full sm:w-1 h-1 sm:h-20 sm:rounded-full bg-amber-500 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <h4 className="font-semibold">{e.title}</h4>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
                              <button onClick={() => toggleRsvp(e.id)} className={`w-full sm:w-auto text-sm px-3 py-3 sm:py-2 rounded ${rsvped[e.id] ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-700'}`}>{rsvped[e.id] ? 'Registered' : 'RSVP'}</button>
                              <button onClick={() => toggleExpand(e.id)} aria-expanded={!!expanded[e.id]} className="text-sm text-amber-600">{expanded[e.id] ? 'Hide' : 'Details'}</button>
                            </div>
                          </div>
                          <div className="text-sm text-gray-600">{formatDateRange(e.start, e.end)} • {e.venue}</div>
                          {expanded[e.id] && <p className="mt-2 text-gray-700">{e.details || e.excerpt}</p>}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-600">No upcoming events.</p>
            )}

            {/* full list of upcoming (compact cards) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredUpcoming.map((e) => (
                <article key={e.id} className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                        <div className="w-full sm:w-20 text-center">
                          <div className="text-xs text-gray-500">{new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date(e.start))}</div>
                      <div className="text-2xl font-bold">{new Date(e.start).getDate()}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <h4 className="font-semibold">{e.title}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
                          <button onClick={() => toggleRsvp(e.id)} className={`w-full sm:w-auto text-sm px-3 py-3 sm:py-2 rounded ${rsvped[e.id] ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-700'}`}>{rsvped[e.id] ? 'Registered' : 'RSVP'}</button>
                          <button onClick={() => toggleExpand(e.id)} aria-expanded={!!expanded[e.id]} className="text-sm text-amber-600">{expanded[e.id] ? 'Hide' : 'Details'}</button>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">{formatDateRange(e.start, e.end)} • {e.venue}</div>
                      {expanded[e.id] && <p className="mt-2 text-gray-700">{e.details || e.excerpt}</p>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredPast.slice(0, pastLimit).map((e) => (
              <article key={e.id} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition">
                <div className="flex items-start gap-4">
        <div className="w-full sm:w-20 text-center">
          <div className="text-xs text-gray-500">{new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date(e.start))}</div>
        <div className="text-2xl font-bold">{new Date(e.start).getDate()}</div>
      </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{e.title}</h4>
                      <div className="flex items-center gap-3">
                        <button onClick={() => toggleExpand(e.id)} aria-expanded={!!expanded[e.id]} className="text-sm text-amber-600">{expanded[e.id] ? 'Hide' : 'Details'}</button>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">{formatDateRange(e.start, e.end)} • {e.venue}</div>
                    {expanded[e.id] && <p className="mt-2 text-gray-700">{e.details || e.excerpt}</p>}
                  </div>
                </div>
              </article>
            ))}

            {filteredPast.length > pastLimit && (
              <div className="text-center mt-4">
                <button className="px-4 py-2 rounded bg-amber-600 text-white" onClick={() => setPastLimit((s) => s + 4)}>
                  Load more past events
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
