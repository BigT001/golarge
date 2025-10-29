"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const DRAFT_KEY = "contact:draft:v1";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  // Restore draft
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setFormData({
          name: parsed.name || "",
          email: parsed.email || "",
          subject: parsed.subject || "",
          message: parsed.message || ""
        });
      }
    } catch {}
  }, []);

  // Autosave draft
  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(formData));
    }, 500);
    return () => clearTimeout(timeout);
  }, [formData]);

  const validate = useCallback(() => {
    if (!formData.name.trim()) return "Please enter your name.";
    if (
      !formData.email.trim() ||
      !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)
    )
      return "Please enter a valid email.";
    if (!formData.subject.trim()) return "Please enter a subject.";
    if (!formData.message.trim()) return "Please enter a message.";
    return null;
  }, [formData]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
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
        const response = await fetch("/api/contact/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString()
          })
        });

        if (!response.ok) throw new Error("Failed to submit form");

        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        localStorage.removeItem(DRAFT_KEY);
      } catch (err) {
        console.error("Form submission error:", err);
        setErrorMessage("Failed to submit form. Please try again.");
        setStatus("error");
      } finally {
        setSending(false);
      }
    },
    [formData, validate]
  );

  const handleReset = useCallback(() => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    localStorage.removeItem(DRAFT_KEY);
  }, []);

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
        className="peer w-full px-5 py-4 rounded-lg border border-gray-700/40 bg-transparent backdrop-blur-sm text-white placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-base"
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

  return (
    <section className="relative  overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* LEFT — Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl p-12 shadow-2xl"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">Let’s Connect & Build Together</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Whether you have a question, need guidance, or want to collaborate —
            we’d love to hear from you. Reach out and let’s turn ideas into impact.
          </p>

            <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                <Phone size={22} className="text-indigo-300" />
              </div>
              <div>
                <p className="font-semibold text-white">Phone</p>
                <a href="tel:+15551234567" className="text-indigo-300 hover:underline">+1 (555) 123-4567</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                <Mail size={22} className="text-indigo-300" />
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <a href="mailto:contact@visionschool.org" className="text-indigo-300 hover:underline">contact@visionschool.org</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                <MapPin size={22} className="text-indigo-300" />
              </div>
              <div>
                <p className="font-semibold text-white">Location</p>
                <p className="text-gray-300">Global Online Community</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-sm text-gray-400 italic">“We respond to all messages within 48 hours — because every connection matters.”</div>
        </motion.div>

        {/* RIGHT — Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 p-12 md:p-14 rounded-3xl shadow-2xl space-y-6"
        >
          <h3 className="text-3xl font-extrabold text-white mb-2">Get in Touch</h3>
          <p className="text-gray-300 text-sm">Send us a message — we’ll reply within 48 hours.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input id="name" label="Full Name" value={formData.name} onChange={handleChange} />
            <Input id="email" label="Email" type="email" value={formData.email} onChange={handleChange} />
          </div>

          <Input id="subject" label="Subject" value={formData.subject} onChange={handleChange} />

          <div>
            <label className="block text-xs text-blue-400 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={8}
              className="w-full px-6 py-5 rounded-lg border border-gray-700/40 bg-transparent backdrop-blur-sm text-white placeholder-gray-400 h-44 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 text-base"
              placeholder="Write your message..."
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 mt-2">
            <div className="flex items-center gap-6">
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`px-12 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-red-600 to-blue-600 shadow-[0_18px_50px_rgba(59,130,246,0.12)] ${sending ? "opacity-60 cursor-not-allowed" : "hover:scale-105"}`}
              >
                {sending ? "Sending..." : "Send"}
              </motion.button>

              <button
                type="button"
                onClick={handleReset}
                className="px-10 py-3 rounded-full bg-white/5 text-gray-200 hover:bg-white/10 transition"
              >
                Clear
              </button>
            </div>

            <div className="text-sm text-gray-300 text-center sm:text-right">
              {status === "success" && (
                <span className="text-emerald-400 font-medium">✅ Message sent successfully!</span>
              )}
              {status === "error" && (
                <span className="text-rose-400 font-medium">❌ {errorMessage ?? "There was an issue. Please try again."}</span>
              )}
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
 