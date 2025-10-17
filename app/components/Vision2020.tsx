"use client";

import { useState } from "react";
import Link from "next/link";

export default function Vision2020() {
  const [form, setForm] = useState({ name: "", email: "", prayer: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) return "Please enter a valid email.";
    if (!form.prayer.trim()) return "Please share your prayer request.";
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus("error");
      alert(err);
      return;
    }
    setStatus("sending");
    try {
      // Simulate save
      await new Promise((res) => setTimeout(res, 800));
      setStatus("success");
      setForm({ name: "", email: "", prayer: "" });
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">20 Years of Prayer Investment</h2>
              <p className="text-slate-600">It’s time to impart generational blessings. Prayer compounds — invest faithfully and watch long-term spiritual returns.</p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/vision2020" className="inline-block text-sm bg-blue-600 text-white px-3 py-2 rounded-md shadow hover:bg-blue-700 transition">View program page</Link>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full grid place-items-center text-white font-semibold">20</div>
                <div>
                  <div className="text-sm text-slate-500">Prayer Investment Program</div>
                  <div className="text-lg font-semibold">20 Years of Return</div>
                </div>
              </div>
            </div>

            <div className="w-full h-56 relative">
              {/* Simple SVG line chart inspired by the attachment */}
              <svg viewBox="0 0 400 200" className="w-full h-full">
                <defs>
                  <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* axes */}
                <line x1="40" y1="10" x2="40" y2="180" stroke="#cbd5e1" strokeWidth="1" />
                <line x1="40" y1="180" x2="380" y2="180" stroke="#cbd5e1" strokeWidth="1" />

                {/* bars/area */}
                <g transform="translate(0,0)">
                  <path d="M50 170 L80 150 L110 140 L140 120 L170 110 L200 95 L230 82 L260 70 L290 60 L320 50 L350 40" stroke="#2563eb" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M50 170 L80 150 L110 140 L140 120 L170 110 L200 95 L230 82 L260 70 L290 60 L320 50 L350 40 L350 170 Z" fill="url(#g)" opacity="0.9" />
                </g>

                {/* x labels */}
                <text x="40" y="195" fontSize="10" fill="#64748b">2020</text>
                <text x="340" y="195" fontSize="10" fill="#64748b">2040</text>

                {/* annotation */}
                <text x="200" y="45" fontSize="12" fill="#0f172a" fontWeight="700">Total Expected Return</text>
              </svg>
            </div>

            <p className="mt-4 text-sm text-slate-500">When investment in prayer is consistent over time, spiritual returns compound and expand across generations.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-2xl shadow-xl">
          <h3 className="text-xl font-semibold mb-3">Submit a Prayer Request</h3>
          {status === "success" ? (
            <div className="p-4 bg-green-50 border border-green-100 text-green-800 rounded">Thank you — your prayer request has been received.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-slate-700 block mb-2">Name</label>
                <input name="name" value={form.name} onChange={handleChange} className="w-full border border-slate-200 rounded px-3 py-2" />
              </div>
              <div>
                <label className="text-sm text-slate-700 block mb-2">Email</label>
                <input name="email" value={form.email} onChange={handleChange} className="w-full border border-slate-200 rounded px-3 py-2" />
              </div>
              <div>
                <label className="text-sm text-slate-700 block mb-2">Prayer Request</label>
                <textarea name="prayer" value={form.prayer} onChange={handleChange} className="w-full border border-slate-200 rounded px-3 py-2 h-28" />
              </div>

              <div className="flex items-center gap-3">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">Send Prayer</button>
                <button type="button" onClick={() => { setForm({ name: "", email: "", prayer: "" }); setStatus('idle'); }} className="px-4 py-2 border rounded-md text-sm">Reset</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
