"use client";

import { useState, useRef } from "react";

type Topic = "General" | "Prayer" | "Volunteer" | "Partnership" | "Other";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<Topic>("General");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function validate() {
    if (!name.trim()) return "Please enter your name.";
    if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return "Please enter a valid email.";
    if (!message.trim()) return "Please enter a message.";
    return null;
  }

  async function handleSend(e?: React.FormEvent) {
    e?.preventDefault();
    const v = validate();
    if (v) {
      setStatus("error");
      alert(v);
      return;
    }

    setSending(true);
    setStatus(null);

    // Simulate sending (replace with fetch to your API or serverless function)
    try {
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      setName("");
      setEmail("");
      setTopic("General");
      setMessage("");
      setFiles([]);
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

  return (
    <form onSubmit={handleSend} className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="md:flex md:gap-8">
        {/* Left: form */}
        <div className="md:flex-1">
          <h2 className="text-2xl font-semibold mb-2">Get in touch</h2>
          <p className="text-sm text-gray-600 mb-6">Questions, prayer requests, or to get involved — send us a message and we will respond within 48 hours.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="text-sm font-medium mb-1">Full name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} className="border px-3 py-2 rounded" placeholder="Your full name" />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium mb-1">Email</span>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="border px-3 py-2 rounded" placeholder="you@example.com" />
            </label>

            <label className="flex flex-col sm:col-span-2">
              <span className="text-sm font-medium mb-1">Topic</span>
              <select value={topic} onChange={(e) => setTopic(e.target.value as Topic)} className="border px-3 py-2 rounded w-full max-w-sm">
                <option>General</option>
                <option>Prayer</option>
                <option>Volunteer</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>
            </label>

            <label className="flex flex-col sm:col-span-2">
              <span className="text-sm font-medium mb-1">Message</span>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} className="border px-3 py-2 rounded" placeholder="Write your message here" />
            </label>

            <div className="flex flex-col sm:col-span-2">
              <span className="text-sm font-medium mb-2">Attachments (optional)</span>
              <div className="flex items-center gap-3">
                <input ref={fileInputRef} onChange={(e) => handleFilesChange(e.target.files)} type="file" className="hidden" id="contact-files" multiple />
                <label htmlFor="contact-files" className="px-4 py-2 rounded border cursor-pointer">Choose files</label>
                <div className="text-sm text-gray-500">You may attach up to 3 files. Max size per file: 5MB.</div>
              </div>

              {files.length > 0 && (
                <div className="mt-3 space-y-2">
                  {files.map((f, i) => (
                    <div key={i} className="flex items-center justify-between p-2 border rounded">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-sm">{f.name.split(":").pop()?.slice(-1) || "F"}</div>
                        <div>
                          <div className="text-sm font-medium">{f.name}</div>
                          <div className="text-xs text-gray-500">{(f.size / 1024 / 1024).toFixed(2)} MB</div>
                        </div>
                      </div>
                      <button type="button" onClick={() => removeFile(i)} className="text-sm text-red-500">Remove</button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="sm:col-span-2 flex items-center justify-between mt-4">
              <div className="flex items-center gap-4">
                <button type="submit" disabled={sending} className="px-5 py-2 rounded bg-foreground text-background font-semibold">
                  {sending ? "Sending..." : "Send Message"}
                </button>

                
              </div>

              <div className="text-sm text-gray-600">
                {status === "success" && <span className="text-green-600">Message sent — we will reply within 48 hours.</span>}
                {status === "error" && <span className="text-red-600">There was an issue sending your message. Please try again.</span>}
              </div>
            </div>
          </div>
        </div>

        {/* Right: contact card */}
        <aside className="md:w-80 mt-6 md:mt-0">
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <img src="/pastor1.png" alt="Contact" className="w-full h-44 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-semibold">Contact Office</h4>
              <p className="text-sm text-gray-600">We're here to help. Call or message us directly via WhatsApp.</p>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-500">Phone</div>
                    <div className="font-medium">+234 (095) 123-467</div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <a href="tel:+15551234567" className="px-3 py-1 rounded bg-green-600 text-white text-sm">Call</a>
                    <button onClick={() => { navigator.clipboard?.writeText("+15551234567"); alert("Phone number copied"); }} className="px-2 py-1 border rounded text-sm">Copy</button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-500">WhatsApp</div>
                    <div className="font-medium">+234 (095) 123-467</div>
                  </div>
                  <a target="_blank" rel="noreferrer" href={`https://wa.me/15551234567?text=${encodeURIComponent("Hello, I would like to get in touch.")}`} className="px-3 py-1 rounded bg-emerald-500 text-white text-sm">Message</a>
                </div>

                <div>
                  <div className="text-xs text-gray-500">Office hours</div>
                  <div className="text-sm">Mon - Fri, 9:00 AM - 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <strong>Address</strong>
            <div>123 Hope Street, Suite 100</div>
            <div>Cityville, State</div>
          </div>
        </aside>
      </div>
    </form>
  );
}
