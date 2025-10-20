"use client"

import { useState } from 'react'

export default function VisionSignupForm(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    setStatus('loading')
    try{
      const res = await fetch('/api/vision-school/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, notes, createdAt: new Date().toISOString() })
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
    <form onSubmit={handleSubmit} className="space-y-6 backdrop-blur-sm rounded-xl p-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-50"></div>
      <div className="absolute inset-x-0 -top-40 -bottom-40 [background:radial-gradient(circle_500px_at_50%_50%,rgba(255,255,255,0.15),transparent)] animate-pulse"></div>
      
      <div className="relative space-y-4">
        <div className="relative group">
          <label className="block text-sm font-medium text-white/90 mb-1 group-hover:text-white transition-colors">
            Full Name
          </label>
          <div className="relative overflow-hidden rounded-lg">
            <input 
              required 
              value={name} 
              onChange={e=>setName(e.target.value)} 
              className="w-full bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 
                focus:border-white/30 focus:ring-2 focus:ring-white/20 transition-all duration-300 outline-none
                backdrop-blur-lg group-hover:bg-white/[0.15]"
              placeholder="Enter your full name" 
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
        </div>

        <div className="relative group">
          <label className="block text-sm font-medium text-white/90 mb-1">Email Address</label>
          <div className="relative">
            <input 
              required 
              type="email" 
              value={email} 
              onChange={e=>setEmail(e.target.value)} 
              className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-white/20 focus:ring-2 focus:ring-white/10 transition-all duration-200 outline-none"
              placeholder="Enter your email address" 
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
          <p className="mt-1 text-xs text-white/60">We'll send program updates to this address</p>
        </div>

        <div className="relative group">
          <label className="block text-sm font-medium text-white/90 mb-1">Your Vision & Goals</label>
          <div className="relative">
            <textarea 
              value={notes} 
              onChange={e=>setNotes(e.target.value)} 
              className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-white/20 focus:ring-2 focus:ring-white/10 transition-all duration-200 outline-none resize-none" 
              rows={4} 
              placeholder="Share briefly about your vision and what you hope to achieve through the Vision School program..."
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
          <p className="mt-1 text-xs text-white/60">Optional - Help us understand your goals</p>
        </div>
      </div>

      <div className="relative">
        <button 
          type="submit" 
          disabled={status==='loading'} 
          className="w-full bg-gradient-to-r from-white/90 to-white/80 hover:from-white hover:to-white/90 text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
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

      {status==='success' && (
        <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-4 animate-fade-in backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex-none w-8 h-8 rounded-full bg-emerald-500 text-white grid place-items-center animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <p className="text-emerald-400 font-medium">Application Received!</p>
              <p className="text-sm text-emerald-300 mt-1">We'll be in touch soon with next steps.</p>
            </div>
          </div>
        </div>
      )}
      
      {status==='error' && (
        <div className="rounded-lg bg-rose-500/10 border border-rose-500/20 p-4 animate-fade-in backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex-none w-8 h-8 rounded-full bg-rose-500 text-white grid place-items-center animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </div>
            <div>
              <p className="text-rose-400 font-medium">Submission Error</p>
              <p className="text-sm text-rose-300 mt-1">Please try again or contact support if the issue persists.</p>
            </div>
          </div>
        </div>
      )}
    </form>
  )
}
