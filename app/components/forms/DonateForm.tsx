"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PartnershipForm() {
  // Partnership Type
  const [partnerType, setPartnerType] = useState<'prayer' | 'financial' | 'ministry'>('prayer');
  
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [role, setRole] = useState('');
  const [commitment, setCommitment] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  const [prayerFocus, setPrayerFocus] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const prayerAreas = [
    'Vision & Direction',
    'Team & Leadership',
    'Resources & Provision',
    'Global Impact',
    'Community Transformation'
  ];

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const Input = ({
    id,
    label,
    type = "text",
    required = false,
    value,
    onChange,
  }: {
    id: string;
    label: string;
    type?: string;
    required?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }) => (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        required={required}
        className="peer w-full px-5 py-4 rounded-lg border border-red-500/20 bg-transparent backdrop-blur-sm text-white placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-base"
      />
      <label
        htmlFor={id}
        className="absolute left-4 -top-2 text-xs text-blue-400 px-1 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 z-10 bg-slate-900/60 pointer-events-none"
        style={{ backdropFilter: "blur(4px)" }}
      >
        {label} {required && <span className="text-red-400">*</span>}
      </label>
    </div>
  );

  function validate() {
    setError(null);
    if (!name.trim()) return 'Please enter your full name.';
    if (!email.trim()) return 'Please enter your email.';
    if (!organization.trim()) return 'Please enter your organization name.';
    if (partnerType === 'prayer' && prayerFocus.length === 0) return 'Please select at least one prayer focus area.';
    if (message.trim().length < 10) return 'Please share more about your vision for partnership.';
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

  function togglePrayerFocus(area: string) {
    setPrayerFocus(current => 
      current.includes(area)
        ? current.filter(a => a !== area)
        : [...current, area]
    );
  }

  function handleReset() {
    setName('');
    setEmail('');
    setPhone('');
    setOrganization('');
    setRole('');
    setCommitment('monthly');
    setPrayerFocus([]);
    setMessage('');
    setError(null);
    setSuccess(false);
    setLoading(false);
    setPartnerType('prayer');
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 bg-gradient-to-b from-white/5 to-white/[0.02] rounded-2xl border border-white/10 shadow-2xl"
      >
        <h3 className="text-2xl font-bold text-white mb-3">Welcome to the Partnership!</h3>
        <p className="text-slate-300 leading-relaxed">
          Thank you for choosing to partner with us as a {partnerType} partner.
          We're excited to join forces with {organization} in advancing Kingdom impact.
          We'll reach out to you within 24 hours to discuss next steps.
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
          onClick={() => setSuccess(false)}
        >
          Submit Another Response
        </motion.button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="max-w-3xl mx-auto p-10 bg-gradient-to-b from-white/5 to-white/[0.02] rounded-2xl border border-white/10 backdrop-blur-md">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-2">Become a Partner</h2>
        <p className="text-sm text-gray-300">Share a brief introduction and how you'd like to partner with us.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Input id="name" label="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <Input id="email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input id="organization" label="Organization" value={organization} onChange={(e) => setOrganization(e.target.value)} required />
        <Input id="role" label="Role" value={role} onChange={(e) => setRole(e.target.value)} required />
      </div>

      <div className="mb-6">
        <label className="block text-xs text-blue-400 mb-2">Share Your Vision for Partnership</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="w-full px-6 py-5 rounded-lg border border-red-500/20 bg-transparent backdrop-blur-sm text-white placeholder-gray-400 h-36 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 text-base"
          placeholder="Describe how you'd like to partner with us..."
          required
        />
      </div>

      {error && (
        <div className="mb-6 p-3 rounded-md text-center bg-rose-900/40 text-rose-200 font-medium">
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className={`px-12 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-red-600 to-blue-600 shadow-[0_18px_50px_rgba(59,130,246,0.12)] ${loading ? 'opacity-60 cursor-not-allowed' : 'hover:scale-105'}`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing...
            </span>
          ) : (
            'Become a Partner'
          )}
        </motion.button>

        <button type="button" onClick={handleReset} className="px-10 py-3 rounded-full bg-white/5 text-gray-200 hover:bg-white/10 transition">
          Clear
        </button>
      </div>

      <p className="mt-6 text-sm text-gray-400 text-center">
        By submitting, you agree to be contacted about your partnership application
      </p>
    </form>
  );
}
