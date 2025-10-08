"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center">G</div>
              <div>
                <div className="font-semibold">Golarge</div>
                <div className="text-sm text-gray-600">Connecting people, empowering growth.</div>
              </div>
            </div>
            <div className="text-sm text-gray-700">© {new Date().getFullYear()} Golarge. All rights reserved.</div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Quick links</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/ministries" className="hover:underline">Ministries</a></li>
              <li><a href="/events" className="hover:underline">Events</a></li>
              <li><a href="/outreach" className="hover:underline">Outreach</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Contact</h4>
            <div className="text-sm text-gray-700">
              <div>Office: +1 (555) 123-4567</div>
              <div className="mt-1">Email: contact@golarge.org</div>
              <div className="mt-2">123 Hope Street, Cityville</div>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Facebook</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Instagram</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Twitter</a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Newsletter</h4>
            {subscribed ? (
              <div className="text-sm text-green-600">Thanks — you're subscribed.</div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="px-3 py-2 border rounded" />
                <button className="px-4 py-2 rounded bg-foreground text-background">Subscribe</button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">Designed with care — Golarge</div>
      </div>
    </footer>
  );
}
