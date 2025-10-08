import ContactForm from "../components/ContactForm";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="py-12">
      <section className="bg-gradient-to-b from-amber-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold">Get in touch</h1>
          <p className="text-lg text-gray-700 mt-2">Questions, prayer requests, volunteering or partnership enquiries — we're here to help. Use the form or reach out directly to the regional office.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-amber-400">
            <h2 className="text-2xl font-semibold mb-4">Contact form</h2>
            <ContactForm />
          </div>

          <div className="mt-6 bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-medium mb-3">FAQ preview</h3>
            <p className="text-sm text-gray-700">Have a question? Check our <Link href="/about#faq" className="text-amber-600 underline">FAQ</Link> or start a conversation using the form. Common topics include volunteering, events, and donations.</p>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-white rounded-xl shadow p-4 border-t-4 border-amber-300">
            <h4 className="font-semibold">Office</h4>
            <p className="text-sm text-gray-600">Golarge International HQ</p>
            <p className="text-sm mt-2">123 Community Lane<br/>Lagos, Nigeria</p>
            <p className="text-sm mt-2">Phone: +234 800 000 0000</p>
            <p className="text-sm">Email: hello@golarge.org</p>
          </div>

          <div className="bg-white rounded-xl shadow p-4 border-t-4 border-sky-300">
            <h4 className="font-semibold">Office hours</h4>
            <ul className="text-sm text-gray-700 mt-2">
              <li>Mon — Fri: 9:00am — 5:00pm</li>
              <li>Sat: 9:00am — 1:00pm</li>
              <li>Sun: Closed</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow p-4 border-t-4 border-emerald-300">
            <h4 className="font-semibold">Find us</h4>
            <div className="w-full h-40 bg-gray-100 rounded mt-3 flex items-center justify-center text-sm text-gray-500">Map placeholder</div>
          </div>
        </aside>
      </div>
    </main>
  );
}
