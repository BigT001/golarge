"use client";

import { useEffect, useState, useCallback } from "react";

const DRAFT_KEY = "contact:draft:v1";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Handle input changes efficiently
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  // Restore draft
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setFormData(prev => ({
          ...prev,
          name: parsed.name || "",
          email: parsed.email || "",
          subject: parsed.subject || "",
          message: parsed.message || ""
        }));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // Autosave draft with debounce
  useEffect(() => {
    const to = setTimeout(() => {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(formData));
    }, 500);
    return () => clearTimeout(to);
  }, [formData]);

  // Validate form
  const validate = useCallback(() => {
    if (!formData.name.trim()) return "Please enter your name.";
    if (!formData.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) return "Please enter a valid email.";
    if (!formData.subject.trim()) return "Please enter a subject.";
    if (!formData.message.trim()) return "Please enter a message.";
    return null;
  }, [formData]);

  // Handle form submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    const validationError = validate();
    if (validationError) {
      setErrorMessage(validationError);
      setStatus("error");
      return;
    }

    setSending(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      localStorage.removeItem(DRAFT_KEY);
    } catch (err) {
      console.error('Form submission error:', err);
      setErrorMessage('Failed to submit form. Please try again.');
      setStatus("error");
    } finally {
      setSending(false);
    }
  }, [formData, validate]);

  // Handle form reset
  const handleReset = useCallback(() => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    localStorage.removeItem(DRAFT_KEY);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl">
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold mb-1">Get in touch</h2>
        <p className="text-sm text-gray-600">Send us a message and we will respond within 48 hours.</p>
      </div>

      <div className="mt-6 space-y-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium mb-1">Full name</span>
          <input 
            name="name"
            value={formData.name} 
            onChange={handleChange} 
            className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300" 
            placeholder="Your full name" 
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium mb-1">Email</span>
          <input 
            name="email"
            type="email"
            value={formData.email} 
            onChange={handleChange} 
            className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300" 
            placeholder="you@example.com" 
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium mb-1">Subject</span>
          <input 
            name="subject"
            value={formData.subject} 
            onChange={handleChange} 
            className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300" 
            placeholder="What is this about?" 
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium mb-1">Message</span>
          <textarea 
            name="message"
            value={formData.message} 
            onChange={handleChange} 
            rows={6} 
            className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300" 
            placeholder="Write your message here" 
          />
        </label>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
          <div className="flex items-center gap-4">
            <button 
              type="submit" 
              disabled={sending} 
              className="px-6 py-3 rounded-lg bg-amber-600 text-white font-semibold shadow hover:bg-amber-700 transition-colors disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
            <button 
              type="button" 
              onClick={handleReset}
              className="px-4 py-2 rounded-lg border hover:bg-gray-50 transition-colors"
            >
              Clear
            </button>
          </div>

          <div className="text-sm text-gray-600 text-center sm:text-right">
            {status === "success" && (
              <span className="text-green-600">Message sent successfully!</span>
            )}
            {status === "error" && (
              <span className="text-red-600">
                {errorMessage ?? 'There was an issue sending your message. Please try again.'}
              </span>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}