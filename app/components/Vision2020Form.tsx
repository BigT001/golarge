"use client";

import { useState } from "react";

const DRAFT_KEY = "vision-school:draft:v1";

export default function Vision2020Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    spouse: "",
    familySize: "",
    childrenAges: "",
    city: "",
    prayer: ""
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function validate(){
    if(!form.name.trim()) return 'Please enter your name.'
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email.'
    if(!form.prayer.trim()) return 'Please share your prayer request.'
    return null
  }

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    const err = validate()
    if(err){ setStatus('error'); alert(err); return }
    setStatus('sending')

    try{
      // POST to API route (existing route will store to Google Sheets or local fallback)
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        spouse: form.spouse,
        familySize: form.familySize,
        childrenAges: form.childrenAges,
        city: form.city,
        message: form.prayer, // Changed to match spreadsheet column
        subject: "Vision School Registration", // Added for sheet integration
        formType: "vision-school", // Added to identify form type
        createdAt: new Date().toISOString()
      }

      const res = await fetch('/api/vision-school/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if(res.ok){
        setStatus('success')
        setForm({ name: '', email: '', phone: '', spouse: '', familySize: '', childrenAges: '', city: '', prayer: '' })
      } else {
        console.error('submit failed', await res.text())
        setStatus('error')
      }
    }catch(err){
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
      <h3 className="text-xl font-semibold mb-3">Vision School Registration</h3>

      {status === 'success' ? (
        <div className="p-4 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded">Thank you — your Vision School registration has been submitted successfully.</div>
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
            <label className="text-sm text-slate-700 block mb-2">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} className="w-full border border-slate-200 rounded px-3 py-2" placeholder="Optional — +1 555 555 5555" />
          </div>

          <div>
            <label className="text-sm text-slate-700 block mb-2">Spouse / Partner</label>
            <input name="spouse" value={form.spouse} onChange={handleChange} className="w-full border border-slate-200 rounded px-3 py-2" placeholder="Name (optional)" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-700 block mb-2">Family size</label>
              <input name="familySize" value={form.familySize} onChange={handleChange} className="w-full border border-slate-200 rounded px-3 py-2" placeholder="Total members (optional)" />
            </div>

            <div>
              <label className="text-sm text-slate-700 block mb-2">Children ages</label>
              <input name="childrenAges" value={form.childrenAges} onChange={handleChange} className="w-full border border-slate-200 rounded px-3 py-2" placeholder="Comma-separated, e.g. 5,8,12" />
            </div>
          </div>

          <div>
            <label className="text-sm text-slate-700 block mb-2">City / Town</label>
            <input name="city" value={form.city} onChange={handleChange} className="w-full border border-slate-200 rounded px-3 py-2" placeholder="Optional" />
          </div>

          <div>
            <label className="text-sm text-slate-700 block mb-2">Prayer Request</label>
            <textarea name="prayer" value={form.prayer} onChange={handleChange} className="w-full border border-slate-200 rounded px-3 py-2 h-28" />
          </div>

          <div className="flex items-center gap-3">
            <button 
              type="submit" 
              disabled={status === 'sending'} 
              className={`px-4 py-2 bg-gradient-to-r from-blue-600 to-[#dc2626] text-white rounded-md shadow hover:opacity-95 transition ${status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {status === 'sending' ? 'Submitting...' : 'Submit Registration'}
            </button>
            <button 
              type="button" 
              disabled={status === 'sending'}
              onClick={() => { 
                setForm({ name: '', email: '', phone: '', spouse: '', familySize: '', childrenAges: '', city: '', prayer: '' }); 
                setStatus('idle') 
              }} 
              className={`px-4 py-2 border rounded-md text-sm ${status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
