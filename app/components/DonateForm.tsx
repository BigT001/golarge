"use client";

import { useState } from "react";

export default function DonateForm() {
  // Type: 'giver' or 'partner'
  const [type, setType] = useState<'giver' | 'partner'>('giver');

  // Common fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Giver fields
  const [amount, setAmount] = useState<number | ''>(50);
  const presets = [25, 50, 100, 250];
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');

  // Partner fields
  const [organization, setOrganization] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function validate() {
    setError(null);
    if (!name.trim()) return 'Please enter your full name.';
    if (!email.trim()) return 'Please enter your email.';
    if (type === 'giver') {
      if (!amount || Number(amount) <= 0) return 'Please provide a valid donation amount.';
    } else {
      if (!organization.trim()) return 'Please enter your organization or church name.';
    }
    return null;
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 800);
  }

  if (success) {
    return (
      <div className="p-6 bg-green-900/60 rounded-lg border border-green-700">
        <h3 className="text-2xl font-bold text-green-200 mb-2">Thank you!</h3>
        {type === 'giver' ? (
          <p className="text-green-100">We received your intention to give ${amount}. We'll follow up by email with next steps.</p>
        ) : (
          <p className="text-green-100">Thank you for your interest in partnering with us. We'll reach out to {organization || 'you'} soon.</p>
        )}
        <button className="mt-4 inline-block px-4 py-2 bg-white/10 rounded-md" onClick={() => setSuccess(false)}>Submit another response</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="p-6 bg-white/3 rounded-lg">
      <fieldset className="mb-4">
        <legend className="sr-only">I am</legend>
        <div className="flex gap-2">
          <label className={`px-3 py-2 rounded-md cursor-pointer ${type === 'giver' ? 'bg-red-600 text-white' : 'bg-transparent text-slate-200 border border-white/10'}`}>
            <input type="radio" name="type" value="giver" checked={type === 'giver'} onChange={() => setType('giver')} className="sr-only" />
            I'm a Giver
          </label>
          <label className={`px-3 py-2 rounded-md cursor-pointer ${type === 'partner' ? 'bg-indigo-600 text-white' : 'bg-transparent text-slate-200 border border-white/10'}`}>
            <input type="radio" name="type" value="partner" checked={type === 'partner'} onChange={() => setType('partner')} className="sr-only" />
            I'm a Partner
          </label>
        </div>
      </fieldset>

      <label className="block text-sm text-slate-100 mb-2">Full name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full mb-3 rounded-md p-2 bg-black/20 border border-white/10 text-white" required />

      <label className="block text-sm text-slate-100 mb-2">Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mb-3 rounded-md p-2 bg-black/20 border border-white/10 text-white" required />

      <label className="block text-sm text-slate-100 mb-2">Phone (optional)</label>
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full mb-3 rounded-md p-2 bg-black/20 border border-white/10 text-white" />


      {error && <div className="text-red-400 mb-3">{error}</div>}

      <div className="flex items-center gap-2 mb-3">
        <input id="consent" type="checkbox" className="w-4 h-4" required />
        <label htmlFor="consent" className="text-sm text-slate-200">I consent to being contacted about my submission</label>
      </div>

      
    </form>
  );
}
