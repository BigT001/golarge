"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid email.";
    if (!form.prayer.trim()) return "Please share your prayer request.";
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus("error");
      alert(err);
      return;
    }
    setStatus("sending");

    try {
      const payload = {
        ...form,
        message: form.prayer,
        subject: "Vision School Registration",
        formType: "vision-school",
        createdAt: new Date().toISOString()
      };

      const res = await fetch("/api/vision-school/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          spouse: "",
          familySize: "",
          childrenAges: "",
          city: "",
          prayer: ""
        });
      } else {
        console.error("submit failed", await res.text());
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-[#002a5c] via-[#1e3a8a] to-[#e11d48] flex justify-center items-center overflow-hidden">
      {/* Background overlay for softness */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-2xl bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-10 sm:p-12"
      >
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold text-center bg-gradient-to-r from-[#002a5c] to-[#e11d48] bg-clip-text text-transparent mb-6"
        >
          Vision School Registration
        </motion.h3>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 bg-emerald-100 text-emerald-800 text-center rounded-xl"
          >
            🎉 Thank you! Your registration has been received successfully.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-semibold text-slate-700 block mb-2">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 bg-white/70 focus:ring-2 focus:ring-[#e11d48] outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 block mb-2">
                  Email
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 bg-white/70 focus:ring-2 focus:ring-[#e11d48] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-semibold text-slate-700 block mb-2">
                  Phone
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 bg-white/70 focus:ring-2 focus:ring-[#e11d48] outline-none"
                  placeholder="Optional"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 block mb-2">
                  Spouse / Partner
                </label>
                <input
                  name="spouse"
                  value={form.spouse}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 bg-white/70 focus:ring-2 focus:ring-[#e11d48] outline-none"
                  placeholder="Optional"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-semibold text-slate-700 block mb-2">
                  Family Size
                </label>
                <input
                  name="familySize"
                  value={form.familySize}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 bg-white/70 focus:ring-2 focus:ring-[#e11d48] outline-none"
                  placeholder="Optional"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 block mb-2">
                  Children Ages
                </label>
                <input
                  name="childrenAges"
                  value={form.childrenAges}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 bg-white/70 focus:ring-2 focus:ring-[#e11d48] outline-none"
                  placeholder="e.g. 5, 8, 12"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-2">
                City / Town
              </label>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-3 bg-white/70 focus:ring-2 focus:ring-[#e11d48] outline-none"
                placeholder="Optional"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-2">
                Prayer Request
              </label>
              <textarea
                name="prayer"
                value={form.prayer}
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-3 bg-white/70 focus:ring-2 focus:ring-[#e11d48] outline-none h-32"
              />
            </div>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-[#002a5c] to-[#e11d48] shadow-md hover:shadow-lg hover:opacity-95 transition ${
                  status === "sending" ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {status === "sending" ? "Submitting..." : "Submit Registration"}
              </motion.button>

              <button
                type="button"
                onClick={() => {
                  setForm({
                    name: "",
                    email: "",
                    phone: "",
                    spouse: "",
                    familySize: "",
                    childrenAges: "",
                    city: "",
                    prayer: ""
                  });
                  setStatus("idle");
                }}
                className="px-6 py-2 text-slate-700 bg-white/70 rounded-lg hover:bg-white transition font-medium shadow-sm"
              >
                Reset
              </button>
            </motion.div>
          </form>
        )}
      </motion.div>
    </section>
  );
}
