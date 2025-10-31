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
        className="peer w-full px-5 py-4 rounded-lg border-2 border-black bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black text-base"
      />
      <label
        htmlFor={id}
        className="absolute left-4 -top-2 text-xs text-black px-1 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black z-10 bg-white pointer-events-none"
        style={{ backdropFilter: "none" }}
      >
        {label} {required && <span className="text-red-600">*</span>}
      </label>
    </div>
  );

  return (
    <section className="relative  overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Contact Form only — info card removed */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        className=" p-8 md:p-12 space-y-6 text-black"
        >
          <h3 className="text-3xl font-extrabold text-black mb-2">Get in Touch</h3>
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input id="name" label="Full Name" value={formData.name} onChange={handleChange} />
            <Input id="email" label="Email" type="email" value={formData.email} onChange={handleChange} />
          </div>

          <Input id="subject" label="Subject" value={formData.subject} onChange={handleChange} />

          <div>
            <label className="block text-xs text-black mb-2">Message</label>
              <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={8}
                className="w-full px-6 py-5 rounded-lg border-2 border-black bg-white text-black placeholder-gray-400 h-44 resize-none focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black text-base"
              placeholder="Write your message..."
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 mt-2">
            <div className="flex items-center gap-6">
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-12 py-4 rounded-full text-white font-semibold bg-black ${sending ? "opacity-60 cursor-not-allowed" : "hover:brightness-110"}`}
              >
                {sending ? "Sending..." : "Send"}
              </motion.button>
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
 