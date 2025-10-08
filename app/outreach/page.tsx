"use client";

import { useMemo, useState } from "react";
import { outreach } from "../components/OutreachCards";
import { OutreachCard } from "../components/OutreachCards";
import Link from "next/link";

// metadata moved to server-only `head.tsx` to avoid exporting from a client component

export default function OutreachPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const spotlight = outreach[0];

  const regions = useMemo(() => {
    return outreach.filter((o) => (filter === 'all' ? true : o.id === filter));
  }, [filter]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return regions;
    return regions.filter((r) => r.title.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q) || r.id.toLowerCase().includes(q));
  }, [query, regions]);

  return (
    <main>
      <section className="bg-gradient-to-b from-amber-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Go Large Outreach</h1>
          <p className="text-lg text-gray-700">We partner with local leaders across multiple countries to run community programs, training, and events. Find your nearest chapter below and learn how to get involved.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div className="flex gap-3">
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search regions, programs, keywords..." className="px-4 py-3 rounded-lg border w-full sm:w-80" />
                <select value={filter} onChange={(e) => setFilter(e.target.value)} className="px-4 py-3 rounded-lg border">
                  <option value="all">All regions</option>
                  {outreach.map((o) => (
                    <option key={o.id} value={o.id}>{o.title}</option>
                  ))}
                </select>
              </div>
              <div className="text-sm text-gray-600">Showing <strong>{results.length}</strong> of {outreach.length}</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {results.map((o, i) => (
                <OutreachCard key={o.id} o={o} i={i} />
              ))}
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-xl overflow-hidden shadow-md p-4 bg-white">
                <h3 className="font-semibold text-lg mb-2">Spotlight</h3>
                <p className="text-sm text-gray-700">Featured chapter: <strong>{spotlight.title}</strong></p>
                <p className="mt-2 text-sm text-gray-600">{spotlight.desc.slice(0, 120)}...</p>
                <Link href={spotlight.href} className="inline-block mt-3 text-amber-600 underline">Learn more</Link>
              </div>

              <div className="rounded-xl overflow-hidden shadow-md p-4 bg-white">
                <h4 className="font-medium mb-2">Quick links</h4>
                <div className="flex flex-col gap-2">
                  {outreach.map((o) => (
                    <Link key={o.id} href={o.href} className="text-sm text-gray-700 hover:text-amber-600">{o.title}</Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
