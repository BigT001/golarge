"use client";

import { useEffect, useRef, useState } from "react";

type Topic = "General" | "Prayer" | "Volunteer" | "Partnership" | "Other";

const DRAFT_KEY = "contact:draft:v1";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<Topic>("General");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // restore draft
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setName(parsed.name || "");
        setEmail(parsed.email || "");
        setTopic(parsed.topic || "General");
        setMessage(parsed.message || "");
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // autosave draft
  useEffect(() => {
    const to = setTimeout(() => {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ name, email, topic, message }));
    }, 500);
    return () => clearTimeout(to);
  }, [name, email, topic, message]);

  function validate() {
    if (!name.trim()) return "Please enter your name.";
    if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return "Please enter a valid email.";
    if (!message.trim()) return "Please enter a message.";
    return null;
  }

  async function handleSend(e?: React.FormEvent) {
    e?.preventDefault();
    setErrorMessage(null);
    const v = validate();
    if (v) {
      setErrorMessage(v);
      setStatus("error");
      return;
    }

    setSending(true);
    setStatus(null);

    // TODO: replace with real API call
    try {
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      setName("");
      setEmail("");
      setTopic("General");
      setMessage("");
      setFiles([]);
      localStorage.removeItem(DRAFT_KEY);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  function handleFilesChange(flist: FileList | null) {
    if (!flist) return;
    const arr = Array.from(flist).slice(0, 3); // limit attachments to 3
    setFiles(arr);
  }

  function removeFile(idx: number) {
    setFiles((s) => s.filter((_, i) => i !== idx));
  }

  // drag and drop
  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    const fl = e.dataTransfer.files;
    handleFilesChange(fl);
  }

  function onDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  async function copyToClipboard(text: string, key: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 1800);
    } catch {}
  }

  return (
    <form onSubmit={handleSend} className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl">
      <div className="md:flex md:gap-8">
        {/* Left: form */}
        <div className="md:flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-1">Get in touch</h2>
              <p className="text-sm text-gray-600">Questions, prayer requests, or to get involved — send us a message and we will respond within 48 hours.</p>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <div className="text-sm text-gray-500">Prefer quick contact?</div>
              <a href="tel:+15551234567" className="px-3 py-2 rounded bg-amber-600 text-white">Call us</a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="text-sm font-medium mb-1">Full name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="Your full name" />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium mb-1">Email</span>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="you@example.com" />
            </label>

            <label className="flex flex-col sm:col-span-2">
              <span className="text-sm font-medium mb-1">Topic</span>
              <div className="flex flex-wrap gap-2">
                {(["General","Prayer","Volunteer","Partnership","Other"] as Topic[]).map((t) => (
                  <button key={t} type="button" onClick={() => setTopic(t)} className={`px-3 py-1 rounded-full text-sm ${topic===t? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                    {t}
                  </button>
                ))}
              </div>
            </label>

            <label className="flex flex-col sm:col-span-2">
              <span className="text-sm font-medium mb-1">Message</span>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="Write your message here" />
            </label>

            <div className="sm:col-span-2">
              <span className="text-sm font-medium mb-2 block">Attachments (optional)</span>
              <div onDrop={onDrop} onDragOver={onDragOver} className="border-2 border-dashed border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4">
                <input ref={fileInputRef} onChange={(e) => handleFilesChange(e.target.files)} type="file" className="hidden" id="contact-files" multiple />
                <label htmlFor="contact-files" className="px-4 py-2 rounded cursor-pointer bg-white/80 border">Choose files</label>
                <div className="text-sm text-gray-500">Drag & drop files here, or click to select (up to 3 files, max 5MB each)</div>
              </div>

              {files.length > 0 && (
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {files.map((f, i) => (
                    <div key={i} className="flex items-center justify-between p-2 border rounded-lg bg-gray-50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-sm text-gray-600">{f.name.split('.').pop()?.toUpperCase()}</div>
                        <div>
                          <div className="text-sm font-medium truncate max-w-[220px]">{f.name}</div>
                          <div className="text-xs text-gray-500">{(f.size / 1024 / 1024).toFixed(2)} MB</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button type="button" onClick={() => removeFile(i)} className="text-sm text-red-500">Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
              <div className="flex items-center gap-4">
                <button type="submit" disabled={sending} className="px-6 py-3 rounded-lg bg-amber-600 text-white font-semibold shadow">
                  {sending ? "Sending..." : "Send Message"}
                </button>
                <button type="button" onClick={() => { setName(''); setEmail(''); setMessage(''); setFiles([]); localStorage.removeItem(DRAFT_KEY); if (fileInputRef.current) fileInputRef.current.value = ''; }} className="px-4 py-2 rounded-lg border">Clear</button>
              </div>

              <div className="text-sm text-gray-600 text-center sm:text-right">
                {status === "success" && <span className="text-green-600">Message sent — we will reply within 48 hours.</span>}
                {status === "error" && <span className="text-red-600">{errorMessage ?? 'There was an issue sending your message. Please try again.'}</span>}
              </div>
            </div>
          </div>
        </div>

        {/* Right: contact card (improved) */}
        <aside className="md:w-80 mt-6 md:mt-0 w-full">
          <div className="rounded-2xl overflow-hidden shadow-md bg-gradient-to-br from-white to-amber-50">
            <div className="p-5">
              <h4 className="text-lg font-semibold mb-1">Contact Office</h4>
              <p className="text-sm text-gray-600">We're here to help. Call, WhatsApp, or email — or use the form and we'll reply within 48 hours.</p>

              <div className="mt-4 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="text-xs text-gray-500">Phone</div>
                    <div className="font-medium">+234 (095) 123-467</div>
                  </div>
                  <div className="flex gap-2">
                    <a href="tel:+234095123467" className="inline-flex items-center justify-center px-3 py-2 rounded bg-amber-600 text-white text-sm">Call</a>
                    <button onClick={() => copyToClipboard('+234095123467','phone')} className="inline-flex items-center justify-center px-3 py-2 rounded border bg-white text-sm">{copied==='phone' ? 'Copied' : 'Copy'}</button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="text-xs text-gray-500">WhatsApp</div>
                    <div className="font-medium">+234 (095) 123-467</div>
                  </div>
                  <div>
                    <a target="_blank" rel="noreferrer" href={`https://wa.me/234095123467?text=${encodeURIComponent("Hello, I would like to get in touch.")}`} className="inline-flex items-center justify-center px-3 py-2 rounded bg-emerald-500 text-white text-sm">Message</a>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <div className="text-xs text-gray-500">Email</div>
                  <a href="mailto:hello@golarge.org" className="text-sm text-amber-600">hello@golarge.org</a>
                </div>

                <div className="pt-2">
                  <div className="text-xs text-gray-500">Office hours</div>
                  <div className="text-sm">Mon — Fri: 9:00am — 5:00pm</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white/60 border-t">
              <div className="text-sm text-gray-700">
                <strong>Address</strong>
                <div className="mt-1">123 Hope Street, Suite 100</div>
                <div>Cityville, State</div>
              </div>

              <div className="mt-3">
                <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=123+Hope+Street" className="inline-block w-full text-center px-3 py-2 rounded bg-sky-50 border text-sky-600 text-sm">Open map</a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </form>
  );
}
