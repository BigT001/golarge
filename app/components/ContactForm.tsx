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

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT — Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl p-10 shadow-xl"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Let’s Connect & Build Together
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Whether you have a question, need guidance, or want to collaborate —
            we’d love to hear from you. Reach out and let’s turn ideas into
            impact.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Phone size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Phone</p>
                <a
                  href="tel:+15551234567"
                  className="text-blue-600 hover:underline"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Mail size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <a
                  href="mailto:contact@visionschool.org"
                  className="text-blue-600 hover:underline"
                >
                  contact@visionschool.org
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <MapPin size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Location</p>
                <p className="text-gray-600">Global Online Community</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-sm text-gray-500 italic">
            “We respond to all messages within 48 hours — because every
            connection matters.”
          </div>
        </motion.div>

        {/* RIGHT — Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 p-8 md:p-10 rounded-3xl shadow-xl space-y-5"
        >
          <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
            Get in Touch
          </h3>
          <p className="text-gray-600 text-sm">
            Send us a message — we’ll reply within 48 hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="text-sm font-semibold mb-1 text-gray-700">
                Full Name
              </span>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="rounded-lg px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Your name"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-semibold mb-1 text-gray-700">
                Email
              </span>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-lg px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-sm font-semibold mb-1 text-gray-700">
              Subject
            </span>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="rounded-lg px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="What is this about?"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-semibold mb-1 text-gray-700">
              Message
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="rounded-lg px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Write your message..."
            />
          </label>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
            <div className="flex items-center gap-4">
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-pink-600 shadow-lg hover:opacity-95 transition"
              >
                {sending ? "Sending..." : "Send Message"}
              </motion.button>

              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
              >
                Clear
              </button>
            </div>

            <div className="text-sm text-gray-600 text-center sm:text-right">
              {status === "success" && (
                <span className="text-green-600 font-medium">
                  ✅ Message sent successfully!
                </span>
              )}
              {status === "error" && (
                <span className="text-red-600 font-medium">
                  ❌ {errorMessage ?? "There was an issue. Please try again."}
                </span>
              )}
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
