"use client";

import { useMemo, useState } from "react";

type EventItem = {
  id: string;
  title: string;
  start: string; // ISO
  end?: string; // ISO
  venue?: string;
  excerpt?: string;
};

const MOCK_EVENTS: EventItem[] = [
  { id: "e1", title: "Annual Conference 2026", start: "2026-02-06T17:00:00", end: "2026-02-08T12:00:00", venue: "The Dream Centre", excerpt: "A three-day gathering of community and learning." },
  { id: "e2", title: "Festival of Mercy 2026", start: "2026-03-01T09:00:00", end: "2026-03-07T18:00:00", venue: "Main Campus", excerpt: "A week of worship and outreach." },
  { id: "e3", title: "WINGS 2026", start: "2026-03-21T09:00:00", venue: "City Hall", excerpt: "Youth empowerment conference." },
  { id: "e4", title: "Manifest 2025", start: "2025-05-30T09:00:00", end: "2025-06-01T18:00:00", venue: "Dream Centre", excerpt: "A past event." },
  { id: "e5", title: "Resurrection Faith Seminar 2025", start: "2025-04-18T09:00:00", end: "2025-04-20T18:00:00", venue: "Dream Centre", excerpt: "A past conference." },
];

function isUpcoming(ev: EventItem) {
  const now = new Date();
  return new Date(ev.start) >= now;
}

function formatDateRange(start: string, end?: string) {
  const s = new Date(start);
  if (!end) return s.toLocaleString();
  const e = new Date(end);
  const sameDay = s.toDateString() === e.toDateString();
  if (sameDay) return `${s.toLocaleDateString()} • ${s.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
  return `${s.toLocaleString()} - ${e.toLocaleString()}`;
}

export default function EventsList() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const [pastLimit, setPastLimit] = useState(4);
  const [q, setQ] = useState("");

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

  const filteredUpcoming = upcoming.filter((e) => e.title.toLowerCase().includes(q.toLowerCase()) || (e.excerpt || "").toLowerCase().includes(q.toLowerCase()));
  const filteredPast = past.filter((e) => e.title.toLowerCase().includes(q.toLowerCase()) || (e.excerpt || "").toLowerCase().includes(q.toLowerCase()));

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Events</h2>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search events"
                className="px-3 py-2 border rounded w-[220px]"
              />
            </div>

            <div className="flex items-center gap-2 bg-gray-100 rounded">
              <button
                onClick={() => setTab("upcoming")}
                className={`px-4 py-2 ${tab === "upcoming" ? "bg-foreground text-background" : "text-foreground"}`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setTab("past")}
                className={`px-4 py-2 ${tab === "past" ? "bg-foreground text-background" : "text-foreground"}`}
              >
                Past
              </button>
            </div>
          </div>
        </div>

        {tab === "upcoming" ? (
          <div className="space-y-4">
            {filteredUpcoming.length === 0 ? (
              <p className="text-gray-600">No upcoming events.</p>
            ) : (
              filteredUpcoming.map((e) => (
                <article key={e.id} className="flex gap-6 p-6 border rounded-lg items-start">
                  <div className="w-28 flex-shrink-0 text-center">
                    <div className="text-sm text-gray-500">{new Date(e.start).toLocaleString([], { month: "short" })}</div>
                    <div className="text-2xl font-bold">{new Date(e.start).getDate()}</div>
                    <div className="text-xs text-gray-500">{new Date(e.start).getFullYear()}</div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{e.title}</h3>
                    <div className="text-sm text-gray-600 mb-2">{formatDateRange(e.start, e.end)} • {e.venue}</div>
                    <p className="text-gray-700">{e.excerpt}</p>
                  </div>
                </article>
              ))
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredPast.slice(0, pastLimit).map((e) => (
              <article key={e.id} className="flex gap-6 p-6 border rounded-lg bg-gray-50 items-start">
                <div className="w-28 flex-shrink-0 text-center">
                  <div className="text-sm text-gray-500">{new Date(e.start).toLocaleString([], { month: "short" })}</div>
                  <div className="text-2xl font-bold">{new Date(e.start).getDate()}</div>
                  <div className="text-xs text-gray-500">{new Date(e.start).getFullYear()}</div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{e.title}</h3>
                  <div className="text-sm text-gray-600 mb-2">{formatDateRange(e.start, e.end)} • {e.venue}</div>
                  <p className="text-gray-700">{e.excerpt}</p>
                </div>
              </article>
            ))}

            {filteredPast.length > pastLimit && (
              <div className="text-center mt-4">
                <button className="px-4 py-2 rounded bg-foreground text-background" onClick={() => setPastLimit((s) => s + 4)}>
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
