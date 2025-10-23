"use client"

import { useState } from 'react'

export default function VisionSignupForm(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

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
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl p-6 relative bg-white border border-slate-100 shadow-sm">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <input
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none"
            placeholder="Full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email address</label>
          <input
            required
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none"
            placeholder="you@domain.com"
          />
          <p className="mt-1 text-xs text-slate-500">We'll send program updates to this address</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Phone number</label>
          <input
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none"
            placeholder="Optional — +1 555 555 5555"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Your vision & goals</label>
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none resize-none"
            rows={4}
            placeholder="Briefly share what you're hoping to achieve through Vision School (optional)"
          />
          <p className="mt-1 text-xs text-slate-500">Optional — help us understand your goals</p>
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-red-600 to-[#002a5c] shadow-lg hover:opacity-95 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status==='loading' ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-blue-900/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : 'Begin Your Journey'}
        </button>
      </div>

      {status === 'success' && (
        <div className="rounded-lg bg-emerald-50 border border-emerald-100 p-4">
          <div className="flex items-center gap-3">
            <div className="flex-none w-8 h-8 rounded-full bg-emerald-500 text-white grid place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <p className="text-emerald-700 font-medium">Application received</p>
              <p className="text-sm text-emerald-600 mt-1">We'll be in touch soon with next steps.</p>
            </div>
          </div>
        </div>
      )}
      
      {status === 'error' && (
        <div className="rounded-lg bg-rose-50 border border-rose-100 p-4">
          <div className="flex items-center gap-3">
            <div className="flex-none w-8 h-8 rounded-full bg-rose-500 text-white grid place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </div>
            <div>
              <p className="text-rose-700 font-medium">Submission error</p>
              <p className="text-sm text-rose-600 mt-1">Please try again or contact support if the issue persists.</p>
            </div>
          </div>
        </div>
      )}
    </form>
  )
}
