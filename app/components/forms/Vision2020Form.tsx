"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Vision2020Form() {
  const [form, setForm] = useState({
    familyName: "",
    email: "",
    phone: "",
    country: "",
    child1: "",
    child2: "",
    child3: "",
    child4: "",
    child5: "",
    specialPrayer: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    if (!form.familyName.trim()) return "Please enter your family full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email address.";
    if (!form.phone.trim()) return "Please enter a phone number.";
    if (!form.country.trim()) return "Please enter your country.";
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate();
    if (err) return alert(err);
    setStatus("sending");

    try {
      const payload = {
        ...form,
        children: [form.child1, form.child2, form.child3, form.child4, form.child5].filter(Boolean),
        formType: "vision-2020-prayer",
        createdAt: new Date().toISOString(),
      };

      const res = await fetch("/api/vision-school/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        setForm({
          familyName: "",
          email: "",
          phone: "",
          country: "",
          child1: "",
          child2: "",
          child3: "",
          child4: "",
          child5: "",
          specialPrayer: "",
        });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative overflow-hidden">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#ffe4e6,_#e0f2fe,_#fef3c7)] opacity-50 animate-gradient-flow -z-10"></div>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* --- LEFT FORM --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-2/3 bg-white/50 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/30"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              20 Years of Prayer Investment
            </h2>
            <p className="text-slate-600 mb-6">
              Join this generational movement — register your family below and secure a covenant of blessing.
            </p>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3 rounded-md mb-5 text-center bg-emerald-100 text-emerald-800"
              >
                🎉 Thank you — your submission has been received!
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Modern Floating Input Component */}
              {[
                { label: "Family Full Name", name: "familyName", required: true },
                { label: "Email Address", name: "email", type: "email", required: true },
                { label: "Phone Number", name: "phone", required: true },
                { label: "Country", name: "country", required: true },
              ].map((field, i) => (
                <div key={i} className="relative">
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    required={field.required}
                    placeholder=" "
                    className="peer w-full px-4 py-3 rounded-lg border border-slate-300 bg-transparent focus:border-blue-500 focus:ring-0 outline-none placeholder-transparent"
                  />
                  <label
                    htmlFor={field.name}
                    className="absolute left-4 top-3 text-slate-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-slate-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 bg-white/50 px-1"
                  >
                    {field.label} {field.required && <span className="text-rose-600">*</span>}
                  </label>
                </div>
              ))}

              {/* Children */}
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="relative">
                  <input
                    name={`child${n}`}
                    value={form[`child${n}` as keyof typeof form]}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full px-4 py-3 rounded-lg border border-slate-300 bg-transparent focus:border-blue-500 focus:ring-0 outline-none placeholder-transparent"
                  />
                  <label
                    htmlFor={`child${n}`}
                    className="absolute left-4 top-3 text-slate-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-slate-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 bg-white/50 px-1"
                  >
                    Child {n}
                  </label>
                </div>
              ))}

              {/* Special Prayer Request */}
              <div className="md:col-span-2 relative">
                <textarea
                  name="specialPrayer"
                  value={form.specialPrayer}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full px-4 py-3 rounded-lg border border-slate-300 bg-transparent focus:border-blue-500 focus:ring-0 outline-none h-32 placeholder-transparent"
                />
                <label
                  htmlFor="specialPrayer"
                  className="absolute left-4 top-3 text-slate-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-slate-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 bg-white/50 px-1"
                >
                  Special Prayer Request
                </label>
              </div>

              {/* Buttons */}
              <div className="md:col-span-2 flex items-center gap-4 mt-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-red-600 to-blue-600 shadow-lg transition-all ${
                    status === "sending" ? "opacity-60 cursor-not-allowed" : "hover:scale-105"
                  }`}
                >
                  {status === "sending" ? "Submitting..." : "Submit"}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setForm({
                      familyName: "",
                      email: "",
                      phone: "",
                      country: "",
                      child1: "",
                      child2: "",
                      child3: "",
                      child4: "",
                      child5: "",
                      specialPrayer: "",
                    })
                  }
                  className="px-6 py-3 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-50 transition-all"
                >
                  Reset
                </button>
              </div>
            </form>
          </motion.div>

          {/* --- RIGHT IMAGE --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-2/5 flex justify-center"
          >
            <Image
              src="/galleryimages/vision2020-poster.jpeg"
              alt="Vision 2020 poster"
              width={2400}
              height={1440}
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
