"use client"

import { useState } from 'react'

export default function VisionSignupForm(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  const Input = ({
    id,
    label,
    type = 'text',
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
        className="peer w-full px-5 py-4 rounded-lg border border-gray-700/40 bg-transparent backdrop-blur-sm text-white placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-base"
      />
      <label
        htmlFor={id}
        className="absolute left-4 -top-2 text-xs text-blue-400 px-1 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 z-10 bg-slate-900/60 pointer-events-none"
        style={{ backdropFilter: 'blur(4px)' }}
      >
        {label} {required && <span className="text-red-400">*</span>}
      </label>
    </div>
  )

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    setStatus('loading')
    try{
      const res = await fetch('/api/vision-school/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, notes, createdAt: new Date().toISOString() })
      })
      if(res.ok){
        setStatus('success')
        setName('')
        setEmail('')
        setNotes('')
      } else {
        setStatus('error')
      }
    }catch(err){
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl p-8 bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input id="name" label="Full Name" value={name} onChange={e => setName(e.target.value)} required />
        <Input id="email" label="Email address" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <Input id="phone" label="Phone number" value={phone} onChange={e => setPhone(e.target.value)} />
      </div>

      <div>
        <label htmlFor="notes" className="block text-xs text-blue-400 mb-2">Your vision & goals</label>
        <textarea
          id="notes"
          name="notes"
          value={notes}
          onChange={e => setNotes(e.target.value)}
          rows={5}
          className="w-full px-6 py-5 rounded-lg border border-red-500/20 bg-transparent backdrop-blur-sm text-white placeholder-gray-400 h-36 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 text-base"
          placeholder="Briefly share what you're hoping to achieve through Vision School (optional)"
        />
        <p className="mt-1 text-xs text-gray-300">Optional — help us understand your goals</p>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-10 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-red-600 to-blue-600 shadow-[0_18px_50px_rgba(59,130,246,0.12)] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status==='loading' ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white/80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : 'Begin Your Journey'}
        </button>
      </div>

      {status === 'success' && (
        <div className="rounded-md p-4 text-center bg-emerald-900/40 text-emerald-200 border border-emerald-500/20">
          <p className="font-medium">Application received — we'll be in touch soon.</p>
        </div>
      )}
      
      {status === 'error' && (
        <div className="rounded-md p-4 text-center bg-rose-900/40 text-rose-200 border border-rose-500/20">
          <p className="font-medium">Submission error — please try again.</p>
        </div>
      )}
    </form>
  )
}
