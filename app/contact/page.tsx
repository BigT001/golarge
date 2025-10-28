import ContactForm from "../components/forms/ContactForm";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-black to-black text-white">
      <div className="absolute inset-0 bg-[url('/logofolder/golargelogo.png')] bg-center bg-no-repeat opacity-[0.02] bg-fixed"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/12 rounded-full blur-3xl"></div>
      <div className="absolute top-24 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>

      <section className="relative pt-12 pb-8">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-white via-indigo-200 to-rose-200 bg-clip-text text-transparent leading-tight">
            Get in touch
          </h1>
          <p className="text-lg text-slate-300 mt-2">Questions, prayer requests, volunteering or partnership enquiries — we're here to help. Use the form or reach out directly to the regional office.</p>
        </div>
      </section>

      <div className=" mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-3xl p-6 border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-md shadow-2xl">
            <div className="border-l-4 border-red-500/40 pl-4">
              {/* <h2 className="text-2xl font-semibold mb-4 text-white">Contact form</h2> */}
              <ContactForm />
            </div>
          </div>

          {/* <div className="mt-6 rounded-3xl p-6 border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm shadow-2xl">
            <h3 className="text-lg font-medium mb-3 text-white">FAQ preview</h3>
            <p className="text-sm text-gray-300">Have a question? Check our <Link href="/about#faq" className="text-red-400 underline">FAQ</Link> or start a conversation using the form. Common topics include volunteering, events, and donations.</p>
          </div> */}
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl p-4 border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm shadow-2xl">
            <h4 className="font-semibold text-white">Office</h4>
            <p className="text-sm text-gray-300">Golarge International HQ</p>
            <p className="text-sm mt-2 text-gray-300">123 Community Lane<br/>Lagos, Nigeria</p>
            <p className="text-sm mt-2 text-gray-300">Phone: +234 800 000 0000</p>
            <p className="text-sm text-gray-300">Email: hello@golarge.org</p>
          </div>

          <div className="rounded-3xl p-4 border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm shadow-2xl">
            <h4 className="font-semibold text-white">Office hours</h4>
            <ul className="text-sm text-gray-300 mt-2">
              <li>Mon — Fri: 9:00am — 5:00pm</li>
              <li>Sat: 9:00am — 1:00pm</li>
              <li>Sun: Closed</li>
            </ul>
          </div>

          <div className="rounded-3xl p-4 border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm shadow-2xl">
            {/* <h4 className="font-semibold text-white">Find us</h4> */}
            <div className="w-full h-40 bg-gradient-to-b from-white/5 to-white/[0.02] rounded mt-3 flex items-center justify-center text-sm text-gray-400">Map placeholder</div>
          </div>
        </aside>
      </div>
    </main>
  );
}
