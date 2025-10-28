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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!form.familyName.trim()) return "Please enter your family full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email address.";
    if (!form.phone.trim()) return "Please enter a phone number.";
    if (!form.country.trim()) return "Please enter your country.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
  };

  const resetForm = () =>
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
        className="peer w-full px-5 py-4 rounded-lg border border-red-500/20 bg-transparent backdrop-blur-sm text-white placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-base"
      />
      <label
        htmlFor={id}
        className="absolute left-4 -top-2 text-xs text-blue-400 px-1 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 z-10 bg-slate-900/60 pointer-events-none"
        style={{ backdropFilter: 'blur(4px)' }}
      >
        {label} {required && <span className="text-red-400">*</span>}
      </label>
    </div>
  );

  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          {/* Form (left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/5 p-12 rounded-2xl border border-gray-800/40"
          >
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Vision 2020 Registration</h2>
              <p className="text-lg text-gray-300 mb-8">Join our 20-year prayer investment movement. Register your family below.</p>

              {status === "success" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 rounded-md mb-5 text-center bg-emerald-900/40 text-emerald-200 border border-emerald-500/20">
                  🎉 Thank you — your submission has been received!
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-10">
                <Input id="familyName" label="Family Full Name" value={form.familyName} onChange={handleChange} required />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <Input id="email" label="Email Address" type="email" value={form.email} onChange={handleChange} required />
                  <Input id="phone" label="Phone Number" type="tel" value={form.phone} onChange={handleChange} required />
                </div>

                <Input id="country" label="Country" value={form.country} onChange={handleChange} required />

                <div className="space-y-4">
                  <p className="text-sm text-gray-400">Optional — children's names</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Input id="child1" label="Child 1" value={form.child1} onChange={handleChange} />
                    <Input id="child2" label="Child 2" value={form.child2} onChange={handleChange} />
                    <Input id="child3" label="Child 3" value={form.child3} onChange={handleChange} />
                    <Input id="child4" label="Child 4" value={form.child4} onChange={handleChange} />
                    <Input id="child5" label="Child 5" value={form.child5} onChange={handleChange} />
                  </div>
                </div>

                <div>
                  <label htmlFor="specialPrayer" className="block text-xs text-blue-400 mb-2">Special Prayer Request</label>
                  <textarea
                    id="specialPrayer"
                    name="specialPrayer"
                    value={form.specialPrayer}
                    onChange={handleChange}
                    className="w-full px-6 py-5 rounded-lg border border-red-500/20 bg-transparent backdrop-blur-sm text-white placeholder-gray-400 h-44 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 text-base"
                    placeholder="Share any requests or intentions"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-8 mt-6">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`w-full sm:w-auto inline-flex items-center justify-center px-12 py-5 rounded-full font-semibold text-white bg-gradient-to-r from-red-600 to-blue-600 shadow-[0_18px_50px_rgba(59,130,246,0.18)] transition-transform ${
                      status === "sending" ? "opacity-60 cursor-not-allowed" : "hover:scale-105"
                    }`}
                  >
                    {status === "sending" ? "Submitting..." : "Submit Registration"}
                  </button>

                  <button type="button" onClick={resetForm} className="w-full sm:w-auto px-10 py-4 rounded-full border border-red-500/20 text-gray-300 hover:bg-gray-900/20">
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Image (right) */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full lg:w-2/5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_35px_rgba(59,130,246,0.12)] border-2 border-blue-500/20">
              <Image src="/galleryimages/vision2020-poster.jpeg" alt="Vision 2020 poster" width={1600} height={900} className="w-full h-auto object-cover" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
