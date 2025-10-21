"use client";

import { useState } from "react";

export default function DonateForm() {
  const [amount, setAmount] = useState<number | null>(50);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const presets = [25, 50, 100, 250];

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!amount || amount <= 0) {
      setError("Please enter a valid amount");
      return;
    }
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 900);
  }

  if (success) {
    return (
      <div className="p-6 bg-green-900/60 rounded-lg border border-green-700">
        <h3 className="text-2xl font-bold text-green-200 mb-2">Thank you!</h3>
        <p className="text-green-100">We received your gift of ${amount}. You will receive an email confirmation shortly.</p>
        <button className="mt-4 inline-block px-4 py-2 bg-white/10 rounded-md" onClick={() => setSuccess(false)}>Make another gift</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="p-6 bg-white/5 rounded-lg">
      <label className="block text-sm text-gray-300 mb-2">Amount</label>
      <div className="flex gap-2 mb-4">
        {presets.map((p) => (
          <button
            type="button"
            key={p}
            onClick={() => setAmount(p)}
            className={`px-4 py-2 rounded-md border ${amount === p ? 'bg-red-600 text-white border-red-600' : 'bg-transparent text-gray-200 border-white/10'}`}
          >
            ${p}
          </button>
        ))}
      </div>

      <label className="block text-sm text-gray-300 mb-2">Custom amount</label>
      <input
        type="number"
        min={1}
        value={amount ?? ''}
        onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : null)}
        className="w-full mb-4 rounded-md p-2 bg-black/20 border border-white/10 text-white"
      />

      <label className="block text-sm text-gray-300 mb-2">Full name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-4 rounded-md p-2 bg-black/20 border border-white/10 text-white"
        required
      />

      <label className="block text-sm text-gray-300 mb-2">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 rounded-md p-2 bg-black/20 border border-white/10 text-white"
        required
      />

      {error && <div className="text-red-400 mb-3">{error}</div>}

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold"
        disabled={loading}
      >
        {loading ? 'Processing...' : `Give $${amount || ''}`}
      </button>
    </form>
  );
}
